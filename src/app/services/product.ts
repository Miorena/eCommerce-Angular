import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

	private products: Product[] = [
		{
			id: 1,
			name: 'Manteau Cachemire Brume',
			price: 890.00,
			category: 'Manteaux',
			image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600',
			description: 'Manteau long en cachemire pur, coupe droite structurée. Doublure en soie naturelle.'
		},
		{
			id: 2,
			name: 'Blazer Lin Napoli',
			price: 620.00,
			category: 'Vestes',
			image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=600',
			description: 'Blazer tailleur en lin italien non traité. Coupe légèrement oversized, boutons en corne.'
		},
		{
			id: 3,
			name: 'Robe Soie Minuit',
			price: 740.00,
			category: 'Robes',
			image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600',
			description: 'Robe longue en soie lavée, tombé impeccable. Coloris nuit profonde, encolure bateau.'
		},
		{
			id: 4,
			name: 'Robe Crêpe Obsidienne',
			price: 680.00,
			category: 'Robes',
			image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600',
			description: 'Robe midi en crêpe de soie noir profond. Découpe dos en V, fermeture invisible. Silhouette sculpturale.'
		},
		{
			id: 5,
			name: 'Veste Smoking Velours Nuit',
			price: 950.00,
			category: 'Vestes',
			image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
			description: 'Veste smoking en velours de soie bleu nuit. Revers châle satin, bouton unique doré. Coupe ajustée.'
		},
		{
			id: 6,
			name: 'Jupe Plissée Organza Ivoire',
			price: 520.00,
			category: 'Jupes',
			image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600',
			description: 'Jupe mi-longue en organza plissé ivoire. Légèreté aérienne, taille haute, fermeture zip latérale.'
		},
		{
			id: 7,
			name: 'Derby Cuir Cerise Noire',
			price: 560.00,
			category: 'Chaussures',
			image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600',
			description: 'Derby cousu Blake en cuir de veau pleine fleur. Semelle cuir, patine cerise noire.'
		},
		{
			id: 8,
			name: 'Cardigan Cachemire Ivoire',
			price: 490.00,
			category: 'Pulls',
			image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600',
			description: 'Cardigan long en cachemire 2 fils, boutons nacre. Coupe fluide, encolure ronde.'
		},
		{
			id: 9,
			name: 'Escarpins Daim Bordeaux',
			price: 640.00,
			category: 'Chaussures',
			image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600',
			description: 'Escarpins en daim bordeaux, talon aiguille 9cm en laiton doré. Bout pointu, doublure chevreau. Fabrication artisanale italienne.'
		},
		{
			id: 10,
			name: 'Pull Mérinos Nuit Profonde',
			price: 320.00,
			category: 'Pulls',
			image: 'https://plus.unsplash.com/premium_photo-1689629728927-16f5306e3935?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			description: 'Pull homme en laine mérinos extra-fine. Coloris bleu nuit intense, coupe semi-ajustée.'
		},
		{
  id: 11,
  name: 'Manteau Drap Laine Anthracite',
  price: 1350.00,
  category: 'Manteaux',
  image: 'https://media.istockphoto.com/id/2264370184/photo/stylish-man-seated-on-stool-exuding-charm-in-grey-coat.jpg?s=612x612&w=0&k=20&c=IH61ylU9N1Q11clvv4fhW0lLhQ0E_-ZXXGLRbYgVp0k=',
  description: 'Manteau homme en drap de laine anthracite, coupe droite architecturale. Col chemise structuré, boutonnage caché.'
},
		{
			id: 12,
			name: 'Jupe Satin Liquide Champagne',
			price: 460.00,
			category: 'Jupes',
			image: 'https://images.unsplash.com/photo-1592301933927-35b597393c0a?w=600',
			description: 'Jupe longue en satin duchesse champagne, effet liquide en mouvement. Taille élastiquée recouverte, fente arrière discrète.'
		},
	];

	getProducts(): Product[] {
		return this.products;
	}

	getProductById(id: number): Product | undefined {
		return this.products.find(p => p.id === id);
	}
}