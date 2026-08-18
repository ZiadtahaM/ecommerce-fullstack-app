import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { get } from 'http';
import { ProducthomeService } from '../../core/services/producthome.service';
import { Homeproduct } from '../../core/interfaces/homeproduct';

@Component({
  selector: 'app-details',

  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
detailsproduct:Homeproduct = {} as Homeproduct 
private readonly _activated = inject(ActivatedRoute)
private readonly _producthomeserv=inject(ProducthomeService)

ngOnInit(): void {
  this._activated.paramMap.subscribe({
    next: (p) => {
      let x = p.get('id');
      this._producthomeserv.getproduct(x).subscribe({
        next: (res) => {
          console.log(res.data);
          this.detailsproduct = res.data; },
        error: (err) => console.log(err)
      });
    }
  });
}

}
