import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CartService, CartItem } from '../../services/cart';

@Component({
	selector: 'app-cart',
	standalone: true,
	imports: [RouterLink, CurrencyPipe],
	templateUrl: './cart.html',
	styleUrl: './cart.css',
})
export class CartComponent {
	constructor(public cartService: CartService) {}

	remove(productId: number): void {
		this.cartService.removeFromCart(productId);
	}
}
