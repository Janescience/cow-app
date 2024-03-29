<script setup>
import { ref, computed, useSlots } from 'vue'
import { mdiClose } from '@mdi/js'
import { colorsBg, colorsBorders, colorsOutline } from '@/colors.js'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/BaseButton.vue'

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  outline: Boolean,
  color: {
    type: String,
    required: true
  }
})

const componentClass = computed(() => props.outline
  ? colorsOutline[props.color]
  : [colorsBg[props.color], colorsBorders[props.color]])

const isDismissed = ref(false)

const dismiss = () => {
  isDismissed.value = true
}

const slots = useSlots()

const hasRightSlot = computed(() => slots.right)
</script>

<template>
  <div
    v-if="!isDismissed"
    :class="componentClass"
    class="px-3 py-1 mb-3 mt-3 last:mb-0 border rounded transition-colors duration-150"
  >
    <BaseLevel>
      <div class="flex flex-row items-center">
        <BaseIcon
          v-if="icon"
          :path="icon"
          w="w-10 md:w-5"
          h="h-10 md:h-5"
          size="20"
          class="md:mr-2"
        />
        <span class="text-center md:text-left text-xs"><slot /></span>
      </div>

        <slot
          v-if="hasRightSlot"
          name="right"
        />
        <BaseButton
          v-else
          icon="close"
          :outline="outline"
          small
          @click="dismiss"
        />

    </BaseLevel>
  </div>
</template>
