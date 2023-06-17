import{z as k,P as V,p as T,m as j,_ as N,l as O,F as R,i as A,j as E,f as U,N as H,E as s,G as x,H as S,o as w,c as D,w as n,d as a,s as u,h as d,t as _,k as I,e as z,S as P,C as G,D as J}from"./index-93a5fe65.js";import{T as K}from"./Table-5029edfc.js";import{D as Q,C as W}from"./Criteria-44feb3f3.js";import{_ as X}from"./FormField-c5331b04.js";import{T as y}from"./alert-2eef3ef6.js";import{F as g}from"./food-6645894f.js";import{C as F}from"./cow-0e4f1595.js";import{_ as Y}from"./FormCheckRadioPicker-e1255609.js";import"./Cow-3e90172e.js";import"./Vaccine-09b802e1.js";const Z={data(){return{food:{corral:"",recipe:{},qty:null,amount:0,amountAvg:0,numCow:0},loading:!1,alert:"",ddlCorral:[],numCowCorral:null,corrals:[]}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},watch:{data(e){e&&(this.food=e)},"food.recipe"(e){if(e){const t=this.food.qty?this.food.qty:0;this.food.amount=t*e.amount}else this.food.amount=null},"food.qty"(e){var t,i,c,o;if(e){const l=(i=(t=this.food)==null?void 0:t.recipe)!=null&&i.amount?(o=(c=this.food)==null?void 0:c.recipe)==null?void 0:o.amount:0;this.food.amount=e*l}else this.food.amount=null},"food.corral"(e){e&&(this.numCowCorral=this.corrals[e].length>0?this.corrals[e].length:null)}},created(){this.getCorrals()},methods:{clear(){this.food={},this.numCowCorral=null},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await g.create(this.food)&&(this.loading=!1,this.confirm()):await g.update(this.food._id,this.food)&&(this.loading=!1,this.confirm()),y.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(e){console.error("Error : ",e),this.clear(),this.loading=!1,this.alert=await e.response.data.message,y.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},async getCorrals(){const e=await F.all();if(e){const t=e.data.cows;this.corrals=V.groupBy(t,"corral");for(let i of Object.keys(this.corrals))this.ddlCorral.push({id:i,label:i})}}},components:{BaseButton:T,BaseButtons:j,CardBox:N,BaseDivider:O,OverlayLayer:R,FormField:X,FormControl:A,NotificationBar:E,BaseLevel:U,DDLRecipe:Q,FormCheckRadioPicker:Y,BaseIcon:H},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},$={class:"grid lg:grid-cols-3 grid-cols-2 gap-5"},ee={class:"text-red-700 font-bold p-2"},oe=u("br",null,null,-1),te={class:"text-red-700 font-bold p-2"},ae=u("br",null,null,-1),le={class:"text-red-700 font-bold p-2"},se={class:"text-red-700 font-bold p-2"};function ne(e,t,i,c,o,l){const b=s("DDLRecipe"),m=s("FormField"),C=s("FormControl"),f=s("BaseLevel"),v=s("NotificationBar"),B=s("BaseDivider"),p=s("BaseButton"),L=s("BaseButtons"),M=s("CardBox"),q=s("OverlayLayer");return x((w(),D(q,null,{default:n(()=>[x(a(M,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"การให้อาหาร",class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:z(l.submit,["prevent"]),onHeaderIconClick:l.cancel},{default:n(()=>[u("div",$,[a(m,{label:"สูตรอาหาร",help:"* ห้ามว่าง",class:"lg:col-span-1 col-span-2"},{default:n(()=>[a(b,{modelValue:o.food.recipe,"onUpdate:modelValue":t[0]||(t[0]=r=>o.food.recipe=r),valueType:"object"},null,8,["modelValue"])]),_:1}),a(m,{label:"คอก",help:"* ห้ามว่าง"},{default:n(()=>[a(C,{modelValue:o.food.corral,"onUpdate:modelValue":t[1]||(t[1]=r=>o.food.corral=r),options:o.ddlCorral,required:""},null,8,["modelValue","options"])]),_:1}),a(m,{label:"จำนวนที่ให้/วัน (กก.)",help:"* ห้ามว่าง"},{default:n(()=>[a(C,{modelValue:o.food.qty,"onUpdate:modelValue":t[2]||(t[2]=r=>o.food.qty=r),icon:"shaker",type:"number",required:""},null,8,["modelValue"])]),_:1}),a(m,{class:"lg:col-span-3 col-span-2"},{default:n(()=>[a(f,{type:"justify-end"},{default:n(()=>{var r,h;return[d(" ราคาสูตรอาหาร/กก. "),u("p",ee,_(((h=(r=o.food)==null?void 0:r.recipe)==null?void 0:h.amount)>0?o.food.recipe.amount.toFixed(2):"-"),1),d(" บาท "),oe]}),_:1}),a(f,{type:"justify-end"},{default:n(()=>[d(" จำนวนโค "),u("p",te,_(o.numCowCorral>0&&o.numCowCorral?o.numCowCorral:"-"),1),d(" ตัว "),ae]),_:1}),a(f,{type:"justify-end"},{default:n(()=>{var r,h;return[d(" รวมเป็นเงิน/วัน "),u("p",le,_(o.food.qty&&((h=(r=o.food)==null?void 0:r.recipe)==null?void 0:h.amount)>0?o.food.amount.toFixed(2):"-"),1),d(" บาท ")]}),_:1}),a(f,{type:"justify-end"},{default:n(()=>[d(" คิดเป็นเงิน/ตัว "),u("p",se,_(o.food.qty&&o.food.amount&&o.numCowCorral?(o.food.amount/o.numCowCorral).toFixed(2):"-"),1),d(" บาท ")]),_:1})]),_:1})]),o.alert?(w(),D(v,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:n(()=>[d(_(o.alert),1)]),_:1})):I("",!0),a(B),a(L,{type:"justify-center"},{default:n(()=>[a(p,{label:"บันทึก",color:"success",type:"submit",loading:o.loading},null,8,["loading"]),a(p,{label:"ยกเลิก",color:"danger",onClick:l.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[S,l.value]])]),_:1},512)),[[S,l.value]])}const re=k(Z,[["render",ne]]),ie={data(){return{openModal:!1,modalData:null,items:[],ddlCorral:[],forms:[{label:"สูตรอาหาร",value:"recipe",type:"ddl",module:"recipe"},{label:"คอก",value:"corral",icon:"barn",type:"number"}],search:{recipe:{},corral:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"corral"},label:{value:"recipe.name"}},datas:[{label:"คอก",class:"text-center",value:"corral"},{label:"จำนวนวัว",class:"text-center",value:"numCow"},{label:"สูตรอาหาร",class:"text-center",value:"recipe.name"},{label:"จำนวนที่ให้/วัน (กก.)",class:"text-center",value:"qty"},{label:"รวมเป็นเงิน/วัน",class:"text-center",value:"amount",func:e=>e.amount.toFixed(2)},{label:"คิดเป็นเงิน/ตัว",class:"text-center",value:"amountAvg",func:e=>e.amountAvg.toFixed(2)}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:P,LayoutAuthenticated:G,SectionTitleBarSub:J,Table:K,Modal:re,Criteria:W},computed:{getDataCopy(){return{...this.modalData}},corral(){return this.ddlCorral}},created(){this.getDatas(),this.getCorrals()},methods:{async getDatas(e){this.loading=!0;const t=await g.all(e);this.items=[],t.data&&(this.items=t.data.foods),this.loading=!1},async remove(e){this.loading=!0,(await g.delete(e)).data&&this.getDatas(),this.loading=!1,y.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(e){this.loading=!0;let t=[];for(let c of e)t.push(c._id);(await g.deletes(t)).data&&(this.getReproductions(),y.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},async getCorrals(){const e=await F.all();if(e){const t=e.data.cows,i=V.groupBy(t,"corral");for(let c of Object.keys(i))this.ddlCorral.push({id:c,label:c})}},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},reset(){this.search.recipe=null,this.search.corral="",this.getDatas()},resetData(){this.modalData=null}}};function ce(e,t,i,c,o,l){const b=s("SectionTitleBarSub"),m=s("Modal"),C=s("Criteria"),f=s("Table"),v=s("SectionMain"),B=s("LayoutAuthenticated");return w(),D(B,null,{default:n(()=>[a(v,null,{default:n(()=>[a(b,{icon:"foodDrumstickOutline",title:"การให้อาหาร","has-btn-add":"",onOpenModal:t[0]||(t[0]=p=>{o.mode="create",o.openModal=!0,this.modalData=null}),btnText:"เพิ่มการให้อาหาร"}),a(m,{modelValue:o.openModal,"onUpdate:modelValue":t[1]||(t[1]=p=>o.openModal=p),data:l.getDataCopy,mode:o.mode,onConfirm:l.getDatas,onCancel:l.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),a(C,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:l.getDatas,onReset:l.reset,forms:o.forms,search:o.search,btnLoading:o.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),a(f,{title:"รายการให้อาหาร","has-checkbox":"","checked-data":o.checked,items:o.items,datas:o.datas,buttons:o.buttons,onEdit:l.edit,onDelete:l.remove,onDeleteSelected:l.removeSelected,loading:o.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const be=k(ie,[["render",ce]]);export{be as default};
