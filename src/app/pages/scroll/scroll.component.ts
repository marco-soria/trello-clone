import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ScrollingModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent {

  products: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }

}
