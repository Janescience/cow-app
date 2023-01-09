<script setup>
import { computed } from 'vue'
import PillTag from '@/components/PillTag.vue'

const props = defineProps({
  trend: {
    type: String,
    required: true
  },
  trendType: {
    type: Number,
  },
  small: Boolean
})

const trendStyle = computed(() => {
  if (props.trendType == 1) {
    return {
      icon: 'humanPregnant',
      style: 'warning'
    }
  }

  if (props.trendType == 2) {
    return {
      icon: 'waterRemoveOutline',
      style: 'danger'
    }
  }

  if (props.trendType == 3) {
    return {
      icon: 'water',
      style: 'success'
    }
  }

  if (props.trendType == 4) {
    return {
      icon: 'babyFaceOutline',
      style: 'light'
    }
  }

  return {
    style: 'info'
  }
})
</script>

<template>
  <PillTag
    :text="trend"
    :type="trendStyle.style"
    :icon="trendStyle.icon"
    :small="small"
  />
</template>
