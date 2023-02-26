import{y as D,p as q,m as F,_ as U,l as M,E as j,i as I,j as R,g as z,f as E,D as s,F as k,G as x,o as u,c as d,w as n,d as o,h as S,s as g,t as v,k as G,e as J,S as Y,B as K,M as Q,C as W,R as X,H as p,I as L,J as P}from"./index-273b3c22.js";import{_ as N}from"./FormField-1815475f.js";import{T as Z}from"./Table-6deaa913.js";import{C as $}from"./Criteria-ad5d9f4e.js";import{s as T,q as A,I as ee}from"./cow-471d714a.js";import{C as f}from"./cow-99325b1e.js";import{D as te}from"./Cow-a971260c.js";import{g as oe}from"./age-calculate-bb92e417.js";import"./FormCheckRadioPicker-f02674ee.js";const ae={data(){return{cow:{image:"/image/img-mockup.png",code:"",name:"",status:1,birthDate:null,corral:"",dad:"",mom:"",quality:1},status:T("create"),quality:A("create"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(l){this.$emit("update:modelValue",l)}},user(){return this.$store.state.auth.user}},watch:{dataEdit:{handler(l,a){l!=null&&this.mode=="edit"&&(this.cow=l,this.cow.image=this.cow.image?this.cow.image:"/image/img-mockup.png")},deep:!0}},methods:{clear(){this.$emit("update:dataEdit",null),this.cow.image="/image/img-mockup.png",this.cow.code="",this.cow.name="",this.cow.birthDate=null,this.cow.status=1,this.cow.corral="",this.cow.dad="",this.cow.mom="",delete this.cow._id},confirmCancel(l){this.value=!1,this.$emit(l)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await f.create(this.cow)&&(this.loading=!1,this.value=!1,this.confirm()):await f.update(this.cow._id,this.cow)&&(this.loading=!1,this.value=!1,this.confirm())}catch(l){console.error("Error : ",l),this.loading=!1,this.alert=l.response.data.message}}},components:{BaseButton:q,BaseButtons:F,CardBox:U,BaseDivider:M,OverlayLayer:j,FormField:N,FormControl:I,NotificationBar:R,UserAvatar:z,BaseLevel:E,ImageUpload:ee},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},le={class:"grid lg:grid-cols-4 grid-cols-2 gap-5 mt-3"};function se(l,a,V,O,t,i){const h=s("ImageUpload"),_=s("BaseLevel"),r=s("FormControl"),c=s("FormField"),w=s("NotificationBar"),B=s("BaseDivider"),m=s("BaseButton"),C=s("BaseButtons"),y=s("CardBox"),b=s("OverlayLayer");return k((u(),d(b,null,{default:n(()=>[k(o(y,{title:V.mode==="create"?"เพิ่มโค":"แก้ไขโค",class:"shadow-lg w-full md:w-3/5 lg:w-1/1 z-50","header-icon":"close",modal:"",form:"",onSubmit:J(i.submit,["prevent"]),onHeaderIconClick:i.cancel},{default:n(()=>[o(h,{modelValue:t.cow.image,"onUpdate:modelValue":a[0]||(a[0]=e=>t.cow.image=e)},null,8,["modelValue"]),o(_,{type:"justify-center mb-6 text-sm"},{default:n(()=>[S(" อัพโหลดรูปภาพ (คลิกที่รูป) ")]),_:1}),g("div",le,[o(c,{label:"รหัสโค",help:"* ห้ามว่าง"},{default:n(()=>[o(r,{modelValue:t.cow.code,"onUpdate:modelValue":a[1]||(a[1]=e=>t.cow.code=e),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),o(c,{label:"ชื่อโค",help:"* ห้ามว่าง"},{default:n(()=>[o(r,{modelValue:t.cow.name,"onUpdate:modelValue":a[2]||(a[2]=e=>t.cow.name=e),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),o(c,{label:"วันเกิด",help:"* ห้ามว่าง"},{default:n(()=>[o(r,{modelValue:t.cow.birthDate,"onUpdate:modelValue":a[3]||(a[3]=e=>t.cow.birthDate=e),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),o(c,{label:"สถานะ",help:"* ห้ามว่าง"},{default:n(()=>[o(r,{modelValue:t.cow.status,"onUpdate:modelValue":a[4]||(a[4]=e=>t.cow.status=e),options:t.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),o(c,{label:"คุณภาพน้ำนม",help:"* ห้ามว่าง"},{default:n(()=>[o(r,{modelValue:t.cow.quality,"onUpdate:modelValue":a[5]||(a[5]=e=>t.cow.quality=e),options:t.quality,icon:""},null,8,["modelValue","options"])]),_:1}),o(c,{label:"คอก"},{default:n(()=>[o(r,{modelValue:t.cow.corral,"onUpdate:modelValue":a[6]||(a[6]=e=>t.cow.corral=e),icon:"barn"},null,8,["modelValue"])]),_:1}),o(c,{label:"พ่อพันธุ์"},{default:n(()=>[o(r,{modelValue:t.cow.dad,"onUpdate:modelValue":a[7]||(a[7]=e=>t.cow.dad=e),icon:"genderMale"},null,8,["modelValue"])]),_:1}),o(c,{label:"แม่พันธุ์"},{default:n(()=>[o(r,{modelValue:t.cow.mom,"onUpdate:modelValue":a[8]||(a[8]=e=>t.cow.mom=e),icon:"genderFemale"},null,8,["modelValue"])]),_:1})]),t.alert?(u(),d(w,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:n(()=>[S(v(t.alert),1)]),_:1})):G("",!0),o(B),o(C,{type:"justify-center"},{default:n(()=>[o(m,{label:"บันทึก",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),o(m,{label:"ยกเลิก",color:"danger",onClick:i.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[x,i.value]])]),_:1},512)),[[x,i.value]])}const ne=D(ae,[["render",se]]),ie={data(){return{perPage:18,currentPage:0,modalCow:!1,items:[],forms:[{label:"โค",value:"code",type:"ddl",module:"cow",valueType:"code"},{label:"สถานะ",value:"status",options:T()},{label:"คุณภาพน้ำนม",value:"quality",options:A()},{label:"คอก",value:"corral",icon:"barn"}],search:{code:null,status:"",corral:"",flag:"Y"},mode:"create",loading:!1}},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const l=[];for(let a=0;a<this.numPages;a++)l.push(a);return l},user(){return this.$store.state.auth.user}},components:{SectionMain:Y,LayoutAuthenticated:K,BaseButton:q,BaseIcon:Q,BaseButtons:F,CardBox:U,FormControl:I,FormField:N,BaseDivider:M,DDLCow:te,CreateCowModal:ne,Table:Z,SectionTitleBarSub:W,Criteria:$,CardBoxClient:X,BaseLevel:E},created(){this.getCows()},methods:{async getCows(){this.loading=!0;const l=await f.all(this.search);this.items=[],l.data&&(this.items=l.data.cows),this.loading=!1},async removeCow(l){this.loading=!0,(await f.update(l,{flag:"N"})).data&&this.getCows(),this.loading=!1},detail(l){this.$router.push({name:"cowDetail",params:{id:l._id}})},reset(){this.search.code=null,this.search.status="",this.search.corral=""},calAge(l){return oe(l)}}},re={key:0,class:"grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-6 md:grid-cols-4"},ce={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},ue=g("p",null," กำลังโหลดข้อมูล...",-1),de={class:"p-2 mt-2 border-t border-gray-100 dark:border-gray-800"};function me(l,a,V,O,t,i){const h=s("SectionTitleBarSub"),_=s("CreateCowModal"),r=s("Criteria"),c=s("CardBoxClient"),w=s("BaseIcon"),B=s("BaseButton"),m=s("BaseButtons"),C=s("BaseLevel"),y=s("SectionMain"),b=s("LayoutAuthenticated");return u(),d(b,null,{default:n(()=>[o(y,null,{default:n(()=>[o(h,{icon:"cow",title:"โค",btnText:"เพิ่มโค","has-btn-add":"",onOpenModal:a[0]||(a[0]=e=>{t.mode="create",t.modalCow=!0})}),o(_,{modelValue:t.modalCow,"onUpdate:modelValue":a[1]||(a[1]=e=>t.modalCow=e),onConfirm:i.getCows,mode:t.mode,dataEdit:l.dataEdit},null,8,["modelValue","onConfirm","mode","dataEdit"]),o(r,{grid:"grid-cols-2 md:grid-cols-3 lg:grid-cols-5",onSearch:i.getCows,onReset:i.reset,forms:t.forms,search:t.search},null,8,["onSearch","onReset","forms","search"]),t.loading?(u(),p("div",ce,[o(w,{path:"dotsCircle",size:"22",class:"animate-spin"}),ue])):(u(),p("div",re,[(u(!0),p(L,null,P(i.itemsPaginated,e=>(u(),d(c,{key:e.name,img:e.image,name:e.name,"sub-text":"คอก "+(e.corral?e.corral:"-"),date:e.birthDate,status:e.status,onClick:H=>i.detail(e),quality:e.quality},null,8,["img","name","sub-text","date","status","onClick","quality"]))),128))])),g("div",de,[o(C,null,{default:n(()=>[o(m,null,{default:n(()=>[(u(!0),p(L,null,P(i.pagesList,e=>(u(),d(B,{key:e,active:e===t.currentPage,label:e+1,small:"",onClick:H=>t.currentPage=e},null,8,["active","label","onClick"]))),128))]),_:1}),g("small",null,"หน้า "+v(i.currentPageHuman)+" จาก "+v(i.numPages),1)]),_:1})])]),_:1})]),_:1})}const be=D(ie,[["render",me]]);export{be as default};