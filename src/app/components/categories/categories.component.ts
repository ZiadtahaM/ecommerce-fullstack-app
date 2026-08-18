import { Icategories } from './../../core/interfaces/icategories';
import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../core/services/category-service.service';
import { NgFor } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports:[NgFor ,CarouselModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
categorislist:Icategories[]= [];

  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (res) => {
        console.log(res.data);
        this.categorislist = res.data;
      },
      error: (err) => {
        console.log(err);
      }

    });
  }

  // getProductsForCategory(categoryId: string) {
  //   this.categoryService.getSpecificCategory(categoryId).subscribe({

  //   });
  // }
  trackByFn(index: number, item: Icategories): string {
    return item._id;
}
customOptionscat : OwlOptions= {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  autoplay:true,
  autoplayHoverPause:true,
  autoplayTimeout:3000,
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
}}
