import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-get-trash',
  templateUrl: './get-trash.component.html',
  styleUrls: ['./get-trash.component.scss']
})
export class GetTrashComponent implements OnInit {
  AllNotes: any[] = [];
  public isTrash=true;

  @Input()
  notesArray: any[] = [];

  @Input()
  noteCard: any;
  @Output() refreshRequest = new EventEmitter<any>();
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getAllTrash()
  }

  getAllTrash(){
    let id = localStorage.getItem('id')
    this.userservice.getTrash(id).subscribe((res: any)=>{
      console.log(res.data.data)
      this.AllNotes = res.data.data.filter(this.filterNotes)
    },(error)=> {
      console.log(error)
    })
  }
  private filterNotes(note: any){
    return note.isDeleted == true;
  }
  refreshAfterUpdation(event: any) {
    if (event === 'update') {
      console.log('refreshed');
      this.getAllTrash();
    }
    else {
      console.log("update failure");
    }
  }
  
  
}
