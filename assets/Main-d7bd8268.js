import{b as k,_ as w,a as x,d as M,c as T}from"./BaseDivider-61ee89c2.js";import{_ as F}from"./LayoutAuthenticated-1901d823.js";import{_ as L}from"./SectionTitleBarSub-8c22e3c4.js";import{T as N}from"./Table-9dcddb90.js";import{C as U}from"./Criteria-35c42e3f.js";import{v as D,h as A,_ as E,z as i,G as y,H as C,o as v,c as B,w as s,d as l,j as O,f as H,t as I,g as q,e as j}from"./index-d112b817.js";import{a as R}from"./CardBoxModal-037276b0.js";import{_ as z}from"./FormField-1c9cc7b4.js";import{_ as G}from"./FormControl-ea42ddb9.js";import{_ as P}from"./NotificationBar-028f985c.js";import{T as p}from"./alert-32d4a5a7.js";import{B as u}from"./building-a6aab73a.js";import{_ as J}from"./FormCheckRadioPicker-49cc75de.js";import"./UserAvatar-3f93aca2.js";import"./CardBoxCollapse-451f0abb.js";import"./Cow-ed7bc072.js";import"./cow-9a42aa2f.js";import"./Recipe-d0be585f.js";import"./Vaccine-e5427c6f.js";import"./Corral-3dbf33df.js";const V=t=>t==="ddl"?[{id:"",label:"ทั้งหมด"},{id:"A",label:"ใช้งาน"},{id:"I",label:"ไม่ใช้งาน"}]:{A:"ใช้งาน",I:"ไม่ใช้งาน"},K={data(){return{building:{name:"",code:"",date:new Date,status:"A",amount:null,builder:"",remark:""},status:V("ddl"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},watch:{data(t){t&&this.mode==="edit"&&(this.building=t,this.building.date=new Date(t.date))}},methods:{clear(){this.building={},this.building.date=new Date,this.building.status="A"},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await u.create(this.building)&&(this.loading=!1,this.confirm()):await u.update(this.building._id,this.building)&&(this.loading=!1,this.confirm()),p.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,p.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:k,BaseButtons:A,CardBox:w,BaseDivider:x,OverlayLayer:R,FormField:z,FormControl:G,NotificationBar:P,BaseLevel:E,FormCheckRadioPicker:J,BaseIcon:M},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},Q={class:"grid grid-cols-2 lg:grid-cols-3 gap-5"};function W(t,a,c,b,e,o){const r=i("FormControl"),d=i("FormField"),_=i("NotificationBar"),g=i("BaseDivider"),m=i("BaseButton"),h=i("BaseButtons"),f=i("CardBox"),S=i("OverlayLayer");return y((v(),B(S,null,{default:s(()=>[y(l(f,{title:"สิ่งปลูกสร้าง "+(this.mode==="create"?"":"(แก้ไข)"),class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:j(o.submit,["prevent"]),onHeaderIconClick:o.cancel},{default:s(()=>[O("div",Q,[l(d,{label:"รหัส",help:c.mode==="create"?"* ห้ามว่าง (บันทึกแล้วแก้ไขไม่ได้)":"* แก้ไขไม่ได้"},{default:s(()=>[l(r,{modelValue:e.building.code,"onUpdate:modelValue":a[0]||(a[0]=n=>e.building.code=n),icon:"accountEdit",disabled:c.mode==="edit",required:""},null,8,["modelValue","disabled"])]),_:1},8,["help"]),l(d,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:s(()=>[l(r,{modelValue:e.building.name,"onUpdate:modelValue":a[1]||(a[1]=n=>e.building.name=n),icon:"accountEdit",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"วันที่สร้าง",help:"* ห้ามว่าง"},{default:s(()=>[l(r,{modelValue:e.building.date,"onUpdate:modelValue":a[2]||(a[2]=n=>e.building.date=n),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"ราคา",help:"* ห้ามว่าง"},{default:s(()=>[l(r,{modelValue:e.building.amount,"onUpdate:modelValue":a[3]||(a[3]=n=>e.building.amount=n),type:"number",icon:"cashMultiple",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"สถานะ"},{default:s(()=>[l(r,{modelValue:e.building.status,"onUpdate:modelValue":a[4]||(a[4]=n=>e.building.status=n),options:e.status},null,8,["modelValue","options"])]),_:1}),l(d,{label:"ผู้ก่อสร้าง"},{default:s(()=>[l(r,{modelValue:e.building.builder,"onUpdate:modelValue":a[5]||(a[5]=n=>e.building.builder=n),icon:"accountHardHat"},null,8,["modelValue"])]),_:1}),l(d,{label:"หมายเหตุ"},{default:s(()=>[l(r,{modelValue:e.building.remark,"onUpdate:modelValue":a[6]||(a[6]=n=>e.building.remark=n),type:"textarea"},null,8,["modelValue"])]),_:1})]),e.alert?(v(),B(_,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:s(()=>[H(I(e.alert),1)]),_:1})):q("",!0),l(g),l(h,{type:"justify-center"},{default:s(()=>[l(m,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),l(m,{label:"ยกเลิก",color:"danger",onClick:o.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[C,o.value]])]),_:1},512)),[[C,o.value]])}const X=D(K,[["render",W]]),Y={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"สถานะ",value:"status",options:V("ddl")}],search:{status:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"วันที่สร้าง",class:"text-center",value:"date",type:"date"},{label:"ราคา",value:"amount",class:"text-right"},{label:"สถานะ",class:"text-center",func:t=>V()[t.status]},{label:"ผู้ก่อสร้าง",value:"builder"},{label:"หมายเหตุ",value:"remark"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:T,LayoutAuthenticated:F,SectionTitleBarSub:L,Table:N,Modal:X,Criteria:U},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const a=await u.all(t);this.items=[],a.data&&(this.items=a.data.buildings),this.loading=!1},async remove(t){this.loading=!0,(await u.delete(t)).data&&this.getDatas(),this.loading=!1,p.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(t){this.loading=!0;let a=[];for(let b of t)a.push(b._id);(await u.deletes(a)).data&&(this.getDatas(),p.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(t){this.modalData=t,this.mode="edit",this.openModal=!0},reset(){this.search.status="",this.getDatas()},resetData(){this.modalData=null}}};function Z(t,a,c,b,e,o){const r=i("SectionTitleBarSub"),d=i("Modal"),_=i("Criteria"),g=i("Table"),m=i("SectionMain"),h=i("LayoutAuthenticated");return v(),B(h,null,{default:s(()=>[l(m,null,{default:s(()=>[l(r,{icon:"barn",title:"สิ่งปลูกสร้าง","has-btn-add":"",onOpenModal:a[0]||(a[0]=f=>{e.mode="create",e.openModal=!0}),btnText:"เพิ่มสิ่งปลูกสร้าง"}),l(d,{modelValue:e.openModal,"onUpdate:modelValue":a[1]||(a[1]=f=>e.openModal=f),data:o.getDataCopy,mode:e.mode,onConfirm:o.getDatas,onCancel:o.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),l(_,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:o.getDatas,onReset:o.reset,forms:e.forms,search:e.search,btnLoading:e.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),l(g,{title:"รายการสิ่งปลูกสร้าง","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:o.edit,onDelete:o.remove,onDeleteSelected:o.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const ve=D(Y,[["render",Z]]);export{ve as default};