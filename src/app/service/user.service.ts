import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  registerService(data: any){
    return this.http.Post('user/userSignUp', data);
  }
}
