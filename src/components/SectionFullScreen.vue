<script setup>
import { computed } from 'vue'
import { useStyleStore } from '@/store/theme/style'
import { sectionBgLogin, sectionBgLoginDark, sectionBgError, sectionBgErrorDark } from '@/colors'
import SectionMain from '@/components/SectionMain.vue'

const props = defineProps({
  bg: {
    type: String,
    required: true,
    validator: value => ['login', 'error'].includes(value)
  }
})

const styleStore = useStyleStore()

const colorClass = computed(() => {
  switch (props.bg) {
    case 'login':
      return styleStore.darkMode ? sectionBgLoginDark : sectionBgLogin
    case 'error':
      return styleStore.darkMode ? sectionBgErrorDark : sectionBgError
  }

  return ''
})
</script>

<template>
  <SectionMain
    class="flex min-h-screen items-center justify-center"
    :class="colorClass"
  >
    <slot
      card-class="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"
      card-rounded="rounded-lg"
    />
  </SectionMain>
</template>
