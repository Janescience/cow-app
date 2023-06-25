<script setup>
import { useLayoutStore } from '@/store/theme/layout.js'

const layoutStore = useLayoutStore()

const outsideMenuClick = () => {
  layoutStore.isAsideMobileExpanded = false
}


</script>
<template>
  <section class="px-0 min-h-screen md:px-6 py-6 text-sm lg:text-base" @click="outsideMenuClick">
    <slot />
  </section>
</template>
