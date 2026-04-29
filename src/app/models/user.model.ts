export interface User {
	nom: string;
	prenom: string;
	mail: string;
	password: string;
	age: number;
	genre: 'Homme' | 'Femme' | 'Autre';
}