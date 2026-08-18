import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../interfaces/auth';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthSService {
  

  private readonly _HttpClient=inject(HttpClient)

setRegisterForm(data:object):Observable<Auth> {
  return this._HttpClient.post<Auth>(`${environments.baseUrl}/api/v1/auth/signup`, data);
}
setverfyemail(data:object):Observable<any> {
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, data);
}
setverfycode(data:object):Observable<any> {
  return this._HttpClient.post<any>(`${environments.baseUrl}/api/v1/auth/verifyResetCode`, data);
}

setnewpassword(data:object):Observable<any> {
  return this._HttpClient.put<any>(`${environments.baseUrl}/api/v1/auth/resetPassword`, data);
}

}
