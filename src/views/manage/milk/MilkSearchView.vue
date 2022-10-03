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

      <CardBox
          title="ค้นหาการรีดนม"
          icon=""
          form
          class="mb-3"
          header-icon=""
          @submit.prevent="getMilks"
          @reset.prevent="reset"
        >

          <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
            
            <FormField label="โค" class="lg:col-start-2">
              <DDLCow v-model="search.cow"/>
            </FormField>
            <FormField label="วันที่รีดนม">
              <FormControl
                v-model="search.date"
                icon="calendar"
                type="date"
              />
            </FormField>
            
          </div>

          <BaseDivider />

          <BaseButtons
            type="justify-center"
            no-wrap
          >
            <BaseButton
              type="submit"
              color="info"
              label="ค้นหา"
              
            />
            <BaseButton
              type="reset"
              color="danger"
              label="ล้าง"
              
            />
          </BaseButtons>
        </CardBox>

      <Table
        title="รายการรีดนม" 
        has-checkbox 
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
import BaseButton from "@/components/BaseButton.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import Table from "@/components/Table.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import DDLCow from '@/components/DDL/Cow.vue'
import MilkModal from './MilkModal.vue'
import MilkingService from '@/services/milking'


export default {
  data (){
    return {
      modalMilk : false,
      items : [],
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
    BaseButton,
    BaseIcon,
    BaseButtons,
    CardBox,
    Table,
    BaseLevel,
    FormControl,
    FormField,
    BaseDivider,
    SectionTitleBarSub,
    DDLCow,
    MilkModal,
},
  created() {
    this.getMilks();
  },
  methods : {
    async getMilks(){
      this.loading = true
      const resp = await MilkingService.all(this.search);
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
