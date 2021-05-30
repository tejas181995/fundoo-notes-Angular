import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public colorPalette: any[] = [
    [
      { color: '#fff' },
      { color: '#f28b82' },
      { color: '#fbbc04' }
    ],
    [
      { color: '#fff475' },
      { color: '#ccff90' },
      { color: '#a7ffeb' }
    ],
    [
      { color: '#cbf0f8' },
      { color: '#aecbfa' },
      { color: '#d7aefb' }
    ]
  ]

  @Input()
  noteCard: any;
  @Output() refreshRequest = new EventEmitter<any>();
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }

  archiveNote() {
    let data = {
      noteIdList: [this.noteCard.id],
      isArchived: true
    };
    console.log(data);
    
    let id = localStorage.getItem('id')
    this.userservice.moveToArchive(data, id).subscribe((res) => {
      console.log(res);
      this.refreshRequest.emit({ refresh: true, message: 'archived' });
    }, (error) => {
      console.log(error)
    })
  }
  addToTrash() {
    let token = localStorage.getItem('id')
    console.log(token)
    let data = {
      noteIdList: [this.noteCard.id],
      isDeleted: true
    }
    console.log(data)
    this.userservice.moveToTrash(data, token).subscribe((res) => {
      console.log(res)
      this.refreshRequest.emit({ refresh: true, message: 'deleted' })
    }, (error) => {
      console.log(error)
    })
  }

  // changeColor(event: HTMLElement, color: string) {
  //   let ele = event.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
  //   if (ele != null) {
  //     ele.setAttribute("style", "background: " + color)
  //   }
  changeColor(color: any) {
    this.noteCard.color = color
    let id = localStorage.getItem('id')
    let data ={
      noteIdList: [this.noteCard.id],
      color: color,
     }
     console.log(data);
     
     this.userservice.changeColor(id, data).subscribe((res)=> {
       console.log(res)
       this.refreshRequest.emit({ refresh: true, message: 'colored'})
     },(error)=> {
       console.log(error)
     })
  }
}



