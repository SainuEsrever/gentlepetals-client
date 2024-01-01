import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  id:any;

  constructor(private http: HttpClient) {}

  changePassword(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/change-password `+ this.id, data);
  }
}
