import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProducthomeService {

  myHeaders:any ={token :localStorage.getItem('usertoken')}
private readonly _http=inject(HttpClient)
getallproduct():Observable<any>{return this._http.get('https://ecommerce.routemisr.com/api/v1/products')}

getproduct(id:string |null):Observable<any>{return this._http.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)}

getcategories():Observable<any>{return this._http.get('https://ecommerce.routemisr.com/api/v1/categories')}

getWishList():Observable<any>{
  return this._http.get(`${environments.baseUrl}/api/v1/wishlist/`,
    {
      headers: this.myHeaders
    }
  )
}
removeWishList(id:string):Observable<any>{
  return this._http.delete(`${environments.baseUrl}/api/v1/wishlist/${id}`,
    {
      headers: this.myHeaders
    }
  )
}
addWishList(id:string):Observable<any>{
  return this._http.post(`${environments.baseUrl}/api/v1/wishlist/`,{
    "productId": id
},
    {
      headers: this.myHeaders
    }
  )
}

}
