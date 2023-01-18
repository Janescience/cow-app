<template>
  <LayoutAuthenticated>
    <SectionMain>

      <SectionTitleBarSub 
        icon="calculatorVariantOutline" 
        title="สูตรอาหาร"
        has-btn-add
        @openModal="mode='create';openModal = true;"
        btnText="เพิ่มสูตรอาหาร"
      />

      <Modal
        v-model="openModal"
        :data="modalData"
        :mode="mode"
        @confirm="getDatas"
        @cancel="getDatas"
         
      />

      <Criteria
        grid="grid-cols-2 lg:grid-cols-4"
        @search="getDatas" 
        @reset="reset" 
        :forms="forms" 
        :search="search"
      />

      <Table
        title="รายการสูตรอาหาร" 
        has-checkbox
        :checked-data="checked" 
        :items="items" 
        :datas="datas" 
        :buttons="buttons" 
        @edit="edit" 
        @delete="remove" 
        @deleteSelected="removeSelected"
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

import Modal from './Modal.vue'
import RecipeService from '@/services/recipe'

import { getCurrentUser } from "@/utils";
import { Toast } from "@/utils/alert";
import { type } from "@/constants/recipe";


export default {
  data (){
    return {
      openModal : false,
      modalData : null,
      items : [],
      forms : [
        {
          label : 'สูตรอาหาร',
          value : 'recipe',
          type : 'ddl',
          module : 'recipe'
        }, 
        {
          label : 'ประเภท',
          value : 'type',
          options : type()
        },
      ],
      search : {
        recipe : '',
        type : '',
        farm : getCurrentUser().farm._id,
      },
      loading : false,
      mode : "create",
      dataEdit : null,
      checked : {
        code : {
          value : 'code',
        },
        label : {
          value : 'name'
        }
      },
      datas : [
        {
          label : "สูตรอาหาร",
          class : 'text-center',
          value : 'name',
        },
        {
          label : "ประเภท",
          class : 'text-center',
          func : (obj) => {
            return type()[obj.type].label
          },
        },
        {
          label : "ราคา/กก.",
          class : 'text-center',
          value : 'amount',
        },
        {
          label : "จำนวนอาหาร/วัตถุดิบ",
          class : 'text-center',
          func : (obj) => {
            return obj.recipeDetails.length
          },
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
    SectionTitleBarSub,
    Table,
    Modal,
    Criteria
},
  created() {
    this.getDatas();
  },
  methods : {
    async getDatas(){
      this.loading = true
      const resp = await RecipeService.all(this.search);
      this.items = []
      if(resp.data){
        this.items = resp.data.recipes
      }
      this.loading = false
    },
    async remove(id){
      this.loading = true
      const resp = await RecipeService.delete(id);
      if(resp.data){
        this.getDatas()
      }
      this.loading = false
      Toast.fire({
        icon: 'success',
        title: 'ลบข้อมูลสำเร็จ'
      })
    },
    edit(obj){
      this.modalData = obj;
      this.mode = 'edit';
      this.openModal = true;
    },
    reset(){
      this.search.recipe = ''
      this.search.type = ''
      this.getDatas()
    },
  }
}
</script>
