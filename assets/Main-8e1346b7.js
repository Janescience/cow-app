import{b as V,_ as S,a as x,d as D,c as w}from"./BaseDivider-61ee89c2.js";import{_ as M}from"./LayoutAuthenticated-1901d823.js";import{_ as T}from"./SectionTitleBarSub-8c22e3c4.js";import{T as N}from"./Table-9dcddb90.js";import{C as F}from"./Criteria-35c42e3f.js";import{v as b,h as k,_ as L,z as n,G as h,H as g,o as v,c as y,w as s,d as o,j as U,e as O}from"./index-d112b817.js";import{a as E}from"./CardBoxModal-037276b0.js";import{_ as j}from"./FormField-1c9cc7b4.js";import{_ as q}from"./FormControl-ea42ddb9.js";import{_ as A}from"./FormCheckRadioPicker-49cc75de.js";import{_ as H}from"./NotificationBar-028f985c.js";import{P as d}from"./param-1432d93b.js";import{T as _}from"./alert-32d4a5a7.js";import"./UserAvatar-3f93aca2.js";import"./CardBoxCollapse-451f0abb.js";import"./Cow-ed7bc072.js";import"./cow-9a42aa2f.js";import"./Recipe-d0be585f.js";import"./Vaccine-e5427c6f.js";import"./Corral-3dbf33df.js";const I={data(){return{param:{group:"",code:"",name:"",valueNumber:null,valueString:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(a){this.$emit("update:modelValue",a)}}},watch:{data:{handler(a,t){this.clear(),a!=null&&this.mode=="edit"&&(this.param=a)},deep:!0}},methods:{clear(){var a;this.mode==="edit"&&this.$emit("update:data",null),this.param.code="",this.param.name="",this.param.group="",this.param.valueString="",this.param.valueNumber=null,this.$emit("update:mode",""),(a=this.param)==null||delete a._id},confirmCancel(a){this.value=!1,this.$emit(a)},confirm(){this.confirmCancel("confirm")},cancel(){this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await d.create(this.param)&&(this.loading=!1,this.value=!1,this.confirm(),_.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):await d.update(this.param._id,this.param)&&(this.loading=!1,this.value=!1,this.confirm(),_.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(a){console.error("Error : ",a),this.loading=!1,this.alert=a.response.data.message}}},components:{BaseButton:V,BaseButtons:k,CardBox:S,BaseDivider:x,OverlayLayer:E,FormField:j,FormControl:q,NotificationBar:H,BaseLevel:L,FormCheckRadioPicker:A,BaseIcon:D},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},data:{type:Object,default:null}}},P={class:"grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1"};function R(a,t,B,C,e,l){const i=n("FormControl"),m=n("FormField"),u=n("BaseButton"),c=n("BaseButtons"),p=n("CardBox"),f=n("OverlayLayer");return h((v(),y(f,null,{default:s(()=>[h(o(p,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"พารามิเตอร์",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"","has-scroll":"",onSubmit:O(l.submit,["prevent"]),onHeaderIconClick:l.cancel},{default:s(()=>[U("div",P,[o(m,{label:"กลุ่ม",help:"* ห้ามว่าง"},{default:s(()=>[o(i,{modelValue:e.param.group,"onUpdate:modelValue":t[0]||(t[0]=r=>e.param.group=r),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),o(m,{label:"รหัส",help:"* ห้ามว่าง"},{default:s(()=>[o(i,{modelValue:e.param.code,"onUpdate:modelValue":t[1]||(t[1]=r=>e.param.code=r),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),o(m,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:s(()=>[o(i,{modelValue:e.param.name,"onUpdate:modelValue":t[2]||(t[2]=r=>e.param.name=r),icon:"formTextbox",required:""},null,8,["modelValue"])]),_:1}),o(m,{label:"ข้อมูล(ตัวเลข)"},{default:s(()=>[o(i,{modelValue:e.param.valueNumber,"onUpdate:modelValue":t[3]||(t[3]=r=>e.param.valueNumber=r),icon:"formTextbox",type:"number"},null,8,["modelValue"])]),_:1}),o(m,{label:"ข้อมูล(ตัวหนังสือ)"},{default:s(()=>[o(i,{modelValue:e.param.valueString,"onUpdate:modelValue":t[4]||(t[4]=r=>e.param.valueString=r),icon:"formTextbox"},null,8,["modelValue"])]),_:1})]),o(c,{type:"justify-center mt-3"},{default:s(()=>[o(u,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),o(u,{label:"ยกเลิก",color:"danger",onClick:l.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[g,l.value]])]),_:1},512)),[[g,l.value]])}const z=b(I,[["render",R]]),G={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"ชื่อรายการ",value:"name"},{label:"ราคา/กก. (บาท)",value:"valueNumber",type:"number"}],search:{name:"",code:"",group:"",valueNumber:null,valueString:""},loading:!1,mode:"create",dataEdit:null,datas:[{label:"ชื่อรายการ",value:"name"},{label:"ราคา/กก. (บาท)",value:"valueNumber",type:"currency",class:"text-right"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:w,LayoutAuthenticated:M,SectionTitleBarSub:T,Table:N,Modal:z,Criteria:F},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(a){this.loading=!0;const t=await d.all(a);this.items=[],t.data&&(this.items=t.data.params),this.loading=!1},async remove(a){this.loading=!0,(await d.delete(a)).data&&this.getDatas(),this.loading=!1,_.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},edit(a){this.modalData=a,this.mode="edit",this.openModal=!0},reset(){this.search.name=""}}};function J(a,t,B,C,e,l){const i=n("SectionTitleBarSub"),m=n("Modal"),u=n("Criteria"),c=n("Table"),p=n("SectionMain"),f=n("LayoutAuthenticated");return v(),y(f,null,{default:s(()=>[o(p,null,{default:s(()=>[o(i,{icon:"cash",title:"ราคาน้ำนมดิบ","has-btn-add":"",onOpenModal:t[0]||(t[0]=r=>{e.mode="create",e.openModal=!0,e.modalData=null}),btnText:"เพิ่มราคาน้ำนมดิบ"}),o(m,{modelValue:e.openModal,"onUpdate:modelValue":t[1]||(t[1]=r=>e.openModal=r),data:l.getDataCopy,mode:e.mode,onConfirm:l.getDatas},null,8,["modelValue","data","mode","onConfirm"]),o(u,{grid:"grid-cols-2 lg:grid-cols-5",onSearch:l.getDatas,onReset:l.reset,forms:e.forms,search:e.search},null,8,["onSearch","onReset","forms","search"]),o(c,{title:"รายการราคาน้ำนมดิบ",items:e.items,datas:e.datas,buttons:e.buttons,onEdit:l.edit,onDelete:l.remove,loading:e.loading},null,8,["items","datas","buttons","onEdit","onDelete","loading"])]),_:1})]),_:1})}const pe=b(G,[["render",J]]);export{pe as default};