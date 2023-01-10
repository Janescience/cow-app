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
        size="30"
        class="mr-3"
      />
      <h1 class="text-2xl">
        {{ title }}
      </h1>
    </div>
    <BaseButton
      class="text-right"
      v-if="hasBtnAdd"
      :label="btnText"
      color="success"
      @click="openModal"
    />
  </section>
</template>
