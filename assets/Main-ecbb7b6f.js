import{y as u,B as C,z as M,p as E,m as x,_ as q,l as F,G as T,i as L,j as N,f as Y,R as O,O as U,F as i,H as V,I as S,o as _,c as g,w as s,d as n,s as H,k as w,h as I,t as R,e as j,C as A,D as z,E as G,T as P}from"./index-bc93aaa5.js";import{C as Q}from"./Criteria-342f422e.js";import{_ as W}from"./FormField-ffdf41b4.js";import{T as b}from"./alert-c91afff8.js";import{E as J}from"./equipment-a78cd33c.js";import{B as K}from"./building-66c83325.js";import"./CardBoxCollapse-9315f2c2.js";import"./Cow-ae223664.js";import"./cow-e4c86b4e.js";import"./Vaccine-237a4d4b.js";async function X(t={}){let e="?";return t.status&&(e=e+`status=${t.status}&`),t?e.replace(/&*$/,""):""}class Z{async all(e){const l=await X(e);return u.get("/maintenance"+l).then(m=>m)}get(e){return u.get(`/maintenance/${e}`)}create(e){return e.date&&(e.date=C(new Date(e.date)).format("YYYY-MM-DD")),u.post("/maintenance",e)}delete(e){return u.delete(`/maintenance/${e}`)}update(e,l){return l.date&&(l.date=C(new Date(l.date)).format("YYYY-MM-DD")),u.put(`/maintenance/${e}`,l)}}const f=new Z,$=t=>t==="create"?[{id:"E",label:"อุปกรณ์"},{id:"B",label:"สิ่งก่อสร้าง"}]:[{id:"",label:"ทั้งหมด"},{id:"E",label:"อุปกรณ์"},{id:"B",label:"สิ่งก่อสร้าง"}],ee={data(){return{maintenance:{code:"",date:null,category:"E",amount:null,maintenancer:"",reason:""},list:[],categories:$("create"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},created(){this.mode==="create"&&this.equipments()},watch:{data(t){t&&this.mode==="edit"&&(this.maintenance=t,this.maintenance.date=new Date(t.date))},"maintenance.category"(t){t==="E"?this.equipments():t==="B"&&this.buildings()}},methods:{clear(){this.maintenance={},this.maintenance.category="E",this.maintenance.date=new Date},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await f.create(this.maintenance)&&(this.loading=!1,this.confirm()):await f.update(this.maintenance._id,this.maintenance)&&(this.loading=!1,this.confirm()),b.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,b.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},async equipments(){const t=await J.all();if(t.data){this.list=[{id:"",label:"เลือกรายการ"}];const e=t.data.equipments;for(let l of e)this.list.push({id:l.code,label:l.code+" : "+l.name})}else this.list=[{id:"",label:"ไม่มีรายการ"}]},async buildings(){const t=await K.all();if(t.data){this.list=[{id:"",label:"เลือกรายการ"}];const e=t.data.buildings;for(let l of e)this.list.push({id:l.code,label:l.code+" : "+l.name})}else this.list=[{id:"",label:"ไม่มีรายการ"}]}},components:{BaseButton:E,BaseButtons:x,CardBox:q,BaseDivider:F,OverlayLayer:T,FormField:W,FormControl:L,NotificationBar:N,BaseLevel:Y,FormCheckRadioPicker:O,BaseIcon:U},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},te={class:"grid grid-cols-2 lg:grid-cols-3 gap-5"};function ae(t,e,l,m,a,o){const c=i("FormControl"),d=i("FormField"),y=i("NotificationBar"),B=i("BaseDivider"),p=i("BaseButton"),D=i("BaseButtons"),h=i("CardBox"),k=i("OverlayLayer");return V((_(),g(k,null,{default:s(()=>[V(n(h,{title:"การซ่อมบำรุง "+(this.mode==="create"?"":"(แก้ไข)"),class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:j(o.submit,["prevent"]),onHeaderIconClick:o.cancel},{default:s(()=>{var v;return[H("div",te,[n(d,{label:"หมวดหมู่",help:"* ห้ามว่าง"},{default:s(()=>[n(c,{modelValue:a.maintenance.category,"onUpdate:modelValue":e[0]||(e[0]=r=>a.maintenance.category=r),icon:"accountEdit",options:a.categories,required:""},null,8,["modelValue","options"])]),_:1}),(v=a.maintenance)!=null&&v.category?(_(),g(d,{key:0,label:"รายการ",help:"* ห้ามว่าง"},{default:s(()=>[n(c,{modelValue:a.maintenance.code,"onUpdate:modelValue":e[1]||(e[1]=r=>a.maintenance.code=r),icon:"accountEdit",options:a.list,required:""},null,8,["modelValue","options"])]),_:1})):w("",!0),n(d,{label:"วันที่ซ่อม",help:"* ห้ามว่าง"},{default:s(()=>[n(c,{modelValue:a.maintenance.date,"onUpdate:modelValue":e[2]||(e[2]=r=>a.maintenance.date=r),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),n(d,{label:"รายละเอียด"},{default:s(()=>[n(c,{modelValue:a.maintenance.reason,"onUpdate:modelValue":e[3]||(e[3]=r=>a.maintenance.reason=r),type:"textarea"},null,8,["modelValue"])]),_:1}),n(d,{label:"ราคา",help:"* ห้ามว่าง"},{default:s(()=>[n(c,{modelValue:a.maintenance.amount,"onUpdate:modelValue":e[4]||(e[4]=r=>a.maintenance.amount=r),type:"number",icon:"cashMultiple",required:""},null,8,["modelValue"])]),_:1}),n(d,{label:"ผู้ซ่อมบำรุง"},{default:s(()=>[n(c,{modelValue:a.maintenance.maintenancer,"onUpdate:modelValue":e[5]||(e[5]=r=>a.maintenance.maintenancer=r),icon:"accountHardHat"},null,8,["modelValue"])]),_:1})]),a.alert?(_(),g(y,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:s(()=>[I(R(a.alert),1)]),_:1})):w("",!0),n(B),n(D,{type:"justify-center"},{default:s(()=>[n(p,{label:"บันทึก",color:"success",type:"submit",loading:a.loading},null,8,["loading"]),n(p,{label:"ยกเลิก",color:"danger",onClick:o.cancel},null,8,["onClick"])]),_:1})]}),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[S,o.value]])]),_:1},512)),[[S,o.value]])}const ne=M(ee,[["render",ae]]),le={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"สถานะ",value:"status"}],search:{status:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"รหัสรายการ",value:"code"},{label:"ชื่อรายการ",value:"name"},{label:"รายละเอียด",value:"reason"},{label:"วันที่ซ่อม",class:"text-center",value:"date",type:"date"},{label:"ราคา",value:"amount",class:"text-right"},{label:"ผู้ซ่อมบำรุง",value:"maintenancer"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:A,LayoutAuthenticated:z,SectionTitleBarSub:G,Table:P,Modal:ne,Criteria:Q},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const e=await f.all(t);this.items=[],e.data&&(this.items=e.data.maintenances),this.loading=!1},async remove(t){this.loading=!0,(await f.delete(t)).data&&this.getDatas(),this.loading=!1,b.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(t){this.loading=!0;let e=[];for(let m of t)e.push(m._id);(await f.deletes(e)).data&&(this.getDatas(),b.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(t){this.modalData=t,this.mode="edit",this.openModal=!0},reset(){this.search.status="",this.getDatas()},resetData(){this.modalData={},this.modalData.category="E",this.modalData.date=new Date}}};function oe(t,e,l,m,a,o){const c=i("SectionTitleBarSub"),d=i("Modal"),y=i("Criteria"),B=i("Table"),p=i("SectionMain"),D=i("LayoutAuthenticated");return _(),g(D,null,{default:s(()=>[n(p,null,{default:s(()=>[n(c,{icon:"progressWrench",title:"การซ่อมบำรุง","has-btn-add":"",onOpenModal:e[0]||(e[0]=h=>{a.mode="create",a.openModal=!0}),btnText:"เพิ่มการซ่อมบำรุง"}),n(d,{modelValue:a.openModal,"onUpdate:modelValue":e[1]||(e[1]=h=>a.openModal=h),data:o.getDataCopy,mode:a.mode,onConfirm:o.getDatas,onCancel:o.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),n(y,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:o.getDatas,onReset:o.reset,forms:a.forms,search:a.search,btnLoading:a.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),n(B,{title:"รายการซ่อมบำรุง","has-checkbox":"","checked-data":a.checked,items:a.items,datas:a.datas,buttons:a.buttons,onEdit:o.edit,onDelete:o.remove,onDeleteSelected:o.removeSelected,loading:a.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const _e=M(le,[["render",oe]]);export{_e as default};
