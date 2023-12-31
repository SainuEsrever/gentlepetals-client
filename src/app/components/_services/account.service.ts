import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../_models/users';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  url = 'http://localhost:3000/api/auth'
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor( 
    private _http: HttpClient,
    private _router:Router,
    ) { 
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = this.userSubject.asObservable();
    }

  public get userValue() {
    return this.userSubject.value;
  } 

  login(email: string, password: string) {
    return this._http.post<User>(`${this.url}/signin`, { email, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
  }
  register(user: User) {
    return this._http.post(`${this.url}/signup`, user);
  }
 
}


