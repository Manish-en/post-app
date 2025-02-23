import { defineStore } from 'pinia'

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    cacheTimestamp: 0
  }),
  actions: {
    async fetchPosts() {
      const CACHE_DURATION = 15 * 60 * 1000 // 15 minutes
      const currentTime = Date.now()

      if (this.posts.length > 0 && currentTime - this.cacheTimestamp < CACHE_DURATION) {
        console.log('Returning cached posts')
        return
      }

      try {
        const response = await fetch('https://dummyjson.com/posts')
        const data = await response.json()
        this.posts = data.posts
        this.cacheTimestamp = currentTime
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }
})
