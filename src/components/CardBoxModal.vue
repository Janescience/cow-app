<script setup>
import { computed } from 'vue'
import { mdiClose } from '@mdi/js'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  largeTitle: {
    type: String,
    default: null
  },
  button: {
    type: String,
    default: 'info'
  },
  buttonLabel: {
    type: String,
    default: 'Done'
  },
  hasCancel: Boolean,
  hasButton : {
    type : Boolean,
    default : false
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  loading : Boolean
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

const confirmCancel = mode => {
  value.value = false
  emit(mode)
}

const confirm = () => confirmCancel('confirm')

const cancel = () => confirmCancel('cancel')
</script>

<template>
  <OverlayLayer
    v-show="value"
    @overlay-click="cancel"
  >
    <CardBox
      v-show="value"
      :title="title"
      class="shadow-lg w-full max-h-modal md:w-1/5 z-50"
      header-icon="close"
      modal
      @header-icon-click="cancel"
    >
      <div class="space-y-3">
        <h1
          v-if="largeTitle"
          class="text-2xl"
        >
          {{ largeTitle }}
        </h1>
        <slot />
      </div>

      <BaseDivider v-if="hasButton"/>

      <BaseButtons v-if="hasButton">
        <BaseButton
          :label="buttonLabel"
          :color="button"
          @click="confirm"
          :loading="loading"
          :disabled="loading"
        />
        <BaseButton
          v-if="hasCancel"
          label="ยกเลิก"
          color="danger"
          @click="cancel"
          :disabled="loading"
        />
      </BaseButtons>
    </CardBox>
  </OverlayLayer>
</template>
