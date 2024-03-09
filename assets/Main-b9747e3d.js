import{c as v}from"./BaseDivider-92a0f226.js";import{_ as g}from"./LayoutAuthenticated-bfcabf3e.js";import{_ as h}from"./SectionTitleBarSub-d1c9d639.js";import{C as w}from"./CriteriaReport-2b809154.js";import{T as _}from"./Table-3d752fda.js";import{R as n}from"./report-812107b9.js";import{v as x,x as y,c as r,w as c,z as o,o as m,d as i,g as L}from"./index-c8301f55.js";import{s as S,q as k,f as C}from"./cow-dd4d495a.js";import"./UserAvatar-9e392228.js";import"./CardBoxModal-989c2f17.js";import"./CardBoxCollapse-cc74730f.js";import"./FormField-c07d5fcc.js";import"./FormControl-0cbf83ef.js";import"./FormCheckRadioPicker-b7967c85.js";import"./Cow-6e9470ab.js";import"./cow-197f9a15.js";import"./Recipe-ae3d1971.js";import"./Vaccine-ebb45c10.js";const T={data(){return{items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"สถานะ",value:"status",options:S()},{label:"คุณภาพน้ำนม",value:"quality",options:k()},{label:"คอก",value:"corral",icon:"barn"},{label:"Flag",value:"flag",options:C()}],datas:[{label:"รหัส",class:"text-center",value:"code"},{label:"ชื่อ",value:"name"},{label:"วันเกิด",class:"text-center",value:"birthDate",type:"date"},{label:"วันที่นำมาเลี้ยง",class:"text-center",value:"adopDate",type:"date"},{label:"น้ำหนัก",value:"weight"},{label:"อายุ",value:"age"},{label:"คอก",value:"corral"},{label:"สถานะ",class:"text-center",value:"status"},{label:"พ่อพันธู์",class:"text-center",value:"dad"},{label:"แม่พันธุ์",class:"text-center",value:"mom"},{label:"น้ำนมเฉลี่ย/วัน",class:"text-center",value:"milkAvg",type:"number"},{label:"น้ำนมทั้งหมด",class:"text-center",value:"milkSum",type:"number"},{label:"คุณภาพนม",class:"text-center",value:"quality"},{label:"ความคุ้มค่า",class:"text-center",value:"level"},{label:"FLAG",class:"text-center",value:"flag"},{label:"หมายเหตุ",value:"remark"}],search:{cow:null,status:"",quality:"",corral:null,flag:""},loading:!1,viewLoading:!1}},components:{SectionMain:v,LayoutAuthenticated:g,SectionTitleBarSub:h,Criteria:w,Table:_},methods:{async view(a){this.viewLoading=!0;const l=await n.cowView(a);this.items=[],l.data&&(this.items=l.data.cows),this.viewLoading=!1},async print(){this.loading=!0;const a=await n.cowExport(this.search);if(a.data){const l=window.URL.createObjectURL(new Blob([a.data])),t=document.createElement("a");t.href=l,t.setAttribute("download","ข้อมูลโค "+y().format("DDMMYYYYHHmm")+".xlsx"),document.body.appendChild(t),t.click(),t.remove()}this.loading=!1},reset(){this.items=[],this.search={}}}};function V(a,l,t,A,e,s){const u=o("SectionTitleBarSub"),d=o("Criteria"),p=o("Table"),b=o("SectionMain"),f=o("LayoutAuthenticated");return m(),r(f,null,{default:c(()=>[i(b,null,{default:c(()=>[i(u,{icon:"cow",title:"รายงานข้อมูลโค"}),i(d,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.print,onView:s.view,onReset:s.reset,forms:e.forms,search:e.search,btnLoading:e.loading,btnViewLoading:e.viewLoading,collapse:""},null,8,["onSearch","onView","onReset","forms","search","btnLoading","btnViewLoading"]),e.items.length>0?(m(),r(p,{key:0,title:"ข้อมูลโค",perPage:"20",items:e.items,datas:e.datas,loading:e.viewLoading},null,8,["items","datas","loading"])):L("",!0)]),_:1})]),_:1})}const K=x(T,[["render",V]]);export{K as default};
