import{z as P,C as w,D as L,E as T,T as A,f as $,g as j,_ as q,O as F,Q as k,c as B,w as y,F as c,o as n,d as i,J as d,K as M,L as O,s as u,t as x,h as v,k as b}from"./index-d7b1c86b.js";import{C as N}from"./Criteria-05338280.js";import{F as C}from"./food-0c692860.js";import{C as V}from"./cow-351ce3fa.js";import{T as D}from"./alert-7621274f.js";import"./CardBoxCollapse-8075a491.js";import"./FormField-b7c184ae.js";import"./Cow-c3f68af6.js";import"./Vaccine-cd23289a.js";const z={data(){return{perPage:12,currentPage:0,openModal:!1,modalData:null,items:[],ddlCorral:[],forms:[{label:"สูตรอาหาร",value:"recipe",type:"ddl",module:"recipe"},{label:"คอก",value:"corral",icon:"barn",type:"number"}],search:{recipe:{},corral:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"corral"},label:{value:"recipe.name"}},datas:[{label:"คอก",class:"text-center",value:"corral"},{label:"จำนวนวัว",class:"text-center",value:"numCow"},{label:"สูตรอาหาร",class:"text-center",value:"recipe.name"},{label:"จำนวนที่ให้/วัน (กก.)",class:"text-center",value:"qty"},{label:"รวมเป็นเงิน/วัน",class:"text-center",value:"amount",func:e=>e.amount.toFixed(2)},{label:"คิดเป็นเงิน/ตัว",class:"text-center",value:"amountAvg",func:e=>e.amountAvg.toFixed(2)}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:w,LayoutAuthenticated:L,SectionTitleBarSub:T,Table:A,Criteria:N,BaseLevel:$,UserAvatar:j,CardBox:q,BaseIcon:F},computed:{getDataCopy(){return{...this.modalData}},corral(){return this.ddlCorral},itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const e=[];for(let t=0;t<this.numPages;t++)e.push(t);return e}},created(){this.getDatas()},methods:{async getDatas(e){this.loading=!0;const t=await C.all(e);if(this.items=[],t.data){const m=t.data.foods,a=k.groupBy(m,"corral");for(let o of Object.keys(a)){const s=a[o];let f=null,_=null,h=null;if(s.length>0){const r=s[0];r&&r.foodDetails.length>0&&(f=r.foodDetails.reduce((g,p)=>g+p.qty,0),_=r.foodDetails.reduce((g,p)=>g+p.amount,0),h=r==null?void 0:r.foodDetails.length)}this.items.push({corral:o,amount:_,qty:f,count:h,foods:s})}}this.getCorrals()},async remove(e){this.loading=!0,(await C.delete(e)).data&&this.getDatas(),this.loading=!1,D.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(e){this.loading=!0;let t=[];for(let a of e)t.push(a._id);(await C.deletes(t)).data&&(this.getReproductions(),D.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},async getCorrals(){const e=await V.all();if(e){const t=e.data.cows,m=k.groupBy(t,"corral");for(let a of Object.keys(m))this.ddlCorral.push({id:a,label:a}),this.items.map(s=>s.corral).indexOf(a)<0&&this.items.push({corral:a})}this.loading=!1},detail(e){this.$router.push({name:"foodDetail",params:{corral:e.corral}})},reset(){this.search.recipe=null,this.search.corral="",this.getDatas()},resetData(){this.modalData=null}}},E={key:0,class:"grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-5 md:grid-cols-4"},I={class:"bg-orange-900 rounded-full w-20 h-20 justify-center flex items-center"},R={class:"text-center mt-2"},Q={class:"lg:text-3xl text-xl"},H={key:0,class:"lg:text-md dark:text-gray-400 text-sm flex justify-center"},J={class:"underline decoration-2 ml-1 mr-1"},K={key:1,class:"lg:text-md dark:text-gray-400 flex text-sm justify-center"},U={class:"underline decoration-2 ml-1 mr-1"},G={key:2,class:"lg:text-md dark:text-gray-600 text-xs"},W={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},X=u("p",null," กำลังโหลดข้อมูล...",-1);function Y(e,t,m,a,o,s){const f=c("SectionTitleBarSub"),_=c("Criteria"),h=c("BaseIcon"),r=c("BaseLevel"),g=c("CardBox"),p=c("SectionMain"),S=c("LayoutAuthenticated");return n(),B(S,null,{default:y(()=>[i(p,null,{default:y(()=>[i(f,{icon:"foodDrumstickOutline",title:"การให้อาหาร"}),i(_,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:o.forms,search:o.search,btnLoading:o.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),o.loading?(n(),d("div",W,[i(h,{path:"dotsCircle",size:"22",class:"animate-spin"}),X])):(n(),d("div",E,[(n(!0),d(M,null,O(s.itemsPaginated,l=>(n(),B(g,{key:l.corral,onClick:Z=>s.detail(l),hoverable:""},{default:y(()=>[i(r,{type:"justify-center mt-3"},{default:y(()=>[u("div",I,[i(h,{path:"barn",size:"50",class:"dark:text-orange-500"})])]),_:1}),u("div",R,[u("h4",Q," คอก "+x(l.corral),1),l.qty?(n(),d("p",H,[v(" จำนวนรวม "),u("div",J,x(e.$filters.number(l.qty)),1),v(" กก. ")])):b("",!0),l.amount?(n(),d("p",K,[v(" ราคารวม "),u("div",U,x(e.$filters.currency(l.amount)),1)])):b("",!0),l.qty?b("",!0):(n(),d("p",G," (ไม่ได้บันทึกการให้อาหาร) "))])]),_:2},1032,["onClick"]))),128))]))]),_:1})]),_:1})}const ie=P(z,[["render",Y]]);export{ie as default};
