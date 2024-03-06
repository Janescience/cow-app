import{z as L,X as D,B as q,n as Y,m as I,_ as R,l as E,G as P,i as z,j as H,f as G,R as X,O as J,F as o,H as S,I as F,o as c,c as u,w as i,d as r,q as M,h as g,t as d,k as f,e as K,C as Q,D as W,E as Z,T as j}from"./index-5292fd0b.js";import{C as $}from"./Criteria-41c6bd7b.js";import{_ as ee}from"./FormField-d30f3da3.js";import{D as te}from"./Cow-ffd88f6e.js";import{g as y}from"./age-calculate-3b5fe841.js";import{T as A}from"./alert-6732d737.js";import{B as C,s as ae,o as le}from"./birth-0398fb3d.js";import"./CardBoxCollapse-6f7fa178.js";import"./Recipe-c7712848.js";import"./Vaccine-6072ed7a.js";import"./cow-ab19f855.js";const re={data(){return{birth:{sex:"",overgrown:"",birthDate:new Date,drugDate:D(new Date,15),washDate:D(new Date,29),calf:{name:""},status:"",reproduction:"",gestAge:null},show:{cow:null,seq:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user}},watch:{data:{handler(e,a){e&&(this.birth=e,this.birth.calf||(this.birth.calf={}),this.birth.birthDate=new Date(e.birthDate),this.birth.drugDate=e.drugDate?new Date(e.drugDate):null,this.birth.washDate=e.washDate?new Date(e.washDate):null)}},"birth.birthDate"(e){this.birth.status=="B"&&(this.birth.drugDate=D(e,15))},"birth.drugDate"(e){this.birth.status=="B"&&(this.birth.washDate=D(e,14))}},methods:{clear(){this.birth={}},confirmCancel(e){this.value=!1,this.$emit(e),this.$emit("update:data",null)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){var e;this.loading=!0,this.alert="";try{this.birth.gestAge=y((e=this.birth)==null?void 0:e.pregnantDate,this.birth.birthDate).ageNumber,this.birth.overgrown==="N"&&(this.birth.drugDate=null,this.birth.washDate=null),this.birth.status=="P"&&(this.birth.sex="",this.birth.drugDate=null,this.birth.washDate=null),await C.create(this.birth._id,this.birth)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),A.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(a){console.error("Error : ",a),this.loading=!1,this.alert=a.response.data.message}},calAge(e){return y(e).ageString},formatDate(e){return q(e).format("DD/MM/YYYY")}},components:{BaseButton:Y,BaseButtons:I,CardBox:R,BaseDivider:E,OverlayLayer:P,FormField:ee,FormControl:z,NotificationBar:H,BaseLevel:G,DDLCow:te,FormCheckRadioPicker:X,BaseIcon:J},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},ie={class:"grid grid-cols-2 lg:grid-cols-3 gap-8"},oe=["href"];function se(e,a,_,N,t,s){const w=o("BaseIcon"),h=o("BaseLevel"),m=o("FormControl"),n=o("FormField"),b=o("FormCheckRadioPicker"),v=o("NotificationBar"),B=o("BaseDivider"),V=o("BaseButton"),T=o("BaseButtons"),O=o("CardBox"),U=o("OverlayLayer");return S((c(),u(U,null,{default:i(()=>[S(r(O,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"การคลอดลูก",class:"shadow-lg w-full lg:w-3/5 z-50","header-icon":"close",modal:"",form:"",onSubmit:K(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:i(()=>{var x,k;return[M("div",ie,[r(h,{type:"justify-start"},{default:i(()=>{var l,p;return[r(w,{path:"cow",size:"24",class:"mr-3"}),g(" "+d((l=t.birth.cow)==null?void 0:l.code)+" - "+d((p=t.birth.cow)==null?void 0:p.name),1)]}),_:1}),r(h,{type:"justify-start"},{default:i(()=>{var l,p;return[g(" สืบพันธุ์ครั้งที่ "+d((p=(l=t.birth)==null?void 0:l.reproduction)==null?void 0:p.seq),1)]}),_:1}),r(h,{type:"justify-start"},{default:i(()=>{var l;return[g(" ตั้งครรภ์ "+d(s.formatDate((l=t.birth)==null?void 0:l.pregnantDate)),1)]}),_:1}),r(h,{type:"justify-start"},{default:i(()=>{var l;return[g(" อายุครรภ์ "+d(s.calAge((l=t.birth)==null?void 0:l.pregnantDate,t.birth.birthDate)),1)]}),_:1}),r(n,{label:"คลอด",help:"* ห้ามว่าง"},{default:i(()=>[r(m,{modelValue:t.birth.birthDate,"onUpdate:modelValue":a[0]||(a[0]=l=>t.birth.birthDate=l),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),r(n,{label:"สถานะ"},{default:i(()=>[r(b,{modelValue:t.birth.status,"onUpdate:modelValue":a[1]||(a[1]=l=>t.birth.status=l),type:"radio",options:{B:"คลอดแล้ว",P:"ตั้งครรภ์",A:"แท้ง"}},null,8,["modelValue"])]),_:1}),t.birth.status=="B"?(c(),u(n,{key:0,label:"เพศ"},{default:i(()=>[r(b,{modelValue:t.birth.sex,"onUpdate:modelValue":a[2]||(a[2]=l=>t.birth.sex=l),type:"radio",options:{M:"เพศผู้",F:"เพศเมีย"}},null,8,["modelValue"])]),_:1})):f("",!0),t.birth.status=="B"&&t.birth.sex=="F"&&!((x=t.birth.calf)!=null&&x._id)?(c(),u(n,{key:1,label:"ชื่อลูก",help:"* ห้ามว่าง"},{default:i(()=>[r(m,{modelValue:t.birth.calf.name,"onUpdate:modelValue":a[3]||(a[3]=l=>t.birth.calf.name=l),icon:"babyFaceOutline",required:""},null,8,["modelValue"])]),_:1})):t.birth.status=="B"&&t.birth.sex=="F"&&((k=t.birth.calf)!=null&&k._id)?(c(),u(n,{key:2,label:"ลูก"},{default:i(()=>[M("a",{href:"/manage/cow/detail/"+t.birth.calf._id,class:"underline"},d(t.birth.calf.code+" : "+t.birth.calf.name),9,oe)]),_:1})):f("",!0),t.birth.status=="B"?(c(),u(n,{key:3,label:"รก",help:"* ห้ามว่าง"},{default:i(()=>[r(b,{modelValue:t.birth.overgrown,"onUpdate:modelValue":a[4]||(a[4]=l=>t.birth.overgrown=l),type:"radio",options:{Y:"ค้าง",N:"ไม่ค้าง"}},null,8,["modelValue"])]),_:1})):f("",!0),t.birth.overgrown==="Y"?(c(),u(n,{key:4,label:"วันที่ใช้ยาขับ",help:"* ห้ามว่าง (วันที่คลอด + 15 วัน)"},{default:i(()=>[r(m,{modelValue:t.birth.drugDate,"onUpdate:modelValue":a[5]||(a[5]=l=>t.birth.drugDate=l),icon:"calendar",type:"date","lower-limit":t.birth.date},null,8,["modelValue","lower-limit"])]),_:1})):f("",!0),t.birth.overgrown==="Y"?(c(),u(n,{key:5,label:"วันที่ล้างมดลูก",help:"* ห้ามว่าง (วันที่ใช้ยาขับ + 14 วัน)"},{default:i(()=>[r(m,{modelValue:t.birth.washDate,"onUpdate:modelValue":a[6]||(a[6]=l=>t.birth.washDate=l),icon:"calendar",type:"date","lower-limit":t.birth.drugDate},null,8,["modelValue","lower-limit"])]),_:1})):f("",!0)]),t.alert?(c(),u(v,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[g(d(t.alert),1)]),_:1})):f("",!0),r(B),r(T,{type:"justify-center"},{default:i(()=>[r(V,{label:"บันทึก",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),r(V,{label:"ยกเลิก",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]}),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[F,s.value]])]),_:1},512)),[[F,s.value]])}const ne=L(re,[["render",se]]),ce={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"เพศ",value:"sex",options:[{id:"",label:"ทั้งหมด"},{id:"M",label:"ตัวผู้"},{id:"F",label:"ตัวเมีย"}]},{label:"วันที่ตั้งครรภ์",value:"pregnantDate",icon:"calendar",type:"date"},{label:"วันที่คลอด",value:"birthDate",icon:"calendar",type:"date"}],search:{cow:null,birthDate:null,pregnantDate:null,sex:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"รหัสโค",value:"cow.code"},{label:"ชื่อโค",value:"cow.name"},{label:"วันที่ตั้งครรภ์",class:"text-center",value:"pregnantDate",type:"date"},{label:"อายุครรภ์",func:e=>e!=null&&e.sex?y(e==null?void 0:e.pregnantDate,e==null?void 0:e.birthDate).ageString:this.calAge(e==null?void 0:e.pregnantDate)},{label:"วันที่คลอด",class:"text-center",value:"birthDate",type:"date"},{label:"เพศ",class:"text-center",func:e=>ae()[e.sex]},{label:"ลูกวัว",class:"text-center",func:e=>{var a,_;return e.calf?((a=e.calf)==null?void 0:a.code)+" : "+((_=e.calf)==null?void 0:_.name):""}},{label:"รกค้าง",class:"text-center",func:e=>le()[e.overgrown]},{label:"วันที่ใช้ยาขับ",class:"text-center",value:"drugDate",type:"date"},{label:"วันที่ล้างมดลูก",class:"text-center",value:"washDate",type:"date"}],buttons:[{label:"ลบ",type:"delete",color:"danger",condition:e=>!e.sex},{label:"แก้ไข",type:"edit",color:"warning",condition:e=>e.birthDate},{label:"บันทึกการคลอดลูก",color:"info",type:"oth",func:e=>{this.mode="create",this.openModal=!0,this.modalData=e},condition:e=>!e.birthDate}]}},components:{SectionMain:Q,LayoutAuthenticated:W,SectionTitleBarSub:Z,Table:j,Modal:ne,Criteria:$},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(e){this.loading=!0;const a=await C.all(e);this.items=[],a.data&&(this.items=a.data.births),this.loading=!1},async remove(e){this.loading=!0,(await C.delete(e)).data&&(this.getDatas(),A.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},resetData(){this.modalData=null},reset(){this.search.cow=null,this.search.birthDate=null,this.search.pregnantDate=null,this.search.sex="",this.getDatas()},calAge(e){return y(e).ageString}}};function ue(e,a,_,N,t,s){const w=o("SectionTitleBarSub"),h=o("Modal"),m=o("Criteria"),n=o("Table"),b=o("SectionMain"),v=o("LayoutAuthenticated");return c(),u(v,null,{default:i(()=>[r(b,null,{default:i(()=>[r(w,{icon:"babyFaceOutline",title:"การคลอดลูก"}),r(h,{modelValue:t.openModal,"onUpdate:modelValue":a[0]||(a[0]=B=>t.openModal=B),data:s.getDataCopy,mode:t.mode,onConfirm:s.getDatas,onCancel:s.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),r(m,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:t.forms,search:t.search,btnLoading:t.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),r(n,{title:"รายการคลอดลูก","has-checkbox":"","checked-data":t.checked,items:t.items,datas:t.datas,buttons:t.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:e.removeSelected,loading:t.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const ve=L(ce,[["render",ue]]);export{ve as default};