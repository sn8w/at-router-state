import { Component } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  RouterOutlet,
} from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to our store</h1>
    <router-outlet />
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(
      [
        { path: '', component: ProductsComponent },
        { path: 'details', component: ProductComponent },
      ],
      withComponentInputBinding()
    ),
  ],
});
