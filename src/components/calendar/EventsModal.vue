
<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="date"
        class="shadow-lg w-full  md:w-3/5 lg:w-1/1 z-50"
        header-icon="close"
        modal
        form
        @header-icon-click="cancel"
      >
        
        
  
        <BaseButtons
          type="justify-center"
        >
          <BaseButton
            label="ปิด"
            color="danger"
            @click="cancel"
          />
        </BaseButtons>
      </CardBox>
    </OverlayLayer>
</template>
  
<script>
import OverlayLayer from '@/components/OverlayLayer.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'

import moment from 'moment';
import 'moment/dist/locale/th';
moment.locale('th')

export default {
    data () {
      return {}
    },
    emits:['update:modelValue', 'cancel'],
    computed:{
        value:{
          get(){
              return this.modelValue
          },
          set(newValue){
              this.$emit('update:modelValue', newValue)
          }
        },
        date(){
            let date = moment(new Date(this.year,this.month,this.day)).format('dddd DD MMMM yyyy').split(' ');
            return 'วัน' + date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + (Number(date[3]) + 543)
        }
    },
    methods : {
        confirmCancel(mode){
            this.value = false
            this.$emit(mode)
        },
        cancel(){
            this.confirmCancel('cancel')
        },
    },
    components : {
      BaseButton,
      BaseButtons,
      CardBox,
      OverlayLayer,
    },
    props : {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        },
        day: {
            type: Number,
            required: true,
        },
        month: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        events: {
            type: Object,
            required: true,
        },
    }
}

</script>