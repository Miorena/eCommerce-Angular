import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CartService } from '../../services/cart';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule, RouterLink],
	templateUrl: './login.html',
	styleUrl: './login.css'
})
export class LoginComponent implements OnInit {
	mail = '';
	password = '';
	error = false;
	showPassword = false;
	rememberMe = false;

	constructor(
		private authService: AuthService,
		private cartService: CartService,
		private router: Router
	) { }

	ngOnInit(): void {
		const saved = localStorage.getItem('velene_remember');
		if (saved) {
			const data = JSON.parse(saved);
			this.mail = data.mail;
			this.password = data.password;
			this.rememberMe = true;
		}
	}

	togglePassword(): void {
		this.showPassword = !this.showPassword;
	}

	submit(): void {
		const success = this.authService.login(this.mail, this.password);
		if (success) {
			this.error = false;
			if (this.rememberMe) {
				localStorage.setItem('velene_remember', JSON.stringify({
					mail: this.mail,
					password: this.password
				}));
			} else {
				localStorage.removeItem('velene_remember');
			}
			// Recharge le panier de l'utilisateur connecté
			this.cartService.loadCart();
			this.router.navigate(['/']);
		} else {
			this.error = true;
		}
	}
}