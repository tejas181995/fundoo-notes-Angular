import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  @Input()
  isArchive: any;

  @Input()
  isTrash: any;

  @Input()
  notesArray: any[] = [];
  @Output() updateSignal = new EventEmitter<string>();

  constructor(private userservice: UserService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.notesArray);
  }


  openDialog(note: any) {
    let dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      data: { note }
    });
    dialogRef.afterClosed().subscribe((resp: any) => {
      if (resp.success)
        this.updateSignal.emit('updated');
    })
  }

}