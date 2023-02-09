<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="mode === 'create' ? 'เพิ่มการรีดนม' : 'แก้ไขการรีดนม'"
        class="shadow-lg w-full lg:w-3/5 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-1">
          <FormField label="วันที่รีดนม" help="* ห้ามว่าง">
            <FormControl
              v-model="milk.date"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="รอบ" class="lg:col-span-3">
             <FormCheckRadioPicker
              v-model="milk.time"
              type="radio"
              :options="{ M: 'เช้า', A: 'บ่าย' }"
            />
          </FormField>
        </div>
        <CardBox
          title="รายละเอียดการรีดนม"
          class="shadow-lg dark:bg-slate-700"
          header-icon=""
        >
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <FormField label="โค" help="* ห้ามว่าง">
                <DDLCow v-model="milk.cow" valueType="object"/>
            </FormField>
            <FormField label="ปริมาณน้ำนมดิบ" help="* ห้ามว่าง">
              <FormControl
                v-model="milk.qty"
                type="number"
                icon="scale"
              />
            </FormField>
            <FormField label="จำนวนเงินรวม" help="ราคาน้ำนมดิบ/กก. 100 บาท">
              <FormControl
                v-model="calAmount"
                type="number"
                icon="cashMultiple"
              />
            </FormField>
            <BaseButtons
            type="justify-start"
            >
              <BaseButton
                label="เพิ่ม"
                color="success"
                @click="add()"
              />
            </BaseButtons>
          </div>

        <NotificationBar 
          v-if="alert" 
          color="danger" 
          outline
          icon="alertCircleOutline">
            {{ alert }}
        </NotificationBar>
  
        <header
          class="flex items-stretch border-b border-gray-100 dark:border-gray-800"
        >
          <p
            class="flex items-center py-3 grow font-bold"
          >
            รายการรีดนม
          </p>
        </header>
          <div class="overflow-x-auto" v-if="milkDetails.length > 0">
            <table>
              <thead>
                  <tr >
                      <th class="whitespace-nowrap text-center">
                        โค
                      </th>
                      <th class="whitespace-nowrap text-center">
                        ปริมาณน้ำนมดิบ
                      </th>
                      <th class="whitespace-nowrap text-center">
                        จำนวนเงิน
                      </th>
                      <th />
                  </tr>
              </thead>
            <tbody >
                <tr
                  v-for="obj in milkDetails"
                  :key="obj.cow"
                >
                <td data-label="โค" class="text-center">
                    {{ obj.cow.code }} : {{ obj.cow.name }}
                  </td>
                  <td data-label="ปริมาณน้ำนมดิบ" class="text-center">
                    {{ obj.qty }}
                  </td>
                  <td data-label="จำนวนเงิน" class="text-right">
                    {{ obj.amount }}
                  </td>
                  <td class="lg:w-6 whitespace-nowrap">
                      <BaseButtons
                        type="justify-end lg:justify-start"
                        no-wrap
                      >
                        <BaseButton
                            color="danger"
                            label="ลบ"
                            @click="removeDetail(obj)"
                        />
                      </BaseButtons>
                  </td>
                </tr>
            </tbody>
            
            </table>
          </div>
          <div v-else
              class="text-center py-10 text-gray-500 dark:text-gray-400 "
            >
              <p>ไม่มีรายการ...</p>
          </div>
          </CardBox>

  
        <BaseButtons
          type="justify-center"
        >
          <BaseButton
            label="บันทึก"
            color="success"
            type="submit"
            :loading="loading"
          />
          <BaseButton
            label="ยกเลิก"
            color="danger"
            @click="cancel"
          />
        </BaseButtons>
      </CardBox>
    </OverlayLayer>
  </template>
  
  <script >
  import BaseButton from '@/components/BaseButton.vue'
  import BaseButtons from '@/components/BaseButtons.vue'
  import CardBox from '@/components/CardBox.vue'
  import BaseDivider from '@/components/BaseDivider.vue'
  import OverlayLayer from '@/components/OverlayLayer.vue'
  import FormField from '@/components/FormField.vue'
  import FormControl from '@/components/FormControl.vue'
  import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
  import NotificationBar from '@/components/NotificationBar.vue'
  import BaseLevel from '@/components/BaseLevel.vue'
  import DDLCow from '@/components/DDL/Cow.vue'

  import MilkingService from '@/services/milking'
  import { Toast } from "@/utils/alert";
  import moment from 'moment';

  export default {
    data () {
      return {
        milk : {
          cow : null,  
          date : new Date(),
          qty : 0,
          time : 'M',
          amount : 0
        },
        milkDetails : [],
        loading : false,
        alert : ""
      }
    },
    emits:['update:modelValue', 'cancel', 'confirm'],
    computed:{
        calAmount(){
            this.milk.amount = this.milk.qty * 100
            return this.milk.amount
        },
        user() {
          return this.$store.state.auth.user;
        },
        value:{
          get(){
              return this.modelValue
          },
          set(newValue){
              this.$emit('update:modelValue', newValue)
          }
        }
    },
    watch:{
      data : {
        handler (n,o) {
          if(n != null){
            if(this.mode == 'edit'){
              this.milkDetails = n.milkDetails
            }
            this.milk.date = new Date(n.date ? n.date : new Date())
          }
        },
        deep : true
      }
    },
    methods: {
        clear(){
          if(this.mode === 'edit')
            this.$emit('update:data',null);
          this.milk.cow = null
          this.milk.date = new Date()
          this.milk.qty = 0
          this.milk.time = 'M'
          this.milk.amount = 0
          delete this.milk?._id
        },
        confirmCancel(mode){
            this.value = false
            this.$emit(mode)
        },
        confirm(){
            this.clear()
            this.confirmCancel('confirm')
        },
        cancel(){
            this.clear()
            this.confirmCancel('cancel')
        },
        removeDetail(milk){
          let index = this.milkDetails.indexOf(milk);
          if (index !== -1) {
            this.milkDetails.splice(index, 1);
          }
        },
        add(){
          if(this.milk.date && this.milk.cow && this.milk.qty > 0 && this.milk.amount){
              this.milkDetails.push(this.milk)
              this.alert = ""
          }else{
              this.alert = "กรุณากรอกข้อมูลให้ครบ"
          }
        },
        async submit(){
            this.loading = true
            this.alert = ""
            this.milk.milkDetails = this.milkDetails
            try {
                if(this.mode === 'create'){
                  const resp = await MilkingService.create(this.milk);
                  if(resp){
                      this.loading = false  
                      this.value = false
                      this.confirmCancel('confirm')
                      Toast.fire({
                        icon: 'success',
                        title: 'บันทึกข้อมูลสำเร็จ'
                      })
                  }
                }else{
                  const resp = await MilkingService.update(this.milk._id,this.milk);
                  if(resp){
                      this.loading = false  
                      this.value = false
                      this.confirmCancel('confirm')
                  }
                }
            } catch (error) {
              console.error('Error : ',error)
                this.loading = false  
                this.alert = error.response.data.message
            }
            
        },
        formatDate(date){
          return moment(date).format('DD/MM/YYYY HH:mm')
        }
    },
    components : {
      BaseButton,
      BaseButtons,
      CardBox,
      BaseDivider,
      OverlayLayer,
      FormField,
      FormControl,
      NotificationBar,
      BaseLevel,
      DDLCow,
      FormCheckRadioPicker,
    },
    props : {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        },
        mode : {
          type : String,
          default : ""
        },
        data : {
          type : Object,
          default : null
        }
    }
  }
  
  </script>
  
  
  