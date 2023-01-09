import{M as m,$ as v,N as S,O as M,s as T,i as Y,q as F,R as L,l as N,m as U,_ as q,U as O,Q as o,G as y,T as V,o as D,g as C,w as s,b as l,d as H,e as E,t as R,p as A,j as I,S as j,P,V as Q}from"./index.f9fd3092.js";import{D as z,T as G,a as J}from"./Criteria.39cadf4f.js";import{_ as K}from"./BaseButtons.c30445ae.js";import{_ as W,a as X}from"./FormField.1b1b5638.js";import{T as B}from"./alert.fba1eb6a.js";import{a as u}from"./auth-header.98060081.js";import"./CardBoxModal.86958926.js";async function Z(a={}){let e="?";if(a.farm&&(e=e+`farm=${a.farm}&`),a.cow&&(e=e+`cow=${a.cow}&`),a.date){const r=v(new Date(a.date)).format("YYYY-MM-DD");e=e+`date=${r}&`}return a?e.replace(/&*$/,""):""}class ${async all(e){const r=await Z(e);return m.get("/heal"+r,{headers:u()}).then(p=>p)}get(e){return m.get(`/heal/${e}`,{headers:u()})}create(e){return e.date&&(e.date=v(new Date(e.date)).format("YYYY-MM-DD")),m.post("/heal",e,{headers:u()})}delete(e){return m.delete(`/heal/${e}`,{headers:u()})}update(e,r){return r.date&&(r.date=v(new Date(r.date)).format("YYYY-MM-DD")),m.put(`/heal/${e}`,r,{headers:u()})}}var _=new $;const ee={data(){return{heal:{cow:null,date:new Date,disease:"",method:"",healer:"",farm:M().farm._id},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(a){this.$emit("update:modelValue",a)}}},watch:{data(a){a&&this.mode==="edit"&&(this.heal=a,this.heal.date=new Date(a.date))}},methods:{clear(){this.heal.cow=null,this.heal.date=new Date,this.heal.disease="",this.heal.method="",this.heal.healer=""},confirmCancel(a){this.value=!1,this.$emit(a)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await _.create(this.heal)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await _.update(this.heal)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")),B.fire({icon:"success",title:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"})}catch(a){console.error("Error : ",a),this.loading=!1,this.alert=a.response.data.message,B.fire({icon:"error",title:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"})}}},components:{BaseButton:T,BaseButtons:K,CardBox:Y,BaseDivider:F,OverlayLayer:L,FormField:W,FormControl:N,NotificationBar:U,BaseLevel:q,DDLCow:z,FormCheckRadioPicker:X,BaseIcon:O},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},ae={class:"grid grid-cols-1 lg:grid-cols-3 gap-8"};function te(a,e,r,p,t,n){const g=o("DDLCow"),c=o("FormField"),d=o("FormControl"),w=o("NotificationBar"),b=o("BaseDivider"),h=o("BaseButton"),f=o("BaseButtons"),x=o("CardBox"),k=o("OverlayLayer");return y((D(),C(k,null,{default:s(()=>[y(l(x,{title:(this.mode==="create"?"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01":"\u0E41\u0E01\u0E49\u0E44\u0E02")+"\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32",class:"shadow-lg w-full overflow-y-auto lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:I(n.submit,["prevent"]),onHeaderIconClick:n.cancel},{default:s(()=>[H("div",ae,[l(c,{label:"\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:s(()=>[l(g,{modelValue:t.heal.cow,"onUpdate:modelValue":e[0]||(e[0]=i=>t.heal.cow=i)},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E01\u0E29\u0E32",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:s(()=>[l(d,{modelValue:t.heal.date,"onUpdate:modelValue":e[1]||(e[1]=i=>t.heal.date=i),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E04\u0E19\u0E23\u0E31\u0E01\u0E29\u0E32"},{default:s(()=>[l(d,{modelValue:t.heal.healer,"onUpdate:modelValue":e[2]||(e[2]=i=>t.heal.healer=i),icon:"doctor"},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E2D\u0E32\u0E01\u0E32\u0E23/\u0E42\u0E23\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:s(()=>[l(d,{modelValue:t.heal.disease,"onUpdate:modelValue":e[3]||(e[3]=i=>t.heal.disease=i),type:"textarea",required:""},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32"},{default:s(()=>[l(d,{modelValue:t.heal.method,"onUpdate:modelValue":e[4]||(e[4]=i=>t.heal.method=i),type:"textarea"},null,8,["modelValue"])]),_:1})]),t.alert?(D(),C(w,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:s(()=>[E(R(t.alert),1)]),_:1})):A("",!0),l(b),l(f,{type:"justify-center"},{default:s(()=>[l(h,{label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),l(h,{label:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",color:"danger",onClick:n.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[V,n.value]])]),_:1},512)),[[V,n.value]])}var le=S(ee,[["render",te]]);const oe={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"\u0E42\u0E04",value:"cow",type:"ddl",module:"cow"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E01\u0E29\u0E32",value:"date",icon:"calendar",type:"date"}],search:{cow:null,date:null,farm:M().farm._id},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48",value:"seq",class:"text-center"},{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",value:"cow.code"},{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",value:"cow.name"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E23\u0E31\u0E01\u0E29\u0E32",class:"text-center",value:"date",type:"date"},{label:"\u0E2D\u0E32\u0E01\u0E32\u0E23/\u0E42\u0E23\u0E04",class:"text-center",value:"disease"},{label:"\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32",class:"text-center",value:"method"},{label:"\u0E04\u0E19\u0E23\u0E31\u0E01\u0E29\u0E32",class:"text-center",value:"healer"}],buttons:[{label:"\u0E25\u0E1A",type:"delete",color:"danger"},{label:"\u0E41\u0E01\u0E49\u0E44\u0E02",type:"edit",color:"warning"}]}},components:{SectionMain:j,LayoutAuthenticated:P,SectionTitleBarSub:Q,Table:G,Modal:le,Criteria:J},created(){this.getDatas()},methods:{async getDatas(a){this.loading=!0;const e=await _.all(a);this.items=[],e.data&&(this.items=e.data.heals),this.loading=!1},async remove(a){this.loading=!0,(await _.delete(a)).data&&this.getDatas(),this.loading=!1,B.fire({icon:"success",title:"\u0E25\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08"})},edit(a){this.modalData=a,this.modalData.cow=a.cow._id,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.date=null}}};function ne(a,e,r,p,t,n){const g=o("SectionTitleBarSub"),c=o("Modal"),d=o("Criteria"),w=o("Table"),b=o("SectionMain"),h=o("LayoutAuthenticated");return D(),C(h,null,{default:s(()=>[l(b,null,{default:s(()=>[l(g,{icon:"doctor",title:"\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32","has-btn-add":"",onOpenModal:e[0]||(e[0]=f=>{t.mode="create",t.openModal=!0}),btnText:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32"}),l(c,{modelValue:t.openModal,"onUpdate:modelValue":e[1]||(e[1]=f=>t.openModal=f),data:t.modalData,mode:t.mode,onConfirm:n.getDatas,onCancel:n.getDatas},null,8,["modelValue","data","mode","onConfirm","onCancel"]),l(d,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:n.getDatas,onReset:n.reset,forms:t.forms,search:t.search},null,8,["onSearch","onReset","forms","search"]),l(w,{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E31\u0E01\u0E29\u0E32","has-checkbox":"","checked-data":t.checked,items:t.items,datas:t.datas,buttons:t.buttons,onEdit:n.edit,onDelete:n.remove,onDeleteSelected:a.removeSelected,loading:t.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}var he=S(oe,[["render",ne]]);export{he as default};
