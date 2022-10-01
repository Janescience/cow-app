<template>
  <LayoutAuthenticated>
    <SectionMain>
      <section class="px-6 sm:px-0 mb-6 flex items-center justify-between">
        <div class="flex items-center justify-start">
          <BaseIcon
            path="cow"
            size="30"
            class="mr-3"
          />
          <h1 class="text-2xl">
            โค
          </h1>
        </div>
        <BaseButton
          label="เพิ่มโค"
          color="success"
          @click="modalCreate = true"
        />
      </section>


      <CreateCowModal v-model="modalCreate" @confirm="getCows"/>

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
          title="ค้นหาโค"
          icon=""
          form
          class="mb-3"
          header-icon=""
          @submit.prevent="getCows"
          @reset.prevent="reset"
        >

          <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
            <FormField label="โค">
              <DDLCow v-model="search.code"/>
            </FormField>
            <FormField label="วันเกิด">
              <FormControl
                v-model="search.birthDate"
                icon="calendar"
                type="date"
              />
            </FormField>
            <FormField label="สถานะ">
              <FormControl
                v-model="search.status"
                :options="status"
              />
            </FormField>
            <FormField label="คอก">
              <FormControl
                v-model="search.corral"
                icon="barn"
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
            :title="'รายการโค ' + countChecked()"
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
                  {{ checkedRow.name }}
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
                      <th class="text-center whitespace-nowrap">รูปภาพ</th>
                      <th class="text-center whitespace-nowrap" >รหัสโค</th>
                      <th class="text-center whitespace-nowrap">ชื่อโค </th>
                      <th class="text-center whitespace-nowrap">วันเกิด</th>
                      <th class="text-center">อายุ </th>
                      <th class="text-center">สถานะ </th>
                      <th class="text-center">คอก </th>
                      <th class="text-center whitespace-nowrap">พ่อพันธุ์ </th>
                      <th class="text-center whitespace-nowrap">แม่พันธุ์ </th>
                      <th />
                    </tr>
                </thead>
              <tbody>
                  <tr
                    v-for="cow in itemsPaginated"
                    :key="cow._id"
                  >
                  <TableCheckboxCell
                      :isChecked="cow.checked"
                      class="text-center border-b-0 lg:w-6 before:hidden"
                      @checked="checked($event, cow)"
                  />
                  <td class="border-b-0 lg:w-6 before:hidden">
                      <UserAvatar
                        :username="cow._id"
                        class="w-24 h-24 mx-auto lg:w-12 lg:h-12"
                      />
                  </td>
                  <td data-label="รหัสโค" class="whitespace-nowrap">
                      <span >{{ cow.code }}</span>
                  </td>
                  <td data-label="ชื่อโค" class="whitespace-nowrap">
                      {{ cow.name }}
                  </td>
                  <td data-label="วันเกิด" class="text-center">
                      {{ formatDate(cow.birthDate) }}
                  </td>
                  <td data-label="อายุ" class="whitespace-nowrap">
                      {{ calAge(cow.birthDate) }}
                  </td>
                  <td data-label="สถานะ" class="whitespace-nowrap">
                      {{ status[cow.status].label }}
                  </td>
                  <td data-label="คอก" >
                      {{ cow.corral }}
                  </td>
                  <td data-label="พ่อพันธุ์" class="whitespace-nowrap">
                      {{ cow.dad }}
                  </td>
                  <td data-label="แม่พันธุ์" class="whitespace-nowrap">
                      {{ cow.mom }}
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
                                'ยืนยันลบโค '+cow.name+' ใช่หรือไม่ ?',
                                cow._id,
                                removeCow
                            )"
                        />
                        <BaseButton
                            color="warning"
                            label="แก้ไข"
                            @click="edit(cow)"
                        />
                        <BaseButton
                            color="info"
                            label="รายละเอียด"
                            @click="detail(cow._id)"
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
import UserAvatar from "@/components/UserAvatar.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import DDLCow from '@/components/DDL/Cow.vue'
import CreateCowModal from './CowModal.vue'
import CowService from '@/services/cow'
import { getCurrentUser } from "@/utils";
import getAge from "@/utils/age-calculate";
import moment from "moment";

export default {
  data (){
    return {
      modalCreate : false,
      status : [
        { id: "", label: 'ทั้งหมด' },
        { id: 1, label: 'ท้อง' },
        { id: 2, label: 'นมแห้ง' },
        { id: 3, label: 'ให้ผลผลิต' },
        { id: 4, label: 'วัวเด็ก' }
      ],
      textConfirm : "",
      modalConfirm : false,
      funcConfirm : Function,
      idConfirm : null,
      perPage :10,
      currentPage : 0,
      checkedRows : [],
      items : [],
      search : {
        code : null,
        status : "",
        birthDate : null,
        corral : "",
        flag : "Y",
        farm : getCurrentUser().farm._id
      },
      loading : false
    }
  },
  components : {
    SectionMain,
    LayoutAuthenticated,
    BaseButton,
    BaseIcon,
    BaseButtons,
    CardBox,
    UserAvatar,
    TableCheckboxCell,
    CardBoxModal,
    BaseLevel,
    FormControl,
    FormField,
    BaseDivider,
    DDLCow,
    CreateCowModal,
},
  created() {
    this.getCows();
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
    async getCows(){
      this.loading = true
      const resp = await CowService.all(this.search);
      this.items = []
      if(resp.data){
        this.items = resp.data.cows
      }
      this.loading = false
    },
    async removeCow(){
      this.loading = true
      const resp = await CowService.update(this.idConfirm,{flag:"N"});
      if(resp.data){
        this.getCows()
      }
      this.loading = false
    },
    reset(){
      this.search.code = null
      this.search.status = ""
      this.search.birthDate = null
      this.search.corral = ""
    },
    checked(isChecked, cow){
      if (isChecked) {
        cow.checked = true
        this.checkedRows.push(cow)
      } else {
        cow.checked = false
        this.checkedRows = this.removeArr(this.checkedRows, row => row._id === cow._id)
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
    calAge(bdDate){
      return getAge(bdDate);
    },
    formatDate(date){
        if(!date){
            return ""
        }
      return moment(new Date(date)).format('DD/MM/YYYY');
    },
  }
}
</script>
