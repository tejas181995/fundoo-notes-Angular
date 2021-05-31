import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  constructor(private http: HttpService) { }

  registerService(data: any) {
    return this.http.Post('user/userSignUp', data, "");
  }
  loginService(data: any) {
    return this.http.Post('user/login', data, "")
  }
  getAllNotes(id: any) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json'
      })
    }
    return this.http.Get('notes/getNotesList', options)
  }
  changeColor(id: any, data: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json'
      })
    }
    return this.http.Post('notes/changesColorNotes',data, options)
  }
  createNote(data: any, id: any) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json',
        'Accept': 'application/json'

      })
    }
    return this.http.Post('notes/addNotes', data, options);
  }
  moveToArchive(data: any, id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/archiveNotes', data, options);
  }
  moveToTrash(note: any, id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        
      })
    }
    return this.http.Post('notes/trashNotes', note, options)
  }
  updateNotes(data: any, id: any) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json',
        'Accept': 'application/json'

      })
    }
    return this.http.Post('notes/updateNotes', data, options)
  }

  logout(id: any) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json',
        'Accept': 'application/json'

      })
    }
    return this.http.Post('user/logout', '', options);
  }
  getArchive(id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json'
      })
    }
    return this.http.Get('notes/getArchiveNotesList', options)
  }
  getTrash(id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-Type': 'application/json'
      })
    }
    return this.http.Get('notes/getTrashNotesList', options);
  }
  restoreTrashNotes(data: any, id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/trashNotes', data, options);
  }
  restoreArchiveNotes(data: any, id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/archiveNotes', data, options);
  }
  deleteForever(data: any, id: any){
    let options = {
      headers: new HttpHeaders({
        'Authorization': id,
        'Content-type': 'application/json',
        'Accept': 'application/json'
      })
    }
    return this.http.Post('notes/deleteForeverNotes', data, options);
  }
  
}
