import{z as R,S as M,U as G,p as J,m as K,_ as W,l as Y,G as ee,i as Q,j as te,g as X,f as Z,F as i,H as I,I as T,o as u,c as y,w as o,d as a,h as O,s as c,t as _,k as z,e as ae,C as se,D as le,O as oe,T as re,E as ne,J as b,K as N,L as H,n as A}from"./index-6b438cf3.js";import{_ as $}from"./FormField-07e2d3b7.js";import{C as ie}from"./Criteria-7c746df2.js";import{I as ce}from"./ImageUpload-8631925e.js";import{C as V}from"./cow-c87d6d57.js";import{T as j}from"./alert-5c93e512.js";import{D as de}from"./Cow-5b98047d.js";import{g as ue}from"./age-calculate-cd6774dd.js";import"./CardBoxCollapse-c6a1263b.js";import"./Vaccine-1d95ad7a.js";const me={data(){return{cow:{image:"/image/img-mockup.png",code:"",name:"",status:1,birthDate:null,adopDate:null,corral:"",dad:"",mom:"",quality:1},status:M("create"),quality:G("create"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},watch:{dataEdit:{handler(t,e){t!=null&&this.mode=="edit"&&(this.cow=t,this.cow.image=this.cow.image?this.cow.image:"/image/img-mockup.png")},deep:!0}},methods:{clear(){this.$emit("update:dataEdit",null),this.cow.image="/image/img-mockup.png",this.cow.code="",this.cow.name="",this.cow.birthDate=null,this.cow.adopDate=null,this.cow.status=1,this.cow.corral="",this.cow.dad="",this.cow.mom="",delete this.cow._id},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await V.create(this.cow)&&(this.loading=!1,this.value=!1,this.confirm(),j.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):await V.update(this.cow._id,this.cow)&&(this.loading=!1,this.value=!1,this.confirm(),j.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,j.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:J,BaseButtons:K,CardBox:W,BaseDivider:Y,OverlayLayer:ee,FormField:$,FormControl:Q,NotificationBar:te,UserAvatar:X,BaseLevel:Z,ImageUpload:ce},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},ge={class:"grid lg:grid-cols-4 grid-cols-2 gap-5 mt-3"};function fe(t,e,m,d,s,r){const S=i("ImageUpload"),U=i("BaseLevel"),g=i("FormControl"),f=i("FormField"),h=i("NotificationBar"),p=i("BaseDivider"),D=i("BaseButton"),L=i("BaseButtons"),P=i("CardBox"),F=i("OverlayLayer");return I((u(),y(F,null,{default:o(()=>[I(a(P,{title:m.mode==="create"?"เพิ่มโค":"แก้ไขโค",class:"shadow-lg w-full md:w-3/5 lg:w-1/1 z-50","header-icon":"close",modal:"",form:"",onSubmit:ae(r.submit,["prevent"]),onHeaderIconClick:r.cancel},{default:o(()=>[a(S,{modelValue:s.cow.image,"onUpdate:modelValue":e[0]||(e[0]=n=>s.cow.image=n)},null,8,["modelValue"]),a(U,{type:"justify-center mb-6 text-sm"},{default:o(()=>[O(" อัพโหลดรูปภาพ (คลิกที่รูป) ")]),_:1}),c("div",ge,[a(f,{label:"รหัสโค",help:"* ห้ามว่าง"},{default:o(()=>[a(g,{modelValue:s.cow.code,"onUpdate:modelValue":e[1]||(e[1]=n=>s.cow.code=n),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),a(f,{label:"ชื่อโค",help:"* ห้ามว่าง"},{default:o(()=>[a(g,{modelValue:s.cow.name,"onUpdate:modelValue":e[2]||(e[2]=n=>s.cow.name=n),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),a(f,{label:"วันเกิด",help:"* ห้ามว่าง"},{default:o(()=>[a(g,{modelValue:s.cow.birthDate,"onUpdate:modelValue":e[3]||(e[3]=n=>s.cow.birthDate=n),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),a(f,{label:"วันที่นำเข้าฟาร์ม",help:"* ห้ามว่าง"},{default:o(()=>[a(g,{modelValue:s.cow.adopDate,"onUpdate:modelValue":e[4]||(e[4]=n=>s.cow.adopDate=n),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),a(f,{label:"สถานะ",help:"* ห้ามว่าง"},{default:o(()=>[a(g,{modelValue:s.cow.status,"onUpdate:modelValue":e[5]||(e[5]=n=>s.cow.status=n),options:s.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),a(f,{label:"คุณภาพน้ำนม",help:"* ห้ามว่าง"},{default:o(()=>[a(g,{modelValue:s.cow.quality,"onUpdate:modelValue":e[6]||(e[6]=n=>s.cow.quality=n),options:s.quality,icon:""},null,8,["modelValue","options"])]),_:1}),a(f,{label:"คอก"},{default:o(()=>[a(g,{modelValue:s.cow.corral,"onUpdate:modelValue":e[7]||(e[7]=n=>s.cow.corral=n),icon:"barn"},null,8,["modelValue"])]),_:1}),a(f,{label:"พ่อพันธุ์"},{default:o(()=>[a(g,{modelValue:s.cow.dad,"onUpdate:modelValue":e[8]||(e[8]=n=>s.cow.dad=n),icon:"genderMale"},null,8,["modelValue"])]),_:1}),a(f,{label:"แม่พันธุ์"},{default:o(()=>[a(g,{modelValue:s.cow.mom,"onUpdate:modelValue":e[9]||(e[9]=n=>s.cow.mom=n),icon:"genderFemale"},null,8,["modelValue"])]),_:1})]),s.alert?(u(),y(h,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:o(()=>[O(_(s.alert),1)]),_:1})):z("",!0),a(p),a(L,{type:"justify-center"},{default:o(()=>[a(D,{label:"บันทึก",color:"success",type:"submit",loading:s.loading},null,8,["loading"]),a(D,{label:"ยกเลิก",color:"danger",onClick:r.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[T,r.value]])]),_:1},512)),[[T,r.value]])}const he=R(me,[["render",fe]]),pe={data(){return{perPage:20,currentPage:0,modalCow:!1,cowStatus:M(),items:[],forms:[{label:"โค",value:"code",type:"ddl",module:"cow",valueType:"code"},{label:"สถานะ",value:"status",options:M()},{label:"คุณภาพน้ำนม",value:"quality",options:G()},{label:"คอก",value:"corral",icon:"barn"}],search:{code:null,status:"",quality:"",corral:"",flag:"Y"},mode:"create",loading:!1}},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const t=[];for(let e=0;e<this.numPages;e++)t.push(e);return t},user(){return this.$store.state.auth.user}},components:{SectionMain:se,LayoutAuthenticated:le,BaseButton:J,BaseIcon:oe,BaseButtons:K,CardBox:W,FormControl:Q,FormField:$,BaseDivider:Y,DDLCow:de,CreateCowModal:he,Table:re,SectionTitleBarSub:ne,Criteria:ie,UserAvatar:X,BaseLevel:Z},created(){this.getCows()},methods:{async getCows(){var e,m;this.loading=!0;const t=await V.all(this.search);if(this.items=[],t.data){this.items=t.data.cows,this.loading=!1;for(let d of this.items){const s=await V.getDetails(d._id);s.data&&(d.grade=(m=(e=s.data)==null?void 0:e.quality)==null?void 0:m.grade,d.sum=s.data.sum)}}},async removeCow(t){this.loading=!0,(await V.update(t,{flag:"N"})).data&&this.getCows(),this.loading=!1},detail(t){this.$router.push({name:"cowDetail",params:{id:t._id}})},reset(){this.search.code=null,this.search.status="",this.search.quality="",this.search.corral=""},filter(t){const e={},m={},d={};return t.status==1?(e.icon="humanPregnant",e.style="text-blue-500 bg-indigo-900 rounded-l  p-1 mr-2"):t.status==2?(e.icon="waterOff",e.style="text-rose-500 bg-red-900 rounded-l p-1 mr-2"):t.status==3?(e.icon="water",e.style="text-white bg-teal-900 rounded-l p-1 mr-2"):t.status==4&&(e.icon="babyFaceOutline",e.style="text-yellow-500 bg-amber-900 rounded-l p-1 mr-2"),e.desc=this.cowStatus[t.status].label,t.grade==="A+"?m.style="text-lime-500":t.grade==="A"?m.style="text-green-500":t.grade==="B"?m.style="text-white":t.grade==="C"?m.style="text-orange-500":t.grade==="D"&&(m.style="text-red-500"),t.quality==1?(d.icon="thumbUp",d.style="text-blue-600 "):t.quality==2?(d.icon="thumbsUpDown",d.style=""):t.quality==3?(d.icon="thumbDown",d.style="text-red-600 "):t.quality==4&&(d.icon="flaskEmptyOffOutline",d.style="text-orange-500 "),{status:e,grade:m,quality:d}},calAge(t){return ue(t)}}},_e={key:0,class:"grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-5 md:grid-cols-4"},we={class:"text-center mt-2"},ye={class:"lg:text-xl text-md flex justify-center"},be={key:0},Ce={key:1},ve={class:"grid lg:grid-cols-6 grid-cols-2 gap-1 mt-2 lg:p-2"},Be={class:"dark:text-gray-300 col-span-2 font-bold text-sm text-center dark:bg-gray-800 bg-white lg:rounded h-6 min-w-4 shadow"},xe={class:"mr-2"},ke={class:"dark:text-gray-300 font-bold dark:bg-gray-800 lg:rounded h-6 text-sm min-full lg:col-span-3 bg-white col-span-2 shadow"},Ve={class:"mr-2"},De={class:"dark:text-gray-300 text-left dark:bg-gray-800 font-bold lg:rounded bg-white h-6 min-w-4 text-sm shadow"},qe={class:"dark:text-gray-300 text-left dark:bg-gray-800 font-bold lg:rounded bg-white h-6 min-w-4 text-sm col-span-3 shadow"},Se=c("div",{class:"ml-1"},"อายุ",-1),Ue={class:"mr-2"},Le={class:"dark:text-gray-300 text-left dark:bg-gray-800 font-bold lg:rounded bg-white h-6 min-w-4 text-sm lg:col-span-3 col-span-2 shadow"},Pe={key:0,class:"mr-2"},Fe={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},Ae=c("p",null," กำลังโหลดข้อมูล...",-1),je={class:"p-2 mt-2 border-t border-gray-100 dark:border-gray-800"};function Me(t,e,m,d,s,r){const S=i("SectionTitleBarSub"),U=i("CreateCowModal"),g=i("Criteria"),f=i("UserAvatar"),h=i("BaseLevel"),p=i("BaseIcon"),D=i("CardBox"),L=i("BaseButton"),P=i("BaseButtons"),F=i("SectionMain"),n=i("LayoutAuthenticated");return u(),y(n,null,{default:o(()=>[a(F,null,{default:o(()=>[a(S,{icon:"cow",title:"โค",btnText:"เพิ่มโค","has-btn-add":"",onOpenModal:e[0]||(e[0]=l=>{s.mode="create",s.modalCow=!0})}),a(U,{modelValue:s.modalCow,"onUpdate:modelValue":e[1]||(e[1]=l=>s.modalCow=l),onConfirm:r.getCows,mode:s.mode,dataEdit:t.dataEdit},null,8,["modelValue","onConfirm","mode","dataEdit"]),a(g,{grid:"grid-cols-2 md:grid-cols-3 lg:grid-cols-5",onSearch:r.getCows,onReset:r.reset,forms:s.forms,search:s.search},null,8,["onSearch","onReset","forms","search"]),s.loading?(u(),b("div",Fe,[a(p,{path:"dotsCircle",size:"22",class:"animate-spin"}),Ae])):(u(),b("div",_e,[(u(!0),b(N,null,H(r.itemsPaginated,l=>(u(),y(D,{key:l.name,onClick:q=>r.detail(l),class:"bg-gray-200","has-table":"",hoverable:""},{default:o(()=>{var q,E;return[a(h,{type:"justify-center"},{default:o(()=>[a(f,{username:"profile-card",class:"lg:w-24 lg:h-24 w-20 h-20 mt-2",avatar:l.image},null,8,["avatar"])]),_:2},1024),c("div",we,[c("h4",ye,[c("p",{class:A(((E=(q=r.filter(l))==null?void 0:q.grade)==null?void 0:E.style)+"  font-extrabold  lg:text-base text-sm text-center bg-black rounded-full lg:h-6 h-5 w-6 shadow-xl mr-1")},[l.grade?(u(),b("div",be,_(l.grade),1)):(u(),b("div",Ce,[a(p,{path:"dotsCircle",size:"16",class:"animate-spin text-gray-500"})]))],2),O(" "+_(l.name),1)]),c("div",ve,[c("p",Be,[a(h,{type:"justify-between"},{default:o(()=>[a(p,{path:"barn",size:"16"}),c("div",xe,_(l.corral),1)]),_:2},1024)]),c("p",ke,[a(h,{type:"justify-between"},{default:o(()=>{var w,C,v,B,x,k;return[l.status?(u(),y(p,{key:0,class:A((C=(w=r.filter(l))==null?void 0:w.status)==null?void 0:C.style),path:(B=(v=r.filter(l))==null?void 0:v.status)==null?void 0:B.icon,size:"16"},null,8,["class","path"])):z("",!0),c("div",Ve,_((k=(x=r.filter(l))==null?void 0:x.status)==null?void 0:k.desc),1)]}),_:2},1024)]),c("p",De,[a(h,{type:"justify-center"},{default:o(()=>{var w,C,v,B,x,k;return[(C=(w=r.filter(l))==null?void 0:w.quality)!=null&&C.icon?(u(),y(p,{key:0,path:(B=(v=r.filter(l))==null?void 0:v.quality)==null?void 0:B.icon,size:"16",class:A((k=(x=r.filter(l))==null?void 0:x.quality)==null?void 0:k.style)},null,8,["path","class"])):z("",!0)]}),_:2},1024)]),c("p",qe,[a(h,{type:"justify-between"},{default:o(()=>[Se,c("div",Ue,_(r.calAge(l.birthDate)),1)]),_:2},1024)]),c("p",Le,[a(h,{type:"justify-between"},{default:o(()=>{var w;return[a(p,{path:"cupWater",size:"16"}),l.sum?(u(),b("div",Pe,"~ "+_(t.$filters.number((w=l.sum)==null?void 0:w.rawmilk)),1)):(u(),y(p,{key:1,path:"dotsCircle",size:"16",class:"animate-spin text-gray-500 mr-2"}))]}),_:2},1024)])])])]}),_:2},1032,["onClick"]))),128))])),c("div",je,[a(h,null,{default:o(()=>[a(P,null,{default:o(()=>[(u(!0),b(N,null,H(r.pagesList,l=>(u(),y(L,{key:l,active:l===s.currentPage,label:l+1,small:"",onClick:q=>s.currentPage=l},null,8,["active","label","onClick"]))),128))]),_:1}),c("small",null,"หน้า "+_(r.currentPageHuman)+" จาก "+_(r.numPages),1)]),_:1})])]),_:1})]),_:1})}const Ke=R(pe,[["render",Me]]);export{Ke as default};
