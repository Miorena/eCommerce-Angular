import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user.model';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [FormsModule, RouterLink],
	templateUrl: './register.html',
	styleUrl: './register.css'
})
export class RegisterComponent {
	nom = '';
	prenom = '';
	mail = '';
	password = '';
	age: number | null = null;
	genre: 'Homme' | 'Femme' | 'Autre' = 'Homme';

	errorMsg = '';
	successMsg = '';

	constructor(private authService: AuthService, private router: Router) { }

	submit(): void {
		this.errorMsg = '';

		// Validation champs obligatoires
		if (!this.nom.trim() || !this.prenom.trim() || !this.age) {
			this.errorMsg = 'Nom, prénom et âge sont obligatoires.';
			return;
		}

		if (!this.mail.trim() || !this.password.trim()) {
			this.errorMsg = 'Email et mot de passe sont obligatoires.';
			return;
		}

		if (this.age < 1 || this.age > 120) {
			this.errorMsg = 'Veuillez entrer un âge valide.';
			return;
		}

		const user: User = {
			nom: this.nom.trim(),
			prenom: this.prenom.trim(),
			mail: this.mail.trim().toLowerCase(),
			password: this.password,
			age: this.age,
			genre: this.genre
		};

		const success = this.authService.register(user);
		if (success) {
			this.router.navigate(['/login']);
		} else {
			this.errorMsg = 'Cette adresse email est déjà utilisée.';
		}
	}
}