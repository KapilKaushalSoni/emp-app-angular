import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {
  readonly url: string = "http://localhost:8044/api";

  constructor(private httpClient: HttpClient) { }

  save_employee(emp: any): Observable<any> {

    return this.httpClient.post<any>(this.url + "/employees", emp);

  }
  get_employee(): Observable<any> {

    return this.httpClient.get<any>(this.url + "/employees");
    
  }
}
