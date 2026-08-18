import { wishlist } from './../../core/interfaces/icart';
import { Component, inject, OnInit } from '@angular/core';
import { ProducthomeService } from '../../core/services/producthome.service';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
  private readonly _ProducthomeService=inject(ProducthomeService)
  wishLIst:wishlist[]=[] 


  addWish(id:string){
    this._ProducthomeService.addWishList(id).subscribe({

      next: (res) => {console.log(res)
        this.wishLIst=res.data

      },
      error: (err) => console.error( err)
    })
  }


ngOnInit(): void {
  this.getWish();
}

getWish(): void {
  this._ProducthomeService.getWishList().subscribe({
    next: (res) => {
      console.log(res);
      this.wishLIst = res.data;
    },
    error: (err) => console.error(err)
  });
}
 
removeWish(id: string) {
  this._ProducthomeService.removeWishList(id).subscribe({
    next: (res) => {
      console.log(res);
      this.wishLIst = this.wishLIst.filter(item => item.id !== id);
    },
    error: (err) => console.error(err)
  });
}








}
