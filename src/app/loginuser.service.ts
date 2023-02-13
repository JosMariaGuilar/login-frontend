import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private SIGNIN_URL = 'http://localhost:3000/auth/signin';

  constructor(private httpClient: HttpClient) { }

  loginUser(user: User): Observable<object> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    const request = this.httpClient.post(this.SIGNIN_URL, user, httpOptions);
    console.log(request);
    return request;
  }
}
