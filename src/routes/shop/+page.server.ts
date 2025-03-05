import * as products from '$lib/services/products';

export function load() {
	return {
		products: products.getAll()
	};
}
