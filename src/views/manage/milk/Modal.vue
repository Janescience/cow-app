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
      
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-5" v-if="mode != 'edit'">
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
              name="milk-time"
              :options="{ M: 'เช้า', A: 'บ่าย' }"
              :disabled="mode == 'edit'"
            />
          </FormField>
        </div>
        <BaseDivider v-if="mode != 'edit'"/>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <FormField label="โค" help="* ห้ามว่าง">
                <DDLCow v-model="milkDetail.cow" valueType="object"/>
            </FormField>
            <FormField label="น้ำนมดิบ (กก.)" help="* ห้ามว่าง">
              <FormControl
                v-model="milkDetail.qty"
                type="number"
                icon="scale"
              />
            </FormField>
            <FormField label="คิดเป็นเงิน" :help="'ราคาน้ำนมดิบ/กก. '+priceRawMilk+' บาท'">
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
                label="ล้าง"
                color="danger"
                @click="reset()"
              />
              <BaseButton
                label="เพิ่ม"
                color="info"
                @click="add()"
              />
            </BaseButtons>
          </div>

        <NotificationBar 
          v-if="alert?.text" 
          :color="alert.color" 
          outline
          icon="alertCircleOutline">
            {{ alert.text }}
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
                        รหัสโค
                      </th>
                      <th class="whitespace-nowrap text-center">
                        ชื่อโค
                      </th>
                      <th class="whitespace-nowrap text-center">
                        น้ำนมดิบ (กก.)
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
                  <td data-label="รหัสโค" class="whitespace-nowrap">
                    {{ obj.cow.code }}
                  </td>
                  <td data-label="ชื่อโค" class="whitespace-nowrap">
                    {{ obj.cow.name }}
                  </td>
                  <td data-label="น้ำนมดิบ/กก." class="text-center whitespace-nowrap">
                    {{ obj.qty.toFixed(2) }}
                  </td>
                  <td data-label="จำนวนเงิน" class="text-right whitespace-nowrap">
                    {{ obj.amount.toFixed(2) }}
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
              class="text-center py-10 text-gray-500 dark:text-gray-400"
            >
              <p>ไม่มีรายการ...</p>
          </div>  
        <BaseButtons
          type="justify-center mt-3"
        >
          
          <BaseButton
            label="ยกเลิก"
            color="danger"
            @click="cancel"
          />
          <BaseButton
            label="บันทึก"
            color="success"
            type="submit"
            :disabled="milkDetails.length == 0"
            :loading="loading"
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
  import ParamService from '@/services/param'
  import { Toast } from "@/utils/alert";
  import moment from 'moment';

  export default {
    data () {
      return {
        milk : {
          date : new Date(),
          time : this.checkTime(),
        },
        milkDetail : {
          cow : {},
          qty : null,
          amount : null
        },
        priceRawMilk : null,
        milkDetails : [],
        loading : false,
        alert : {}
      }
    },
    emits:['update:modelValue', 'cancel', 'confirm'],
    computed:{
        calAmount(){
            this.milkDetail.amount = this.milkDetail.qty * this.priceRawMilk
            return this.milkDetail.amount.toFixed(2)
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
          if(n){
            if(this.mode == 'edit'){
              this.milkDetails = n.milkDetails
            }
            this.milk.date = n.date ? new Date(n.date) : new Date()
            this.milk._id = n._id
            this.milk.time = n.time ? n.time : this.checkTime()
            this.getPriceRawMilk();
          }
        }
      },
      'milkDetail.cow'(n){
        if(n != null && Object.keys(n).length > 0 && this.milkDetails.length > 0){
          this.alert = {};
          const checkDup = this.milkDetails.filter(md => md.cow.code === n.code).length
          if(checkDup > 0){
            this.milkDetail.cow = {}
            this.alert.text = 'โคซ้ำ กรุณาเลือกรายการอื่น'
            this.alert.color = 'warning'
          }
        }
      }
    },
    created(){
      this.getPriceRawMilk()
    },
    methods: {
        clear(){
          this.milk = {}
          this.milk.date = new Date()
          this.milk.time = 'M'
          this.milkDetails = []
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
        reset(){
          this.milkDetail.cow = {}
          this.milkDetail.qty = null
          this.milkDetail.amount = null
        },
        checkTime(){
          const time = new Date().getHours()
          return time <= 12 ? 'M' : 'A'
        },
        add(){
          if(this.milkDetail.cow && this.milkDetail.qty > 0 && this.milkDetail.amount){
            let dup = this.milkDetails.filter(x => x.cow.code === this.milkDetail?.cow.code).length
            if(dup <= 0){
              this.milkDetails.push(this.milkDetail)
              this.alert = {}
              this.milkDetail = {}
            }else{
              this.alert.text = "โคซ้ำ"
              this.alert.color = 'warning'
            }
          }else{
              this.alert.text = "กรุณากรอกข้อมูลให้ครบ"
              this.alert.color = 'warning'
          }
        },
        async submit(){
            this.loading = true
            this.alert = {}
            this.milk.milkDetails = this.milkDetails
            const milkCreate = {...this.milk};
            try {
                if(this.mode === 'create'){
                  const resp = await MilkingService.create(milkCreate);
                  if(resp){
                      this.loading = false  
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
                      this.confirm()
                      Toast.fire({
                        icon: 'success',
                        title: 'บันทึกข้อมูลสำเร็จ'
                      })
                  }
                }
            } catch (error) {
              console.error('Error : ',error)
                this.loading = false  
                this.alert.text = error.response.data.message
                this.alert.color = 'danger'
            }
            
        },
        async getPriceRawMilk(){
          const resp = await ParamService.all({code:'RAW_MILK'});
          if(resp.data){
            const params = resp.data.params;
            if(params.length > 0){
              this.priceRawMilk = params[0].valueNumber
            }
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
  
  
  