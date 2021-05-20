import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;
  error = true;
  errorMessage = "Wrong Password"
  form: FormGroup;
  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      password: ['']
    })
  }

  ngOnInit(): void {
  }


}
