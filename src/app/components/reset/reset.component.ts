import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  hide = true;
  resetForm!: FormGroup;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
    ) { }




  ngOnInit() {
    this.resetForm = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),

    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.resetForm.controls[controlName].hasError(errorName);
  }

  resetPassword(resetFormValue: { password: any; cpassword: any; }) {
    try {
      const id: any = this.route.snapshot.paramMap.get('id');
      localStorage.setItem('id', id)
      const newPassword = {
        'newPassword': resetFormValue.password
      }
      console.log(" login event called ", resetFormValue);

      if (resetFormValue.password !== resetFormValue.cpassword) {
        alert("password not match")

      }
      else {


        this.userService.resetPassword(newPassword).subscribe((response: any) => {
          console.log('response ', response);
          this.router.navigate(['/login']);


        }, (error: any) => {
          console.log(error);

        });
      }
    } catch (error) {
      console.log(error);

    }

  }
}


