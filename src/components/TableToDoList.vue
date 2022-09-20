<template>

  <CardBox
    v-if="list.length > 0"
    has-table
  >
    <table>
      <thead>
        <tr>
          <th>รายการ</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="todo in list"
          :key="todo.desc"
        >
          <td data-label="รายการ">
            {{ todo.desc }}
          </td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <BaseButtons
              type="justify-start lg:justify-end"
              no-wrap
            >
              <BaseButton
                color="info"
                icon=""
                label="ตรวจสอบ"
                @click="$router.push(todo.path)"
              />

            </BaseButtons>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"/>
  </CardBox>
  <CardBox v-else empty/>
</template>

<script>
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBox from './CardBox.vue'

export default {
    data() {
        return {
          list : [],
        }
    },
    watch : {
      data : function(n,o){
        if(n){
          this.analyze()
        }
      }
    },
    props : {
      data : {
        type : Object,
        default : null
      }
    },
    methods: {
      analyze(){
        if(this.data.countGroupExpired > 0){
          this.list.push(
              {
                desc:'วงแชร์กำลังเล่นที่ยังไม่ได้จบวง จำนวน ' + this.data.countGroupExpired + ' วง กรุณาตรวจสอบและจบวง',
                path : '/groups'
              }
            )
        }
        if(this.data.countGroupNew > 0){
          this.list.push(
              {
                desc:'วงแชร์สร้างใหม่ จำนวน ' + this.data.countGroupNew + ' วง กรุณาลงลูกแชร์ให้ครบและเริ่มวง',
                path : '/groups'
              }
            )
        }
        if(this.data.countDebtNotComplete > 0){
          this.list.push(
              {
                desc:'ยอดค้างจ่าย จ่ายครบแล้วแต่ยังไม่เสร็จสิ้น จำนวน ' + this.data.countDebtNotComplete + ' คน ',
                path : '/debts'
              }
            )
        }
      }
    },
    components : {
      BaseLevel,
      BaseButtons,
      BaseButton,
      CardBox
    }
}
</script>
