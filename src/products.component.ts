import { Component, Signal, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product, ProductsService } from './products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product',
  imports: [CurrencyPipe, RouterLink],
  template: `
  <ul>
    @for(product of products(); track product.id) {
      <li [routerLink]="['/details']" [state]="{selectedProduct: product}">
        {{product.title}} - {{product.price | currency}}
      </li>
    }
 </ul>
  `,
  standalone: true,
})
export class ProductsComponent {
  products: Signal<Product[]> = inject(ProductsService).products;
}
