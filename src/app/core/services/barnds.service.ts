import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BarndsService {
  private readonly _HttpClient=inject(HttpClient)

  getBrands(data:object):Observable<any>{
    return this._HttpClient.get(`${environments.baseUrl}/api/v1/brands`,data)
  }
  getSpecBrands(id:string):Observable<any>{
    return this._HttpClient.get(`${environments.baseUrl}/api/v1/brands/${id}`)
  }




  
}
