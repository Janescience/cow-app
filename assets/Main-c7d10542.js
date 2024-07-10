import{c as Y,_ as H,b as N}from"./BaseDivider-5d6d6cd6.js";import{_ as j}from"./LayoutAuthenticated-188296d3.js";import{_ as q}from"./SectionTitleBarSub-bf101c49.js";import{_ as z}from"./UserAvatar-8818f699.js";import{v as F,_ as I,h as O,y as E,x as G,c as _,w as d,z as l,o as c,d as n,s as m,F as k,D as B,j as r,t as i,f as J}from"./index-a11eb788.js";import{T as K}from"./Table-eb9e0d2d.js";import{C as Q}from"./Criteria-6bddc43b.js";import{M as W}from"./Modal-95ffbd82.js";import{R as f}from"./reproduction-56914f55.js";import{a as v,r as y}from"./reproduct-6d4af9c3.js";import{T as w}from"./alert-eb15281a.js";import"./CardBoxModal-4190cff7.js";import"./FormControl-913bfab2.js";import"./CardBoxCollapse-432b6c08.js";import"./FormField-eae473e8.js";import"./FormCheckRadioPicker-e4bf5636.js";import"./Cow-523e81c3.js";import"./cow-1c284aa3.js";import"./Recipe-226a7e18.js";import"./Vaccine-69f9d8fc.js";import"./Corral-a31b28fc.js";import"./NotificationBar-c518edd8.js";const X={data(){return{perPage:12,currentPage:0,openModal:!1,items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"สถานะ",value:"status",options:v()},{label:"ผล",value:"result",options:y()},{label:"วันที่เข้าระบบสืบพันธุ์",value:"loginDate",icon:"calendar",type:"date"},{label:"วันที่เป็นสัด",value:"estrusDate",icon:"calendar",type:"date"},{label:"วันที่ผสมพันธุ์",value:"matingDate",icon:"calendar",type:"date"},{label:"วันที่ตรวจท้อง",value:"checkDate",icon:"calendar",type:"date"}],search:{cow:null,loginDate:null,estrusDate:null,matingDate:null,checkDate:null,status:"",result:""},loading:!1,mode:"create",modalData:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"รหัสโค",value:"cow.code"},{label:"ชื่อโค",value:"cow.name"},{label:"วันที่เข้าระบบสืบพันธุ์",class:"text-center",value:"loginDate",type:"date"},{label:"ผล",func:e=>y()[e.result].label},{label:"วันที่เป็นสัด",class:"text-center",value:"estrusDate",type:"date"},{label:"วันที่ผสมพันธุ์",class:"text-center",value:"matingDate",type:"date"},{label:"วันที่ตรวจท้อง",class:"text-center",value:"checkDate",type:"date"},{label:"พ่อพันธุ์",value:"dad"},{label:"สถานะ",func:e=>v()[e.status].label},{label:"วิธีรักษา",value:"howTo"}],buttons:[{label:"ลบ",type:"delete",color:"danger",condition:e=>e.status!="2"&&e.status!="3"},{label:"แก้ไข",type:"edit",color:"warning",condition:e=>e.status!="2"&&e.status!="3"}]}},components:{SectionMain:Y,LayoutAuthenticated:j,SectionTitleBarSub:q,Table:K,Modal:W,Criteria:Q,UserAvatar:z,CardBox:H,BaseLevel:I,BaseButtons:O,BaseButton:N},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const e=[];for(let s=0;s<this.numPages;s++)e.push(s);return e},getDataCopy(){return{...this.modalData}}},created(){this.getReproductions()},methods:{async getReproductions(){this.loading=!0;const e=await f.all(this.search);if(this.items=[],e.data){const s=e.data.reproducts,u=E.groupBy(s,"cow._id");for(let p of Object.keys(u)){const a=u[p];let o=a.length;this.items.push({cow:a[0].cow,count:o,reproducts:a})}}this.loading=!1},async remove(e){this.loading=!0,(await f.delete(e)).data&&(this.getReproductions(),w.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},async removeSelected(e){this.loading=!0;let s=[];for(let p of e)s.push(p._id);(await f.deletes(s)).data&&(this.getReproductions(),w.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.loginDate=null,this.search.estrusDate=null,this.search.matingDate=null,this.search.checkDate=null,this.search.status="",this.search.result="",this.getReproductions()},resetData(){this.modalData=null},history(e){this.$router.push({name:"reproductHistory",params:{cow:e.cow._id}})},formatDate(e){return G(e).format("DD/MM/YYYY")},mapReproductResult(e){return y()[e].label},mapReproductStatus(e){return v()[e].label}}},Z={key:0,class:"grid lg:gap-3 md:gap-2 gap-1 grid-cols-2 lg:grid-cols-5 md:grid-cols-3"},$={class:"text-center mt-2"},ee={class:"lg:text-lg text-xs flex justify-center"},te={class:"dark:text-gray-400 text-orange-600 mr-1"},ae={class:"grid grid-cols-2 gap-1 text-sm"},se=r("div",{class:"dark:text-gray-400"}," ผสมทั้งหมด ",-1),oe={class:"text-orange-600 font-extrabold"},re=r("div",{class:"dark:text-gray-400"}," ผสมล่าสุด ",-1),le={class:"dark:text-gray-100"},ne=r("div",{class:"dark:text-gray-400"}," ผลล่าสุด ",-1),ce={class:"dark:text-gray-100"},ie={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},de=r("p",null," กำลังโหลดข้อมูล...",-1),ue={class:"p-3 mt-2 border-t border-gray-100 dark:border-gray-800 dark:bg-gray-900 lg:rounded-lg shadow-lg"};function pe(e,s,u,p,a,o){const C=l("SectionTitleBarSub"),M=l("Modal"),P=l("Criteria"),S=l("UserAvatar"),b=l("BaseLevel"),R=l("CardBox"),L=l("BaseIcon"),T=l("BaseButton"),A=l("BaseButtons"),V=l("SectionMain"),U=l("LayoutAuthenticated");return c(),_(U,null,{default:d(()=>[n(V,null,{default:d(()=>[n(C,{icon:"reproduction",title:"การผสมพันธุ์",btnText:"เพิ่มการผสมพันธุ์","has-btn-add":"",onOpenModal:s[0]||(s[0]=t=>{a.mode="create",a.openModal=!0})}),n(M,{modelValue:a.openModal,"onUpdate:modelValue":s[1]||(s[1]=t=>a.openModal=t),mode:a.mode,data:o.getDataCopy,onConfirm:o.getReproductions,onCancel:o.resetData},null,8,["modelValue","mode","data","onConfirm","onCancel"]),n(P,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:o.getReproductions,onReset:o.reset,forms:a.forms,search:a.search,btnLoading:a.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),a.loading?(c(),m("div",ie,[n(L,{path:"dotsCircle",size:"22",class:"animate-spin"}),de])):(c(),m("div",Z,[(c(!0),m(k,null,B(o.itemsPaginated,t=>{var g;return c(),_(R,{key:(g=t==null?void 0:t.cow)==null?void 0:g._id,class:"bg-gray-200 p-2",onClick:h=>o.history(t),"has-table":"",hoverable:""},{default:d(()=>{var h,x;return[n(b,{type:"justify-center"},{default:d(()=>{var D;return[n(S,{username:"profile-card",class:"lg:w-24 lg:h-24 w-16 h-16 mt-2",avatar:(D=t==null?void 0:t.cow)==null?void 0:D.image},null,8,["avatar"])]}),_:2},1024),r("div",$,[r("h4",ee,[r("p",te,i((h=t==null?void 0:t.cow)==null?void 0:h.code),1),J(" - "+i((x=t==null?void 0:t.cow)==null?void 0:x.name),1)])]),r("div",ae,[se,r("div",null,[r("div",oe,i(t.count),1)]),re,r("h4",le,i(o.formatDate(t.reproducts[0].matingDate)),1),ne,r("div",ce,i(o.mapReproductStatus(t.reproducts[0].status)),1)])]}),_:2},1032,["onClick"])}),128))])),r("div",ue,[n(b,null,{default:d(()=>[n(A,null,{default:d(()=>[(c(!0),m(k,null,B(o.pagesList,t=>(c(),_(T,{key:t,active:t===a.currentPage,label:t+1,teeny:"",onClick:g=>a.currentPage=t},null,8,["active","label","onClick"]))),128))]),_:1}),r("small",null,"หน้า "+i(o.currentPageHuman)+" จาก "+i(o.numPages),1)]),_:1})])]),_:1})]),_:1})}const Ue=F(X,[["render",pe]]);export{Ue as default};
