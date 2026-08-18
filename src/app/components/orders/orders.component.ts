import { ActivatedRoute } from '@angular/router';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _orderservice=inject(OrdersService)

 
cartId:string|null=""

ngOnInit(){this._activatedRoute.paramMap.subscribe({next:(params) =>{this.cartId =params.get('id'); console.log(this.cartId);
}})}


  orders: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  });


  ordersubmet(): void {
    console.log(this.orders.value);
    this._orderservice.checkOut(this.cartId, this.orders.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status === 'success') {
          window.open(res.session.url, '_self');
        }
      },
      error: (err) => console.log(err)
    });
  }
}