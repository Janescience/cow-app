import{N as m,$ as V,O as B,l as Q,_ as x,k as E,T,g as L,h as N,e as F,R as o,H as v,U as M,o as b,c as w,w as i,b as a,p as U,i as Y,t as O,j as q,d as A,S as H,Q as R,W as j}from"./index.77fd4343.js";import{D as C,T as I,a as W}from"./Criteria.9e55fba4.js";import{_ as z}from"./BaseButtons.cc30d51a.js";import{_ as G}from"./FormField.146f37bc.js";import{a as u}from"./auth-header.4c0867c5.js";import"./CardBoxModal.950233b3.js";async function J(t={}){let e="?";if(t.cow&&(e=e+`cow=${t.cow}&`),t.date){const r=V(new Date(t.date)).format("YYYY-MM-DD");e=e+`date=${r}&`}return t.quantity&&(e=e+`quantity=${t.quantity}&`),t?e.replace(/&*$/,""):""}class K{async all(e){const r=await J(e);return m.get("/milking"+r,{headers:u()}).then(p=>p)}get(e){return m.get(`/milking/${e}`,{headers:u()})}create(e){return e.date&&(e.date=V(new Date(e.date)).format("YYYY-MM-DD")),m.post("/milking",e,{headers:u()})}delete(e){return m.delete(`/milking/${e}`,{headers:u()})}update(e,r){return m.put(`/milking/${e}`,r,{headers:u()})}}var _=new K;const P={data(){return{milk:{cow:null,date:new Date,morningQty:0,afternoonQty:0,amount:0},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{sumQty(){return this.milk.morningQty+this.milk.afternoonQty},calAmount(){return this.milk.amount=(this.milk.morningQty+this.milk.afternoonQty)*100,this.milk.amount},value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},watch:{dataEdit:{handler(t,e){t!=null&&this.mode=="edit"&&(this.milk=t,this.milk.date=new Date(t.date))},deep:!0}},methods:{clear(){var t;this.mode==="edit"&&this.$emit("update:dataEdit",null),this.milk.cow=null,this.milk.date=new Date,this.milk.morningQty=0,this.milk.afternoonQty=0,this.milk.amount=0,(t=this.milk)==null||delete t._id},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await _.create(this.milk)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await _.update(this.milk._id,this.milk)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message}}},components:{BaseButton:Q,BaseButtons:z,CardBox:x,BaseDivider:E,OverlayLayer:T,FormField:G,FormControl:L,NotificationBar:N,BaseLevel:F,DDLCow:C},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},X={class:"grid grid-cols-1 lg:grid-cols-2 gap-3 mt-1"};function Z(t,e,r,p,l,n){const d=o("FormControl"),c=o("FormField"),k=o("DDLCow"),g=o("NotificationBar"),y=o("BaseDivider"),f=o("BaseButton"),h=o("BaseButtons"),S=o("CardBox"),D=o("OverlayLayer");return v((b(),w(D,null,{default:i(()=>[v(a(S,{title:r.mode==="create"?"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E23\u0E35\u0E14\u0E19\u0E21":"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E01\u0E32\u0E23\u0E23\u0E35\u0E14\u0E19\u0E21",class:"shadow-lg w-full overflow-y-auto lg:w-1/3 z-50","header-icon":"close",modal:"",form:"",onSubmit:A(n.submit,["prevent"]),onHeaderIconClick:n.cancel},{default:i(()=>[U("div",X,[a(c,{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E35\u0E14\u0E19\u0E21",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[a(d,{modelValue:l.milk.date,"onUpdate:modelValue":e[0]||(e[0]=s=>l.milk.date=s),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),a(c,{label:"\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[a(k,{modelValue:l.milk.cow,"onUpdate:modelValue":e[1]||(e[1]=s=>l.milk.cow=s)},null,8,["modelValue"])]),_:1}),a(c,{label:"\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13\u0E19\u0E49\u0E33\u0E19\u0E21/\u0E40\u0E0A\u0E49\u0E32",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[a(d,{modelValue:l.milk.morningQty,"onUpdate:modelValue":e[2]||(e[2]=s=>l.milk.morningQty=s),type:"number",icon:"weatherSunsetUp"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13\u0E19\u0E49\u0E33\u0E19\u0E21/\u0E1A\u0E48\u0E32\u0E22",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[a(d,{modelValue:l.milk.afternoonQty,"onUpdate:modelValue":e[3]||(e[3]=s=>l.milk.afternoonQty=s),type:"number",icon:"weatherSunsetDown"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13\u0E19\u0E49\u0E33\u0E19\u0E21\u0E23\u0E27\u0E21",help:"\u0E04\u0E33\u0E19\u0E27\u0E13\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34"},{default:i(()=>[a(d,{modelValue:n.sumQty,"onUpdate:modelValue":e[4]||(e[4]=s=>n.sumQty=s),type:"number",disabled:"",icon:"water"},null,8,["modelValue"])]),_:1}),a(c,{label:"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\u0E23\u0E27\u0E21",help:"\u0E04\u0E33\u0E19\u0E27\u0E13\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34 (\u0E23\u0E32\u0E04\u0E32\u0E19\u0E21/\u0E01\u0E01. = 100.00)"},{default:i(()=>[a(d,{modelValue:n.calAmount,"onUpdate:modelValue":e[5]||(e[5]=s=>n.calAmount=s),type:"number",icon:"cashMultiple"},null,8,["modelValue"])]),_:1})]),l.alert?(b(),w(g,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[Y(O(l.alert),1)]),_:1})):q("",!0),a(y),a(h,{type:"justify-center"},{default:i(()=>[a(f,{label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",color:"success",type:"submit",loading:l.loading},null,8,["loading"]),a(f,{label:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",color:"danger",onClick:n.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[M,n.value]])]),_:1},512)),[[M,n.value]])}var $=B(P,[["render",Z]]);const ee={data(){return{modalMilk:!1,items:[],forms:[{label:"\u0E42\u0E04",class:"lg:col-start-2",value:"cow",type:"ddl",module:"cow"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E35\u0E14\u0E19\u0E21",value:"date",icon:"calendar",type:"date"}],search:{cow:null,date:null},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"date",type:"date"},label:{value:"cow.name"}},datas:[{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E35\u0E14\u0E19\u0E21",class:"text-center",type:"date",value:"date"},{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",class:"text-center",value:"cow.code"},{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",class:"text-center",value:"cow.name"},{label:"\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13\u0E19\u0E49\u0E33\u0E19\u0E21\u0E14\u0E34\u0E1A/\u0E40\u0E0A\u0E49\u0E32 (\u0E01\u0E01.)",class:"text-center",value:"morningQty"},{label:"\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13\u0E19\u0E49\u0E33\u0E19\u0E21\u0E14\u0E34\u0E1A/\u0E1A\u0E48\u0E32\u0E22 (\u0E01\u0E01.)",class:"text-center",value:"afternoonQty"},{label:"\u0E1B\u0E23\u0E34\u0E21\u0E32\u0E13\u0E19\u0E49\u0E33\u0E19\u0E21\u0E14\u0E34\u0E1A\u0E23\u0E27\u0E21 (\u0E01\u0E01.)",class:"text-center",func:t=>t.morningQty+t.afternoonQty},{label:"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E07\u0E34\u0E19\u0E23\u0E27\u0E21",class:"text-right",type:"number",value:"amount"}],buttons:[{label:"\u0E25\u0E1A",type:"delete",color:"danger"},{label:"\u0E41\u0E01\u0E49\u0E44\u0E02",type:"edit",color:"warning"}]}},components:{SectionMain:H,LayoutAuthenticated:R,Table:I,SectionTitleBarSub:j,DDLCow:C,MilkModal:$,Criteria:W},created(){this.getMilks()},methods:{async getMilks(t){this.loading=!0;const e=await _.all(t);this.items=[],e.data&&(this.items=e.data.milkings),this.loading=!1},async removeMilk(t){this.loading=!0,(await _.delete(t)).data&&this.getMilks(),this.loading=!1},edit(t){this.dataEdit=t,this.dataEdit.cow=t.cow._id,this.mode="edit",this.modalMilk=!0},reset(){this.search.cow=null,this.search.date=null}}};function te(t,e,r,p,l,n){const d=o("SectionTitleBarSub"),c=o("MilkModal"),k=o("Criteria"),g=o("Table"),y=o("SectionMain"),f=o("LayoutAuthenticated");return b(),w(f,null,{default:i(()=>[a(y,null,{default:i(()=>[a(d,{icon:"cupWater",title:"\u0E01\u0E32\u0E23\u0E23\u0E35\u0E14\u0E19\u0E21",btnText:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E23\u0E35\u0E14\u0E19\u0E21","has-btn-add":"",onOpenModal:e[0]||(e[0]=h=>{l.mode="create",l.modalMilk=!0})}),a(c,{modelValue:l.modalMilk,"onUpdate:modelValue":e[1]||(e[1]=h=>l.modalMilk=h),mode:l.mode,dataEdit:l.dataEdit,onConfirm:n.getMilks,onCancel:n.getMilks},null,8,["modelValue","mode","dataEdit","onConfirm","onCancel"]),a(k,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:n.getMilks,onReset:n.reset,forms:l.forms,search:l.search},null,8,["onSearch","onReset","forms","search"]),a(g,{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E35\u0E14\u0E19\u0E21","has-checkbox":"","checked-data":l.checked,items:l.items,datas:l.datas,buttons:l.buttons,onEdit:n.edit,onDelete:n.removeMilk,onDeleteSelected:t.removeSelected},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected"])]),_:1})]),_:1})}var re=B(ee,[["render",te]]);export{re as default};
