import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient: HttpClient) {}

  myheader: any = { token: localStorage.getItem('usertoken') };

  checkOut(idcart: string|null, sh: object): Observable<any> {
    return this._HttpClient.post(`${environments.baseUrl}/api/v1/orders/checkout-session/${idcart}?url=http://localhost:4200`, {
      "shippingAddress": sh},
      { headers: this.myheader },
    );
  }}
