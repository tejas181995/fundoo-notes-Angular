import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public forgetForm!: FormGroup;


  constructor(private userService: UserService, private router: Router,
   ) { }

  ngOnInit() {
    this.forgetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.forgetForm.controls[controlName].hasError(errorName);
  }

  forgetPassword(forgetFormvalue: any) {
    try {
      console.log(" login event called ", forgetFormvalue);
      this.userService.forgetPassword(forgetFormvalue).subscribe(response => {
        console.log('response ', response);
      });
    } catch (error) {
      console.log(error);


    }

  }

}

