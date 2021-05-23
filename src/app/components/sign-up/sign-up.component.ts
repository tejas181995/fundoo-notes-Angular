import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

const REGEXNAME = new RegExp("[A-Z]{1}[a-z]{2,}");
const REGEXPASSWORd = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=[^$@!#%*?&]*[$#@!%*?&][^$@!#%*?&]*$).{8,}");

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isDisable : boolean = true;
  hide = true;
  styleDisp = "hidden"
  form: FormGroup;
  matchingError: boolean = false;

  constructor(private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.form = this.formbuilder.group({
      fname:['',[Validators.required, Validators.pattern(REGEXNAME)]],
      lname: ['', [Validators.required, Validators.pattern(REGEXNAME)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(REGEXPASSWORd)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.mustMatchPassword() });
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
        this.router.navigate(['login'])
      },(error) => {
        console.log(error)
      });
    }
    
  }
  mustMatchPassword(){
    return(formgroup: FormGroup) => {
      const control = formgroup.controls['password'];
      const matchingControl = formgroup.controls['confirmPassword']
      if(matchingControl.errors && !matchingControl.errors?.mustMatch)
        return;
      if(matchingControl.value !== control.value){
        matchingControl.setErrors({mustMatch: true})
        this.styleDisp="visible"
        this.isDisable = false;
      }
      else{
        matchingControl.setErrors(null)
        this.styleDisp="hidden"
      }
    }
  }
  
}
