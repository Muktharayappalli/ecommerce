import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YourDataService {
  private baseUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) {}

  regiter(formdata:any): Observable<any> {
    return this.http.post(this.baseUrl + 'myap/api/',formdata);
  }
}
