import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './login.html',
	styleUrl: './login.css'
})
export class LoginComponent {
	email = '';
	password = '';
	isRegister = false;

	submit(): void {
		if (this.isRegister) {
			console.log('Inscription avec :', this.email);
		} else {
			console.log('Connexion avec :', this.email);
		}
	}
}