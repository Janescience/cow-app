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
      
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-5">
          <FormField label="ชื่อสูตรอาหาร" help="* ห้ามว่าง" >
            <FormControl
              v-model="recipe.name"
              icon="potMixOutline"
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
          <FormField label="จำนวนเงินรวม"  >
            <FormControl
              v-model="recipe.amount"
              icon="cashMultiple"
              type="number"
              required
            />
          </FormField>
        </div>

        <CardBox
            title="รายละเอียดสูตรอาหาร"
            class="shadow-lg dark:bg-slate-700"
            header-icon=""
        >
          <div class="grid grid-cols-2 lg:grid-cols-6 gap-5">
            <FormField label="อาหาร/วัตถุดิบ" help="* ห้ามว่าง" >
              <FormControl
                v-model="recipeDetail.food"
                icon="foodVariant"
              />
            </FormField>
            <FormField label="ราคา/กก." help="* ห้ามว่าง" >
              <FormControl
                v-model="recipeDetail.cost"
                icon="cash"
                type="number"
              />
            </FormField>
            <FormField label="จำนวนที่ใช้ (กก.)" help="* ห้ามว่าง (ห้ามเกิน 1 กก.)" >
              <FormControl
                icon="scale"
                type="number"
                v-model="recipeDetail.qty"
              />
            </FormField>
            <FormField label="จำนวนเงิน"  >
              <FormControl
                v-model="recipeDetail.amount"
                icon="cashMultiple"
                type="number"
              />
            </FormField>
            
            <BaseButtons
              class="col-span-2"
              type="justify-center"
            >
              <BaseButton
                label="เพิ่ม"
                color="success"
                @click="addDetail"
              />
              <BaseButton
                label="ล้าง"
                color="danger"
                @click="resetDetail()"
              />
            </BaseButtons>
          </div>
          <NotificationBar 
            v-if="alertDetail" 
            color="warning" 
            outline
            icon="alertCircleOutline">
              {{ alertDetail }}
          </NotificationBar>
          <header
            class="flex items-stretch border-b border-gray-100 dark:border-gray-800"
          >
            <p
              class="flex items-center py-3 grow font-bold"
            >
              รายการอาหาร/วัตถุดิบ
            </p>
          </header>
            <div class="overflow-x-auto" v-if="recipeDetails.length > 0">
              <table>
                <thead>
                    <tr >
                        <th class="whitespace-nowrap text-center">
                          อาหาร/วัตถุดิบ
                        </th>
                        <th class="whitespace-nowrap text-center">
                          ราคา/กก.
                        </th>
                        <th class="whitespace-nowrap text-center">
                          จำนวนที่ใช้ (กก.)
                        </th>
                        <th class="whitespace-nowrap text-center">
                          จำนวนเงิน
                        </th>
                        <th />
                    </tr>
                </thead>
              <tbody >
                  <tr
                    v-for="obj in recipeDetails"
                    :key="obj.food"
                  >
                    <td data-label="อาหาร/วัตถุดิบ" >
                      {{ obj.food }}
                    </td>
                    <td data-label="ราคา/กก." class="text-center">
                      {{ obj.cost }}
                    </td>
                    <td data-label="จำนวนที่ใช้ (กก.)" class="text-center">
                      {{ obj.qty }}
                    </td>
                    <td data-label="จำนวนเงิน" class="text-right">
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
                              @click="removeDetail(obj)"
                          />
                        </BaseButtons>
                    </td>
                  </tr>
              </tbody>
              
              </table>
            </div>
            <div v-else
                  class="text-center py-10 text-gray-500 dark:text-gray-400 "
                >
                  <p>ไม่มีรายการ...</p>
              </div>
        </CardBox>

        <NotificationBar 
          v-if="alertError" 
          color="danger" 
          outline
          icon="alertCircleOutline">
            {{ alertError }}
        </NotificationBar>

        <NotificationBar 
          v-if="alertWarning" 
          color="warning" 
          outline
          icon="alertCircleOutline">
            {{ alertWarning }}
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

import RecipeService from '@/services/recipe'
import { type } from "@/constants/recipe";
  
  export default {
    data () {
      return {
        recipe : {
          code : '',
          name : '',
          type : 1,
          amount : 0,
          farm :getCurrentUser().farm._id
        },
        recipeDetail : {},
        recipeDetails : [],
        type : type('create'),
        loading : false,
        alertError : "",
        alertWarning : "",
        alertDetail : ""
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
        if(n){
          if(this.mode === 'edit'){
            this.recipe = n;
            this.recipeDetails = n.recipeDetails;
          }else{
            this.recipe.name = ''
            this.recipe.amount = 0
            this.recipe.type = 1
            this.recipeDetails = []
          }
          
        }
      },
      'recipe.frequency'(n){
        if(n){
          this.recipe.dateNext = addMonths(new Date(this.recipe.dateCurrent),n);
        }
      },
      'recipeDetail.cost'(n){
        if(n && this.recipeDetail?.qty){
          this.recipeDetail.amount = n * this.recipeDetail?.qty
        }else{
          this.recipeDetail.amount = null
        }
      },
      'recipeDetail.qty'(n){
        if(n && this.recipeDetail?.cost){
          this.recipeDetail.amount = n * this.recipeDetail?.cost
        }else{
          this.recipeDetail.amount = null
        }
      }
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
        addDetail(){
          this.alertDetail = ""
          if(this.recipeDetail?.food && this.recipeDetail?.qty && this.recipeDetail?.cost){
            let dup = this.recipeDetails.filter(x => x.food === this.recipeDetail?.food).length
            if(dup <= 0){
              if(this.recipeDetail?.qty <= 1){
                let sumQty = 0;
                this.recipeDetails.forEach((rd) => {
                  sumQty += rd.qty;
                })
                if(sumQty <= 1){
                  this.recipeDetails.push(this.recipeDetail)
                  this.recipe.amount = 0;
                  this.recipeDetails.forEach((rd) => {
                    this.recipe.amount += rd.amount
                  })
                  this.recipeDetail = {}
                }else{
                  this.alertDetail = 'จำนวนที่ใช้รวมห้ามเกิน 1 กก.'
                }
              }else{
                this.alertDetail = 'จำนวนที่ใช้ห้ามเกิน 1 กก.'
              } 
            }else{
              this.alertDetail = 'อาหาร/วัตถุดิบ ซ้ำ'
            }
          }else{
            this.alertDetail = 'กรุณากรอกข้อมูลให้ครบ'
          }
          
        },
        removeDetail(recipe){
          let index = this.recipeDetails.indexOf(recipe);
          if (index !== -1) {
            this.recipe.amount -= this.recipeDetails[index]?.amount
            this.recipeDetails.splice(index, 1);
          }
        },
        async submit(){
            this.loading = true
            this.alert = ""
            this.alertWarning = ""
            try {
              if(this.mode === 'create'){
                let sumQty = 0;
                this.recipeDetails.forEach((rd) => {
                  sumQty += rd.qty;
                })
                if(sumQty === 1){
                  const resp = await RecipeService.create({recipe : this.recipe, recipeDetail : this.recipeDetails});
                  if(resp){
                      this.loading = false
                      this.value = false 
                      this.confirmCancel('confirm')
                      Toast.fire({
                        icon: 'success',
                        title: 'บันทึกข้อมูลสำเร็จ'
                      }) 
                  }
                }else{
                  this.alertWarning = 'กรุณาเพิ่ม รายการอาหาร/วัตถุดิบ ให้ครบ 1 กก.'
                }
              }else{
                const resp = await RecipeService.update(this.recipe._id,{recipe:this.recipe, recipeDetail : this.recipeDetails});
                if(resp){
                    this.loading = false
                      this.value = false 
                      this.confirmCancel('confirm')
                      Toast.fire({
                        icon: 'success',
                        title: 'บันทึกข้อมูลสำเร็จ'
                      }) 
                }
              }
              
            } catch (error) {
              console.error('Error : ',error)
                this.clear()
                this.loading = false  
                this.alertError = await error.response.data.message
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
  
  
  