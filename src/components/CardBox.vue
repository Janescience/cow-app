<script setup>
import { mdiCog } from '@mdi/js'
import { computed } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'

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
  hasScroll : Boolean,
  btnLabel : String,
  btnColor : String
})

const emit = defineEmits(['header-icon-click', 'submit'])

const is = computed(() => props.form ? 'form' : 'div')

const componentClass = computed(() => {
  const base = [
    props.rounded,
    props.modal ? 'dark:bg-gray-900 bg-white' : 'dark:bg-gray-900 dark:border-gray-800 border-gray-300 border' 
  ]

  if (props.hoverable) {
    base.push('hover:shadow-lg transition-shadow duration-500')
  }

  return base
})

const computedHeaderIcon = computed(() => props.headerIcon ?? 'cog')

const headerIconClick = () => {
  emit('header-icon-click')
}

const submit = e => {
  emit('submit', e)
}
</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    class=" shadow-lg "
    @submit="submit"
  >
    <header
      v-if="title"
      class="flex lg:text-lg text-base items-stretch border-b border-gray-100 dark:border-gray-800"
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
      class="text-center py-5 text-gray-500 dark:text-gray-400 "
    >
      <p class="text-gray-500 text-sm">ไม่มีรายการ...</p>
    </div>
    <div
      v-else-if="loading"
      class="text-center py-10 text-gray-500 dark:text-gray-400 "
    >
      <BaseIcon
        v-if="loading"
        path="cow"
        size="20"
        class="animate-ping"
      />
      <p class="text-gray-500 text-sm"> กำลังโหลดข้อมูล...</p>
    </div>
    <div
      v-else
      :class="{'p-4':!hasTable,
               'overflow-x-hidden overflow-y-auto max-h-modal' : hasScroll
              }"
    >
      <slot />
    </div>
  </component>
</template>
