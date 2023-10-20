import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = "http://localhost:8001/api/CustomUsers/SaveUser";
  constructor(private http: HttpClient) { }
  add_user(userData: any): Observable<any> {
    return this.http.post(this.url, userData);
  } 
  get_all_user(): Observable<any> {
    return this.http.get("http://localhost:8001/api/CustomUsers/GetAllUser");
  }
}
