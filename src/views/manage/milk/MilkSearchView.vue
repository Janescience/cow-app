<template>
  <LayoutAuthenticated>
    <SectionMain>
      <section class="px-6 sm:px-0 mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <BaseIcon
            path="cupWater"
            size="30"
            class="mr-3"
          />
          <h1 class="text-2xl">
            การรีดนม
          </h1>
        </div>
        <BaseButton
          label="เพิ่มการรีดนม"
          color="success"
          @click="mode='create';modalMilk = true;"
        />
      </section>


      <MilkModal v-model="modalMilk" @confirm="getMilks" @cancel="getMilks" :mode="mode" :dataEdit="dataEdit"/>

      <CardBoxModal
          v-model="modalConfirm"
          title="ยืนยันอีกครั้ง"
          button-label="ยืนยัน"
          @confirm="funcConfirm"
          has-cancel
          has-button
          >
          <p>{{ textConfirm }}</p>
      </CardBoxModal>

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

      <CardBox
            v-if="itemsPaginated.length > 0"
            :title="'รายการรีดนม ' + countChecked()"
            class="shadow-lg"
            has-table
            header-icon=""
        >
            <div
            class="p-3 bg-gray-100/50 dark:bg-gray-800"
            v-if="checkedRows.length > 0"
            >
              <span
                  v-for="checkedRow in checkedRows"
                  :key="checkedRow._id"
                  class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1"
              >
                  {{ checkedRow.cow.name }}
              </span>
              <BaseButtons
                  type="justify-start lg:justify-end"
                  no-wrap
              >
                  <BaseButton
                    color="danger"
                    label="ลบทั้งหมด"
                    @click="isModalActive = true"
                  />
              </BaseButtons>
            </div>
            <div class="overflow-x-auto">
              <table>
                <thead>
                    <tr >
                      <th class="text-center whitespace-nowrap">เลือก</th>
                      <th class="text-center whitespace-nowrap">โค</th>
                      <th class="text-center whitespace-nowrap">วันที่รีดนม</th>
                      <th class="text-center whitespace-nowrap">ปริมาณน้ำนมดิบ/เช้า (กก.)</th>
                      <th class="text-center whitespace-nowrap">ปริมาณน้ำนมดิบ/บ่าย (กก.)</th>
                      <th class="text-center whitespace-nowrap">ปริมาณน้ำนมดิบรวม (กก.)</th>
                      <th class="text-center whitespace-nowrap">จำนวนเงินรวม</th>
                      <th />
                    </tr>
                </thead>
              <tbody>
                  <tr
                    v-for="milk in itemsPaginated"
                    :key="milk._id"
                  >
                  <TableCheckboxCell
                      :isChecked="milk.checked"
                      class="text-center border-b-0 lg:w-6 before:hidden"
                      @checked="checked($event, milk)"
                  />
                  <td data-label="โค" class="whitespace-nowrap">
                      {{ milk.cow.code +' : '+ milk.cow.name }}
                  </td>
                  <td data-label="วันที่รีดนม" class="text-center">
                      {{ formatDate(milk.date) }}
                  </td>
                  <td data-label="ปริมาณน้ำนมดิบ/เช้า (กก.)" class="whitespace-nowrap text-center">
                      {{ milk.morningQty }}
                  </td>
                  <td data-label="ปริมาณน้ำนมดิบ/บ่าย" class="whitespace-nowrap text-center">
                      {{ milk.afternoonQty }}
                  </td>
                  <td data-label="ปริมาณน้ำนมดิบรวม" class="whitespace-nowrap text-center">
                      {{ milk.morningQty + milk.afternoonQty }}
                  </td>
                  <td data-label="จำนวนเงินรวม" class="whitespace-nowrap text-right">
                      {{ formatCurrency(milk.amount)  }}
                  </td>
                  <td class="lg:w-6 whitespace-nowrap">
                      <BaseButtons
                        type="justify-end lg:justify-start"
                        no-wrap
                      >
                        <BaseButton
                            color="danger"
                            label="ลบ"
                            @click="confirm(
                                'ยืนยันลบการรีดนมของโค '+milk.cow.name+' ใช่หรือไม่ ?',
                                milk._id,
                                removeMilk
                            )"
                        />
                        <BaseButton
                            color="warning"
                            label="แก้ไข"
                            @click="edit(milk)"
                        />
                      </BaseButtons>
                  </td>
                  </tr>
              </tbody>
              </table>
            </div>
            
            <div
              class="p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"
            >
              <BaseLevel >
                  <BaseButtons>
                  <BaseButton
                      v-for="page in pagesList"
                      :key="page"
                      :active="page === currentPage"
                      :label="page + 1"
                      small
                      @click="currentPage = page"
                  />
                  </BaseButtons>
                  <small>หน้า {{ currentPageHuman }} จาก {{ numPages }}</small>
              </BaseLevel>
            </div>
        </CardBox>
        <CardBox v-else-if="loading" loading/>
        <CardBox v-else empty/>
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
import CardBoxModal from '@/components/CardBoxModal.vue'
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import DDLCow from '@/components/DDL/Cow.vue'
import MilkModal from './MilkModal.vue'
import MilkingService from '@/services/milking'
import { getCurrentUser } from "@/utils";
import moment from "moment";
import numeral from "numeral";

export default {
  data (){
    return {
      modalMilk : false,
      textConfirm : "",
      modalConfirm : false,
      funcConfirm : Function,
      idConfirm : null,
      perPage :10,
      currentPage : 0,
      checkedRows : [],
      items : [],
      search : {
        cow : null,
        date : null,
      },
      loading : false,
      mode : "create",
      dataEdit : null
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    BaseButton,
    BaseIcon,
    BaseButtons,
    CardBox,
    TableCheckboxCell,
    CardBoxModal,
    BaseLevel,
    FormControl,
    FormField,
    BaseDivider,
    DDLCow,
    MilkModal,
},
  created() {
    this.getMilks();
  },
  computed : {
    itemsPaginated() {
      return this.items ? this.items.slice(this.perPage * this.currentPage, this.perPage * (this.currentPage + 1)) : []
    },
    numPages(){
      return Math.ceil((this.items ? this.items.length : 0) / this.perPage);
    },
    currentPageHuman() {
      return this.currentPage + 1
    },
    pagesList() {
      const pagesList = []

      for (let i = 0; i < this.numPages; i++) {
        pagesList.push(i)
      }

      return pagesList
    }
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
    async removeMilk(){
      this.loading = true
      const resp = await MilkingService.delete(this.idConfirm);
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
    checked(isChecked, milk){
      if (isChecked) {
        milk.checked = true
        this.checkedRows.push(milk)
      } else {
        milk.checked = false
        this.checkedRows = this.removeArr(this.checkedRows, row => row._id === milk._id)
      }
    },
    removeArr(arr,cb){
      const newArr = []
      arr.forEach(item => {
        if (!cb(item)) {
          newArr.push(item)
        }
      })
      return newArr
    },
    confirm(text,id,func){
      this.textConfirm = text
      this.funcConfirm = func
      this.idConfirm = id
      this.modalConfirm = true
    },
    countChecked(){
      return (this.checkedRows.length > 0 ? '(เลือก ' + this.checkedRows.length + ' รายการ)':'')
    },
    formatDate(date){
        if(!date){
            return ""
        }
      return moment(new Date(date)).format('DD/MM/YYYY');
    },
    formatCurrency(amt){
      return numeral(amt).format(0,0);
    }
  }
}
</script>
