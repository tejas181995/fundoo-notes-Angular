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
  encode(data: any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
  encodedPost(url: any, data:any) {
    let id: any = localStorage.getItem('id')
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/x-www-form-urlencoded'
      })
    }
    return this.Post(this.baseUrl + url, this.encode(data), options)
  }
}
