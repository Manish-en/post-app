<template>
  <div
    @click="goToPost"
    class="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden border cursor-pointer transition-transform transform hover:-translate-y-1"
  >
    <div class="p-5">
      <h2 class="text-lg font-semibold text-gray-900">{{ post.title }}</h2>
      <p class="text-gray-600 mt-2 text-sm">
        {{ post.body.substring(0, 100) }}...
      </p>
    </div>
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

<style scoped>

.hover\:shadow-lg:hover {
  transition: all 0.3s ease-in-out;
}
</style>
