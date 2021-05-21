import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, 
    private router: Router){
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
  }
  submit(){
    if(this.form.valid){
      console.log(this.form.value)
      let array = [] as any;
      let reqObj = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      console.log(reqObj)

      this.userService.loginService(reqObj).subscribe((response)=> {
        console.log(response);
        array = response
        console.log(array.id)
        localStorage.setItem('id', array.id)
        this.router.navigate(['dashboard'])
      }, (error) => {
        console.log(error)
      
      })
    }
  }
  
  ngOnInit(): void {
    
  }

 
}
