import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-get-archives',
  templateUrl: './get-archives.component.html',
  styleUrls: ['./get-archives.component.scss']
})
export class GetArchivesComponent implements OnInit {
  AllNotes: any[] = [];
  isArchive=true;

  @Input()
  noteCard: any;
  @Output() refreshRequest = new EventEmitter<any>();
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
   
    this.getArchives();
  }
  getArchives(){
    let id = localStorage.getItem('id')
    this.userservice.getArchive(id).subscribe((res: any)=> {
      console.log(res.data.data)
      this.AllNotes = res.data.data.filter(this.filterNotes)
    }, (error)=> {
      console.log(error)
    })
  }
  private filterNotes(note: any){
    return note.isArchived == true;
  }
  refreshAfterUpdation(event: any) {
    if (event === 'update') {
      console.log('refreshed');
      this.getArchives();
    }
    else {
      console.log("update failure");
    }
  }
  check() : any {
    if(this.AllNotes != null)
      return true;
    
  }
 
}
