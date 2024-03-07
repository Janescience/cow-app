<script setup>
import { mdiCog } from '@mdi/js'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'

defineProps({
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  btnText: {
    type: String,
    default: ''
  },
  pathBack : String,
  hasBtnBack : Boolean,
  hasBtnAdd : Boolean,
  hasBtnSearch : Boolean
})

const emit = defineEmits([ 'openModal'])

const confirmOpenModal = mode => {
  emit(mode)
}

const openModal = () => confirmOpenModal('openModal')

</script>

<template>
  <section class="px-4 sm:px-0 mb-4 flex items-center justify-between">
    <div class="flex items-center justify-start">
      <BaseIcon
        v-if="icon"
        :path="icon"
        size="26"
        class="mr-3"
      />
      <h1 class="lg:text-xl text-base">
        {{ title }}
      </h1>
    </div>
    <div>
      <BaseButton
        v-if="pathBack"
        class="lg:visible invisible"
        label="ย้อนกลับ"
        color="light"
        @click="this.$router.push(pathBack)"
        small
      />
      <BaseButton
        class="text-right text-orange-600 bg-gray-200 dark:bg-gray-900"
        v-if="hasBtnAdd"
        icon="plusThick"
        @click="openModal"
        
      />
    </div>
    
  </section>
</template>
