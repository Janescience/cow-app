import{I as p,J as h,K as f,S as _,L as w,M as S,c as b,w as i,N as n,o as y,d as r}from"./index.a033fd67.js";import{C as x}from"./Criteria.24f9c5e6.js";import"./alert.d643eabf.js";import"./FormField.b1530e79.js";import"./FormCheckRadioPicker.22ff1844.js";import"./Cow.7c7ec76c.js";import"./cow.9cd5e5f0.js";async function g(t={}){let e="?";if(t.cow&&(e=e+`cow=${t.cow}&`),t.date){const a=h(new Date(t.date)).format("YYYY-MM-DD");e=e+`date=${a}&`}return t?e.replace(/&*$/,""):""}class v{async cow(e){const a=await g(e);return p.get("/report/cow"+a,{responseType:"blob"}).then(o=>o)}}var C=new v;const L={data(){return{forms:[{label:"\u0E42\u0E04",value:"cow",type:"ddl",module:"cow"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E01\u0E29\u0E32",value:"date",icon:"calendar",type:"date"}],search:{cow:null,date:null},loading:!1}},components:{SectionMain:_,LayoutAuthenticated:w,SectionTitleBarSub:S,Criteria:x},methods:{async exportExcel(t){this.loading=!0;const e=await C.cow(t);if(e.data){const a=window.URL.createObjectURL(new Blob([e.data])),o=document.createElement("a");o.href=a,o.setAttribute("download","cows.xlsx"),document.body.appendChild(o),o.click(),o.remove()}this.loading=!1},reset(){this.search.cow=null,this.search.date=null}}};function M(t,e,a,o,c,s){const l=n("SectionTitleBarSub"),d=n("Criteria"),u=n("SectionMain"),m=n("LayoutAuthenticated");return y(),b(m,null,{default:i(()=>[r(u,null,{default:i(()=>[r(l,{icon:"doctor",title:"\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E41\u0E25\u0E30\u0E04\u0E38\u0E13\u0E25\u0E31\u0E01\u0E29\u0E13\u0E30\u0E02\u0E2D\u0E07\u0E27\u0E31\u0E27"}),r(d,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.exportExcel,onReset:s.reset,forms:c.forms,search:c.search,btnSubmitLabel:"\u0E2D\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19"},null,8,["onSearch","onReset","forms","search"])]),_:1})]),_:1})}var D=f(L,[["render",M]]);export{D as default};