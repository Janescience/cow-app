import{y as b,B as V,p as C,m as D,_ as S,l as T,F as k,i as w,j as M,f as F,N as x,E as n,G as y,H as g,o as P,c as v,w as r,d as o,s as N,e as U,S as L,C as E,D as O}from"./index-7f9b5712.js";import{T as R}from"./Table-3a00d110.js";import{C as j}from"./Criteria-d3464fa8.js";import{_ as q}from"./FormField-e8ab3bbb.js";import{_ as A}from"./FormCheckRadioPicker-07f8123d.js";import{T as H}from"./alert-badcd9c6.js";import"./Cow-958e3598.js";import"./cow-9236eaa5.js";async function I(a={}){let e="?";return a.code&&(e=e+`code=${a.code}&`),a?e.replace(/&*$/,""):""}class z{async all(e){const c=await I(e);return b.get("/notiparam"+c).then(f=>f)}get(e){return b.get(`/notiparam/${e}`)}update(e,c){return b.put(`/notiparam/${e}`,c)}}const B=new z,G={data(){return{notiParam:{before:"",beforeType:"D",dueDate:!0,after:"",afterType:"D",code:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(a){this.$emit("update:modelValue",a)}}},watch:{data:{handler(a,e){this.clear(),this.notiParam=a},deep:!0}},methods:{clear(){var a;this.$emit("update:data",null),this.notiParam.code="",this.notiParam.before="",this.notiParam.beforeType="D",this.notiParam.after="",this.notiParam.afterType="D",this.notiParam.dueDate=!0,(a=this.notiParam)==null||delete a._id},confirmCancel(a){this.value=!1,this.$emit(a)},confirm(){this.confirmCancel("confirm")},cancel(){this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{await B.update(this.notiParam._id,this.notiParam)&&(this.loading=!1,this.value=!1,this.confirm(),H.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(a){console.error("Error : ",a),this.loading=!1,this.alert=a.response.data.message}}},components:{BaseButton:C,BaseButtons:D,CardBox:S,BaseDivider:T,OverlayLayer:k,FormField:q,FormControl:w,NotificationBar:M,BaseLevel:F,FormCheckRadioPicker:A,BaseIcon:x},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null}}},Q={class:"grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1"};function J(a,e,c,f,t,i){const m=n("FormControl"),s=n("FormField"),d=n("FormCheckRadioPicker"),u=n("BaseButton"),p=n("BaseButtons"),_=n("CardBox"),h=n("OverlayLayer");return y((P(),v(h,null,{default:r(()=>[y(o(_,{title:"แก้ไขพารามิเตอร์ (การแจ้งเตือน)",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"","has-scroll":"",onSubmit:U(i.submit,["prevent"]),onHeaderIconClick:i.cancel},{default:r(()=>[N("div",Q,[o(s,{label:"รหัส",help:"ห้ามแก้ไข"},{default:r(()=>[o(m,{modelValue:t.notiParam.code,"onUpdate:modelValue":e[0]||(e[0]=l=>t.notiParam.code=l),icon:"barcode"},null,8,["modelValue"])]),_:1}),o(s,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:r(()=>[o(m,{modelValue:t.notiParam.name,"onUpdate:modelValue":e[1]||(e[1]=l=>t.notiParam.name=l),icon:"formTextbox",required:""},null,8,["modelValue"])]),_:1}),o(s,{label:"แจ้งเตือนวันมีผล",help:"* ห้ามว่าง"},{default:r(()=>[o(d,{modelValue:t.notiParam.dueDate,"onUpdate:modelValue":e[2]||(e[2]=l=>t.notiParam.dueDate=l),type:"radio",options:{true:"แจ้งเตือน",false:"ไม่แจ้งเตือน"}},null,8,["modelValue"])]),_:1}),o(s,{label:"แจ้งเตือน(ก่อน)"},{default:r(()=>[o(m,{modelValue:t.notiParam.before,"onUpdate:modelValue":e[3]||(e[3]=l=>t.notiParam.before=l),type:"number",icon:"formNumber"},null,8,["modelValue"])]),_:1}),o(s,{label:"ประเภทระยะเวลา(ก่อน)"},{default:r(()=>[o(d,{modelValue:t.notiParam.beforeType,"onUpdate:modelValue":e[4]||(e[4]=l=>t.notiParam.beforeType=l),type:"radio",options:{D:"วัน",M:"เดือน"}},null,8,["modelValue"])]),_:1}),o(s,{label:"แจ้งเตือน(หลัง)"},{default:r(()=>[o(m,{modelValue:t.notiParam.after,"onUpdate:modelValue":e[5]||(e[5]=l=>t.notiParam.after=l),icon:"formNumber",type:"number"},null,8,["modelValue"])]),_:1}),o(s,{label:"ประเภทระยะเวลา(หลัง)"},{default:r(()=>[o(d,{modelValue:t.notiParam.afterType,"onUpdate:modelValue":e[6]||(e[6]=l=>t.notiParam.afterType=l),type:"radio",options:{D:"วัน",M:"เดือน"}},null,8,["modelValue"])]),_:1})]),o(p,{type:"justify-center mt-3"},{default:r(()=>[o(u,{label:"บันทึก",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),o(u,{label:"ยกเลิก",color:"danger",onClick:i.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["onSubmit","onHeaderIconClick"]),[[g,i.value]])]),_:1},512)),[[g,i.value]])}const K=V(G,[["render",J]]),W={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"รหัส/ชื่อ",value:"code"}],search:{code:""},loading:!1,dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"แจ้งเตือนวันที่มีผล",func:a=>a.dueDate?"แจ้งเตือน":"ไม่แจ้งเตือน"},{label:"แจ้งเตือน(ก่อน)",value:"before"},{label:"ประเภทระยะเวลา(ก่อน)",value:"beforeType"},{label:"แจ้งเตือน(หลัง)",value:"after"},{label:"ประเภทระยะเวลา(ก่อน)",value:"afterType"}],buttons:[{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:L,LayoutAuthenticated:E,SectionTitleBarSub:O,Table:R,Modal:K,Criteria:j},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(a){this.loading=!0;const e=await B.all(a);this.items=[],e.data&&(this.items=e.data.notiParams),this.loading=!1},edit(a){this.modalData=a,this.openModal=!0},reset(){this.search.name=""}}};function X(a,e,c,f,t,i){const m=n("SectionTitleBarSub"),s=n("Modal"),d=n("Criteria"),u=n("Table"),p=n("SectionMain"),_=n("LayoutAuthenticated");return P(),v(_,null,{default:r(()=>[o(p,null,{default:r(()=>[o(m,{icon:"applicationVariableOutline",title:"พารามิเตอร์ (การแจ้งเตือน)"}),o(s,{modelValue:t.openModal,"onUpdate:modelValue":e[0]||(e[0]=h=>t.openModal=h),data:i.getDataCopy,mode:a.mode,onConfirm:i.getDatas},null,8,["modelValue","data","mode","onConfirm"]),o(d,{grid:"grid-cols-2 lg:grid-cols-5",onSearch:i.getDatas,onReset:i.reset,forms:t.forms,search:t.search},null,8,["onSearch","onReset","forms","search"]),o(u,{title:"รายการพารามิเตอร์ (การแจ้งเตือน)","has-checkbox":"","checked-data":t.checked,items:t.items,datas:t.datas,buttons:t.buttons,onEdit:i.edit,onDelete:a.remove,onDeleteSelected:a.removeSelected,loading:t.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const ne=V(W,[["render",X]]);export{ne as default};
