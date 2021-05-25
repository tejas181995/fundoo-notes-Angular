import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  AllNotes: any[] = [];
  constructor(private userservice: UserService) { }

  clicked = false;

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    let id = localStorage.getItem('id')
    this.userservice.getAllNotes(id,).subscribe((resp: any) => {
      console.log(resp.data.data);
      this.AllNotes = resp.data.data;
    }, (error: any) => {
      console.log(error);
    });
  }

  messageReceived() {
    console.log("Event called from take note");
    this.getAllNotes();
  }

  refreshAfterUpdation(event: any) {
    if (event === 'update') {
      console.log('refreshed');
      this.getAllNotes();
    }
    else {
      console.log("update failure");
    }
  }

}
