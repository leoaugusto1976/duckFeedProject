import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDuckFeed } from '../interfaces/IDuckFeed';

@Injectable({
  providedIn: 'root'
})
export class DuckFeedServiceService {

  private headers = new HttpHeaders();
  
  private api: string = `https://127oyuvgz6.execute-api.us-west-2.amazonaws.com/DuckFeedDeployment`;

  constructor(private http: HttpClient) { }

  public insert(duckFeed: IDuckFeed): Observable<any> {
    this.headers.append('Content-Type', 'application/json');
    // this.headers.append('Access-Control-Allow-Origin', '*');
    // this.headers.append('Cache-Control', 'no-cache');
    // this.headers.append('Pragma', 'no-cache');
    this.headers.append('x-api-key', 'NEES85r8qI7oeU6iB7U2H7K41s8qwPaa7cGtRDOo');

    return this.http.post(
      this.api, 
      { duckFeed }, 
      { headers: this.headers }
    );
  }
}
