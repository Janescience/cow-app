
<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="date"
        class="shadow-lg w-full md:w-3/5 lg:w-1/1 z-50"
        header-icon="close"
        modal
        form
        @header-icon-click="cancel"
      >
      <div class="overflow-x-auto">
        <table>
          <thead>
            <tr >
                <th class="whitespace-nowrap">วันที่ครบกำหนด</th>
                <th class="whitespace-nowrap">หัวข้อ</th>
                <th class="whitespace-nowrap">รายละเอียด</th>
                <th class="whitespace-nowrap">การแจ้งเตือน</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="event in events"
              :key="event._id"
            >
              <td data-label="วันที่ครบกำหนด" class="whitespace-nowrap">
                {{ formatDate(event.date,'dddd DD MMMM yyyy') }}
              </td>
              <td data-label="หัวข้อ" class="whitespace-nowrap">
                {{ event.title }}
              </td>
              <td data-label="รายละเอียด" class="whitespace-nowrap">
                {{ event.description }}
              </td>
              <td data-label="การแจ้งเตือน" class="whitespace-nowrap">
                {{ event.alert ? 'แจ้งเตือนแล้ว' : 'ยังไม่แจ้งเตือน' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        
  
        <BaseButtons
          type="justify-center"
          class="mt-5"
        >
          <BaseButton
            label="ปิด"
            color="danger"
            @click="cancel"
            small
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
        formatDate(date,format){
          return moment(date).format(format);
        }
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