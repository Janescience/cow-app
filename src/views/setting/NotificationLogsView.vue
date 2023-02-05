<template>
    <LayoutAuthenticated>
      <SectionMain>
  
        <SectionTitleBarSub 
          icon="bellCogOutline" 
          title="ประวัติการแจ้งเตือน"
          has-btn-add
          btn-text="ทดสอบแจ้งเตือน"
          @openModal="notify('ทดสอบการแจ้งเตือน')"
        />
  
        <Criteria
          grid="grid-cols-2 lg:grid-cols-4"
          @search="getDatas" 
          @reset="reset" 
          :forms="forms" 
          :search="search"
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
            class : 'text-center',
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
      urlAuth(){
            const clientId = import.meta.env.VITE_LINE_CLIENT_ID
            const engine = import.meta.env.VITE_API_ENGINE_URL
            const username = this.user.username
            return `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${engine}/line/redirect&scope=notify&state=${username}`
        }
    },
    created() {
      this.getDatas();
    },
    methods : {
        async getDatas(){
            this.loading = true
            const resp = await NotificationService.get(this.search);
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
            this.search.recipe = null
            this.search.corral = ''
            this.getDatas()
        },
    }
  }
  </script>
  