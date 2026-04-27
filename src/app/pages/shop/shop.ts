import { Component } from '@angular/core';
import { ProductService } from '../../services/product';
import { ProductCardComponent } from '../../components/product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
	selector: 'app-shop',
	standalone: true,
	imports: [ProductCardComponent],
	templateUrl: './shop.html',
	styleUrl: './shop.css',
})
export class ShopComponent {
	allProducts: Product[];
	filteredProducts: Product[];
	categories: string[];
	selectedCategory = 'Tous';

	constructor(private productService: ProductService) {
		this.allProducts = this.productService.getProducts();
		this.filteredProducts = this.allProducts;
		this.categories = ['Tous', ...new Set(this.allProducts.map(p => p.category))];
	}

	filterBy(category: string):void {
		this.selectedCategory = category;
		if (category === 'Tous') {
			this.filteredProducts = this.allProducts;
		} else {
			this.filteredProducts= this.allProducts.filter(p => p.category === category);
		}
	}
}
