<script setup>
import { computed } from 'vue'
import { useLayoutStore } from '@/store/theme/layout.js'
import { useStyleStore } from '@/store/theme/style.js'
import menu from '@/menu.js'
import NavBar from '@/components/NavBar.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import FooterBar from '@/components/FooterBar.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'

const styleStore = useStyleStore()

const layoutStore = useLayoutStore()

const isAsideLgActive = computed(() => layoutStore.isAsideLgActive)

const overlayClick = () => {
  layoutStore.asideLgToggle(false)
}
</script>

<template>
  <div :class="{ 'dark': styleStore.darkMode, 'overflow-hidden lg:overflow-visible': layoutStore.isAsideMobileExpanded }">
    <div
      :class="[styleStore.appStyle, { 'ml-64 lg:ml-0': layoutStore.isAsideMobileExpanded }]"
      class="lg:pt-14 pb-14 xl:pl-64 w-screen transition-position lg:w-auto "
    >
      <NavBar />
      <AsideMenu :menu="menu" />
      <slot />
      <!-- <FooterBar /> -->
      <OverlayLayer
        v-show="isAsideLgActive"
        z-index="z-30"
        @overlay-click="overlayClick"
      />
    </div>
  </div>
</template>
