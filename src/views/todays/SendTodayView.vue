<template>
  <LayoutAuthenticated>
    <SectionMain>
        <section class="px-6 sm:px-0 mb-6 grid lg:grid-cols-4 grid-cols-1 gap-5">
        <div class="items-center lg:col-span-3">
          <h1 class="text-2xl">
            ยอดส่งวันนี้
          </h1>
        </div>
        <FormControl
            v-model="searchMember"
            icon="accountSearchOutline"
            class="shadow "
            placeholder="ค้นหาลูกแชร์"
        />
      </section>
        <CardBoxModal
            v-model="modalAlert"
            title="แจ้งเตือน"
            :has-button="false"
            class="text-xl"
            >
            <p> {{ textAlert }}</p>
        </CardBoxModal>

        <CardBox
            header-icon="contentCopy"
            @header-icon-click="copyText"
            :title="'รายการยอดส่ง ' + countChecked()"
            v-if="itemsPaginated.length > 0"
            has-table
        >
            <div
            class="p-3 bg-gray-100/50 dark:bg-gray-800"
            v-if="checkedRows.length > 0"
            >
            <span
                v-for="checkedRow in checkedRows"
                :key="checkedRow.memberId"
                class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1"
            >
                {{ checkedRow.memberName }}
            </span>
            <table>
                <tbody>
                <tr
                >
                    <td >
                    <span class="justify-start">ยอดส่งรวม : </span>
                    <b class="text-red-500 " ><u>{{ formatCurrency(checkedSum().sumBalance) }}</u></b>
                    </td>
                    <td class="before:hidden lg:w-6 ">
                    <BaseButtons
                        type="justify-start lg:justify-end"
                        no-wrap
                    >
                        <BaseButton
                        color="success"
                        label="ส่งยอดทั้งหมด"
                        @click="isModalActive = true"
                        />
                    </BaseButtons>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div class="overflow-x-auto ">
              <table>
                <thead>
                    <tr>
                      <th />
                      <th />
                      <th />
                      <th class="text-center " colspan="3">ยอดส่งวันนี้</th>
                      <th class="text-center " colspan="3">ยอดค้างส่ง</th>

                    </tr>
                    <tr >
                        <th />
                        <th />
                        <th >ลูกแชร์</th>
                        <th class="text-center whitespace-nowrap">ยอดส่ง</th>
                        <th class="text-center">จ่ายแล้ว</th>
                        <th class="text-center">เหลือจ่าย</th>
                        <th class="text-center whitespace-nowrap">ยอดค้าง</th>
                        <th class="text-center">จ่ายแล้ว</th>
                        <th class="text-center whitespace-nowrap">เหลือจ่าย</th>
                        <!-- <th class="text-right">ยอดส่งรวม</th>
                        <th class="text-right">ส่งแล้วรวม</th>
                        <th class="text-right">เหลือส่งรวม</th> -->
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    v-for="member in itemsPaginated"
                    :key="member.memberId"
                    >
                    <TableCheckboxCell
                        v-if="member.sumSendBalance > 0 || member.sumDebtBalance > 0"
                        :isChecked="member.checked"
                        class="text-center border-b-0 lg:w-6 before:hidden"
                        @checked="checked($event, member)"
                    />
                    <td class="border-b-0 lg:w-6 " v-else />
                    <td class="border-b-0 lg:w-6 before:hidden">
                        <UserAvatar
                        :username="member.memberId"
                        class="w-12 h-12 mx-auto lg:w-12 lg:h-12"
                        />
                    </td>
                    <td data-label="ลูกแชร์" class="whitespace-nowrap">
                        {{ member.memberName }}
                    </td>
                    <td data-label="ยอดส่ง" class="text-right whitespace-nowrap">
                        <b class="text-blue-500"><u>{{ formatCurrency(member.sumSend) }}</u></b>
                    </td>
                    <td class="flex items-center grow-0 shrink-0 whitespace-nowrap" data-label="จ่ายแล้ว">
                      
                      <FormControl
                        v-model="member.sumSendPaid"
                        type="number"
                        icon="cashMultiple"
                        class="lg:w-28 w-40 lg:flex-auto mr-2"
                        placeholder="จ่ายยอดส่งวันนี้"
                      />
                      <BaseButton
                        v-if="member.sumSend - member.sumSendBalance > 0"
                        color="danger"
                        icon="close"
                        label=""
                        class="flex-none"
                        small
                      />
                    </td>
                    <td data-label="เหลือจ่าย" class="text-right whitespace-nowrap">
                        <b ><u>{{ member.sumSendBalance > 0 ? formatCurrency(member.sumSendBalance) : 'จ่ายครบแล้ว' }}</u></b>
                    </td>
                    <td data-label="ยอดค้างส่ง" class="text-right whitespace-nowrap" v-if="member.sumDebt > 0">
                        <b class="text-orange-500"><u>{{ formatCurrency(member.sumDebt) }}</u></b>
                    </td>
                    <td colspan="3" v-else class="border-b-0 lg:w-6 text-center" data-label="จ่ายยอดค้างส่ง" >ไม่มียอดค้าง</td>
                    <td class="flex items-center grow-0 shrink-0" data-label="จ่ายแล้ว" v-if="member.sumDebt > 0">
                        <FormControl
                          v-model="member.sumDebtPaid"
                          type="number"
                          icon="cashMultiple"
                          class="lg:w-32 w-40 lg:flex-auto mr-2 "
                          placeholder="จ่ายยอดค้างส่ง"
                        />
                        <BaseButton
                          v-if="member.sumDebt - member.sumDebtBalance > 0"
                          color="danger"
                          icon="close"
                          label=""
                          class="flex-none"
                          small
                        />                      
                    </td>
                    <td data-label="เหลือจ่าย" class="text-right whitespace-nowrap" v-if="member.sumDebt > 0">
                        <b ><u>{{ member.sumDebtBalance > 0 ? formatCurrency(member.sumDebtBalance) : 'จ่ายครบแล้ว' }}</u></b>
                    </td>
                    <!-- <td data-label="ยอดส่งรวม" class="text-right whitespace-nowrap">
                        <b ><u>{{ formatCurrency(member.sumSend + member.sumDebt) }}</u></b>
                    </td>
                    <td data-label="ส่งแล้วรวม" class="text-right">
                        <b class="text-teal-500 "><u>{{ formatCurrency((member.sumSend - member.sumSendBalance) + (member.sumDebt - member.sumDebtBalance)) }}</u></b>
                    </td>
                    <td data-label="เหลือส่งรวม" class="text-right">
                        <b class="text-rose-500 " ><u>{{ formatCurrency(member.sumSendBalance + member.sumDebtBalance) }}</u></b>
                    </td> -->
                    <td class=" lg:w-1 whitespace-nowrap">
                        <BaseButtons
                        type="justify-end lg:justify-start"
                        no-wrap
                        >
                          <BaseButton
                              color="info"
                              label="รายละเอียด"
                              @click="isModalActive = true"
                          />
                          <BaseButton
                              :disabled="member.sumSendPaid > member.sumSend || member.sumDebtPaid > member.sumDebt"
                              color="success"
                              label="บันทีก"
                              @click="paidPartial(member)"
                          />
                          <!-- <BaseButton
                              color="success"
                              icon="cashCheck"
                              label="ส่งยอด"
                              small
                              @click="confirm('ยืนยันส่งยอดทั้งหมด ใช่หรือไม่ ?',member.memberId,paid)"
                          /> -->
                        </BaseButtons>
                    </td>
                    </tr>
                </tbody>
                <tfoot>
                  <tr >
                    <td colspan="2">ยอดรวม</td>
                    <td colspan="2" class="text-right" data-label="รวมยอดส่งวันนี้"><b class="text-blue-500">{{ formatCurrency(sum().sumSend) }}</b></td>
                    <td  class="text-right" data-label="รวมจ่ายแล้ว"><b class="text-teal-500">{{ formatCurrency(sum().sumSendPaid) }}</b></td>
                    <td  class="text-right" data-label="รวมเหลือจ่าย"><b class="text-rose-500">{{ formatCurrency(sum().sumSendBalance) }}</b></td>
                    <td  class="text-right" data-label="รวมยอดค้างส่ง"><b class="text-orange-500">{{ formatCurrency(sum().sumDebt) }}</b></td>
                    <td  class="text-right" data-label="รวมจ่ายแล้ว"><b class="text-teal-500">{{ formatCurrency(sum().sumDebtPaid) }}</b></td>
                    <td class="text-right" data-label="รวมเหลือจ่าย"> <b class="text-rose-500">{{formatCurrency(sum().sumDebtBalance)}}</b></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            
            <div
            class="p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"
            >
            <BaseLevel>
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
                <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
            </BaseLevel>
            </div>
        </CardBox>
        <CardBox v-else empty/>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleBar from '@/components/SectionTitleBar.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'
import CardBox from '@/components/CardBox.vue'
import TableCheckboxCell from '@/components/TableCheckboxCell.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import FormControl from '@/components/FormControl.vue'
import DashboardService from '@/services/dashboard'
import numeral from 'numeral'
import copy from 'copy-to-clipboard';
import moment from 'moment'

export default {
    data(){
        return {
            perPage : 10,
            currentPage : 0,
            checkedRows : [],
            items : [],
            textAlert : "",
            modalAlert : false,
            funcConfirm : Function,
            idConfirm : null,
        }
    },
    created() {
      this.getSends()
    },
    methods: {
      async getSends(){
        let loader = this.$loading.show();
        const resp = await DashboardService.getDashboardAmountSend();
        if(resp.data){
          this.items = resp.data.data
          this.items.map((item) => {
            item.sumSendPaid = item.sumSend - item.sumSendBalance
            item.sumDebtPaid = item.sumDebt - item.sumDebtBalance
          })
          loader.hide()
        }
      },
      async paid(){
        let loader = this.$loading.show();
      },
      async paidPartial(member){
        let loader = this.$loading.show();
        const sendPaid = member.sumSendPaid;
        const debtPaid = member.sumDebtPaid;
        const resp = await DashboardService.updatePaidAmountSendByMember(member.memberId,sendPaid,debtPaid)
        if(resp.data){
          this.getSends()
          loader.hide()
        }
      },
      countChecked(){
        return (this.checkedRows.length > 0 ? '(เลือก ' + this.checkedRows.length + ' รายการ)':'')
      },
      sum(){
        let sumSend = 0,sumDebt = 0 ,sumSendBalance = 0,sumDebtBalance = 0,sumSendPaid = 0,sumDebtPaid = 0;
        this.items.map((row) => {
            sumSend += row.sumSend;
            sumDebt += row.sumDebt;
            sumSendPaid += (row.sumSend - row.sumSendBalance) 
            sumDebtPaid += (row.sumDebt - row.sumDebtBalance);
            sumSendBalance += row.sumSendBalance;
            sumDebtBalance += row.sumDebtBalance;
        })
        return {
          sumSend,
          sumDebt,
          sumSendPaid,
          sumDebtPaid,
          sumSendBalance,
          sumDebtBalance
        }
      },
      checkedSum(){
        let sumSend = 0,sumBalance = 0,sumPaid = 0;
        this.checkedRows.map((row) => {
            sumSend += (row.sumSend+row.sumDebt);
            sumPaid += (row.sumSend - row.sumSendBalance) + (row.sumDebt - row.sumDebtBalance);
            sumBalance += (row.sumSendBalance + row.sumDebtBalance);
        })
        return {
          sumSend,
          sumPaid,
          sumBalance
        }
      },
      checked(isChecked, member){
        if (isChecked) {
          member.checked = true
          this.checkedRows.push(member)
        } else {
           member.checked = false
          this.checkedRows = this.remove(this.checkedRows, row => row.memberId === member.memberId)
        }
      },
      remove(arr,cb){
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
      formatCurrency(amt){
        return numeral(amt).format(0,0)
      },
      formatDate(date){
        if(!date){
          return ""
        }
        return moment(new Date(date)).format('DD/MM/YYYY');
      },
      copyText(){
        let listSend = '';
        let no = 1;
        this.items.map((item) => {
          listSend += (no++) +'. ' +item.memberName + ' = ' + 
          (this.formatCurrency(item.sumSend + item.sumDebt)) + 
          (item.sumSendBalance == 0 && item.sumDebtBalance == 0 ? ' ✅' : '') +
          '\n';
        })

        copy(`
ยอดส่งประจำวันที่ ${this.formatDate(new Date())}
(ยอดส่ง + ยอดค้าง + ค่าดูแล + ค่าปรับ)
===========================
${listSend}
        `)
        this.modalAlert = true;
        this.textAlert = "คัดลอกสำเร็จ"
        setTimeout(() => {
          this.modalAlert = false;
          this.textAlert = ""
        },1000)
      }
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
    components : {
        LayoutAuthenticated,
        SectionMain,
        SectionTitleBar,
        CardBoxModal,
        TableCheckboxCell,
        BaseLevel,
        BaseButtons,
        BaseButton,
        UserAvatar,
        CardBox,
        FormControl
    }
}
</script>