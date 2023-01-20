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
        :loading="cowLoading"
        title="ข้อมูลโค"
        header-icon=""
      >
        <div class="grid lg:gap-3 md:gap-2 gap-5 grid-cols-2 lg:grid-cols-7 md:grid-cols-4">
          <div class="row-span-2">
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

      <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-5">
        <CardBox 
          icon="cupWater"
          :loading="milkLoading"
          title="ข้อมูลน้ำนม"
          header-icon=""
        >
          <div class="grid gap-5 grid-cols-4 ">
            <p class="col-span-2">
              <BaseIcon path="waterPercent" size="20"/> ผลผลิตน้ำนมเฉลี่ย/วัน 
            </p>
            <p>
              {{ milk().avg }}
            </p>
            <p>
              กิโลกรัม
            </p>
            <p class="col-span-2">
              <BaseIcon path="water" size="20"/> ผลผลิตน้ำนมทั้งหมด
            </p>
            <p>
              {{ milk().all }}
            </p>
            <p>
              กิโลกรัม
            </p>
          </div>
  
        </CardBox>
        <CardBox 
          icon="reproduction"
          class="row-span-2"
          :loading="reproductLoading"
          title="ข้อมูลการสืบพันธุ์/ผสมพันธุ์"
          header-icon=""
        >
          <div class="grid gap-5 grid-cols-3 ">
            <p class="row-span-3">
               การเข้าระบบสืบพันธุ์
            </p>
            <p>
              จำนวนครั้ง
            </p>
            <p>
              {{ reproduct().login.count }}
            </p>
            <p >
              วันที่เข้าครั้งล่าสุด
            </p>
            <p>
              {{ reproduct().login.lastDate }}
            </p>
            <p>
              ผลครั้งล่าสุด
            </p>
            <p>
              {{ reproduct().login.result }}
            </p>
            <!-- ================================ -->
            <p class="row-span-2">
               การเป็นสัด
            </p>
            <p>
              จำนวนครั้ง
            </p>
            <p>
              {{ reproduct().estrus.count }}
            </p>
            <p >
              วันที่เป็นสัดครั้งล่าสุด
            </p>
            <p>
              {{ reproduct().estrus.lastDate }}
            </p>
            <!-- //================================ -->
            <p class="row-span-2">
               การผสม
            </p>
            <p>
              จำนวนครั้ง
            </p>
            <p>
              {{ reproduct().mating.count }}
            </p>
            <p >
              วันที่ผสมครั้งล่าสุด
            </p>
            <p>
              {{ reproduct().mating.lastDate }}
            </p>
            <!-- //================================ -->
            <p class="row-span-2">
               การตรวจท้อง
            </p>
            <p>
              จำนวนครั้ง
            </p>
            <p>
              {{ reproduct().check.count }}
            </p>
            <p >
              วันที่ตรวจท้องครั้งล่าสุด
            </p>
            <p>
              {{ reproduct().check.lastDate }}
            </p>
            <!-- //================================ -->
          </div>
  
        </CardBox>
        <CardBox 
          icon="babyFace"
          :loading="reproductLoading"
          title="ข้อมูลการคลอดลูก"
          header-icon=""
        >
          <div class="grid gap-5 grid-cols-3 ">
            <p class="row-span-4">
               การคลอดลูก
            </p>
            <p>
              จำนวนครั้ง
            </p>
            <p>
              {{ birth().count }}
            </p>
            <p >
              วันที่คลอดลูกครั้งล่าสุด
            </p>
            <p>
              {{ birth().lastDate }}
            </p>
            <p>
              จำนวนเพศผู้
            </p>
            <p>
              {{ birth().countMale }}
            </p>
            <p>
              จำนวนเพศเมีย
            </p>
            <p>
              {{ birth().countFemale }}
            </p>
          </div>
  
        </CardBox>
      </div>

      <Table
        v-if="milks.length > 0"
        title="ประวัติการรีดนม" 
        :items="milks" 
        :datas="milkDatas"
        :loading="milkLoading"

      />

      <Table
        v-if="reproducts.length > 0"
        title="ประวัติการสืบพันธ์ุ/ผสมพันธ์ุ" 
        :items="reproducts" 
        :datas="reproductDatas" 
        :loading="reproductLoading"
      />

      <Table
        v-if="births.length > 0"
        title="ประวัติการคลอดลูก" 
        :items="births" 
        :datas="birthDatas" 
        :loading="birthLoading"
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
import BirthService from '@/services/birth'

import getAge from "@/utils/age-calculate";
import moment from "moment";
import { getCurrentUser } from "@/utils";
import { Toast } from "@/utils/alert";
import { status,quality } from '@/constants/cow'
import { reproductResult,reproductStatus } from '@/constants/reproduct'
import { sex,overgrown } from '@/constants/birth'


export default {
  data (){
    return {
      cow : {},
      milks : [],
      reproducts : [],
      births : [],
      cowLoading : false,
      milkLoading : false,
      reproductLoading : false,
      birthLoading : false,
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
      birthDatas : [
        {
          label : "ครั้งที่",
          value : 'seq',
          class : 'text-center',
        },
        {
          label : "วันที่ตั้งครรภ์",
          class : 'text-center',
          value : 'pregnantDate',
          type : 'date',
        },
        {
          label : 'อายุครรภ์',
          func : (obj) => {
            return this.calAge(obj?.pregnantDate)
          },
        },
        {
          label : "วันที่คลอด",
          class : 'text-center',
          value : 'birthDate',
          type : 'date',
        },
        {
          label : "เพศ",
          class : 'text-center',
          func : (obj) => {
            return sex()[obj.sex]
          },
        },
        {
          label : "ลูกวัว",
          class : 'text-center',
          func : (obj) => {
            return obj.calf ? obj.calf?.code + " : " + obj.calf?.name : ""
          },
        },
        {
          label : "รกค้าง",
          class : 'text-center',
          func : (obj) => {
            return overgrown()[obj.overgrown]
          },
        },
        {
          label : "วันที่ใช้ยาขับ",
          class : 'text-center',
          value : 'drugDate',
          type : 'date',
        },
        {
          label : "วันที่ล้างมดลูก",
          class : 'text-center',
          value : 'washDate',
          type : 'date',
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
    this.getBirths(this.$route.params.id);
  },
  methods : {
    async getCow(id){
      this.cowLoading = true
      const resp = await CowService.get(id);
      this.cow = null
      if(resp.data){
        this.cow = resp.data.cow
        this.cow.birthDate = new Date(this.cow.birthDate)
      }
      this.cowLoading = false
    },
    async getMilks(id){
      this.milkLoading = true
      const resp = await MilkService.all({cow:id,farm:getCurrentUser().farm._id});
      this.milks = []
      if(resp.data){
        this.milks = resp.data.milkings
      }
      this.milkLoading = false
    },
    async getReproducts(id){
      this.reproductLoading = true
      const resp = await ReproductService.all({cow:id,farm:getCurrentUser().farm._id});
      this.reproducts = []
      if(resp.data){
        this.reproducts = resp.data.reproducts
      }
      this.reproductLoading = false
    },
    async getBirths(id){
      this.birthLoading = true
      const resp = await BirthService.all({cow:id,farm:getCurrentUser().farm._id});
      this.births = []
      if(resp.data){
        this.births = resp.data.births
      }
      this.birthLoading = false
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
    milk(){
      let count = this.milks.length
      let total = 0;
      for(let milk of this.milks){
        total += milk.morningQty + milk.afternoonQty
      }
      let avg = total/count;
      return { 
        avg : (count > 0 ? avg.toFixed(2) : 0) , 
        all : total.toFixed(2)
      };
    },
    reproduct(){
      let now = moment();

      let countLogin = this.reproducts.length > 0 ? this.reproducts.length : '-'
      let lastDateLogin = this.reproducts.length > 0 ? this.formatDate(this.reproducts[0].loginDate) : '-'
      let result = this.reproducts.length > 0 ? reproductResult()[this.reproducts[0].result].label : '-'

      let countEstrus = 0,countMating = 0,countCheck = 0;
      let lastEstrus = "-",lastMating = "-",lastCheck = '-';

      for(let rpd of this.reproducts){
        if(rpd.estrusDate != null){
          if(moment(rpd.estrusDate) <= now){
            countEstrus++
            lastEstrus = this.formatDate(rpd.estrusDate)
          }
        }
        if(rpd.matingDate != null){
          if(moment(rpd.matingDate) <= now){
            countMating++
            lastMating = this.formatDate(rpd.matingDate)
          }
        }
        if(rpd.checkDate != null){
          if(moment(rpd.checkDate) <= now){
            countCheck++
            lastCheck = this.formatDate(rpd.checkDate)
          }
        }
      }
   
      return {
        login : {
          count : countLogin,
          lastDate : lastDateLogin,
          result : result
        },
        estrus : {
          count : countEstrus > 0 ? countEstrus : '-',
          lastDate : lastEstrus
        },
        mating : {
          count : countMating > 0 ? countMating : '-',
          lastDate : lastMating
        },
        check : {
          count : countCheck > 0 ? countCheck : '-',
          lastDate : lastCheck
        }
      }
    },
    birth(){
      return {
        count : this.births.length > 0 ? this.births.length : '-',
        lastDate : this.births.length > 0 ? this.formatDate(this.births[0].birthDate) : '-',
        countMale : this.births.length > 0 ? this.births.filter(b => b.sex === 'M').length : '-',
        countFemale : this.births.length > 0 ? this.births.filter(b => b.sex === 'F').length : '-',
      }
    },
    formatDate(date){
        if(!date){
            return ""
        }
        return moment(new Date(date)).format('DD/MM/YYYY');
    },
    calAge(bdDate){
      return getAge(bdDate);
    },
  }
}
</script>
