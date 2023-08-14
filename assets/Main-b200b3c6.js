import{z as x,U as m,V as B,p as L,m as R,_ as U,l as F,G as N,i as q,j as O,f as E,F as s,H as k,I as S,o as c,c as d,w as r,d as a,s as A,k as p,h as H,t as I,e as j,C as z,D as G,E as J,T as K}from"./index-51c79a7a.js";import{C as P}from"./Criteria-d1f1bf17.js";import{_ as Q}from"./FormField-b03484b6.js";import{D as W}from"./Cow-9f119f1e.js";import{T as g}from"./alert-d1bf8791.js";import{a as V,r as C,R as h}from"./reproduct-202c40ff.js";import"./CardBoxCollapse-ccd7bb6f.js";import"./FormCheckRadioPicker-135142c6.js";import"./Vaccine-b5b0ea40.js";import"./cow-925303fc.js";const X={data(){return{reproduct:{cow:{},loginDate:new Date,estrusDate:m(new Date,21),matingDate:m(new Date,22),checkDate:B(m(new Date,22),2),dad:"",howTo:"",status:1,result:2},status:V("create"),result:C("create"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user}},watch:{"reproduct.loginDate"(e){this.reproduct.estrusDate=m(e,21)},"reproduct.estrusDate"(e){this.reproduct.matingDate=m(e,1)},"reproduct.matingDate"(e){this.reproduct.checkDate=B(e,2)},"reproduct.result"(e){e==1?this.reproduct.status=4:this.reproduct.status=1},data:{handler(e,l){e&&(this.reproduct=e,this.reproduct.loginDate=e.loginDate?new Date(e.loginDate):null,this.reproduct.estrusDate=e.estrusDate?new Date(e.estrusDate):null,this.reproduct.matingDate=e.matingDate?new Date(e.matingDate):null,this.reproduct.checkDate=e.checkDate?new Date(e.checkDate):null)}}},methods:{clear(){this.reproduct={}},confirmCancel(e){this.clear(),this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await h.create(this.reproduct)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),g.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):await h.update(this.reproduct._id,this.reproduct)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),g.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(e){console.error("Error : ",e),this.loading=!1,this.alert=e.response.data.message}}},components:{BaseButton:L,BaseButtons:R,CardBox:U,BaseDivider:F,OverlayLayer:N,FormField:Q,FormControl:q,NotificationBar:O,BaseLevel:E,DDLCow:W},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},data:{type:Object,default:null}}},Y={class:"grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1"};function Z(e,l,_,b,t,n){const w=s("DDLCow"),i=s("FormField"),u=s("FormControl"),y=s("NotificationBar"),v=s("BaseDivider"),f=s("BaseButton"),D=s("BaseButtons"),M=s("CardBox"),T=s("OverlayLayer");return k((c(),d(T,null,{default:r(()=>[k(a(M,{title:_.mode==="create"?"เพิ่มการสืบพันธุ์":"แก้ไขการสืบพันธุ์",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:j(n.submit,["prevent"]),onHeaderIconClick:n.cancel},{default:r(()=>[A("div",Y,[a(i,{label:"โค",help:"* ห้ามว่าง"},{default:r(()=>[a(w,{modelValue:t.reproduct.cow,"onUpdate:modelValue":l[0]||(l[0]=o=>t.reproduct.cow=o),valueType:"object"},null,8,["modelValue"])]),_:1}),a(i,{label:"พ่อพันธุ์",help:""},{default:r(()=>[a(u,{modelValue:t.reproduct.dad,"onUpdate:modelValue":l[1]||(l[1]=o=>t.reproduct.dad=o),icon:"genderMale"},null,8,["modelValue"])]),_:1}),a(i,{label:"วันที่เข้าระบบสืบพันธุ์",help:"* ห้ามว่าง"},{default:r(()=>[a(u,{modelValue:t.reproduct.loginDate,"onUpdate:modelValue":l[2]||(l[2]=o=>t.reproduct.loginDate=o),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),a(i,{label:"ผล"},{default:r(()=>[a(u,{modelValue:t.reproduct.result,"onUpdate:modelValue":l[3]||(l[3]=o=>t.reproduct.result=o),options:t.result},null,8,["modelValue","options"])]),_:1}),t.reproduct.result==1?(c(),d(i,{key:0,label:"วิธีการรักษา",help:""},{default:r(()=>[a(u,{modelValue:t.reproduct.howTo,"onUpdate:modelValue":l[4]||(l[4]=o=>t.reproduct.howTo=o),icon:"doctor"},null,8,["modelValue"])]),_:1})):p("",!0),t.reproduct.result==2?(c(),d(i,{key:1,label:"วันที่เป็นสัด",help:"* ห้ามว่าง (วันที่เข้าระบบสืบพันธุ์ + 21 วัน)"},{default:r(()=>[a(u,{modelValue:t.reproduct.estrusDate,"onUpdate:modelValue":l[5]||(l[5]=o=>t.reproduct.estrusDate=o),icon:"calendar",type:"date","lower-limit":t.reproduct.loginDate,required:""},null,8,["modelValue","lower-limit"])]),_:1})):p("",!0),t.reproduct.result==2?(c(),d(i,{key:2,label:"วันที่ผสมพันธุ์",help:"* ห้ามว่าง (วันที่เป็นสัด + 24 ชม)"},{default:r(()=>[a(u,{modelValue:t.reproduct.matingDate,"onUpdate:modelValue":l[6]||(l[6]=o=>t.reproduct.matingDate=o),icon:"calendar",type:"date","lower-limit":t.reproduct.estrusDate,required:""},null,8,["modelValue","lower-limit"])]),_:1})):p("",!0),t.reproduct.result==2?(c(),d(i,{key:3,label:"วันที่ตรวจท้อง",help:"* ห้ามว่าง (วันที่ผสมพันธุ์ + 2 เดือน)"},{default:r(()=>[a(u,{modelValue:t.reproduct.checkDate,"onUpdate:modelValue":l[7]||(l[7]=o=>t.reproduct.checkDate=o),icon:"calendar",type:"date","lower-limit":t.reproduct.matingDate,required:""},null,8,["modelValue","lower-limit"])]),_:1})):p("",!0),a(i,{label:"สถานะ"},{default:r(()=>[a(u,{modelValue:t.reproduct.status,"onUpdate:modelValue":l[8]||(l[8]=o=>t.reproduct.status=o),options:t.status},null,8,["modelValue","options"])]),_:1})]),t.alert?(c(),d(y,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:r(()=>[H(I(t.alert),1)]),_:1})):p("",!0),a(v),a(D,{type:"justify-center"},{default:r(()=>[a(f,{label:"บันทึก",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),a(f,{label:"ยกเลิก",color:"danger",onClick:n.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[S,n.value]])]),_:1},512)),[[S,n.value]])}const $=x(X,[["render",Z]]),ee={data(){return{openModal:!1,items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"สถานะ",value:"status",options:V()},{label:"ผล",value:"result",options:C()},{label:"วันที่เข้าระบบสืบพันธุ์",value:"loginDate",icon:"calendar",type:"date"},{label:"วันที่เป็นสัด",value:"estrusDate",icon:"calendar",type:"date"},{label:"วันที่ผสมพันธุ์",value:"matingDate",icon:"calendar",type:"date"},{label:"วันที่ตรวจท้อง",value:"checkDate",icon:"calendar",type:"date"}],search:{cow:null,loginDate:null,estrusDate:null,matingDate:null,checkDate:null,status:"",result:""},loading:!1,mode:"create",modalData:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"รหัสโค",value:"cow.code"},{label:"ชื่อโค",value:"cow.name"},{label:"วันที่เข้าระบบสืบพันธุ์",class:"text-center",value:"loginDate",type:"date"},{label:"ผล",func:e=>C()[e.result].label},{label:"วันที่เป็นสัด",class:"text-center",value:"estrusDate",type:"date"},{label:"วันที่ผสมพันธุ์",class:"text-center",value:"matingDate",type:"date"},{label:"วันที่ตรวจท้อง",class:"text-center",value:"checkDate",type:"date"},{label:"พ่อพันธุ์",value:"dad"},{label:"สถานะ",func:e=>V()[e.status].label},{label:"วิธีรักษา",value:"howTo"}],buttons:[{label:"ลบ",type:"delete",color:"danger",condition:e=>e.status!="2"&&e.status!="3"},{label:"แก้ไข",type:"edit",color:"warning",condition:e=>e.status!="2"&&e.status!="3"}]}},components:{SectionMain:z,LayoutAuthenticated:G,SectionTitleBarSub:J,Table:K,Modal:$,Criteria:P},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getReproductions()},methods:{async getReproductions(){this.loading=!0;const e=await h.all(this.search);this.items=[],e.data&&(this.items=e.data.reproducts),this.loading=!1},async remove(e){this.loading=!0,(await h.delete(e)).data&&(this.getReproductions(),g.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},async removeSelected(e){this.loading=!0;let l=[];for(let b of e)l.push(b._id);(await h.deletes(l)).data&&(this.getReproductions(),g.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.loginDate=null,this.search.estrusDate=null,this.search.matingDate=null,this.search.checkDate=null,this.search.status="",this.search.result="",this.getReproductions()},resetData(){this.modalData=null}}};function te(e,l,_,b,t,n){const w=s("SectionTitleBarSub"),i=s("Modal"),u=s("Criteria"),y=s("Table"),v=s("SectionMain"),f=s("LayoutAuthenticated");return c(),d(f,null,{default:r(()=>[a(v,null,{default:r(()=>[a(w,{icon:"reproduction",title:"การสืบพันธุ์",btnText:"เพิ่มการสืบพันธุ์","has-btn-add":"",onOpenModal:l[0]||(l[0]=D=>{t.mode="create",t.openModal=!0})}),a(i,{modelValue:t.openModal,"onUpdate:modelValue":l[1]||(l[1]=D=>t.openModal=D),mode:t.mode,data:n.getDataCopy,onConfirm:n.getReproductions,onCancel:n.resetData},null,8,["modelValue","mode","data","onConfirm","onCancel"]),a(u,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:n.getReproductions,onReset:n.reset,forms:t.forms,search:t.search,btnLoading:t.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),a(y,{title:"รายการสืบพันธุ์","has-checkbox":"","checked-data":t.checked,items:t.items,datas:t.datas,buttons:t.buttons,onEdit:n.edit,onDelete:n.remove,onDeleteSelected:n.removeSelected,loading:t.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const me=x(ee,[["render",te]]);export{me as default};
