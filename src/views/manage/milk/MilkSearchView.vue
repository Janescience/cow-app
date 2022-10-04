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
        title="ค้นหาการรีดนม" 
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getMilks" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

      <Table
        title="รายการรีดนม" 
        has-checkbox
        checkedLabel="cow.name" 
        :items="items" 
        :datas="datas" 
        :button="button" 
        @edit="edit" 
        @delete="removeMilk" 
        @deleteSelected="removeSelected"
      />

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


export default {
  data (){
    return {
      modalMilk : false,
      items : [],
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
          value : 'cow.name',
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
      button : {
        edit:true,
        delete:true
      }
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    Table,
    SectionTitleBarSub,
    DDLCow,
    MilkModal,
    Criteria
},
  created() {
    this.getMilks();
  },
  methods : {
    async getMilks(search){
      this.loading = true
      const resp = await MilkingService.all(search);
      this.items = []
      if(resp.data){
        this.items = resp.data.milkings
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
      this.dataEdit.cow = milk.cow._id;
      this.mode = 'edit';
      this.modalMilk = true;
    },
    reset(){
      this.search.cow = null
      this.search.date = null
    },
  }
}
</script>
