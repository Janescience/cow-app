<template>
  <LayoutAuthenticated>
    <SectionMain>
      
      <SectionTitleBarSub 
        icon="cow" 
        title="รายละเอียดโค"
        btnText="ย้อนกลับ"
        has-btn-add
        @openModal="this.$router.push('/manage/cow')"
      />
      
        <div
          v-if="!loading"
        >
          <CardBox>
            <div class="grid lg:gap-3 md:gap-2 gap-5 grid-cols-1 lg:grid-cols-6 md:grid-cols-4">
              <UserAvatar
                class="lg:w-40 lg:h-40 w-24 h-24 row-span-2 "
                :avatar="cow.image"
              />
              <FormField label="รหัสโค" help="* ห้ามว่าง">
                <FormControl
                  v-model="cow.code"
                  icon="barcode"
                  required
                />
              </FormField>
              <FormField label="ชื่อโค" help="* ห้ามว่าง">
                <FormControl
                  v-model="cow.name"
                  icon="cow"
                  required
                />
              </FormField>
              <FormField label="วันเกิด" help="* ห้ามว่าง">
                <FormControl
                  v-model="cow.birthDate"
                  icon="calendar"
                  type="date"
                  required
                />
              </FormField>
              <FormField label="สถานะ" help="* ห้ามว่าง">
                <FormControl
                  v-model="cow.status"
                  :options="status"
                  icon=""
                  required
                />
              </FormField>
              <FormField label="คอก">
                <FormControl
                  v-model="cow.corral"
                  icon="barn"
                />
              </FormField>
              <FormField label="พ่อพันธุ์">
                <FormControl
                  v-model="cow.dad"
                  icon="genderMale"
                />
              </FormField>
              <FormField label="แม่พันธุ์">
                <FormControl
                  v-model="cow.mom"
                  icon="genderFemale"
                />
              </FormField>
            </div>
           
          </CardBox>
        </div>
        <div
            v-else
            class="text-center py-10 text-gray-500 dark:text-gray-400 "
          >
            <BaseIcon
              path="dotsCircle"
              size="22"
              class="animate-spin"
            />
            <p> กำลังโหลดข้อมูล...</p>
        </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>

<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from '@/components/SectionMain.vue';
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import CardBox from "@/components/CardBox.vue";
import FormField from "@/components/FormField.vue";
import FormControl from "@/components/FormControl.vue";
import SectionTitleBarSub from "@/components/SectionTitleBarSub.vue";

import CowService from '@/services/cow'
import { getCurrentUser } from "@/utils";
import getAge from "@/utils/age-calculate";
import { cowStatus } from '@/constants/cow'


export default {
  data (){
    return {
      cow : null,
      loading : false,
    }
  },
 
  components : {
    SectionMain,
    LayoutAuthenticated,
    BaseButton,
    BaseIcon,
    BaseButtons,
    CardBox,
    FormControl,
    FormField,
    UserAvatar,
    SectionTitleBarSub,
    BaseLevel,
},
  created() {
    this.getCow(this.$route.params.id);
  },
  methods : {
    async getCow(id){
      this.loading = true
      const resp = await CowService.get(id);
      this.cow = null
      if(resp.data){
        this.cow = resp.data.cow
      }
      this.loading = false
    },
    async removeCow(id){
      this.loading = true
      const resp = await CowService.update(id,{flag:"N"});
      if(resp.data){
        this.getCows()
      }
      this.loading = false
    },
    detail(cow){
      this.dataEdit = cow;
      this.dataEdit.birthDate = new Date(this.dataEdit.birthDate)
    },
    reset(){
      this.search.code = null
      this.search.status = ""
      this.search.birthDate = null
      this.search.corral = ""
    },
    calAge(bdDate){
      return getAge(bdDate);
    },
  }
}
</script>
