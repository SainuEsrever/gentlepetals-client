import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  private apiUrl: string = 'http://localhost:3000/api';
  private products$: Observable<Product[]>;

  constructor(private httpClient: HttpClient) {
    this.products$ = this.httpClient.get<any>(`${this.apiUrl}/product`).pipe(
      map(response => response.data.docs),
      retry(2),
      catchError(this.handleError)
    );
  }

  getProducts(): Observable<Product[]> {
    return this.products$;
  }

  getProductDetail(id: string): Observable<Product> {
    return this.products$.pipe(
      map((products: Product[]) => {
        const foundProduct = products.find(product => product._id === id);
        if (foundProduct) {
          return foundProduct;
        } else {
          throw new Error(`Product with ID ${id} not found`);
        }
      }),
      catchError(this.handleError)
    );
  }

  searchProducts(keyword: string): Observable<Product[]> {
    return this.products$.pipe(
      map(products => products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase())))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('HTTP Error:', error);
    return throwError(() => new Error(error.message));
  }
}
