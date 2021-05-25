import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  public title!: string;
  public description!: string;

  @Input()
  clicked!: boolean;
  @Output() sendEventToGetAllNotes = new EventEmitter<string>();

  @ViewChild('createCard')
  card!: ElementRef;

  constructor(private userservice: UserService,
    private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target === this.card.nativeElement) {
        console.log("Outside");
        console.log(this.card);
        this.clicked = false;
      }
    })
  }

  ngOnInit(): void {
  }

  createNote() {
    let id = localStorage.getItem('id')
    this.clicked = !this.clicked
    let Reqobj = {
      title: this.title,
      description: this.description
    }
    
    console.log("id is : "+ id)
    this.userservice.createNote(Reqobj, id).subscribe((response: any) =>{
      console.log(response);
      this.sendEventToGetAllNotes.emit();
    }, (error: any) => {
      console.log(error);
    
    })
  }
  insideCard(){
    this.clicked = true;
  }
}
