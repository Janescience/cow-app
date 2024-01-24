import{y as g,z as Y,p as L,m as N,_ as T,l as I,G as O,i as j,j as A,f as U,R as E,O as W,F as r,H as F,I as M,o as x,c as S,w as s,d as l,s as y,h as u,t as m,k as H,e as R,B as q,T as P,D as G,C as Q,E as J}from"./index-777e8ff9.js";import{_ as z}from"./FormField-d7787d4c.js";import{T as B}from"./alert-4a581496.js";import{g as K}from"./age-calculate-3b5fe841.js";import{W as X}from"./worker-4b49d2c9.js";async function Z(e={}){let a="?";return e.worker&&(a=a+`worker=${e.worker}&`),e?a.replace(/&*$/,""):""}class ${async all(a){const n=await Z(a);return g.get("/salary"+n).then(p=>p)}get(a){return g.get(`/salary/${a}`)}create(a){return g.post("/salary",a)}delete(a){return g.delete(`/salary/${a}`)}update(a,n){return g.put(`/salary/${a}`,n)}}const b=new $,ee={data(){return{salary:{year:new Date().getFullYear(),month:new Date().getMonth()+1,amount:null,remark:""},years:[],months:[{id:1,label:"มกราคม"},{id:2,label:"กุมภาพันธ์"},{id:3,label:"มีนาคม"},{id:4,label:"เมษายน"},{id:5,label:"พฤษภาคม"},{id:6,label:"มิถุนายน"},{id:7,label:"กรกฏาคม"},{id:8,label:"สิงหาคม"},{id:9,label:"กันยายน"},{id:10,label:"ตุลาคม"},{id:11,label:"พฤศจิกายน"},{id:12,label:"ธันวาคม"}],loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},watch:{data(e){e&&this.mode==="edit"&&(this.salary=e)}},created(){this.getYears()},methods:{clear(){this.salary={}},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="",this.salary.worker=this.$route.params.id;try{this.mode==="create"?await b.create(this.salary)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await b.update(this.salary._id,this.salary)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")),B.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(e){console.error("Error : ",e),this.loading=!1,this.alert=e.response.data.message,B.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},getYears(){const e=new Date().getFullYear()+543,a=new Date().getFullYear();for(let n=5;n>0;n--)this.years.push({id:a+n,label:e+n});this.years.push({id:a,label:e});for(let n=1;n<6;n++)this.years.push({id:a-n,label:e-n})}},components:{BaseButton:L,BaseButtons:N,CardBox:T,BaseDivider:I,OverlayLayer:O,FormField:z,FormControl:j,NotificationBar:A,BaseLevel:U,FormCheckRadioPicker:E,BaseIcon:W},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},ae={class:"grid grid-cols-2 lg:grid-cols-3 gap-5"};function te(e,a,n,p,t,i){const _=r("FormControl"),h=r("FormField"),k=r("NotificationBar"),w=r("BaseDivider"),c=r("BaseButton"),v=r("BaseButtons"),C=r("CardBox"),D=r("OverlayLayer");return F((x(),S(D,null,{default:s(()=>[F(l(C,{title:"เงินเดือน "+(this.mode==="create"?"":"(แก้ไข)"),class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:R(i.submit,["prevent"]),onHeaderIconClick:i.cancel},{default:s(()=>[y("div",ae,[l(h,{label:"ปี พ.ศ.",help:"* ห้ามว่าง"},{default:s(()=>[l(_,{modelValue:t.salary.year,"onUpdate:modelValue":a[0]||(a[0]=d=>t.salary.year=d),options:t.years},null,8,["modelValue","options"])]),_:1}),l(h,{label:"เดือน",help:"* ห้ามว่าง"},{default:s(()=>[l(_,{modelValue:t.salary.month,"onUpdate:modelValue":a[1]||(a[1]=d=>t.salary.month=d),options:t.months},null,8,["modelValue","options"])]),_:1}),l(h,{label:"เงินเดือน",help:"* ห้ามว่าง "},{default:s(()=>[l(_,{icon:"cashMultiple",type:"number",modelValue:t.salary.amount,"onUpdate:modelValue":a[2]||(a[2]=d=>t.salary.amount=d)},null,8,["modelValue"])]),_:1}),l(h,{label:"หมายเหตุ"},{default:s(()=>[l(_,{modelValue:t.salary.remark,"onUpdate:modelValue":a[3]||(a[3]=d=>t.salary.remark=d),type:"textarea"},null,8,["modelValue"])]),_:1})]),t.alert?(x(),S(k,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:s(()=>[u(m(t.alert),1)]),_:1})):H("",!0),l(w),l(v,{type:"justify-center"},{default:s(()=>[l(c,{label:"บันทึก",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),l(c,{label:"ยกเลิก",color:"danger",onClick:i.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[M,i.value]])]),_:1},512)),[[M,i.value]])}const le=Y(ee,[["render",te]]),oe={data(){return{openModal:!1,modalData:null,mode:"create",worker:{},salary:{},salaries:[],loading:!1,alert:"",datas:[{label:"ปี",value:"year",class:"text-center"},{label:"เดือน",class:"text-center",value:"month"},{label:"เงินเดือน",value:"amount",class:"text-right"},{label:"หมายเหตุ",class:"text-center",value:"remark"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getWorker()},methods:{async getWorker(){this.loading=!0;const e=await X.get(this.$route.params.id);e.data&&(this.worker=e.data.worker,this.getSalaries()),this.loading=!1},async getSalaries(){this.loading=!0;const e=await b.all({worker:this.worker._id});e.data&&(this.salaries=e.data.salarys),this.loading=!1},async remove(e){this.loading=!0,(await b.delete(e)).data&&this.getSalaries(),this.loading=!1,B.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(e){this.loading=!0;let a=[];for(let p of e)a.push(p._id);(await b.deletes(a)).data&&(this.getSalaries(),B.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},resetData(){this.modalData=null},formatDate(e){return e?q(new Date(e)).format("DD/MM/YYYY"):""},calAge(e){return K(e).ageString}},components:{BaseButton:L,BaseButtons:N,CardBox:T,BaseDivider:I,OverlayLayer:O,FormField:z,FormControl:j,NotificationBar:A,BaseLevel:U,FormCheckRadioPicker:E,BaseIcon:W,Table:P,LayoutAuthenticated:G,SectionMain:Q,SectionTitleBarSub:J,Modal:le}},se={class:"px-4 sm:px-0 mb-4 flex items-center justify-between"},re={class:"flex items-center justify-start"},ne=y("h1",{class:"text-base lg:text-2xl"}," จัดการเงินเดือน ",-1),ie={class:"grid grid-cols-2 lg:grid-cols-5 gap-5"};function ce(e,a,n,p,t,i){const _=r("BaseIcon"),h=r("BaseButton"),k=r("BaseButtons"),w=r("Modal"),c=r("FormField"),v=r("CardBox"),C=r("Table"),D=r("SectionMain"),d=r("LayoutAuthenticated");return x(),S(d,null,{default:s(()=>[l(D,null,{default:s(()=>[y("section",se,[y("div",re,[l(_,{path:"cashMultiple",size:"30",class:"mr-3"}),ne]),l(k,{class:"text-sm lg:text-base",type:"justify-end"},{default:s(()=>[l(h,{class:"lg:p-2 p-1",label:"ย้อนกลับ",color:"light",onClick:a[0]||(a[0]=o=>this.$router.push("/manage/worker"))}),l(h,{class:"lg:p-2 p-1",label:"เพิ่มเงินเดือน",color:"success",onClick:a[1]||(a[1]=o=>{t.mode="create",t.openModal=!0})})]),_:1})]),l(w,{modelValue:t.openModal,"onUpdate:modelValue":a[2]||(a[2]=o=>t.openModal=o),data:i.getDataCopy,mode:t.mode,onConfirm:i.getSalaries},null,8,["modelValue","data","mode","onConfirm"]),l(v,{icon:"accountBox",title:"ข้อมูลคนงาน",class:"shadow-lg w-full mb-5","header-icon":"",form:""},{default:s(()=>[y("div",ie,[l(c,{label:"ชื่อ"},{default:s(()=>{var o;return[u(m((o=t.worker)==null?void 0:o.name),1)]}),_:1}),l(c,{label:"อายุ"},{default:s(()=>{var o;return[u(m((o=t.worker)==null?void 0:o.age),1)]}),_:1}),l(c,{label:"วันที่เริ่มงาน"},{default:s(()=>{var o;return[u(m(i.formatDate((o=t.worker)==null?void 0:o.startDate)),1)]}),_:1}),l(c,{label:"วันที่สิ้นสุดงาน"},{default:s(()=>{var o,f;return[u(m((o=t.worker)!=null&&o.endDate?(f=t.worker)==null?void 0:f.endDate:"ถึงปัจจุบัน"),1)]}),_:1}),l(c,{label:"อายุงาน"},{default:s(()=>{var o,f,V;return[u(m(i.calAge((o=t.worker)==null?void 0:o.startDate,((f=t.worker)==null?void 0:f.status)==="L"?(V=t.worker)==null?void 0:V.endDate:null)),1)]}),_:1}),l(c,{label:"หน้าที่"},{default:s(()=>{var o;return[u(m((o=t.worker)==null?void 0:o.duty),1)]}),_:1}),l(c,{label:"ฐานเงินเดือนล่าสุด"},{default:s(()=>{var o;return[u(m((o=t.worker)==null?void 0:o.salary),1)]}),_:1}),l(c,{label:"หมายเหตุ"},{default:s(()=>{var o,f;return[u(m((o=t.worker)!=null&&o.remark?(f=t.worker)==null?void 0:f.remark:"-"),1)]}),_:1})])]),_:1}),l(C,{title:"ประวัติเงินเดือน","has-checkbox":"","checked-data":e.checked,items:t.salaries,datas:t.datas,buttons:t.buttons,onEdit:i.edit,onDelete:i.remove,onDeleteSelected:i.removeSelected,loading:t.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const _e=Y(oe,[["render",ce]]);export{_e as default};
