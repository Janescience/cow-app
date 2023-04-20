import{z as B,E as r,o as i,I as m,d as l,w as d,h as V,P as x,p as I,m as A,_ as E,l as U,F as P,i as H,j as R,f as z,N as G,v as J,G as j,H as O,c as f,s as a,k as h,t as u,J as T,K as M,e as K,S as Y,C as Q,D as W}from"./index-6984b9d2.js";import{T as X}from"./Table-58bbe661.js";import{C as Z}from"./Criteria-d5aa74ee.js";import{V as $}from"./vaccine-146006a6.js";import{_ as ee}from"./FormField-ce617d97.js";import{T as S}from"./alert-131436d7.js";import{P as k}from"./protection-5bb4072f.js";import{C as te}from"./cow-ad9d3c7f.js";import{_ as oe}from"./FormCheckRadioPicker-850b8179.js";import"./Cow-8ebab523.js";const ae={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){var e,t;return this.valueType==="object"&&(e=this.modelValue)!=null&&e.vaccine_data&&(this.modelValue.vaccine_data=(t=this.modelValue)==null?void 0:t.name),this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user}},methods:{async initialData(){try{const e=await $.all();if(this.datas=[],e&&(this.datas=e.data.vaccines,this.datas.map(t=>t.vaccine_data=t.name)),this.defaultValue){const t=this.datas.filter(c=>c[this.defaultType]==this.defaultValue);t&&this.handleInput(this.reduceAction(t[0]))}}catch(e){this.datas=[],console.error("Error: "+e.message)}},reduceAction(e){return this.valueType==="object"?e:e[this.valueType]},handleInput(e){this.$emit("update:value",e),this.dataSelected=this.datas.find(t=>t.name===e),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},multiple:{default:!1,type:Boolean}}},le={class:"relative"};function se(e,t,c,y,o,s){const b=r("mdicon"),p=r("v-select");return i(),m("div",le,[l(p,{class:"ddl",clearable:c.clear,disabled:c.disabled,options:o.datas,reduce:s.reduceAction,label:"vaccine_data",placeholder:"เลือกวัคซีน",onInput:s.handleInput,modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=g=>s.value=g),dataSelected:c.dataSelected,multiple:c.multiple},{"no-options":d(()=>[l(b,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),V(" ไม่พบข้อมูล ")]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected","multiple"])])}const ne=B(ae,[["render",se]]),ie={data(){return{protection:{date:new Date,vaccine:null,qty:null,amount:null,remark:"",cows:[]},corral:"",corrals:null,ddlCorral:[{id:"",label:"เลือกคอก"}],cows:[],showCows:!1,showVaccineCond:!1,vaccineCond:"Y",loading:!1,alert:"",search:"",alertSubmitCow:"",confirmObj:{text:"",func:null,id:null,dataSelected:null,modal:!1}}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user},resultSearch(){return this.search?this.cows.filter(e=>this.search.toLowerCase().split(" ").every(t=>e.name.toLowerCase().includes(t))):this.cows}},watch:{data(e){e&&this.mode==="edit"&&(this.protection=e,this.protection.date=new Date(e.date))},"protection.qty"(e){e&&(this.protection.amount=e*this.protection.vaccine.amount)},corral(e){e?this.protection.cows.filter(c=>c.corral==e).length>0?this.alertSubmitCow="คอกนี้ถูกเลือกไปแล้ว กรุณาเลือกคอกใหม่หรือล้างรายการเดิมก่อน":(this.cows=this.corrals[e],this.alertSubmitCow=""):this.showVaccineCond=!1},vaccineCond(e){e=="N"?this.showCows=!0:this.showCows=!1}},created(){this.getCorrals()},methods:{clear(){this.protection.date=new Date,this.protection.vaccine=null,this.protection.qty=null,this.protection.amount=null,this.protection.remark="",this.protection.cows=[],this.corral="",this.cows=[],this.showCows=!1},confirmCancel(e){this.value=!1,this.$emit(e)},cancelConfirm(){this.protection.cows.length>0?this.confirm("มีรายการโคฉีดวัคซีนยังไม่ได้บันทึก ยืนยันยกเลิกใช่หรือไม่ ?",null,null,this.cancel):this.cancel()},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await k.create(this.protection)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await k.update(this.protection._id,this.protection)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")),S.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(e){console.error("Error : ",e),this.clear(),this.loading=!1,this.alert=await e.response.data.message,S.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},async getCorrals(){const e=await te.all();if(e){const t=e.data.cows;this.corrals=x.groupBy(t,"corral");for(let c of Object.keys(this.corrals))this.ddlCorral.push({id:c,label:c})}},removeCow(e){let t=this.cows.indexOf(e);t!==-1&&(this.cows.splice(t,1),this.search="")},removeSubmitCow(e){let t=this.protection.cows.indexOf(e);t!==-1&&(this.protection.cows.splice(t,1),this.protection.qty=this.protection.cows.length)},submitCowConfirm(){this.confirm("ยืนยันเลือกคอก "+this.corral+" และโคจำนวน "+this.cows.length+" ตัว ใช่หรือไม่ ?",null,null,this.submitCow)},submitCow(){this.protection.qty+=this.cows.length,this.protection.cows.push(...this.cows),this.cows=[],this.corral="",this.showCows=!1},resetConfirm(){this.confirm("ต้องการล้างรายการโคฉีดวัคซีนทั้งหมดใช่หรือไม่ ?",null,null,this.reset)},reset(){this.protection.cows=[],this.protection.qty=""},confirm(e,t,c,y){this.confirmObj.text=e,this.confirmObj.func=y,this.confirmObj.id=t,this.confirmObj.dataSelected=c,this.confirmObj.modal=!0}},components:{BaseButton:I,BaseButtons:A,CardBox:E,BaseDivider:U,OverlayLayer:P,FormField:ee,FormControl:H,NotificationBar:R,BaseLevel:z,FormCheckRadioPicker:oe,BaseIcon:G,DDLVaccine:ne,CardBoxModal:J},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},re={class:"grid grid-cols-2 lg:grid-cols-4 gap-5"},ce={key:1,class:"flex items-stretch border-b border-gray-100 dark:border-gray-800"},de={class:"flex items-center py-3 grow font-bold"},ue={key:2,class:"overflow-x-hidden overflow-y-auto max-h-48"},he=a("thead",null,[a("tr",null,[a("th",{class:"whitespace-nowrap text-center"}," รหัสโค "),a("th",{class:"whitespace-nowrap text-center"}," ชื่อโค "),a("th",{class:"whitespace-nowrap text-center"}," สถานะ "),a("th")])],-1),me={"data-label":"รหัสโค"},fe={"data-label":"ชื่อโค"},pe={"data-label":"สถานะ"},_e={class:"lg:w-6 whitespace-nowrap"},be={class:"flex items-stretch border-b border-gray-100 dark:border-gray-800"},we=a("p",{class:"flex items-center py-3 grow font-bold"}," รายการโคฉีดวัคซีน ",-1),ye={key:6,class:"overflow-x-hidden overflow-y-auto max-h-48"},ge=a("thead",null,[a("tr",null,[a("th",{class:"whitespace-nowrap text-center"}," รหัสโค "),a("th",{class:"whitespace-nowrap text-center"}," ชื่อโค "),a("th",{class:"whitespace-nowrap text-center"}," คอก "),a("th",{class:"whitespace-nowrap text-center"}," สถานะ ")])],-1),ve={"data-label":"รหัสโค"},Ce={"data-label":"ชื่อโค"},Ve={"data-label":"คอก"},ke={"data-label":"สถานะ"},xe={class:"lg:w-6 whitespace-nowrap"},Se={key:7,class:"text-center py-10 text-gray-500 dark:text-gray-400"},Be=a("p",null,"ไม่มีรายการ...",-1),De=[Be];function je(e,t,c,y,o,s){const b=r("FormControl"),p=r("FormField"),g=r("DDLVaccine"),v=r("BaseDivider"),_=r("BaseButton"),w=r("BaseButtons"),C=r("NotificationBar"),N=r("CardBoxModal"),q=r("CardBox"),L=r("OverlayLayer");return j((i(),f(L,null,{default:d(()=>[j(l(q,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"การป้องกัน/บำรุง",class:"shadow-lg w-full lg:w-3/5 z-50","header-icon":"close",modal:"",form:"","has-scroll":"",onSubmit:K(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:d(()=>{var D;return[a("div",re,[l(p,{label:"วันที่",help:"* ห้ามว่าง"},{default:d(()=>[l(b,{modelValue:o.protection.date,"onUpdate:modelValue":t[0]||(t[0]=n=>o.protection.date=n),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(p,{label:"วัคซีน/ยา",help:"* ห้ามว่าง",class:"col-span-2"},{default:d(()=>[l(g,{modelValue:o.protection.vaccine,"onUpdate:modelValue":t[1]||(t[1]=n=>o.protection.vaccine=n),valueType:"object"},null,8,["modelValue"])]),_:1}),(D=o.protection.vaccine)!=null&&D.code?(i(),f(p,{key:0,label:"คอก"},{default:d(()=>[l(b,{modelValue:o.corral,"onUpdate:modelValue":t[2]||(t[2]=n=>o.corral=n),options:o.ddlCorral,required:""},null,8,["modelValue","options"])]),_:1})):h("",!0)]),this.cows.length>0?(i(),f(v,{key:0})):h("",!0),this.cows.length>0?(i(),m("header",ce,[a("p",de," เลือกโค คอก "+u(o.corral)+" จำนวน "+u(o.cows.length)+" ตัว ",1),l(b,{modelValue:o.search,"onUpdate:modelValue":t[3]||(t[3]=n=>o.search=n),icon:"magnify",placeholder:"ค้นหาชื่อโค"},null,8,["modelValue"])])):h("",!0),this.cows.length>0?(i(),m("div",ue,[a("table",null,[he,a("tbody",null,[(i(!0),m(T,null,M(s.resultSearch,n=>(i(),m("tr",{key:n._id},[a("td",me,u(n.code),1),a("td",fe,u(n.name),1),a("td",pe,u(n.status),1),a("td",_e,[l(w,{type:"justify-end lg:justify-start","no-wrap":""},{default:d(()=>[l(_,{color:"danger",icon:"close",small:"",onClick:F=>s.removeCow(n)},null,8,["onClick"])]),_:2},1024)])]))),128))])])])):h("",!0),o.alertSubmitCow?(i(),f(C,{key:3,color:"warning",outline:"",icon:"alertCircleOutline"},{default:d(()=>[V(u(o.alertSubmitCow),1)]),_:1})):h("",!0),this.cows.length>0?(i(),f(w,{key:4,type:"justify-center",class:"mt-2"},{default:d(()=>[l(_,{onClick:s.submitCowConfirm,label:"ยืนยัน",color:"info"},null,8,["onClick"])]),_:1})):h("",!0),this.cows.length>0?(i(),f(v,{key:5})):h("",!0),a("header",be,[we,l(w,{class:"mt-2",type:"justify-center"},{default:d(()=>[l(_,{disabled:o.protection.cows.length<=0,onClick:s.resetConfirm,label:"ล้าง",small:"",color:"danger"},null,8,["disabled","onClick"])]),_:1})]),o.protection.cows.length>0?(i(),m("div",ye,[a("table",null,[ge,a("tbody",null,[(i(!0),m(T,null,M(o.protection.cows,n=>(i(),m("tr",{key:n._id},[a("td",ve,u(n.code),1),a("td",Ce,u(n.name),1),a("td",Ve,u(n.corral),1),a("td",ke,u(n.status),1),a("td",xe,[l(w,{type:"justify-end lg:justify-start","no-wrap":""},{default:d(()=>[l(_,{color:"danger",icon:"close",small:"",onClick:F=>s.removeSubmitCow(n)},null,8,["onClick"])]),_:2},1024)])]))),128))])])])):(i(),m("div",Se,De)),o.protection.cows.length>0?(i(),f(p,{key:8,class:"text-right mt-2"},{default:d(()=>[V(" รวมฉีดวัคซีน "+u(o.protection.qty?o.protection.qty:"-")+" ตัว เป็นเงิน "+u(o.protection.amount?o.protection.amount:"-")+" บาท ",1)]),_:1})):h("",!0),o.alert?(i(),f(C,{key:9,color:"danger",outline:"",icon:"alertCircleOutline"},{default:d(()=>[V(u(o.alert),1)]),_:1})):h("",!0),l(v),l(w,{type:"justify-center"},{default:d(()=>[l(_,{label:"บันทึก",color:"success",type:"submit",disabled:o.protection.cows.length<=0,loading:o.loading},null,8,["disabled","loading"]),l(_,{label:"ยกเลิก",color:"danger",onClick:s.cancelConfirm},null,8,["onClick"])]),_:1}),l(N,{modelValue:o.confirmObj.modal,"onUpdate:modelValue":t[4]||(t[4]=n=>o.confirmObj.modal=n),title:"ยืนยันอีกครั้ง","button-label":"ยืนยัน",onConfirm:o.confirmObj.func,"has-cancel":"","has-button":""},{default:d(()=>[a("p",null,u(o.confirmObj.text),1)]),_:1},8,["modelValue","onConfirm"])]}),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[O,s.value]])]),_:1},512)),[[O,s.value]])}const Oe=B(ie,[["render",je]]),Te={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"วัคซีน",value:"vaccine",icon:"needle"},{label:"ฉีดวัคซีนล่าสุด",value:"dateCurrent",icon:"calendar",type:"date"},{label:"ฉีดวัคซีนครั้งต่อไป",value:"dateNext",icon:"calendar",type:"date"}],search:{dateCurrent:null,dateNext:null,vaccine:""},loading:!1,mode:"create",dataEdit:null,checked:{label:{value:"vaccine.name"},code:{value:"vaccine.code"}},datas:[{label:"ครั้งที่",value:"seq"},{label:"วัคซีน",value:"vaccine.name"},{label:"จำนวนที่ฉีด (ตัว)",class:"text-center",value:"qty"},{label:"รวมเป็นเงิน (บาท)",class:"text-center",value:"amount"},{label:"วันที่ฉีดวัคซีน",class:"text-center",value:"date",type:"date"},{label:"หมายเหตุ",class:"text-center",value:"remark"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning",condition:e=>{const t=x.groupBy(this.items,"vaccine._id");for(let c of Object.keys(t)){const y=t[c],o=x.orderBy(y,"seq","desc");if(o.length>0&&e._id==o[0]._id)return!0}return!1}}]}},components:{SectionMain:Y,LayoutAuthenticated:Q,SectionTitleBarSub:W,Table:X,Modal:Oe,Criteria:Z},computed:{user(){return this.$store.state.auth.user},getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(e){this.loading=!0;const t=await k.all(e);this.items=[],t.data&&(this.items=t.data.protections),this.loading=!1},async remove(e){this.loading=!0,(await k.delete(e)).data&&this.getDatas(),this.loading=!1,S.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},reset(){this.search.dateCurrent=null,this.search.dateNext=null,this.search.vaccine=""}}};function Me(e,t,c,y,o,s){const b=r("SectionTitleBarSub"),p=r("Modal"),g=r("Criteria"),v=r("Table"),_=r("SectionMain"),w=r("LayoutAuthenticated");return i(),f(w,null,{default:d(()=>[l(_,null,{default:d(()=>[l(b,{icon:"doctor",title:"การป้องกัน/บำรุง","has-btn-add":"",onOpenModal:t[0]||(t[0]=C=>{o.mode="create",o.openModal=!0}),btnText:"เพิ่มการป้องกัน/บำรุง"}),l(p,{modelValue:o.openModal,"onUpdate:modelValue":t[1]||(t[1]=C=>o.openModal=C),data:s.getDataCopy,mode:o.mode,onConfirm:s.getDatas},null,8,["modelValue","data","mode","onConfirm"]),l(g,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:o.forms,search:o.search},null,8,["onSearch","onReset","forms","search"]),l(v,{title:"รายการป้องกัน/บำรุง","has-checkbox":"","checked-data":o.checked,items:o.items,datas:o.datas,buttons:o.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:e.removeSelected,loading:o.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const Re=B(Te,[["render",Me]]);export{Re as default};
