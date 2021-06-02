import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor( private http: HttpClient,) { }

  runRules(payload):Observable<any> {
    if (payload) {
      const baseUrl ='http://3.230.104.70:8888/api'
      const url = baseUrl + '/Rules';
      const httpOptions = {
        headers: new HttpHeaders({
          'content-type': 'application/json'
        })
      };
      return this.http.post(url, payload, httpOptions);
    }
  }
}
