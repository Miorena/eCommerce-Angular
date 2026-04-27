import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
	product: Product;
	quantity: number;
}

@Injectable({
	providedIn: 'root',
})
export class CartService {

	private items: CartItem[] = [];

	addToCart(product: Product): void {
		const existing = this.items.find(i => i.product.id === product.id);
		if (existing) {
			existing.quantity++;
		} else {
			this.items.push({ product, quantity: 1 });
		}
	}

	removeFromCart(productId: number): void {
		this.items = this.items.filter(i => i.product.id !== productId);
	}

	getItems(): CartItem[] {
		return this.items;
	}

	getTotalCount(): number {
		return this.items.reduce((sum, i) => sum + i.quantity, 0);
	}

	getTotalPrice(): number {
		return this.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
	}
}
