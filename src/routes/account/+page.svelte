<form class="mx-auto max-w-md rounded-lg bg-white p-8 shadow-md">
	<div class="mb-4">
		<label for="username" class="mb-2 block text-sm font-bold text-gray-700">Username:</label>
		<input
			type="text"
			id="username"
			name="username"
			required
			class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		/>
	</div>
	<div class="mb-6">
		<label for="password" class="mb-2 block text-sm font-bold text-gray-700">Password:</label>
		<input
			type="password"
			id="password"
			name="password"
			required
			class="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
		/>
	</div>
	<div class="flex items-center justify-between">
		<button
			type="submit"
			class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
			>Login</button
		>
	</div>
</form>
