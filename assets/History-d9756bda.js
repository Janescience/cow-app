import{c as D,_ as y,b as S}from"./BaseDivider-5d6d6cd6.js";import{_ as w}from"./LayoutAuthenticated-188296d3.js";import{_ as C}from"./SectionTitleBarSub-bf101c49.js";import{_ as M}from"./UserAvatar-8818f699.js";import{v as k,_ as x,h as R,c as T,w as c,z as l,o as B,d as s}from"./index-a11eb788.js";import{T as L}from"./Table-eb9e0d2d.js";import{C as A}from"./Criteria-6bddc43b.js";import{M as V}from"./Modal-95ffbd82.js";import{R as n}from"./reproduction-56914f55.js";import{a as u,r as d,b as q}from"./reproduct-6d4af9c3.js";import{T as m}from"./alert-eb15281a.js";import"./CardBoxModal-4190cff7.js";import"./FormControl-913bfab2.js";import"./CardBoxCollapse-432b6c08.js";import"./FormField-eae473e8.js";import"./FormCheckRadioPicker-e4bf5636.js";import"./Cow-523e81c3.js";import"./cow-1c284aa3.js";import"./Recipe-226a7e18.js";import"./Vaccine-69f9d8fc.js";import"./Corral-a31b28fc.js";import"./NotificationBar-c518edd8.js";const E={data(){return{openModal:!1,items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"สถานะ",value:"status",options:u()},{label:"ผล",value:"result",options:d()},{label:"วันที่เข้าระบบสืบพันธุ์",value:"loginDate",icon:"calendar",type:"date"},{label:"วันที่เป็นสัด",value:"estrusDate",icon:"calendar",type:"date"},{label:"วันที่ผสมพันธุ์",value:"matingDate",icon:"calendar",type:"date"},{label:"วันที่ตรวจท้อง",value:"checkDate",icon:"calendar",type:"date"}],search:{cow:null,loginDate:null,estrusDate:null,matingDate:null,checkDate:null,status:"",result:""},loading:!1,mode:"create",modalData:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"รหัสโค",value:"cow.code"},{label:"ชื่อโค",value:"cow.name"},{label:"วันที่เข้าระบบสืบพันธุ์",class:"text-center",value:"loginDate",type:"date"},{label:"ผลการเข้าระบบ",func:e=>d()[e.result].label},{label:"วันที่เป็นสัด",class:"text-center",value:"estrusDate",type:"date"},{label:"วันที่ผสมพันธุ์",class:"text-center",value:"matingDate",type:"date"},{label:"วันที่ตรวจท้อง",class:"text-center",value:"checkDate",type:"date"},{label:"รายละเอียด",value:"remark"},{label:"สถานะ",func:e=>u()[e.status].label},{label:"ประเภท",func:e=>q()[e.type]},{label:"การรักษา/สาเหตุ",value:"howTo"}],buttons:[{label:"ลบ",type:"delete",color:"danger",condition:e=>e.status!="2"&&e.status!="3"},{label:"แก้ไข",type:"edit",color:"warning",condition:e=>e.status!="2"&&e.status!="3"}]}},components:{SectionMain:D,LayoutAuthenticated:w,SectionTitleBarSub:C,Table:L,Modal:V,Criteria:A,UserAvatar:M,CardBox:y,BaseLevel:x,BaseButtons:R,BaseButton:S},computed:{getDataCopy(){return{...this.modalData}}},created(){this.search.cow=this.$route.params.cow,this.getReproductions()},methods:{async getReproductions(){this.loading=!0;const e=await n.all(this.search);this.items=[],e.data&&(this.items=e.data.reproducts),this.loading=!1},async remove(e){this.loading=!0,(await n.delete(e)).data&&(this.getReproductions(),m.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},async removeSelected(e){this.loading=!0;let a=[];for(let r of e)a.push(r._id);(await n.deletes(a)).data&&(this.getReproductions(),m.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.loginDate=null,this.search.estrusDate=null,this.search.matingDate=null,this.search.checkDate=null,this.search.status="",this.search.result="",this.getReproductions()},resetData(){this.modalData=null}}};function U(e,a,p,r,t,o){const h=l("SectionTitleBarSub"),f=l("Modal"),_=l("Criteria"),b=l("Table"),g=l("SectionMain"),v=l("LayoutAuthenticated");return B(),T(v,null,{default:c(()=>[s(g,null,{default:c(()=>[s(h,{icon:"reproduction",title:"ประวัติการผสมพันธุ์",btnText:"เพิ่มการผสมพันธุ์","has-btn-add":"",onOpenModal:a[0]||(a[0]=i=>{t.mode="create",t.openModal=!0})}),s(f,{modelValue:t.openModal,"onUpdate:modelValue":a[1]||(a[1]=i=>t.openModal=i),mode:t.mode,data:o.getDataCopy,onConfirm:o.getReproductions,onCancel:o.resetData},null,8,["modelValue","mode","data","onConfirm","onCancel"]),s(_,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:o.getReproductions,onReset:o.reset,forms:t.forms,search:t.search,btnLoading:t.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),s(b,{title:"รายการประวัติการผสมพันธุ์","has-checkbox":"","checked-data":t.checked,items:t.items,datas:t.datas,buttons:t.buttons,onEdit:o.edit,onDelete:o.remove,onDeleteSelected:o.removeSelected,loading:t.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const se=k(E,[["render",U]]);export{se as default};
