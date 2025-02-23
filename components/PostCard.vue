<template>
    <div @click="goToPost" class="p-4 bg-white shadow-lg rounded-lg border cursor-pointer hover:shadow-xl transition">
      <h2 class="text-xl font-bold text-gray-800">{{ post.title }}</h2>
      <p class="text-gray-600 mt-2">{{ post.body.substring(0, 100) }}...</p>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const props = defineProps({
    post: Object
  })
  
  const router = useRouter()
  
  const goToPost = () => {
    router.push(`/posts/${props.post.id}`)
  }
  </script>
  