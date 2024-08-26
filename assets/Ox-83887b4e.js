import{_ as I}from"./LayoutAuthenticated-1901d823.js";import{c as H,b as R,d as Y,_ as G,a as J}from"./BaseDivider-61ee89c2.js";import{v as K,h as Q,_ as W,c as m,w as g,z as o,o as n,d as i,s as f,F as A,D as L,j as l,t as u,f as X,n as p,g as y}from"./index-d112b817.js";import{_ as Z}from"./UserAvatar-3f93aca2.js";import{_ as $}from"./FormField-1c9cc7b4.js";import{_ as ee}from"./FormControl-ea42ddb9.js";import{T as te}from"./Table-9dcddb90.js";import{C as se}from"./Criteria-35c42e3f.js";import{_ as ae}from"./SectionTitleBarSub-8c22e3c4.js";import{C as re}from"./Modal-15492d1d.js";import{C as T}from"./cow-9a42aa2f.js";import{g as le}from"./age-calculate-d72a3186.js";import{s as F}from"./cow-58bac0c8.js";import"./CardBoxModal-037276b0.js";import"./CardBoxCollapse-451f0abb.js";import"./FormCheckRadioPicker-49cc75de.js";import"./Cow-ed7bc072.js";import"./Recipe-d0be585f.js";import"./Vaccine-e5427c6f.js";import"./Corral-3dbf33df.js";import"./NotificationBar-028f985c.js";import"./ImageUpload-aef7f4bd.js";import"./alert-32d4a5a7.js";const oe={data(){return{perPage:18,currentPage:0,modalCow:!1,cowStatus:F("search","M"),items:[],forms:[{label:"โค",value:"code",type:"ddl",module:"cow",valueType:"code",filter:{sex:"M"}},{label:"สถานะ",value:"status",options:F("search","M")},{label:"คอก",value:"corral",type:"ddl",module:"corral",valueType:"id"}],search:{code:null,status:"",quality:"",corral:null,sex:"M",flag:"Y"},mode:"create",loading:!1}},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const e=[];for(let s=0;s<this.numPages;s++)e.push(s);return e},user(){return this.$store.state.auth.user}},components:{SectionMain:H,LayoutAuthenticated:I,BaseButton:R,BaseIcon:Y,BaseButtons:Q,CardBox:G,FormControl:ee,FormField:$,BaseDivider:J,CreateCowModal:re,Table:te,SectionTitleBarSub:ae,Criteria:se,UserAvatar:Z,BaseLevel:W},created(){this.getCows()},methods:{async getCows(){this.loading=!0;const e=await T.all(this.search);this.items=[],e.data&&(this.items=e.data.cows,this.loading=!1)},async removeCow(e){this.loading=!0,(await T.update(e,{flag:"N"})).data&&this.getCows(),this.loading=!1},detail(e){this.$router.push({name:"cowDetail",params:{id:e._id}})},reset(){this.search.code=null,this.search.status="",this.search.quality="",this.search.sex="",this.search.corral=""},filter(e){const s={},d={},c={},a={};return e.sex=="F"?(a.icon="genderFemale",a.style="text-rose-500 bg-red-300 rounded-full  p-1 mr-1"):e.sex=="M"&&(a.icon="genderMale",a.style="text-blue-500 bg-indigo-300 rounded-full p-1 mr-1"),e.status==1?(s.icon="humanPregnant",s.style="text-blue-500 bg-indigo-900 rounded-full  p-1 mr-1"):e.status==2?(s.icon="waterOff",s.style="text-rose-500 bg-red-900 rounded-full p-1 mr-1"):e.status==3?(s.icon="water",s.style="text-white bg-teal-700 rounded-full p-1 mr-1"):e.status==4&&(s.icon="babyFaceOutline",s.style="text-yellow-400 bg-amber-900 rounded-full mr-1"),s.desc=this.cowStatus[e.status].label,e.grade==="A+"?d.style="text-lime-500":e.grade==="A"?d.style="text-green-500":e.grade==="B"?d.style="text-white":e.grade==="C"?d.style="text-orange-500":e.grade==="D"&&(d.style="text-red-500"),e.quality==1?(c.icon="medalOutline",c.style="text-green-600  bg-gray-800 rounded-full"):e.quality==3?(c.icon="medalOutline",c.style="text-red-600 bg-gray-800 rounded-full"):e.quality==2&&(c.icon="medalOutline",c.style="text-gray-400 bg-gray-800 rounded-full"),{status:s,grade:d,quality:c,sex:a}},calAge(e){return le(e).ageString}}},ne={key:0,class:"grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-6 md:grid-cols-4"},ie={class:"flex justify-between md:text-sm text-xs p-2"},ce={class:""},de=l("hr",{class:"border-1 dark:border-gray-800 border-gray-300"},null,-1),ue={class:"text-center mt-2"},ge=l("hr",{class:"border-1 dark:border-gray-800 border-gray-300"},null,-1),me={class:"lg:text-lg text-xs flex justify-center"},fe={class:"dark:text-gray-400 text-gray-500 mr-1"},he=l("hr",{class:"border-1 dark:border-gray-800 border-gray-300"},null,-1),_e={class:"justify-center flex lg:p-2 p-1"},pe={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},ye=l("p",null," กำลังโหลดข้อมูล...",-1),xe={class:"p-3 mt-2 border-t border-gray-100 dark:border-gray-800 dark:bg-gray-900 lg:rounded-lg shadow-lg"};function be(e,s,d,c,a,r){const O=o("SectionTitleBarSub"),V=o("CreateCowModal"),j=o("Criteria"),q=o("UserAvatar"),x=o("BaseLevel"),_=o("BaseIcon"),D=o("CardBox"),N=o("BaseButton"),E=o("BaseButtons"),U=o("SectionMain"),z=o("LayoutAuthenticated");return n(),m(z,null,{default:g(()=>[i(U,null,{default:g(()=>[i(O,{icon:"cow",title:"จัดการโคตัวผู้",btnText:"เพิ่มโค","has-btn-add":"",onOpenModal:s[0]||(s[0]=t=>{a.mode="create",a.modalCow=!0})}),i(V,{modelValue:a.modalCow,"onUpdate:modelValue":s[1]||(s[1]=t=>a.modalCow=t),onConfirm:r.getCows,mode:a.mode,dataEdit:e.dataEdit},null,8,["modelValue","onConfirm","mode","dataEdit"]),i(j,{grid:"grid-cols-2 md:grid-cols-3 lg:grid-cols-5",onSearch:r.getCows,onReset:r.reset,forms:a.forms,search:a.search},null,8,["onSearch","onReset","forms","search"]),a.loading?(n(),f("div",pe,[i(_,{path:"dotsCircle",size:"22",class:"animate-spin"}),ye])):(n(),f("div",ne,[(n(!0),f(A,null,L(r.itemsPaginated,t=>(n(),m(D,{key:t.name,onClick:h=>r.detail(t),class:"bg-gray-100","has-table":"",hoverable:""},{default:g(()=>{var h,b,w,C,v,B,k,P,S,M;return[l("div",ie,[l("div",null,"คอก "+u(t.corral||"-"),1),l("p",ce,u(r.calAge(t.birthDate)),1)]),de,i(x,{type:"justify-center"},{default:g(()=>[i(q,{username:"profile-card",class:"lg:w-20 lg:h-20 w-16 h-16 mt-2",avatar:t.image},null,8,["avatar"])]),_:2},1024),l("div",ue,[ge,l("h4",me,[l("p",fe,u(t.code),1),X(" - "+u(t.name),1)]),he,l("div",_e,[t.sex?(n(),m(_,{key:0,class:p((b=(h=r.filter(t))==null?void 0:h.sex)==null?void 0:b.style),path:(C=(w=r.filter(t))==null?void 0:w.sex)==null?void 0:C.icon,w:"w-4 lg:w-6",h:"h-4 lg:h-6"},null,8,["class","path"])):y("",!0),t.grade?(n(),f("p",{key:1,class:p(((B=(v=r.filter(t))==null?void 0:v.grade)==null?void 0:B.style)+" flex items-center justify-center font-extrabold  lg:text-base text-sm text-center bg-gray-800 rounded-full lg:h-6 lg:w-6 w-4 h-4 shadow-xl mr-1")},[l("div",null,u(t.grade),1)],2)):y("",!0),t.status?(n(),m(_,{key:2,class:p((P=(k=r.filter(t))==null?void 0:k.status)==null?void 0:P.style),path:(M=(S=r.filter(t))==null?void 0:S.status)==null?void 0:M.icon,w:"w-4 lg:w-6",h:"h-4 lg:h-6"},null,8,["class","path"])):y("",!0)])])]}),_:2},1032,["onClick"]))),128))])),l("div",xe,[i(x,null,{default:g(()=>[i(E,null,{default:g(()=>[(n(!0),f(A,null,L(r.pagesList,t=>(n(),m(N,{key:t,active:t===a.currentPage,label:t+1,teeny:"",onClick:h=>a.currentPage=t},null,8,["active","label","onClick"]))),128))]),_:1}),l("small",null,"หน้า "+u(r.currentPageHuman)+" จาก "+u(r.numPages),1)]),_:1})])]),_:1})]),_:1})}const Re=K(oe,[["render",be]]);export{Re as default};