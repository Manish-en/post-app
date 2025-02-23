<template>
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold text-center text-blue-600 mb-6">Posts</h1>
      <div v-if="loading" class="text-center text-gray-500">Loading posts...</div>
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PostCard v-for="post in postStore.posts" :key="post.id" :post="post" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { usePostStore } from '@/stores/posts'
  import { ref, onMounted } from 'vue'
  import PostCard from '@/components/PostCard.vue'
  
  const postStore = usePostStore()
  const loading = ref(true)
  
  onMounted(async () => {
    await postStore.fetchPosts()
    loading.value = false
  })
  </script>
  