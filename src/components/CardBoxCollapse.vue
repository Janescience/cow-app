<script setup>
import { mdiCog } from '@mdi/js'
import { computed , ref } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  headerIcon: {
    type: String,
    default: null
  },
  rounded: {
    type: String,
    default: 'md:rounded-2xl'
  },
  hasTable: Boolean,
  empty: Boolean,
  loading: Boolean,
  form: Boolean,
  hoverable: Boolean,
  modal: Boolean,
})
var collapse = ref(false);
const emit = defineEmits(['header-icon-click', 'submit'])

const is = computed(() => props.form ? 'form' : 'div')

const componentClass = computed(() => {
  const base = [
    props.rounded,
    props.modal ? 'dark:bg-gray-900' : 'dark:bg-gray-900'
  ]

  if (props.hoverable) {
    base.push('hover:shadow-lg transition-shadow duration-500')
  }

  return base
})

const computedHeaderIcon = computed(() => collapse.value ? 'chevronDown' : 'chevronUp')

const headerIconClick = () => {
  emit('header-icon-click')
}

const submit = e => {
  emit('submit', e)
}

const collapseClick = () => {
  collapse.value = !collapse.value
}

</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    class="bg-white border shadow-lg border-gray-300 dark:border-gray-900"
    @submit="submit"
  >
    <header
      v-if="title"
      @click="collapseClick"
      class="flex items-stretch border-b border-gray-100 dark:border-gray-800"
    >
      <p
        class="flex items-center py-3 grow font-bold"
        :class="[ icon ? 'px-4' : 'px-6' ]"
      >
        <BaseIcon
          v-if="icon"
          :path="icon"
          class="mr-3"
        />
        {{ title }}
      </p>
      <a
        v-if="computedHeaderIcon"
        href="#"
        class="flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring"
        aria-label="more options"
        @click.prevent="headerIconClick"
      >
        <BaseIcon :path="computedHeaderIcon" size="18"/>
      </a>
    </header>
    <div
      v-if="empty"
      class="text-center py-10 text-gray-500 dark:text-gray-400 "
    >
      <p>ไม่มีรายการ...</p>
    </div>
    <div
      v-else-if="loading"
      class="text-center py-10 text-gray-500 dark:text-gray-400 "
    >
      <BaseIcon
        v-if="loading"
        path="dotsCircle"
        size="22"
        class="animate-spin"
      />
      <p> กำลังโหลดข้อมูล...</p>
    </div>
    <div
      v-else-if="collapse"
      :class="{'p-6':!hasTable}"
    >
      <slot />
    </div>
  </component>
</template>
