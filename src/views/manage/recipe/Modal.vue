<template>
    <OverlayLayer
      v-show="value"
    >
      <CardBox
        v-show="value"
        :title="(this.mode === 'create' ?'บันทึก' : 'แก้ไข') + 'สูตรอาหาร'"
        class="shadow-lg w-full  overflow-y-auto lg:w-2/3 z-50"
        header-icon="close"
        modal
        form
        @submit.prevent="submit"
        @header-icon-click="cancel"
      >
      
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <FormField label="รหัสสูตร" help="* ห้ามว่าง" >
            <FormControl
              v-model="recipe.code"
              icon="vaccine"
              required
            />
          </FormField>
          <FormField label="ชื่อสูตร" help="* ห้ามว่าง" >
            <FormControl
              v-model="recipe.name"
              icon="time"
              required
            />
          </FormField>
          <FormField label="ประเภทอาหาร" help="* ห้ามว่าง" >
            <FormControl
              v-model="recipe.type"
              :options="type"
              required
            />
          </FormField>
          <FormField label="ต้นทุนรวม/กก."  >
            <FormControl
              v-model="recipe.amount"
              icon="cash"
              type="number"
              disabled
              required
            />
          </FormField>
        </div>

        <CardBox
            title="รายละเอียดสูตรอาหาร"
            class="shadow-lg"
            has-table
            header-icon=""
        >
          <div class="grid grid-cols-2 lg:grid-cols-6 gap-5">
            <FormField label="อาหาร/วัตถุดิบ" help="* ห้ามว่าง" class="col-span-2">
              <FormControl
                v-model="recipeDetail.food"
                icon="food"
                required
              />
            </FormField>
            <FormField label="ราคา/กก" help="* ห้ามว่าง" >
              <FormControl
                v-model="recipeDetail.cost"
                icon="time"
                type="number"
                required
              />
            </FormField>
            <FormField label="จำนวนที่ใช้/กก" help="* ห้ามว่าง" >
              <FormControl
                v-model="recipeDetail.qty"
                required
              />
            </FormField>
            <FormField label="จำนวนเงิน"  >
              <FormControl
                v-model="recipeDetail.amount"
                icon="cash"
                type="number"
                disabled
                required
              />
            </FormField>
          </div>

            <div class="overflow-x-auto">
              <table>
                <thead>
                    <tr >
                        <th class="whitespace-nowrap">
                          อาหาร/วัตถุดิบ
                        </th>
                        <th class="whitespace-nowrap">
                          ราคา/กก.
                        </th>
                        <th class="whitespace-nowrap">
                          จำนวนที่ใช้/กก.
                        </th>
                        <th class="whitespace-nowrap">
                          จำนวนเงิน
                        </th>
                        <th />
                    </tr>
                </thead>
              <tbody>
                  <tr
                    v-for="obj in recipeDetails"
                    :key="obj.food"
                  >
                  <td data-label="อาหาร/วัตถุดิบ" class="text-center">
                    {{ obj.food }}
                  </td>
                  <td data-label="ราคา/กก." class="text-center">
                    {{ obj.cost }}
                  </td>
                  <td data-label="จำนวนที่ใช้/กก." class="text-center">
                    {{ obj.qty }}
                  </td>
                  <td data-label="จำนวนเงิน" class="text-center">
                    {{ obj.amount }}
                  </td>
                  <td class="lg:w-6 whitespace-nowrap">
                      <BaseButtons
                        type="justify-end lg:justify-start"
                        no-wrap
                      >
                        <BaseButton
                            color="danger"
                            label="ลบ"
                            @click="remove(obj.food)"
                        />
                      </BaseButtons>
                  </td>
                  </tr>
              </tbody>
              </table>
            </div>
        </CardBox>

        <NotificationBar 
          v-if="alert" 
          color="danger" 
          outline
          icon="alertCircleOutline">
            {{ alert }}
        </NotificationBar>
  
        <BaseDivider />
  
        <BaseButtons
          type="justify-center"
        >
          <BaseButton
            label="บันทึก"
            color="success"
            type="submit"
            :loading="loading"
          />
          <BaseButton
            label="ยกเลิก"
            color="danger"
            @click="cancel"
          />
        </BaseButtons>
      </CardBox>
    </OverlayLayer>
  </template>
  
<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import CardBox from '@/components/CardBox.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import OverlayLayer from '@/components/OverlayLayer.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import DDLVaccine from '@/components/DDL/Vaccine.vue'

import { getCurrentUser } from '@/utils'
import { Toast } from "@/utils/alert";
import { addMonths } from 'date-fns'

import ProtectionService from '@/services/recipe'
import { type } from "@/constants/recipe";
  
  export default {
    data () {
      return {
        recipe : {
          code : '',
          name : '',
          type : 1,
          amount : '',
          farm :getCurrentUser().farm._id
        },
        recipeDetail : {},
        recipeDetails : [],
        type : type('create'),
        loading : false,
        alert : ""
      }
    },
    emits:['update:modelValue', 'cancel', 'confirm'],
    computed:{
        value:{
          get(){
              return this.modelValue
          },
          set(newValue){
              this.$emit('update:modelValue', newValue)
          }
        }
    },
    watch:{
      data(n){
        if(n && this.mode === 'edit'){
          this.recipe = n;
          this.recipe.dateCurrent = new Date(n.dateCurrent);
          this.recipe.dateNext = new Date(n.dateNext);
        }
      },
      'recipe.frequency'(n){
        if(n){
          this.recipe.dateNext = addMonths(new Date(this.recipe.dateCurrent),n);
        }
      },

    },
    methods: {
        clear(){
          this.recipe.dateCurrent = new Date()
          this.recipe.dateNext = null 
          this.recipe.vaccine = ''
          this.recipe.frequency = ''
          this.recipe.remark = ''
        },
        confirmCancel(mode){
            this.value = false
            this.$emit(mode)
        },
        confirm(){
            this.clear()
            this.confirmCancel('confirm')
        },
        cancel(){
            this.clear()
            this.confirmCancel('cancel')
        },
        async submit(){
            this.loading = true
            this.alert = ""
            try {
              if(this.mode === 'create'){
                const resp = await ProtectionService.create(this.recipe);
                if(resp){
                    this.loading = false
                    this.value = false 
                    this.confirmCancel('confirm') 
                }
              }else{
                const resp = await ProtectionService.update(this.recipe._id,this.recipe);
                if(resp){
                    this.loading = false
                    this.value = false
                    this.confirmCancel('confirm')  
                }
              }
              Toast.fire({
                icon: 'success',
                title: 'บันทึกข้อมูลสำเร็จ'
              })
            } catch (error) {
              console.error('Error : ',error)
                this.clear()
                this.loading = false  
                this.alert = await error.response.data.message
                Toast.fire({
                  icon: 'error',
                  title: 'บันทึกข้อมูลไม่สำเร็จ'
                })
            }
            
        },
    },
    components : {
    BaseButton,
    BaseButtons,
    CardBox,
    BaseDivider,
    OverlayLayer,
    FormField,
    FormControl,
    NotificationBar,
    BaseLevel,
    DDLVaccine,
    BaseIcon
},
    props : {
        modelValue: {
            type: [String, Number, Boolean],
            default: null
        },
        data : {
          type : Object,
          default : null
        },
        mode : {
          type : String,
          default : ""
        },
    }
  }
  
  </script>
  
  
  