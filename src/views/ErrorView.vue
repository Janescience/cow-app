<script setup>
import SectionFullScreen from '@/components/SectionFullScreen.vue'
import CardBox from '@/components/CardBox.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen
      v-slot="{ cardClass }"
      bg="error"
    >
      <CardBox
        :class="cardClass"
      >
        <div class="space-y-3">
          <h1 class="text-2xl">
            Unhandled exception
          </h1>

          <p>An Error Occurred</p>
        </div>

        <BaseDivider />

        <BaseButtons>
          <BaseButton
            label="Done"
            to="/overview/farm"
            color="danger"
          />
        </BaseButtons>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
