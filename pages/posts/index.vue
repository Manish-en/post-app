<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center text-blue-700 mb-8">Latest Posts</h1>

    <!-- Skeleton Loader -->
    <div v-if="loading" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="n in 6" :key="n" class="animate-pulse bg-gray-200 h-52 rounded-lg"></div>
    </div>

    <!-- Posts Grid -->
    <div v-else class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

<style scoped>

.container {
  max-width: 1200px;
}

.animate-pulse {
  transition: all 0.3s ease-in-out;
}

.grid > div:hover {
  transform: translateY(-5px);
  transition: transform 0.2s ease-in-out;
}
</style>
