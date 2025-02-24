<template>
    <div class="container mx-auto p-6">
      <button @click="$router.back()" class="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
        ← Back to Posts
      </button>
      <div v-if="loading" class="text-center text-gray-500">Loading post...</div>
      <div v-else class="p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-3xl font-bold text-gray-800">{{ post.title }}</h1>
        <p class="text-gray-600 mt-4">{{ post.body }}</p>
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
  