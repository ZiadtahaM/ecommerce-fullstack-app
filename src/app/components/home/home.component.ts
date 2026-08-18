import { Categorys } from './../../core/interfaces/categorys';
import { Component, Inject, inject, NgModule, OnInit } from '@angular/core';
import { ProducthomeService } from '../../core/services/producthome.service';
import { Homeproduct } from '../../core/interfaces/homeproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { DropdownModule } from 'primeng/dropdown';
import { Observable } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { SearchPipe } from '../../core/searching.pipe';
import { FormControl, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { Icart, wishlist } from '../../core/interfaces/icart';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, ButtonModule, SearchPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  wishLIst: wishlist[] = []

  productlist: Homeproduct[] = []
  categorylist: Categorys[] = []
  private readonly _product = inject(ProducthomeService);
  private readonly _cartservice = inject(CartService)

  customOptionsmain: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,

    navSpeed: 700,
    navText: ['', ''],

    items: 1,
    nav: true,
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  searchQuery: any;
  ngOnInit(): void {
    this._product.getallproduct().subscribe({
      next: (res) => {
        console.log(res)
        this.productlist = res.data
      }
      ,
      error: (err) => { console.log(err) }


    })


    {
      this._product.getcategories().subscribe({
        next: (res) => {
          console.log(res);
          this.categorylist = res.data;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  } searchControl = new FormControl('');


  addtocart(id: string): void {
    this._cartservice.addProductToCart(id).subscribe({
      next: (res) => {
        console.log(res.data)
      },
      error: (err) => {
        console.log(err);

      }



    })


  }


  addWish(id: string) {
    this._product.addWishList(id).subscribe({
      next: (res) => {
        console.log(res.data)
        this.wishLIst = res.data

      },
      error: (err) => console.error(err)
    })
  }
}
