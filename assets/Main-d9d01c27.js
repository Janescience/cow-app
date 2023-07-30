import{z as w,p as S,m as x,_ as k,l as M,G as L,i as T,j as F,f as N,O,F as o,H as C,I as D,o as b,c as v,w as n,d as l,s as U,h as E,t as H,k as j,e as q,C as I,D as A,E as R,T as z}from"./index-d622b56d.js";import{C as G}from"./Criteria-5a41a3ef.js";import{_ as P}from"./FormField-98ea13f0.js";import{D as J}from"./Cow-65a19d1a.js";import{T as d}from"./alert-a81da250.js";import{H as m}from"./heal-ed7d281a.js";import{_ as K}from"./FormCheckRadioPicker-3689ab48.js";import"./CardBoxCollapse-1193015d.js";import"./Vaccine-ab9e037e.js";import"./cow-0755e548.js";const Q={data(){return{heal:{cow:{},date:new Date,disease:"",method:"",healer:"",amount:null},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},watch:{data(t){t&&(this.heal=t,this.heal.date=t.date?new Date(t.date):null)}},methods:{clear(){this.heal={}},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await m.create(this.heal)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),d.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):await m.update(this.heal._id,this.heal)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),d.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,d.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ กรุณาติดต่อผู้ดูแลระบบ"})}}},components:{BaseButton:S,BaseButtons:x,CardBox:k,BaseDivider:M,OverlayLayer:L,FormField:P,FormControl:T,NotificationBar:F,BaseLevel:N,DDLCow:J,FormCheckRadioPicker:K,BaseIcon:O},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},W={class:"grid grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-5"};function X(t,a,y,h,e,s){const p=o("DDLCow"),r=o("FormField"),c=o("FormControl"),_=o("NotificationBar"),g=o("BaseDivider"),u=o("BaseButton"),f=o("BaseButtons"),B=o("CardBox"),V=o("OverlayLayer");return C((b(),v(V,null,{default:n(()=>[C(l(B,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"การรักษา",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:q(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:n(()=>[U("div",W,[l(r,{label:"โค",help:"* ห้ามว่าง"},{default:n(()=>[l(p,{modelValue:e.heal.cow,"onUpdate:modelValue":a[0]||(a[0]=i=>e.heal.cow=i),valueType:"object"},null,8,["modelValue"])]),_:1}),l(r,{label:"วันที่รักษา",help:"* ห้ามว่าง"},{default:n(()=>[l(c,{modelValue:e.heal.date,"onUpdate:modelValue":a[1]||(a[1]=i=>e.heal.date=i),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(r,{label:"คนรักษา"},{default:n(()=>[l(c,{modelValue:e.heal.healer,"onUpdate:modelValue":a[2]||(a[2]=i=>e.heal.healer=i),icon:"doctor"},null,8,["modelValue"])]),_:1}),l(r,{label:"อาการ/โรค",help:"* ห้ามว่าง",class:"col-span-2"},{default:n(()=>[l(c,{modelValue:e.heal.disease,"onUpdate:modelValue":a[3]||(a[3]=i=>e.heal.disease=i),type:"textarea",required:""},null,8,["modelValue"])]),_:1}),l(r,{label:"วิธีการรักษา",class:"col-span-2 lg:col-span-1"},{default:n(()=>[l(c,{modelValue:e.heal.method,"onUpdate:modelValue":a[4]||(a[4]=i=>e.heal.method=i),type:"textarea"},null,8,["modelValue"])]),_:1}),l(r,{label:"ค่ารักษา"},{default:n(()=>[l(c,{modelValue:e.heal.amount,"onUpdate:modelValue":a[5]||(a[5]=i=>e.heal.amount=i),type:"number"},null,8,["modelValue"])]),_:1})]),e.alert?(b(),v(_,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:n(()=>[E(H(e.alert),1)]),_:1})):j("",!0),l(g),l(f,{type:"justify-center"},{default:n(()=>[l(u,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),l(u,{label:"ยกเลิก",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[D,s.value]])]),_:1},512)),[[D,s.value]])}const Y=w(Q,[["render",X]]),Z={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"วันที่รักษา",value:"date",icon:"calendar",type:"date"}],search:{cow:null,date:null},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"รหัสโค",value:"cow.code"},{label:"ชื่อโค",value:"cow.name"},{label:"วันที่รักษา",class:"text-center",value:"date",type:"date"},{label:"อาการ/โรค",class:"text-center",value:"disease"},{label:"วิธีการรักษา",class:"text-center",value:"method"},{label:"คนรักษา",class:"text-center",value:"healer"},{label:"ค่ารักษา",class:"text-center",value:"amount"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:I,LayoutAuthenticated:A,SectionTitleBarSub:R,Table:z,Modal:Y,Criteria:G},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const a=await m.all(t);this.items=[],a.data&&(this.items=a.data.heals),this.loading=!1},async remove(t){this.loading=!0,(await m.delete(t)).data&&this.getDatas(),this.loading=!1,d.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(t){this.loading=!0;let a=[];for(let h of t)a.push(h._id);(await m.deletes(a)).data&&(this.getDatas(),d.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(t){this.modalData=t,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.date=null,this.getDatas()},resetData(){this.modalData=null}}};function $(t,a,y,h,e,s){const p=o("SectionTitleBarSub"),r=o("Modal"),c=o("Criteria"),_=o("Table"),g=o("SectionMain"),u=o("LayoutAuthenticated");return b(),v(u,null,{default:n(()=>[l(g,null,{default:n(()=>[l(p,{icon:"doctor",title:"การรักษา","has-btn-add":"",onOpenModal:a[0]||(a[0]=f=>{e.mode="create",e.openModal=!0}),btnText:"เพิ่มการรักษา"}),l(r,{modelValue:e.openModal,"onUpdate:modelValue":a[1]||(a[1]=f=>e.openModal=f),data:s.getDataCopy,mode:e.mode,onConfirm:s.getDatas,onCancel:s.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),l(c,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:e.forms,search:e.search,btnLoading:e.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),l(_,{title:"รายการรักษา","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:s.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const de=w(Z,[["render",$]]);export{de as default};