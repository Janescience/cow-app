<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { getButtonColor } from '@/colors.js'
import BaseIcon from '@/components/BaseIcon.vue'

const props = defineProps({
  label: {
    type: [String, Number],
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  type: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: 'white'
  },
  as: {
    type: String,
    default: null
  },
  small: Boolean,
  teeny : Boolean,
  outline: Boolean,
  active: Boolean,
  disabled: Boolean,
  loading: Boolean
})

const is = computed(() => {
  if (props.as) {
    return props.as
  }

  if (props.to) {
    return RouterLink
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const computedType = computed(() => {
  if (is.value === 'button') {
    return props.type ?? 'button'
  }

  return null
})

const labelClass = computed(() => props.small && props.icon ? 'px-1' : 'px-2')

const componentClass = computed(() => {
  const base = [
    'inline-flex',
    'cursor-pointer',
    'justify-center',
    'items-center',
    'whitespace-nowrap',
    'focus:outline-none',
    'transition-colors',
    'focus:ring',
    'duration-150',
    'shadow-lg',
    'rounded',
    'text-sm',
    props.active ? 'ring-2 ring-gray-300 dark:ring-gray-600' : 'ring-blue-500',
    props.small ? 'p-1' :  props.teeny ? 'p-0' : 'p-2',
    getButtonColor(props.color, props.outline, !props.disabled)
  ]

  if (props.disabled) {
    base.push('cursor-not-allowed', props.outline ? 'opacity-40' : 'opacity-20')
  }

  return base
})
</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :to="to"
    :target="target"
    :disabled="disabled"
  >
    <BaseIcon
      v-if="loading"
      path="dotsCircle"
      size="18"
      class="animate-spin"
    />
    <BaseIcon
      v-if="icon"
      :path="icon"
      size="16"
    />
    <span
      v-if="label"
      :class="labelClass"
    >{{ label }}</span>
  </component>
</template>
