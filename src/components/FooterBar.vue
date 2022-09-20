<script setup>
import { computed } from 'vue'
import BaseLevel from '@/components/BaseLevel.vue'
import JustboilLogo from '@/components/JustboilLogo.vue'

const year = computed(() => new Date().getFullYear())
</script>

<template>
  <footer
    class="bg-white py-2 px-6 dark:bg-gray-900/70 w-full text-zinc-400 fixed bottom-0"
  >
    <BaseLevel type="justify-center">
      <div class="text-center text-xs">
        &copy; 2022 - {{ year }}, <a
          href="https://dairy-farm.com/"
          target="_blank"
        >dairy-farm.com</a> , janescience@xclude.dev
      </div>
    </BaseLevel>
  </footer>
</template>
