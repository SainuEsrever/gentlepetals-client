import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Product } from '../_models/product';
import { Cart } from '../_models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url:string = "http://localhost:3000/api"
  constructor(private _http: HttpClient) { }
  // get cart by id
  getCart(id: string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>(`${this.url}/cart/` + id, requestOptions).pipe(
      map(res => JSON.parse(res) as Cart),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

  //update cart by id
  putCart(aCart:any, id:string): Observable<any>{
    const headers = new HttpHeaders().set("Content-Type", "application/json;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.put<any>(`${this.url}/cart/` + id, JSON.stringify(aCart),requestOptions).pipe(
      map(res => JSON.parse(res) as Cart),
      retry(3),
      catchError(this.handleError))
  }

  //get product by id
  getProduct(id:string): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>(`${this.url}/product/` + id, requestOptions).pipe(
      map(res => JSON.parse(res) as Product),
      retry(3),
      catchError(this.handleError))
  }
}
