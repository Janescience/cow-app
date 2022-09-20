<template>

  <CardBox
    v-if="itemsPaginated.length > 0"
    has-table
  >
    <table>
      <thead>
        <tr>
          <th />
          <th>ลูกแชร์</th>
          <th class="whitespace-nowrap">จำนวนวง</th>
          <th class="whitespace-nowrap">จำนวนมือ</th>
          <th>ยอดรับ</th>
          <th>ยอดส่ง</th>
          <th>ค่าดูแล</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="member in itemsPaginated"
          :key="member.memberName"
        >
          <td class="border-b-0 lg:w-6 before:hidden">
            <UserAvatar
              api="bottts"
              :username="member.memberId"
              class="w-10 h-10 mx-auto lg:w-10 lg:h-10"
            />
          </td>
          <td data-label="ลูกแชร์">
            {{ member.memberName }}
          </td>
          <td data-label="จำนวนวง" class="lg:w-14 text-center whitespace-nowrap">
            {{ member.numGroup }}
          </td>
          <td data-label="จำนวนมือ" class="lg:w-14 text-center whitespace-nowrap">
            {{ member.numHand }}
          </td>
          <td 
            data-label="ยอดรับ"
            class="whitespace-nowrap"
          >
            {{ member.amount > 0 ? formatCurrency(member.amount)  : 'ไม่มียอดรับ' }}
          </td>
          <td 
            data-label="ยอดส่ง"
            class="whitespace-nowrap"
          >
            {{ formatCurrency(member.amountSend) }}
          </td>
          <td data-label="ค่าดูแล">
            {{ formatCurrency(member.careFee) }}
          </td>
        </tr>
      </tbody>
    </table>
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
</template>

<script>
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import CardBox from './CardBox.vue'
import numeral from 'numeral'

export default {
    data() {
        return {
          perPage : 5,
          currentPage : 0
        }
    },
    props : {
      items : {
        type : Array,
        default : []
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
    methods: {
      formatCurrency(amt){
        return numeral(amt).format(0,0)
      },
    },
    components : {
      BaseLevel,
      BaseButtons,
      BaseButton,
      UserAvatar,
      CardBox
    }
}
</script>
