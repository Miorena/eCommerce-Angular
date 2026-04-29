import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

export interface AppUser extends User {
	isAdmin?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

	private currentUser: AppUser | null = null;

	private readonly ADMIN: AppUser = {
		nom: 'Admin',
		prenom: 'Super',
		mail: 'admin',
		password: 'admin',
		age: 0,
		genre: 'Autre',
		isAdmin: true
	};

	constructor() {
		const saved = localStorage.getItem('velene_current_user');
		if (saved) {
			this.currentUser = JSON.parse(saved);
		}
	}

	private getUsers(): AppUser[] {
		const data = localStorage.getItem('velene_users');
		return data ? JSON.parse(data) : [];
	}

	private saveUsers(users: AppUser[]): void {
		localStorage.setItem('velene_users', JSON.stringify(users));
	}

	register(user: AppUser): boolean {
		const users = this.getUsers();
		const exists = users.find(u => u.mail === user.mail);
		if (exists) return false;
		users.push(user);
		this.saveUsers(users);
		return true;
	}

	login(mail: string, password: string): boolean {
		// Vérifie d'abord si c'est le super admin
		if (mail === this.ADMIN.mail && password === this.ADMIN.password) {
			this.currentUser = this.ADMIN;
			localStorage.setItem('velene_current_user', JSON.stringify(this.ADMIN));
			return true;
		}

		// Sinon cherche dans les comptes utilisateurs
		const users = this.getUsers();
		const user = users.find(u => u.mail === mail && u.password === password);
		if (user) {
			this.currentUser = user;
			localStorage.setItem('velene_current_user', JSON.stringify(user));
			return true;
		}

		return false;
	}

	logout(): void {
		this.currentUser = null;
		localStorage.removeItem('velene_current_user');
	}

	isLoggedIn(): boolean {
		return this.currentUser !== null;
	}

	isAdmin(): boolean {
		return this.currentUser?.isAdmin === true;
	}

	getCurrentUser(): AppUser | null {
		return this.currentUser;
	}
}