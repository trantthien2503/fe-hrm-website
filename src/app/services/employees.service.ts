import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlGetEmployees = 'http://127.0.0.1:5000/api/get-employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private httpclient: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.httpclient.get<any[]>(urlGetEmployees);
  }
}
