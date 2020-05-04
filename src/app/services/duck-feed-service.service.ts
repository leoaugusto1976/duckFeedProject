import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDuckFeed } from '../interfaces/IDuckFeed';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class DuckFeedServiceService {

  private apiUrl: string = AppConfig.settings.apiUrl;
  private apiKey: string = AppConfig.settings.apiKey;

  constructor(private http: HttpClient) { }

  public insert(duckFeed: IDuckFeed): Observable<any> {
    return this.http.post(
      this.apiUrl, 
      { duckFeed }, 
      { 
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'x-api-key': this.apiKey
        })
      }
    );
  }
}