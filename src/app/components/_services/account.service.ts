import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = 'http://localhost:3000/api/auth/signin'

  constructor( private _http: HttpClient ) { }

  onLogin(email: any, password: any):Observable<any>{
    return this._http.post(this.url, email, password)
  }
 
}


