<template>
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
            v-if="itemsPaginated.length > 0"
            :title="title + ' ' + countChecked()"
            has-table
            :rounded="rounded"
            :icon="icon"
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
                  {{ (checkedData.code ? getValue(checkedRow,checkedData.code) + ' : ' : '') + getValue(checkedRow,checkedData.label) }}
              </span>
              <BaseButtons
                  type="justify-start lg:justify-end"
                  no-wrap
              >
                  <BaseButton
                    color="danger"
                    label="ลบทั้งหมด"
                    @click="confirm(
                                'ยืนยันลบรายการที่เลือกทั้งหมด ใช่หรือไม่ ?',
                                null,
                                checkedRows,
                                removeSelected
                            )"
                  />
              </BaseButtons>
            </div>
            <div class="overflow-x-auto">
              <table>
                <thead>
                    <tr >
                        <th v-if="hasCheckbox" class="text-center whitespace-nowrap">เลือก</th>
                        <th 
                            v-for="header in datas" 
                            :key="header.label" 
                            class="whitespace-nowrap" 
                            :class="[header.class]">
                            {{ header.label }}
                        </th>
                        <th v-if="buttons.length > 0"/>
                    </tr>
                </thead>
              <tbody>
                  <tr
                    v-for="obj in itemsPaginated"
                    :key="obj._id"
                    :class="obj.new ? 'text-green-300' : ''"
                  >
                  <TableCheckboxCell
                    v-if="hasCheckbox"
                    :isChecked="obj.checked"
                    class="text-center border-b-0 lg:w-6 before:hidden"
                    @checked="checked($event, obj)"
                  />
                  <td v-for="row in datas" :key="row.label" :data-label="row.label" class="whitespace-nowrap" :class="[row.class]">
                    <UserAvatar
                        v-if="row.type === 'image'"
                        :avatar="getValue(obj,row)"
                        username="profile"
                        :class="'mx-auto h-'+row.size+' w-'+row.size"
                    />
                    <BaseIcon
                        v-else-if="row.type === 'icon'"
                        :path="getValue(obj,row)"
                        size="22"
                    />
                    <span v-else >{{ getValue(obj,row) }}</span>
                  </td>
                  <td v-if="buttons.length > 0" class="lg:w-6 whitespace-nowrap" >
                      <BaseButtons
                        type="justify-end lg:justify-start"
                        no-wrap
                      >
                        <BaseButton
                            v-for="btn in buttons"
                            small
                            :key="btn.label"
                            :color="btn.color"
                            :label="btn.label"
                            v-show="btn.condition ? btn.condition(obj) : true"
                            @click="btn.type === 'oth' ? btn.func(obj) : btnClick(btn.type,{data:obj,id:obj._id,path:btn.path})"
                        />
                      </BaseButtons>
                  </td>
                  </tr>
              </tbody>
              </table>
            </div>           
            <div
              class="p-2  static border-t border-gray-100 dark:border-gray-800"
              v-if="!noPaging"
            >
              <BaseLevel >
                  <BaseButtons>
                    <BaseButton
                        v-for="page in pagesList"
                        :key="page"
                        :active="page === currentPage"
                        :label="page + 1"
                        small
                        class="p-0 text-xs"
                        @click="currentPage = page"
                    />
                  </BaseButtons>
                  <small>หน้า {{ currentPageHuman }} จาก {{ numPages }}</small>
              </BaseLevel>
            </div>
        </CardBox>
        <CardBox 
            :title="title + ' ' + countChecked()"
            header-icon=""
            class="shadow-lg mb-5"
            v-else-if="loading" loading/>
        <CardBox 
            :title="title + ' ' + countChecked()"
            header-icon=""
            class="shadow-lg mb-5"
            v-else empty/>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseLevel from "@/components/BaseLevel.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import CardBox from "@/components/CardBox.vue";
import CardBoxModal from "@/components/CardBoxModal.vue";
import UserAvatar from "@/components/UserAvatar.vue";
import TableCheckboxCell from "@/components/TableCheckboxCell.vue";
import moment from "moment";
import numeral from "numeral";

export default {
    data (){
        return {
            textConfirm : "",
            modalConfirm : false,
            funcConfirm : Function,
            idConfirm : null,
            dataSelectedConfirm : [],
            // perPage :10,
            currentPage : 0,
            checkedRows : [],
        }
    },
    props : {
        title : {
            type : String,
            default : ""
        },
        items : {
            type : Array,
            default : []
        },
        datas : {
            type : Array,
            default : []
        },
        buttons : {
            type : Array,
            default : []
        },
        hasCheckbox : Boolean,
        checkedData : {
            type : Object,
            default : null
        },
        perPage : {
            type : Number,
            default : 10
        },
        icon : {
            type : String ,
            default : ""
        },
        noPaging : {
            type : Boolean,
            default : false,
        },
        loading : Boolean,
        rounded: {
            type: String,
            default: 'md:rounded-2xl'
        },
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
        BaseButton,
        BaseButtons,
        CardBox,
        CardBoxModal,
        TableCheckboxCell,
        UserAvatar,
        BaseLevel,
        BaseIcon,
    },
    methods : {
        getValue(obj,row){
            const value =  this.getPropByString(obj,row.value);

            if(!row.type){
                if(row.func){
                    return row.func(obj);
                }else{
                    return value;
                }
            }

            switch (row.type) {
                case 'number':
                    return this.formatNumber(value)
                case 'currency':
                    return this.formatCurrency(value)
                case 'date':
                    return this.formatDate(value)
                case 'image':
                    return value
                case 'icon':
                    return value
            }
        },
        getPropByString(obj, propString) {
            if (!propString)
                return obj;

            let prop
            let props = propString.split('.');

            for (var i = 0, iLen = props.length -1; i < iLen; i++) {
                prop = props[i];
                var candidate = obj[prop];
                if (candidate !== undefined) {
                    obj = candidate;
                } else {
                    break;
                }
            }
            return obj[props[i]];
        },
        btnClick(type,data){
            switch (type) {
                case 'edit':
                    this.edit(data.data);
                    break;
                case 'delete':
                    this.confirm('ยืนยันลบรายการนี้ ใช่หรือไม่ ?',data.id,null,this.removeData(data.data))
                    break;
                case 'detail':
                    this.detail(data.path + '/' + data.id);
                    break;
            }
        },
        removeData(data){
            this.$emit('delete',this.idConfirm ? this.idConfirm : data);
        },
        removeSelected(){
            this.$emit('deleteSelected',this.dataSelectedConfirm);
            this.checkedRows = []
        },
        edit(value){
            this.$emit('edit',value)
        },
        detail(path){
            this.$router.push(path);
        },
        confirm(text,id,datas,func){
            this.textConfirm = text
            this.funcConfirm = func
            this.idConfirm = id
            this.dataSelectedConfirm = datas
            this.modalConfirm = true
        },
        checked(isChecked, obj){
            if (isChecked) {
                obj.checked = true
                this.checkedRows.push(obj)
            } else {
                obj.checked = false
                this.checkedRows = this.removeArr(this.checkedRows, row => row._id === obj._id)
            }
        },
        countChecked(){
            return (this.checkedRows.length > 0 ? '(เลือก ' + this.checkedRows.length + ' รายการ)':'')
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
        formatDate(date){
            if(!date){
                return null
            }
            return moment(date).format('DD/MM/YYYY');
        },
        formatNumber(amt){
            return this.$filters.number(amt)
        },
        formatCurrency(amt){
            return this.$filters.currency(amt);
        }
    }
}
</script>
