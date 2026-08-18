import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AuthSService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent  {
  private readonly hadama=inject(AuthSService)
  private readonly _router=inject(Router)

  msError:string="";
  isLoding:boolean=false;
  msSuccess:boolean=false

  formBuilder: FormBuilder = inject(FormBuilder);

  registerform:FormGroup = this.formBuilder.group({
    name: [null, [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
    email: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
    rePassword: [null],
    phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]
  }, { validator: this.comfirmpassword });

  comfirmpassword(g:AbstractControl){
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null
    }
    else{
      return {mismatch:true}
    }
  }

  registerSubmit(): void {
    if (this.registerform.valid) {
      this.isLoding=true;
      this.hadama.setRegisterForm(this.registerform.value).subscribe({
        next: (res) => {
          this.isLoding=false
          console.log(res);
          this.msSuccess=true;
          if (res.message=='success') {
            this._router.navigate(['/login'])
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
      this.registerform.markAllAsTouched()
    }
  }
}