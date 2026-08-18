import { AuthLogin } from './../interfaces/auth-login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  private readonly _Router=inject(Router)

  userdata:any=null
  private readonly _HttpClient=inject(HttpClient)
  setLoginForm(data:object):Observable<AuthLogin>{
  return this._HttpClient.post<AuthLogin>(`${environments.baseUrl}/api/v1/auth/signin`, data);
  }

  saveuserdata():void{
    if(localStorage.getItem('usertoken')!==null){
      
    }
   this.userdata= jwtDecode(localStorage.getItem('usertoken')!)
  }


  logOut():void{
    localStorage.removeItem('usertoken');
    this.userdata=null
    this._Router.navigate(['/login'])
    
  }

  
}
