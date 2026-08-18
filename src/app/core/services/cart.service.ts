import { environments } from './../environments/environments';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  // private _httpClient: HttpClient;

  constructor(private _httpClient: HttpClient) {
    // this._httpClient = _httpClient;
  }

myHeaders:any ={token :localStorage.getItem('usertoken')}

  addProductToCart(id: string): Observable<any> {
    return this._httpClient.post(`${environments.baseUrl}/api/v1/cart`, {
      "productId": id
    }, {
      headers: this.myHeaders
    });
  }

  getProductsCart(): Observable<any> {
    return this._httpClient.get(`${environments.baseUrl}/api/v1/cart`,
       {
      headers: this.myHeaders
    });
  }
  deletProductsCart(id:string): Observable<any> {
    return this._httpClient.delete(`${environments.baseUrl}/api/v1/cart/${id}`,
       {
      headers: this.myHeaders
    });
  }

  updateCart(id:string,newCount:number):Observable<any>{
    return this._httpClient.put(`${environments.baseUrl}/api/v1/cart/${id}`,{
      "count": newCount
    },{headers:this.myHeaders}
     

    )
  }
removeCart():Observable<any>{
  return this._httpClient.delete(`${environments.baseUrl}/api/v1/cart`,
   
  {headers:this.myHeaders}
     

    )
  }
}


