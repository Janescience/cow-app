import{a as M,C as k,l as q,m as v,p as B,q as z,o as a,s as n,v as A,x as O,B as T,c as h,w as u,z as d,d as o,j as t,f as c,t as r}from"./index-c8301f55.js";import{c as j,_ as Q,d as R}from"./BaseDivider-92a0f226.js";import{_ as F}from"./SectionTitleBarSub-d1c9d639.js";import{_ as Y}from"./LayoutAuthenticated-bfcabf3e.js";import{_ as E}from"./FormControl-0cbf83ef.js";import{T as I}from"./Table-3d752fda.js";import{D as _}from"./dashboard-50893d78.js";import{q as L}from"./cow-dd4d495a.js";import"./UserAvatar-9e392228.js";import"./CardBoxModal-989c2f17.js";const N={__name:"DoughnutChart",props:{data:{type:Object,required:!0}},setup(s){const l=s,p=M(null);let g;k.register(...q),v(()=>{g=new k(p.value,{type:"doughnut",data:l.data,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0}}}})});const e=B(()=>l.data);return z(e,m=>{g&&(g.data=m,g.update())}),(m,f)=>(a(),n("canvas",{ref_key:"root",ref:p},null,512))}},V={data(){return{doughnutChartData:null,lineChartColors:{primary:"#00D1B2",danger:"#FF3860"},cow:{},quality:{},rawMilkDescSort:[],rawMilkAscSort:[],rawMilkSortColumns:[{label:"รูปโค",value:"cow.image",class:"text-center",type:"image",size:12},{label:"ชื่อโค",value:"cow.name",link:"cowDetail"},{label:"น้ำนมดิบ (กก.)",class:"text-right",value:"sumMilk",type:"number"}],loading:{cow:!0,quality:!0,rawMilkSort:!0}}},components:{DoughnutChart:N,SectionMain:j,CardBox:Q,SectionTitleBarSub:F,LayoutAuthenticated:Y,FormControl:E,BaseIcon:R,Table:I},computed:{user(){return this.$store.state.auth.user}},created(){this.getCow(),this.getRawMilkSort(),this.getQuality()},methods:{async getCow(){this.loading.cow=!0;const s=await _.getCow();s&&(this.cow=s.data),this.doughnutChartData=this.createDoughnutChart(),this.loading.cow=!1},async getQuality(){this.loading.quality=!0;const s=await _.getQuality();s&&(this.quality=s.data),this.loading.quality=!1},async getRawMilkSort(){this.loading.rawMilkSort=!0;const s=await _.getRawMilkDescSort();s&&(this.rawMilkDescSort=s.data.desc);const l=await _.getRawMilkAscSort();l&&(this.rawMilkAscSort=l.data.asc),this.loading.rawMilkSort=!1},getDoughnutChartData(){const s=[];return Object.keys(this.cow.rawmilkQuality).forEach(l=>{s.push(this.cow.rawmilkQuality[l])}),s},getDoughnutChartObject(){return{label:"คุณภาพน้ำนมดิบ",fill:!0,borderColor:"#000000",borderWidth:2,data:this.getDoughnutChartData(),weight:4,backgroundColor:["rgb(16 185 129)","rgb(59 130 246)","rgb(244 63 94)","rgb(245 158 11)"],hoverOffset:4}},createDoughnutChart(){const s=[];return L("create").forEach(l=>{s.push(`${l.label}`)}),{labels:s,datasets:[this.getDoughnutChartObject("primary","qty")]}},formatDate(s){return s?O(new Date(s)).format("DD/MM/YYYY"):""},addMonths(s,l){return this.formatDate(T(s,l))}}},P={class:"grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-1 mb-1 lg:mb-5"},W={class:"grid lg:grid-cols-2 grid-cols-1 gap-5"},G={class:"grid grid-cols-1 lg:grid-cols-3 lg:gap-5 gap-1 mb-1 lg:mb-5"},H={class:"grid grid-cols-3 gap-5"},J={class:"text-left mt-2 col-span-2"},K={class:"lg:text-3xl text-2xl text-yellow-600"},U={class:"text-left mt-2 col-span-2"},X={class:"lg:text-3xl text-2xl text-yellow-600"},Z={class:"text-left mt-2 col-span-2"},$={class:"lg:text-3xl text-2xl text-yellow-600"},tt={class:"text-left mt-2 col-span-2"},et={class:"lg:text-3xl text-2xl text-yellow-600"},st={key:0,class:"lg:h-56"},at={key:1,class:"text-gray-500"},ot={class:"grid grid-cols-5 gap-2 ml-3"},lt=t("p",{class:"text-2xl text-lime-500 font-extrabold"}," A+ ",-1),it=t("p",{class:"mt-2 col-span-3 flex"},[c("ดีมาก"),t("p",{class:"text-xs text-gray-500 mt-1 ml-2"},"(กำไร > 80%)")],-1),rt={key:0,class:"lg:text-3xl text-xl"},ct=t("p",{class:"text-2xl text-green-500 font-extrabold"}," A ",-1),nt=t("p",{class:"mt-2 col-span-3 flex"},[c("ดี"),t("p",{class:"text-xs text-gray-500 mt-1 ml-2"},"(กำไร 51% ~ 80%)")],-1),dt={key:2,class:"lg:text-3xl text-xl"},ht=t("p",{class:"dark:text-white text-black text-2xl font-extrabold"}," B ",-1),ut=t("p",{class:"text-sm mt-2 col-span-3 flex"},[c("ปกติ"),t("p",{class:"text-xs text-gray-500 mt-1 ml-2"},"(กำไร 31% ~ 50%)")],-1),gt={key:4,class:"lg:text-3xl text-xl"},xt=t("p",{class:"text-2xl text-orange-500 font-extrabold"}," C ",-1),_t=t("p",{class:"text-left mt-2 col-span-3 flex"},[c("แย่"),t("p",{class:"text-xs text-gray-500 mt-1 ml-2"},"(กำไร 1% ~ 30%)")],-1),pt={key:6,class:"lg:text-3xl text-xl"},mt=t("p",{class:"text-2xl text-red-500 font-extrabold"}," D ",-1),ft=t("p",{class:"text-left mt-2 col-span-3 flex"},[c("แย่มาก"),t("p",{class:"text-xs text-gray-500 text-left mt-1 ml-2"},"(กำไร <= 0%)")],-1),yt={key:8,class:"lg:text-3xl text-xl"};function wt(s,l,p,g,e,m){const f=d("SectionTitleBarSub"),y=d("Table"),x=d("CardBox"),i=d("BaseIcon"),C=d("doughnut-chart"),D=d("SectionMain"),S=d("LayoutAuthenticated");return a(),h(S,null,{default:u(()=>[o(D,null,{default:u(()=>[o(f,{icon:"chartPie",title:"ภาพรวมโค"}),t("div",P,[o(x,{icon:"sort",title:"อันดับน้ำนมดิบ","header-icon":"",class:"lg:col-span-2"},{default:u(()=>[t("div",W,[o(y,{title:"มากที่สุด 5 อันดับ",items:e.rawMilkDescSort,datas:e.rawMilkSortColumns,"no-paging":"",loading:e.loading.rawMilkSort},null,8,["items","datas","loading"]),o(y,{title:"น้อยที่สุด 5 อันดับ",items:e.rawMilkAscSort,datas:e.rawMilkSortColumns,"no-paging":"",loading:e.loading.rawMilkSort},null,8,["items","datas","loading"])])]),_:1})]),t("div",G,[o(x,{loading:e.loading.cow,icon:"cow",title:"สถานะโค",class:"text-center","header-icon":""},{default:u(()=>[t("div",H,[t("p",J,[o(i,{class:"text-white bg-teal-900 rounded-full p-1 mr-2",path:"water",size:"16"}),c(" โครีดนม ")]),t("h1",K,r(e.cow.milk),1),t("p",U,[o(i,{class:"text-blue-500 bg-indigo-900 rounded-full p-1 mr-2",path:"humanPregnant",size:"16"}),c("โคท้อง ")]),t("h1",X,r(e.cow.pregnant),1),t("p",Z,[o(i,{class:"text-yellow-500 bg-amber-900 rounded-full p-1 mr-2",path:"babyFaceOutline",size:"16"}),c(" โคเด็ก ")]),t("h1",$,r(e.cow.baby),1),t("p",tt,[o(i,{class:"text-rose-500 bg-red-900 rounded-full p-1 mr-2",path:"waterOff",size:"16"}),c("โคดราย ")]),t("h1",et,r(e.cow.dry),1)])]),_:1},8,["loading"]),o(x,{loading:e.loading.cow,icon:"thermometerWater",title:"คุณภาพนม",class:"text-center","header-icon":""},{default:u(()=>{var w,b;return[((b=(w=e.doughnutChartData)==null?void 0:w.datasets[0])==null?void 0:b.data[0])>0?(a(),n("div",st,[o(C,{data:e.doughnutChartData},null,8,["data"])])):(a(),n("div",at,"ไม่มีข้อมูล..."))]}),_:1},8,["loading"]),o(x,{icon:"counter",title:"คุณภาพโค","header-icon":""},{default:u(()=>[t("div",ot,[lt,it,e.loading.quality?(a(),h(i,{key:1,path:"dotsCircle",size:"22",class:"animate-spin text-gray-500"})):(a(),n("h1",rt,r(e.quality.aplus),1)),ct,nt,e.loading.quality?(a(),h(i,{key:3,path:"dotsCircle",size:"22",class:"animate-spin text-gray-500"})):(a(),n("h1",dt,r(e.quality.a),1)),ht,ut,e.loading.quality?(a(),h(i,{key:5,path:"dotsCircle",size:"22",class:"animate-spin text-gray-500"})):(a(),n("h1",gt,r(e.quality.b),1)),xt,_t,e.loading.quality?(a(),h(i,{key:7,path:"dotsCircle",size:"22",class:"animate-spin text-gray-500"})):(a(),n("h1",pt,r(e.quality.c),1)),mt,ft,e.loading.quality?(a(),h(i,{key:9,path:"dotsCircle",size:"22",class:"animate-spin text-gray-500"})):(a(),n("h1",yt,r(e.quality.d),1))])]),_:1})])]),_:1})]),_:1})}const At=A(V,[["render",wt]]);export{At as default};
