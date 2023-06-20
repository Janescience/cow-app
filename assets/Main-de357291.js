import{z as h,B as o,S as f,C as _,D as b,c as S,w as l,E as r,o as g,d as n}from"./index-aa90ecc4.js";import{C as w}from"./Criteria-5aed4732.js";import{R as y}from"./report-e971eb3c.js";import{T as M}from"./alert-65ae1b70.js";import"./FormField-69d2c574.js";import"./FormCheckRadioPicker-d03f1e3b.js";import"./Cow-04d3a771.js";import"./cow-38190d81.js";import"./Vaccine-81234a7c.js";const x={data(){return{forms:[{label:"ปี",value:"year",type:"number",required:!0},{label:"เดือน ตั้งแต่",value:"monthFrom",type:"number",required:!0},{label:"เดือน ถึง",value:"monthTo",type:"number",required:!0}],search:{year:o().format("YYYY"),monthFrom:o().subtract(1,"months").format("MM"),monthTo:o().format("MM")},loading:!1}},components:{SectionMain:f,LayoutAuthenticated:_,SectionTitleBarSub:b,Criteria:w},methods:{async exportExcel(i){this.loading=!0;const t=await y.rawMilk(i);if(console.log(t),t.data.size<=4)M.fire({icon:"warning",title:"ไม่พบข้อมูล"});else{const s=window.URL.createObjectURL(new Blob([t.data])),e=document.createElement("a");e.href=s,e.setAttribute("download","ผลลิตน้ำนมดิบ ปี "+this.search.year+" "+o().format("DDMMYYYYHHmm")+".xlsx"),document.body.appendChild(e),e.click(),e.remove()}this.loading=!1},reset(){this.search.cow=null,this.search.date=null}}};function C(i,t,s,e,a,c){const m=r("SectionTitleBarSub"),u=r("Criteria"),d=r("SectionMain"),p=r("LayoutAuthenticated");return g(),S(p,null,{default:l(()=>[n(d,null,{default:l(()=>[n(m,{icon:"water",title:"ผลผลิตน้ำนมดิบ"}),n(u,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:c.exportExcel,onReset:c.reset,forms:a.forms,search:a.search,btnSubmitLabel:"ออกรายงาน",btnLoading:a.loading,collapse:!1},null,8,["onSearch","onReset","forms","search","btnLoading"])]),_:1})]),_:1})}const q=h(x,[["render",C]]);export{q as default};