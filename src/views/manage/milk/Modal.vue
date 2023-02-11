<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="mode === 'create' ? 'การรีดนม' : 'การรีดนม (' + ((milk.time == 'M' ? 'เช้า':'บ่าย') + ' - ' + formatDate(milk.date)) + ')'"
        class="shadow-lg w-full  lg:w-1/2 z-50"
        header-icon="close"
        modal
        form
        has-scroll
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 gap-3 mt-1" v-if="mode != 'edit'">
          <FormField label="วันที่รีดนม" help="* ห้ามว่าง" >
            <FormControl
              v-model="milk.date"
              icon="calendar"
              type="date"
              required
              :disabled="mode == 'edit'"
            />
          </FormField>
          <FormField label="รอบ" >
             <FormCheckRadioPicker
              v-model="milk.time"
              type="radio"
              :options="{ M: 'เช้า', A: 'บ่าย' }"
              :disabled="mode == 'edit'"
            />
          </FormField>
        </div>
        <BaseDivider v-if="mode != 'edit'"/>
        <!-- <CardBox
          title="รายละเอียดการรีดนม"
          class="shadow-lg dark:bg-slate-700 mb-3"
          header-icon=""
        > -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <FormField label="โค" help="* ห้ามว่าง">
                <DDLCow v-model="milkDetail.cow" valueType="object"/>
            </FormField>
            <FormField label="น้ำนมดิบ/กก." help="* ห้ามว่าง">
              <FormControl
                v-model="milkDetail.qty"
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
                color="info"
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
                        น้ำนมดิบ/กก.
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
                  :key="obj.cow._id"
                >
                <td data-label="โค" >
                    {{ obj.cow.code }} : {{ obj.cow.name }}
                  </td>
                  <td data-label="น้ำนมดิบ/กก." class="text-center">
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
                            
                            icon="trashCanOutline"
                            small
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
        <!-- </CardBox> -->

  
        <BaseButtons
          type="justify-center mt-3"
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
  import BaseIcon from '@/components/BaseIcon.vue'
  import DDLCow from '@/components/DDL/Cow.vue'

  import MilkingService from '@/services/milking'
  import { Toast } from "@/utils/alert";
  import moment from 'moment';

  export default {
    data () {
      return {
        milk : {
          date : new Date(),
          time : 'M',
        },
        milkDetail : {
          cow : null,
          qty : null,
          amount : null
        },
        milkDetails : [
          {
            cow : {code : 'C100',name : 'ทองมัน'},
            qty : 10,
            amunt : 1000
          },
          {
            cow : {code : 'C200',name : 'ทองบด'},
            qty : 8,
            amunt : 800
          }
        ],
        loading : false,
        alert : ""
      }
    },
    emits:['update:modelValue', 'cancel', 'confirm'],
    computed:{
        calAmount(){
            this.milkDetail.amount = this.milkDetail.qty * 100
            return this.milkDetail.amount
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
            this.milk.time = n.time ? n.time : 'M'
            this.milk._id = n._id
          }
        },deep : true
      }
    },
    methods: {
        clear(){
          if(this.mode === 'edit')
            this.$emit('update:data',null);
          this.milk.date = new Date()
          this.milk.time = 'M'
          this.milkDetails = []
          this.$emit('update:mode',"");
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
          if(this.milkDetail.cow && this.milkDetail.qty > 0 && this.milkDetail.amount){
            let dup = this.milkDetails.filter(x => x.cow.code === this.milkDetail?.cow.code).length
            if(dup <= 0){
              this.milkDetails.push(this.milkDetail)
              this.alert = ""
              this.milkDetail = {}
            }else{
              this.alert = "โคซ้ำ"
            }
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
                      this.confirm()
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
                      this.confirm()
                  }
                }
            } catch (error) {
              console.error('Error : ',error)
                this.loading = false  
                this.alert = error.response.data.message
            }
            
        },
        formatDate(date){
          return moment(date).format('DD/MM/YYYY')
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
      BaseIcon,
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
  
  
  