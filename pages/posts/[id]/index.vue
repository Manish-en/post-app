<template>
  <div class="container mx-auto px-4 py-8 max-w-3xl">
    <!-- Back Button -->
    <button
      @click="$router.back()"
      class="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition mb-6"
    >
      ← Back to Posts
    </button>

    <!-- Loading State -->
    <div v-if="loading" class="animate-pulse space-y-4">
      <div class="h-8 bg-gray-200 rounded"></div>
      <div class="h-4 bg-gray-200 rounded w-3/4"></div>
      <div class="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>

    <!-- Post Content -->
    <div v-else class="p-6 bg-white shadow-md rounded-lg border">
      <h1 class="text-3xl font-bold text-gray-900 leading-tight">{{ post.title }}</h1>
      <p class="text-gray-700 mt-4 leading-relaxed">{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const post = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${route.params.id}`)
    post.value = await response.json()
  } catch (error) {
    console.error('Error fetching post:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>

button {
  transition: all 0.2s ease-in-out;
}
</style>
