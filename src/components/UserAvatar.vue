<script setup>
import { computed } from 'vue'

const props = defineProps({
  username: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: '/image/img-mockup.png'
  },
  api: {
    type: String,
    default: 'avataaars'
  },
})

const avatar = computed(
  () => props.avatar === '' ? '/image/img-mockup.png' : props.avatar
)

const username = computed(
  () => props.username 
)

</script>

<template>
  <div >
    <img
      :src="avatar"
      :alt="username"
      class="rounded-full  object-cover w-full shadow-lg h-full block bg-gray-100 dark:bg-gray-800"
    >
  </div>
</template>
