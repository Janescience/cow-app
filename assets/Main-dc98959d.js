import{y as b,z as g,p as C,m as v,_ as T,l as S,G as w,i as M,j as F,f as k,O as x,F as n,H as h,I as y,o as D,c as V,w as r,d as o,s as L,e as N,C as U,D as O,E,T as I}from"./index-629ff7e8.js";import{_ as $}from"./FormField-549ee950.js";import{_ as q}from"./FormCheckRadioPicker-842da6bf.js";import{T as A}from"./alert-92a2c52a.js";async function H(e={}){let a="?";return e.code&&(a=a+`code=${e.code}&`),e?a.replace(/&*$/,""):""}class R{async all(a){const m=await H(a);return b.get("/notiparam"+m).then(f=>f)}get(a){return b.get(`/notiparam/${a}`)}update(a,m){return b.put(`/notiparam/${a}`,m)}}const P=new R,z={data(){return{notiParam:{before:"",beforeType:"D",dueDate:!0,after:"",afterType:"D"},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},watch:{data:{handler(e,a){this.clear(),this.notiParam=e},deep:!0}},methods:{clear(){var e;this.$emit("update:data",null),this.notiParam.before="",this.notiParam.beforeType="D",this.notiParam.after="",this.notiParam.afterType="D",this.notiParam.dueDate=!0,(e=this.notiParam)==null||delete e._id},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.confirmCancel("confirm")},cancel(){this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{await P.update(this.notiParam._id,this.notiParam)&&(this.loading=!1,this.value=!1,this.confirm(),A.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(e){console.error("Error : ",e),this.loading=!1,this.alert=e.response.data.message}}},components:{BaseButton:C,BaseButtons:v,CardBox:T,BaseDivider:S,OverlayLayer:w,FormField:$,FormControl:M,NotificationBar:F,BaseLevel:k,FormCheckRadioPicker:q,BaseIcon:x},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null}}},j={class:"grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1"};function G(e,a,m,f,t,i){const u=n("FormControl"),s=n("FormField"),c=n("FormCheckRadioPicker"),d=n("BaseButton"),p=n("BaseButtons"),_=n("CardBox"),B=n("OverlayLayer");return h((D(),V(B,null,{default:r(()=>[h(o(_,{title:"แก้ไขพารามิเตอร์ (การแจ้งเตือน)",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"","has-scroll":"",onSubmit:N(i.submit,["prevent"]),onHeaderIconClick:i.cancel},{default:r(()=>[L("div",j,[o(s,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:r(()=>[o(u,{modelValue:t.notiParam.name,"onUpdate:modelValue":a[0]||(a[0]=l=>t.notiParam.name=l),icon:"formTextbox",required:""},null,8,["modelValue"])]),_:1}),o(s,{label:"แจ้งเตือนวันมีผล",help:"* ห้ามว่าง"},{default:r(()=>[o(c,{modelValue:t.notiParam.dueDate,"onUpdate:modelValue":a[1]||(a[1]=l=>t.notiParam.dueDate=l),type:"radio",options:{true:"แจ้งเตือน",false:"ไม่แจ้งเตือน"}},null,8,["modelValue"])]),_:1}),o(s,{label:"แจ้งเตือน(ก่อน)"},{default:r(()=>[o(u,{modelValue:t.notiParam.before,"onUpdate:modelValue":a[2]||(a[2]=l=>t.notiParam.before=l),type:"number",icon:"formNumber"},null,8,["modelValue"])]),_:1}),o(s,{label:"ประเภทระยะเวลา(ก่อน)"},{default:r(()=>[o(c,{modelValue:t.notiParam.beforeType,"onUpdate:modelValue":a[3]||(a[3]=l=>t.notiParam.beforeType=l),type:"radio",options:{D:"วัน",M:"เดือน"}},null,8,["modelValue"])]),_:1}),o(s,{label:"แจ้งเตือน(หลัง)"},{default:r(()=>[o(u,{modelValue:t.notiParam.after,"onUpdate:modelValue":a[4]||(a[4]=l=>t.notiParam.after=l),icon:"formNumber",type:"number"},null,8,["modelValue"])]),_:1}),o(s,{label:"ประเภทระยะเวลา(หลัง)"},{default:r(()=>[o(c,{modelValue:t.notiParam.afterType,"onUpdate:modelValue":a[5]||(a[5]=l=>t.notiParam.afterType=l),type:"radio",options:{D:"วัน",M:"เดือน"}},null,8,["modelValue"])]),_:1})]),o(p,{type:"justify-center mt-3"},{default:r(()=>[o(d,{label:"บันทึก",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),o(d,{label:"ยกเลิก",color:"danger",onClick:i.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["onSubmit","onHeaderIconClick"]),[[y,i.value]])]),_:1},512)),[[y,i.value]])}const Q=g(z,[["render",G]]),J={data(){return{openModal:!1,modalData:null,items:[],forms:[],loading:!1,dataEdit:null,datas:[{label:"ชื่อ",value:"name"},{label:"แจ้งเตือนวันที่มีผล",func:e=>e.dueDate?"แจ้งเตือน":"ไม่แจ้งเตือน"},{label:"แจ้งเตือน (ก่อน)",func:e=>e.before?e.before:"-",class:"text-center"},{label:"หน่วย (ก่อน)",func:e=>e.beforeType=="D"?"วัน":"เดือน"},{label:"แจ้งเตือน (หลัง)",func:e=>e.after?e.after:"-",class:"text-center"},{label:"หน่วย (หลัง)",func:e=>e.afterType=="D"?"วัน":"เดือน"}],buttons:[{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:U,LayoutAuthenticated:O,SectionTitleBarSub:E,Table:I,Modal:Q},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(e){this.loading=!0;const a=await P.all(e);this.items=[],a.data&&(this.items=a.data.notiParams),this.loading=!1},edit(e){this.modalData=e,this.openModal=!0}}};function K(e,a,m,f,t,i){const u=n("SectionTitleBarSub"),s=n("Modal"),c=n("Table"),d=n("SectionMain"),p=n("LayoutAuthenticated");return D(),V(p,null,{default:r(()=>[o(d,null,{default:r(()=>[o(u,{icon:"applicationVariableOutline",title:"พารามิเตอร์ (การแจ้งเตือน)"}),o(s,{modelValue:t.openModal,"onUpdate:modelValue":a[0]||(a[0]=_=>t.openModal=_),data:i.getDataCopy,mode:e.mode,onConfirm:i.getDatas},null,8,["modelValue","data","mode","onConfirm"]),o(c,{title:"รายการพารามิเตอร์ (การแจ้งเตือน)",items:t.items,datas:t.datas,buttons:t.buttons,onEdit:i.edit,onDelete:e.remove,onDeleteSelected:e.removeSelected,loading:t.loading},null,8,["items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const ee=g(J,[["render",K]]);export{ee as default};
