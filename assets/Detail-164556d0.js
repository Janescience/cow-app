import{z as T,P as E,p as M,m as P,_ as U,l as I,F as A,i as z,j as J,f as K,N as R,v as Y,C as G,S as H,c as m,w as r,E as c,o as n,d as i,s as l,h as C,t as u,k as p,I as y,J as Q,K as W}from"./index-6a7fe90d.js";import{D as X}from"./Vaccine-885ca7ff.js";import{_ as Z}from"./FormField-71ba500d.js";import{T as $}from"./Table-21a9bd0d.js";import{T as B}from"./alert-abf920eb.js";import{s as S}from"./cow-ae6b6e19.js";import{P as v}from"./protection-f3266d33.js";import{C as ee}from"./cow-23eac885.js";import{_ as te}from"./FormCheckRadioPicker-477704d0.js";const oe={data(){return{protection:{date:new Date,vaccine:{},qty:null,amount:null,remark:"",cows:[]},corral:"",corrals:null,ddlCorral:[{id:"",label:"เลือกคอก"},{id:"all",label:"ทุกคอก"}],cows:[],showCows:!1,showVaccineCond:!1,vaccineCond:"Y",loading:!1,alert:"",search:"",alertSubmitCow:"",status:S,confirmObj:{text:"",func:null,id:null,dataSelected:null,modal:!1},checked:{label:{value:"name"},code:{value:"code"}},datas:[{label:"รหัสโค",value:"code"},{label:"ชื่อโค",value:"name"},{label:"คอก",class:"text-center",value:"corral"},{label:"สถานะ",func:e=>S()[e.status].label}],buttons:[{label:"ลบ",type:"delete",color:"danger"}]}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},resultSearch(){return this.search?this.cows.filter(e=>this.search.toLowerCase().split(" ").every(o=>e.name.toLowerCase().includes(o))):this.cows}},watch:{"protection.qty"(e){e&&(this.protection.amount=e*this.protection.vaccine.amount)},corral(e){if(e){let o=[];if(e=="all")for(let s of Object.keys(this.corrals))console.log(this.corrals[s]),o.push(...this.corrals[s]),this.cows.push(...this.corrals[s]);else o=[...this.corrals[e]],this.cows=[...this.corrals[e]];o.forEach(s=>{this.protection.cows.forEach(h=>{if(s.code===h.code){let t=this.cows.map(d=>d.code).indexOf(s.code);t!==-1&&this.cows.splice(t,1)}})}),this.cows.length==0?this.alertSubmitCow="โคทั้งหมดของคอกนี้ถูกเลือกให้ฉีดวัคซีนแล้ว":this.alertSubmitCow=""}else this.showVaccineCond=!1},vaccineCond(e){e=="N"?this.showCows=!0:this.showCows=!1}},created(){this.getCorrals(),this.$route.params.id&&this.$route.params.id!="add"&&this.getProtection()},methods:{async getProtection(){const e=await v.get(this.$route.params.id);e&&(this.protection=e.data.protection,this.protection.date=new Date(this.protection.date))},clear(){this.protection.date=new Date,this.protection.vaccine={},this.protection.qty=null,this.protection.amount=null,this.protection.remark="",this.protection.cows=[],this.corral="",this.cows=[],this.showCows=!1},cancelConfirm(){this.protection.cows.length>0?this.confirm("มีรายการโคฉีดวัคซีนยังไม่ได้บันทึก ยืนยันยกเลิกใช่หรือไม่ ?",null,null,this.cancel):this.cancel()},async submit(){this.loading=!0,this.alert="";try{if(this.$route.params.id==="add"){const e=await v.create(this.protection);e&&(this.loading=!1,this.$router.push({name:"protectionDetail",params:{id:e.data._id}}))}else await v.update(this.protection._id,this.protection)&&(this.loading=!1);B.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(e){console.error("Error : ",e),this.clear(),this.loading=!1,this.alert=await e.response.data.message,B.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},async getCorrals(){const e=await ee.all();if(e){const o=e.data.cows;this.corrals=E.groupBy(o,"corral");for(let s of Object.keys(this.corrals))this.ddlCorral.push({id:s,label:s})}},removeCow(e){let o=this.cows.indexOf(e);o!==-1&&(this.cows.splice(o,1),this.search="")},addCow(e){this.protection.cows.filter(s=>s.code==e.code).length>0?this.alertSubmitCow="โคซ้ำ กรุณาเลือกโคใหม่":(e.new=!0,this.protection.qty+=1,this.protection.cows.push(e),this.alertSubmitCow="",this.removeCow(e))},removeSubmitCow(e){const o=this.protection.cows.filter(h=>h._id===e);let s=this.protection.cows.map(h=>h._id).indexOf(e);s!==-1&&(this.protection.cows.splice(s,1),this.protection.qty=this.protection.cows.length,o[0].corral==this.corral&&this.cows.push(o[0]))},removeSelected(e){for(let o of e){let s=this.protection.cows.indexOf(o);s!==-1&&this.protection.cows.splice(s,1)}},submitCowConfirm(){let e=!1;this.protection.cows.forEach(o=>{this.cows.forEach(s=>{o.code==s.code&&(e=!0)})}),e?this.alertSubmitCow="คอกนี้มีโคซ้ำ กรุณาเลือกคอกใหม่":this.confirm("ยืนยันเลือกโคทั้งหมดใช่หรือไม่ ?",null,null,this.submitCow)},submitCow(){this.protection.qty+=this.cows.length,this.protection.cows.push(...this.cows),this.cows=[],this.corral="",this.showCows=!1,this.alertSubmitCow=""},resetConfirm(){this.confirm("ยืนยันล้างรายการโคฉีดวัคซีนทั้งหมดใช่หรือไม่ ?",null,null,this.reset)},reset(){this.protection.cows=[],this.protection.qty=""},confirm(e,o,s,h){this.confirmObj.text=e,this.confirmObj.func=h,this.confirmObj.id=o,this.confirmObj.dataSelected=s,this.confirmObj.modal=!0}},components:{BaseButton:M,BaseButtons:P,CardBox:U,BaseDivider:I,OverlayLayer:A,FormField:Z,FormControl:z,NotificationBar:J,BaseLevel:K,FormCheckRadioPicker:te,BaseIcon:R,DDLVaccine:X,CardBoxModal:Y,LayoutAuthenticated:G,SectionMain:H,Table:$},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},se={class:"grid mb-3 px-3 lg:px-0 grid-flow-col"},le={class:"flex"},ie={class:"text-lg"},ae={class:"grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-5"},re={class:"flex grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 items-stretch border-b border-gray-100 dark:border-gray-800"},ce={class:"flex items-center py-3 grow font-bold"},ne={key:0,class:"overflow-x-hidden overflow-y-auto max-h-52"},de=l("thead",null,[l("tr",null,[l("th",{class:"whitespace-nowrap text-center"}," รหัสโค "),l("th",{class:"whitespace-nowrap text-center"}," ชื่อโค "),l("th",{class:"whitespace-nowrap text-center"}," สถานะ "),l("th")])],-1),ue={"data-label":"รหัสโค"},he={"data-label":"ชื่อโค"},me={"data-label":"สถานะ"},pe={class:"lg:w-6 whitespace-nowrap"};function fe(e,o,s,h,t,d){const V=c("BaseIcon"),f=c("BaseButton"),_=c("BaseButtons"),b=c("FormControl"),g=c("FormField"),D=c("DDLVaccine"),k=c("CardBox"),x=c("NotificationBar"),O=c("BaseDivider"),j=c("Table"),F=c("CardBoxModal"),q=c("SectionMain"),L=c("LayoutAuthenticated");return n(),m(L,null,{default:r(()=>[i(q,null,{default:r(()=>[l("section",se,[l("div",le,[l("h1",ie,[i(V,{path:"needle",size:"26"}),C(" รายละเอียดการป้องกัน/บำรุง "+u(this.$route.params.id!="add"?"(แก้ไข)":""),1)])]),i(_,{class:"text-sm lg:text-base",type:"justify-end"},{default:r(()=>[i(f,{class:"lg:p-2 p-1 lg:visible invisible",label:"ย้อนกลับ",color:"light",onClick:o[0]||(o[0]=w=>this.$router.push("/manage/protection"))}),i(f,{label:"บันทึก",color:"success",onClick:d.submit,disabled:t.protection.cows.length<=0,loading:t.loading},null,8,["onClick","disabled","loading"])]),_:1})]),i(k,{title:"ข้อมูลการป้องกัน/บำรุง",class:"shadow-lg w-full mb-3","header-icon":"",form:""},{default:r(()=>{var w;return[l("div",ae,[i(g,{label:"วันที่",help:"* ห้ามว่าง"},{default:r(()=>[i(b,{modelValue:t.protection.date,"onUpdate:modelValue":o[1]||(o[1]=a=>t.protection.date=a),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),i(g,{label:"วัคซีน/ยา",help:"* ห้ามว่าง",class:"col-span-2"},{default:r(()=>[i(D,{modelValue:t.protection.vaccine,"onUpdate:modelValue":o[2]||(o[2]=a=>t.protection.vaccine=a),valueType:"object"},null,8,["modelValue"])]),_:1}),(w=t.protection.vaccine)!=null&&w.code?(n(),m(g,{key:0,label:"คอก"},{default:r(()=>[i(b,{modelValue:t.corral,"onUpdate:modelValue":o[3]||(o[3]=a=>t.corral=a),options:t.ddlCorral,required:""},null,8,["modelValue","options"])]),_:1})):p("",!0)]),this.cows.length>0?(n(),m(k,{key:0,title:"",class:"shadow-lg dark:bg-slate-700","header-icon":""},{default:r(()=>[l("header",re,[l("p",ce," เลือกโค ( "+u(t.corral==="all"?"ทุกคอก":"คอก "+t.corral)+" / "+u(t.cows.length)+" ตัว) ",1),i(b,{modelValue:t.search,"onUpdate:modelValue":o[4]||(o[4]=a=>t.search=a),icon:"magnify",class:"col-end-2 lg:col-end-7",placeholder:"ค้นหาชื่อโค"},null,8,["modelValue"])]),this.cows.length>0?(n(),y("div",ne,[l("table",null,[de,l("tbody",null,[(n(!0),y(Q,null,W(d.resultSearch,a=>(n(),y("tr",{key:a._id},[l("td",ue,u(a.code),1),l("td",he,u(a.name),1),l("td",me,u(t.status()[a.status].label),1),l("td",pe,[i(_,{type:"justify-end lg:justify-start","no-wrap":""},{default:r(()=>[i(f,{color:"success",label:"เลือก",small:"",onClick:N=>d.addCow(a)},null,8,["onClick"]),i(f,{color:"danger",label:"ลบ",small:"",onClick:N=>d.removeCow(a)},null,8,["onClick"])]),_:2},1024)])]))),128))])])])):p("",!0)]),_:1})):p("",!0),t.alertSubmitCow?(n(),m(x,{key:1,color:"warning",outline:"",icon:"alertCircleOutline"},{default:r(()=>[C(u(t.alertSubmitCow),1)]),_:1})):p("",!0),this.cows.length>0?(n(),m(O,{key:2})):p("",!0),this.cows.length>0?(n(),m(_,{key:3,type:"justify-center"},{default:r(()=>[i(f,{onClick:d.submitCowConfirm,label:"เลือกทั้งหมด",color:"info"},null,8,["onClick"])]),_:1})):p("",!0),t.alert?(n(),m(x,{key:4,color:"danger",outline:"",icon:"alertCircleOutline"},{default:r(()=>[C(u(t.alert),1)]),_:1})):p("",!0)]}),_:1}),i(j,{title:"รายการโคฉีดวัคซีน"+(t.protection.qty?" ("+t.protection.qty+" ตัว / "+t.protection.amount+" บาท)":""),"has-checkbox":"","checked-data":t.checked,items:t.protection.cows,datas:t.datas,buttons:t.buttons,onDelete:d.removeSubmitCow,onDeleteSelected:d.removeSelected,loading:t.loading},null,8,["title","checked-data","items","datas","buttons","onDelete","onDeleteSelected","loading"]),i(F,{modelValue:t.confirmObj.modal,"onUpdate:modelValue":o[5]||(o[5]=w=>t.confirmObj.modal=w),title:"ยืนยันอีกครั้ง","button-label":"ยืนยัน",onConfirm:t.confirmObj.func,"has-cancel":"","has-button":""},{default:r(()=>[l("p",null,u(t.confirmObj.text),1)]),_:1},8,["modelValue","onConfirm"])]),_:1})]),_:1})}const Be=T(oe,[["render",fe]]);export{Be as default};
