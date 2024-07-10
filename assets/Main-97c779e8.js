import{b as Y,_ as R,a as E,d as P,c as H}from"./BaseDivider-5d6d6cd6.js";import{_ as I}from"./LayoutAuthenticated-188296d3.js";import{_ as z}from"./SectionTitleBarSub-bf101c49.js";import{T as G}from"./Table-eb9e0d2d.js";import{C as J}from"./Criteria-6bddc43b.js";import{v as N,L as D,x as K,h as Q,_ as W,z as u,G as M,H as U,o as n,c,w as i,d as r,j as m,t as b,g as d,f as L,e as X}from"./index-a11eb788.js";import{a as Z}from"./CardBoxModal-4190cff7.js";import{_ as j}from"./FormField-eae473e8.js";import{_ as $}from"./FormControl-913bfab2.js";import{_ as ee}from"./NotificationBar-c518edd8.js";import{D as te}from"./Cow-523e81c3.js";import{g as y}from"./age-calculate-3b5fe841.js";import{T as B}from"./alert-eb15281a.js";import{B as V,s as le,o as ae}from"./birth-234183fc.js";import{_ as re}from"./FormCheckRadioPicker-e4bf5636.js";import"./UserAvatar-8818f699.js";import"./CardBoxCollapse-432b6c08.js";import"./Recipe-226a7e18.js";import"./Vaccine-69f9d8fc.js";import"./Corral-a31b28fc.js";import"./cow-1c284aa3.js";const ie={data(){return{birth:{sex:"",overgrown:"",birthDate:new Date,drugDate:D(new Date,15),washDate:D(new Date,29),calf:{name:""},status:"",reproduction:"",gestAge:null},show:{cow:null,seq:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},watch:{data:{handler(t,l){t&&(this.birth=t,this.birth.calf||(this.birth.calf={}),this.birth.birthDate=new Date(t.birthDate),this.birth.drugDate=t.drugDate?new Date(t.drugDate):null,this.birth.washDate=t.washDate?new Date(t.washDate):null)}},"birth.birthDate"(t){this.birth.status=="B"&&(this.birth.drugDate=D(t,15))},"birth.drugDate"(t){this.birth.status=="B"&&(this.birth.washDate=D(t,14))}},methods:{clear(){this.birth={}},confirmCancel(t){this.value=!1,this.$emit(t),this.$emit("update:data",null)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){var t;this.loading=!0,this.alert="";try{this.birth.gestAge=y((t=this.birth)==null?void 0:t.pregnantDate,this.birth.birthDate).ageNumber,this.birth.overgrown==="N"&&(this.birth.drugDate=null,this.birth.washDate=null),this.birth.status=="P"&&(this.birth.sex="",this.birth.drugDate=null,this.birth.washDate=null),await V.create(this.birth._id,this.birth)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),B.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(l){console.error("Error : ",l),this.loading=!1,B.fire({icon:"error",title:l.response.data.err.message})}},calAge(t,l){return y(t,l).ageString},formatDate(t){return K(t).format("DD/MM/YYYY")}},components:{BaseButton:Y,BaseButtons:Q,CardBox:R,BaseDivider:E,OverlayLayer:Z,FormField:j,FormControl:$,NotificationBar:ee,BaseLevel:W,DDLCow:te,FormCheckRadioPicker:re,BaseIcon:P},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},oe={class:"grid grid-cols-2 lg:grid-cols-5 gap-5 dark:bg-gray-600 bg-gray-200 rounded p-2 text-center"},se={class:"dark:text-gray-300"},ne={class:"dark:text-gray-300"},ce={class:"dark:text-gray-300"},ue={class:"dark:text-gray-300"},de={class:"dark:text-gray-300"},he={class:"grid grid-cols-2 lg:grid-cols-4 gap-5"},me=["href"];function be(t,l,p,T,e,s){const o=u("FormField"),g=u("BaseDivider"),f=u("FormCheckRadioPicker"),h=u("FormControl"),w=u("NotificationBar"),_=u("BaseButton"),v=u("BaseButtons"),q=u("CardBox"),O=u("OverlayLayer");return M((n(),c(O,null,{default:i(()=>[M(r(q,{title:"บันทึกการติดตามโคท้อง/คลอดลูก",class:"shadow-lg w-full lg:w-3/5 z-50","header-icon":"close",modal:"",form:"",onSubmit:X(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:i(()=>{var k,x,C,S,F;return[m("div",oe,[r(o,{label:"รหัสโค",class:"text-black"},{default:i(()=>{var a;return[m("div",se,b((a=e.birth.cow)==null?void 0:a.code),1)]}),_:1}),r(o,{label:"ชื่อโค",class:"text-black"},{default:i(()=>{var a;return[m("div",ne,b((a=e.birth.cow)==null?void 0:a.name),1)]}),_:1}),r(o,{label:"ครั้งที่",class:"text-black"},{default:i(()=>{var a,A;return[m("div",ce,b((A=(a=e.birth)==null?void 0:a.reproduction)==null?void 0:A.seq),1)]}),_:1}),r(o,{label:"วันที่ตั้งครรภ์",class:"text-black"},{default:i(()=>{var a;return[m("div",ue,b(s.formatDate((a=e.birth)==null?void 0:a.pregnantDate)),1)]}),_:1}),r(o,{label:"อายุครรภ์",class:"text-black",help:"วันที่ตั้งครรภ์-ปัจจุบัน"},{default:i(()=>{var a;return[m("div",de,b(s.calAge((a=e.birth)==null?void 0:a.pregnantDate,new Date)),1)]}),_:1})]),r(g),m("div",he,[r(o,{label:"ผลการตั้งครรภ์"},{default:i(()=>[r(f,{modelValue:e.birth.status,"onUpdate:modelValue":l[0]||(l[0]=a=>e.birth.status=a),type:"radio",options:{B:"คลอด",A:"แท้ง"}},null,8,["modelValue"])]),_:1}),e.birth.status==="B"||e.birth.status==="A"?(n(),c(o,{key:0,label:"วันที่"+(e.birth.status==="B"?"คลอด":"แท้ง"),help:"Default อายุครรภ์ 9.15 เดือน"},{default:i(()=>[r(h,{modelValue:e.birth.birthDate,"onUpdate:modelValue":l[1]||(l[1]=a=>e.birth.birthDate=a),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1},8,["label"])):d("",!0),e.birth.status==="B"||e.birth.status==="A"?(n(),c(o,{key:1,label:"อายุครรภ์",help:"วันที่ตั้งครรภ์-วันที่คลอด"},{default:i(()=>{var a;return[L(b(s.calAge((a=e.birth)==null?void 0:a.pregnantDate,e.birth.birthDate)),1)]}),_:1})):d("",!0),e.birth.status==="B"||e.birth.status==="A"?(n(),c(o,{key:2,label:"เพศ",help:"* ห้ามว่าง"},{default:i(()=>[r(f,{modelValue:e.birth.sex,"onUpdate:modelValue":l[2]||(l[2]=a=>e.birth.sex=a),type:"radio",options:{M:"ตัวผู้",F:"ตัวเมีย"}},null,8,["modelValue"])]),_:1})):d("",!0),e.birth.status=="B"&&!((k=e.birth.calf)!=null&&k._id)?(n(),c(o,{key:3,label:"พ่อพันธุ์/น้ำเชื้อ",help:"* ห้ามว่าง"},{default:i(()=>[r(h,{modelValue:e.birth.dad,"onUpdate:modelValue":l[3]||(l[3]=a=>e.birth.dad=a),icon:"babyFaceOutline",required:""},null,8,["modelValue"])]),_:1})):d("",!0),e.birth.status=="B"&&!((x=e.birth.calf)!=null&&x._id)?(n(),c(o,{key:4,label:"รหัสลูกโค",help:"* ห้ามว่าง"},{default:i(()=>[r(h,{modelValue:e.birth.calf.code,"onUpdate:modelValue":l[4]||(l[4]=a=>e.birth.calf.code=a),icon:"babyFaceOutline",required:""},null,8,["modelValue"])]),_:1})):d("",!0),e.birth.status=="B"&&!((C=e.birth.calf)!=null&&C._id)?(n(),c(o,{key:5,label:"ชื่อลูกโค",help:"* ห้ามว่าง"},{default:i(()=>[r(h,{modelValue:e.birth.calf.name,"onUpdate:modelValue":l[5]||(l[5]=a=>e.birth.calf.name=a),icon:"babyFaceOutline",required:""},null,8,["modelValue"])]),_:1})):d("",!0),e.birth.status=="B"&&!((S=e.birth.calf)!=null&&S._id)?(n(),c(o,{key:6,label:"คอกลูกโค",help:"* ห้ามว่าง"},{default:i(()=>[r(h,{modelValue:e.birth.calf.corral,"onUpdate:modelValue":l[6]||(l[6]=a=>e.birth.calf.corral=a),icon:"barn",required:""},null,8,["modelValue"])]),_:1})):e.birth.status=="B"&&((F=e.birth.calf)!=null&&F._id)?(n(),c(o,{key:7,label:"ลูกโค"},{default:i(()=>[m("a",{href:"/manage/cow/detail/"+e.birth.calf._id,class:"underline"},b(e.birth.calf.code+" : "+e.birth.calf.name),9,me)]),_:1})):d("",!0),e.birth.status=="B"||e.birth.status==="A"?(n(),c(o,{key:8,label:"รก",help:"* ห้ามว่าง"},{default:i(()=>[r(f,{modelValue:e.birth.overgrown,"onUpdate:modelValue":l[7]||(l[7]=a=>e.birth.overgrown=a),type:"radio",options:{Y:"ค้าง",N:"ไม่ค้าง"}},null,8,["modelValue"])]),_:1})):d("",!0),e.birth.overgrown==="Y"?(n(),c(o,{key:9,label:"วันที่ใช้ยาขับ",help:"* ห้ามว่าง (วันที่คลอด + 15 วัน)"},{default:i(()=>[r(h,{modelValue:e.birth.drugDate,"onUpdate:modelValue":l[8]||(l[8]=a=>e.birth.drugDate=a),icon:"calendar",type:"date","lower-limit":e.birth.date},null,8,["modelValue","lower-limit"])]),_:1})):d("",!0),e.birth.overgrown==="Y"?(n(),c(o,{key:10,label:"วันที่ล้างมดลูก",help:"* ห้ามว่าง (วันที่ใช้ยาขับ + 14 วัน)"},{default:i(()=>[r(h,{modelValue:e.birth.washDate,"onUpdate:modelValue":l[9]||(l[9]=a=>e.birth.washDate=a),icon:"calendar",type:"date","lower-limit":e.birth.drugDate},null,8,["modelValue","lower-limit"])]),_:1})):d("",!0),e.birth.status==="A"?(n(),c(o,{key:11,label:"สาเหตุ"},{default:i(()=>[r(h,{modelValue:e.birth.reason,"onUpdate:modelValue":l[10]||(l[10]=a=>e.birth.reason=a),type:"textarea"},null,8,["modelValue"])]),_:1})):d("",!0)]),e.alert?(n(),c(w,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[L(b(e.alert),1)]),_:1})):d("",!0),r(g),r(v,{type:"justify-center"},{default:i(()=>[r(_,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),r(_,{label:"ยกเลิก",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]}),_:1},8,["onSubmit","onHeaderIconClick"]),[[U,s.value]])]),_:1},512)),[[U,s.value]])}const fe=N(ie,[["render",be]]),pe={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"เพศ",value:"sex",options:[{id:"",label:"ทั้งหมด"},{id:"M",label:"ตัวผู้"},{id:"F",label:"ตัวเมีย"}]},{label:"วันที่ตั้งครรภ์",value:"pregnantDate",icon:"calendar",type:"date"},{label:"วันที่คลอด",value:"birthDate",icon:"calendar",type:"date"}],search:{cow:null,birthDate:null,pregnantDate:null,sex:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"รหัสโค",value:"cow.code"},{label:"ชื่อโค",value:"cow.name"},{label:"วันที่ตั้งครรภ์",class:"text-center",value:"pregnantDate",type:"date"},{label:"อายุครรภ์",func:t=>t!=null&&t.sex?y(t==null?void 0:t.pregnantDate,t==null?void 0:t.birthDate).ageString:this.calAge(t==null?void 0:t.pregnantDate)},{label:"วันที่คลอด",class:"text-center",value:"birthDate",type:"date"},{label:"เพศ",class:"text-center",func:t=>le()[t.sex]},{label:"ลูกวัว",class:"text-center",func:t=>{var l,p;return t.calf?((l=t.calf)==null?void 0:l.code)+" : "+((p=t.calf)==null?void 0:p.name):""}},{label:"รกค้าง",class:"text-center",func:t=>ae()[t.overgrown]},{label:"วันที่ใช้ยาขับ",class:"text-center",value:"drugDate",type:"date"},{label:"วันที่ล้างมดลูก",class:"text-center",value:"washDate",type:"date"}],buttons:[{label:"ลบ",type:"delete",color:"danger",condition:t=>!t.sex},{label:"แก้ไข",type:"edit",color:"warning",condition:t=>t.birthDate},{label:"บันทึกการคลอดลูก",color:"info",type:"oth",func:t=>{this.mode="create",this.openModal=!0,this.modalData=t},condition:t=>!t.birthDate}]}},components:{SectionMain:H,LayoutAuthenticated:I,SectionTitleBarSub:z,Table:G,Modal:fe,Criteria:J},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const l=await V.all(t);this.items=[],l.data&&(this.items=l.data.births),this.loading=!1},async remove(t){this.loading=!0,(await V.delete(t)).data&&(this.getDatas(),B.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(t){this.modalData=t,this.mode="edit",this.openModal=!0},resetData(){this.modalData=null},reset(){this.search.cow=null,this.search.birthDate=null,this.search.pregnantDate=null,this.search.sex="",this.getDatas()},calAge(t){return y(t).ageString}}};function ge(t,l,p,T,e,s){const o=u("SectionTitleBarSub"),g=u("Modal"),f=u("Criteria"),h=u("Table"),w=u("SectionMain"),_=u("LayoutAuthenticated");return n(),c(_,null,{default:i(()=>[r(w,null,{default:i(()=>[r(o,{icon:"babyFaceOutline",title:"การติดตามโคท้อง/คลอดลูก"}),r(g,{modelValue:e.openModal,"onUpdate:modelValue":l[0]||(l[0]=v=>e.openModal=v),data:s.getDataCopy,mode:e.mode,onConfirm:s.getDatas,onCancel:s.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),r(f,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:e.forms,search:e.search,btnLoading:e.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),r(h,{title:"รายการคลอดลูก","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:t.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const Re=N(pe,[["render",ge]]);export{Re as default};
