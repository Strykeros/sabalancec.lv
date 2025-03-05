<script>
	import dummyImg from '$lib/dummy-product.webp';
</script>

<main class="flex min-h-screen flex-col items-center justify-center bg-green-50">
	<header class="mb-8 text-center">
		<h1 class="text-4xl font-bold text-green-900">Welcome to Organic Food Store</h1>
		<p class="mt-2 text-lg text-green-700">Fresh, Healthy, and Organic Products</p>
	</header>

	<section class="w-full max-w-4xl px-4">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<img src={dummyImg} alt="Vegetables" class="h-48 w-full rounded-t-lg object-cover" />
				<h2 class="mt-4 text-2xl font-semibold text-green-900">Fresh Vegetables</h2>
				<p class="mt-2 text-green-700">Locally sourced and organic vegetables.</p>
			</div>
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<img src={dummyImg} alt="Fruits" class="h-48 w-full rounded-t-lg object-cover" />
				<h2 class="mt-4 text-2xl font-semibold text-green-900">Organic Fruits</h2>
				<p class="mt-2 text-green-700">Delicious and nutritious organic fruits.</p>
			</div>
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<img src={dummyImg} alt="Dairy" class="h-48 w-full rounded-t-lg object-cover" />
				<h2 class="mt-4 text-2xl font-semibold text-green-900">Dairy Products</h2>
				<p class="mt-2 text-green-700">Fresh and organic dairy products.</p>
			</div>
		</div>
	</section>

	<footer class="mt-12 text-center">
		<p class="text-green-700">&copy; 2023 Organic Food Store. All rights reserved.</p>
	</footer>
</main>
