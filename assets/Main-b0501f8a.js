import{z as p,C as f,D as _,E as g,B as w,c as b,w as c,F as o,o as S,d as n}from"./index-c7dbc85b.js";import{C as y}from"./Criteria-e20e7792.js";import{R as M}from"./report-1a0c5473.js";import{y as x,m as l}from"./date-66c7a2ce.js";import{T as D}from"./alert-8d006bd8.js";import"./CardBoxCollapse-a0763d92.js";import"./FormField-aa22bb7d.js";import"./Cow-8dbeaefc.js";import"./cow-92ec98b7.js";import"./Vaccine-b23aa5a7.js";const C={data(){return{forms:[{label:"ปี",value:"year",options:x(),required:!0},{label:"ตั้งแต่เดือน",value:"monthFrom",options:l(),required:!0},{label:"ถึงเดือน",value:"monthTo",options:l(),required:!0}],search:{year:new Date().getFullYear(),monthFrom:new Date().getMonth()+1,monthTo:new Date().getMonth()+1},loading:!1}},components:{SectionMain:f,LayoutAuthenticated:_,SectionTitleBarSub:g,Criteria:y},methods:{async exportExcel(r){this.loading=!0;const t=await M.rawMilk(r);if(console.log(t),t.data.size<=4)D.fire({icon:"warning",title:"ไม่พบข้อมูล"});else{const s=window.URL.createObjectURL(new Blob([t.data])),e=document.createElement("a");e.href=s,e.setAttribute("download","ผลผลิตน้ำนมดิบ ปี "+this.search.year+" "+w().format("DDMMYYYYHHmm")+".xlsx"),document.body.appendChild(e),e.click(),e.remove()}this.loading=!1},reset(){this.search.year=new Date().getFullYear(),this.search.monthForm=new Date().getMonth()+1,this.search.monthTo=new Date().getMonth()+1}}};function L(r,t,s,e,a,i){const m=o("SectionTitleBarSub"),h=o("Criteria"),u=o("SectionMain"),d=o("LayoutAuthenticated");return S(),b(d,null,{default:c(()=>[n(u,null,{default:c(()=>[n(m,{icon:"water",title:"ผลผลิตน้ำนมดิบ"}),n(h,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:i.exportExcel,onReset:i.reset,forms:a.forms,search:a.search,btnSubmitLabel:"ออกรายงาน",btnLoading:a.loading,collapse:!1},null,8,["onSearch","onReset","forms","search","btnLoading"])]),_:1})]),_:1})}const z=p(C,[["render",L]]);export{z as default};