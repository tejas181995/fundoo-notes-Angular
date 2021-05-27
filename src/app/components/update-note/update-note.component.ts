import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  title: any;
  description: any;

 
  

  constructor(private dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public card: any,
    private userservice: UserService,
    private _ngZone: NgZone) {

  }
  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close({ 'success': false });
  }

  submit() {
    let id = localStorage.getItem('id')
    console.log(id)
    let note = {
      noteId: this.card.note.id,
      title: this.title,
      description: this.description
    };
    console.log('Updating the note', note);
    this.userservice.updateNotes(note, id).subscribe((resp: any) => {
      console.log(resp);
      this.dialogRef.close({ 'success': true });
    }, (error) => {
      console.log(error);
    });
  }
 
}
