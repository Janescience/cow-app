import{z,B as W,p as le,m as ae,_ as H,l as ie,G as oe,i as ne,j as se,f as G,O as q,T as K,F as f,H as T,I as S,o as d,c as O,w as k,d as n,J as g,k as N,s as r,h as F,t as y,e as re,a as _,M as ce,N as de,K as D,L as Y,n as E,C as ue,D as me,E as he}from"./index-d622b56d.js";import{_ as fe}from"./FormField-98ea13f0.js";import{_ as ge}from"./FormCheckRadioPicker-3689ab48.js";import{D as ke}from"./Cow-65a19d1a.js";import{M as Q}from"./milking-866304c5.js";import{P as ve}from"./param-d7977982.js";import{T as U}from"./alert-a81da250.js";import{u as pe,_ as ye}from"./Top-539a778b.js";import"./cow-0755e548.js";const _e={data(){return{milk:{date:new Date,time:this.checkTime()},milkDetail:{cow:{},qty:null,amount:null},priceRawMilk:null,milkDetails:[],milkDetailColumns:[{label:"รหัสโค",value:"cow.code"},{label:"ชื่อโค",value:"cow.name"},{label:"น้ำนมดิบ (กก.)",value:"qty",type:"number"},{label:"จำนวนเงิน",value:"amount",type:"currency"}],buttons:[{label:"ลบ",type:"delete",color:"danger"}],loading:!1,alert:{}}},emits:["update:modelValue","cancel","confirm"],computed:{calAmount(){return this.milkDetail.amount=this.milkDetail.qty*this.priceRawMilk,this.milkDetail.amount.toFixed(2)},user(){return this.$store.state.auth.user},value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},watch:{data:{handler(e,t){e&&(this.mode=="edit"&&(this.milkDetails=e.milkDetails),this.milk.date=e.date?new Date(e.date):new Date,this.milk._id=e._id,this.milk.time=e.time?e.time:this.checkTime(),this.getPriceRawMilk())}},"milkDetail.cow"(e){e!=null&&Object.keys(e).length>0&&this.milkDetails.length>0&&(this.alert={},this.milkDetails.filter(a=>a.cow.code===e.code).length>0&&(this.milkDetail.cow={},this.alert.text="โคซ้ำ กรุณาเลือกรายการอื่น",this.alert.color="warning"))}},created(){this.getPriceRawMilk()},methods:{clear(){this.milk={},this.milk.date=new Date,this.milk.time="M",this.milkDetails=[]},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},removeDetail(e){console.log(e);let t=this.milkDetails.indexOf(e);t!==-1&&this.milkDetails.splice(t,1)},reset(){this.milkDetail.cow={},this.milkDetail.qty=null,this.milkDetail.amount=null},checkTime(){return new Date().getHours()<=12?"M":"A"},add(){this.milkDetail.cow&&this.milkDetail.qty>0&&this.milkDetail.amount?this.milkDetails.filter(t=>{var a;return t.cow.code===((a=this.milkDetail)==null?void 0:a.cow.code)}).length<=0?(this.milkDetails.push(this.milkDetail),this.alert={},this.milkDetail={}):(this.alert.text="โคซ้ำ",this.alert.color="warning"):(this.alert.text="กรุณากรอกข้อมูลให้ครบ",this.alert.color="warning")},async submit(){this.loading=!0,this.alert={},this.milk.milkDetails=this.milkDetails;const e={...this.milk};try{this.mode==="create"?await Q.create(e)&&(this.loading=!1,this.confirm(),U.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):await Q.update(this.milk._id,this.milk)&&(this.loading=!1,this.confirm(),U.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert.text=t.response.data.message,this.alert.color="danger"}},async getPriceRawMilk(){const e=await ve.all({code:"RAW_MILK"});if(e.data){const t=e.data.params;t.length>0&&(this.priceRawMilk=t[0].valueNumber)}},sum(){const e=this.milkDetails.reduce((a,x)=>a+x.qty,0),t=this.milkDetails.reduce((a,x)=>a+x.amount,0);return{qty:e,amount:t}},formatDate(e){return W(e).format("DD/MM/YYYY")}},components:{BaseButton:le,BaseButtons:ae,CardBox:H,BaseDivider:ie,OverlayLayer:oe,FormField:fe,FormControl:ne,NotificationBar:se,BaseLevel:G,DDLCow:ke,FormCheckRadioPicker:ge,BaseIcon:q,Table:K},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},data:{type:Object,default:null}}},be={key:0,class:"grid lg:grid-cols-4 grid-cols-2 gap-5 p-4"},Me={class:"grid grid-cols-2 lg:grid-cols-4 gap-5 p-4"},we={class:"underline decoration-2 p-2 decoration-orange-600"},De={class:"underline decoration-2 p-2 decoration-orange-600"};function xe(e,t,a,x,i,s){const m=f("FormControl"),p=f("FormField"),C=f("FormCheckRadioPicker"),B=f("DDLCow"),b=f("BaseButton"),V=f("BaseButtons"),w=f("NotificationBar"),j=f("BaseLevel"),A=f("Table"),L=f("CardBox"),P=f("OverlayLayer");return T((d(),O(P,null,{default:k(()=>[T(n(L,{title:a.mode==="create"?"การรีดนม":"การรีดนม ("+((i.milk.time=="M"?"เช้า":"บ่าย")+" - "+s.formatDate(i.milk.date))+")",class:"shadow-lg w-full lg:p-4 lg:w-2/3 z-50","header-icon":"close",modal:"",form:"","has-table":"","has-scroll":"",onSubmit:re(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:k(()=>{var M;return[a.mode!="edit"?(d(),g("div",be,[n(p,{label:"วันที่รีดนม",help:"* ห้ามว่าง"},{default:k(()=>[n(m,{modelValue:i.milk.date,"onUpdate:modelValue":t[0]||(t[0]=h=>i.milk.date=h),icon:"calendar",type:"date",required:"",disabled:a.mode=="edit"},null,8,["modelValue","disabled"])]),_:1}),n(p,{label:"รอบ"},{default:k(()=>[n(C,{modelValue:i.milk.time,"onUpdate:modelValue":t[1]||(t[1]=h=>i.milk.time=h),type:"radio",name:"milk-time",options:{M:"เช้า",A:"บ่าย"},disabled:a.mode=="edit"},null,8,["modelValue","disabled"])]),_:1})])):N("",!0),r("div",Me,[n(p,{label:"โค",help:"* ห้ามว่าง"},{default:k(()=>[n(B,{modelValue:i.milkDetail.cow,"onUpdate:modelValue":t[2]||(t[2]=h=>i.milkDetail.cow=h),valueType:"object"},null,8,["modelValue"])]),_:1}),n(p,{label:"น้ำนมดิบ (กก.)",help:"* ห้ามว่าง"},{default:k(()=>[n(m,{modelValue:i.milkDetail.qty,"onUpdate:modelValue":t[3]||(t[3]=h=>i.milkDetail.qty=h),type:"number",icon:"scale"},null,8,["modelValue"])]),_:1}),n(p,{label:"คิดเป็นเงิน",help:"ราคาน้ำนมดิบ/กก. "+i.priceRawMilk+" บาท"},{default:k(()=>[n(m,{modelValue:s.calAmount,"onUpdate:modelValue":t[4]||(t[4]=h=>s.calAmount=h),type:"number",icon:"cashMultiple"},null,8,["modelValue"])]),_:1},8,["help"]),n(V,{type:"justify-start"},{default:k(()=>[n(b,{label:"ล้าง",color:"danger",onClick:t[5]||(t[5]=h=>s.reset())}),n(b,{label:"เพิ่ม",color:"info",onClick:t[6]||(t[6]=h=>s.add())})]),_:1})]),(M=i.alert)!=null&&M.text?(d(),O(w,{key:1,color:i.alert.color,outline:"",icon:"alertCircleOutline"},{default:k(()=>[F(y(i.alert.text),1)]),_:1},8,["color"])):N("",!0),i.milkDetails.length>0?(d(),O(j,{key:2,class:"pb-1 pt-1 pl-4 pr-4",type:"justify-end dark:bg-gray-800"},{default:k(()=>[F(" รวมน้ำนมดิบ "),r("p",we,y(e.$filters.number(s.sum().qty)),1),F(" กก. คิดเป็นเงิน "),r("p",De,y(e.$filters.currency(s.sum().amount)),1),F(" บาท ")]),_:1})):N("",!0),n(A,{title:"รายการรีดนม ("+i.milkDetails.length+" รายการ)",icon:"cupWater",items:i.milkDetails,datas:i.milkDetailColumns,onDelete:s.removeDetail,buttons:i.buttons,perPage:"10",loading:i.loading},null,8,["title","items","datas","onDelete","buttons","loading"]),n(V,{type:"justify-center mt-3"},{default:k(()=>[n(b,{label:"ยกเลิก",color:"danger",onClick:s.cancel},null,8,["onClick"]),n(b,{label:"บันทึก",color:"success",type:"submit",disabled:i.milkDetails.length==0,loading:i.loading},null,8,["disabled","loading"])]),_:1})]}),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[S,s.value]])]),_:1},512)),[[S,s.value]])}const J=z(_e,[["render",xe]]),Ce={ref:"calendarContainer",class:"min-h-full min-w-full dark:text-gray-300 text-gray-800"},Be={class:"w-full grid grid-cols-7"},Ve=["onClick"],Ye=r("div",{class:"w-1/12"},[r("div",{class:"h-2 w-2 rounded-full bg-orange-600"})],-1),Te={class:"w-11/12"},Se={class:"text-xs tracking-tight text-clip overflow-hidden"},Fe=["onClick"],Le={class:"h-6 w-6 flex justify-center items-center text-xs bg-orange-600 rounded-full shadow-sm"},Oe={class:"font-medium text-white"},qe={class:"lg:mt-2"},je=["onClick"],Ae={class:"text-sm text-clip overflow-hidden items-center"},Pe=["onClick"],Re={class:"opacity-40"},Ee=r("p",{class:"hidden md:block"}," รีดนม",-1),Ne=["onClick"],Qe={class:"font-medium text-black"},Ie={__name:"Calendar",props:{events:{type:Object,required:!0}},emits:["confirm","month","year"],setup(e,{emit:t}){const a=pe();a.$subscribe((u,c)=>{V(),w()}),t("month",a.getMonth+1),t("year",a.getYear);const x={1:"อา",2:"จ.",3:"อ.",4:"พ.",5:"พฤ",6:"ศ.",7:"ส."},i=_(0),s=_(0),m=_(0),p=_(0),C=_(!1);_(!1),_([]),_("");const B=_("create"),b=_({}),V=()=>{i.value=new Date(a.getYear,a.getMonth+1,0).getDate()},w=()=>{m.value=new Date(a.getYear,a.getMonth,1).getDay()},j=()=>{s.value=new Date(a.getYear,a.getMonth,0).getDate()},A=()=>{let u=m.value<=4?35:42;p.value=u-i.value-m.value},L=u=>{let c=new Date;return a.getYear==c.getFullYear()&&a.getMonth==c.getMonth()&&u==c.getDate()},P=(u,c,l,o,v)=>a.getYear==c.substring(4,8)&&a.getMonth+(l?0:1)==c.substring(2,4)&&u==c.substring(0,2)&&o==v,M=(u,c,l)=>{if(!c.length)return[];let o=[];return c.forEach(v=>{P(u,v.date,l)&&o.push(v)}),o},h=(u,c,l,o)=>{if(!c.length)return[];let v=[];return c.forEach(I=>{P(u,I.date,l,I.time,o)&&(v=I.milks)}),v},R=(u,c,l,o)=>{B.value=l?"edit":"create";let v=a.getYear+"-"+(a.getMonth+1)+"-"+u;b.value={_id:o,date:v,time:l||null,milkDetails:c},C.value=!0},X=u=>{t("confirm",u)},Z=()=>{a.decrementMonth(1),t("month",a.getMonth+1),t("year",a.getYear)},$=()=>{a.incrementMonth(1),t("month",a.getMonth+1),t("year",a.getYear)},ee=u=>{t("month",u)},te=u=>{t("year",u)};return ce(()=>{V(),w(),j(),A()}),de(()=>{w(),j(),A()}),(u,c)=>(d(),g(D,null,[r("div",Ce,[r("div",Be,[n(ye,{onMonth:ee,onYear:te}),(d(),g(D,null,Y(x,l=>r("div",{key:l,class:"text-center text-sm md:text-base lg:text- font-medium border-b mt-3 border-gray-600"},y(l),1)),64)),(d(!0),g(D,null,Y(m.value,l=>T((d(),g("div",{key:l,class:"h-26 md:h-36 w-full opacity-50 border-t border-gray-600 align-top"},[r("div",{class:E(["w-full h-full text-xs md:text-sm lg:text-base text-center transition-colors p-3",{"bg-slate-300 text-gray-900 font-medium  ":L(l),"hover:bg-gray-100 hover:text-gray-700":!L(l)}])},[F(y(s.value-(m.value-l))+" ",1),(d(!0),g(D,null,Y(M(s.value-(m.value-l),e.events,!0),o=>T((d(),g("div",{key:o.title,class:"hidden md:block"},[r("div",{class:"w-full px-2 py-1 flex space-x-1 items-center whitespace-nowrap overflow-hidden hover:border hover:border-gray-200 cursor-pointer rounded-lg",onClick:v=>u.togglePopover(v,o)},[Ye,r("div",Te,[r("h5",Se,y(o.title),1)])],8,Ve)])),[[S,M(s.value-(m.value-l),e.events,!0).length]])),128)),h(s.value-(m.value-l),e.events,!0).length>0?(d(),g("div",{key:0,class:"flex md:hidden h-2/3 w-full justify-center items-center",onClick:o=>R(s.value-(m.value-l),h(s.value-(m.value-l),e.events,!0))},[r("div",Le,[r("h3",Oe,y(h(s.value-(m.value-l),e.events,!0).length),1)])],8,Fe)):N("",!0)],2)])),[[S,m.value>0]])),128)),(d(!0),g(D,null,Y(i.value,l=>(d(),g("div",{key:l,class:"h-24 md:h-36 w-full border-t border-gray-600 align-top"},[r("div",{class:E(["w-full h-full text-xs md:text-sm lg:text-base text-center transition-colors p-1",{"bg-gray-600 text-gray-900 font-medium  ":L(l),"hover:bg-gray-100 hover:text-gray-700":!L(l)}])},[F(y(l)+" ",1),r("div",qe,[(d(!0),g(D,null,Y(M(l,e.events),o=>T((d(),g("div",{key:o.date,class:"hidden md:block p-1"},[r("div",{class:"w-full flex p-1 shadow-lg border border-gray-800 shadow cursor-pointer rounded-md",onClick:v=>R(l,h(l,e.events,!1,o.time),o.time,o.id)},[r("p",Ae,[n(q,{size:"14",path:o.time==="M"?"clockTimeSevenOutline":"clockTimeThreeOutline",class:E(o.time==="M"?"text-yellow-400":"text-orange-500")},null,8,["path","class"]),F(" "+y(o.time=="M"?"เช้า":"บ่าย")+" ("+y(o.sumQty)+") ",1)])],8,je)])),[[S,M(l,e.events).length>0]])),128))]),T(r("div",null,[r("div",{class:"w-full lg:mt-2 text-center items-center overflow-hidden hover:border hover:border-gray-200 cursor-pointer rounded-lg",onClick:o=>R(l,h(l,e.events))},[r("div",Re,[n(q,{path:"plus"}),Ee])],8,Pe)],512),[[S,M(l,e.events).length<2]]),(d(!0),g(D,null,Y(M(l,e.events),o=>(d(),g("div",{key:o.date,class:"flex md:hidden mt-1 w-full justify-center items-center",onClick:v=>R(l,h(l,e.events,!1,o.time),o.time,o.id)},[r("div",{class:E(["h-6 w-full flex justify-center items-center text-xs rounded shadow-sm",[o.time==="M"?"bg-yellow-400":"bg-orange-500"]])},[r("h3",Qe,y(o.sumQty),1)],2)],8,Ne))),128))],2)]))),128)),(d(!0),g(D,null,Y(p.value,l=>T((d(),g("div",{key:l,class:"h-16 md:h-36 w-full opacity-50"})),[[S,p.value>0]])),128))]),n(G,{type:"justify-between w-full mt-2",class:"md:hidden"},{default:k(()=>[n(q,{path:"chevronLeft",size:"30",class:"cursor-pointer hover:text-gray-300",onClick:c[0]||(c[0]=l=>Z())}),n(q,{path:"chevronRight",size:"30",class:"cursor-pointer hover:text-gray-300",onClick:c[1]||(c[1]=l=>$())})]),_:1})],512),n(J,{modelValue:C.value,"onUpdate:modelValue":c[2]||(c[2]=l=>C.value=l),mode:B.value,data:b.value,onConfirm:X},null,8,["modelValue","mode","data"])],64))}},Ue={data(){return{modalMilk:!1,monthMilk:new Date().getMonth()+1,yearMilk:new Date().getFullYear(),items:[],events:[],forms:[{label:"โค",class:"lg:col-start-2",value:"cow",type:"ddl",module:"cow"},{label:"วันที่รีดนม",value:"date",icon:"calendar",type:"date"}],loading:!1,mode:"create",modalData:null,checked:{code:{value:"date",type:"date"},label:{value:"cow.name"}},datas:[{label:"วันที่รีดนม",class:"text-center",type:"date",value:"date"},{label:"โค",class:"text-center",value:"relate.cow.name"},{label:"ปริมาณน้ำนมดิบ/เช้า (กก.)",class:"text-center",value:"morningQty"},{label:"ปริมาณน้ำนมดิบ/บ่าย (กก.)",class:"text-center",value:"afternoonQty"},{label:"ปริมาณน้ำนมดิบรวม (กก.)",class:"text-center",func:e=>e.morningQty+e.afternoonQty},{label:"จำนวนเงินรวม",class:"text-right",type:"number",value:"amount"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:ue,LayoutAuthenticated:me,Table:K,SectionTitleBarSub:he,MilkModal:J,Calendar:Ie,CardBox:H},computed:{user(){return this.$store.state.auth.user}},created(){this.getMilks()},watch:{monthMilk(e){this.getMilks()},yearMilk(e){this.getMilks()}},methods:{async getMilks(){this.loading=!0;const e=await Q.all({month:this.monthMilk,year:this.yearMilk});if(this.events=[],e.data)for(let t of e.data.milks)this.filterMilk(t);this.loading=!1},async removeMilk(e){this.loading=!0,(await Q.delete(e)).data&&this.getMilks(),this.loading=!1},filterMilk(e){let t={};t.sumQty=0,t.sumAmt=0,e.milkDetails.map(a=>{a.cow=typeof a.cow=="string"?a.relate.cow:a.cow,t.sumQty+=a.qty,t.sumAmt+=a.amount}),t.count=e.milkDetails.length,t.milks=e.milkDetails,t.date=W(e.date,"YYYY-MM-DD").format("DDMMYYYY"),t.time=e.time,t.id=e._id,t.sumQty=t.sumQty.toFixed(2),this.events.push(t)},addMilk(e){this.filterMilk(e)},getMonthMilk(e){this.monthMilk=e},getYearMilk(e){this.yearMilk=e},edit(e){this.modalData=e,this.mode="edit",this.modalMilk=!0}}};function ze(e,t,a,x,i,s){const m=f("SectionTitleBarSub"),p=f("MilkModal"),C=f("Calendar"),B=f("CardBox"),b=f("SectionMain"),V=f("LayoutAuthenticated");return d(),O(V,null,{default:k(()=>[n(b,null,{default:k(()=>[n(m,{icon:"cupWater",title:"การรีดนม",btnText:"เพิ่มการรีดนม","has-btn-add":"",onOpenModal:t[0]||(t[0]=w=>{i.mode="create",i.modalMilk=!0})}),n(p,{modelValue:i.modalMilk,"onUpdate:modelValue":t[1]||(t[1]=w=>i.modalMilk=w),mode:i.mode,onConfirm:s.getMilks},null,8,["modelValue","mode","onConfirm"]),i.loading?(d(),O(B,{key:1,loading:""})):(d(),O(B,{key:0},{default:k(()=>[n(C,{events:i.events,onConfirm:s.getMilks,onMonth:s.getMonthMilk,onYear:s.getYearMilk},null,8,["events","onConfirm","onMonth","onYear"])]),_:1}))]),_:1})]),_:1})}const tt=z(Ue,[["render",ze]]);export{tt as default};
