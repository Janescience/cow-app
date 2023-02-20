<template>
  <LayoutAuthenticated>
    <SectionMain class=" text-sm lg:text-base">
      
      <section class="px-4 sm:px-0 mb-4 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <BaseIcon
            path="cow"
            size="30"
            class="mr-3"
          />
          <h1 class="text-base lg:text-2xl">
            รายละเอียดโค
          </h1>
        </div>
        <BaseButtons class="text-sm lg:text-base " type="justify-end">
          <BaseButton
            class="lg:p-2 p-1"
            label="ย้อนกลับ"
            color="light"
            @click="this.$router.push('/manage/cow')"
          />
          <BaseButton
            class="lg:p-2 p-1"
            label="ออกรายงาน"
            color="info"
            @click="exportReport()"
          />
         </BaseButtons>
      </section>

      <CardBox 
        class="mb-5"
        :loading="loading.cow"
        title="ข้อมูลโค"
        header-icon=""
        icon="cardTextOutline"
      >
        <div class="grid lg:gap-3 gap-2 grid-cols-2 lg:grid-cols-7 md:grid-cols-6">
          <div class="row-span-2">
            <ImageUpload v-model="cow.image" class="mt-8 mr-2"/>
            <BaseLevel type="justify-center text-xs font-thin text-slate-500">
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
          <BaseButtons
            type="md:justify-end lg:justify-end justify-center"
            class="md:col-span-2 lg:col-span-4 col-span-2 md:mt-5"
          >
            <BaseButton
              :disabled="!canRemove"
              label="ลบ"
              color="danger"
              @click="remove()"
            />
            <BaseButton
              label="บันทึก"
              color="success"
              @click="update()"
            />
          </BaseButtons>
        </div>
      </CardBox>

      <div class="grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-5">
        <CardBox 
          icon="cupWater"
          :loading="loading.milk"
          title="ข้อมูลน้ำนม"
          header-icon=""
        >
          <div class="grid gap-5 grid-cols-4 ">
            <p class="col-span-2">
               น้ำนมดิบ เฉลี่ย/วัน 
            </p>
            <p>
              {{ milk().avg }}
            </p>
            <p>
              กิโลกรัม
            </p>
            <p class="col-span-2">
               น้ำนมดิบ ทั้งหมด
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
          class="row-span-2 "
          :loading="loading.reproduct"
          title="ข้อมูลการสืบพันธุ์/ผสมพันธุ์"
          header-icon=""
        >
          <div class="grid gap-5 lg:grid-cols-3 grid-cols-2">
            <p class="lg:row-span-3 col-span-2 lg:col-span-1 font-bold ">
               การเข้าระบบสืบพันธุ์
            </p>
            <p class="ml-5">
              จำนวนครั้ง
            </p>
            <p class="ml-5">
              {{ reproduct().login.count }}
            </p>
            <p class="ml-5">
              เข้าระบบครั้งล่าสุด
            </p>
            <p class="ml-5">
              {{ reproduct().login.lastDate }}
            </p>
            <p class="ml-5">
              ผลครั้งล่าสุด
            </p>
            <p class="ml-5">
              {{ reproduct().login.result }}
            </p>
            <!-- ================================ -->
            <p class="lg:row-span-2 col-span-2 lg:col-span-1 font-bold ">
               การเป็นสัด
            </p>
            <p class="ml-5">
              จำนวนครั้ง
            </p>
            <p class="ml-5">
              {{ reproduct().estrus.count }}
            </p>
            <p class="ml-5">
              เป็นสัดครั้งล่าสุด
            </p>
            <p class="ml-5">
              {{ reproduct().estrus.lastDate }}
            </p>
            <!-- //================================ -->
            <p class="lg:row-span-2 col-span-2 lg:col-span-1 font-bold ">
               การผสม
            </p>
            <p class="ml-5">
              จำนวนครั้ง
            </p>
            <p class="ml-5">
              {{ reproduct().mating.count }}
            </p>
            <p class="ml-5">
              ผสมครั้งล่าสุด
            </p>
            <p class="ml-5">
              {{ reproduct().mating.lastDate }}
            </p>
            <!-- //================================ -->
            <p class="lg:row-span-2 col-span-2 lg:col-span-1 font-bold ">
               การตรวจท้อง
            </p>
            <p class="ml-5">
              จำนวนครั้ง
            </p>
            <p class="ml-5">
              {{ reproduct().check.count }}
            </p>
            <p class="ml-5">
              ตรวจท้องครั้งล่าสุด
            </p>
            <p class="ml-5">
              {{ reproduct().check.lastDate }}
            </p>
            <!-- //================================ -->
          </div>
  
        </CardBox>
        <div class="grid gap-5 grid-cols-1 lg:grid-cols-2">
          <CardBox 
          icon="babyFace"
          :loading="loading.birth"
          title="การคลอดลูก"
          header-icon=""
        >
          <div class="grid gap-5 grid-cols-2 ">

            <p>
              จำนวนครั้ง
            </p>
            <p>
              {{ birth().count }}
            </p>
            <p >
              คลอดลูกล่าสุด
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
        <CardBox 
          icon="doctor"
          :loading="loading.heal"
          title="การรักษา"
          header-icon=""
        >
          <div class="grid gap-5 grid-cols-2 ">
            <p>
              จำนวนครั้ง
            </p>
            <p>
              {{ heal().count }}
            </p>
            <p >
              รักษาล่าสุด
            </p>
            <p>
              {{ heal().lastDate }}
            </p>
            <p>
              อาการ/โรคล่าสุด
            </p>
            <p>
              {{ heal().lastDisease }}
            </p>
            <p>
              วิธีการรักษาล่าสุด
            </p>
            <p>
              {{ heal().lastMethod }}
            </p>
          </div>
  
        </CardBox>
        </div>

        <CardBox 
          icon="pillMultiple"
          :loading="loading.protection"
          title="การป้องกัน/บำรุง"
          header-icon=""
        >
          <div class="grid gap-5 grid-cols-3 "
            v-for="protection in protections"
            :key="protection.vaccine"
          >
              <p class="row-span-2 font-bold">
                {{  protection.vaccine }}
              </p>
              <p>
                ให้ยาล่าสุด
              </p>
              <p >
                {{ formatDate(protection.dateCurrent)  }}
              </p>
              <p>
                ให้ยาครั้งต่อไป
              </p>
              <p >
                {{ formatDate(protection.dateNext)  }}
              </p>
          </div>
  
        </CardBox>

        <CardBox 
          icon="foodDrumstickOutline"
          :loading="loading.food"
          :title="'การให้อาหาร' + ' (คอก '+cow.corral+')'"
          header-icon=""
        >
          <div v-if="foods.length <= 0" class="text-slate-600">
            ไม่มีรายการให้อาหาร...
          </div>
          <div v-else class="grid gap-5 grid-cols-1 "
            v-for="(food,index) in foods"
            :key="food.recipe._id"
          >
              <p >
                {{ (index+1) +'. สูตร'+ food.recipe.name + ' จำนวน ' + food.qty + ' กก./วัน คิดเป็นเงินต้นทุน '+ food.amount + ' บาท/วัน และ ' + food.amountAvg + ' บาท/ตัว โดยมีวัวทั้งหมด ' +food.numCow+ ' ตัว'}}
              </p>
          </div>
  
        </CardBox>
        
      </div>

      <Table
        v-if="historyMilks.length > 0"
        title="ประวัติการรีดนม" 
        :items="historyMilks" 
        :datas="milkDatas"
        :loading="loading.milk"
        class="bg-gray-100"
        icon="waterCheck"
      />

      <Table
        v-if="reproducts.length > 0"
        title="ประวัติการสืบพันธ์ุ/ผสมพันธ์ุ" 
        :items="reproducts" 
        :datas="reproductDatas" 
        :loading="loading.reproduct"
      />

      <Table
        v-if="births.length > 0"
        title="ประวัติการคลอดลูก" 
        :items="births" 
        :datas="birthDatas" 
        :loading="loading.birth"
      />

      <Table
        v-if="heals.length > 0"
        title="ประวัติการรักษา" 
        :items="heals" 
        :datas="healDatas" 
        :loading="loading.heal"
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
import HealService from '@/services/heal'
import ProtectionService from '@/services/protection'
import FoodService from '@/services/food'

import getAge from "@/utils/age-calculate";
import moment from "moment";
import _ from "lodash";

import { Toast } from "@/utils/alert";
import { status,quality } from '@/constants/cow'
import { reproductResult,reproductStatus } from '@/constants/reproduct'
import { sex,overgrown } from '@/constants/birth'


export default {
  data (){
    return {
      cow : {},
      milks : [],
      historyMilks : [],
      reproducts : [],
      births : [],
      heals : [],
      protections : [],
      foods : [],
      loading : {
        cow : false,
        milk : false,
        reproduct : false,
        birth : false,
        heal : false,
        protection : false,
        food : false,
      },
      alert : "",
      newCow : false,
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
          value : 'mQty',
        },
        {
          label : "ปริมาณน้ำนมดิบ/บ่าย (กก.)",
          class : 'text-center',
          value : 'aQty',
        },
        {
          label : "ปริมาณน้ำนมดิบรวม (กก.)",
          class : 'text-center',
          func : (obj) => {
            return obj.mQty + obj.aQty
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
      healDatas : [
        {
          label : "ครั้งที่",
          value : 'seq',
          class : 'text-center',
        },
        {
          label : "วันที่รักษา",
          class : 'text-center',
          value : 'date',
          type : 'date',
        },
        {
          label : "อาการ/โรค",
          class : 'text-center',
          value : 'disease',
        },
        {
          label : "วิธีการรักษา",
          class : 'text-center',
          value : 'method',
        },
        {
          label : "คนรักษา",
          class : 'text-center',
          value : 'healer',
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
  computed : {
    canRemove(){
      if(this.milks.length == 0 &&
        this.reproducts.length == 0 &&
        this.births.length == 0){
          return true;
        }else{
          return false;
        }
    },
    user() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    const cowId = this.$route.params.id;
    this.getCowData(cowId);
  },
  methods : {
    async getCowData(id){
      this.loading.cow = true;
        const resp = await CowService.get(id);

        if (resp.data) {
          this.cow = resp.data.cow;
          this.cow.birthDate = new Date(this.cow.birthDate);
          this.loading.cow = false;

          this.loading.milk = true;
          const milkResp = await MilkService.all();
          if (milkResp.data) {
            for(let milk of milkResp.data.milks){
              milk.groupKey = moment(milk.date,'YYYY-MM-DD').format('YYYYMMDD')
            }
            this.milks = _.groupBy(milkResp.data.milks,'groupKey');
          }
          this.loading.milk = false;

          this.loading.reproduct = true;
          const reproductResp = await ReproductService.all({ cow: id });
          if (reproductResp.data) {
            this.reproducts = reproductResp.data.reproducts;
          }
          this.loading.reproduct = false;


          this.loading.birth = true;
          const birthResp = await BirthService.all({ cow: id});
          if (birthResp) {
            this.births = birthResp.data.births; 
          }
          this.loading.birth = false;


          this.loading.heal = true;
          const healResp = await HealService.all({ cow: id }); 
          if (healResp) { 
            this.heals = healResp.data.heals; 
          }
          this.loading.heal = false;

          this.loading.protection = true;
          const protectionResp = await ProtectionService.all(); 
          if (protectionResp) { 
            this.protections = protectionResp.data.protections; 
          }
          this.loading.protection = false;

          this.loading.food = true;
          const foodResp = await FoodService.all({ corral: this.cow.corral }); 
          if (foodResp) {  
            this.foods = foodResp.data.foods; 
          }
          this.loading.food = false;

        } 
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
      let count = 0;
      let totalM = 0;
      let totalA = 0;
      this.historyMilks = []
      Object.keys(this.milks).forEach(key => {
        let milks = this.milks[key];
        let historyMilk = {}
        let mQty = 0;
        let aQty = 0;
        let amount = 0;

        milks.map((m) => {
          historyMilk.date = m.date;
          count += m.milkDetails.length;

          m.milkDetails.map((d) => {
            if(m.time === 'M'){
              totalM += d.qty
              mQty += d.qty 
            }else{
              totalA += d.qty
              aQty += d.qty
            }
            amount += d.amount
          })

          historyMilk.mQty = mQty;
          historyMilk.aQty = aQty;
          historyMilk.amount = amount;
        })
        this.historyMilks.push(historyMilk)

      })

      let avg = (totalM+totalA)/count;
      return { 
        avg : (count > 0 ? avg.toFixed(2) : 0) , 
        all : (totalM+totalA).toFixed(2)
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
        if(rpd.estrusDate != null && moment(rpd.estrusDate) <= now){
            countEstrus++;
            lastEstrus = this.formatDate(rpd.estrusDate);
        } 

        if(rpd.matingDate != null && moment(rpd.matingDate) <= now){
            countMating++;
            lastMating = this.formatDate(rpd.matingDate);
        } 

        if(rpd.checkDate != null && moment(rpd.checkDate) <= now){
            countCheck++;
            lastCheck = this.formatDate(rpd.checkDate);  
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
    heal(){
      let count = this.heals.length > 0 ? this.heals.length : '-';
      let lastDate = this.heals.length > 0 ? this.formatDate(this.heals[0].date) : '-';
      let lastDisease = this.heals.length > 0 ? this.heals[0].disease : '-';
      let lastMethod = this.heals.length > 0 && this.heals[0].method ? this.heals[0].method : '-';

      return { count, lastDate, lastDisease, lastMethod };
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
