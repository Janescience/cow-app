import{z as S,C as P,D as w,E as L,T as A,f as T,g as q,_ as F,O as M,Q as C,c as k,w as _,F as c,o as n,d as i,J as d,K as O,L as $,s as b,t as y,k as x}from"./index-90205c12.js";import{C as j}from"./Criteria-9236797b.js";import{F as v}from"./food-d2c20864.js";import{C as z}from"./cow-e2242f0c.js";import{T as B}from"./alert-5e760029.js";import"./CardBoxCollapse-e5f1ee89.js";import"./FormField-c24cbbb9.js";import"./FormCheckRadioPicker-d3739a39.js";import"./Cow-bcbf7bfb.js";import"./Vaccine-a7efa8d3.js";const E={data(){return{perPage:12,currentPage:0,openModal:!1,modalData:null,items:[],ddlCorral:[],forms:[{label:"สูตรอาหาร",value:"recipe",type:"ddl",module:"recipe"},{label:"คอก",value:"corral",icon:"barn",type:"number"}],search:{recipe:{},corral:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"corral"},label:{value:"recipe.name"}},datas:[{label:"คอก",class:"text-center",value:"corral"},{label:"จำนวนวัว",class:"text-center",value:"numCow"},{label:"สูตรอาหาร",class:"text-center",value:"recipe.name"},{label:"จำนวนที่ให้/วัน (กก.)",class:"text-center",value:"qty"},{label:"รวมเป็นเงิน/วัน",class:"text-center",value:"amount",func:e=>e.amount.toFixed(2)},{label:"คิดเป็นเงิน/ตัว",class:"text-center",value:"amountAvg",func:e=>e.amountAvg.toFixed(2)}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:P,LayoutAuthenticated:w,SectionTitleBarSub:L,Table:A,Criteria:j,BaseLevel:T,UserAvatar:q,CardBox:F,BaseIcon:M},computed:{getDataCopy(){return{...this.modalData}},corral(){return this.ddlCorral},itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const e=[];for(let t=0;t<this.numPages;t++)e.push(t);return e}},created(){this.getDatas()},methods:{async getDatas(e){this.loading=!0;const t=await v.all(e);if(this.items=[],t.data){const u=t.data.foods,a=C.groupBy(u,"corral");for(let o of Object.keys(a)){const s=a[o];let h=null,f=null,m=null;if(s.length>0){const r=s[0];r&&r.foodDetails.length>0&&(h=r.foodDetails.reduce((g,p)=>g+p.qty,0),f=r.foodDetails.reduce((g,p)=>g+p.amount,0),m=r==null?void 0:r.foodDetails.length)}this.items.push({corral:o,amount:f,qty:h,count:m,foods:s})}}this.getCorrals()},async remove(e){this.loading=!0,(await v.delete(e)).data&&this.getDatas(),this.loading=!1,B.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(e){this.loading=!0;let t=[];for(let a of e)t.push(a._id);(await v.deletes(t)).data&&(this.getReproductions(),B.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},async getCorrals(){const e=await z.all();if(e){const t=e.data.cows,u=C.groupBy(t,"corral");for(let a of Object.keys(u))this.ddlCorral.push({id:a,label:a}),this.items.map(s=>s.corral).indexOf(a)<0&&this.items.push({corral:a})}this.loading=!1},detail(e){this.$router.push({name:"foodDetail",params:{corral:e.corral}})},reset(){this.search.recipe=null,this.search.corral="",this.getDatas()},resetData(){this.modalData=null}}},I={key:0,class:"grid lg:gap-3 md:gap-2 gap-1 grid-cols-3 lg:grid-cols-5 md:grid-cols-4"},N={class:"text-center mt-2"},R={class:"lg:text-3xl text-xl"},V={key:0,class:"lg:text-md dark:text-gray-600 text-sm"},Q={key:1,class:"lg:text-md dark:text-gray-600 text-sm"},H={key:2,class:"lg:text-md dark:text-gray-600 text-sm"},J={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},K=b("p",null," กำลังโหลดข้อมูล...",-1);function U(e,t,u,a,o,s){const h=c("SectionTitleBarSub"),f=c("Criteria"),m=c("BaseIcon"),r=c("BaseLevel"),g=c("CardBox"),p=c("SectionMain"),D=c("LayoutAuthenticated");return n(),k(D,null,{default:_(()=>[i(p,null,{default:_(()=>[i(h,{icon:"foodDrumstickOutline",title:"การให้อาหาร"}),i(f,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:o.forms,search:o.search,btnLoading:o.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),o.loading?(n(),d("div",J,[i(m,{path:"dotsCircle",size:"22",class:"animate-spin"}),K])):(n(),d("div",I,[(n(!0),d(O,null,$(s.itemsPaginated,l=>(n(),k(g,{key:l.corral,onClick:G=>s.detail(l),hoverable:""},{default:_(()=>[i(r,{type:"justify-center mt-3"},{default:_(()=>[i(m,{path:"barn",size:"58",class:"dark:text-gray-600"})]),_:1}),b("div",N,[b("h4",R," คอก "+y(l.corral),1),l.qty?(n(),d("p",V," จำนวนรวม "+y(l.qty)+" กก. ",1)):x("",!0),l.amount?(n(),d("p",Q," ราคารวม "+y(l.amount)+" บาท ",1)):x("",!0),l.qty?x("",!0):(n(),d("p",H," ไม่ได้บันทึกการให้อาหาร "))])]),_:2},1032,["onClick"]))),128))]))]),_:1})]),_:1})}const le=S(E,[["render",U]]);export{le as default};
