import{z as X,S as Z,U as j,C as $,D as ee,p as te,O as le,m as ae,_ as se,i as oe,g as re,f as ne,T as ie,l as ce,Q as V,B as v,c as y,w as i,F as x,o as D,d as s,s as e,h as C,n as T,t as n,k as q}from"./index-a2033551.js";import{_ as de}from"./CardBoxCollapse-579e9f33.js";import{_ as ue}from"./FormField-e9e24f5f.js";import{I as he}from"./ImageUpload-25c91fc7.js";import{C as U}from"./cow-c4c61667.js";import{M as me}from"./milking-3fab6330.js";import{R as ge}from"./reproduction-3835766b.js";import{s as pe,o as fe,B as be}from"./birth-616dacfd.js";import{H as _e}from"./heal-80e83e96.js";import{P as we}from"./protection-04fa4476.js";import{F as ye}from"./food-9e02b641.js";import{N as xe}from"./notification-bf25bfae.js";import{g as De}from"./age-calculate-3b5fe841.js";import{T as G}from"./alert-f79a32d4.js";import{r as J,a as ve}from"./reproduct-4b10c1e3.js";const ke={data(){return{cow:{},quality:{},milks:[],milkDetails:[],historyMilks:[],reproducts:[],births:[],heals:[],protections:[],foods:[],notifications:[],loading:{cow:!0,milk:!0,reproduct:!0,birth:!0,heal:!0,protection:!0,food:!0,notification:!0},alert:"",newCow:!1,status:Z("create"),qualityMilk:j("create"),milkDatas:[{label:"วันที่รีดนม",class:"text-center",type:"date",value:"date"},{label:"เช้า (กก.)",class:"text-center",value:"mQty",type:"number"},{label:"บ่าย (กก.)",class:"text-center",value:"aQty",type:"number"},{label:"รวม (กก.)",class:"text-center",func:t=>(t.mQty+t.aQty).toFixed(2)},{label:"คิดเป็นเงิน",class:"text-right",type:"currency",value:"amount"}],reproductDatas:[{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"วันที่เข้าระบบสืบพันธุ์",class:"text-center",value:"loginDate",type:"date"},{label:"ผล",func:t=>J()[t.result].label},{label:"วันที่เป็นสัด",class:"text-center",value:"estrusDate",type:"date"},{label:"วันที่ผสมพันธุ์",class:"text-center",value:"matingDate",type:"date"},{label:"วันที่ตรวจท้อง",class:"text-center",value:"checkDate",type:"date"},{label:"พ่อพันธุ์",value:"dad"},{label:"สถานะ",func:t=>ve()[t.status].label},{label:"วิธีรักษา",value:"howTo"}],birthDatas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"วันที่ตั้งครรภ์",class:"text-center",value:"pregnantDate",type:"date"},{label:"อายุครรภ์",func:t=>this.calAge(t==null?void 0:t.pregnantDate)},{label:"วันที่คลอด",class:"text-center",value:"birthDate",type:"date"},{label:"เพศ",class:"text-center",func:t=>pe()[t.sex]},{label:"ลูกวัว",class:"text-center",func:t=>{var a,c;return t.calf?((a=t.calf)==null?void 0:a.code)+" : "+((c=t.calf)==null?void 0:c.name):""}},{label:"รกค้าง",class:"text-center",func:t=>fe()[t.overgrown]},{label:"วันที่ใช้ยาขับ",class:"text-center",value:"drugDate",type:"date"},{label:"วันที่ล้างมดลูก",class:"text-center",value:"washDate",type:"date"}],protectionDatas:[{label:"ยา/วัคซีน",value:"vaccine.name"},{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"ให้ยาล่าสุด",class:"text-center",value:"vaccine.currentDate",type:"date"},{label:"จำนวนเงิน",class:"text-right",value:"amount",type:"currency"},{label:"ให้ยาครั้งต่อไป",class:"text-center",value:"vaccine.nextDate",type:"date"}],notificationDatas:[{label:"รายการ",value:"name"},{label:"ก่อน",class:"text-center",value:"before"},{label:"มีผล",class:"text-center",value:"date"},{label:"หลัง",class:"text-center",value:"after"},{label:"แจ้งเตือน",class:"text-center",style:"classIcon",value:"alert",type:"icon"}],healDatas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"วันที่รักษา",class:"text-center",value:"date",type:"date"},{label:"อาการ/โรค",class:"text-center",value:"disease"},{label:"วิธีการรักษา",class:"text-center",value:"method"},{label:"คนรักษา",class:"text-center",value:"healer"},{label:"ค่ารักษา",class:"text-center",value:"amount"}],foodDatas:[{label:"ปี",value:"year"},{label:"เดือน",value:"month"},{label:"เฉลี่ยกิน/วัน (กก.)",class:"text-center",value:"qty",func:t=>(t.foodDetails.reduce((c,d)=>c+d.qty,0)/t.numCow).toFixed(2)},{label:"คิดเป็นเงิน/วัน",class:"text-right",value:"amount",func:t=>(t.foodDetails.reduce((c,d)=>c+d.amount,0)/t.numCow).toFixed(2)},{label:"เฉลี่ยกิน/เดือน (กก.)",class:"text-center",value:"qty",func:t=>{const a=new Date(t.year,t.month,0).getDate();return(t.foodDetails.reduce((d,l)=>d+l.qty,0)*a/t.numCow).toFixed(2)}},{label:"คิดเป็นเงิน/เดือน",class:"text-right",value:"amount",func:t=>{const a=new Date(t.year,t.month,0).getDate();return(t.foodDetails.reduce((d,l)=>d+l.amount,0)*a/t.numCow).toFixed(2)}}]}},components:{SectionMain:$,LayoutAuthenticated:ee,BaseButton:te,BaseIcon:le,BaseButtons:ae,CardBox:se,FormControl:oe,FormField:ue,UserAvatar:re,BaseLevel:ne,ImageUpload:he,Table:ie,CardBoxCollapse:de,BaseDivider:ce},computed:{canRemove(){return this.milks.length==0&&this.reproducts.length==0&&this.births.length==0},user(){return this.$store.state.auth.user},milk(){let t=0,a=0,c=0,d=0;this.historyMilks=[],Object.keys(this.milks).forEach(w=>{let k=this.milks[w],h={},m=0,g=0,p=0;k.map(u=>{u.milkDetails.map(f=>{u.time==="M"?(a+=f.qty,m+=f.qty):(c+=f.qty,g+=f.qty),p+=f.amount,d+=f.amount}),u.milkDetails.length>0&&(t+=u.milkDetails.length,h.date=u.date,h.mQty=m,h.aQty=g,h.amount=p)}),Object.keys(h).length!==0&&this.historyMilks.push(h)}),this.historyMilks=V.orderBy(this.historyMilks,"date","desc");let l=(a+c)/t,o=a/t,b=c/t;return{avgTotal:t>0?l:0,avgMorning:t>0?o:0,avgAfternoon:t>0?b:0,all:a+c,amount:d}}},created(){const t=this.$route.params.id;this.getCowData(t)},methods:{async getCow(t){this.loading.cow=!0;const a=await U.get(t);a.data&&(this.cow=a.data.cow,this.cow.birthDate=new Date(this.cow.birthDate),this.cow.adopDate=new Date(this.cow.adopDate),this.loading.cow=!1)},async getCowData(t){this.loading.cow=!0;const a=await U.get(t);if(a.data){this.cow=a.data.cow,this.quality=a.data.quality,this.cow.birthDate=new Date(this.cow.birthDate),this.cow.adopDate=new Date(this.cow.adopDate),this.loading.cow=!1,this.loading.reproduct=!0;const c=await ge.all({cow:t});c.data&&(this.reproducts=c.data.reproducts),this.loading.reproduct=!1,this.loading.birth=!0;const d=await be.all({cow:t,status:"B"});d&&(this.births=d.data.births),this.loading.birth=!1,this.loading.heal=!0;const l=await _e.all({cow:t});l&&(this.heals=l.data.heals),this.loading.heal=!1,this.loading.protection=!0;const o=await we.all({cows:t});if(o){const h=V.groupBy(o.data.protections,"vaccine._id");for(let m of Object.keys(h)){const g=h[m],p=V.orderBy(g,"seq","desc");p.length>0&&this.protections.push(p[0])}}this.loading.protection=!1,this.loading.food=!0;const b=await ye.all({corral:this.cow.corral});b&&(this.foods=b.data.foods),this.loading.food=!1,this.loading.milk=!0;const w=await me.get({cow:t});if(w.data){for(let h of w.data.milks)h.groupKey=v(h.date,"YYYY-MM-DD").format("YYYYMMDD");this.milks=V.groupBy(w.data.milks,"groupKey")}this.loading.milk=!1,this.loading.notification=!0;const k=await xe.getCalendar({cow:t});if(k.data){const h=V.groupBy(k.data.events,"code"),m=v(new Date).startOf("day");let g=[];for(let p of Object.keys(h)){const u=h[p];let f="",F=null,A=null,Y=null,r=null;for(let _ of u)_.period=="today"?(f=_.name,F=v(_.time.start).format("DD/MM/YYYY"),r=v(_.time.start).startOf("day")):_.period=="before"?A=v(_.time.start).format("DD/MM/YYYY"):_.period=="after"&&(Y=v(_.time.start).format("DD/MM/YYYY"));g.push({name:f,date:F,dueDate:r,before:A,after:Y,classIcon:m.isAfter(r)?"bg-teal-900 text-green-500 rounded-full p-1":"bg-red-900 text-rose-400 rounded-full p-1",alert:m.isAfter(r)?"bellCheckOutline":"bellAlertOutline"})}this.notifications=V.orderBy(g,"dueDate","desc")}this.loading.notification=!1}},getFile(t){this.cow.file=t},async update(){this.loading.cow=!0,this.alert="";try{await U.update(this.cow._id,this.cow)&&(await U.upload(this.cow),this.getCow(this.$route.params.id),G.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,G.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},reproduct(){let t=v(),a=this.reproducts.length>0?this.reproducts.length:"-",c=this.reproducts.length>0?this.formatDate(this.reproducts[0].loginDate):"-",d=this.reproducts.length>0?J()[this.reproducts[0].result].label:"-",l=0,o=0,b=0,w="-",k="-",h="-";for(let m of this.reproducts)m.estrusDate!=null&&v(m.estrusDate)<=t&&(l++,w=this.formatDate(m.estrusDate)),m.matingDate!=null&&v(m.matingDate)<=t&&(o++,k=this.formatDate(m.matingDate)),m.checkDate!=null&&v(m.checkDate)<=t&&(b++,h=this.formatDate(m.checkDate));return{login:{count:a,lastDate:c,result:d},estrus:{count:l>0?l:"-",lastDate:w},mating:{count:o>0?o:"-",lastDate:k},check:{count:b>0?b:"-",lastDate:h}}},birth(){return{count:this.births.length>0?this.births.length:"-",lastDate:this.births.length>0?this.formatDate(this.births[0].birthDate):"-",countMale:this.births.length>0?this.births.filter(t=>t.sex==="M").length:"-",countFemale:this.births.length>0?this.births.filter(t=>t.sex==="F").length:"-"}},heal(){let t=this.heals.length>0?this.heals.length:"-",a=this.heals.length>0?this.formatDate(this.heals[0].date):"-",c=this.heals.length>0?this.heals[0].disease:"-",d=this.heals.length>0&&this.heals[0].method?this.heals[0].method:"-";return{count:t,lastDate:a,lastDisease:c,lastMethod:d}},food(){const t={qty:0,amount:0};for(let a of this.foods){const c=new Date(a.year,a.month,0).getDate();t.qty+=a.foodDetails.reduce((d,l)=>d+l.qty,0)*c/a.numCow,t.amount+=a.foodDetails.reduce((d,l)=>d+l.amount,0)*c/a.numCow}return{sum:t}},filterColor(){var a;const t=(a=this.quality)==null?void 0:a.grade;if(t==="A+")return{grade:"text-lime-500 p-1 ",profit:"bg-green-900 text-lime-500"};if(t==="A")return{grade:"text-green-500 ",profit:"bg-teal-900 text-green-500"};if(t==="B")return{grade:"p-1 ",profit:"bg-gray-600 text-white"};if(t==="C")return{grade:"text-orange-500 p-1",profit:"bg-orange-900 text-yellow-500"};if(t==="D")return{grade:"text-red-500 p-1 ",profit:"bg-red-900 text-rose-400 "}},filterText(){var a;const t=(a=this.quality)==null?void 0:a.grade;if(t==="A+")return{percent:"(กำไร > 80%)"};if(t==="A")return{percent:"(กำไร 51% - 80%)"};if(t==="B")return{percent:"(กำไร 31% - 50%)"};if(t==="C")return{percent:"(กำไร 0% - 30%)"};if(t==="D")return{percent:"(กำไร <= 0%)"}},formatDate(t){return t?v(new Date(t)).format("DD/MM/YYYY"):""},calAge(t){return De(t).ageString}}},Ce={class:"px-4 sm:px-0 mb-4 flex items-center justify-between"},Ve={class:"flex items-center justify-start"},Me=e("h1",{class:"text-base lg:text-2xl"},"รายละเอียดโค",-1),Be={class:"grid lg:grid-cols-3 grid-cols-1 gap-5"},qe={class:"grid gap-5 grid-cols-2 lg:grid-cols-4 md:grid-cols-6"},Fe={class:"lg:row-span-4 col-span-2 lg:col-span-1"},Ae={class:"grid grid-cols-3 gap-5"},Ye={class:"row-span-3 col-span-2 text-center p-2"},Te={class:"p-2"},Ue={class:"text-gray-500 text-xs"},Oe={class:"grid grid-cols-1 gap-5 mt-5"},Se={class:"grid grid-cols-2 gap-5"},Qe=e("p",{class:"mt-1"},"อายุ",-1),Re={class:"text-center rounded-lg"},Ie=e("p",{class:"mt-1"},"อยู่ฟาร์ม",-1),Pe={class:"text-center rounded-lg"},ze=e("hr",{class:"border-t border-gray-100 dark:border-gray-600"},null,-1),Le={class:"grid grid-cols-2 gap-5"},Ne=e("p",{class:"mt-1"},"รายได้ทั้งหมด",-1),Ee={class:"bg-teal-900 p-1 text-lg text-center rounded-lg text-green-500"},He={class:"grid grid-cols-2 gap-5"},Ke=e("p",{class:"mt-1"},"ค่าใช้จ่ายทั้งหมด",-1),We={class:"bg-red-900 p-1 text-lg text-center rounded-lg text-rose-400"},Ge=e("hr",{class:"border-t border-gray-100 dark:border-gray-600"},null,-1),Je={class:"grid grid-cols-2 gap-5"},Xe=e("p",{class:"mt-1"},"กำไร ",-1),Ze={class:"overflow-x-auto"},je=e("thead",null,[e("th",{class:"whitespace-nowrap text-center"},"เฉลี่ย/วัน (กก.)"),e("th",{class:"whitespace-nowrap text-center"},"เฉลี่ยเช้า/วัน (กก.)"),e("th",{class:"whitespace-nowrap text-center"},"เฉลี่ยบ่าย/วัน (กก.)"),e("th",{class:"whitespace-nowrap text-center"},"รวมน้ำนมทั้งหมด (กก.)"),e("th",{class:"whitespace-nowrap text-center"},"รวมเป็นเงินทั้งหมด")],-1),$e={class:"whitespace-nowrap text-center font-extrabold"},et={class:"whitespace-nowrap text-center font-extrabold"},tt={class:"whitespace-nowrap text-center font-extrabold"},lt={class:"whitespace-nowrap text-center font-extrabold"},at={class:"whitespace-nowrap text-center font-extrabold"},st={class:"grid grid-cols-1 gap-5 lg:p-4"},ot={class:"ml-1 mr-1 underline decoration-2 font-extrabold"},rt={class:"ml-1 mr-1 underline decoration-2 font-extrabold"},nt={class:"grid lg:grid-cols-2 grid-cols-1 gap-5 lg:p-4"},it=e("td",null,"จำนวนครั้ง",-1),ct=e("td",null,"วันที่ล่าสุด",-1),dt=e("td",null,"จำนวนเพศผู้",-1),ut=e("td",null,"จำนวนเพศเมีย",-1),ht=e("p",{class:"text-gray-500 text-sm"},"ไม่เคยคลอดลูก",-1),mt=e("td",{class:"whitespace-nowrap"},"จำนวนครั้ง",-1),gt=e("td",{class:"whitespace-nowrap"},"วันที่ล่าสุด",-1),pt={class:"whitespace-nowrap"},ft=e("td",{class:"whitespace-nowrap"},"อาการ/โรค",-1),bt={class:"whitespace-nowrap"},_t=e("td",{class:"whitespace-nowrap"},"วิธีการรักษา",-1),wt={class:"whitespace-nowrap"},yt=e("p",{class:"text-gray-500 text-sm"},"ไม่เคยรักษา",-1),xt={class:"overflow-x-auto"},Dt=e("thead",null,[e("th",{class:"whitespace-nowrap"},"รายการ"),e("th",{class:"whitespace-nowrap"},"จำนวนครั้ง"),e("th",{class:"whitespace-nowrap"},"วันที่ล่าสุด"),e("th",{class:"whitespace-nowrap"},"ผลล่าสุด")],-1),vt=e("td",{class:"whitespace-nowrap"},"เข้าระบบสืบพันธุ์",-1),kt=e("td",{class:"whitespace-nowrap"},"เป็นสัด",-1),Ct=e("td",null,null,-1),Vt=e("td",{class:"whitespace-nowrap"},"ผสม",-1),Mt=e("td",null,null,-1),Bt=e("td",{class:"whitespace-nowrap"},"ตรวจท้อง",-1),qt=e("td",null,null,-1),Ft=e("p",{class:"text-gray-500 text-sm"},"ไม่เคยสืบพันธุ์/ผสมพันธุ์",-1),At={class:"lg:col-span-2"},Yt={class:"grid grid-cols-1 gap-5 lg:p-4"},Tt={class:"grid grid-cols-1 gap-5 lg:p-4"};function Ut(t,a,c,d,l,o){const b=x("BaseIcon"),w=x("BaseButton"),k=x("BaseButtons"),h=x("ImageUpload"),m=x("BaseLevel"),g=x("FormControl"),p=x("FormField"),u=x("CardBox"),f=x("Table"),F=x("di"),A=x("SectionMain"),Y=x("LayoutAuthenticated");return D(),y(Y,null,{default:i(()=>[s(A,{class:"text-sm lg:text-base"},{default:i(()=>[e("section",Ce,[e("div",Ve,[s(b,{path:"cow",size:"30",class:"mr-3"}),Me]),s(k,{class:"text-sm lg:text-base",type:"justify-end"},{default:i(()=>[s(w,{label:"ย้อนกลับ",color:"light",small:"",onClick:a[0]||(a[0]=r=>this.$router.push("/manage/cow"))})]),_:1})]),e("div",Be,[s(u,{class:"lg:col-span-2 lg:mb-5",loading:l.loading.cow,title:"ข้อมูลโค","header-icon":"",icon:"cardTextOutline"},{default:i(()=>[e("div",qe,[e("div",Fe,[s(h,{modelValue:l.cow.image,"onUpdate:modelValue":a[1]||(a[1]=r=>l.cow.image=r),class:"lg:mt-12 mr-2",onFile:o.getFile},null,8,["modelValue","onFile"]),s(m,{type:"justify-center text-xs font-thin text-slate-500"},{default:i(()=>[C(" อัพโหลดรูปภาพ (คลิกที่รูป) ")]),_:1}),s(k,{type:"justify-center",class:"mt-5"},{default:i(()=>[s(w,{label:"ลบ",color:"danger",onClick:a[2]||(a[2]=r=>t.remove()),small:""}),s(w,{label:"บันทึก",color:"success",onClick:a[3]||(a[3]=r=>o.update()),small:""})]),_:1})]),s(p,{label:"รหัสโค",help:"* ห้ามว่าง"},{default:i(()=>[s(g,{modelValue:l.cow.code,"onUpdate:modelValue":a[4]||(a[4]=r=>l.cow.code=r),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),s(p,{label:"ชื่อโค",help:"* ห้ามว่าง"},{default:i(()=>[s(g,{modelValue:l.cow.name,"onUpdate:modelValue":a[5]||(a[5]=r=>l.cow.name=r),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),s(p,{label:"น้ำหนัก (กก.)"},{default:i(()=>[s(g,{modelValue:l.cow.weight,"onUpdate:modelValue":a[6]||(a[6]=r=>l.cow.weight=r),icon:"weight"},null,8,["modelValue"])]),_:1}),s(p,{label:"ราคานำเข้า (บาท)"},{default:i(()=>[s(g,{modelValue:l.cow.amount,"onUpdate:modelValue":a[7]||(a[7]=r=>l.cow.amount=r),icon:"cash"},null,8,["modelValue"])]),_:1}),s(p,{label:"วันเกิด",help:"* ห้ามว่าง"},{default:i(()=>[s(g,{modelValue:l.cow.birthDate,"onUpdate:modelValue":a[8]||(a[8]=r=>l.cow.birthDate=r),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),s(p,{label:"วันที่นำเข้าฟาร์ม",help:"* ห้ามว่าง"},{default:i(()=>[s(g,{modelValue:l.cow.adopDate,"onUpdate:modelValue":a[9]||(a[9]=r=>l.cow.adopDate=r),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),s(p,{label:"สถานะ"},{default:i(()=>[s(g,{modelValue:l.cow.status,"onUpdate:modelValue":a[10]||(a[10]=r=>l.cow.status=r),options:l.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),s(p,{label:"คุณภาพน้ำนม"},{default:i(()=>[s(g,{modelValue:l.cow.quality,"onUpdate:modelValue":a[11]||(a[11]=r=>l.cow.quality=r),options:l.qualityMilk,icon:""},null,8,["modelValue","options"])]),_:1}),s(p,{label:"คอก"},{default:i(()=>[s(g,{modelValue:l.cow.corral,"onUpdate:modelValue":a[12]||(a[12]=r=>l.cow.corral=r),icon:"barn"},null,8,["modelValue"])]),_:1}),s(p,{label:"พ่อพันธุ์"},{default:i(()=>[s(g,{modelValue:l.cow.dad,"onUpdate:modelValue":a[13]||(a[13]=r=>l.cow.dad=r),icon:"genderMale"},null,8,["modelValue"])]),_:1}),s(p,{label:"แม่พันธุ์"},{default:i(()=>[s(g,{modelValue:l.cow.mom,"onUpdate:modelValue":a[14]||(a[14]=r=>l.cow.mom=r),icon:"genderFemale"},null,8,["modelValue"])]),_:1})])]),_:1},8,["loading"]),s(u,{icon:"trophyVariantOutline",title:"คุณภาพ/ความคุ้มค่า",class:"mb-5","header-icon":""},{default:i(()=>{var r,_,M,B,O,S,Q,R,I,P,z,L,N,E,H,K,W;return[e("div",Ae,[e("p",{class:T(((r=o.filterColor())==null?void 0:r.grade)+"  text-center text-7xl font-extrabold mt-3")},n((_=l.quality)==null?void 0:_.grade),3),e("div",Ye,[e("p",{class:T(((M=o.filterColor())==null?void 0:M.grade)+" text-xl font-extrabold")},n(t.$filters.number((O=(B=l.quality)==null?void 0:B.profit)==null?void 0:O.percent))+"%",3),e("p",Te,[C("ผลผลิตอยู่ในเกณฑ์ "),e("p",{class:T((S=o.filterColor())==null?void 0:S.grade)},n((Q=l.quality)==null?void 0:Q.description),3)]),e("p",Ue,n((R=o.filterText())==null?void 0:R.percent),1)])]),e("div",Oe,[e("div",Se,[Qe,e("p",Re,n(o.calAge((I=l.cow)==null?void 0:I.birthDate)),1),Ie,e("p",Pe,n(o.calAge((P=l.cow)==null?void 0:P.adopDate)),1)]),ze,e("div",Le,[Ne,e("p",Ee,n(t.$filters.currency((L=(z=l.quality)==null?void 0:z.income)==null?void 0:L.sum)),1)]),e("div",He,[Ke,e("p",We,n(t.$filters.currency((E=(N=l.quality)==null?void 0:N.expense)==null?void 0:E.sum)),1)]),Ge,e("div",Je,[Xe,e("p",{class:T(((H=o.filterColor())==null?void 0:H.profit)+" p-1 text-lg text-center rounded-lg")},n(t.$filters.currency((W=(K=l.quality)==null?void 0:K.profit)==null?void 0:W.amount)),3)])])]}),_:1})]),s(u,{icon:"cupWater",loading:l.loading.milk,title:"ข้อมูลน้ำนมดิบ",class:"mb-5","header-icon":""},{default:i(()=>[e("div",Ze,[e("table",null,[je,e("tbody",null,[e("tr",null,[e("td",$e,[s(b,{path:"water",size:"16",class:"text-white bg-green-900 rounded-full mr-1"}),C(" ~ "+n(t.$filters.number(o.milk.avgTotal)),1)]),e("td",et,[s(b,{path:"clockTimeEightOutline",size:"16",class:"text-yellow-500 bg-orange-900 rounded-full mr-1"}),C(" ~ "+n(t.$filters.number(o.milk.avgMorning)),1)]),e("td",tt,[s(b,{path:"clockTimeThreeOutline",size:"16",class:"text-orange-500 bg-red-900 rounded-full mr-1"}),C(" ~ "+n(t.$filters.number(o.milk.avgAfternoon)),1)]),e("td",lt,[s(b,{path:"cupWater",size:"16",class:"text-white bg-black rounded-full mr-1"}),C(" "+n(t.$filters.number(o.milk.all)),1)]),e("td",at,[s(b,{path:"cash",size:"16",class:"text-teal-500 bg-green-900 rounded-full mr-1"}),C(" "+n(t.$filters.currency(o.milk.amount)),1)])])])])])]),_:1},8,["loading"]),l.foods.length>0?(D(),y(u,{key:0,icon:"foodDrumstickOutline",class:"transition-position mb-5",title:"การกินอาหาร","has-table":"","header-icon":""},{default:i(()=>[e("div",st,[s(f,{title:"รายการกินอาหาร",items:l.foods,datas:l.foodDatas,loading:l.loading.food,perPage:"5"},null,8,["items","datas","loading"]),s(F,{class:"flex justify-end lg:mb-0 mb-5"},{default:i(()=>{var r,_,M,B;return[C(" รวมกินทั้งหมด "),e("p",ot,n(t.$filters.number((_=(r=o.food())==null?void 0:r.sum)==null?void 0:_.qty)),1),C(" กก. คิดเป็นเงิน "),e("p",rt,n(t.$filters.currency((B=(M=o.food())==null?void 0:M.sum)==null?void 0:B.amount)),1)]}),_:1})])]),_:1})):q("",!0),s(u,{icon:"calendarClock",class:"transition-position mb-5","has-table":"",title:"ข้อมูลล่าสุด","header-icon":""},{default:i(()=>[e("div",nt,[o.birth().count>0?(D(),y(u,{key:0,icon:"babyFace",class:"dark:border-gray-800 border-4",loading:l.loading.birth,title:"การคลอดลูก","header-icon":""},{default:i(()=>[e("table",null,[e("tbody",null,[e("tr",null,[it,e("td",null,n(o.birth().count),1)]),e("tr",null,[ct,e("td",null,n(o.birth().lastDate),1)]),e("tr",null,[dt,e("td",null,n(o.birth().countMale),1)]),e("tr",null,[ut,e("td",null,n(o.birth().countFemale),1)])])])]),_:1},8,["loading"])):(D(),y(u,{key:1,title:"การคลอดลูก","header-icon":"",icon:"babyFace",class:"dark:border-gray-800 border-4 text-center h-28"},{default:i(()=>[ht]),_:1})),o.heal().count>0?(D(),y(u,{key:2,icon:"doctor",loading:l.loading.heal,class:"dark:border-gray-800 border-4",title:"การรักษา","header-icon":""},{default:i(()=>[e("table",null,[e("tbody",null,[e("tr",null,[mt,e("td",null,n(o.heal().count),1)]),e("tr",null,[gt,e("td",pt,n(o.heal().lastDate),1)]),e("tr",null,[ft,e("td",bt,n(o.heal().lastDisease),1)]),e("tr",null,[_t,e("td",wt,n(o.heal().lastMethod),1)])])])]),_:1},8,["loading"])):(D(),y(u,{key:3,title:"การรักษา","header-icon":"",icon:"babyFace",class:"dark:border-gray-800 border-4 text-center h-28"},{default:i(()=>[yt]),_:1})),o.reproduct().login.count>0?(D(),y(u,{key:4,icon:"reproduction",class:"lg:col-span-2 dark:border-gray-800 border-4",loading:l.loading.reproduct,title:"การสืบพันธุ์/ผสมพันธุ์","header-icon":""},{default:i(()=>[e("div",xt,[e("table",null,[Dt,e("tbody",null,[e("tr",null,[vt,e("td",null,n(o.reproduct().login.count),1),e("td",null,n(o.reproduct().login.lastDate),1),e("td",null,n(o.reproduct().login.result),1)]),e("tr",null,[kt,e("td",null,n(o.reproduct().estrus.count),1),e("td",null,n(o.reproduct().estrus.lastDate),1),Ct]),e("tr",null,[Vt,e("td",null,n(o.reproduct().mating.count),1),e("td",null,n(o.reproduct().mating.lastDate),1),Mt]),e("tr",null,[Bt,e("td",null,n(o.reproduct().check.count),1),e("td",null,n(o.reproduct().check.lastDate),1),qt])])])])]),_:1},8,["loading"])):(D(),y(u,{key:5,title:"การสืบพันธุ์/ผสมพันธุ์","header-icon":"",icon:"babyFace",class:"dark:border-gray-800 border-4 text-center h-28"},{default:i(()=>[Ft]),_:1})),e("div",At,[s(f,{title:"การป้องกัน/บำรุง",items:l.protections,datas:l.protectionDatas,loading:l.loading.protection,perPage:"5",icon:"pillMultiple"},null,8,["items","datas","loading"])])])]),_:1}),l.notifications.length>0?(D(),y(u,{key:1,icon:"messageBadgeOutline",class:"transition-position mb-5",loading:l.loading.notification,title:"การแจ้งเตือน","header-icon":"","has-table":""},{default:i(()=>[e("div",Yt,[s(f,{title:"",items:l.notifications,datas:l.notificationDatas,loading:l.loading.notification,perPage:"5"},null,8,["items","datas","loading"])])]),_:1},8,["loading"])):q("",!0),s(u,{icon:"history",class:"transition-position mb-5",title:"ประวัติต่างๆ","header-icon":"","has-table":""},{default:i(()=>[e("div",Tt,[s(f,{title:"ประวัติการรีดนม",items:l.historyMilks,datas:l.milkDatas,loading:l.loading.milk,icon:"waterCheck",perPage:"5"},null,8,["items","datas","loading"]),!l.loading.reproduct&&l.reproducts.length>0?(D(),y(f,{key:0,title:"ประวัติการสืบพันธ์ุ/ผสมพันธ์ุ",icon:"reproduction",items:l.reproducts,datas:l.reproductDatas,loading:l.loading.reproduct,perPage:"5"},null,8,["items","datas","loading"])):q("",!0),!l.loading.birth&&l.births.length>0?(D(),y(f,{key:1,title:"ประวัติการคลอดลูก",items:l.births,datas:l.birthDatas,loading:l.loading.birth,icon:"babyFaceOutline",perPage:"5"},null,8,["items","datas","loading"])):q("",!0),!l.loading.heal&&l.heals.length>0?(D(),y(f,{key:2,title:"ประวัติการรักษา",icon:"medication",items:l.heals,datas:l.healDatas,loading:l.loading.heal,perPage:"5"},null,8,["items","datas","loading"])):q("",!0)])]),_:1})]),_:1})]),_:1})}const Xt=X(ke,[["render",Ut]]);export{Xt as default};
