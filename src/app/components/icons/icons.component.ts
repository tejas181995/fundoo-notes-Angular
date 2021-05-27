import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Input() noteCard: any;
  @Output() refreshRequest = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  archiveNote() {
    console.log(this.noteCard.id);
  }

  changeColor(event: HTMLElement, color: string){
    console.log(event.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement)
    let ele = event.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
    if(ele != null)
      ele.setAttribute("style", "background: "+ color)
    }
    
  

}