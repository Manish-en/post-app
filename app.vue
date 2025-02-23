<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">
          <NuxtLink to="/">Blogs</NuxtLink>
        </h1>
      </div>
    </header>

    <main class="container mx-auto p-6">
      <NuxtPage />
    </main>
  </div>
</template>
