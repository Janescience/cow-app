<template>
    <LayoutAuthenticated>
      <SectionMain>

      </SectionMain>
    </LayoutAuthenticated>
</template>

<script >
    import SectionMain from '@/components/SectionMain.vue'
    import BaseButton from '@/components/BaseButton.vue'
    import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
        
    export default {
        
      data(){
        return {
        }
      },

      components : {
        SectionMain,
        BaseButton,
        LayoutAuthenticated,
      },

      methods : {
        
      }
    }
</script>