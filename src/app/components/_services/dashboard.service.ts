import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private url:string = "http://localhost:3000/api";
  Id: string = "658d85af2e1a9bb0863b2647";

  constructor(private _http: HttpClient) { }

  getProfileId(){
    return this.Id;
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }

  //
  

  getProfilebyId():Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>(`${this.url}/auth/${this.Id}` , requestOptions).pipe(
      map(res => JSON.parse(res)),
      retry(3),
      catchError(this.handleError))

  }

  changeProfile(data:any):Observable<any>{
    
    return this._http.patch<any>(`${this.url}/auth/${this.Id}`,data )
  }
}
