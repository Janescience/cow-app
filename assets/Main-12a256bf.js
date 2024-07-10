import{b as k,_ as L,a as O,d as R,c as A}from"./BaseDivider-5d6d6cd6.js";import{_ as F}from"./LayoutAuthenticated-188296d3.js";import{_ as Y}from"./SectionTitleBarSub-bf101c49.js";import{T as q}from"./Table-eb9e0d2d.js";import{C as I}from"./Criteria-6bddc43b.js";import{E as m,x as v,v as S,h as H,_ as U,z as o,G as T,H as V,o as p,c as b,w as n,d as a,j as W,g as M,f as j,t as z,e as G}from"./index-a11eb788.js";import{a as Q}from"./CardBoxModal-4190cff7.js";import{_ as J}from"./FormField-eae473e8.js";import{_ as K}from"./FormControl-913bfab2.js";import{_ as P}from"./NotificationBar-c518edd8.js";import{T as B}from"./alert-eb15281a.js";import{a as w,y as E}from"./date-1696e46e.js";import"./UserAvatar-8818f699.js";import"./CardBoxCollapse-432b6c08.js";import"./FormCheckRadioPicker-e4bf5636.js";import"./Cow-523e81c3.js";import"./cow-1c284aa3.js";import"./Recipe-226a7e18.js";import"./Vaccine-69f9d8fc.js";import"./Corral-a31b28fc.js";async function X(l={}){let e="?";return l.status&&(e=e+`status=${l.status}&`),l?e.replace(/&*$/,""):""}class Z{async all(e){const r=await X(e);return m.get("/bill"+r).then(h=>h)}get(e){return m.get(`/bill/${e}`)}create(e){return e.date&&(e.date=v(new Date(e.date)).format("YYYY-MM-DD")),m.post("/bill",e)}delete(e){return m.delete(`/bill/${e}`)}update(e,r){return r.date&&(r.date=v(new Date(r.date)).format("YYYY-MM-DD")),m.put(`/bill/${e}`,r)}}const _=new Z,x=l=>l==="create"?[{id:"WATER",label:"ค่าน้ำ"},{id:"ELECTRIC",label:"ค่าไฟ"},{id:"ACCOM",label:"ค่าที่พักคนงาน"},{id:"RENT",label:"ค่าเช่า"},{id:"INTERNET",label:"ค่าอินเทอร์เน็ต"},{id:"WASTE",label:"ค่าของเสีย"},{id:"OTH",label:"อื่นๆ"}]:[{id:"",label:"ทั้งหมด"},{id:"WATER",label:"ค่าน้ำ"},{id:"ELECTRIC",label:"ค่าไฟ"},{id:"ACCOM",label:"ค่าที่พักคนงาน"},{id:"RENT",label:"ค่าเช่า"},{id:"INTERNET",label:"ค่าอินเทอร์เน็ต"},{id:"WASTE",label:"ค่าของเสีย"},{id:"OTH",label:"อื่นๆ"}],$={data(){return{bill:{name:"",code:"",date:new Date,amount:"",remark:""},months:w(),years:E(),expenses:x("create"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(l){this.$emit("update:modelValue",l)}}},watch:{data(l){l&&this.mode==="edit"&&(this.bill=l,this.bill.date=new Date(l.date))}},methods:{clear(){this.bill={},this.bill.date=new Date},confirmCancel(l){this.value=!1,this.$emit(l)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.bill.name=this.expenses.filter(l=>l.id===this.bill.code)[0].label,this.mode==="create"?await _.create(this.bill)&&(this.loading=!1,this.confirm()):await _.update(this.bill._id,this.bill)&&(this.loading=!1,this.confirm()),B.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(l){console.error("Error : ",l),this.loading=!1,this.alert=l.response.data.message,B.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:k,BaseButtons:H,CardBox:L,BaseDivider:O,OverlayLayer:Q,FormField:J,FormControl:K,NotificationBar:P,BaseLevel:U,BaseIcon:R},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},ee={class:"grid grid-cols-2 lg:grid-cols-3 gap-5"};function te(l,e,r,h,t,i){const c=o("FormControl"),d=o("FormField"),g=o("NotificationBar"),C=o("BaseDivider"),u=o("BaseButton"),y=o("BaseButtons"),f=o("CardBox"),N=o("OverlayLayer");return T((p(),b(N,null,{default:n(()=>[T(a(f,{title:"ค่าใช้จ่ายเพิ่มเติม "+(this.mode==="create"?"":"(แก้ไข)"),class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:G(i.submit,["prevent"]),onHeaderIconClick:i.cancel},{default:n(()=>{var D;return[W("div",ee,[a(d,{label:"ค่าใช้จ่าย",help:"* ห้ามว่าง"},{default:n(()=>[a(c,{modelValue:t.bill.code,"onUpdate:modelValue":e[0]||(e[0]=s=>t.bill.code=s),icon:"accountEdit",options:t.expenses,required:""},null,8,["modelValue","options"])]),_:1}),((D=t.bill)==null?void 0:D.code)==="OTH"?(p(),b(d,{key:0,label:"รายละเอียดเพิ่มเติม",help:"* ห้ามว่าง"},{default:n(()=>[a(c,{modelValue:t.bill.remark,"onUpdate:modelValue":e[1]||(e[1]=s=>t.bill.remark=s),icon:"accountEdit",required:""},null,8,["modelValue"])]),_:1})):M("",!0),a(d,{label:"เดือน",help:"* ห้ามว่าง"},{default:n(()=>[a(c,{modelValue:t.bill.month,"onUpdate:modelValue":e[2]||(e[2]=s=>t.bill.month=s),icon:"calendar",options:t.months,required:""},null,8,["modelValue","options"])]),_:1}),a(d,{label:"ปี",help:"* ห้ามว่าง"},{default:n(()=>[a(c,{modelValue:t.bill.year,"onUpdate:modelValue":e[3]||(e[3]=s=>t.bill.year=s),icon:"calendar",options:t.years,required:""},null,8,["modelValue","options"])]),_:1}),a(d,{label:"จำนวนเงิน",help:"* ห้ามว่าง"},{default:n(()=>[a(c,{modelValue:t.bill.amount,"onUpdate:modelValue":e[4]||(e[4]=s=>t.bill.amount=s),type:"number",icon:"cashMultiple",required:""},null,8,["modelValue"])]),_:1})]),t.alert?(p(),b(g,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:n(()=>[j(z(t.alert),1)]),_:1})):M("",!0),a(C),a(y,{type:"justify-center"},{default:n(()=>[a(u,{label:"บันทึก",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),a(u,{label:"ยกเลิก",color:"danger",onClick:i.cancel},null,8,["onClick"])]),_:1})]}),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[V,i.value]])]),_:1},512)),[[V,i.value]])}const le=S($,[["render",te]]),ae={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"ค่าใช้จ่าย",options:x()},{label:"เดือน",options:w()},{label:"ปี",options:E()}],search:{status:""},loading:!1,mode:"create",dataEdit:null,datas:[{label:"รายการ",value:"name"},{label:"เดือน",value:"month"},{label:"ปี",value:"year"},{label:"ค่าใช้จ่าย",value:"amount",class:"text-right"},{label:"รายละเอียดเพิ่มเติม",value:"remark"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:A,LayoutAuthenticated:F,SectionTitleBarSub:Y,Table:q,Modal:le,Criteria:I},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(l){this.loading=!0;const e=await _.all(l);this.items=[],e.data&&(this.items=e.data.bills),this.loading=!1},async remove(l){this.loading=!0,(await _.delete(l)).data&&this.getDatas(),this.loading=!1,B.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},edit(l){this.modalData=l,this.mode="edit",this.openModal=!0},reset(){this.search.status="",this.getDatas()},resetData(){this.modalData=null}}};function oe(l,e,r,h,t,i){const c=o("SectionTitleBarSub"),d=o("Modal"),g=o("Criteria"),C=o("Table"),u=o("SectionMain"),y=o("LayoutAuthenticated");return p(),b(y,null,{default:n(()=>[a(u,null,{default:n(()=>[a(c,{icon:"cashMultiple",title:"ค่าใช้จ่ายเพิ่มเติม","has-btn-add":"",onOpenModal:e[0]||(e[0]=f=>{t.mode="create",t.openModal=!0}),btnText:"เพิ่มค่าใช้จ่ายเพิ่มเติม"}),a(d,{modelValue:t.openModal,"onUpdate:modelValue":e[1]||(e[1]=f=>t.openModal=f),data:i.getDataCopy,mode:t.mode,onConfirm:i.getDatas,onCancel:i.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),a(g,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:i.getDatas,onReset:i.reset,forms:t.forms,search:t.search,btnLoading:t.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),a(C,{title:"รายการค่าใช้จ่ายเพิ่มเติม",items:t.items,datas:t.datas,buttons:t.buttons,onEdit:i.edit,onDelete:i.remove,loading:t.loading},null,8,["items","datas","buttons","onEdit","onDelete","loading"])]),_:1})]),_:1})}const Ve=S(ae,[["render",oe]]);export{Ve as default};
