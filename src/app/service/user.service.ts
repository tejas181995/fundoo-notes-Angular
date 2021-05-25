import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpService) { }

  registerService(data: any){
    return this.http.Post('user/userSignUp', data, "");
  }
  loginService(data: any){
    return this.http.Post('user/login', data, "")
  }
  getAllNotes(id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json'
      })
    }
    return this.http.Get('notes/getNotesList', options)
  }
  createNote(data: any, id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json',
        'Accept': 'application/json'
        
      })
     
    }
    return this.http.Post('notes/addNotes', data, options);
  }
}
