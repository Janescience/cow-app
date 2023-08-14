import{z as H,C as K,D as W,p as G,O as J,m as X,_ as Z,i as j,g as $,f as tt,T as et,Q as k,B as y,c as C,w as r,F as b,o as B,d as s,s as t,h as lt,n as N,t as i,k as V}from"./index-51c79a7a.js";import{_ as at}from"./CardBoxCollapse-ccd7bb6f.js";import{_ as st}from"./FormField-b03484b6.js";import{I as ot}from"./ImageUpload-155e25c8.js";import{C as F}from"./cow-925303fc.js";import{M as nt}from"./milking-a06c0de6.js";import{r as E,a as it,R as rt}from"./reproduct-202c40ff.js";import{s as ct,o as ut,B as dt}from"./birth-a2e55fa3.js";import{H as ht}from"./heal-b2e711d6.js";import{P as mt}from"./protection-919d14b5.js";import{F as pt}from"./food-bdb713fb.js";import{N as gt}from"./notification-87aaa992.js";import{g as ft}from"./age-calculate-9ec51286.js";import{T as z}from"./alert-d1bf8791.js";import{s as _t,q as bt}from"./cow-6dca2c37.js";const wt={data(){return{cow:{},quality:{},milks:[],milkDetails:[],historyMilks:[],reproducts:[],births:[],heals:[],protections:[],foods:[],notifications:[],loading:{cow:!0,milk:!0,reproduct:!0,birth:!0,heal:!0,protection:!0,food:!0,notification:!0},alert:"",newCow:!1,status:_t("create"),qualityMilk:bt("create"),milkDatas:[{label:"วันที่รีดนม",class:"text-center",type:"date",value:"date"},{label:"เช้า (กก.)",class:"text-center",value:"mQty"},{label:"บ่าย (กก.)",class:"text-center",value:"aQty"},{label:"รวม (กก.)",class:"text-center",func:e=>e.mQty+e.aQty},{label:"คิดเป็นเงิน",class:"text-right",type:"currency",value:"amount"}],reproductDatas:[{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"วันที่เข้าระบบสืบพันธุ์",class:"text-center",value:"loginDate",type:"date"},{label:"ผล",func:e=>E()[e.result].label},{label:"วันที่เป็นสัด",class:"text-center",value:"estrusDate",type:"date"},{label:"วันที่ผสมพันธุ์",class:"text-center",value:"matingDate",type:"date"},{label:"วันที่ตรวจท้อง",class:"text-center",value:"checkDate",type:"date"},{label:"พ่อพันธุ์",value:"dad"},{label:"สถานะ",func:e=>it()[e.status].label},{label:"วิธีรักษา",value:"howTo"}],birthDatas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"วันที่ตั้งครรภ์",class:"text-center",value:"pregnantDate",type:"date"},{label:"อายุครรภ์",func:e=>this.calAge(e==null?void 0:e.pregnantDate)},{label:"วันที่คลอด",class:"text-center",value:"birthDate",type:"date"},{label:"เพศ",class:"text-center",func:e=>ct()[e.sex]},{label:"ลูกวัว",class:"text-center",func:e=>{var a,c;return e.calf?((a=e.calf)==null?void 0:a.code)+" : "+((c=e.calf)==null?void 0:c.name):""}},{label:"รกค้าง",class:"text-center",func:e=>ut()[e.overgrown]},{label:"วันที่ใช้ยาขับ",class:"text-center",value:"drugDate",type:"date"},{label:"วันที่ล้างมดลูก",class:"text-center",value:"washDate",type:"date"}],protectionDatas:[{label:"ยา/วัคซีน",value:"vaccine.name"},{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"ให้ยาล่าสุด",class:"text-center",value:"vaccine.currentDate",type:"date"},{label:"จำนวนเงิน",class:"text-right",value:"amount",type:"currency"},{label:"ให้ยาครั้งต่อไป",class:"text-center",value:"vaccine.nextDate",type:"date"}],notificationDatas:[{label:"รายการ",value:"name"},{label:"ก่อน",class:"text-center",value:"before"},{label:"มีผล",class:"text-center",value:"date"},{label:"หลัง",class:"text-center",value:"after"},{label:"แจ้งเตือน",class:"text-center",value:"alert",type:"icon"}],healDatas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"วันที่รักษา",class:"text-center",value:"date",type:"date"},{label:"อาการ/โรค",class:"text-center",value:"disease"},{label:"วิธีการรักษา",class:"text-center",value:"method"},{label:"คนรักษา",class:"text-center",value:"healer"},{label:"ค่ารักษา",class:"text-center",value:"amount"}],foodDatas:[{label:"ปี",value:"year"},{label:"เดือน",value:"month"},{label:"เฉลี่ยกิน/วัน (กก.)",class:"text-center",value:"qty",func:e=>(e.foodDetails.reduce((c,h)=>c+h.qty,0)/e.numCow).toFixed(2)},{label:"คิดเป็นเงิน/วัน",class:"text-right",value:"amount",func:e=>(e.foodDetails.reduce((c,h)=>c+h.amount,0)/e.numCow).toFixed(2)},{label:"เฉลี่ยกิน/เดือน (กก.)",class:"text-center",value:"qty",func:e=>{const a=new Date(e.year,e.month,0).getDate();return(e.foodDetails.reduce((h,l)=>h+l.qty,0)*a/e.numCow).toFixed(2)}},{label:"คิดเป็นเงิน/เดือน",class:"text-right",value:"amount",func:e=>{const a=new Date(e.year,e.month,0).getDate();return(e.foodDetails.reduce((h,l)=>h+l.amount,0)*a/e.numCow).toFixed(2)}}]}},components:{SectionMain:K,LayoutAuthenticated:W,BaseButton:G,BaseIcon:J,BaseButtons:X,CardBox:Z,FormControl:j,FormField:st,UserAvatar:$,BaseLevel:tt,ImageUpload:ot,Table:et,CardBoxCollapse:at},computed:{canRemove(){return this.milks.length==0&&this.reproducts.length==0&&this.births.length==0},user(){return this.$store.state.auth.user},milk(){let e=0,a=0,c=0;this.historyMilks=[],Object.keys(this.milks).forEach(D=>{let _=this.milks[D],g={},m=0,d=0,p=0;_.map(u=>{u.milkDetails.map(f=>{u.time==="M"?(a+=f.qty,m+=f.qty):(c+=f.qty,d+=f.qty),p+=f.amount}),u.milkDetails.length>0&&(e+=u.milkDetails.length,g.date=u.date,g.mQty=m,g.aQty=d,g.amount=p)}),Object.keys(g).length!==0&&this.historyMilks.push(g)}),this.historyMilks=k.orderBy(this.historyMilks,"date","desc");let h=(a+c)/e,l=a/e,o=c/e;return{avgTotal:(e>0?h:0).toFixed(2),avgMorning:(e>0?l:0).toFixed(2),avgAfternoon:(e>0?o:0).toFixed(2),all:(a+c).toFixed(2)}}},created(){const e=this.$route.params.id;this.getCowData(e)},methods:{async getCow(e){this.loading.cow=!0;const a=await F.get(e);a.data&&(this.cow=a.data.cow,this.cow.birthDate=new Date(this.cow.birthDate),this.loading.cow=!1)},async getCowData(e){this.loading.cow=!0;const a=await F.get(e);if(a.data){this.cow=a.data.cow,this.quality=a.data.quality,this.cow.birthDate=new Date(this.cow.birthDate),this.loading.cow=!1,this.loading.reproduct=!0;const c=await rt.all({cow:e});c.data&&(this.reproducts=c.data.reproducts),this.loading.reproduct=!1,this.loading.birth=!0;const h=await dt.all({cow:e,status:"B"});h&&(this.births=h.data.births),this.loading.birth=!1,this.loading.heal=!0;const l=await ht.all({cow:e});l&&(this.heals=l.data.heals),this.loading.heal=!1,this.loading.protection=!0;const o=await mt.all({cows:e});if(o){const m=k.groupBy(o.data.protections,"vaccine._id");for(let d of Object.keys(m)){const p=m[d],u=k.orderBy(p,"seq","desc");u.length>0&&this.protections.push(u[0])}}this.loading.protection=!1,this.loading.food=!0;const D=await pt.all({corral:this.cow.corral});D&&(this.foods=D.data.foods),this.loading.food=!1,this.loading.milk=!0;const _=await nt.get({cow:e});if(_.data){for(let m of _.data.milks)m.groupKey=y(m.date,"YYYY-MM-DD").format("YYYYMMDD");this.milks=k.groupBy(_.data.milks,"groupKey")}this.loading.milk=!1;const g=await gt.getCalendar({cow:e});if(g.data){const m=k.groupBy(g.data.events,"code"),d=y(new Date).startOf("day");let p=[];for(let u of Object.keys(m)){const f=m[u];let x="",v=null,M=null,q=null,n=null;for(let w of f)w.period=="today"?(x=w.name,v=y(w.time.start).format("DD/MM/YYYY"),n=y(w.time.start).startOf("day")):w.period=="before"?M=y(w.time.start).format("DD/MM/YYYY"):w.period=="after"&&(q=y(w.time.start).format("DD/MM/YYYY"));p.push({name:x,date:v,dueDate:n,before:M,after:q,alert:d.isAfter(n)?"bellCheckOutline":"bellAlertOutline"})}this.notifications=k.orderBy(p,"dueDate","desc")}}},async update(){this.loading.cow=!0,this.alert="";try{await F.update(this.cow._id,this.cow)&&(this.getCow(this.$route.params.id),z.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(e){console.error("Error : ",e),this.loading=!1,this.alert=e.response.data.message,z.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},reproduct(){let e=y(),a=this.reproducts.length>0?this.reproducts.length:"-",c=this.reproducts.length>0?this.formatDate(this.reproducts[0].loginDate):"-",h=this.reproducts.length>0?E()[this.reproducts[0].result].label:"-",l=0,o=0,D=0,_="-",g="-",m="-";for(let d of this.reproducts)d.estrusDate!=null&&y(d.estrusDate)<=e&&(l++,_=this.formatDate(d.estrusDate)),d.matingDate!=null&&y(d.matingDate)<=e&&(o++,g=this.formatDate(d.matingDate)),d.checkDate!=null&&y(d.checkDate)<=e&&(D++,m=this.formatDate(d.checkDate));return{login:{count:a,lastDate:c,result:h},estrus:{count:l>0?l:"-",lastDate:_},mating:{count:o>0?o:"-",lastDate:g},check:{count:D>0?D:"-",lastDate:m}}},birth(){return{count:this.births.length>0?this.births.length:"-",lastDate:this.births.length>0?this.formatDate(this.births[0].birthDate):"-",countMale:this.births.length>0?this.births.filter(e=>e.sex==="M").length:"-",countFemale:this.births.length>0?this.births.filter(e=>e.sex==="F").length:"-"}},heal(){let e=this.heals.length>0?this.heals.length:"-",a=this.heals.length>0?this.formatDate(this.heals[0].date):"-",c=this.heals.length>0?this.heals[0].disease:"-",h=this.heals.length>0&&this.heals[0].method?this.heals[0].method:"-";return{count:e,lastDate:a,lastDisease:c,lastMethod:h}},filterColor(){var a;const e=(a=this.quality)==null?void 0:a.grade;if(e==="A+")return{grade:"text-lime-500 ",profit:"text-lime-500"};if(e==="A")return{grade:"text-green-500 ",profit:"text-green-500"};if(e==="B")return{grade:"",profit:""};if(e==="C")return{grade:"text-orange-500 ",profit:"text-orange-500"};if(e==="D")return{grade:"text-red-500",profit:"text-red-500 "}},filterText(){var a;const e=(a=this.quality)==null?void 0:a.grade;if(e==="A+")return{percent:"(กำไรมากกว่า 80%)"};if(e==="A")return{percent:"(กำไร 51% - 80%)"};if(e==="B")return{percent:"(กำไร 31% - 50%)"};if(e==="C")return{percent:"(กำไร 0% - 30%)"};if(e==="D")return{percent:"(กำไรน้อยกว่า 0%)"}},formatDate(e){return e?y(new Date(e)).format("DD/MM/YYYY"):""},calAge(e){return ft(e)}}},yt={class:"px-4 sm:px-0 mb-4 flex items-center justify-between"},Dt={class:"flex items-center justify-start"},xt=t("h1",{class:"text-base lg:text-2xl"},"รายละเอียดโค",-1),vt={class:"grid lg:grid-cols-3 grid-cols-1 gap-5"},kt={class:"grid gap-5 grid-cols-2 lg:grid-cols-4 md:grid-cols-6"},Ct={class:"row-span-2"},Bt={class:"grid grid-cols-3 gap-5"},Mt={class:"row-span-2 col-span-2"},qt={class:"text-gray-500 text-xs"},Vt={class:"shadow-lg dark:bg-gray-900 rounded-xl"},Ft=t("td",null,"รายได้ทั้งหมด",-1),Yt={class:"underline decoration-4 decoration-green-500"},At=t("td",null,"ค่าใช้จ่ายทั้งหมด",-1),Tt={class:"underline decoration-4 decoration-red-500"},Ot={class:"overflow-x-auto"},Qt=t("thead",null,[t("th",{class:"whitespace-nowrap text-center"},"เฉลี่ย/วัน (กก.)"),t("th",{class:"whitespace-nowrap text-center"},"เฉลี่ยเช้า/วัน (กก.)"),t("th",{class:"whitespace-nowrap text-center"},"เฉลี่ยบ่าย/วัน (กก.)"),t("th",{class:"whitespace-nowrap text-center"},"รวมทั้งหมด (กก.)")],-1),St={class:"whitespace-nowrap text-right"},Ut={class:"text-right"},Rt={class:"text-right"},Pt={class:"text-right"},It={class:"grid lg:grid-cols-3 grid-cols-1 gap-5 lg:p-4"},Lt={class:"overflow-x-auto"},Nt=t("thead",null,[t("th",{class:"whitespace-nowrap"},"รายการ"),t("th",{class:"whitespace-nowrap"},"จำนวนครั้ง"),t("th",{class:"whitespace-nowrap"},"วันที่ล่าสุด"),t("th",{class:"whitespace-nowrap"},"ผลล่าสุด")],-1),Et=t("td",{class:"whitespace-nowrap"},"เข้าระบบสืบพันธุ์",-1),zt=t("td",{class:"whitespace-nowrap"},"เป็นสัด",-1),Ht=t("td",null,null,-1),Kt=t("td",{class:"whitespace-nowrap"},"ผสม",-1),Wt=t("td",null,null,-1),Gt=t("td",{class:"whitespace-nowrap"},"ตรวจท้อง",-1),Jt=t("td",null,null,-1),Xt=t("td",null,"จำนวนครั้ง",-1),Zt=t("td",null,"วันที่",-1),jt=t("td",null,"จำนวนเพศผู้",-1),$t=t("td",null,"จำนวนเพศเมีย",-1),te=t("td",{class:"whitespace-nowrap"},"จำนวนครั้ง",-1),ee=t("td",{class:"whitespace-nowrap"},"วันที่",-1),le={class:"whitespace-nowrap"},ae=t("td",{class:"whitespace-nowrap"},"อาการ/โรค",-1),se={class:"whitespace-nowrap"},oe=t("td",{class:"whitespace-nowrap"},"วิธีการรักษา",-1),ne={class:"whitespace-nowrap"},ie={class:"lg:col-span-2"},re={class:"grid grid-cols-1 gap-5"};function ce(e,a,c,h,l,o){const D=b("BaseIcon"),_=b("BaseButton"),g=b("BaseButtons"),m=b("ImageUpload"),d=b("BaseLevel"),p=b("FormControl"),u=b("FormField"),f=b("CardBox"),x=b("Table"),v=b("CardBoxCollapse"),M=b("SectionMain"),q=b("LayoutAuthenticated");return B(),C(q,null,{default:r(()=>[s(M,{class:"text-sm lg:text-base"},{default:r(()=>[t("section",yt,[t("div",Dt,[s(D,{path:"cow",size:"30",class:"mr-3"}),xt]),s(g,{class:"text-sm lg:text-base",type:"justify-end"},{default:r(()=>[s(_,{class:"lg:p-2 p-1",label:"ย้อนกลับ",color:"light",onClick:a[0]||(a[0]=n=>this.$router.push("/manage/cow"))}),s(_,{class:"lg:p-2 p-1",label:"ออกรายงาน",color:"info",onClick:a[1]||(a[1]=n=>e.exportReport())})]),_:1})]),t("div",vt,[s(f,{class:"lg:col-span-2 mb-5",loading:l.loading.cow,title:"ข้อมูลโค","header-icon":"",icon:"cardTextOutline"},{default:r(()=>[t("div",kt,[t("div",Ct,[s(m,{modelValue:l.cow.image,"onUpdate:modelValue":a[2]||(a[2]=n=>l.cow.image=n),class:"mt-12 mr-2"},null,8,["modelValue"]),s(d,{type:"justify-center text-xs font-thin text-slate-500"},{default:r(()=>[lt(" อัพโหลดรูปภาพ (คลิกที่รูป) ")]),_:1})]),s(u,{label:"รหัสโค",help:"* ห้ามว่าง"},{default:r(()=>[s(p,{modelValue:l.cow.code,"onUpdate:modelValue":a[3]||(a[3]=n=>l.cow.code=n),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),s(u,{label:"ชื่อโค",help:"* ห้ามว่าง"},{default:r(()=>[s(p,{modelValue:l.cow.name,"onUpdate:modelValue":a[4]||(a[4]=n=>l.cow.name=n),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),s(u,{label:"วันเกิด",help:"* ห้ามว่าง"},{default:r(()=>[s(p,{modelValue:l.cow.birthDate,"onUpdate:modelValue":a[5]||(a[5]=n=>l.cow.birthDate=n),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),s(u,{label:"สถานะ",help:"* ห้ามว่าง"},{default:r(()=>[s(p,{modelValue:l.cow.status,"onUpdate:modelValue":a[6]||(a[6]=n=>l.cow.status=n),options:l.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),s(u,{label:"คุณภาพน้ำนม",help:"* ห้ามว่าง"},{default:r(()=>[s(p,{modelValue:l.cow.quality,"onUpdate:modelValue":a[7]||(a[7]=n=>l.cow.quality=n),options:l.qualityMilk,icon:""},null,8,["modelValue","options"])]),_:1}),s(u,{label:"คอก"},{default:r(()=>[s(p,{modelValue:l.cow.corral,"onUpdate:modelValue":a[8]||(a[8]=n=>l.cow.corral=n),icon:"barn"},null,8,["modelValue"])]),_:1}),s(g,{type:"justify-center",class:""},{default:r(()=>[s(_,{label:"ลบ",color:"danger",onClick:a[9]||(a[9]=n=>e.remove())}),s(_,{label:"บันทึก",color:"success",onClick:a[10]||(a[10]=n=>o.update())})]),_:1}),s(u,{label:"พ่อพันธุ์"},{default:r(()=>[s(p,{modelValue:l.cow.dad,"onUpdate:modelValue":a[11]||(a[11]=n=>l.cow.dad=n),icon:"genderMale"},null,8,["modelValue"])]),_:1}),s(u,{label:"แม่พันธุ์"},{default:r(()=>[s(p,{modelValue:l.cow.mom,"onUpdate:modelValue":a[12]||(a[12]=n=>l.cow.mom=n),icon:"genderFemale"},null,8,["modelValue"])]),_:1})])]),_:1},8,["loading"]),s(f,{title:"คุณภาพ/ความคุ้มค่า",class:"mb-5","header-icon":""},{default:r(()=>{var n,w,Y,A,T,O,Q,S,U,R,P,I,L;return[t("div",Bt,[t("p",{class:N(((n=o.filterColor())==null?void 0:n.grade)+"  text-7xl font-extrabold text-center  ")},i((w=l.quality)==null?void 0:w.grade),3),t("div",Mt,[t("p",null,"ผลผลิตอยู่ในเกณฑ์ "+i((Y=l.quality)==null?void 0:Y.description),1),t("p",qt,i((A=o.filterText())==null?void 0:A.percent),1)])]),t("table",Vt,[t("tr",null,[Ft,t("td",Yt,i(e.$filters.currency((O=(T=l.quality)==null?void 0:T.income)==null?void 0:O.sum)),1)]),t("tr",null,[At,t("td",Tt,i(e.$filters.currency((S=(Q=l.quality)==null?void 0:Q.expense)==null?void 0:S.sum)),1)]),t("tr",null,[t("td",null,"กำไร ("+i(e.$filters.number((R=(U=l.quality)==null?void 0:U.profit)==null?void 0:R.percent))+"%)",1),t("td",{class:N((P=o.filterColor())==null?void 0:P.profit)},i(e.$filters.currency((L=(I=l.quality)==null?void 0:I.profit)==null?void 0:L.amount)),3)])])]}),_:1})]),s(f,{icon:"cupWater",loading:l.loading.milk,title:"ข้อมูลน้ำนมดิบ",class:"mb-5","header-icon":""},{default:r(()=>[t("div",Ot,[t("table",null,[Qt,t("tbody",null,[t("tr",null,[t("td",St,i(o.milk.avgTotal),1),t("td",Ut,i(o.milk.avgMorning),1),t("td",Rt,i(o.milk.avgAfternoon),1),t("td",Pt,i(o.milk.all),1)])])])])]),_:1},8,["loading"]),s(v,{icon:"foodDrumstickOutline",class:"transition-position mb-5",title:"การกินอาหาร","header-icon":""},{default:r(()=>[s(x,{items:l.foods,datas:l.foodDatas,loading:l.loading.food,perPage:"5"},null,8,["items","datas","loading"])]),_:1}),s(v,{icon:"calendarClock",class:"transition-position mb-5","has-table":"",title:"ข้อมูลล่าสุด","header-icon":""},{default:r(()=>[t("div",It,[s(f,{icon:"reproduction",class:"lg:col-span-2 dark:border-gray-600 border-gray-900",loading:l.loading.reproduct,title:"การสืบพันธุ์/ผสมพันธุ์","header-icon":""},{default:r(()=>[t("div",Lt,[t("table",null,[Nt,t("tbody",null,[t("tr",null,[Et,t("td",null,i(o.reproduct().login.count),1),t("td",null,i(o.reproduct().login.lastDate),1),t("td",null,i(o.reproduct().login.result),1)]),t("tr",null,[zt,t("td",null,i(o.reproduct().estrus.count),1),t("td",null,i(o.reproduct().estrus.lastDate),1),Ht]),t("tr",null,[Kt,t("td",null,i(o.reproduct().mating.count),1),t("td",null,i(o.reproduct().mating.lastDate),1),Wt]),t("tr",null,[Gt,t("td",null,i(o.reproduct().check.count),1),t("td",null,i(o.reproduct().check.lastDate),1),Jt])])])])]),_:1},8,["loading"]),s(f,{icon:"babyFace",class:"dark:border-gray-600 border-gray-900",loading:l.loading.birth,title:"การคลอดลูก","header-icon":""},{default:r(()=>[t("table",null,[t("tbody",null,[t("tr",null,[Xt,t("td",null,i(o.birth().count),1)]),t("tr",null,[Zt,t("td",null,i(o.birth().lastDate),1)]),t("tr",null,[jt,t("td",null,i(o.birth().countMale),1)]),t("tr",null,[$t,t("td",null,i(o.birth().countFemale),1)])])])]),_:1},8,["loading"]),s(f,{icon:"doctor",loading:l.loading.heal,class:"dark:border-gray-600 border-gray-900",title:"การรักษา","header-icon":""},{default:r(()=>[t("table",null,[t("tbody",null,[t("tr",null,[te,t("td",null,i(o.heal().count),1)]),t("tr",null,[ee,t("td",le,i(o.heal().lastDate),1)]),t("tr",null,[ae,t("td",se,i(o.heal().lastDisease),1)]),t("tr",null,[oe,t("td",ne,i(o.heal().lastMethod),1)])])])]),_:1},8,["loading"]),t("div",ie,[s(x,{title:"การป้องกัน/บำรุง",items:l.protections,datas:l.protectionDatas,loading:l.loading.protection,perPage:"5",icon:"pillMultiple"},null,8,["items","datas","loading"])])])]),_:1}),!l.loading.notification&&l.notifications.length>0?(B(),C(v,{key:0,icon:"messageBadgeOutline",class:"transition-position mb-5",loading:l.loading.notification,title:"การแจ้งเตือน","header-icon":""},{default:r(()=>[s(x,{title:"",items:l.notifications,datas:l.notificationDatas,loading:l.loading.notification,perPage:"5"},null,8,["items","datas","loading"])]),_:1},8,["loading"])):V("",!0),s(v,{icon:"history",class:"transition-position mb-5",title:"ประวัติต่างๆ","header-icon":""},{default:r(()=>[t("div",re,[s(x,{title:"ประวัติการรีดนม",items:l.historyMilks,datas:l.milkDatas,loading:l.loading.milk,icon:"waterCheck",perPage:"5"},null,8,["items","datas","loading"]),!l.loading.reproduct&&l.reproducts.length>0?(B(),C(x,{key:0,title:"ประวัติการสืบพันธ์ุ/ผสมพันธ์ุ",icon:"reproduction",items:l.reproducts,datas:l.reproductDatas,loading:l.loading.reproduct,perPage:"5"},null,8,["items","datas","loading"])):V("",!0),!l.loading.birth&&l.births.length>0?(B(),C(x,{key:1,title:"ประวัติการคลอดลูก",items:l.births,datas:l.birthDatas,loading:l.loading.birth,icon:"babyFaceOutline",perPage:"5"},null,8,["items","datas","loading"])):V("",!0),!l.loading.heal&&l.heals.length>0?(B(),C(x,{key:2,title:"ประวัติการรักษา",icon:"medication",items:l.heals,datas:l.healDatas,loading:l.loading.heal,perPage:"5"},null,8,["items","datas","loading"])):V("",!0)])]),_:1})]),_:1})]),_:1})}const Ce=H(wt,[["render",ce]]);export{Ce as default};
