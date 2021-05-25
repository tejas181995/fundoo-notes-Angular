import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteCard: any;
  constructor() { }

  ngOnInit(): void {
  }

  archiveNote() {
    console.log(this.noteCard.id);
  }

}