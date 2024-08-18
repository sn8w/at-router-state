import { Component, Signal, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'products',
  imports: [CurrencyPipe, RouterLink],
  template: `
   <h1>{{selectedProduct.title}}</h1>
   <div>{{selectedProduct.description}}</div>
   <img [src]="selectedProduct.images[0]" />
   <h3>{{selectedProduct.price | currency}}</h3>
   <button routerLink="/">Back to main page</button>
  `,
  standalone: true,
})
export class ProductComponent {
  router = inject(Router);
  selectedProduct =
    this.router.getCurrentNavigation()?.extras?.state?.['selectedProduct'];
}
