import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Order } from '../_models/order';
import { Product } from '../_models/product';
import { Billing } from '../_models/billing';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url:string = "http://localhost:3000/api"
  private orderId: string = "658efced7a02034ceb2988d9";
  private billId: string = "658f020111fc51b0cca8f938";

  constructor(private _http: HttpClient) { }

  getOrderId(){
    return this.orderId;
  }

  getBillId(){
    return this.billId;
  }

  getOrder(id:string): Observable<any>{
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>(`${this.url}/order/` + id, requestOptions).pipe(
      map(res => JSON.parse(res) as Order),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

  // get profile by id
  getProfile(id:string):Observable<any>{
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>(`${this.url}/auth/` + id, requestOptions).pipe(
      map(res => JSON.parse(res)),
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

  // get bill by id
  getBill(id:string): Observable<any>{
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>(`${this.url}/billing/` + id, requestOptions).pipe(
      map(res => JSON.parse(res) as Billing),
      retry(3),
      catchError(this.handleError))
  }
}
