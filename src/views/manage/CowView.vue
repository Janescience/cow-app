<template>
  <LayoutAuthenticated>
    <SectionMain>
      <section class="px-6 sm:px-0 mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <h1 class="text-2xl">
            วัว/โค
          </h1>
        </div>
        <BaseButton
          label="สร้างวัว/โค"
          color="success"
          @click="modalCreate = true"
        />
      </section>
      <CreateCowModal v-model="modalCreate" @confirm="getCows"/>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from '@/components/SectionMain.vue';
import BaseButton from "@/components/BaseButton.vue";
import CreateCowModal from './CowModal.vue'

export default {
  data (){
    return {
      modalCreate : false
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    BaseButton,
    CreateCowModal
  }
}
</script>
