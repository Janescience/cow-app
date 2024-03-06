import{z as L,C as T,D as j,E as q,T as A,f as $,g as F,_ as M,O as N,Q as D,c as S,w as y,F as i,o as l,d as _,J as d,K as O,L as V,q as a,t as x,h as k,k as v}from"./index-5292fd0b.js";import{C as E}from"./Criteria-41c6bd7b.js";import{F as C}from"./food-23f8064e.js";import{C as I}from"./cow-ab19f855.js";import{T as w}from"./alert-6732d737.js";import"./CardBoxCollapse-6f7fa178.js";import"./FormField-d30f3da3.js";import"./Cow-ffd88f6e.js";import"./Recipe-c7712848.js";import"./Vaccine-6072ed7a.js";const R={data(){return{perPage:12,currentPage:0,openModal:!1,modalData:null,items:[],ddlCorral:[],forms:[{label:"คอก",value:"corral",icon:"barn",type:"number"}],search:{corral:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"corral"},label:{value:"recipe.name"}},datas:[{label:"คอก",class:"text-center",value:"corral"},{label:"จำนวนวัว",class:"text-center",value:"numCow"},{label:"สูตรอาหาร",class:"text-center",value:"recipe.name"},{label:"จำนวนที่ให้/วัน (กก.)",class:"text-center",value:"qty"},{label:"รวมเป็นเงิน/วัน",class:"text-center",value:"amount",func:e=>e.amount.toFixed(2)},{label:"คิดเป็นเงิน/ตัว",class:"text-center",value:"amountAvg",func:e=>e.amountAvg.toFixed(2)}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:T,LayoutAuthenticated:j,SectionTitleBarSub:q,Table:A,Criteria:E,BaseLevel:$,UserAvatar:F,CardBox:M,BaseIcon:N},computed:{getDataCopy(){return{...this.modalData}},corral(){return this.ddlCorral},itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const e=[];for(let s=0;s<this.numPages;s++)e.push(s);return e}},created(){this.getDatas()},methods:{async getDatas(e){this.loading=!0;const s=await C.all(e);if(this.items=[],s.data){const u=s.data.foods,o=D.groupBy(u,"corral");for(let c of Object.keys(o)){const r=o[c];let m=null,f=null,p=null;if(r.length>0){const n=r[0];n&&n.foodDetails.length>0&&(m=n.foodDetails.reduce((g,h)=>g+h.qty,0),f=n.foodDetails.reduce((g,h)=>g+h.amount,0),p=n==null?void 0:n.foodDetails.length)}this.items.push({corral:c,amount:f,qty:m,count:p,foods:r})}}this.getCorrals()},async remove(e){this.loading=!0,(await C.delete(e)).data&&this.getDatas(),this.loading=!1,w.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(e){this.loading=!0;let s=[];for(let o of e)s.push(o._id);(await C.deletes(s)).data&&(this.getReproductions(),w.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},async getCorrals(){const e=await I.all();if(e){const s=e.data.cows,u=D.groupBy(s,"corral");for(let o of Object.keys(u))o!="undefined"&&(this.ddlCorral.push({id:o,label:o}),this.items.map(r=>r.corral).indexOf(o)<0&&this.items.push({corral:o}))}this.loading=!1},detail(e){this.$router.push({name:"foodDetail",params:{corral:e.corral}})},reset(){this.search.corral="",this.getDatas()},resetData(){this.modalData=null}}},z={key:0,class:"grid lg:gap-3 md:gap-2 gap-1 grid-cols-2 lg:grid-cols-5 md:grid-cols-4"},Q={class:"bg-orange-800 rounded-full text-orange-400 lg:text-3xl text-xl lg:w-16 lg:h-16 w-12 h-12 justify-center flex items-center font-extrabold"},H={class:"mt-2 h-12 lg:text-sm text-xs mb-1"},J={key:0,class:"dark:text-gray-400 grid grid-cols-2"},K=a("div",null," จำนวนรวม ",-1),U={class:"flex justify-end"},G={class:"underline decoration-2 dark:text-gray-100 mr-1"},W={key:1,class:"dark:text-gray-400 grid grid-cols-2"},X=a("div",null," ราคารวม ",-1),Y={class:"flex justify-end"},Z={class:"underline decoration-2 dark:text-gray-100 mr-1"},ee={key:2,class:"dark:text-gray-400 grid grid-cols-2"},te=a("div",null," บันทึกแล้ว ",-1),se={class:"flex justify-end"},ae={class:"underline decoration-2 dark:text-gray-100 mr-1"},oe={key:3,class:"dark:text-gray-600 text-center pt-5"},re={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},ne=a("p",null," กำลังโหลดข้อมูล...",-1);function le(e,s,u,o,c,r){const m=i("SectionTitleBarSub"),f=i("Criteria"),p=i("BaseLevel"),n=i("CardBox"),g=i("BaseIcon"),h=i("SectionMain"),P=i("LayoutAuthenticated");return l(),S(P,null,{default:y(()=>[_(h,null,{default:y(()=>[_(m,{icon:"corn",title:"การให้อาหาร (แยกตามคอก)"}),_(f,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:r.getDatas,onReset:r.reset,forms:c.forms,search:c.search,btnLoading:c.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),c.loading?(l(),d("div",re,[_(g,{path:"dotsCircle",size:"22",class:"animate-spin"}),ne])):(l(),d("div",z,[(l(!0),d(O,null,V(r.itemsPaginated,t=>(l(),S(n,{key:t.corral,onClick:b=>r.detail(t),hoverable:""},{default:y(()=>{var b,B;return[_(p,{type:"justify-center mt-1"},{default:y(()=>[a("div",Q,x(t.corral),1)]),_:2},1024),a("div",H,[t.qty?(l(),d("div",J,[K,a("div",U,[a("div",G,x(e.$filters.number(t.qty)),1),k(" กก. ")])])):v("",!0),t.amount?(l(),d("p",W,[X,a("div",Y,[a("div",Z,x(e.$filters.currency(t.amount)),1),k(" บาท ")])])):v("",!0),((b=t==null?void 0:t.foods)==null?void 0:b.length)>0?(l(),d("p",ee,[te,a("div",se,[a("div",ae,x((B=t==null?void 0:t.foods)==null?void 0:B.length),1),k(" เดือน ")])])):v("",!0),t.qty?v("",!0):(l(),d("p",oe," (ไม่ได้บันทึกการให้อาหาร) "))])]}),_:2},1032,["onClick"]))),128))]))]),_:1})]),_:1})}const ye=L(R,[["render",le]]);export{ye as default};