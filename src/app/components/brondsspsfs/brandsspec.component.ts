import { brands } from '../../core/interfaces/brands';
import { Component, inject, OnInit } from '@angular/core';
import { BarndsService } from '../../core/services/barnds.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-brandsspec',
  standalone: true,
  imports: [],
  templateUrl: './brandsspec.component.html',
  styleUrl: './brandsspec.component.scss'
})
export class BrandsspecComponent implements OnInit {
  private readonly _BarndsService=inject(BarndsService)
  private readonly _activated = inject(ActivatedRoute)
  brandsList:brands={} as brands

ngOnInit(): void {
  this._activated.paramMap.subscribe({
    next: (p) => {
      const x = p.get('id');
      if (x !== null) {
        this._BarndsService.getSpecBrands(x).subscribe({
          next: (res) => {
            console.log(res.data);
            this.brandsList = res.data;
          },
          error: (err) => console.log(err)
        });
      }
    }
  });
}

  
}
