<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="cupWater" 
        title="การรีดนม"
        btnText="เพิ่มการรีดนม"
        has-btn-add
        @openModal="mode='create';modalMilk = true;"
      />

      <MilkModal
        v-model="modalMilk"
        :mode="mode" 
        :dataEdit="dataEdit" 
        @confirm="getMilks" 
        @cancel="getMilks" 
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getMilks" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />
      <CardBox>
        <Calendar :events="events"/>

      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from '@/components/SectionMain.vue';
import Table from "@/components/Table.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import DDLCow from '@/components/DDL/Cow.vue'
import MilkModal from './MilkModal.vue'
import MilkingService from '@/services/milking'
import Criteria from "@/components/Criteria.vue";
import CardBox from "@/components/CardBox.vue";

import Calendar from './Calendar.vue'
import moment from "moment";
import _ from 'lodash';

export default {
  data (){
    return {
      modalMilk : false,
      items : [],
      events : [],
      forms : [
        {
          label : 'โค',
          class : 'lg:col-start-2',
          value : 'cow',
          type : 'ddl',
          module : 'cow'
        },
        {
          label : 'วันที่รีดนม',
          value : 'date',
          icon : 'calendar',
          type : 'date'
        }
      ],
      search : {
        cow : null,
        date : null,
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'date',
          type : 'date'
        },
        label : {
          value : 'cow.name'
        }
      },
      datas : [
        {
          label : "วันที่รีดนม",
          class : 'text-center',
          type : 'date',
          value : 'date',
        },
        {
          label : "โค",
          class : 'text-center',
          value : 'relate.cow.name',
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
      buttons : [
        {
          label : 'ลบ',
          type : 'delete',
          color : 'danger',
        },
        {
          label : 'แก้ไข',
          type : 'edit',
          color : 'warning',
        },
      ]
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    Table,
    SectionTitleBarSub,
    DDLCow,
    MilkModal,
    Criteria,
    Calendar,
    CardBox
  },
  computed : {
    user() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    this.getMilks();
  },
  methods : {
    async getMilks(){
      this.loading = true
      this.search.farm = this.user.farm._id
      const resp = await MilkingService.all(this.search);
      this.items = []
      if(resp.data){
        for(let milk of resp.data.milkings){
          milk.date = moment(milk.date,'YYYY-MM-DD').format('DDMMYYYY');
        }
        this.items = _.groupBy(resp.data.milkings,'date');
        Object.keys(this.items).forEach(key => {
          let milks = this.items[key];

          let event = {};
          event.date = key
          event.count = milks.length;
          event.sumQty = 0;
          event.sumAmt = 0;

          milks.map((m) => {
            event.sumQty += m.morningQty + m.afternoonQty
            event.sumAmt += m.amount
          })

          event.milks = milks
          this.events.push(event)
      })
      }
      this.loading = false
    },
    async removeMilk(id){
      this.loading = true
      const resp = await MilkingService.delete(id);
      if(resp.data){
        this.getMilks()
      }
      this.loading = false
    },
    edit(milk){
      this.dataEdit = milk;
      this.mode = 'edit';
      this.modalMilk = true;
    },
    reset(){
      this.search.cow = null
      this.search.date = new Date()
    },
  }
}
</script>
