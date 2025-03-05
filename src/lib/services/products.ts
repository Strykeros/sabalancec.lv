export type Product = {
	id: number;
	name: string;
	price: number;
	desc: string;
	img: string;
};

export function getAll(): Product[] {
	return [
		{
			id: 1,
			name: 'Organic Apples',
			price: 3.99,
			desc: 'Fresh and juicy organic apples.',
			img: 'organic_apples.jpg'
		},
		{
			id: 2,
			name: 'Organic Bananas',
			price: 2.99,
			desc: 'Sweet and ripe organic bananas.',
			img: 'organic_bananas.jpg'
		},
		{
			id: 3,
			name: 'Organic Carrots',
			price: 1.99,
			desc: 'Crunchy and healthy organic carrots.',
			img: 'organic_carrots.jpg'
		},
		{
			id: 4,
			name: 'Organic Spinach',
			price: 4.99,
			desc: 'Fresh and nutritious organic spinach.',
			img: 'organic_spinach.jpg'
		},
		{
			id: 5,
			name: 'Organic Tomatoes',
			price: 3.49,
			desc: 'Juicy and flavorful organic tomatoes.',
			img: 'organic_tomatoes.jpg'
		}
	];
}
