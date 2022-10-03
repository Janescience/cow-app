<script setup>
import { computed } from 'vue'

const props = defineProps({
  username: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: '../src/assets/image/img-mockup.png'
  },
  api: {
    type: String,
    default: 'avataaars'
  },
})

const avatar = computed(
  () => props.username ? `https://avatars.dicebear.com/api/${props.api}/${props.username}.svg` : props.avatar
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
      class="rounded-lg  block h-auto shadow w-full max-w-full bg-gray-100 dark:bg-gray-800"
    >
  </div>
</template>
