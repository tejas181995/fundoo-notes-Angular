import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

const REGEXNAME = new RegExp("[A-Z]{1}[a-z]{2,}");
const REGEXEMAIL = new RegExp("^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$");
const REGEXPASSWORd = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}");

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  hide = true;
  
  form: FormGroup;
  
  constructor(private formbuilder: FormBuilder,
    private userService: UserService) {
    this.form = this.formbuilder.group({
     fname:['',[Validators.required]],
     lname: ['', [Validators.required]],
     email: ['', [Validators.required]],
     password: ['', [Validators.required]],
    service : "advance"
    });
  }
  public hasError = (controlName: any, errorName: any) => {
    return this.form.controls[controlName].hasError(errorName)
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      console.log(this.form.value);

      let reqObj = {
        firstName: this.form.value.fname,
        lastName: this.form.value.lname,
        email: this.form.value.email,
        password: this.form.value.password,
        service: "advance"
      }
      console.log(reqObj);
      this.userService.registerService(reqObj).subscribe((response) => {
        console.log(response)
      },(error) => {
        console.log(error)
      
      });
    }
  }

}
