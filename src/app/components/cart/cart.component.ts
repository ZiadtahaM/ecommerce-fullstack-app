import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { Icart } from '../../core/interfaces/icart';
import { CartService } from './../../core/services/cart.service';
import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { environments } from '../../core/environments/environments';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  private readonly _cartservice=inject(CartService)
  cartdetails:Icart={} as Icart
  ngOnInit(): void {
    this._cartservice.getProductsCart().subscribe({
    next: (res)=> {
    console.log(res)
    this.cartdetails=res.data
    },
    error:(err) => {
   console.log(err);
   
    }
  }
    )}


    removeItem(id:string):void{
      this._cartservice.deletProductsCart(id).subscribe({
        next: (res) => {
          console.log(res)
          this.cartdetails=res.data
        },
        error: (err) => {
          console.log(err.error);
        }
      })
    }



    updateCount(id:string,count:number):void{
      this._cartservice.updateCart(id,count).subscribe({
        next: (res) => {
          console.log(res)
          this.cartdetails=res.data
        },
        error: (err) => {
          console.log(err.error);
        }
      })


    }

    removecartItems():void{
      this._cartservice.removeCart().subscribe({
        next: (res) => {
          console.log(res)
          this.cartdetails={} as Icart
        },
        error: (err) => {
          console.log(err.error);
        }
      })
    }

   
  }


  