import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlUser = 'http://127.0.0.1:5000/api/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpclient: HttpClient) {}

  registerUser(data: any): Observable<any> {
    const url = `${urlUser}/register`;
    return this.httpclient.post(url, data);
  }

  loginUser(data: any): Observable<any> {
    const url = `${urlUser}/login`;
    return this.httpclient.post(url, data);
  }
}
