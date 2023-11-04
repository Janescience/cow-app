import{z as G,S as J,U as X,C as Z,D as j,p as $,O as ee,m as te,_ as le,i as ae,g as se,f as oe,T as re,l as ne,Q as M,B as v,c as y,w as i,F as x,o as D,d as s,s as e,h as C,n as T,t as n,k as q}from"./index-0d7e4a4f.js";import{_ as ie}from"./CardBoxCollapse-5b5735b1.js";import{_ as ce}from"./FormField-3978afe5.js";import{I as de}from"./ImageUpload-64ce3101.js";import{C as O}from"./cow-ff372fbb.js";import{M as ue}from"./milking-bd0c63e7.js";import{r as K,a as he,R as me}from"./reproduct-745d40b1.js";import{s as ge,o as pe,B as fe}from"./birth-3b27e1e0.js";import{H as be}from"./heal-0036a740.js";import{P as _e}from"./protection-062354bc.js";import{F as we}from"./food-7b92130c.js";import{N as ye}from"./notification-6f6cdbc3.js";import{g as xe}from"./age-calculate-cd6774dd.js";import{T as W}from"./alert-2ffd663f.js";const De={data(){return{cow:{},quality:{},milks:[],milkDetails:[],historyMilks:[],reproducts:[],births:[],heals:[],protections:[],foods:[],notifications:[],loading:{cow:!0,milk:!0,reproduct:!0,birth:!0,heal:!0,protection:!0,food:!0,notification:!0},alert:"",newCow:!1,status:J("create"),qualityMilk:X("create"),milkDatas:[{label:"วันที่รีดนม",class:"text-center",type:"date",value:"date"},{label:"เช้า (กก.)",class:"text-center",value:"mQty",type:"number"},{label:"บ่าย (กก.)",class:"text-center",value:"aQty",type:"number"},{label:"รวม (กก.)",class:"text-center",func:t=>(t.mQty+t.aQty).toFixed(2)},{label:"คิดเป็นเงิน",class:"text-right",type:"currency",value:"amount"}],reproductDatas:[{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"วันที่เข้าระบบสืบพันธุ์",class:"text-center",value:"loginDate",type:"date"},{label:"ผล",func:t=>K()[t.result].label},{label:"วันที่เป็นสัด",class:"text-center",value:"estrusDate",type:"date"},{label:"วันที่ผสมพันธุ์",class:"text-center",value:"matingDate",type:"date"},{label:"วันที่ตรวจท้อง",class:"text-center",value:"checkDate",type:"date"},{label:"พ่อพันธุ์",value:"dad"},{label:"สถานะ",func:t=>he()[t.status].label},{label:"วิธีรักษา",value:"howTo"}],birthDatas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"วันที่ตั้งครรภ์",class:"text-center",value:"pregnantDate",type:"date"},{label:"อายุครรภ์",func:t=>this.calAge(t==null?void 0:t.pregnantDate)},{label:"วันที่คลอด",class:"text-center",value:"birthDate",type:"date"},{label:"เพศ",class:"text-center",func:t=>ge()[t.sex]},{label:"ลูกวัว",class:"text-center",func:t=>{var a,c;return t.calf?((a=t.calf)==null?void 0:a.code)+" : "+((c=t.calf)==null?void 0:c.name):""}},{label:"รกค้าง",class:"text-center",func:t=>pe()[t.overgrown]},{label:"วันที่ใช้ยาขับ",class:"text-center",value:"drugDate",type:"date"},{label:"วันที่ล้างมดลูก",class:"text-center",value:"washDate",type:"date"}],protectionDatas:[{label:"ยา/วัคซีน",value:"vaccine.name"},{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"ให้ยาล่าสุด",class:"text-center",value:"vaccine.currentDate",type:"date"},{label:"จำนวนเงิน",class:"text-right",value:"amount",type:"currency"},{label:"ให้ยาครั้งต่อไป",class:"text-center",value:"vaccine.nextDate",type:"date"}],notificationDatas:[{label:"รายการ",value:"name"},{label:"ก่อน",class:"text-center",value:"before"},{label:"มีผล",class:"text-center",value:"date"},{label:"หลัง",class:"text-center",value:"after"},{label:"แจ้งเตือน",class:"text-center",style:"classIcon",value:"alert",type:"icon"}],healDatas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"วันที่รักษา",class:"text-center",value:"date",type:"date"},{label:"อาการ/โรค",class:"text-center",value:"disease"},{label:"วิธีการรักษา",class:"text-center",value:"method"},{label:"คนรักษา",class:"text-center",value:"healer"},{label:"ค่ารักษา",class:"text-center",value:"amount"}],foodDatas:[{label:"ปี",value:"year"},{label:"เดือน",value:"month"},{label:"เฉลี่ยกิน/วัน (กก.)",class:"text-center",value:"qty",func:t=>(t.foodDetails.reduce((c,d)=>c+d.qty,0)/t.numCow).toFixed(2)},{label:"คิดเป็นเงิน/วัน",class:"text-right",value:"amount",func:t=>(t.foodDetails.reduce((c,d)=>c+d.amount,0)/t.numCow).toFixed(2)},{label:"เฉลี่ยกิน/เดือน (กก.)",class:"text-center",value:"qty",func:t=>{const a=new Date(t.year,t.month,0).getDate();return(t.foodDetails.reduce((d,l)=>d+l.qty,0)*a/t.numCow).toFixed(2)}},{label:"คิดเป็นเงิน/เดือน",class:"text-right",value:"amount",func:t=>{const a=new Date(t.year,t.month,0).getDate();return(t.foodDetails.reduce((d,l)=>d+l.amount,0)*a/t.numCow).toFixed(2)}}]}},components:{SectionMain:Z,LayoutAuthenticated:j,BaseButton:$,BaseIcon:ee,BaseButtons:te,CardBox:le,FormControl:ae,FormField:ce,UserAvatar:se,BaseLevel:oe,ImageUpload:de,Table:re,CardBoxCollapse:ie,BaseDivider:ne},computed:{canRemove(){return this.milks.length==0&&this.reproducts.length==0&&this.births.length==0},user(){return this.$store.state.auth.user},milk(){let t=0,a=0,c=0,d=0;this.historyMilks=[],Object.keys(this.milks).forEach(w=>{let k=this.milks[w],h={},m=0,g=0,p=0;k.map(u=>{u.milkDetails.map(f=>{u.time==="M"?(a+=f.qty,m+=f.qty):(c+=f.qty,g+=f.qty),p+=f.amount,d+=f.amount}),u.milkDetails.length>0&&(t+=u.milkDetails.length,h.date=u.date,h.mQty=m,h.aQty=g,h.amount=p)}),Object.keys(h).length!==0&&this.historyMilks.push(h)}),this.historyMilks=M.orderBy(this.historyMilks,"date","desc");let l=(a+c)/t,o=a/t,b=c/t;return{avgTotal:t>0?l:0,avgMorning:t>0?o:0,avgAfternoon:t>0?b:0,all:a+c,amount:d}}},created(){const t=this.$route.params.id;this.getCowData(t)},methods:{async getCow(t){this.loading.cow=!0;const a=await O.get(t);a.data&&(this.cow=a.data.cow,this.cow.birthDate=new Date(this.cow.birthDate),this.cow.adopDate=new Date(this.cow.adopDate),this.loading.cow=!1)},async getCowData(t){this.loading.cow=!0;const a=await O.get(t);if(a.data){this.cow=a.data.cow,this.quality=a.data.quality,this.cow.birthDate=new Date(this.cow.birthDate),this.cow.adopDate=new Date(this.cow.adopDate),this.loading.cow=!1,this.loading.reproduct=!0;const c=await me.all({cow:t});c.data&&(this.reproducts=c.data.reproducts),this.loading.reproduct=!1,this.loading.birth=!0;const d=await fe.all({cow:t,status:"B"});d&&(this.births=d.data.births),this.loading.birth=!1,this.loading.heal=!0;const l=await be.all({cow:t});l&&(this.heals=l.data.heals),this.loading.heal=!1,this.loading.protection=!0;const o=await _e.all({cows:t});if(o){const h=M.groupBy(o.data.protections,"vaccine._id");for(let m of Object.keys(h)){const g=h[m],p=M.orderBy(g,"seq","desc");p.length>0&&this.protections.push(p[0])}}this.loading.protection=!1,this.loading.food=!0;const b=await we.all({corral:this.cow.corral});b&&(this.foods=b.data.foods),this.loading.food=!1,this.loading.milk=!0;const w=await ue.get({cow:t});if(w.data){for(let h of w.data.milks)h.groupKey=v(h.date,"YYYY-MM-DD").format("YYYYMMDD");this.milks=M.groupBy(w.data.milks,"groupKey")}this.loading.milk=!1,this.loading.notification=!0;const k=await ye.getCalendar({cow:t});if(k.data){const h=M.groupBy(k.data.events,"code"),m=v(new Date).startOf("day");let g=[];for(let p of Object.keys(h)){const u=h[p];let f="",F=null,Y=null,A=null,r=null;for(let _ of u)_.period=="today"?(f=_.name,F=v(_.time.start).format("DD/MM/YYYY"),r=v(_.time.start).startOf("day")):_.period=="before"?Y=v(_.time.start).format("DD/MM/YYYY"):_.period=="after"&&(A=v(_.time.start).format("DD/MM/YYYY"));g.push({name:f,date:F,dueDate:r,before:Y,after:A,classIcon:m.isAfter(r)?"bg-teal-900 text-green-500 rounded-full p-1":"bg-red-900 text-rose-400 rounded-full p-1",alert:m.isAfter(r)?"bellCheckOutline":"bellAlertOutline"})}this.notifications=M.orderBy(g,"dueDate","desc")}this.loading.notification=!1}},async update(){this.loading.cow=!0,this.alert="";try{await O.update(this.cow._id,this.cow)&&(this.getCow(this.$route.params.id),W.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,W.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},reproduct(){let t=v(),a=this.reproducts.length>0?this.reproducts.length:"-",c=this.reproducts.length>0?this.formatDate(this.reproducts[0].loginDate):"-",d=this.reproducts.length>0?K()[this.reproducts[0].result].label:"-",l=0,o=0,b=0,w="-",k="-",h="-";for(let m of this.reproducts)m.estrusDate!=null&&v(m.estrusDate)<=t&&(l++,w=this.formatDate(m.estrusDate)),m.matingDate!=null&&v(m.matingDate)<=t&&(o++,k=this.formatDate(m.matingDate)),m.checkDate!=null&&v(m.checkDate)<=t&&(b++,h=this.formatDate(m.checkDate));return{login:{count:a,lastDate:c,result:d},estrus:{count:l>0?l:"-",lastDate:w},mating:{count:o>0?o:"-",lastDate:k},check:{count:b>0?b:"-",lastDate:h}}},birth(){return{count:this.births.length>0?this.births.length:"-",lastDate:this.births.length>0?this.formatDate(this.births[0].birthDate):"-",countMale:this.births.length>0?this.births.filter(t=>t.sex==="M").length:"-",countFemale:this.births.length>0?this.births.filter(t=>t.sex==="F").length:"-"}},heal(){let t=this.heals.length>0?this.heals.length:"-",a=this.heals.length>0?this.formatDate(this.heals[0].date):"-",c=this.heals.length>0?this.heals[0].disease:"-",d=this.heals.length>0&&this.heals[0].method?this.heals[0].method:"-";return{count:t,lastDate:a,lastDisease:c,lastMethod:d}},food(){const t={qty:0,amount:0};for(let a of this.foods){const c=new Date(a.year,a.month,0).getDate();t.qty+=a.foodDetails.reduce((d,l)=>d+l.qty,0)*c/a.numCow,t.amount+=a.foodDetails.reduce((d,l)=>d+l.amount,0)*c/a.numCow}return{sum:t}},filterColor(){var a;const t=(a=this.quality)==null?void 0:a.grade;if(t==="A+")return{grade:"text-lime-500 p-1 ",profit:"bg-green-900 text-lime-500"};if(t==="A")return{grade:"text-green-500 ",profit:"bg-teal-900 text-green-500"};if(t==="B")return{grade:"p-1 ",profit:"bg-gray-600 text-white"};if(t==="C")return{grade:"text-orange-500 p-1",profit:"bg-orange-900 text-yellow-500"};if(t==="D")return{grade:"text-red-500 p-1 ",profit:"bg-red-900 text-rose-400 "}},filterText(){var a;const t=(a=this.quality)==null?void 0:a.grade;if(t==="A+")return{percent:"(กำไร > 80%)"};if(t==="A")return{percent:"(กำไร 51% - 80%)"};if(t==="B")return{percent:"(กำไร 31% - 50%)"};if(t==="C")return{percent:"(กำไร 0% - 30%)"};if(t==="D")return{percent:"(กำไร <= 0%)"}},formatDate(t){return t?v(new Date(t)).format("DD/MM/YYYY"):""},calAge(t){return xe(t)}}},ve={class:"px-4 sm:px-0 mb-4 flex items-center justify-between"},ke={class:"flex items-center justify-start"},Ce=e("h1",{class:"text-base lg:text-2xl"},"รายละเอียดโค",-1),Me={class:"grid lg:grid-cols-3 grid-cols-1 gap-5"},Ve={class:"grid gap-5 grid-cols-2 lg:grid-cols-4 md:grid-cols-6"},Be={class:"lg:row-span-4 col-span-2 lg:col-span-1"},qe={class:"grid grid-cols-3 gap-5"},Fe={class:"row-span-3 col-span-2 text-center p-2"},Ye={class:"p-2"},Ae={class:"text-gray-500 text-xs"},Te=e("div",null," อายุ ",-1),Oe={class:"grid grid-cols-1 gap-5 mt-5"},Ue={class:"grid grid-cols-2 gap-5"},Se=e("p",{class:"mt-1"},"รายได้ทั้งหมด",-1),Qe={class:"bg-teal-900 p-1 text-lg text-center rounded-lg text-green-500"},Re={class:"grid grid-cols-2 gap-5"},Ie=e("p",{class:"mt-1"},"ค่าใช้จ่ายทั้งหมด",-1),Pe={class:"bg-red-900 p-1 text-lg text-center rounded-lg text-rose-400"},ze=e("hr",{class:"border-t border-gray-100 dark:border-gray-600"},null,-1),Le={class:"grid grid-cols-2 gap-5"},Ne=e("p",{class:"mt-1"},"กำไร ",-1),Ee={class:"overflow-x-auto"},He=e("thead",null,[e("th",{class:"whitespace-nowrap text-center"},"เฉลี่ย/วัน (กก.)"),e("th",{class:"whitespace-nowrap text-center"},"เฉลี่ยเช้า/วัน (กก.)"),e("th",{class:"whitespace-nowrap text-center"},"เฉลี่ยบ่าย/วัน (กก.)"),e("th",{class:"whitespace-nowrap text-center"},"รวมน้ำนมทั้งหมด (กก.)"),e("th",{class:"whitespace-nowrap text-center"},"รวมเป็นเงินทั้งหมด")],-1),Ke={class:"whitespace-nowrap text-center font-extrabold"},We={class:"whitespace-nowrap text-center font-extrabold"},Ge={class:"whitespace-nowrap text-center font-extrabold"},Je={class:"whitespace-nowrap text-center font-extrabold"},Xe={class:"whitespace-nowrap text-center font-extrabold"},Ze={class:"grid grid-cols-1 gap-5 lg:p-4"},je={class:"ml-1 mr-1 underline decoration-2 font-extrabold"},$e={class:"ml-1 mr-1 underline decoration-2 font-extrabold"},et={class:"grid lg:grid-cols-2 grid-cols-1 gap-5 lg:p-4"},tt=e("td",null,"จำนวนครั้ง",-1),lt=e("td",null,"วันที่ล่าสุด",-1),at=e("td",null,"จำนวนเพศผู้",-1),st=e("td",null,"จำนวนเพศเมีย",-1),ot=e("p",{class:"text-gray-500 text-sm"},"ไม่เคยคลอดลูก",-1),rt=e("td",{class:"whitespace-nowrap"},"จำนวนครั้ง",-1),nt=e("td",{class:"whitespace-nowrap"},"วันที่ล่าสุด",-1),it={class:"whitespace-nowrap"},ct=e("td",{class:"whitespace-nowrap"},"อาการ/โรค",-1),dt={class:"whitespace-nowrap"},ut=e("td",{class:"whitespace-nowrap"},"วิธีการรักษา",-1),ht={class:"whitespace-nowrap"},mt=e("p",{class:"text-gray-500 text-sm"},"ไม่เคยรักษา",-1),gt={class:"overflow-x-auto"},pt=e("thead",null,[e("th",{class:"whitespace-nowrap"},"รายการ"),e("th",{class:"whitespace-nowrap"},"จำนวนครั้ง"),e("th",{class:"whitespace-nowrap"},"วันที่ล่าสุด"),e("th",{class:"whitespace-nowrap"},"ผลล่าสุด")],-1),ft=e("td",{class:"whitespace-nowrap"},"เข้าระบบสืบพันธุ์",-1),bt=e("td",{class:"whitespace-nowrap"},"เป็นสัด",-1),_t=e("td",null,null,-1),wt=e("td",{class:"whitespace-nowrap"},"ผสม",-1),yt=e("td",null,null,-1),xt=e("td",{class:"whitespace-nowrap"},"ตรวจท้อง",-1),Dt=e("td",null,null,-1),vt=e("p",{class:"text-gray-500 text-sm"},"ไม่เคยสืบพันธุ์/ผสมพันธุ์",-1),kt={class:"lg:col-span-2"},Ct={class:"grid grid-cols-1 gap-5 lg:p-4"},Mt={class:"grid grid-cols-1 gap-5 lg:p-4"};function Vt(t,a,c,d,l,o){const b=x("BaseIcon"),w=x("BaseButton"),k=x("BaseButtons"),h=x("ImageUpload"),m=x("BaseLevel"),g=x("FormControl"),p=x("FormField"),u=x("CardBox"),f=x("Table"),F=x("di"),Y=x("SectionMain"),A=x("LayoutAuthenticated");return D(),y(A,null,{default:i(()=>[s(Y,{class:"text-sm lg:text-base"},{default:i(()=>[e("section",ve,[e("div",ke,[s(b,{path:"cow",size:"30",class:"mr-3"}),Ce]),s(k,{class:"text-sm lg:text-base",type:"justify-end"},{default:i(()=>[s(w,{label:"ย้อนกลับ",color:"light",small:"",onClick:a[0]||(a[0]=r=>this.$router.push("/manage/cow"))})]),_:1})]),e("div",Me,[s(u,{class:"lg:col-span-2 lg:mb-5",loading:l.loading.cow,title:"ข้อมูลโค","header-icon":"",icon:"cardTextOutline"},{default:i(()=>[e("div",Ve,[e("div",Be,[s(h,{modelValue:l.cow.image,"onUpdate:modelValue":a[1]||(a[1]=r=>l.cow.image=r),class:"lg:mt-12 mr-2"},null,8,["modelValue"]),s(m,{type:"justify-center text-xs font-thin text-slate-500"},{default:i(()=>[C(" อัพโหลดรูปภาพ (คลิกที่รูป) ")]),_:1}),s(k,{type:"justify-center",class:"mt-5"},{default:i(()=>[s(w,{label:"ลบ",color:"danger",onClick:a[2]||(a[2]=r=>t.remove()),small:""}),s(w,{label:"บันทึก",color:"success",onClick:a[3]||(a[3]=r=>o.update()),small:""})]),_:1})]),s(p,{label:"รหัสโค",help:"* ห้ามว่าง"},{default:i(()=>[s(g,{modelValue:l.cow.code,"onUpdate:modelValue":a[4]||(a[4]=r=>l.cow.code=r),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),s(p,{label:"ชื่อโค",help:"* ห้ามว่าง"},{default:i(()=>[s(g,{modelValue:l.cow.name,"onUpdate:modelValue":a[5]||(a[5]=r=>l.cow.name=r),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),s(p,{label:"น้ำหนัก (กก.)"},{default:i(()=>[s(g,{modelValue:l.cow.weight,"onUpdate:modelValue":a[6]||(a[6]=r=>l.cow.weight=r),icon:"weight"},null,8,["modelValue"])]),_:1}),s(p,{label:"วันเกิด",help:"* ห้ามว่าง"},{default:i(()=>[s(g,{modelValue:l.cow.birthDate,"onUpdate:modelValue":a[7]||(a[7]=r=>l.cow.birthDate=r),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),s(p,{label:"วันที่นำเข้าฟาร์ม",help:"* ห้ามว่าง"},{default:i(()=>[s(g,{modelValue:l.cow.adopDate,"onUpdate:modelValue":a[8]||(a[8]=r=>l.cow.adopDate=r),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),s(p,{label:"สถานะ"},{default:i(()=>[s(g,{modelValue:l.cow.status,"onUpdate:modelValue":a[9]||(a[9]=r=>l.cow.status=r),options:l.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),s(p,{label:"คุณภาพน้ำนม"},{default:i(()=>[s(g,{modelValue:l.cow.quality,"onUpdate:modelValue":a[10]||(a[10]=r=>l.cow.quality=r),options:l.qualityMilk,icon:""},null,8,["modelValue","options"])]),_:1}),s(p,{label:"คอก"},{default:i(()=>[s(g,{modelValue:l.cow.corral,"onUpdate:modelValue":a[11]||(a[11]=r=>l.cow.corral=r),icon:"barn"},null,8,["modelValue"])]),_:1}),s(p,{label:"พ่อพันธุ์"},{default:i(()=>[s(g,{modelValue:l.cow.dad,"onUpdate:modelValue":a[12]||(a[12]=r=>l.cow.dad=r),icon:"genderMale"},null,8,["modelValue"])]),_:1}),s(p,{label:"แม่พันธุ์"},{default:i(()=>[s(g,{modelValue:l.cow.mom,"onUpdate:modelValue":a[13]||(a[13]=r=>l.cow.mom=r),icon:"genderFemale"},null,8,["modelValue"])]),_:1})])]),_:1},8,["loading"]),s(u,{icon:"trophyVariantOutline",title:"คุณภาพ/ความคุ้มค่า",class:"mb-5","header-icon":""},{default:i(()=>{var r,_,V,B,U,S,Q,R,I,P,z,L,N,E,H;return[e("div",qe,[e("p",{class:T(((r=o.filterColor())==null?void 0:r.grade)+"  text-center text-7xl font-extrabold mt-3")},n((_=l.quality)==null?void 0:_.grade),3),e("div",Fe,[e("p",{class:T(((V=o.filterColor())==null?void 0:V.grade)+" text-xl font-extrabold")},n(t.$filters.number((U=(B=l.quality)==null?void 0:B.profit)==null?void 0:U.percent))+"%",3),e("p",Ye,[C("ผลผลิตอยู่ในเกณฑ์ "),e("p",{class:T((S=o.filterColor())==null?void 0:S.grade)},n((Q=l.quality)==null?void 0:Q.description),3)]),e("p",Ae,n((R=o.filterText())==null?void 0:R.percent),1)])]),Te,e("div",Oe,[e("div",Ue,[Se,e("p",Qe,n(t.$filters.currency((P=(I=l.quality)==null?void 0:I.income)==null?void 0:P.sum)),1)]),e("div",Re,[Ie,e("p",Pe,n(t.$filters.currency((L=(z=l.quality)==null?void 0:z.expense)==null?void 0:L.sum)),1)]),ze,e("div",Le,[Ne,e("p",{class:T(((N=o.filterColor())==null?void 0:N.profit)+" p-1 text-lg text-center rounded-lg")},n(t.$filters.currency((H=(E=l.quality)==null?void 0:E.profit)==null?void 0:H.amount)),3)])])]}),_:1})]),s(u,{icon:"cupWater",loading:l.loading.milk,title:"ข้อมูลน้ำนมดิบ",class:"mb-5","header-icon":""},{default:i(()=>[e("div",Ee,[e("table",null,[He,e("tbody",null,[e("tr",null,[e("td",Ke,[s(b,{path:"water",size:"16",class:"text-white bg-green-900 rounded-full mr-1"}),C(" ~ "+n(t.$filters.number(o.milk.avgTotal)),1)]),e("td",We,[s(b,{path:"clockTimeEightOutline",size:"16",class:"text-yellow-500 bg-orange-900 rounded-full mr-1"}),C(" ~ "+n(t.$filters.number(o.milk.avgMorning)),1)]),e("td",Ge,[s(b,{path:"clockTimeThreeOutline",size:"16",class:"text-orange-500 bg-red-900 rounded-full mr-1"}),C(" ~ "+n(t.$filters.number(o.milk.avgAfternoon)),1)]),e("td",Je,[s(b,{path:"cupWater",size:"16",class:"text-white bg-black rounded-full mr-1"}),C(" "+n(t.$filters.number(o.milk.all)),1)]),e("td",Xe,[s(b,{path:"cash",size:"16",class:"text-teal-500 bg-green-900 rounded-full mr-1"}),C(" "+n(t.$filters.currency(o.milk.amount)),1)])])])])])]),_:1},8,["loading"]),l.foods.length>0?(D(),y(u,{key:0,icon:"foodDrumstickOutline",class:"transition-position mb-5",title:"การกินอาหาร","has-table":"","header-icon":""},{default:i(()=>[e("div",Ze,[s(f,{title:"รายการกินอาหาร",items:l.foods,datas:l.foodDatas,loading:l.loading.food,perPage:"5"},null,8,["items","datas","loading"]),s(F,{class:"flex justify-end lg:mb-0 mb-5"},{default:i(()=>{var r,_,V,B;return[C(" รวมกินทั้งหมด "),e("p",je,n(t.$filters.number((_=(r=o.food())==null?void 0:r.sum)==null?void 0:_.qty)),1),C(" กก. คิดเป็นเงิน "),e("p",$e,n(t.$filters.currency((B=(V=o.food())==null?void 0:V.sum)==null?void 0:B.amount)),1)]}),_:1})])]),_:1})):q("",!0),s(u,{icon:"calendarClock",class:"transition-position mb-5","has-table":"",title:"ข้อมูลล่าสุด","header-icon":""},{default:i(()=>[e("div",et,[o.birth().count>0?(D(),y(u,{key:0,icon:"babyFace",class:"dark:border-gray-800 border-4",loading:l.loading.birth,title:"การคลอดลูก","header-icon":""},{default:i(()=>[e("table",null,[e("tbody",null,[e("tr",null,[tt,e("td",null,n(o.birth().count),1)]),e("tr",null,[lt,e("td",null,n(o.birth().lastDate),1)]),e("tr",null,[at,e("td",null,n(o.birth().countMale),1)]),e("tr",null,[st,e("td",null,n(o.birth().countFemale),1)])])])]),_:1},8,["loading"])):(D(),y(u,{key:1,title:"การคลอดลูก","header-icon":"",icon:"babyFace",class:"dark:border-gray-800 border-4 text-center h-28"},{default:i(()=>[ot]),_:1})),o.heal().count>0?(D(),y(u,{key:2,icon:"doctor",loading:l.loading.heal,class:"dark:border-gray-800 border-4",title:"การรักษา","header-icon":""},{default:i(()=>[e("table",null,[e("tbody",null,[e("tr",null,[rt,e("td",null,n(o.heal().count),1)]),e("tr",null,[nt,e("td",it,n(o.heal().lastDate),1)]),e("tr",null,[ct,e("td",dt,n(o.heal().lastDisease),1)]),e("tr",null,[ut,e("td",ht,n(o.heal().lastMethod),1)])])])]),_:1},8,["loading"])):(D(),y(u,{key:3,title:"การรักษา","header-icon":"",icon:"babyFace",class:"dark:border-gray-800 border-4 text-center h-28"},{default:i(()=>[mt]),_:1})),o.reproduct().login.count>0?(D(),y(u,{key:4,icon:"reproduction",class:"lg:col-span-2 dark:border-gray-800 border-4",loading:l.loading.reproduct,title:"การสืบพันธุ์/ผสมพันธุ์","header-icon":""},{default:i(()=>[e("div",gt,[e("table",null,[pt,e("tbody",null,[e("tr",null,[ft,e("td",null,n(o.reproduct().login.count),1),e("td",null,n(o.reproduct().login.lastDate),1),e("td",null,n(o.reproduct().login.result),1)]),e("tr",null,[bt,e("td",null,n(o.reproduct().estrus.count),1),e("td",null,n(o.reproduct().estrus.lastDate),1),_t]),e("tr",null,[wt,e("td",null,n(o.reproduct().mating.count),1),e("td",null,n(o.reproduct().mating.lastDate),1),yt]),e("tr",null,[xt,e("td",null,n(o.reproduct().check.count),1),e("td",null,n(o.reproduct().check.lastDate),1),Dt])])])])]),_:1},8,["loading"])):(D(),y(u,{key:5,title:"การสืบพันธุ์/ผสมพันธุ์","header-icon":"",icon:"babyFace",class:"dark:border-gray-800 border-4 text-center h-28"},{default:i(()=>[vt]),_:1})),e("div",kt,[s(f,{title:"การป้องกัน/บำรุง",items:l.protections,datas:l.protectionDatas,loading:l.loading.protection,perPage:"5",icon:"pillMultiple"},null,8,["items","datas","loading"])])])]),_:1}),l.notifications.length>0?(D(),y(u,{key:1,icon:"messageBadgeOutline",class:"transition-position mb-5",loading:l.loading.notification,title:"การแจ้งเตือน","header-icon":"","has-table":""},{default:i(()=>[e("div",Ct,[s(f,{title:"",items:l.notifications,datas:l.notificationDatas,loading:l.loading.notification,perPage:"5"},null,8,["items","datas","loading"])])]),_:1},8,["loading"])):q("",!0),s(u,{icon:"history",class:"transition-position mb-5",title:"ประวัติต่างๆ","header-icon":"","has-table":""},{default:i(()=>[e("div",Mt,[s(f,{title:"ประวัติการรีดนม",items:l.historyMilks,datas:l.milkDatas,loading:l.loading.milk,icon:"waterCheck",perPage:"5"},null,8,["items","datas","loading"]),!l.loading.reproduct&&l.reproducts.length>0?(D(),y(f,{key:0,title:"ประวัติการสืบพันธ์ุ/ผสมพันธ์ุ",icon:"reproduction",items:l.reproducts,datas:l.reproductDatas,loading:l.loading.reproduct,perPage:"5"},null,8,["items","datas","loading"])):q("",!0),!l.loading.birth&&l.births.length>0?(D(),y(f,{key:1,title:"ประวัติการคลอดลูก",items:l.births,datas:l.birthDatas,loading:l.loading.birth,icon:"babyFaceOutline",perPage:"5"},null,8,["items","datas","loading"])):q("",!0),!l.loading.heal&&l.heals.length>0?(D(),y(f,{key:2,title:"ประวัติการรักษา",icon:"medication",items:l.heals,datas:l.healDatas,loading:l.loading.heal,perPage:"5"},null,8,["items","datas","loading"])):q("",!0)])]),_:1})]),_:1})]),_:1})}const Lt=G(De,[["render",Vt]]);export{Lt as default};
