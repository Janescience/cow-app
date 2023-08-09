import{z as N,p as j,m as H,_ as R,l as G,G as $,i as J,j as ee,g as K,f as W,F as l,H as M,I,o as d,c as p,w as n,d as o,h as P,s as c,t as f,k as S,e as te,C as ae,D as oe,O as se,T as le,E as ne,J as b,K as O,L as T,n as E}from"./index-e4c170d6.js";import{_ as Y}from"./FormField-30a7d1de.js";import{C as re}from"./Criteria-bace8ed8.js";import{I as ie}from"./ImageUpload-bf2c167c.js";import{C as B}from"./cow-37e18f7c.js";import{s as Q,q as X}from"./cow-ae6b6e19.js";import{T as L}from"./alert-76246791.js";import{D as ce}from"./Cow-bb341abb.js";import{g as de}from"./age-calculate-9ec51286.js";import"./CardBoxCollapse-36ea0dff.js";import"./FormCheckRadioPicker-b9e413c3.js";import"./Vaccine-247f1e71.js";const ue={data(){return{cow:{image:"/image/img-mockup.png",code:"",name:"",status:1,birthDate:null,corral:"",dad:"",mom:"",quality:1},status:Q("create"),quality:X("create"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},watch:{dataEdit:{handler(t,e){t!=null&&this.mode=="edit"&&(this.cow=t,this.cow.image=this.cow.image?this.cow.image:"/image/img-mockup.png")},deep:!0}},methods:{clear(){this.$emit("update:dataEdit",null),this.cow.image="/image/img-mockup.png",this.cow.code="",this.cow.name="",this.cow.birthDate=null,this.cow.status=1,this.cow.corral="",this.cow.dad="",this.cow.mom="",delete this.cow._id},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await B.create(this.cow)&&(this.loading=!1,this.value=!1,this.confirm(),L.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):await B.update(this.cow._id,this.cow)&&(this.loading=!1,this.value=!1,this.confirm(),L.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,L.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:j,BaseButtons:H,CardBox:R,BaseDivider:G,OverlayLayer:$,FormField:Y,FormControl:J,NotificationBar:ee,UserAvatar:K,BaseLevel:W,ImageUpload:ie},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},me={class:"grid lg:grid-cols-4 grid-cols-2 gap-5 mt-3"};function ge(t,e,g,Z,a,i){const C=l("ImageUpload"),v=l("BaseLevel"),u=l("FormControl"),m=l("FormField"),_=l("NotificationBar"),h=l("BaseDivider"),w=l("BaseButton"),x=l("BaseButtons"),V=l("CardBox"),k=l("OverlayLayer");return M((d(),p(k,null,{default:n(()=>[M(o(V,{title:g.mode==="create"?"เพิ่มโค":"แก้ไขโค",class:"shadow-lg w-full md:w-3/5 lg:w-1/1 z-50","header-icon":"close",modal:"",form:"",onSubmit:te(i.submit,["prevent"]),onHeaderIconClick:i.cancel},{default:n(()=>[o(C,{modelValue:a.cow.image,"onUpdate:modelValue":e[0]||(e[0]=r=>a.cow.image=r)},null,8,["modelValue"]),o(v,{type:"justify-center mb-6 text-sm"},{default:n(()=>[P(" อัพโหลดรูปภาพ (คลิกที่รูป) ")]),_:1}),c("div",me,[o(m,{label:"รหัสโค",help:"* ห้ามว่าง"},{default:n(()=>[o(u,{modelValue:a.cow.code,"onUpdate:modelValue":e[1]||(e[1]=r=>a.cow.code=r),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),o(m,{label:"ชื่อโค",help:"* ห้ามว่าง"},{default:n(()=>[o(u,{modelValue:a.cow.name,"onUpdate:modelValue":e[2]||(e[2]=r=>a.cow.name=r),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),o(m,{label:"วันเกิด",help:"* ห้ามว่าง"},{default:n(()=>[o(u,{modelValue:a.cow.birthDate,"onUpdate:modelValue":e[3]||(e[3]=r=>a.cow.birthDate=r),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),o(m,{label:"สถานะ",help:"* ห้ามว่าง"},{default:n(()=>[o(u,{modelValue:a.cow.status,"onUpdate:modelValue":e[4]||(e[4]=r=>a.cow.status=r),options:a.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),o(m,{label:"คุณภาพน้ำนม",help:"* ห้ามว่าง"},{default:n(()=>[o(u,{modelValue:a.cow.quality,"onUpdate:modelValue":e[5]||(e[5]=r=>a.cow.quality=r),options:a.quality,icon:""},null,8,["modelValue","options"])]),_:1}),o(m,{label:"คอก"},{default:n(()=>[o(u,{modelValue:a.cow.corral,"onUpdate:modelValue":e[6]||(e[6]=r=>a.cow.corral=r),icon:"barn"},null,8,["modelValue"])]),_:1}),o(m,{label:"พ่อพันธุ์"},{default:n(()=>[o(u,{modelValue:a.cow.dad,"onUpdate:modelValue":e[7]||(e[7]=r=>a.cow.dad=r),icon:"genderMale"},null,8,["modelValue"])]),_:1}),o(m,{label:"แม่พันธุ์"},{default:n(()=>[o(u,{modelValue:a.cow.mom,"onUpdate:modelValue":e[8]||(e[8]=r=>a.cow.mom=r),icon:"genderFemale"},null,8,["modelValue"])]),_:1})]),a.alert?(d(),p(_,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:n(()=>[P(f(a.alert),1)]),_:1})):S("",!0),o(h),o(x,{type:"justify-center"},{default:n(()=>[o(w,{label:"บันทึก",color:"success",type:"submit",loading:a.loading},null,8,["loading"]),o(w,{label:"ยกเลิก",color:"danger",onClick:i.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[I,i.value]])]),_:1},512)),[[I,i.value]])}const fe=N(ue,[["render",ge]]),pe={data(){return{perPage:28,currentPage:0,modalCow:!1,items:[],forms:[{label:"โค",value:"code",type:"ddl",module:"cow",valueType:"code"},{label:"สถานะ",value:"status",options:Q()},{label:"คุณภาพน้ำนม",value:"quality",options:X()},{label:"คอก",value:"corral",icon:"barn"}],search:{code:null,status:"",quality:"",corral:"",flag:"Y"},mode:"create",loading:!1}},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const t=[];for(let e=0;e<this.numPages;e++)t.push(e);return t},user(){return this.$store.state.auth.user}},components:{SectionMain:ae,LayoutAuthenticated:oe,BaseButton:j,BaseIcon:se,BaseButtons:H,CardBox:R,FormControl:J,FormField:Y,BaseDivider:G,DDLCow:ce,CreateCowModal:fe,Table:le,SectionTitleBarSub:ne,Criteria:re,UserAvatar:K,BaseLevel:W},created(){this.getCows()},methods:{async getCows(){this.loading=!0;const t=await B.all(this.search);this.items=[],t.data&&(this.items=t.data.cows),this.loading=!1},async removeCow(t){this.loading=!0,(await B.update(t,{flag:"N"})).data&&this.getCows(),this.loading=!1},detail(t){this.$router.push({name:"cowDetail",params:{id:t._id}})},reset(){this.search.code=null,this.search.status="",this.search.quality="",this.search.corral=""},filter(t){const e={},g={};return t.status==1?(e.icon="humanPregnant",e.style="warning"):t.status==2?(e.icon="waterOff",e.style="danger"):t.status==3?(e.icon="water",e.style="success"):t.status==4&&(e.icon="babyFaceOutline",e.style="light"),t.grade==="A+"?g.style="text-lime-500":t.grade==="A"?g.style="text-green-500":t.grade==="B"?g.style="":t.grade==="C"?g.style="text-orange-500":t.grade==="D"&&(g.style="text-red-500"),{status:e,grade:g}},calAge(t){return de(t)}}},he={key:0,class:"grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-5 md:grid-cols-4"},_e={class:"text-center mt-2"},we={class:"lg:text-xl text-md"},ye={class:"grid grid-cols-5 gap-1 mt-2"},be={class:"text-gray-500 col-span-3 font-extrabold dark:text-gray-400 text-sm text-center dark:bg-zinc-900 rounded-lg p-1 h-6 min-w-4 shadow-lg"},Be={class:"font-extrabold text-center dark:bg-zinc-900 rounded-lg h-6 min-w-4 shadow-lg"},Ce={class:"text-left dark:bg-zinc-700 text-gray-300 rounded-lg p-1 h-6 min-w-4 text-xs col-span-2 shadow-lg"},ve={class:"text-left dark:bg-gray-700 text-black font-bold rounded-lg h-6 min-w-4 text-xs col-span-3 shadow-lg"},xe={class:"mr-2"},Ve={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},ke=c("p",null," กำลังโหลดข้อมูล...",-1),Le={class:"p-2 mt-2 border-t border-gray-100 dark:border-gray-800"};function Pe(t,e,g,Z,a,i){const C=l("SectionTitleBarSub"),v=l("CreateCowModal"),u=l("Criteria"),m=l("UserAvatar"),_=l("BaseLevel"),h=l("BaseIcon"),w=l("CardBox"),x=l("BaseButton"),V=l("BaseButtons"),k=l("SectionMain"),r=l("LayoutAuthenticated");return d(),p(r,null,{default:n(()=>[o(k,null,{default:n(()=>[o(C,{icon:"cow",title:"โค",btnText:"เพิ่มโค","has-btn-add":"",onOpenModal:e[0]||(e[0]=s=>{a.mode="create",a.modalCow=!0})}),o(v,{modelValue:a.modalCow,"onUpdate:modelValue":e[1]||(e[1]=s=>a.modalCow=s),onConfirm:i.getCows,mode:a.mode,dataEdit:t.dataEdit},null,8,["modelValue","onConfirm","mode","dataEdit"]),o(u,{grid:"grid-cols-2 md:grid-cols-3 lg:grid-cols-5",onSearch:i.getCows,onReset:i.reset,forms:a.forms,search:a.search},null,8,["onSearch","onReset","forms","search"]),a.loading?(d(),b("div",Ve,[o(h,{path:"dotsCircle",size:"22",class:"animate-spin"}),ke])):(d(),b("div",he,[(d(!0),b(O,null,T(i.itemsPaginated,s=>(d(),p(w,{key:s.name,onClick:y=>i.detail(s),hoverable:""},{default:n(()=>{var y,D,U,F,q,A;return[o(_,{type:"justify-center"},{default:n(()=>[o(m,{username:"profile-card",class:"lg:w-24 lg:h-24 w-20 h-20",avatar:s.image},null,8,["avatar"])]),_:2},1024),c("div",_e,[c("h4",we,[s.quality===2?(d(),p(h,{key:0,class:"text-amber-400",path:"crownCircleOutline",size:"20"})):S("",!0),P(" "+f(s.name),1)]),c("div",ye,[c("p",{class:E(((D=(y=i.filter(s))==null?void 0:y.grade)==null?void 0:D.style)+"  font-extrabold  text-sm text-center dark:bg-zinc-900 rounded-lg p-1 h-6 min-w-4 shadow-lg")},f(s.grade),3),c("p",be,f(s.corral),1),c("p",Be,[s.status?(d(),p(h,{key:0,class:E((F=(U=i.filter(s))==null?void 0:U.status)==null?void 0:F.style),path:(A=(q=i.filter(s))==null?void 0:q.status)==null?void 0:A.icon,size:"18"},null,8,["class","path"])):S("",!0)]),c("p",Ce,f(i.calAge(s.birthDate)),1),c("p",ve,[o(_,{type:"justify-between"},{default:n(()=>{var z;return[o(h,{path:"cupWater",size:"16"}),c("div",xe,f(t.$filters.number((z=s.sum)==null?void 0:z.rawmilk)),1)]}),_:2},1024)])])])]}),_:2},1032,["onClick"]))),128))])),c("div",Le,[o(_,null,{default:n(()=>[o(V,null,{default:n(()=>[(d(!0),b(O,null,T(i.pagesList,s=>(d(),p(x,{key:s,active:s===a.currentPage,label:s+1,small:"",onClick:y=>a.currentPage=s},null,8,["active","label","onClick"]))),128))]),_:1}),c("small",null,"หน้า "+f(i.currentPageHuman)+" จาก "+f(i.numPages),1)]),_:1})])]),_:1})]),_:1})}const Ne=N(pe,[["render",Pe]]);export{Ne as default};
