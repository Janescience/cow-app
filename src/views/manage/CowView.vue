<template>
  <LayoutAuthenticated>
    <SectionMain>
      <section class="px-6 sm:px-0 mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <BaseIcon
            path="cow"
            size="30"
            class="mr-3"
          />
          <h1 class="text-2xl">
            โค
          </h1>
        </div>
        <BaseButton
          label="เพิ่มโค"
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
import BaseIcon from "@/components/BaseIcon.vue";
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
    BaseIcon,
    CreateCowModal
  }
}
</script>
