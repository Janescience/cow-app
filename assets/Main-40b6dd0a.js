import{z as g,p as C,m as V,_ as D,l as x,G as w,i as M,j as k,f as T,R as F,O as N,F as s,H as _,I as b,o as v,c as S,w as r,d as l,s as L,e as O,C as U,D as E,E as I,T as R}from"./index-c7dbc85b.js";import{C as j}from"./Criteria-e20e7792.js";import{_ as q}from"./FormField-aa22bb7d.js";import{P as c}from"./param-25aaf8da.js";import{T as h}from"./alert-8d006bd8.js";import"./CardBoxCollapse-a0763d92.js";import"./Cow-8dbeaefc.js";import"./cow-92ec98b7.js";import"./Vaccine-b23aa5a7.js";const A={data(){return{param:{group:"",code:"",name:"",valueNumber:null,valueString:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(a){this.$emit("update:modelValue",a)}}},watch:{data:{handler(a,t){this.clear(),a!=null&&this.mode=="edit"&&(this.param=a)},deep:!0}},methods:{clear(){var a;this.mode==="edit"&&this.$emit("update:data",null),this.param.code="",this.param.name="",this.param.group="",this.param.valueString="",this.param.valueNumber=null,this.$emit("update:mode",""),(a=this.param)==null||delete a._id},confirmCancel(a){this.value=!1,this.$emit(a)},confirm(){this.confirmCancel("confirm")},cancel(){this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await c.create(this.param)&&(this.loading=!1,this.value=!1,this.confirm(),h.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):await c.update(this.param._id,this.param)&&(this.loading=!1,this.value=!1,this.confirm(),h.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(a){console.error("Error : ",a),this.loading=!1,this.alert=a.response.data.message}}},components:{BaseButton:C,BaseButtons:V,CardBox:D,BaseDivider:x,OverlayLayer:w,FormField:q,FormControl:M,NotificationBar:k,BaseLevel:T,FormCheckRadioPicker:F,BaseIcon:N},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},data:{type:Object,default:null}}},H={class:"grid grid-cols-2 lg:grid-cols-3 gap-3 mt-1"};function P(a,t,B,y,e,o){const i=s("FormControl"),m=s("FormField"),u=s("BaseButton"),d=s("BaseButtons"),p=s("CardBox"),f=s("OverlayLayer");return _((v(),S(f,null,{default:r(()=>[_(l(p,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"พารามิเตอร์",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"","has-scroll":"",onSubmit:O(o.submit,["prevent"]),onHeaderIconClick:o.cancel},{default:r(()=>[L("div",H,[l(m,{label:"กลุ่ม",help:"* ห้ามว่าง"},{default:r(()=>[l(i,{modelValue:e.param.group,"onUpdate:modelValue":t[0]||(t[0]=n=>e.param.group=n),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),l(m,{label:"รหัส",help:"* ห้ามว่าง"},{default:r(()=>[l(i,{modelValue:e.param.code,"onUpdate:modelValue":t[1]||(t[1]=n=>e.param.code=n),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),l(m,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:r(()=>[l(i,{modelValue:e.param.name,"onUpdate:modelValue":t[2]||(t[2]=n=>e.param.name=n),icon:"formTextbox",required:""},null,8,["modelValue"])]),_:1}),l(m,{label:"ข้อมูล(ตัวเลข)"},{default:r(()=>[l(i,{modelValue:e.param.valueNumber,"onUpdate:modelValue":t[3]||(t[3]=n=>e.param.valueNumber=n),icon:"formTextbox",type:"number"},null,8,["modelValue"])]),_:1}),l(m,{label:"ข้อมูล(ตัวหนังสือ)"},{default:r(()=>[l(i,{modelValue:e.param.valueString,"onUpdate:modelValue":t[4]||(t[4]=n=>e.param.valueString=n),icon:"formTextbox"},null,8,["modelValue"])]),_:1})]),l(d,{type:"justify-center mt-3"},{default:r(()=>[l(u,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),l(u,{label:"ยกเลิก",color:"danger",onClick:o.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[b,o.value]])]),_:1},512)),[[b,o.value]])}const z=g(A,[["render",P]]),G={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"กลุ่ม",value:"group"},{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"ข้อมูล(ตัวเลข)",value:"valueNumber",type:"number"},{label:"ข้อมูล(ตัวหนังสือ)",value:"valueString"}],search:{name:"",code:"",group:"",valueNumber:null,valueString:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"กลุ่ม",value:"group"},{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"ข้อมูล(ตัวเลข)",value:"valueNumber"},{label:"ข้อมูล(ตัวหนังสือ)",value:"valueString"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:U,LayoutAuthenticated:E,SectionTitleBarSub:I,Table:R,Modal:z,Criteria:j},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(a){this.loading=!0;const t=await c.all(a);this.items=[],t.data&&(this.items=t.data.params),this.loading=!1},async remove(a){this.loading=!0,(await c.delete(a)).data&&this.getDatas(),this.loading=!1,h.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},edit(a){this.modalData=a,this.mode="edit",this.openModal=!0},reset(){this.search.name=""}}};function J(a,t,B,y,e,o){const i=s("SectionTitleBarSub"),m=s("Modal"),u=s("Criteria"),d=s("Table"),p=s("SectionMain"),f=s("LayoutAuthenticated");return v(),S(f,null,{default:r(()=>[l(p,null,{default:r(()=>[l(i,{icon:"applicationVariableOutline",title:"พารามิเตอร์","has-btn-add":"",onOpenModal:t[0]||(t[0]=n=>{e.mode="create",e.openModal=!0,e.modalData=null}),btnText:"เพิ่มพารามิเตอร์"}),l(m,{modelValue:e.openModal,"onUpdate:modelValue":t[1]||(t[1]=n=>e.openModal=n),data:o.getDataCopy,mode:e.mode,onConfirm:o.getDatas},null,8,["modelValue","data","mode","onConfirm"]),l(u,{grid:"grid-cols-2 lg:grid-cols-5",onSearch:o.getDatas,onReset:o.reset,forms:e.forms,search:e.search},null,8,["onSearch","onReset","forms","search"]),l(d,{title:"รายการพารามิเตอร์","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:o.edit,onDelete:o.remove,onDeleteSelected:a.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const te=g(G,[["render",J]]);export{te as default};