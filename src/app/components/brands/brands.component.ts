import { Component, inject, OnInit } from '@angular/core';
import { BarndsService } from '../../core/services/barnds.service';
import{brands} from '../../core/interfaces/brands';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {


  private readonly _BarndsService=inject(BarndsService)
  brandsList:brands[]=[]


ngOnInit(): void {
  this.getAllBrands({});
}

getAllBrands(data: object) {
  this._BarndsService.getBrands(data).subscribe({
    next: (res) => {console.log(res.data)
      this.brandsList = res.data;
    },

    error: (err) => console.log(err)
  });
}

getSpecBrands(id:string){
  this._BarndsService.getSpecBrands(id).subscribe({
    next: (res) => {console.log(res.data)
      
    },
    error: (err) => console.log(err)
  })

}
 
}
