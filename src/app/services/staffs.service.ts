import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlStaff = 'http://127.0.0.1:5000/api/staffinfos';

@Injectable({
  providedIn: 'root'
})
export class StaffsService {

  constructor(private httpclient: HttpClient) {}

  getAllStaffs(): Observable<any[]> {
    const url = `${urlStaff}/get-all`
    return this.httpclient.get<any[]>(url);
  }



}
