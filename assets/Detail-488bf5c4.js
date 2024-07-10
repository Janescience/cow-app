import{b as q,_ as x,a as F,d as S,c as R}from"./BaseDivider-5d6d6cd6.js";import{_ as j}from"./LayoutAuthenticated-188296d3.js";import{_ as Q}from"./SectionTitleBarSub-bf101c49.js";import{v as O,y as z,h as L,_ as P,z as n,G as V,H as M,o as _,c as g,w as i,d as a,j as s,t as u,g as B,f as E,e as H}from"./index-a11eb788.js";import{_ as T}from"./FormField-eae473e8.js";import{_ as N}from"./FormControl-913bfab2.js";import{T as U}from"./Table-eb9e0d2d.js";import{C as Y}from"./Criteria-6bddc43b.js";import{T as k}from"./alert-eb15281a.js";import{a as G}from"./CardBoxModal-4190cff7.js";import{_ as J}from"./NotificationBar-c518edd8.js";import{D as K}from"./Recipe-226a7e18.js";import{F as v}from"./food-02d2eb8e.js";import{C as W}from"./cow-1c284aa3.js";import{a as A,y as X}from"./date-1696e46e.js";import{_ as Z}from"./FormCheckRadioPicker-e4bf5636.js";import"./UserAvatar-8818f699.js";import"./CardBoxCollapse-432b6c08.js";import"./Cow-523e81c3.js";import"./Vaccine-69f9d8fc.js";import"./Corral-a31b28fc.js";const $={data(){return{food:{corral:"",numCow:0,year:new Date().getFullYear(),month:new Date().getMonth()+1},foodDetail:{recipe:{},qty:null},foodDetails:[],loading:!1,alert:"",ddlCorral:[],numCowCorral:null,corrals:[],months:A(),years:X(),foodDetailColumns:[{label:"สูตรอาหาร",value:"recipe.name"},{label:"ราคา/กก.",value:"recipe.amount",type:"currency"},{label:"จำนวน/วัน (กก.)",value:"qty",type:"number"},{label:"รวมเป็นเงิน/วัน",value:"amount",type:"currency"}],buttons:[{label:"ลบ",type:"delete",color:"danger"}]}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},watch:{data(e){var t;this.food=e,this.food.year=e!=null&&e.year?e.year:new Date().getFullYear(),this.food.month=e!=null&&e.month?e.month:new Date().getMonth()+1,this.foodDetails=e!=null&&e.foodDetails?e.foodDetails:[];for(let r of this.foodDetails)r.recipe=(t=r.relate)==null?void 0:t.recipe},"food.corral"(e){e&&(this.numCowCorral=this.corrals[e].length>0?this.corrals[e].length:null,this.mode!=="edit"&&(this.food.numCow=this.numCowCorral))}},created(){this.getCorrals()},methods:{clear(){this.food={},this.foodDetails=[]},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},add(){const e=this.foodDetail.recipe,t=this.foodDetail.qty,r=t*e.amount;this.foodDetails.push({recipe:e,qty:t,amount:r}),this.foodDetail={}},sum(){const e=this.foodDetails.reduce((o,l)=>o+l.amount,0),t=this.foodDetails.reduce((o,l)=>o+l.qty,0),r=e/(this.numCowCorral?this.numCowCorral:0),m=t/(this.numCowCorral?this.numCowCorral:0);return{qty:t,amount:e,amountPerCow:r,qtyPerCow:m}},daysOfMonth(){return new Date(this.food.year,this.food.month,0).getDate()},remove(e){let t=this.cows.indexOf(e);t!==-1&&this.foodDetails.splice(t,1)},async submit(){this.loading=!0,this.alert="",this.food.foodDetails=this.foodDetails,this.food.numCow=this.numCowCorral;try{this.mode==="create"?await v.create(this.food)&&(this.loading=!1,this.confirm()):await v.update(this.food._id,this.food)&&(this.loading=!1,this.confirm()),k.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(e){console.error("Error : ",e),this.clear(),this.loading=!1,this.alert=await e.response.data.message,k.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},async getCorrals(){const e=await W.all();if(e){const t=e.data.cows;this.corrals=z.groupBy(t,"corral");for(let r of Object.keys(this.corrals))this.ddlCorral.push({id:r,label:r})}}},components:{BaseButton:q,BaseButtons:L,CardBox:x,BaseDivider:F,OverlayLayer:G,FormField:T,FormControl:N,NotificationBar:J,BaseLevel:P,DDLRecipe:K,FormCheckRadioPicker:Z,BaseIcon:S,Table:U},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},ee={class:"grid lg:grid-cols-5 grid-cols-2 gap-5"},te={class:"grid lg:grid-cols-3 grid-cols-2 gap-5"},oe={class:"overflow-x-auto"},le=s("thead",null,[s("tr",null,[s("th"),s("th",{class:"whitespace-nowrap"},"จำนวน/วัน (กก.) "),s("th",{class:"whitespace-nowrap"},"ราคา/วัน "),s("th",{class:"whitespace-nowrap"},"จำนวน/เดือน (กก.)"),s("th",{class:"whitespace-nowrap"},"ราคา/เดือน")])],-1),ae=s("td",{class:"whitespace-nowrap"},"โค 1 ตัว",-1);function se(e,t,r,m,o,l){const f=n("FormControl"),c=n("FormField"),C=n("DDLRecipe"),h=n("BaseButton"),D=n("BaseButtons"),b=n("Table"),p=n("CardBox"),w=n("NotificationBar"),y=n("BaseDivider"),I=n("OverlayLayer");return V((_(),g(I,null,{default:i(()=>[V(a(p,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"การให้อาหาร",class:"shadow-lg w-full lg:w-3/4 z-50","header-icon":"close",modal:"",form:"","has-scroll":"",onSubmit:H(l.submit,["prevent"]),onHeaderIconClick:l.cancel},{default:i(()=>[s("div",ee,[a(c,{label:"ปี พ.ศ.",help:"* ห้ามว่าง"},{default:i(()=>[a(f,{modelValue:o.food.year,"onUpdate:modelValue":t[0]||(t[0]=d=>o.food.year=d),options:o.years},null,8,["modelValue","options"])]),_:1}),a(c,{label:"เดือน",help:"* ห้ามว่าง"},{default:i(()=>[a(f,{modelValue:o.food.month,"onUpdate:modelValue":t[1]||(t[1]=d=>o.food.month=d),options:o.months},null,8,["modelValue","options"])]),_:1}),a(c,{label:"คอก"},{default:i(()=>[a(f,{modelValue:o.food.corral,"onUpdate:modelValue":t[2]||(t[2]=d=>o.food.corral=d),required:"",disabled:""},null,8,["modelValue"])]),_:1}),a(c,{label:"จำนวนโค"},{default:i(()=>[a(f,{modelValue:o.food.numCow,"onUpdate:modelValue":t[3]||(t[3]=d=>o.food.numCow=d),required:"",disabled:""},null,8,["modelValue"])]),_:1})]),o.food.corral?(_(),g(p,{key:0,title:"รายละเอียดสูตรอาหาร","header-icon":"",class:"dark:bg-slate-700 lg:mt-0 mt-3"},{default:i(()=>[s("div",te,[a(c,{label:"สูตรอาหาร",help:"* ห้ามว่าง",class:"lg:col-span-1 col-span-2"},{default:i(()=>[a(C,{modelValue:o.foodDetail.recipe,"onUpdate:modelValue":t[4]||(t[4]=d=>o.foodDetail.recipe=d),valueType:"object"},null,8,["modelValue"])]),_:1}),a(c,{label:"จำนวน/วัน (กก.)",help:"* ห้ามว่าง"},{default:i(()=>[a(f,{modelValue:o.foodDetail.qty,"onUpdate:modelValue":t[5]||(t[5]=d=>o.foodDetail.qty=d),icon:"shaker",type:"number"},null,8,["modelValue"])]),_:1}),a(D,{type:"justify-start"},{default:i(()=>[a(h,{label:"ล้าง",color:"danger",onClick:t[6]||(t[6]=d=>e.reset())}),a(h,{disabled:!o.foodDetail.recipe||!o.foodDetail.qty,label:"เพิ่ม",color:"info",onClick:t[7]||(t[7]=d=>l.add())},null,8,["disabled"])]),_:1})]),a(b,{title:"รายการสูตรอาหาร ("+o.foodDetails.length+" รายการ)",items:o.foodDetails,datas:o.foodDetailColumns,buttons:o.buttons,perPage:"5",onDelete:l.remove},null,8,["title","items","datas","buttons","onDelete"]),o.food.corral?(_(),g(p,{key:0,title:"สรุป","header-icon":"","has-table":"",class:"dark:bg-slate-800 mt-3"},{default:i(()=>[s("div",oe,[s("table",null,[le,s("tbody",null,[s("tr",null,[ae,s("td",null,u(e.$filters.number(l.sum().qtyPerCow)),1),s("td",null,u(e.$filters.currency(l.sum().amountPerCow)),1),s("td",null,u(e.$filters.number(l.sum().qtyPerCow*l.daysOfMonth())),1),s("td",null,u(e.$filters.currency(l.sum().amountPerCow*l.daysOfMonth())),1)]),s("tr",null,[s("td",null,"โค "+u(o.numCowCorral)+" ตัว",1),s("td",null,u(e.$filters.number(l.sum().qty)),1),s("td",null,u(e.$filters.currency(l.sum().amount)),1),s("td",null,u(e.$filters.number(l.sum().qty*l.daysOfMonth())),1),s("td",null,u(e.$filters.currency(l.sum().amount*l.daysOfMonth())),1)])])])])]),_:1})):B("",!0)]),_:1})):B("",!0),o.alert?(_(),g(w,{key:1,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[E(u(o.alert),1)]),_:1})):B("",!0),a(y),a(D,{type:"justify-center"},{default:i(()=>[a(h,{label:"บันทึก",color:"success",type:"submit",disabled:o.foodDetails.length===0,loading:o.loading},null,8,["disabled","loading"]),a(h,{label:"ยกเลิก",color:"danger",onClick:l.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[M,l.value]])]),_:1},512)),[[M,l.value]])}const re=O($,[["render",se]]),ne={data(){return{mode:"create",modalData:null,openModal:!1,foods:[],loading:!1,corral:null,search:{corral:this.$route.params.corral,year:new Date().getFullYear(),month:new Date().getMonth()+1},forms:[{label:"ปี",value:"year",type:"ddl",module:"year"},{label:"เดือน",value:"month",type:"ddl",module:"month"}],foodColumns:[{label:"ปี",value:"year",func:e=>e.year},{label:"เดือน",value:"month",func:e=>A()[e.month-1].label},{label:"จำนวนวัว",class:"text-right",value:"numCow"},{label:"จำนวนสูตร",class:"text-right",func:e=>e.foodDetails.length},{label:"รวมจำนวนที่ให้/วัน (กก.)",class:"text-right",func:e=>this.$filters.number(e.foodDetails.reduce((t,r)=>t+r.qty,0))},{label:"รวมเป็นเงิน/วัน",class:"text-right",func:e=>this.$filters.currency(e.foodDetails.reduce((t,r)=>t+r.amount,0))},{label:"รวมจำนวนที่ให้/เดือน (กก.)",class:"text-right",func:e=>this.$filters.number(e.foodDetails.reduce((t,r)=>t+r.qty,0)*new Date(e.year,e.month,0).getDate())},{label:"รวมเป็นเงิน/เดือน",class:"text-right",func:e=>this.$filters.currency(e.foodDetails.reduce((t,r)=>t+r.amount,0)*new Date(e.year,e.month,0).getDate())}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},getDataCopy(){return{...this.modalData}}},watch:{data(e){this.foods=e==null?void 0:e.foods,this.corral=e.corral}},created(){this.getDatas()},methods:{async getDatas(){this.loading=!0;const e=await v.all(this.search);e.data&&(this.foods=e.data.foods),this.loading=!1},confirmCancel(e){this.value=!1,this.$emit(e)},cancel(){this.confirmCancel("cancel")},add(){},sum(){const e=this.foods.reduce((r,m)=>r+m.amount,0);return{qty:this.foods.reduce((r,m)=>r+m.qty,0),amount:e}},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},daysOfMonth(e,t){return new Date(t,e,0).getDate()},resetData(){this.modalData=null},remove(e){let t=this.cows.indexOf(e);t!==-1&&this.foodDetails.splice(t,1)}},components:{BaseButton:q,BaseButtons:L,CardBox:x,BaseDivider:F,FormField:T,FormControl:N,BaseLevel:P,BaseIcon:S,Table:U,Modal:re,SectionMain:R,LayoutAuthenticated:j,SectionTitleBarSub:Q,Criteria:Y}},ie={class:"px-4 sm:px-0 mb-4 flex items-center justify-between"},de={class:"flex items-center justify-start"},ue={class:"text-base lg:text-2xl"};function ce(e,t,r,m,o,l){const f=n("BaseIcon"),c=n("BaseButton"),C=n("BaseButtons"),h=n("Criteria"),D=n("Modal"),b=n("Table"),p=n("SectionMain"),w=n("LayoutAuthenticated");return _(),g(w,null,{default:i(()=>[a(p,null,{default:i(()=>[s("section",ie,[s("div",de,[a(f,{path:"corn",size:"30",class:"mr-3"}),s("h1",ue," รายละเอียดการให้อาหาร - คอก "+u(this.$route.params.corral),1)]),a(C,{class:"text-sm lg:text-base",type:"justify-end"},{default:i(()=>[a(c,{class:"lg:p-2 p-1",label:"ย้อนกลับ",color:"light",onClick:t[0]||(t[0]=y=>this.$router.push("/manage/food"))}),a(c,{class:"lg:p-2 p-1",label:"เพิ่มการให้อาหาร",color:"success",onClick:t[1]||(t[1]=y=>{o.mode="create",o.openModal=!0,o.modalData={corral:this.$route.params.corral}})})]),_:1})]),a(h,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:l.getDatas,onReset:e.reset,forms:o.forms,search:o.search,btnLoading:o.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),a(D,{modelValue:o.openModal,"onUpdate:modelValue":t[2]||(t[2]=y=>o.openModal=y),data:l.getDataCopy,onCancel:l.resetData,mode:o.mode,onConfirm:l.getDatas},null,8,["modelValue","data","onCancel","mode","onConfirm"]),a(b,{title:"รายการให้อาหาร ("+o.foods.length+" รายการ)",items:o.foods,datas:o.foodColumns,buttons:o.buttons,perPage:"5",onDelete:l.remove,onEdit:l.edit},null,8,["title","items","datas","buttons","onDelete","onEdit"])]),_:1})]),_:1})}const Le=O(ne,[["render",ce]]);export{Le as default};
