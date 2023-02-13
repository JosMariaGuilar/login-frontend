import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private BASE_URL = 'http://localhost:3000/auth/signin';

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.BASE_URL}`, user);
  }
}
