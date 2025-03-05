<script lang="ts">
	import type { Product } from '$lib/services/products';
	import dummyImg from '$lib/dummy-product.webp';
	type Props = {
		data: {
			products: Product[];
		};
	};

	const { data }: Props = $props();
	console.log($state.snapshot(data));
</script>

<div class="flex">
	{#each data.products as product: Product}
		<div class="m-4 max-w-sm overflow-hidden rounded shadow-lg">
			<img class="w-full" src={dummyImg} alt={product.name} />
			<div class="px-6 py-4">
				<h2 class="mb-2 text-xl font-bold">{product.name}</h2>
				<p class="text-base text-gray-700">{product.desc}</p>
				<p class="mt-2 text-lg font-semibold text-gray-900">${product.price}</p>
			</div>
		</div>
	{/each}
</div>
