import{y as B,p as S,m as x,_ as k,l as M,E as F,i as T,j as L,f as N,M as O,D as o,F as v,G as w,o as _,c as g,w as n,d as a,s as U,h as E,t as q,k as H,e as A,S as I,B as R,C as j}from"./index-427a87c0.js";import{T as z}from"./Table-af842fe8.js";import{C as G}from"./Criteria-b793ffc3.js";import{_ as P}from"./FormField-d8c58746.js";import{D as J}from"./Cow-622b6025.js";import{T as b}from"./alert-a2a7616a.js";import{H as u}from"./heal-f8e0be53.js";import{_ as K}from"./FormCheckRadioPicker-b055ac64.js";import"./cow-ed7a984e.js";const Q={data(){return{heal:{cow:null,date:new Date,disease:"",method:"",healer:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},watch:{data(t){t&&this.mode==="edit"&&(this.heal=t,this.heal.date=new Date(t.date))}},methods:{clear(){this.heal.cow=null,this.heal.date=new Date,this.heal.disease="",this.heal.method="",this.heal.healer=""},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await u.create(this.heal)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await u.update(this.heal)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")),b.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,b.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:S,BaseButtons:x,CardBox:k,BaseDivider:M,OverlayLayer:F,FormField:P,FormControl:T,NotificationBar:L,BaseLevel:N,DDLCow:J,FormCheckRadioPicker:K,BaseIcon:O},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},W={class:"grid grid-cols-2 lg:grid-cols-3 gap-5"};function X(t,l,y,C,e,s){const h=o("DDLCow"),r=o("FormField"),c=o("FormControl"),f=o("NotificationBar"),p=o("BaseDivider"),d=o("BaseButton"),m=o("BaseButtons"),D=o("CardBox"),V=o("OverlayLayer");return v((_(),g(V,null,{default:n(()=>[v(a(D,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"การรักษา",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:A(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:n(()=>[U("div",W,[a(r,{label:"โค",help:"* ห้ามว่าง"},{default:n(()=>[a(h,{modelValue:e.heal.cow,"onUpdate:modelValue":l[0]||(l[0]=i=>e.heal.cow=i)},null,8,["modelValue"])]),_:1}),a(r,{label:"วันที่รักษา",help:"* ห้ามว่าง"},{default:n(()=>[a(c,{modelValue:e.heal.date,"onUpdate:modelValue":l[1]||(l[1]=i=>e.heal.date=i),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),a(r,{label:"คนรักษา"},{default:n(()=>[a(c,{modelValue:e.heal.healer,"onUpdate:modelValue":l[2]||(l[2]=i=>e.heal.healer=i),icon:"doctor"},null,8,["modelValue"])]),_:1}),a(r,{label:"อาการ/โรค",help:"* ห้ามว่าง",class:"col-span-2"},{default:n(()=>[a(c,{modelValue:e.heal.disease,"onUpdate:modelValue":l[3]||(l[3]=i=>e.heal.disease=i),type:"textarea",required:""},null,8,["modelValue"])]),_:1}),a(r,{label:"วิธีการรักษา",class:"col-span-2 lg:col-span-1"},{default:n(()=>[a(c,{modelValue:e.heal.method,"onUpdate:modelValue":l[4]||(l[4]=i=>e.heal.method=i),type:"textarea"},null,8,["modelValue"])]),_:1})]),e.alert?(_(),g(f,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:n(()=>[E(q(e.alert),1)]),_:1})):H("",!0),a(p),a(m,{type:"justify-center"},{default:n(()=>[a(d,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),a(d,{label:"ยกเลิก",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[w,s.value]])]),_:1},512)),[[w,s.value]])}const Y=B(Q,[["render",X]]),Z={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"โค",value:"cow",type:"ddl",module:"cow"},{label:"วันที่รักษา",value:"date",icon:"calendar",type:"date"}],search:{cow:null,date:null},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"ครั้งที่",value:"seq",class:"text-center"},{label:"รหัสโค",value:"relate.cow.code"},{label:"ชื่อโค",value:"relate.cow.name"},{label:"วันที่รักษา",class:"text-center",value:"date",type:"date"},{label:"อาการ/โรค",class:"text-center",value:"disease"},{label:"วิธีการรักษา",class:"text-center",value:"method"},{label:"คนรักษา",class:"text-center",value:"healer"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:I,LayoutAuthenticated:R,SectionTitleBarSub:j,Table:z,Modal:Y,Criteria:G},computed:{user(){return this.$store.state.auth.user}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const l=await u.all(t);this.items=[],l.data&&(this.items=l.data.heals),this.loading=!1},async remove(t){this.loading=!0,(await u.delete(t)).data&&this.getDatas(),this.loading=!1,b.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},edit(t){this.modalData=t,this.modalData.cow=t.relate.cow._id,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.date=null}}};function $(t,l,y,C,e,s){const h=o("SectionTitleBarSub"),r=o("Modal"),c=o("Criteria"),f=o("Table"),p=o("SectionMain"),d=o("LayoutAuthenticated");return _(),g(d,null,{default:n(()=>[a(p,null,{default:n(()=>[a(h,{icon:"doctor",title:"การรักษา","has-btn-add":"",onOpenModal:l[0]||(l[0]=m=>{e.mode="create",e.openModal=!0}),btnText:"เพิ่มการรักษา"}),a(r,{modelValue:e.openModal,"onUpdate:modelValue":l[1]||(l[1]=m=>e.openModal=m),data:e.modalData,mode:e.mode,onConfirm:s.getDatas},null,8,["modelValue","data","mode","onConfirm"]),a(c,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:e.forms,search:e.search},null,8,["onSearch","onReset","forms","search"]),a(f,{title:"รายการรักษา","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:t.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const ce=B(Z,[["render",$]]);export{ce as default};
