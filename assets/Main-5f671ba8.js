import{z as C,p as S,m as k,_ as w,l as x,G as M,i as F,j as T,f as E,O as L,F as n,H as y,I as V,o as D,c as q,w as i,d as l,s as N,h as U,t as A,k as O,e as I,C as j,D as H,E as R,T as z}from"./index-51c79a7a.js";import{C as G}from"./Criteria-d1f1bf17.js";import{_ as P}from"./FormField-b03484b6.js";import{T as f}from"./alert-d1bf8791.js";import{E as u}from"./equipment-160c9055.js";import{_ as J}from"./FormCheckRadioPicker-135142c6.js";import"./CardBoxCollapse-ccd7bb6f.js";import"./Cow-9f119f1e.js";import"./cow-925303fc.js";import"./Vaccine-b5b0ea40.js";const v=t=>t==="ddl"?[{id:"",label:"ทั้งหมด"},{id:"A",label:"ใช้งาน"},{id:"I",label:"ไม่ใช้งาน"}]:{A:"ใช้งาน",I:"ไม่ใช้งาน"},K={data(){return{equipment:{name:"",code:"",startDate:new Date,endDate:null,status:"A",amount:"",remark:""},status:v("ddl"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},watch:{data(t){t&&this.mode==="edit"&&(this.equipment=t,this.equipment.startDate=new Date(t.startDate),this.equipment.endDate=t.endDate?new Date(t.endDate):null)}},methods:{clear(){this.equipment.name="",this.equipment.code="",this.equipment.startDate=new Date,this.equipment.endDate=null,this.equipment.remark="",this.equipment.amount="",this.equipment.status="A"},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await u.create(this.equipment)&&(this.loading=!1,this.confirmCancel("confirm")):await u.update(this.equipment._id,this.equipment)&&(this.loading=!1,this.confirmCancel("confirm")),f.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,f.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:S,BaseButtons:k,CardBox:w,BaseDivider:x,OverlayLayer:M,FormField:P,FormControl:F,NotificationBar:T,BaseLevel:E,FormCheckRadioPicker:J,BaseIcon:L},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},Q={class:"grid grid-cols-2 lg:grid-cols-3 gap-5"};function W(t,a,m,h,e,o){const r=n("FormControl"),d=n("FormField"),_=n("NotificationBar"),g=n("BaseDivider"),c=n("BaseButton"),b=n("BaseButtons"),p=n("CardBox"),B=n("OverlayLayer");return y((D(),q(B,null,{default:i(()=>[y(l(p,{title:"อุปกรณ์ "+(this.mode==="create"?"":"(แก้ไข)"),class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:I(o.submit,["prevent"]),onHeaderIconClick:o.cancel},{default:i(()=>[N("div",Q,[l(d,{label:"รหัส",help:m.mode==="create"?"* ห้ามว่าง (บันทึกแล้วแก้ไขไม่ได้)":"* แก้ไขไม่ได้"},{default:i(()=>[l(r,{modelValue:e.equipment.code,"onUpdate:modelValue":a[0]||(a[0]=s=>e.equipment.code=s),icon:"accountEdit",disabled:m.mode==="edit",required:""},null,8,["modelValue","disabled"])]),_:1},8,["help"]),l(d,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:i(()=>[l(r,{modelValue:e.equipment.name,"onUpdate:modelValue":a[1]||(a[1]=s=>e.equipment.name=s),icon:"accountEdit",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"วันที่เริ่มใช้งาน",help:"* ห้ามว่าง"},{default:i(()=>[l(r,{modelValue:e.equipment.startDate,"onUpdate:modelValue":a[2]||(a[2]=s=>e.equipment.startDate=s),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"วันที่สิ้นสุดใช้งาน"},{default:i(()=>[l(r,{modelValue:e.equipment.endDate,"onUpdate:modelValue":a[3]||(a[3]=s=>e.equipment.endDate=s),icon:"calendar",type:"date"},null,8,["modelValue"])]),_:1}),l(d,{label:"ราคา",help:"* ห้ามว่าง"},{default:i(()=>[l(r,{modelValue:e.equipment.amount,"onUpdate:modelValue":a[4]||(a[4]=s=>e.equipment.amount=s),type:"number",icon:"cashMultiple",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"สถานะ"},{default:i(()=>[l(r,{modelValue:e.equipment.status,"onUpdate:modelValue":a[5]||(a[5]=s=>e.equipment.status=s),options:e.status},null,8,["modelValue","options"])]),_:1}),l(d,{label:"หมายเหตุ"},{default:i(()=>[l(r,{modelValue:e.equipment.remark,"onUpdate:modelValue":a[6]||(a[6]=s=>e.equipment.remark=s),type:"textarea"},null,8,["modelValue"])]),_:1})]),e.alert?(D(),q(_,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[U(A(e.alert),1)]),_:1})):O("",!0),l(g),l(b,{type:"justify-center"},{default:i(()=>[l(c,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),l(c,{label:"ยกเลิก",color:"danger",onClick:o.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[V,o.value]])]),_:1},512)),[[V,o.value]])}const X=C(K,[["render",W]]),Y={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"สถานะ",value:"status",options:v("ddl")}],search:{status:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"วันที่เริ่มใช้งาน",class:"text-center",value:"startDate",type:"date"},{label:"วันที่สิ้นสุดใช้งาน",class:"text-center",value:"endDate",type:"date"},{label:"ราคา",value:"amount",class:"text-right"},{label:"สถานะ",class:"text-center",func:t=>v()[t.status]},{label:"หมายเหตุ",value:"remark"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:j,LayoutAuthenticated:H,SectionTitleBarSub:R,Table:z,Modal:X,Criteria:G},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const a=await u.all(t);this.items=[],a.data&&(this.items=a.data.equipments),this.loading=!1},async remove(t){this.loading=!0,(await u.delete(t)).data&&this.getDatas(),this.loading=!1,f.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(t){this.loading=!0;let a=[];for(let h of t)a.push(h._id);(await u.deletes(a)).data&&(this.getDatas(),f.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(t){this.modalData=t,this.mode="edit",this.openModal=!0},reset(){this.search.status="",this.getDatas()},resetData(){this.modalData=null}}};function Z(t,a,m,h,e,o){const r=n("SectionTitleBarSub"),d=n("Modal"),_=n("Criteria"),g=n("Table"),c=n("SectionMain"),b=n("LayoutAuthenticated");return D(),q(b,null,{default:i(()=>[l(c,null,{default:i(()=>[l(r,{icon:"shovel",title:"อุปกรณ์","has-btn-add":"",onOpenModal:a[0]||(a[0]=p=>{e.mode="create",e.openModal=!0}),btnText:"เพิ่มอุปกรณ์"}),l(d,{modelValue:e.openModal,"onUpdate:modelValue":a[1]||(a[1]=p=>e.openModal=p),data:o.getDataCopy,mode:e.mode,onConfirm:o.getDatas,onCancel:o.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),l(_,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:o.getDatas,onReset:o.reset,forms:e.forms,search:e.search,btnLoading:e.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),l(g,{title:"รายการอุปกรณ์","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:o.edit,onDelete:o.remove,onDeleteSelected:o.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const de=C(Y,[["render",Z]]);export{de as default};
