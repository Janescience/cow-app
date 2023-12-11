<template>
  <LayoutAuthenticated>
    <SectionMain class="text-sm lg:text-base">
      <section class="px-4 sm:px-0 mb-4 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <BaseIcon path="cow" size="30" class="mr-3" />
          <h1 class="text-base lg:text-2xl">รายละเอียดโค</h1>
        </div>
        <BaseButtons class="text-sm lg:text-base" type="justify-end">
          <BaseButton
            label="ย้อนกลับ"
            color="light"
            small
            @click="this.$router.push('/manage/cow')"
          />
          <!-- <BaseButton
            class="lg:p-2 p-1"
            label="ออกรายงาน"
            color="info"
            @click="exportReport()"
          /> -->
        </BaseButtons>
      </section>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">
        <CardBox
          class="lg:col-span-2 lg:mb-5"
          :loading="loading.cow"
          title="ข้อมูลโค"
          header-icon=""
          icon="cardTextOutline"
        >
          <div
            class="grid gap-5 grid-cols-2 lg:grid-cols-4 md:grid-cols-6"
          >
            <div class="lg:row-span-4 col-span-2 lg:col-span-1">
              <ImageUpload v-model="cow.image" class="lg:mt-12 mr-2" @file="getFile"/>
              <BaseLevel type="justify-center text-xs font-thin text-slate-500">
                อัพโหลดรูปภาพ (คลิกที่รูป)
              </BaseLevel>
              <BaseButtons
              type="justify-center"
              class="mt-5"
            >
              <BaseButton label="ลบ" color="danger" @click="remove()" small/>
              <BaseButton label="บันทึก" color="success" @click="update()" small/>
            </BaseButtons>
            </div>
            <FormField label="รหัสโค" help="* ห้ามว่าง">
              <FormControl v-model="cow.code" icon="barcode" required />
            </FormField>
            <FormField label="ชื่อโค" help="* ห้ามว่าง">
              <FormControl v-model="cow.name" icon="cow" required />
            </FormField>
            <FormField label="น้ำหนัก (กก.)">
              <FormControl v-model="cow.weight" icon="weight" />
            </FormField>
            <FormField label="วันเกิด" help="* ห้ามว่าง">
              <FormControl
                v-model="cow.birthDate"
                icon="calendar"
                type="date"
                required
              />
            </FormField>
            <FormField label="วันที่นำเข้าฟาร์ม" help="* ห้ามว่าง">
              <FormControl
                v-model="cow.adopDate"
                icon="calendar"
                type="date"
                required
              />
            </FormField>
            <FormField label="สถานะ" >
              <FormControl
                v-model="cow.status"
                :options="status"
                icon=""
                required
              />
            </FormField>
            <FormField label="คุณภาพน้ำนม" >
              <FormControl v-model="cow.quality" :options="qualityMilk" icon="" />
            </FormField>
            <FormField label="คอก">
              <FormControl v-model="cow.corral" icon="barn" />
            </FormField>
            
            <FormField label="พ่อพันธุ์">
              <FormControl v-model="cow.dad" icon="genderMale" />
            </FormField>
            <FormField label="แม่พันธุ์">
              <FormControl v-model="cow.mom" icon="genderFemale" />
            </FormField>
           
          </div>
        </CardBox>
        <CardBox
        icon="trophyVariantOutline"
         title="คุณภาพ/ความคุ้มค่า"
          class="mb-5"
          header-icon=""
        > 
          <div class="grid grid-cols-3 gap-5">
            <p :class="filterColor()?.grade+'  text-center text-7xl font-extrabold mt-3'">
              {{ quality?.grade }}
            </p>
            <div class="row-span-3 col-span-2 text-center p-2">
              <p :class="filterColor()?.grade + ' text-xl font-extrabold'">{{ $filters.number(quality?.profit?.percent) }}%</p>
              <p class="p-2">ผลผลิตอยู่ในเกณฑ์ <p :class="filterColor()?.grade">{{  quality?.description }} </p></p>
              <p class="text-gray-500 text-xs">{{  filterText()?.percent }} </p>
            </div>  
            
          </div>
          <div class="grid grid-cols-1 gap-5 mt-5">
            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1">อายุ</p>
              <p class=" text-center rounded-lg ">{{ calAge(cow?.birthDate) }}</p>
              <p class="mt-1">อยู่ฟาร์ม</p>
              <p class="  text-center rounded-lg ">{{ calAge(cow?.adopDate) }}</p>
            </div>
            <hr class="border-t border-gray-100 dark:border-gray-600"/>

            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1">รายได้ทั้งหมด</p>
              <p class="bg-teal-900 p-1 text-lg text-center rounded-lg text-green-500">{{ $filters.currency(quality?.income?.sum) }}</p>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1">ค่าใช้จ่ายทั้งหมด</p>
              <p class="bg-red-900 p-1 text-lg text-center rounded-lg text-rose-400">{{ $filters.currency(quality?.expense?.sum) }}</p>
            </div>
            <hr class="border-t border-gray-100 dark:border-gray-600"/>
            <div class="grid grid-cols-2 gap-5">
              <p class="mt-1">กำไร </p>
              <p :class="filterColor()?.profit + ' p-1 text-lg text-center rounded-lg'">{{ $filters.currency(quality?.profit?.amount) }}</p>
            </div>
          </div>
        </CardBox>
      </div>
      

      <CardBox
        icon="cupWater"
        :loading="loading.milk"
        title="ข้อมูลน้ำนมดิบ"
        class="mb-5"
        header-icon=""
      >
        <div class="overflow-x-auto">
          <table>
            <thead>
              <th class="whitespace-nowrap text-center">เฉลี่ย/วัน (กก.)</th>
              <th class="whitespace-nowrap text-center">เฉลี่ยเช้า/วัน (กก.)</th>
              <th class="whitespace-nowrap text-center">เฉลี่ยบ่าย/วัน (กก.)</th>
              <th class="whitespace-nowrap text-center">รวมน้ำนมทั้งหมด (กก.)</th>
              <th class="whitespace-nowrap text-center">รวมเป็นเงินทั้งหมด</th>
            </thead>
            <tbody>
              <tr>
                <td class="whitespace-nowrap text-center font-extrabold ">
                  <BaseIcon path="water" size="16"  class="text-white bg-green-900 rounded-full   mr-1"/>
                  ~ {{ $filters.number(milk.avgTotal) }}
                </td>
                <td class="whitespace-nowrap  text-center font-extrabold ">          
                    <BaseIcon path="clockTimeEightOutline" size="16"  class="text-yellow-500 bg-orange-900 rounded-full  mr-1"/>
                    ~ {{ $filters.number(milk.avgMorning) }}
                  </td>
                <td class="whitespace-nowrap  text-center font-extrabold ">
                  <BaseIcon path="clockTimeThreeOutline" size="16" class="text-orange-500 bg-red-900 rounded-full  mr-1" />
                  ~ {{ $filters.number(milk.avgAfternoon) }}
                </td>
                <td class="whitespace-nowrap  text-center font-extrabold ">
                  <BaseIcon path="cupWater" size="16" class="text-white bg-black rounded-full  mr-1" />
                  {{ $filters.number(milk.all) }}
                </td>
                <td class="whitespace-nowrap  text-center font-extrabold ">
                  <BaseIcon path="cash" size="16" class="text-teal-500 bg-green-900 rounded-full mr-1" />
                  {{ $filters.currency(milk.amount) }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBox>

      <CardBox
        icon="foodDrumstickOutline"
        class="transition-position mb-5"
        title="การกินอาหาร"
        v-if="foods.length > 0"
        has-table
        header-icon=""
      >
        <div class="grid grid-cols-1 gap-5 lg:p-4">
          <Table
            title="รายการกินอาหาร"
            :items="foods"
            :datas="foodDatas"
            :loading="loading.food"
            perPage="5"
          />
          <di class="flex justify-end lg:mb-0 mb-5">
              รวมกินทั้งหมด <p class="ml-1 mr-1 underline decoration-2 font-extrabold">{{ $filters.number(food()?.sum?.qty) }}</p> กก. 
               คิดเป็นเงิน <p class="ml-1 mr-1 underline decoration-2 font-extrabold">{{ $filters.currency(food()?.sum?.amount) }}</p>
          </di>
        </div>
        
      </CardBox>

      <!-- <div class="grid gap-5 grid-cols-1 "> -->
      <CardBox
        icon="calendarClock"
        class="transition-position mb-5"
        has-table
        title="ข้อมูลล่าสุด"
        header-icon=""
      >
        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:p-4">
          

          <CardBox
            icon="babyFace"
            class="dark:border-gray-800 border-4"
            :loading="loading.birth"
            title="การคลอดลูก"
            v-if="birth().count > 0"
            header-icon=""
          >
            <table>
              <tbody>
                <tr>
                  <td>จำนวนครั้ง</td>
                  <td>{{ birth().count }}</td>
                </tr>
                <tr>
                  <td>วันที่ล่าสุด</td>
                  <td>{{ birth().lastDate }}</td>
                </tr>
                <tr>
                  <td>จำนวนเพศผู้</td>
                  <td>{{ birth().countMale }}</td>
                </tr>
                <tr>
                  <td>จำนวนเพศเมีย</td>
                  <td>{{ birth().countFemale }}</td>
                </tr>
              </tbody>
            </table>
          </CardBox>
          <CardBox
            title="การคลอดลูก"
            header-icon=""
            icon="babyFace"
            class="dark:border-gray-800 border-4 text-center h-28"
            v-else
          >
            <p class="text-gray-500 text-sm">ไม่เคยคลอดลูก</p>
          </CardBox>
          <CardBox
            icon="doctor"
            :loading="loading.heal"
            v-if="heal().count > 0"
            class="dark:border-gray-800 border-4"
            title="การรักษา"
            header-icon=""
          >
            <table>
              <tbody>
                <tr>
                  <td class="whitespace-nowrap">จำนวนครั้ง</td>
                  <td>{{ heal().count }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">วันที่ล่าสุด</td>
                  <td class="whitespace-nowrap">{{ heal().lastDate }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">อาการ/โรค</td>
                  <td class="whitespace-nowrap">{{ heal().lastDisease }}</td>
                </tr>
                <tr>
                  <td class="whitespace-nowrap">วิธีการรักษา</td>
                  <td class="whitespace-nowrap">{{ heal().lastMethod }}</td>
                </tr>
              </tbody>
            </table>
          </CardBox>
          <CardBox
            title="การรักษา"
            header-icon=""
            icon="babyFace"
            class="dark:border-gray-800 border-4 text-center h-28"
            v-else
          >
            <p class="text-gray-500 text-sm">ไม่เคยรักษา</p>
          </CardBox>
          <CardBox
            icon="reproduction"
            class="lg:col-span-2 dark:border-gray-800 border-4"
            :loading="loading.reproduct"
            v-if="reproduct().login.count > 0"
            title="การสืบพันธุ์/ผสมพันธุ์"
            header-icon=""
          >
            <div class="overflow-x-auto">
              <table>
                <thead>
                  <th class="whitespace-nowrap">รายการ</th>
                  <th class="whitespace-nowrap">จำนวนครั้ง</th>
                  <th class="whitespace-nowrap">วันที่ล่าสุด</th>
                  <th class="whitespace-nowrap">ผลล่าสุด</th>
                </thead>
                <tbody>
                  <tr>
                    <td class="whitespace-nowrap">เข้าระบบสืบพันธุ์</td>
                    <td>{{ reproduct().login.count }}</td>
                    <td>{{ reproduct().login.lastDate }}</td>
                    <td>{{ reproduct().login.result }}</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap">เป็นสัด</td>
                    <td>{{ reproduct().estrus.count }}</td>
                    <td>{{ reproduct().estrus.lastDate }}</td>
                    <td />
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap">ผสม</td>
                    <td>{{ reproduct().mating.count }}</td>
                    <td>{{ reproduct().mating.lastDate }}</td>
                    <td />
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap">ตรวจท้อง</td>
                    <td>{{ reproduct().check.count }}</td>
                    <td>{{ reproduct().check.lastDate }}</td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBox>
          <CardBox
            title="การสืบพันธุ์/ผสมพันธุ์"
            header-icon=""
            icon="babyFace"
            class="dark:border-gray-800 border-4 text-center h-28"
            v-else
          >
            <p class="text-gray-500 text-sm">ไม่เคยสืบพันธุ์/ผสมพันธุ์</p>
          </CardBox>
          <div class="lg:col-span-2">
            <Table
              title="การป้องกัน/บำรุง"
              :items="protections"
              :datas="protectionDatas"
              :loading="loading.protection"
              perPage="5"
              icon="pillMultiple"
            />
          </div>
        </div>
      </CardBox>

      
      <!-- </div> -->

      <CardBox
        icon="messageBadgeOutline"
        class="transition-position mb-5"
        :loading="loading.notification"
        v-if="notifications.length > 0"
        title="การแจ้งเตือน"
        header-icon=""
        has-table
      >
        <div class="grid grid-cols-1 gap-5 lg:p-4">
          <Table
            title=""
            :items="notifications"
            :datas="notificationDatas"
            :loading="loading.notification"
            perPage="5"
          />
        </div>
        
      </CardBox>
      
      <CardBox
        icon="history"
        class="transition-position mb-5"
        title="ประวัติต่างๆ"
        header-icon=""
        has-table
      >
        <div class="grid grid-cols-1 gap-5 lg:p-4">
          <Table
            title="ประวัติการรีดนม"
            :items="historyMilks"
            :datas="milkDatas"
            :loading="loading.milk"
            icon="waterCheck"
            perPage="5"
          />

          <Table
            v-if="!loading.reproduct && reproducts.length > 0"
            title="ประวัติการสืบพันธ์ุ/ผสมพันธ์ุ"
            icon="reproduction"
            :items="reproducts"
            :datas="reproductDatas"
            :loading="loading.reproduct"
            perPage="5"
          />

          <Table
            v-if="!loading.birth && births.length > 0"
            title="ประวัติการคลอดลูก"
            :items="births"
            :datas="birthDatas"
            :loading="loading.birth"
            icon="babyFaceOutline"
            perPage="5"
          />

          <Table
            v-if="!loading.heal && heals.length > 0"
            title="ประวัติการรักษา"
            icon="medication"
            :items="heals"
            :datas="healDatas"
            :loading="loading.heal"
            perPage="5"
          />
        </div>
      </CardBox>
      
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxCollapse from "@/components/CardBoxCollapse.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import Table from "@/components/Table.vue";

import CowService from "@/services/cow";
import MilkService from "@/services/milking";
import ReproductService from "@/services/reproduction";
import BirthService from "@/services/birth";
import HealService from "@/services/heal";
import ProtectionService from "@/services/protection";
import FoodService from "@/services/food";
import NotificationService from "@/services/notification";

import getAge from "@/utils/age-calculate";
import moment from "moment";
import _ from "lodash";

import { Toast } from "@/utils/alert";
import { status, quality } from "@/constants/cow";
import { reproductResult, reproductStatus } from "@/constants/reproduct";
import { sex, overgrown } from "@/constants/birth";

export default {
  data() {
    return {
      cow: {},
      quality : {},
      milks: [],
      milkDetails: [],
      historyMilks: [],
      reproducts: [],
      births: [],
      heals: [],
      protections: [],
      foods: [],
      notifications: [],
      loading: {
        cow: true,
        milk: true,
        reproduct: true,
        birth: true,
        heal: true,
        protection: true,
        food: true,
        notification: true,
      },
      alert: "",
      newCow: false,
      status: status("create"),
      qualityMilk: quality("create"),
      milkDatas: [
        {
          label: "วันที่รีดนม",
          class: "text-center",
          type: "date",
          value: "date",
        },
        {
          label: "เช้า (กก.)",
          class: "text-center",
          value: "mQty",
          type : "number"
        },
        {
          label: "บ่าย (กก.)",
          class: "text-center",
          value: "aQty",
          type : "number"
        },
        {
          label: "รวม (กก.)",
          class: "text-center",
          func: (obj) => {
            return (obj.mQty + obj.aQty).toFixed(2);
          },
        },
        {
          label: "คิดเป็นเงิน",
          class: "text-right",
          type: "currency",
          value: "amount",
        },
      ],
      reproductDatas: [
        {
          label: "ครั้งที่",
          class: "text-center",
          value: "seq",
        },
        {
          label: "วันที่เข้าระบบสืบพันธุ์",
          class: "text-center",
          value: "loginDate",
          type: "date",
        },
        {
          label: "ผล",
          func: (obj) => {
            return reproductResult()[obj.result].label;
          },
        },
        {
          label: "วันที่เป็นสัด",
          class: "text-center",
          value: "estrusDate",
          type: "date",
        },
        {
          label: "วันที่ผสมพันธุ์",
          class: "text-center",
          value: "matingDate",
          type: "date",
        },
        {
          label: "วันที่ตรวจท้อง",
          class: "text-center",
          value: "checkDate",
          type: "date",
        },
        {
          label: "พ่อพันธุ์",
          value: "dad",
        },
        {
          label: "สถานะ",
          func: (obj) => {
            return reproductStatus()[obj.status].label;
          },
        },
        {
          label: "วิธีรักษา",
          value: "howTo",
        },
      ],
      birthDatas: [
        {
          label: "ครั้งที่",
          value: "seq",
          class: "text-center",
        },
        {
          label: "วันที่ตั้งครรภ์",
          class: "text-center",
          value: "pregnantDate",
          type: "date",
        },
        {
          label: "อายุครรภ์",
          func: (obj) => {
            return this.calAge(obj?.pregnantDate);
          },
        },
        {
          label: "วันที่คลอด",
          class: "text-center",
          value: "birthDate",
          type: "date",
        },
        {
          label: "เพศ",
          class: "text-center",
          func: (obj) => {
            return sex()[obj.sex];
          },
        },
        {
          label: "ลูกวัว",
          class: "text-center",
          func: (obj) => {
            return obj.calf ? obj.calf?.code + " : " + obj.calf?.name : "";
          },
        },
        {
          label: "รกค้าง",
          class: "text-center",
          func: (obj) => {
            return overgrown()[obj.overgrown];
          },
        },
        {
          label: "วันที่ใช้ยาขับ",
          class: "text-center",
          value: "drugDate",
          type: "date",
        },
        {
          label: "วันที่ล้างมดลูก",
          class: "text-center",
          value: "washDate",
          type: "date",
        },
      ],
      protectionDatas: [
        {
          label: "ยา/วัคซีน",
          value: "vaccine.name",
        },
        {
          label: "ครั้งที่",
          class: "text-center",
          value: "seq",
        },
        {
          label: "ให้ยาล่าสุด",
          class: "text-center",
          value: "vaccine.currentDate",
          type: "date",
        },
        {
          label: "จำนวนเงิน",
          class: "text-right",
          value: "amount",
          type: "currency",
        },
        {
          label: "ให้ยาครั้งต่อไป",
          class: "text-center",
          value: "vaccine.nextDate",
          type: "date",
        },
      ],
      notificationDatas: [
        {
          label: "รายการ",
          value: "name",
        },
        {
          label: "ก่อน",
          class: "text-center",
          value: "before",
        },
        {
          label: "มีผล",
          class: "text-center",
          value: "date",
        },
        {
          label: "หลัง",
          class: "text-center",
          value: "after",
        },
        {
          label: "แจ้งเตือน",
          class: "text-center",
          style : 'classIcon',
          value: "alert",
          type: "icon",
        },
      ],
      healDatas: [
        {
          label: "ครั้งที่",
          value: "seq",
          class: "text-center",
        },
        {
          label: "วันที่รักษา",
          class: "text-center",
          value: "date",
          type: "date",
        },
        {
          label: "อาการ/โรค",
          class: "text-center",
          value: "disease",
        },
        {
          label: "วิธีการรักษา",
          class: "text-center",
          value: "method",
        },
        {
          label: "คนรักษา",
          class: "text-center",
          value: "healer",
        },
        {
          label: "ค่ารักษา",
          class: "text-center",
          value: "amount",
        },
      ],
      foodDatas: [
        {
          label: "ปี",
          value: "year",
        },
        {
          label: "เดือน",
          value: "month",
        },
        {
          label: "เฉลี่ยกิน/วัน (กก.)",
          class: "text-center",
          value: "qty",
          func: (obj) => {
            const sumQty = obj.foodDetails.reduce((sum, item) => sum + item.qty, 0) 
            return (sumQty / obj.numCow).toFixed(2);
          },
        },
        {
          label: "คิดเป็นเงิน/วัน",
          class: "text-right",
          value: "amount",
          func: (obj) => {
            const sumAmount = obj.foodDetails.reduce((sum, item) => sum + item.amount, 0) 
            return  (sumAmount / obj.numCow).toFixed(2);
          },
        },
        {
          label: "เฉลี่ยกิน/เดือน (กก.)",
          class: "text-center",
          value: "qty",
          func: (obj) => {
            const days = new Date(obj.year,obj.month,0).getDate();
            const sumQty = obj.foodDetails.reduce((sum, item) => sum + item.qty, 0) * days
            return (sumQty / obj.numCow).toFixed(2);
          },
        },
        {
          label: "คิดเป็นเงิน/เดือน",
          class: "text-right",
          value: "amount",
          func: (obj) => {
            const days = new Date(obj.year,obj.month,0).getDate();
            const sumAmount = obj.foodDetails.reduce((sum, item) => sum + item.amount, 0) * days
            return (sumAmount / obj.numCow).toFixed(2);
          },
        },
      ],
    };
  },

  components: {
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
    Table,
    CardBoxCollapse,
    BaseDivider
  },
  computed: {
    canRemove() {
      if (
        this.milks.length == 0 &&
        this.reproducts.length == 0 &&
        this.births.length == 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    user() {
      return this.$store.state.auth.user;
    },
    milk() {
      let count = 0;
      let totalM = 0;
      let totalA = 0;
      let totalAmount = 0;
      this.historyMilks = [];
      Object.keys(this.milks).forEach((key) => {
        let milks = this.milks[key];
        let historyMilk = {};
        let mQty = 0;
        let aQty = 0;
        let amount = 0;

        milks.map((m) => {
          m.milkDetails.map((d) => {
            if (m.time === "M") {
              totalM += d.qty;
              mQty += d.qty;
            } else {
              totalA += d.qty;
              aQty += d.qty;
            }
            amount += d.amount;
            totalAmount += d.amount;
          });

          if (m.milkDetails.length > 0) {
            count += m.milkDetails.length;

            historyMilk.date = m.date;
            historyMilk.mQty = mQty;
            historyMilk.aQty = aQty;
            historyMilk.amount = amount;
          }
        });
        if (Object.keys(historyMilk).length !== 0) {
          this.historyMilks.push(historyMilk);
        }
      });
      this.historyMilks = _.orderBy(this.historyMilks, "date", "desc");
      let avgTotal = (totalM + totalA) / count;
      let avgMorning = totalM / count;
      let avgAfternoon = totalA / count;
      return {
        avgTotal: (count > 0 ? avgTotal : 0),
        avgMorning: (count > 0 ? avgMorning : 0),
        avgAfternoon: (count > 0 ? avgAfternoon : 0),
        all: totalM + totalA,
        amount : totalAmount
      };
    },
  },
  created() {
    const cowId = this.$route.params.id;
    this.getCowData(cowId);
  },
  methods: {
    async getCow(id) {
      this.loading.cow = true;
      const resp = await CowService.get(id);
      if (resp.data) {
        this.cow = resp.data.cow;
        this.cow.birthDate = new Date(this.cow.birthDate);
        this.cow.adopDate = new Date(this.cow.adopDate);
        this.loading.cow = false;
      }
    },
    async getCowData(id) {
      this.loading.cow = true;
      const resp = await CowService.get(id);

      if (resp.data) {
        this.cow = resp.data.cow;
        this.quality = resp.data.quality;
        this.cow.birthDate = new Date(this.cow.birthDate);
        this.cow.adopDate = new Date(this.cow.adopDate);
        this.loading.cow = false;

        this.loading.reproduct = true;
        const reproductResp = await ReproductService.all({ cow: id });
        if (reproductResp.data) {
          this.reproducts = reproductResp.data.reproducts;
        }
        this.loading.reproduct = false;

        this.loading.birth = true;
        const birthResp = await BirthService.all({ cow: id, status: "B" });
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
        const protectionResp = await ProtectionService.all({ cows: id });
        if (protectionResp) {
          const groupVacs = _.groupBy(
            protectionResp.data.protections,
            "vaccine._id"
          );
          for (let vac of Object.keys(groupVacs)) {
            const vacs = groupVacs[vac];
            const sortedVacs = _.orderBy(vacs, "seq", "desc");
            if (sortedVacs.length > 0) {
              this.protections.push(sortedVacs[0]);
            }
          }
        }
        this.loading.protection = false;

        this.loading.food = true;
        const foodResp = await FoodService.all({ corral: this.cow.corral });
        if (foodResp) {
          this.foods = foodResp.data.foods;
        }
        this.loading.food = false;

        this.loading.milk = true;
        const milkResp = await MilkService.get({ cow: id });

        if (milkResp.data) {
          for (let milk of milkResp.data.milks) {
            milk.groupKey = moment(milk.date, "YYYY-MM-DD").format("YYYYMMDD");
          }
          this.milks = _.groupBy(milkResp.data.milks, "groupKey");
        }
        this.loading.milk = false;

        this.loading.notification = true
        const notiResp = await NotificationService.getCalendar({ cow: id });
        if (notiResp.data) {
          const groupCode = _.groupBy(notiResp.data.events, "code");
          const today = moment(new Date()).startOf("day");
          let notifications = [];
          for (let code of Object.keys(groupCode)) {
            const notis = groupCode[code];
            let name = "";
            let date = null;
            let before = null;
            let after = null;
            let dueDate = null;

            for (let noti of notis) {
              if (noti.period == "today") {
                name = noti.name;
                date = moment(noti.time.start).format("DD/MM/YYYY");
                dueDate = moment(noti.time.start).startOf("day");
              } else if (noti.period == "before") {
                before = moment(noti.time.start).format("DD/MM/YYYY");
              } else if (noti.period == "after") {
                after = moment(noti.time.start).format("DD/MM/YYYY");
              }
            }

            notifications.push({
              name: name,
              date: date,
              dueDate: dueDate,
              before: before,
              after: after,
              classIcon : today.isAfter(dueDate)
                ? "bg-teal-900 text-green-500 rounded-full p-1"
                : "bg-red-900 text-rose-400 rounded-full p-1",
              alert: today.isAfter(dueDate)
                ? "bellCheckOutline"
                : "bellAlertOutline",
            });
          }
          this.notifications = _.orderBy(notifications, "dueDate", "desc");
        }
        this.loading.notification = false
      }
    },
    getFile(file){
      this.cow.file = file
    },
    async update() {
      this.loading.cow = true;
      this.alert = "";
      try {
        const resp = await CowService.update(this.cow._id, this.cow);
        if (resp) {
          await CowService.upload(this.cow);
          this.getCow(this.$route.params.id);
          Toast.fire({
            icon: "success",
            title: "บันทึกข้อมูลสำเร็จ",
          });
        }
      } catch (error) {
        console.error("Error : ", error);
        this.loading = false;
        this.alert = error.response.data.message;
        Toast.fire({
          icon: "error",
          title: "บันทึกข้อมูลไม่สำเร็จ",
        });
      }
    },
    reproduct() {
      let now = moment();

      let countLogin =
        this.reproducts.length > 0 ? this.reproducts.length : "-";
      let lastDateLogin =
        this.reproducts.length > 0
          ? this.formatDate(this.reproducts[0].loginDate)
          : "-";
      let result =
        this.reproducts.length > 0
          ? reproductResult()[this.reproducts[0].result].label
          : "-";

      let countEstrus = 0,
        countMating = 0,
        countCheck = 0;
      let lastEstrus = "-",
        lastMating = "-",
        lastCheck = "-";

      for (let rpd of this.reproducts) {
        if (rpd.estrusDate != null && moment(rpd.estrusDate) <= now) {
          countEstrus++;
          lastEstrus = this.formatDate(rpd.estrusDate);
        }

        if (rpd.matingDate != null && moment(rpd.matingDate) <= now) {
          countMating++;
          lastMating = this.formatDate(rpd.matingDate);
        }

        if (rpd.checkDate != null && moment(rpd.checkDate) <= now) {
          countCheck++;
          lastCheck = this.formatDate(rpd.checkDate);
        }
      }

      return {
        login: {
          count: countLogin,
          lastDate: lastDateLogin,
          result: result,
        },
        estrus: {
          count: countEstrus > 0 ? countEstrus : "-",
          lastDate: lastEstrus,
        },
        mating: {
          count: countMating > 0 ? countMating : "-",
          lastDate: lastMating,
        },
        check: {
          count: countCheck > 0 ? countCheck : "-",
          lastDate: lastCheck,
        },
      };
    },
    birth() {
      return {
        count: this.births.length > 0 ? this.births.length : "-",
        lastDate:
          this.births.length > 0
            ? this.formatDate(this.births[0].birthDate)
            : "-",
        countMale:
          this.births.length > 0
            ? this.births.filter((b) => b.sex === "M").length
            : "-",
        countFemale:
          this.births.length > 0
            ? this.births.filter((b) => b.sex === "F").length
            : "-",
      };
    },
    heal() {
      let count = this.heals.length > 0 ? this.heals.length : "-";
      let lastDate =
        this.heals.length > 0 ? this.formatDate(this.heals[0].date) : "-";
      let lastDisease = this.heals.length > 0 ? this.heals[0].disease : "-";
      let lastMethod =
        this.heals.length > 0 && this.heals[0].method
          ? this.heals[0].method
          : "-";

      return { count, lastDate, lastDisease, lastMethod };
    },
    food() {
      const sum = {qty:0,amount:0}
      for(let food of this.foods){
        const days = new Date(food.year,food.month,0).getDate()
        sum.qty += ((food.foodDetails.reduce((sum, item) => sum + item.qty, 0) * days)/food.numCow)
        sum.amount += ((food.foodDetails.reduce((sum, item) => sum + item.amount, 0) * days)/food.numCow)
      }
      return {sum};
    },
    filterColor(){
      const grade = this.quality?.grade
      if(grade === 'A+'){
        return { grade : 'text-lime-500 p-1 ',profit : 'bg-green-900 text-lime-500'}
      }else if(grade === 'A'){
        return { grade : 'text-green-500 ',profit : 'bg-teal-900 text-green-500'}
      }else if(grade === 'B'){
        return { grade : 'p-1 ',profit : 'bg-gray-600 text-white'}
      }else if(grade === 'C'){
        return { grade : 'text-orange-500 p-1',profit : 'bg-orange-900 text-yellow-500'}
      }else if(grade === 'D'){
        return { grade : 'text-red-500 p-1 ',profit : 'bg-red-900 text-rose-400 '}
      }
    },
    filterText(){
      const grade = this.quality?.grade
      if(grade === 'A+'){
        return { percent : '(กำไร > 80%)'}
      }else if(grade === 'A'){
        return { percent : '(กำไร 51% - 80%)'}
      }else if(grade === 'B'){
        return { percent : '(กำไร 31% - 50%)'}
      }else if(grade === 'C'){
        return { percent : '(กำไร 0% - 30%)'}
      }else if(grade === 'D'){
        return { percent : '(กำไร <= 0%)'}
      }
    },
    formatDate(date) {
      if (!date) {
        return "";
      }
      return moment(new Date(date)).format("DD/MM/YYYY");
    },
    calAge(bdDate) {
      return getAge(bdDate);
    },
  },
};
</script>
