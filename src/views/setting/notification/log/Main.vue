<template>
    <LayoutAuthenticated>
      <SectionMain>
  
        <SectionTitleBarSub 
          icon="bellCogOutline" 
          title="ประวัติการแจ้งเตือน"
          has-btn-add
          btn-text="ทดสอบแจ้งเตือน"
          @openModal="notify('รายการเงินเข้า เข้าบัญชี xxx-x-x1574-x วันที่ 25 ส.ค. 67 เวลา 09:15  น. จำนวนเงิน 4.00  บาท ยอดเงินคงเหลือ 348.62  บาท')"
        />
  
        <Criteria
          grid="grid-cols-2 lg:grid-cols-4"
          @search="getDatas" 
          @reset="reset" 
          :forms="forms" 
          :search="search"
          :btnLoading="loading"
        />
  
        <Table
          title="รายการแจ้งเตือน" 
          :items="items" 
          :datas="datas" 
          :loading="loading"
        />
  
      </SectionMain>
    </LayoutAuthenticated>
  </template>
  
  <script>
  import SectionMain from '@/components/SectionMain.vue';
  import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
  import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";
  
  import Table from "@/components/Table.vue";
  import Criteria from "@/components/Criteria.vue";

  import NotificationService from '@/services/notification'
  import LineService from '@/services/line'

  import { Toast } from "@/utils/alert";
  import { status,type } from '@/constants/notification'

  import moment from 'moment';

  export default {
    data (){
      return {
        items : [],
        forms : [
          {
            label : 'วันที่',
            value : 'createdAt',
            icon : 'calendar',
            type : 'date',
          },
          {
            label : 'ประเภท',
            value : 'type',
            options : type('ddl'),
          },
          {
            label : 'สถานะ',
            value : 'status',
            options : status('ddl'),
          },
          {
            label : 'ข้อความ',
            value : 'message',
          },   
        ],
        search : {
            createdAt : null,
            type : '',
            status : ''
        },
        loading : false,
        datas : [
          {
            label : "วันที่",
            class : 'text-center',
            func : (obj) => {
                return moment(obj.createdAt).format('DD/MM/YYYY HH:mm:ss')
            },
          },
          {
            label : "ประเภท",
            class : 'text-center',
            func : (obj) => {
                return type()[obj.type]
            },
          },
          {
            label : "ข้อความ",
            value : 'message'
          },
          {
            label : "สถานะ",
            class : 'text-center',
            func : (obj) => {
                return status()[obj.status]
            },
          },
        ],
      }
    },
    components : {
      SectionMain,
      LayoutAuthenticated,
      SectionTitleBarSub,
      Table,
      Criteria
    },
    computed : {
      user() {
        return this.$store.state.auth.user;
      },
    },
    created() {
      this.getDatas();
    },
    methods : {
        async getDatas(){
            this.loading = true
            const resp = await NotificationService.getLogs(this.search);
            this.items = []
            if(resp.data){
                this.items = resp.data.notifications
            }
            this.loading = false
        },
        async notify(message){
            this.loading = true
            try {
                const resp = await LineService.notify({message : message, lineToken : this.user.farm.lineToken });
                if(resp.data){
                    this.loading = false
                    Toast.fire({
                        icon: 'success',
                        title: 'แจ้งเตือนสำเร็จ'
                    })
                    this.getDatas()
                }
            } catch (error) {
                this.loading = false
                Toast.fire({
                    icon: 'error',
                    title: 'แจ้งเตือนไม่สำเร็จ'
                })
            }
        },
        reset(){
            this.search.createdAt = null
            this.search.type = ''
            this.search.status = ''
            this.getDatas()
        },
    }
  }
  </script>
  