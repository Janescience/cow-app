import{a0 as f,Z as d,N as T,a1 as m,a2 as M,O as x,l as R,_ as U,k as L,R as F,g as q,h as O,e as H,Q as n,H as B,T as S,o as p,c as D,w as o,b as l,p as A,j as h,i as I,t as Q,d as z,S as P,P as Z,V as j}from"./index.f0793c83.js";import{D as G,T as J,a as K}from"./Criteria.c2f5862f.js";import{_ as W}from"./BaseButtons.383148b6.js";import{_ as X}from"./FormField.4825043a.js";import{a as g}from"./auth-header.0a714e1b.js";import"./CardBoxModal.ecd45bbb.js";const y=t=>t==="create"?[{id:1,label:"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C"},{id:2,label:"\u0E15\u0E31\u0E49\u0E07\u0E04\u0E23\u0E23\u0E20\u0E4C"},{id:3,label:"\u0E04\u0E25\u0E2D\u0E14\u0E25\u0E39\u0E01\u0E41\u0E25\u0E49\u0E27"},{id:4,label:"\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"}]:[{id:"",label:"\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"},{id:1,label:"\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C"},{id:2,label:"\u0E15\u0E31\u0E49\u0E07\u0E04\u0E23\u0E23\u0E20\u0E4C"},{id:3,label:"\u0E04\u0E25\u0E2D\u0E14\u0E25\u0E39\u0E01\u0E41\u0E25\u0E49\u0E27"},{id:4,label:"\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"}],C=t=>t==="create"?[{id:1,label:"\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34"},{id:2,label:"\u0E1B\u0E01\u0E15\u0E34 (\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1C\u0E2A\u0E21)"}]:[{id:"",label:"\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"},{id:1,label:"\u0E1C\u0E34\u0E14\u0E1B\u0E01\u0E15\u0E34"},{id:2,label:"\u0E1B\u0E01\u0E15\u0E34 (\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E1C\u0E2A\u0E21)"}];async function $(t={}){let e="?";if(t.farm&&(e=e+`farm=${t.farm}&`),t.cow&&(e=e+`cow=${t.cow}&`),t.loginDate){const s=d(new Date(t.loginDate)).format("YYYY-MM-DD");e=e+`loginDate=${s}&`}if(t.estrusDate){const s=d(new Date(t.estrusDate)).format("YYYY-MM-DD");e=e+`estrusDate=${s}&`}if(t.matingDate){const s=d(new Date(t.matingDate)).format("YYYY-MM-DD");e=e+`matingDate=${s}&`}if(t.checkDate){const s=d(new Date(t.checkDate)).format("YYYY-MM-DD");e=e+`checkDate=${s}&`}return t.status&&(e=e+`status=${t.status}&`),t.result&&(e=e+`result=${t.result}&`),t?e.replace(/&*$/,""):""}class ee{async all(e){const s=await $(e);return f.get("/reproduction"+s,{headers:g()}).then(v=>v)}get(e){return f.get(`/reproduction/${e}`,{headers:g()})}create(e){return e.birthDate&&(e.birthDate=d(new Date(e.birthDate)).format("YYYY-MM-DD")),e.loginDate&&(e.loginDate=d(new Date(e.loginDate)).format("YYYY-MM-DD")),e.estrusDate&&(e.estrusDate=d(new Date(e.estrusDate)).format("YYYY-MM-DD")),e.matingDate&&(e.matingDate=d(new Date(e.matingDate)).format("YYYY-MM-DD")),e.checkDate&&(e.checkDate=d(new Date(e.checkDate)).format("YYYY-MM-DD")),f.post("/reproduction",e,{headers:g()})}delete(e){return f.delete(`/reproduction/${e}`,{headers:g()})}update(e,s){return f.put(`/reproduction/${e}`,s,{headers:g()})}}var _=new ee;const te={data(){return{reproduct:{cow:null,loginDate:new Date,estrusDate:m(new Date,21),matingDate:m(new Date,22),checkDate:M(m(new Date,22),2),dad:"",howTo:"",status:1,result:2,farm:x().farm._id},status:y("create"),result:C("create"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},watch:{"reproduct.loginDate"(t){this.reproduct.estrusDate=m(t,21)},"reproduct.estrusDate"(t){this.reproduct.matingDate=m(t,1)},"reproduct.matingDate"(t){this.reproduct.checkDate=M(t,2)},"reproduct.result"(t){t==1?this.reproduct.status=4:this.reproduct.status=1},dataEdit:{handler(t,e){t!=null&&this.mode=="edit"&&(this.reproduct=t,this.reproduct.loginDate=new Date(t.loginDate),this.reproduct.estrusDate=new Date(t.estrusDate),this.reproduct.matingDate=new Date(t.matingDate),this.reproduct.checkDate=new Date(t.checkDate))}}},methods:{clear(){var t;this.mode==="edit"&&this.$emit("update:dataEdit",null),this.reproduct.cow=null,this.reproduct.loginDate=new Date,this.reproduct.estrusDate=m(new Date,21),this.reproduct.matingDate=m(new Date,22),this.reproduct.checkDate=M(m(new Date,43),2),this.reproduct.dad="",this.reproduct.howTo="",this.reproduct.status=1,this.reproduct.result=2,(t=this.reproduct)==null||delete t._id},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await _.create(this.reproduct)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await _.update(this.reproduct._id,this.reproduct)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message}}},components:{BaseButton:R,BaseButtons:W,CardBox:U,BaseDivider:L,OverlayLayer:F,FormField:X,FormControl:q,NotificationBar:O,BaseLevel:H,DDLCow:G},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},ae={class:"grid grid-cols-1 lg:grid-cols-3 gap-3 mt-1"};function le(t,e,s,v,a,i){const V=n("DDLCow"),u=n("FormField"),c=n("FormControl"),Y=n("NotificationBar"),k=n("BaseDivider"),b=n("BaseButton"),w=n("BaseButtons"),N=n("CardBox"),E=n("OverlayLayer");return B((p(),D(E,null,{default:o(()=>[B(l(N,{title:s.mode==="create"?"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C":"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",class:"shadow-lg w-full overflow-y-auto lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:z(i.submit,["prevent"]),onHeaderIconClick:i.cancel},{default:o(()=>[A("div",ae,[l(u,{label:"\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:o(()=>[l(V,{modelValue:a.reproduct.cow,"onUpdate:modelValue":e[0]||(e[0]=r=>a.reproduct.cow=r)},null,8,["modelValue"])]),_:1}),l(u,{label:"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",help:""},{default:o(()=>[l(c,{modelValue:a.reproduct.dad,"onUpdate:modelValue":e[1]||(e[1]=r=>a.reproduct.dad=r),icon:"genderMale"},null,8,["modelValue"])]),_:1}),l(u,{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:o(()=>[l(c,{modelValue:a.reproduct.loginDate,"onUpdate:modelValue":e[2]||(e[2]=r=>a.reproduct.loginDate=r),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(u,{label:"\u0E1C\u0E25"},{default:o(()=>[l(c,{modelValue:a.reproduct.result,"onUpdate:modelValue":e[3]||(e[3]=r=>a.reproduct.result=r),options:a.result},null,8,["modelValue","options"])]),_:1}),a.reproduct.result==1?(p(),D(u,{key:0,label:"\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32",help:""},{default:o(()=>[l(c,{modelValue:a.reproduct.howTo,"onUpdate:modelValue":e[4]||(e[4]=r=>a.reproduct.howTo=r),icon:"doctor"},null,8,["modelValue"])]),_:1})):h("",!0),a.reproduct.result==2?(p(),D(u,{key:1,label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E14",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07 (\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C + 21 \u0E27\u0E31\u0E19)"},{default:o(()=>[l(c,{modelValue:a.reproduct.estrusDate,"onUpdate:modelValue":e[5]||(e[5]=r=>a.reproduct.estrusDate=r),icon:"calendar",type:"date","lower-limit":a.reproduct.loginDate,required:""},null,8,["modelValue","lower-limit"])]),_:1})):h("",!0),a.reproduct.result==2?(p(),D(u,{key:2,label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E2A\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07 (\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E14 + 24 \u0E0A\u0E21)"},{default:o(()=>[l(c,{modelValue:a.reproduct.matingDate,"onUpdate:modelValue":e[6]||(e[6]=r=>a.reproduct.matingDate=r),icon:"calendar",type:"date","lower-limit":a.reproduct.estrusDate,required:""},null,8,["modelValue","lower-limit"])]),_:1})):h("",!0),a.reproduct.result==2?(p(),D(u,{key:3,label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E15\u0E23\u0E27\u0E08\u0E17\u0E49\u0E2D\u0E07",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07 (\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E2A\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C + 2 \u0E40\u0E14\u0E37\u0E2D\u0E19)"},{default:o(()=>[l(c,{modelValue:a.reproduct.checkDate,"onUpdate:modelValue":e[7]||(e[7]=r=>a.reproduct.checkDate=r),icon:"calendar",type:"date","lower-limit":a.reproduct.matingDate,required:""},null,8,["modelValue","lower-limit"])]),_:1})):h("",!0),l(u,{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30"},{default:o(()=>[l(c,{modelValue:a.reproduct.status,"onUpdate:modelValue":e[8]||(e[8]=r=>a.reproduct.status=r),options:a.status},null,8,["modelValue","options"])]),_:1})]),a.alert?(p(),D(Y,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:o(()=>[I(Q(a.alert),1)]),_:1})):h("",!0),l(k),l(w,{type:"justify-center"},{default:o(()=>[l(b,{label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",color:"success",type:"submit",loading:a.loading},null,8,["loading"]),l(b,{label:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",color:"danger",onClick:i.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[S,i.value]])]),_:1},512)),[[S,i.value]])}var re=T(te,[["render",le]]);const oe={data(){return{openModal:!1,items:[],forms:[{label:"\u0E42\u0E04",value:"cow",type:"ddl",module:"cow"},{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",value:"status",options:y()},{label:"\u0E1C\u0E25",value:"result",options:C()},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",value:"loginDate",icon:"calendar",type:"date"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E14",value:"estrusDate",icon:"calendar",type:"date"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E2A\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",value:"matingDate",icon:"calendar",type:"date"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E15\u0E23\u0E27\u0E08\u0E17\u0E49\u0E2D\u0E07",value:"checkDate",icon:"calendar",type:"date"}],search:{cow:null,loginDate:null,estrusDate:null,matingDate:null,checkDate:null,status:"",result:"",farm:x().farm._id},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48",class:"text-center",value:"seq"},{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",value:"cow.code"},{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",value:"cow.name"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",class:"text-center",value:"loginDate",type:"date"},{label:"\u0E1C\u0E25",func:t=>C()[t.result].label},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E31\u0E14",class:"text-center",value:"estrusDate",type:"date"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E2A\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",class:"text-center",value:"matingDate",type:"date"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E15\u0E23\u0E27\u0E08\u0E17\u0E49\u0E2D\u0E07",class:"text-center",value:"checkDate",type:"date"},{label:"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",value:"dad"},{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",func:t=>y()[t.status].label},{label:"\u0E27\u0E34\u0E18\u0E35\u0E23\u0E31\u0E01\u0E29\u0E32",value:"howTo"}],buttons:[{label:"\u0E25\u0E1A",type:"delete",color:"danger",condition:t=>t.status!="2"&&t.status!="3"},{label:"\u0E41\u0E01\u0E49\u0E44\u0E02",type:"edit",color:"warning",condition:t=>t.status!="2"&&t.status!="3"}]}},components:{SectionMain:P,LayoutAuthenticated:Z,SectionTitleBarSub:j,Table:J,Modal:re,Criteria:K},created(){this.getReproductions()},methods:{async getReproductions(t){this.loading=!0;const e=await _.all(t);this.items=[],e.data&&(this.items=e.data.reproducts),this.loading=!1},async remove(t){this.loading=!0,(await _.delete(t)).data&&this.getReproductions(),this.loading=!1},edit(t){this.dataEdit=t,this.dataEdit.cow=t.cow._id,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.date=null}}};function ne(t,e,s,v,a,i){const V=n("SectionTitleBarSub"),u=n("Modal"),c=n("Criteria"),Y=n("Table"),k=n("SectionMain"),b=n("LayoutAuthenticated");return p(),D(b,null,{default:o(()=>[l(k,null,{default:o(()=>[l(V,{icon:"reproduction",title:"\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",btnText:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C","has-btn-add":"",onOpenModal:e[0]||(e[0]=w=>{a.mode="create",a.openModal=!0})}),l(u,{modelValue:a.openModal,"onUpdate:modelValue":e[1]||(e[1]=w=>a.openModal=w),mode:a.mode,dataEdit:a.dataEdit,onConfirm:i.getReproductions,onCancel:i.getReproductions},null,8,["modelValue","mode","dataEdit","onConfirm","onCancel"]),l(c,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:i.getReproductions,onReset:i.reset,forms:a.forms,search:a.search},null,8,["onSearch","onReset","forms","search"]),l(Y,{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C","has-checkbox":"","checked-data":a.checked,items:a.items,datas:a.datas,buttons:a.buttons,onEdit:i.edit,onDelete:i.remove,onDeleteSelected:t.removeSelected,loading:a.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}var pe=T(oe,[["render",ne]]);export{pe as default};