<template>
  <LayoutAuthenticated>
    <SectionMain>
      
      <section class="px-4 sm:px-0 mb-4 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <BaseIcon
            path="cow"
            size="30"
            class="mr-3"
          />
          <h1 class="text-2xl">
            รายละเอียดโค
          </h1>
        </div>
        <BaseButtons>
          <BaseButton
            label="ย้อนกลับ"
            color="info"
            @click="this.$router.push('/manage/cow')"
          />
          <BaseButton
            label="บันทึก"
            color="success"
            @click="update()"
          />
        </BaseButtons>
      </section>

      <CardBox 
        class="mb-5"
        :loading="loading"
        title="ข้อมูลโค"
        header-icon=""
      >
        <div class="grid lg:gap-3 md:gap-2 gap-5 grid-cols-2 lg:grid-cols-6 md:grid-cols-4">
          <div class="row-span-2 ">
            <ImageUpload v-model="cow.image"/>
            <BaseLevel type="justify-center text-xs ">
              อัพโหลดรูปภาพ (คลิกที่รูป)
            </BaseLevel>
          </div>
          <FormField label="รหัสโค" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.code"
              icon="barcode"
              required
            />
          </FormField>
          <FormField label="ชื่อโค" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.name"
              icon="cow"
              required
            />
          </FormField>
          <FormField label="วันเกิด" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.birthDate"
              icon="calendar"
              type="date"
              required
            />
          </FormField>
          <FormField label="สถานะ" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.status"
              :options="status"
              icon=""
              required
            />
          </FormField>
          <FormField label="คุณภาพน้ำนม" help="* ห้ามว่าง">
            <FormControl
              v-model="cow.quality"
              :options="quality"
              icon=""
            />
          </FormField>
          <FormField label="คอก">
            <FormControl
              v-model="cow.corral"
              icon="barn"
            />
          </FormField>
          <FormField label="พ่อพันธุ์">
            <FormControl
              v-model="cow.dad"
              icon="genderMale"
            />
          </FormField>
          <FormField label="แม่พันธุ์">
            <FormControl
              v-model="cow.mom"
              icon="genderFemale"
            />
          </FormField>
        </div>
      </CardBox>

      <Table
        title="ข้อมูลการรีดนม" 
        :items="milks" 
        :datas="milkDatas"
      />

      <Table
        title="ข้อมูลการสืบพันธ์ุ/ผสมพันธ์ุ" 
        :items="reproducts" 
        :datas="reproductDatas" 
      />
          
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from '@/components/SectionMain.vue';
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import ImageUpload from '@/components/ImageUpload.vue'
import Table from "@/components/Table.vue";

import CowService from '@/services/cow'
import MilkService from '@/services/milking'
import ReproductService from '@/services/reproduction'
import getAge from "@/utils/age-calculate";
import { getCurrentUser } from "@/utils";
import { Toast } from "@/utils/alert";
import { status,quality } from '@/constants/cow'
import { reproductResult,reproductStatus } from '@/constants/reproduct'


export default {
  data (){
    return {
      cow : null,
      milks : [],
      reproducts : [],
      loading : false,
      alert : "",
      status : status('create'),
      quality : quality('create'),
      milkDatas : [
        {
          label : "วันที่รีดนม",
          class : 'text-center',
          type : 'date',
          value : 'date',
        },
        {
          label : "ปริมาณน้ำนมดิบ/เช้า (กก.)",
          class : 'text-center',
          value : 'morningQty',
        },
        {
          label : "ปริมาณน้ำนมดิบ/บ่าย (กก.)",
          class : 'text-center',
          value : 'afternoonQty',
        },
        {
          label : "ปริมาณน้ำนมดิบรวม (กก.)",
          class : 'text-center',
          func : (obj) => {
            return obj.morningQty + obj.afternoonQty
          },
        },
        {
          label : "จำนวนเงินรวม",
          class : 'text-right',
          type : 'number',
          value : 'amount',
        },
      ],
      reproductDatas : [
        {
          label : "ครั้งที่",
          class : 'text-center',
          value : 'seq',
        },
        {
          label : "วันที่เข้าระบบสืบพันธุ์",
          class : 'text-center',
          value : 'loginDate',
          type : 'date',
        },
        {
          label : 'ผล',
          func : (obj) => {
            return reproductResult()[obj.result].label
          },
        },
        {
          label : "วันที่เป็นสัด",
          class : 'text-center',
          value : 'estrusDate',
          type : 'date',
        },
        {
          label : "วันที่ผสมพันธุ์",
          class : 'text-center',
          value : 'matingDate',
          type : 'date',
        },
        {
          label : "วันที่ตรวจท้อง",
          class : 'text-center',
          value : 'checkDate',
          type : 'date',
        },
        {
          label : "พ่อพันธุ์",
          value : 'dad',
        },
        {
          label : 'สถานะ',
          func : (obj) => {
            return reproductStatus()[obj.status].label
          },
        },
        {
          label : "วิธีรักษา",
          value : 'howTo',
        },
      ],
    }
  },
 
  components : {
    SectionMain,
    LayoutAuthenticated,
    BaseButton,
    BaseIcon,
    BaseButtons,
    CardBox,
    FormControl,
    FormField,
    UserAvatar,
    BaseLevel,
    ImageUpload,
    Table
},
  created() {
    this.getCow(this.$route.params.id);
    this.getMilks(this.$route.params.id);
    this.getReproducts(this.$route.params.id);
  },
  methods : {
    async getCow(id){
      this.loading = true
      const resp = await CowService.get(id);
      this.cow = null
      if(resp.data){
        this.cow = resp.data.cow
        this.cow.birthDate = new Date(this.cow.birthDate)
      }
      this.loading = false
    },
    async getMilks(id){
      this.loading = true
      const resp = await MilkService.all({cow:id,farm:getCurrentUser().farm._id});
      this.milks = []
      if(resp.data){
        this.milks = resp.data.milkings
      }
      this.loading = false
    },
    async getReproducts(id){
      this.loading = true
      const resp = await ReproductService.all({cow:id,farm:getCurrentUser().farm._id});
      this.reproducts = []
      if(resp.data){
        this.reproducts = resp.data.reproducts
      }
      this.loading = false
    },
    async update(){
        this.loading = true
        this.alert = ""
        try {
            const resp = await CowService.update(this.cow._id,this.cow);
            if(resp){
              this.getCow(this.$route.params.id)
              this.loading = false  
              Toast.fire({
                icon: 'success',
                title: 'บันทึกข้อมูลสำเร็จ'
              })
            }
        } catch (error) {
          console.error('Error : ',error)
            this.loading = false  
            this.alert = error.response.data.message
            Toast.fire({
              icon: 'error',
              title: 'บันทึกข้อมูลไม่สำเร็จ'
            })
        }
    },

    calAge(bdDate){
      return getAge(bdDate);
    },
  }
}
</script>
