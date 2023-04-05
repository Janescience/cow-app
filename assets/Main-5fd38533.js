import{z as k,W as g,B as T,p as A,m as U,_ as O,l as Y,F as q,i as E,j as I,f as P,N as R,E as i,G as V,H as x,o as c,c as u,w as r,d as o,s as z,h as _,t as m,k as b,e as H,S as j,C as G,D as W}from"./index-19f2b6c9.js";import{T as J}from"./Table-d16bbf6a.js";import{C as K}from"./Criteria-71e32843.js";import{_ as Q}from"./FormField-a8e87a70.js";import{D as X}from"./Cow-bfcb247e.js";import{g as S}from"./age-calculate-bb92e417.js";import{T as Z}from"./alert-461bf33c.js";import{B as w,s as $,o as ee}from"./birth-981b1f18.js";import{_ as te}from"./FormCheckRadioPicker-f20a73e2.js";import"./cow-4a6ea16d.js";const ae={data(){return{birth:{sex:"",overgrown:"",birthDate:new Date,drugDate:g(new Date,15),washDate:g(new Date,29),newCow:{name:"",mom:""},status:"",reproduction:""},show:{cow:null,seq:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user}},watch:{data(e){e&&(this.birth=e,this.birth.birthDate=new Date(e.birthDate),this.birth.drugDate=e.drugDate?new Date(e.drugDate):null,this.birth.washDate=e.washDate?new Date(e.washDate):null)},"birth.birthDate"(e){this.birth.status=="B"&&(this.birth.drugDate=g(e,15))},"birth.drugDate"(e){this.birth.status=="B"&&(this.birth.washDate=g(e,14))}},methods:{confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.confirmCancel("confirm")},cancel(){this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.birth.overgrown==="N"&&(this.birth.drugDate=null,this.birth.washDate=null),this.mode==="create"?await w.create(this.birth._id,this.birth)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):(this.birth.status=="P"&&(this.birth.sex="",this.birth.drugDate=null,this.birth.washDate=null),await w.update(this.birth._id,this.birth)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),Z.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})))}catch(e){console.error("Error : ",e),this.loading=!1,this.alert=e.response.data.message}},calAge(e){return S(e)},formatDate(e){return T(e).format("DD/MM/YYYY")}},components:{BaseButton:A,BaseButtons:U,CardBox:O,BaseDivider:Y,OverlayLayer:q,FormField:Q,FormControl:E,NotificationBar:I,BaseLevel:P,DDLCow:X,FormCheckRadioPicker:te,BaseIcon:R},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},le={class:"grid grid-cols-2 lg:grid-cols-3 gap-8"};function oe(e,l,D,F,t,s){const y=i("BaseIcon"),d=i("BaseLevel"),h=i("FormControl"),n=i("FormField"),f=i("FormCheckRadioPicker"),v=i("NotificationBar"),B=i("BaseDivider"),C=i("BaseButton"),M=i("BaseButtons"),N=i("CardBox"),L=i("OverlayLayer");return V((c(),u(L,null,{default:r(()=>[V(o(N,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"การคลอดลูก",class:"shadow-lg w-full lg:w-3/5 z-50","header-icon":"close",modal:"",form:"",onSubmit:H(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:r(()=>[z("div",le,[o(d,{type:"justify-start"},{default:r(()=>{var a,p;return[o(y,{path:"cow",size:"24",class:"mr-3"}),_(" "+m((a=t.birth.cow)==null?void 0:a.code)+" - "+m((p=t.birth.cow)==null?void 0:p.name),1)]}),_:1}),o(d,{type:"justify-start"},{default:r(()=>{var a,p;return[_(" สืบพันธุ์ครั้งที่ "+m((p=(a=t.birth)==null?void 0:a.reproduction)==null?void 0:p.seq),1)]}),_:1}),o(d,{type:"justify-start"},{default:r(()=>{var a;return[_(" ตั้งครรภ์ "+m(s.formatDate((a=t.birth)==null?void 0:a.pregnantDate)),1)]}),_:1}),o(d,{type:"justify-start"},{default:r(()=>{var a;return[_(" อายุครรภ์ "+m(s.calAge((a=t.birth)==null?void 0:a.pregnantDate,t.birth.birthDate)),1)]}),_:1}),o(n,{label:"คลอด",help:"* ห้ามว่าง"},{default:r(()=>[o(h,{modelValue:t.birth.birthDate,"onUpdate:modelValue":l[0]||(l[0]=a=>t.birth.birthDate=a),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),o(n,{label:"สถานะ"},{default:r(()=>[o(f,{modelValue:t.birth.status,"onUpdate:modelValue":l[1]||(l[1]=a=>t.birth.status=a),type:"radio",options:{B:"คลอดแล้ว",P:"ตั้งครรภ์"}},null,8,["modelValue"])]),_:1}),t.birth.status=="B"?(c(),u(n,{key:0,label:"เพศ"},{default:r(()=>[o(f,{modelValue:t.birth.sex,"onUpdate:modelValue":l[2]||(l[2]=a=>t.birth.sex=a),type:"radio",options:{M:"เพศผู้",F:"เพศเมีย"}},null,8,["modelValue"])]),_:1})):b("",!0),t.birth.status=="B"&&t.birth.sex=="F"?(c(),u(n,{key:1,label:"ชื่อลูก",help:"* ห้ามว่าง"},{default:r(()=>[o(h,{modelValue:t.birth.newCow.name,"onUpdate:modelValue":l[3]||(l[3]=a=>t.birth.newCow.name=a),icon:"babyFaceOutline",required:""},null,8,["modelValue"])]),_:1})):b("",!0),t.birth.status=="B"?(c(),u(n,{key:2,label:"รก",help:"* ห้ามว่าง"},{default:r(()=>[o(f,{modelValue:t.birth.overgrown,"onUpdate:modelValue":l[4]||(l[4]=a=>t.birth.overgrown=a),type:"radio",options:{Y:"ค้าง",N:"ไม่ค้าง"}},null,8,["modelValue"])]),_:1})):b("",!0),t.birth.overgrown==="Y"?(c(),u(n,{key:3,label:"วันที่ใช้ยาขับ",help:"* ห้ามว่าง (วันที่คลอด + 15 วัน)"},{default:r(()=>[o(h,{modelValue:t.birth.drugDate,"onUpdate:modelValue":l[5]||(l[5]=a=>t.birth.drugDate=a),icon:"calendar",type:"date","lower-limit":t.birth.date},null,8,["modelValue","lower-limit"])]),_:1})):b("",!0),t.birth.overgrown==="Y"?(c(),u(n,{key:4,label:"วันที่ล้างมดลูก",help:"* ห้ามว่าง (วันที่ใช้ยาขับ + 14 วัน)"},{default:r(()=>[o(h,{modelValue:t.birth.washDate,"onUpdate:modelValue":l[6]||(l[6]=a=>t.birth.washDate=a),icon:"calendar",type:"date","lower-limit":t.birth.drugDate},null,8,["modelValue","lower-limit"])]),_:1})):b("",!0)]),t.alert?(c(),u(v,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:r(()=>[_(m(t.alert),1)]),_:1})):b("",!0),o(B),o(M,{type:"justify-center"},{default:r(()=>[o(C,{label:"บันทึก",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),o(C,{label:"ยกเลิก",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[x,s.value]])]),_:1},512)),[[x,s.value]])}const re=k(ae,[["render",oe]]),ie={data(){return{openModal:!1,birthData:null,items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"เพศ",value:"sex",options:[{id:"",label:"ทั้งหมด"},{id:"M",label:"ตัวผู้"},{id:"F",label:"ตัวเมีย"}]},{label:"วันที่ตั้งครร",value:"pregnantDate",icon:"calendar",type:"date"},{label:"วันที่คลอด",value:"birthDate",icon:"calendar",type:"date"}],search:{cow:null,birthDate:null,pregnantDate:null,sex:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"รหัสโค",value:"cow.code"},{label:"ชื่อโค",value:"cow.name"},{label:"วันที่ตั้งครรภ์",class:"text-center",value:"pregnantDate",type:"date"},{label:"อายุครรภ์",func:e=>this.calAge(e==null?void 0:e.pregnantDate)},{label:"วันที่คลอด",class:"text-center",value:"birthDate",type:"date"},{label:"เพศ",class:"text-center",func:e=>$()[e.sex]},{label:"ลูกวัว",class:"text-center",func:e=>{var l,D;return e.calf?((l=e.calf)==null?void 0:l.code)+" : "+((D=e.calf)==null?void 0:D.name):""}},{label:"รกค้าง",class:"text-center",func:e=>ee()[e.overgrown]},{label:"วันที่ใช้ยาขับ",class:"text-center",value:"drugDate",type:"date"},{label:"วันที่ล้างมดลูก",class:"text-center",value:"washDate",type:"date"}],buttons:[{label:"ลบ",type:"delete",color:"danger",condition:e=>!e.birthDate},{label:"แก้ไข",type:"edit",color:"warning",condition:e=>e.birthDate},{label:"บันทึกการคลอดลูก",color:"info",type:"oth",func:e=>{this.mode="create",this.openModal=!0,this.birthData=e},condition:e=>!e.birthDate}]}},components:{SectionMain:j,LayoutAuthenticated:G,SectionTitleBarSub:W,Table:J,Modal:re,Criteria:K},computed:{user(){return this.$store.state.auth.user}},created(){this.getDatas()},methods:{async getDatas(e){this.loading=!0;const l=await w.all(e);this.items=[],l.data&&(this.items=l.data.births),this.loading=!1},async remove(e){this.loading=!0,(await w.delete(e)).data&&this.getDatas(),this.loading=!1},edit(e){this.birthData=e,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.birthDate=null,this.search.sex=null},calAge(e){return S(e)}}};function se(e,l,D,F,t,s){const y=i("SectionTitleBarSub"),d=i("Modal"),h=i("Criteria"),n=i("Table"),f=i("SectionMain"),v=i("LayoutAuthenticated");return c(),u(v,null,{default:r(()=>[o(f,null,{default:r(()=>[o(y,{icon:"babyFaceOutline",title:"การคลอดลูก"}),o(d,{modelValue:t.openModal,"onUpdate:modelValue":l[0]||(l[0]=B=>t.openModal=B),data:t.birthData,mode:t.mode,onConfirm:s.getDatas},null,8,["modelValue","data","mode","onConfirm"]),o(h,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:t.forms,search:t.search},null,8,["onSearch","onReset","forms","search"]),o(n,{title:"รายการคลอดลูก","has-checkbox":"","checked-data":t.checked,items:t.items,datas:t.datas,buttons:t.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:e.removeSelected,loading:t.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const De=k(ie,[["render",se]]);export{De as default};
