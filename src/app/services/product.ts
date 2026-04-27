import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
	providedIn: 'root',
})
export class ProductService {

	private products: Product[] = [
		{
			id: 1, name: 'Veste en cuir', price: 89.99, category: 'Vestes',
			image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
			description: 'Veste en cuir véritable, style urbain.'
		},
		{
			id: 2, name: 'Jean slim', price: 49.99, category: 'Pantalons',
			image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
			description: 'Jean slim confortable pour toutes occasions.'
		},
		{
			id: 3, name: 'T-shirt blanc', price: 19.99, category: 'T-shirts',
			image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
			description: 'T-shirt basique en coton bio.'
		},
		{
			id: 4, name: 'Robe fleurie', price: 64.99, category: 'Robes',
			image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
			description: 'Robe légère prafaite pour l\'été.'
		},
		{
			id: 5, name: 'Sneakers blancs', price: 74.99, category: 'Chaussures',
			image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
			description: 'Sneakers tendance tout-terrain.'
		},
		{
			id: 6, name: 'Manteau long', price: 129.99, category: 'Manteaux',
			image:'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400',
			description: 'Manteau élégant pour l\'hiver.'
		}
	];

	getProducts(): Product[] {
		return this.products;
	}

	getProductById(id: number): Product | undefined {
		return this.products.find(p => p.id === id);
	}
}
