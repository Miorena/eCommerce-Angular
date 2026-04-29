import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { AuthService } from './auth';

export interface CartItem {
	product: Product;
	quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {

	private items: CartItem[] = [];

	constructor(private authService: AuthService) {
		this.loadCart();
	}

	private getCartKey(): string {
		const user = this.authService.getCurrentUser();
		return user ? `velene_cart_${user.mail}` : 'velene_cart_guest';
	}

	loadCart(): void {
		const data = localStorage.getItem(this.getCartKey());
		this.items = data ? JSON.parse(data) : [];
	}

	private saveCart(): void {
		localStorage.setItem(this.getCartKey(), JSON.stringify(this.items));
	}

	addToCart(product: Product): void {
		const existing = this.items.find(i => i.product.id === product.id);
		if (existing) {
			existing.quantity++;
		} else {
			this.items.push({ product, quantity: 1 });
		}
		this.saveCart();
	}

	removeFromCart(productId: number): void {
		this.items = this.items.filter(i => i.product.id !== productId);
		this.saveCart();
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

	clearCart(): void {
		this.items = [];
		this.saveCart();
	}
}