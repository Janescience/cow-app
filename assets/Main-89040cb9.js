import{z as g,p as C,m as V,_ as D,l as x,F as w,i as M,j as k,f as T,N,E as r,G as _,H as b,o as v,c as S,w as s,d as l,s as F,e as L,S as O,C as U,D as E}from"./index-74d9eab0.js";import{T as j}from"./Table-7f21b5b8.js";import{C as q}from"./Criteria-be81a4bc.js";import{_ as A}from"./FormField-07dc6251.js";import{_ as H}from"./FormCheckRadioPicker-f19d3d6e.js";import{P as d}from"./param-6f45b0de.js";import{T as h}from"./alert-835c877b.js";import"./Cow-733e76ed.js";import"./cow-01e8ae3f.js";import"./Vaccine-d023e1f2.js";const I={data(){return{param:{group:"",code:"",name:"",valueNumber:null,valueString:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(a){this.$emit("update:modelValue",a)}}},watch:{data:{handler(a,t){this.clear(),a!=null&&this.mode=="edit"&&(this.param=a)},deep:!0}},methods:{clear(){var a;this.mode==="edit"&&this.$emit("update:data",null),this.param.code="",this.param.name="",this.param.group="",this.param.valueString="",this.param.valueNumber=null,this.$emit("update:mode",""),(a=this.param)==null||delete a._id},confirmCancel(a){this.value=!1,this.$emit(a)},confirm(){this.confirmCancel("confirm")},cancel(){this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await d.create(this.param)&&(this.loading=!1,this.value=!1,this.confirm(),h.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):await d.update(this.param._id,this.param)&&(this.loading=!1,this.value=!1,this.confirm(),h.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(a){console.error("Error : ",a),this.loading=!1,this.alert=a.response.data.message}}},components:{BaseButton:C,BaseButtons:V,CardBox:D,BaseDivider:x,OverlayLayer:w,FormField:A,FormControl:M,NotificationBar:k,BaseLevel:T,FormCheckRadioPicker:H,BaseIcon:N},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},data:{type:Object,default:null}}},P={class:"grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1"};function R(a,t,B,y,e,o){const i=r("FormControl"),m=r("FormField"),u=r("BaseButton"),c=r("BaseButtons"),p=r("CardBox"),f=r("OverlayLayer");return _((v(),S(f,null,{default:s(()=>[_(l(p,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"พารามิเตอร์",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"","has-scroll":"",onSubmit:L(o.submit,["prevent"]),onHeaderIconClick:o.cancel},{default:s(()=>[F("div",P,[l(m,{label:"กลุ่ม",help:"* ห้ามว่าง"},{default:s(()=>[l(i,{modelValue:e.param.group,"onUpdate:modelValue":t[0]||(t[0]=n=>e.param.group=n),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),l(m,{label:"รหัส",help:"* ห้ามว่าง"},{default:s(()=>[l(i,{modelValue:e.param.code,"onUpdate:modelValue":t[1]||(t[1]=n=>e.param.code=n),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),l(m,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:s(()=>[l(i,{modelValue:e.param.name,"onUpdate:modelValue":t[2]||(t[2]=n=>e.param.name=n),icon:"formTextbox",required:""},null,8,["modelValue"])]),_:1}),l(m,{label:"ข้อมูล(ตัวเลข)"},{default:s(()=>[l(i,{modelValue:e.param.valueNumber,"onUpdate:modelValue":t[3]||(t[3]=n=>e.param.valueNumber=n),icon:"formTextbox",type:"number"},null,8,["modelValue"])]),_:1}),l(m,{label:"ข้อมูล(ตัวหนังสือ)"},{default:s(()=>[l(i,{modelValue:e.param.valueString,"onUpdate:modelValue":t[4]||(t[4]=n=>e.param.valueString=n),icon:"formTextbox"},null,8,["modelValue"])]),_:1})]),l(c,{type:"justify-center mt-3"},{default:s(()=>[l(u,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),l(u,{label:"ยกเลิก",color:"danger",onClick:o.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[b,o.value]])]),_:1},512)),[[b,o.value]])}const z=g(I,[["render",R]]),G={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"กลุ่ม",value:"group"},{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"ข้อมูล(ตัวเลข)",value:"valueNumber",type:"number"},{label:"ข้อมูล(ตัวหนังสือ)",value:"valueString"}],search:{name:"",code:"",group:"",valueNumber:null,valueString:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"กลุ่ม",value:"group"},{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"ข้อมูล(ตัวเลข)",value:"valueNumber"},{label:"ข้อมูล(ตัวหนังสือ)",value:"valueString"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:O,LayoutAuthenticated:U,SectionTitleBarSub:E,Table:j,Modal:z,Criteria:q},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(a){this.loading=!0;const t=await d.all(a);this.items=[],t.data&&(this.items=t.data.params),this.loading=!1},async remove(a){this.loading=!0,(await d.delete(a)).data&&this.getDatas(),this.loading=!1,h.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},edit(a){this.modalData=a,this.mode="edit",this.openModal=!0},reset(){this.search.name=""}}};function J(a,t,B,y,e,o){const i=r("SectionTitleBarSub"),m=r("Modal"),u=r("Criteria"),c=r("Table"),p=r("SectionMain"),f=r("LayoutAuthenticated");return v(),S(f,null,{default:s(()=>[l(p,null,{default:s(()=>[l(i,{icon:"applicationVariableOutline",title:"พารามิเตอร์","has-btn-add":"",onOpenModal:t[0]||(t[0]=n=>{e.mode="create",e.openModal=!0,e.modalData=null}),btnText:"เพิ่มพารามิเตอร์"}),l(m,{modelValue:e.openModal,"onUpdate:modelValue":t[1]||(t[1]=n=>e.openModal=n),data:o.getDataCopy,mode:e.mode,onConfirm:o.getDatas},null,8,["modelValue","data","mode","onConfirm"]),l(u,{grid:"grid-cols-2 lg:grid-cols-5",onSearch:o.getDatas,onReset:o.reset,forms:e.forms,search:e.search},null,8,["onSearch","onReset","forms","search"]),l(c,{title:"รายการพารามิเตอร์","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:o.edit,onDelete:o.remove,onDeleteSelected:a.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const le=g(G,[["render",J]]);export{le as default};
