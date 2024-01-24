import{z as D,p as k,m as w,_ as x,l as M,G as F,i as T,j as L,f as N,R as U,O as A,F as i,H as y,I as C,o as B,c as V,w as s,d as a,s as E,h as O,t as I,k as H,e as q,C as R,D as j,E as z,T as G}from"./index-777e8ff9.js";import{C as P}from"./Criteria-d13453aa.js";import{_ as J}from"./FormField-d7787d4c.js";import{T as p}from"./alert-4a581496.js";import{B as u}from"./building-5f859c0b.js";import"./CardBoxCollapse-ba1bc645.js";import"./Cow-c49f70ee.js";import"./cow-39f38489.js";import"./Recipe-d86b3496.js";import"./Vaccine-13969f55.js";const v=t=>t==="ddl"?[{id:"",label:"ทั้งหมด"},{id:"A",label:"ใช้งาน"},{id:"I",label:"ไม่ใช้งาน"}]:{A:"ใช้งาน",I:"ไม่ใช้งาน"},K={data(){return{building:{name:"",code:"",date:new Date,status:"A",amount:null,builder:"",remark:""},status:v("ddl"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},watch:{data(t){t&&this.mode==="edit"&&(this.building=t,this.building.date=new Date(t.date))}},methods:{clear(){this.building={},this.building.date=new Date,this.building.status="A"},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await u.create(this.building)&&(this.loading=!1,this.confirm()):await u.update(this.building._id,this.building)&&(this.loading=!1,this.confirm()),p.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,p.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:k,BaseButtons:w,CardBox:x,BaseDivider:M,OverlayLayer:F,FormField:J,FormControl:T,NotificationBar:L,BaseLevel:N,FormCheckRadioPicker:U,BaseIcon:A},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},Q={class:"grid grid-cols-2 lg:grid-cols-3 gap-5"};function W(t,l,c,b,e,o){const d=i("FormControl"),r=i("FormField"),g=i("NotificationBar"),_=i("BaseDivider"),m=i("BaseButton"),h=i("BaseButtons"),f=i("CardBox"),S=i("OverlayLayer");return y((B(),V(S,null,{default:s(()=>[y(a(f,{title:"สิ่งปลูกสร้าง "+(this.mode==="create"?"":"(แก้ไข)"),class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:q(o.submit,["prevent"]),onHeaderIconClick:o.cancel},{default:s(()=>[E("div",Q,[a(r,{label:"รหัส",help:c.mode==="create"?"* ห้ามว่าง (บันทึกแล้วแก้ไขไม่ได้)":"* แก้ไขไม่ได้"},{default:s(()=>[a(d,{modelValue:e.building.code,"onUpdate:modelValue":l[0]||(l[0]=n=>e.building.code=n),icon:"accountEdit",disabled:c.mode==="edit",required:""},null,8,["modelValue","disabled"])]),_:1},8,["help"]),a(r,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:s(()=>[a(d,{modelValue:e.building.name,"onUpdate:modelValue":l[1]||(l[1]=n=>e.building.name=n),icon:"accountEdit",required:""},null,8,["modelValue"])]),_:1}),a(r,{label:"วันที่สร้าง",help:"* ห้ามว่าง"},{default:s(()=>[a(d,{modelValue:e.building.date,"onUpdate:modelValue":l[2]||(l[2]=n=>e.building.date=n),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),a(r,{label:"ราคา",help:"* ห้ามว่าง"},{default:s(()=>[a(d,{modelValue:e.building.amount,"onUpdate:modelValue":l[3]||(l[3]=n=>e.building.amount=n),type:"number",icon:"cashMultiple",required:""},null,8,["modelValue"])]),_:1}),a(r,{label:"สถานะ"},{default:s(()=>[a(d,{modelValue:e.building.status,"onUpdate:modelValue":l[4]||(l[4]=n=>e.building.status=n),options:e.status},null,8,["modelValue","options"])]),_:1}),a(r,{label:"ผู้ก่อสร้าง"},{default:s(()=>[a(d,{modelValue:e.building.builder,"onUpdate:modelValue":l[5]||(l[5]=n=>e.building.builder=n),icon:"accountHardHat"},null,8,["modelValue"])]),_:1}),a(r,{label:"หมายเหตุ"},{default:s(()=>[a(d,{modelValue:e.building.remark,"onUpdate:modelValue":l[6]||(l[6]=n=>e.building.remark=n),type:"textarea"},null,8,["modelValue"])]),_:1})]),e.alert?(B(),V(g,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:s(()=>[O(I(e.alert),1)]),_:1})):H("",!0),a(_),a(h,{type:"justify-center"},{default:s(()=>[a(m,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),a(m,{label:"ยกเลิก",color:"danger",onClick:o.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[C,o.value]])]),_:1},512)),[[C,o.value]])}const X=D(K,[["render",W]]),Y={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"สถานะ",value:"status",options:v("ddl")}],search:{status:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"วันที่สร้าง",class:"text-center",value:"date",type:"date"},{label:"ราคา",value:"amount",class:"text-right"},{label:"สถานะ",class:"text-center",func:t=>v()[t.status]},{label:"ผู้ก่อสร้าง",value:"builder"},{label:"หมายเหตุ",value:"remark"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:R,LayoutAuthenticated:j,SectionTitleBarSub:z,Table:G,Modal:X,Criteria:P},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const l=await u.all(t);this.items=[],l.data&&(this.items=l.data.buildings),this.loading=!1},async remove(t){this.loading=!0,(await u.delete(t)).data&&this.getDatas(),this.loading=!1,p.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(t){this.loading=!0;let l=[];for(let b of t)l.push(b._id);(await u.deletes(l)).data&&(this.getDatas(),p.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(t){this.modalData=t,this.mode="edit",this.openModal=!0},reset(){this.search.status="",this.getDatas()},resetData(){this.modalData=null}}};function Z(t,l,c,b,e,o){const d=i("SectionTitleBarSub"),r=i("Modal"),g=i("Criteria"),_=i("Table"),m=i("SectionMain"),h=i("LayoutAuthenticated");return B(),V(h,null,{default:s(()=>[a(m,null,{default:s(()=>[a(d,{icon:"barn",title:"สิ่งปลูกสร้าง","has-btn-add":"",onOpenModal:l[0]||(l[0]=f=>{e.mode="create",e.openModal=!0}),btnText:"เพิ่มสิ่งปลูกสร้าง"}),a(r,{modelValue:e.openModal,"onUpdate:modelValue":l[1]||(l[1]=f=>e.openModal=f),data:o.getDataCopy,mode:e.mode,onConfirm:o.getDatas,onCancel:o.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),a(g,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:o.getDatas,onReset:o.reset,forms:e.forms,search:e.search,btnLoading:e.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),a(_,{title:"รายการสิ่งปลูกสร้าง","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:o.edit,onDelete:o.remove,onDeleteSelected:o.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const re=D(Y,[["render",Z]]);export{re as default};
