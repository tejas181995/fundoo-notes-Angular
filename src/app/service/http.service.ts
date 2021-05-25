import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = environment.baseurl;

  constructor(private httpClient: HttpClient) { }

  Post(url: any, data: any, options: any){
    return this.httpClient.post(this.baseUrl + url, data, options);
  }
  Get(url: any, options: any){
    return this.httpClient.get(this.baseUrl + url, options)
  }
}
