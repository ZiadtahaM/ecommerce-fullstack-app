import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(products: any[], searchQuery: string): any[] {
    if (!searchQuery) {
      return products;
    }

    return products.filter(product => {
      const productName = product.title.toLowerCase();
      const searchQueryLower = searchQuery.toLowerCase();

      return productName.includes(searchQueryLower);
    });
  }
}