import { Router, RouterLink } from '@angular/router';
import { AuthLoginService } from './../../core/services/auth-login.service';

import { Component, inject } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly hadama=inject(AuthLoginService)
  private readonly _router=inject(Router)

  msError:string="";
  isLoding:boolean=false;
  msSuccess:boolean=false
  


loginform:FormGroup=new FormGroup({

email:new FormControl(null,[Validators.email,Validators.required]),
password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),


} );



loginSubmit(): void {
  if (this.loginform.valid) {
    this.isLoding=true;
    this.hadama.setLoginForm(this.loginform.value).subscribe({
      next: (res) => {
        this.isLoding=false
        console.log(res);
        this.msSuccess=true;
        if (res.message=='success') {
            setTimeout(() => {

                localStorage.setItem('usertoken',res.token) 
                this.hadama.userdata
                this._router.navigate(['/home'])

                
            }, 1000);
        
  
          }
        
        
      },
      error: (err) => {
        this.msError=err.error.message;
        console.log(err);
        
        this.isLoding=false;

        
      }
    })
  }
  else{
    
    this.loginform.markAllAsTouched()
  }
}

}