<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="mode === 'create' ? 'การรีดนม' : 'การรีดนม (' + ((milk.time == 'M' ? 'เช้า':'บ่าย') + ' - ' + formatDate(milk.date)) + ')'"
        class="shadow-lg w-full  lg:p-4 lg:w-2/3 z-50"
        header-icon="close"
        modal
        form
        has-table
        has-scroll
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid lg:grid-cols-4 grid-cols-2 gap-5 p-4" v-if="mode != 'edit'">
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
          <div  class="grid grid-cols-2 lg:grid-cols-5 gap-5 p-4">
            <FormField label="โค" help="* ห้ามว่าง" class="col-span-2">
                <DDLCow v-model="milkDetail.cow" valueType="object" :filter="{sex:'F',status:[1,3]}"/>
            </FormField>
            <FormField label="น้ำนมดิบ (กก.)" help="* ห้ามว่าง">
              <FormControl
                v-model="milkDetail.qty"
                type="number"
                icon="scale"
              />
            </FormField>
            <FormField label="ราคา/กก." help="* ห้ามว่าง">
              <FormControl
                v-model="priceRawMilk"
                type="number"
                icon="cash"
              />
            </FormField>
            <FormField label="คิดเป็นเงิน" >
              <FormControl
                v-model="calAmount"
                type="number"
                icon="cashMultiple"
              />
            </FormField>
            
          </div>

          <BaseButtons
            class="lg:col-span-4 col-span-2 mb-1"
            type="justify-center"
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

          <NotificationBar 
            v-if="alert?.text" 
            :color="alert.color" 
            outline
            icon="alertCircleOutline">
              {{ alert.text }}
          </NotificationBar>

          <BaseLevel class="p-1 mb-2" v-if="milkDetails.length > 0" type="justify-end dark:bg-gray-800">
            รวมน้ำนมดิบ <p class="underline decoration-2 p-2 decoration-orange-600">{{ $filters.number(sum().qty) }}</p>  กก. 
            คิดเป็นเงิน <p class="underline decoration-2 p-2 decoration-orange-600">{{ $filters.currency(sum().amount) }}</p> บาท
          </BaseLevel>
          
          <Table
            :title="'รายการโครีดนม ('+milkDetails.length+' ตัว)'"
            icon="cupWater"
            :items="milkDetails"
            :datas="milkDetailColumns"
            @delete="removeDetail"
            :buttons="buttons"
            perPage="10"
            :loading="loading"
          />

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
  import Table from '@/components/Table.vue'
  import DDLCow from '@/components/DDL/Cow.vue'

  import MilkingService from '@/services/milking'
  import CowService from '@/services/cow'
  import ParamService from '@/services/param'
  import { Toast } from "@/utils/alert";
  import moment from 'moment';

  export default {
    data () {
      return {
        cowAll : false,
        cowOne : false,
        milk : {
          date : new Date(),
          time : this.checkTime(),
        },
        milkDetail : {
          cow : null,
          qty : null,
          amount : null
        },
        priceRawMilk : null,
        milkDetails : [],
        milkDetailColumns : [
          {
            label:'รหัสโค',
            value:'cow.code'
          },
          {
            label:'ชื่อโค',
            value:'cow.name'
          },
          {
            label:'น้ำนมดิบ (กก.)',
            value:'qty',
            class: 'text-center',
            object : 'text-box',
            type:'number'
          },
          {
            label:'จำนวนเงิน',
            class: 'text-right',
            value:'amount',
            type : 'currency'
          },
        ],
        buttons : [
          {
            label : 'ลบ',
            type : 'delete',
            color : 'danger',
          },
        ],
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
        async milkDetailInit(){
          this.milkDetails = []
          const resp = await CowService.all();
          if(resp.data){
            const cows = resp.data.cows;
            for(let cow of cows){
              if(cow.status == 1 || cow.status == 3){
                this.milkDetails.push({cow:{code:cow.code,name:cow.name}})
              }
            } 
          }
        },
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
          console.log(milk)
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
        sum(){
          const qty = this.milkDetails.reduce((sum, item) => sum + item.qty, 0);
          const amount = this.milkDetails.reduce((sum, item) => sum + item.amount, 0);
          return {qty,amount}
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
      Table
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
  
  
  