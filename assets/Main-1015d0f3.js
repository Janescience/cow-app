import{z as p,C as _,D as f,E as h,c as w,w as s,F as t,o as S,d as a,s as b}from"./index-bd6b8fcb.js";import{C as x}from"./Criteria-f1df4298.js";import{R as C}from"./report-a9ce7605.js";import"./alert-1ae8d807.js";import"./CardBoxCollapse-d460ccc6.js";import"./FormField-ca305bef.js";import"./FormCheckRadioPicker-aa33867f.js";import"./Cow-05e638a5.js";import"./cow-d4312feb.js";import"./Vaccine-4ffe9a49.js";const L={data(){return{excelHtml:"",forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"วันที่รักษา",value:"date",icon:"calendar",type:"date"}],search:{cow:null,date:null},loading:!1}},components:{SectionMain:_,LayoutAuthenticated:f,SectionTitleBarSub:h,Criteria:x},methods:{async exportExcel(c){this.loading=!0;const o=await C.cow(c);if(o.data){const r=window.URL.createObjectURL(new Blob([o.data])),e=document.createElement("a");e.href=r,e.setAttribute("download","cows.xlsx"),document.body.appendChild(e),e.click(),e.remove()}this.loading=!1},reset(){this.search.cow=null,this.search.date=null}}},g=["innerHTML"];function y(c,o,r,e,n,i){const l=t("SectionTitleBarSub"),d=t("Criteria"),m=t("SectionMain"),u=t("LayoutAuthenticated");return S(),w(u,null,{default:s(()=>[a(m,null,{default:s(()=>[a(l,{icon:"doctor",title:"ประวัติและคุณลักษณะของวัว"}),a(d,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:i.exportExcel,onReset:i.reset,forms:n.forms,search:n.search,btnSubmitLabel:"ออกรายงาน"},null,8,["onSearch","onReset","forms","search"]),b("div",{innerHTML:n.excelHtml},null,8,g)]),_:1})]),_:1})}const U=p(L,[["render",y]]);export{U as default};