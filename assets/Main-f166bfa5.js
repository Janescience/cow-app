import{y as h,z as g,B as b,C as _,D as y,E as S,T,c as v,w as o,F as s,o as x,d as n}from"./index-efcf4ef9.js";import{C as B}from"./Criteria-8171750e.js";import{N as C}from"./notification-ba7be737.js";import{T as r}from"./alert-06176626.js";import"./CardBoxCollapse-9b156af1.js";import"./FormField-2d06baa7.js";import"./FormCheckRadioPicker-84fa76bc.js";import"./Cow-e7483fe3.js";import"./cow-b5abd581.js";import"./Vaccine-502ccf7e.js";const D="/line";class L{notify(e){return h.post(D+"/notify",e)}}const A=new L,l=t=>t=="ddl"?[{id:"",label:"ทั้งหมด"},{id:"S",label:"สำเร็จ"},{id:"F",label:"ไม่สำเร็จ"}]:{S:"สำเร็จ",F:"ไม่สำเร็จ"},c=t=>t=="ddl"?[{id:"",label:"ทั้งหมด"},{id:"B",label:"ระบบ(ตามเงื่อนไข)"},{id:"T",label:"ทดสอบจากผู้ใช้"},{id:"S",label:"ระบบ(อัตโนมัติ)"}]:{B:"ระบบ(ตามเงื่อนไข)",T:"ทดสอบจากผู้ใช้",S:"ระบบ(อัตโนมัติ)"},M={data(){return{items:[],forms:[{label:"วันที่",value:"createdAt",icon:"calendar",type:"date"},{label:"ประเภท",value:"type",options:c("ddl")},{label:"สถานะ",value:"status",options:l("ddl")},{label:"ข้อความ",value:"message"}],search:{createdAt:null,type:"",status:""},loading:!1,datas:[{label:"วันที่",class:"text-center",func:t=>b(t.createdAt).format("DD/MM/YYYY HH:mm:ss")},{label:"ประเภท",class:"text-center",func:t=>c()[t.type]},{label:"ข้อความ",value:"message"},{label:"สถานะ",class:"text-center",func:t=>l()[t.status]}]}},components:{SectionMain:_,LayoutAuthenticated:y,SectionTitleBarSub:S,Table:T,Criteria:B},computed:{user(){return this.$store.state.auth.user}},created(){this.getDatas()},methods:{async getDatas(){this.loading=!0;const t=await C.getLogs(this.search);this.items=[],t.data&&(this.items=t.data.notifications),this.loading=!1},async notify(t){this.loading=!0;try{(await A.notify({message:t,lineToken:this.user.farm.lineToken})).data&&(this.loading=!1,r.fire({icon:"success",title:"แจ้งเตือนสำเร็จ"}),this.getDatas())}catch{this.loading=!1,r.fire({icon:"error",title:"แจ้งเตือนไม่สำเร็จ"})}},reset(){this.search.createdAt=null,this.search.type="",this.search.status="",this.getDatas()}}};function k(t,e,w,Y,a,i){const d=s("SectionTitleBarSub"),u=s("Criteria"),m=s("Table"),f=s("SectionMain"),p=s("LayoutAuthenticated");return x(),v(p,null,{default:o(()=>[n(f,null,{default:o(()=>[n(d,{icon:"bellCogOutline",title:"ประวัติการแจ้งเตือน","has-btn-add":"","btn-text":"ทดสอบแจ้งเตือน",onOpenModal:e[0]||(e[0]=F=>i.notify("ทดสอบการแจ้งเตือน"))}),n(u,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:i.getDatas,onReset:i.reset,forms:a.forms,search:a.search,btnLoading:a.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),n(m,{title:"รายการแจ้งเตือน",items:a.items,datas:a.datas,loading:a.loading},null,8,["items","datas","loading"])]),_:1})]),_:1})}const G=g(M,[["render",k]]);export{G as default};