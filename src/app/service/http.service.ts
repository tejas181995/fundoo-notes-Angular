import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  baseUrl = environment.baseurl;

  constructor(private httpClient: HttpClient) { }

  Post(url: any, data: any){
    return this.httpClient.post(this.baseUrl + url, data);
  }
}
