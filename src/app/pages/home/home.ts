import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  featuredProducts: Product[];

  constructor(private productService: ProductService) {
    const featuredIds = [3, 11, 8];

    this.featuredProducts = featuredIds
      .map((id) => this.productService.getProductById(id))
      .filter((p): p is Product => p !== undefined);
  }
}
