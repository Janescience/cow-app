import{B as T,S as A,C as I,p as L,N as Q,m as E,_ as N,i as O,g as K,f as j,z as y,T as z,c as v,w as r,E as _,o as f,d as o,s as t,h as H,t as n,I as k,K as B,J as M,k as V}from"./index-0ed59e7e.js";import{_ as P}from"./FormField-ad06fe60.js";import{s as J,q as W,I as G}from"./cow-3d3507b0.js";import{T as X}from"./Table-4d530e6b.js";import{C}from"./cow-14c247ee.js";import{M as F}from"./milking-4c27a3b6.js";import{r as q,a as Z,R as $}from"./reproduct-ba7355dd.js";import{s as tt,o as et,B as lt}from"./birth-0378ebd6.js";import{H as st}from"./heal-b27070f1.js";import{P as at}from"./protection-876bb1c0.js";import{F as ot}from"./food-f06748e1.js";import{g as it}from"./age-calculate-bb92e417.js";import{T as R}from"./alert-4a0087f9.js";const nt={data(){return{cow:{},milks:[],milkDetails:[],historyMilks:[],reproducts:[],births:[],heals:[],protections:[],foods:[],loading:{cow:!1,milk:!1,reproduct:!1,birth:!1,heal:!1,protection:!1,food:!1},alert:"",newCow:!1,status:J("create"),quality:W("create"),milkDatas:[{label:"วันที่รีดนม",class:"text-center",type:"date",value:"date"},{label:"ปริมาณน้ำนมดิบ/เช้า (กก.)",class:"text-center",value:"mQty"},{label:"ปริมาณน้ำนมดิบ/บ่าย (กก.)",class:"text-center",value:"aQty"},{label:"ปริมาณน้ำนมดิบรวม (กก.)",class:"text-center",func:l=>l.mQty+l.aQty},{label:"จำนวนเงินรวม",class:"text-right",type:"number",value:"amount"}],reproductDatas:[{label:"ครั้งที่",class:"text-center",value:"seq"},{label:"วันที่เข้าระบบสืบพันธุ์",class:"text-center",value:"loginDate",type:"date"},{label:"ผล",func:l=>q()[l.result].label},{label:"วันที่เป็นสัด",class:"text-center",value:"estrusDate",type:"date"},{label:"วันที่ผสมพันธุ์",class:"text-center",value:"matingDate",type:"date"},{label:"วันที่ตรวจท้อง",class:"text-center",value:"checkDate",type:"date"},{label:"พ่อพันธุ์",value:"dad"},{label:"สถานะ",func:l=>Z()[l.status].label},{label:"วิธีรักษา",value:"howTo"}],birthDatas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"วันที่ตั้งครรภ์",class:"text-center",value:"pregnantDate",type:"date"},{label:"อายุครรภ์",func:l=>this.calAge(l==null?void 0:l.pregnantDate)},{label:"วันที่คลอด",class:"text-center",value:"birthDate",type:"date"},{label:"เพศ",class:"text-center",func:l=>tt()[l.sex]},{label:"ลูกวัว",class:"text-center",func:l=>{var s,u;return l.calf?((s=l.calf)==null?void 0:s.code)+" : "+((u=l.calf)==null?void 0:u.name):""}},{label:"รกค้าง",class:"text-center",func:l=>et()[l.overgrown]},{label:"วันที่ใช้ยาขับ",class:"text-center",value:"drugDate",type:"date"},{label:"วันที่ล้างมดลูก",class:"text-center",value:"washDate",type:"date"}],healDatas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"วันที่รักษา",class:"text-center",value:"date",type:"date"},{label:"อาการ/โรค",class:"text-center",value:"disease"},{label:"วิธีการรักษา",class:"text-center",value:"method"},{label:"คนรักษา",class:"text-center",value:"healer"}]}},components:{SectionMain:A,LayoutAuthenticated:I,BaseButton:L,BaseIcon:Q,BaseButtons:E,CardBox:N,FormControl:O,FormField:P,UserAvatar:K,BaseLevel:j,ImageUpload:G,Table:X},computed:{canRemove(){return this.milks.length==0&&this.reproducts.length==0&&this.births.length==0},user(){return this.$store.state.auth.user}},created(){const l=this.$route.params.id;this.getCowData(l)},methods:{async getCowData(l){this.loading.cow=!0;const s=await C.get(l);if(s.data){this.cow=s.data.cow,this.cow.birthDate=new Date(this.cow.birthDate),this.loading.cow=!1,this.loading.reproduct=!0;const u=await $.all({cow:l});u.data&&(this.reproducts=u.data.reproducts),this.loading.reproduct=!1,this.loading.birth=!0;const b=await lt.all({cow:l});b&&(this.births=b.data.births),this.loading.birth=!1,this.loading.heal=!0;const e=await st.all({cow:l});e&&(this.heals=e.data.heals),this.loading.heal=!1,this.loading.protection=!0;const i=await at.all();i&&(this.protections=i.data.protections),this.loading.protection=!1,this.loading.food=!0;const d=await ot.all({corral:this.cow.corral});d&&(this.foods=d.data.foods),this.loading.food=!1,this.loading.milk=!0;const h=await F.get(),g=await F.getDetail({cow:l});if(h.data&&g.data){for(let p of h.data.milks)p.groupKey=y(p.date,"YYYY-MM-DD").format("YYYYMMDD"),p.details=g.data.milkDetails.filter(c=>c.milk==p._id);this.milks=z.groupBy(h.data.milks,"groupKey")}this.loading.milk=!1}},async update(){this.loading=!0,this.alert="";try{await C.update(this.cow._id,this.cow)&&(this.getCow(this.$route.params.id),this.loading=!1,R.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(l){console.error("Error : ",l),this.loading=!1,this.alert=l.response.data.message,R.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},milk(){let l=0,s=0,u=0;this.historyMilks=[],Object.keys(this.milks).forEach(e=>{let i=this.milks[e],d={},h=0,g=0,p=0;i.map(c=>{c.details.map(m=>{c.time==="M"?(s+=m.qty,h+=m.qty):(u+=m.qty,g+=m.qty),p+=m.amount}),c.details.length>0&&(l+=c.details.length,d.date=c.date,d.mQty=h,d.aQty=g,d.amount=p)}),Object.keys(d).length!==0&&this.historyMilks.push(d)});let b=(s+u)/l;return{avg:(l>0?b:0).toFixed(2),all:(s+u).toFixed(2)}},reproduct(){let l=y(),s=this.reproducts.length>0?this.reproducts.length:"-",u=this.reproducts.length>0?this.formatDate(this.reproducts[0].loginDate):"-",b=this.reproducts.length>0?q()[this.reproducts[0].result].label:"-",e=0,i=0,d=0,h="-",g="-",p="-";for(let c of this.reproducts)c.estrusDate!=null&&y(c.estrusDate)<=l&&(e++,h=this.formatDate(c.estrusDate)),c.matingDate!=null&&y(c.matingDate)<=l&&(i++,g=this.formatDate(c.matingDate)),c.checkDate!=null&&y(c.checkDate)<=l&&(d++,p=this.formatDate(c.checkDate));return{login:{count:s,lastDate:u,result:b},estrus:{count:e>0?e:"-",lastDate:h},mating:{count:i>0?i:"-",lastDate:g},check:{count:d>0?d:"-",lastDate:p}}},birth(){return{count:this.births.length>0?this.births.length:"-",lastDate:this.births.length>0?this.formatDate(this.births[0].birthDate):"-",countMale:this.births.length>0?this.births.filter(l=>l.sex==="M").length:"-",countFemale:this.births.length>0?this.births.filter(l=>l.sex==="F").length:"-"}},heal(){let l=this.heals.length>0?this.heals.length:"-",s=this.heals.length>0?this.formatDate(this.heals[0].date):"-",u=this.heals.length>0?this.heals[0].disease:"-",b=this.heals.length>0&&this.heals[0].method?this.heals[0].method:"-";return{count:l,lastDate:s,lastDisease:u,lastMethod:b}},formatDate(l){return l?y(new Date(l)).format("DD/MM/YYYY"):""},calAge(l){return it(l)}}},rt={class:"px-4 sm:px-0 mb-4 flex items-center justify-between"},ct={class:"flex items-center justify-start"},dt=t("h1",{class:"text-base lg:text-2xl"}," รายละเอียดโค ",-1),ut={class:"grid lg:gap-3 gap-2 grid-cols-2 lg:grid-cols-7 md:grid-cols-6"},ht={class:"row-span-2"},mt={class:"grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-5"},pt={class:"grid gap-5 grid-cols-4"},gt=t("p",{class:"col-span-2"}," น้ำนมดิบ เฉลี่ย/วัน ",-1),_t=t("p",null," กิโลกรัม ",-1),ft=t("p",{class:"col-span-2"}," น้ำนมดิบ ทั้งหมด ",-1),bt=t("p",null," กิโลกรัม ",-1),wt={class:"grid gap-5 lg:grid-cols-3 grid-cols-2"},Dt=t("p",{class:"lg:row-span-3 col-span-2 lg:col-span-1 font-bold"}," การเข้าระบบสืบพันธุ์ ",-1),yt=t("p",{class:"ml-5"}," จำนวนครั้ง ",-1),vt={class:"ml-5"},kt=t("p",{class:"ml-5"}," เข้าระบบครั้งล่าสุด ",-1),xt={class:"ml-5"},Vt=t("p",{class:"ml-5"}," ผลครั้งล่าสุด ",-1),Bt={class:"ml-5"},Mt=t("p",{class:"lg:row-span-2 col-span-2 lg:col-span-1 font-bold"}," การเป็นสัด ",-1),Ct=t("p",{class:"ml-5"}," จำนวนครั้ง ",-1),Ft={class:"ml-5"},qt=t("p",{class:"ml-5"}," เป็นสัดครั้งล่าสุด ",-1),Rt={class:"ml-5"},St=t("p",{class:"lg:row-span-2 col-span-2 lg:col-span-1 font-bold"}," การผสม ",-1),Ut=t("p",{class:"ml-5"}," จำนวนครั้ง ",-1),Yt={class:"ml-5"},Tt=t("p",{class:"ml-5"}," ผสมครั้งล่าสุด ",-1),At={class:"ml-5"},It=t("p",{class:"lg:row-span-2 col-span-2 lg:col-span-1 font-bold"}," การตรวจท้อง ",-1),Lt=t("p",{class:"ml-5"}," จำนวนครั้ง ",-1),Qt={class:"ml-5"},Et=t("p",{class:"ml-5"}," ตรวจท้องครั้งล่าสุด ",-1),Nt={class:"ml-5"},Ot={class:"grid gap-5 grid-cols-1 lg:grid-cols-2"},Kt={class:"grid gap-5 grid-cols-2"},jt=t("p",null," จำนวนครั้ง ",-1),zt=t("p",null," คลอดลูกล่าสุด ",-1),Ht=t("p",null," จำนวนเพศผู้ ",-1),Pt=t("p",null," จำนวนเพศเมีย ",-1),Jt={class:"grid gap-5 grid-cols-2"},Wt=t("p",null," จำนวนครั้ง ",-1),Gt=t("p",null," รักษาล่าสุด ",-1),Xt=t("p",null," อาการ/โรคล่าสุด ",-1),Zt=t("p",null," วิธีการรักษาล่าสุด ",-1),$t=t("div",{class:"grid gap-5 grid-cols-3 font-bold p-3"},[t("div",null," วัคซีน "),t("div",null," ให้ยาล่าสุด "),t("div",null," ให้ยาครั้งต่อไป ")],-1),te={class:"overflow-x-hidden overflow-y-auto h-20"},ee={class:"font-bold"},le={key:0,class:"text-slate-600"};function se(l,s,u,b,e,i){const d=_("BaseIcon"),h=_("BaseButton"),g=_("BaseButtons"),p=_("ImageUpload"),c=_("BaseLevel"),m=_("FormControl"),w=_("FormField"),D=_("CardBox"),x=_("Table"),S=_("SectionMain"),U=_("LayoutAuthenticated");return f(),v(U,null,{default:r(()=>[o(S,{class:"text-sm lg:text-base"},{default:r(()=>[t("section",rt,[t("div",ct,[o(d,{path:"cow",size:"30",class:"mr-3"}),dt]),o(g,{class:"text-sm lg:text-base",type:"justify-end"},{default:r(()=>[o(h,{class:"lg:p-2 p-1",label:"ย้อนกลับ",color:"light",onClick:s[0]||(s[0]=a=>this.$router.push("/manage/cow"))}),o(h,{class:"lg:p-2 p-1",label:"ออกรายงาน",color:"info",onClick:s[1]||(s[1]=a=>l.exportReport())})]),_:1})]),o(D,{class:"mb-5",loading:e.loading.cow,title:"ข้อมูลโค","header-icon":"",icon:"cardTextOutline"},{default:r(()=>[t("div",ut,[t("div",ht,[o(p,{modelValue:e.cow.image,"onUpdate:modelValue":s[2]||(s[2]=a=>e.cow.image=a),class:"mt-8 mr-2"},null,8,["modelValue"]),o(c,{type:"justify-center text-xs font-thin text-slate-500"},{default:r(()=>[H(" อัพโหลดรูปภาพ (คลิกที่รูป) ")]),_:1})]),o(w,{label:"รหัสโค",help:"* ห้ามว่าง"},{default:r(()=>[o(m,{modelValue:e.cow.code,"onUpdate:modelValue":s[3]||(s[3]=a=>e.cow.code=a),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),o(w,{label:"ชื่อโค",help:"* ห้ามว่าง"},{default:r(()=>[o(m,{modelValue:e.cow.name,"onUpdate:modelValue":s[4]||(s[4]=a=>e.cow.name=a),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),o(w,{label:"วันเกิด",help:"* ห้ามว่าง"},{default:r(()=>[o(m,{modelValue:e.cow.birthDate,"onUpdate:modelValue":s[5]||(s[5]=a=>e.cow.birthDate=a),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),o(w,{label:"สถานะ",help:"* ห้ามว่าง"},{default:r(()=>[o(m,{modelValue:e.cow.status,"onUpdate:modelValue":s[6]||(s[6]=a=>e.cow.status=a),options:e.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),o(w,{label:"คุณภาพน้ำนม",help:"* ห้ามว่าง"},{default:r(()=>[o(m,{modelValue:e.cow.quality,"onUpdate:modelValue":s[7]||(s[7]=a=>e.cow.quality=a),options:e.quality,icon:""},null,8,["modelValue","options"])]),_:1}),o(w,{label:"คอก"},{default:r(()=>[o(m,{modelValue:e.cow.corral,"onUpdate:modelValue":s[8]||(s[8]=a=>e.cow.corral=a),icon:"barn"},null,8,["modelValue"])]),_:1}),o(w,{label:"พ่อพันธุ์"},{default:r(()=>[o(m,{modelValue:e.cow.dad,"onUpdate:modelValue":s[9]||(s[9]=a=>e.cow.dad=a),icon:"genderMale"},null,8,["modelValue"])]),_:1}),o(w,{label:"แม่พันธุ์"},{default:r(()=>[o(m,{modelValue:e.cow.mom,"onUpdate:modelValue":s[10]||(s[10]=a=>e.cow.mom=a),icon:"genderFemale"},null,8,["modelValue"])]),_:1}),o(g,{type:"md:justify-end lg:justify-end justify-center",class:"md:col-span-2 lg:col-span-4 col-span-2 md:mt-5"},{default:r(()=>[o(h,{disabled:!i.canRemove,label:"ลบ",color:"danger",onClick:s[11]||(s[11]=a=>l.remove())},null,8,["disabled"]),o(h,{label:"บันทึก",color:"success",onClick:s[12]||(s[12]=a=>i.update())})]),_:1})])]),_:1},8,["loading"]),t("div",mt,[o(D,{icon:"cupWater",loading:e.loading.milk,title:"ข้อมูลน้ำนม","header-icon":""},{default:r(()=>[t("div",pt,[gt,t("p",null,n(i.milk().avg),1),_t,ft,t("p",null,n(i.milk().all),1),bt])]),_:1},8,["loading"]),o(D,{icon:"reproduction",class:"row-span-2",loading:e.loading.reproduct,title:"ข้อมูลการสืบพันธุ์/ผสมพันธุ์","header-icon":""},{default:r(()=>[t("div",wt,[Dt,yt,t("p",vt,n(i.reproduct().login.count),1),kt,t("p",xt,n(i.reproduct().login.lastDate),1),Vt,t("p",Bt,n(i.reproduct().login.result),1),Mt,Ct,t("p",Ft,n(i.reproduct().estrus.count),1),qt,t("p",Rt,n(i.reproduct().estrus.lastDate),1),St,Ut,t("p",Yt,n(i.reproduct().mating.count),1),Tt,t("p",At,n(i.reproduct().mating.lastDate),1),It,Lt,t("p",Qt,n(i.reproduct().check.count),1),Et,t("p",Nt,n(i.reproduct().check.lastDate),1)])]),_:1},8,["loading"]),t("div",Ot,[o(D,{icon:"babyFace",loading:e.loading.birth,title:"การคลอดลูก","header-icon":""},{default:r(()=>[t("div",Kt,[jt,t("p",null,n(i.birth().count),1),zt,t("p",null,n(i.birth().lastDate),1),Ht,t("p",null,n(i.birth().countMale),1),Pt,t("p",null,n(i.birth().countFemale),1)])]),_:1},8,["loading"]),o(D,{icon:"doctor",loading:e.loading.heal,title:"การรักษา","header-icon":""},{default:r(()=>[t("div",Jt,[Wt,t("p",null,n(i.heal().count),1),Gt,t("p",null,n(i.heal().lastDate),1),Xt,t("p",null,n(i.heal().lastDisease),1),Zt,t("p",null,n(i.heal().lastMethod),1)])]),_:1},8,["loading"])]),o(D,{class:"",icon:"pillMultiple",loading:e.loading.protection,title:"การป้องกัน/บำรุง","header-icon":""},{default:r(()=>[$t,t("div",te,[(f(!0),k(M,null,B(e.protections,a=>(f(),k("div",{class:"grid gap-5 grid-cols-3 p-3",key:a.vaccine},[t("p",ee,n(a.vaccine),1),t("p",null,n(i.formatDate(a.dateCurrent)),1),t("p",null,n(i.formatDate(a.dateNext)),1)]))),128))])]),_:1},8,["loading"]),o(D,{icon:"foodDrumstickOutline",loading:e.loading.food,title:"การให้อาหาร - คอก "+e.cow.corral,"header-icon":""},{default:r(()=>[e.foods.length<=0?(f(),k("div",le," ไม่มีรายการให้อาหาร... ")):(f(!0),k(M,{key:1},B(e.foods,(a,Y)=>(f(),k("div",{class:"grid gap-5 grid-cols-1",key:a.recipe._id},[t("p",null,n(Y+1+". สูตร"+a.recipe.name+" จำนวน "+a.qty+" กก./วัน คิดเป็นเงินต้นทุน "+a.amount+" บาท/วัน และ "+a.amountAvg+" บาท/ตัว โดยมีวัวทั้งหมด "+a.numCow+" ตัว"),1)]))),128))]),_:1},8,["loading","title"])]),e.historyMilks.length>0?(f(),v(x,{key:0,title:"ประวัติการรีดนม",items:e.historyMilks,datas:e.milkDatas,loading:e.loading.milk,class:"bg-gray-100",icon:"waterCheck"},null,8,["items","datas","loading"])):V("",!0),e.reproducts.length>0?(f(),v(x,{key:1,title:"ประวัติการสืบพันธ์ุ/ผสมพันธ์ุ",items:e.reproducts,datas:e.reproductDatas,loading:e.loading.reproduct},null,8,["items","datas","loading"])):V("",!0),e.births.length>0?(f(),v(x,{key:2,title:"ประวัติการคลอดลูก",items:e.births,datas:e.birthDatas,loading:e.loading.birth},null,8,["items","datas","loading"])):V("",!0),e.heals.length>0?(f(),v(x,{key:3,title:"ประวัติการรักษา",items:e.heals,datas:e.healDatas,loading:e.loading.heal},null,8,["items","datas","loading"])):V("",!0)]),_:1})]),_:1})}const fe=T(nt,[["render",se]]);export{fe as default};
