import{K as k,a8 as b,p as A,m as O,_ as T,l as U,$ as q,i as I,j as R,f as E,X as P,N as r,P as V,W as x,o as u,c as d,w as i,d as o,s as z,h as f,t as p,k as _,e as Y,S as H,L as j,M as K}from"./index.a033fd67.js";import{T as W}from"./Table.7226a75e.js";import{C as X}from"./Criteria.24f9c5e6.js";import{_ as G}from"./FormField.b1530e79.js";import{D as J}from"./Cow.7c7ec76c.js";import{g as S}from"./age-calculate.285cb1f6.js";import{B as D,s as Q,o as Z}from"./birth.dba1a85b.js";import{_ as $}from"./FormCheckRadioPicker.22ff1844.js";import"./cow.9cd5e5f0.js";const ee={data(){return{birth:{sex:"F",overgrown:"N",birthDate:new Date,drugDate:b(new Date,15),washDate:b(new Date,29),newCow:{name:"",mom:""},reproduction:""},show:{cow:null,seq:""},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user}},watch:{data(e){var a,n;e&&(this.show=e,this.birth.newCow.mom=e.cow.code,this.birth.newCow.name=(a=e.calf)==null?void 0:a.name,this.birth.reproduction=(n=e.reproduction)==null?void 0:n._id,this.mode==="edit"&&(this.birth.birthDate=new Date(e.birthDate),this.birth.drugDate=new Date(e.drugDate),this.birth.washDate=new Date(e.washDate),this.birth.overgrown=e.overgrown))},"birth.birthDate"(e){this.birth.drugDate=b(e,15)},"birth.drugDate"(e){this.birth.washDate=b(e,14)}},methods:{clear(){this.birth.sex="F",this.birth.overgrown="N",this.birth.newCow.name="",this.birth.birthDate=new Date,this.birth.drugDate=b(new Date,15),this.birth.washDate=b(new Date,14)},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.birth.overgrown==="N"&&(this.birth.drugDate=null,this.birth.washDate=null),this.mode==="create"?await D.create(this.show._id,this.birth)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await D.update(this.show._id,this.birth)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"))}catch(e){console.error("Error : ",e),this.loading=!1,this.alert=e.response.data.message}},calAge(e){return S(e)}},components:{BaseButton:A,BaseButtons:O,CardBox:T,BaseDivider:U,OverlayLayer:q,FormField:G,FormControl:I,NotificationBar:R,BaseLevel:E,DDLCow:J,FormCheckRadioPicker:$,BaseIcon:P},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},te={class:"grid grid-cols-2 lg:grid-cols-3 gap-8"};function ae(e,a,n,F,t,s){const w=r("BaseIcon"),h=r("BaseLevel"),m=r("FormControl"),c=r("FormField"),g=r("FormCheckRadioPicker"),y=r("NotificationBar"),v=r("BaseDivider"),B=r("BaseButton"),M=r("BaseButtons"),N=r("CardBox"),L=r("OverlayLayer");return V((u(),d(L,null,{default:i(()=>[V(o(N,{title:(this.mode==="create"?"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01":"\u0E41\u0E01\u0E49\u0E44\u0E02")+"\u0E01\u0E32\u0E23\u0E04\u0E25\u0E2D\u0E14\u0E25\u0E39\u0E01",class:"shadow-lg w-full lg:w-2/5 z-50","header-icon":"close",modal:"",form:"",onSubmit:Y(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:i(()=>[z("div",te,[o(h,{type:"justify-start"},{default:i(()=>{var l;return[o(w,{path:"cow",size:"24",class:"mr-3"}),f(" "+p((l=t.show.cow)==null?void 0:l.name),1)]}),_:1}),o(h,{type:"justify-start"},{default:i(()=>{var l,C;return[f(" \u0E2A\u0E37\u0E1A\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48 "+p((C=(l=t.show)==null?void 0:l.reproduction)==null?void 0:C.seq),1)]}),_:1}),o(h,{type:"justify-start"},{default:i(()=>{var l;return[f(" \u0E2D\u0E32\u0E22\u0E38\u0E04\u0E23\u0E23\u0E20\u0E4C "+p(s.calAge((l=t.show)==null?void 0:l.pregnantDate,t.show.birthDate)),1)]}),_:1}),o(c,{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E04\u0E25\u0E2D\u0E14",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[o(m,{modelValue:t.birth.birthDate,"onUpdate:modelValue":a[0]||(a[0]=l=>t.birth.birthDate=l),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),o(c,{label:"\u0E40\u0E1E\u0E28",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[o(g,{modelValue:t.birth.sex,"onUpdate:modelValue":a[1]||(a[1]=l=>t.birth.sex=l),type:"radio",options:{M:"\u0E40\u0E1E\u0E28\u0E1C\u0E39\u0E49",F:"\u0E40\u0E1E\u0E28\u0E40\u0E21\u0E35\u0E22"}},null,8,["modelValue"])]),_:1}),n.mode==="edit"?(u(),d(h,{key:0,type:"justify-start"},{default:i(()=>{var l;return[o(w,{path:"babyFaceOutline",size:"24",class:"mr-3"}),f(" \u0E0A\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01 "+p((l=t.show.calf)==null?void 0:l.name),1)]}),_:1})):_("",!0),t.birth.sex=="F"&&n.mode==="create"?(u(),d(c,{key:1,label:"\u0E0A\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[o(m,{modelValue:t.birth.newCow.name,"onUpdate:modelValue":a[2]||(a[2]=l=>t.birth.newCow.name=l),icon:"babyFaceOutline",required:""},null,8,["modelValue"])]),_:1})):_("",!0),o(c,{label:"\u0E23\u0E01",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[o(g,{modelValue:t.birth.overgrown,"onUpdate:modelValue":a[3]||(a[3]=l=>t.birth.overgrown=l),type:"radio",options:{Y:"\u0E04\u0E49\u0E32\u0E07",N:"\u0E44\u0E21\u0E48\u0E04\u0E49\u0E32\u0E07"}},null,8,["modelValue"])]),_:1}),t.birth.overgrown==="Y"?(u(),d(c,{key:2,label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E22\u0E32\u0E02\u0E31\u0E1A",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07 (\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E04\u0E25\u0E2D\u0E14 + 15 \u0E27\u0E31\u0E19)"},{default:i(()=>[o(m,{modelValue:t.birth.drugDate,"onUpdate:modelValue":a[4]||(a[4]=l=>t.birth.drugDate=l),icon:"calendar",type:"date","lower-limit":t.birth.date},null,8,["modelValue","lower-limit"])]),_:1})):_("",!0),t.birth.overgrown==="Y"?(u(),d(c,{key:3,label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E49\u0E32\u0E07\u0E21\u0E14\u0E25\u0E39\u0E01",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07 (\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E22\u0E32\u0E02\u0E31\u0E1A + 14 \u0E27\u0E31\u0E19)"},{default:i(()=>[o(m,{modelValue:t.birth.washDate,"onUpdate:modelValue":a[5]||(a[5]=l=>t.birth.washDate=l),icon:"calendar",type:"date","lower-limit":t.birth.drugDate},null,8,["modelValue","lower-limit"])]),_:1})):_("",!0)]),t.alert?(u(),d(y,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[f(p(t.alert),1)]),_:1})):_("",!0),o(v),o(M,{type:"justify-center"},{default:i(()=>[o(B,{label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),o(B,{label:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[x,s.value]])]),_:1},512)),[[x,s.value]])}var oe=k(ee,[["render",ae]]);const le={data(){return{openModal:!1,birthData:null,items:[],forms:[{label:"\u0E42\u0E04",value:"cow",type:"ddl",module:"cow"},{label:"\u0E40\u0E1E\u0E28",value:"sex",options:[{id:"",label:"\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"},{id:"M",label:"\u0E15\u0E31\u0E27\u0E1C\u0E39\u0E49"},{id:"F",label:"\u0E15\u0E31\u0E27\u0E40\u0E21\u0E35\u0E22"}]},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E04\u0E25\u0E2D\u0E14",value:"birthDate",icon:"calendar",type:"date"}],search:{cow:null,birthDate:null,sex:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"seq"},label:{value:"cow.name"}},datas:[{label:"\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48",value:"seq",class:"text-center"},{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",value:"cow.code"},{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",value:"cow.name"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E15\u0E31\u0E49\u0E07\u0E04\u0E23\u0E23\u0E20\u0E4C",class:"text-center",value:"pregnantDate",type:"date"},{label:"\u0E2D\u0E32\u0E22\u0E38\u0E04\u0E23\u0E23\u0E20\u0E4C",func:e=>this.calAge(e==null?void 0:e.pregnantDate)},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E04\u0E25\u0E2D\u0E14",class:"text-center",value:"birthDate",type:"date"},{label:"\u0E40\u0E1E\u0E28",class:"text-center",func:e=>Q()[e.sex]},{label:"\u0E25\u0E39\u0E01\u0E27\u0E31\u0E27",class:"text-center",func:e=>{var a,n;return e.calf?((a=e.calf)==null?void 0:a.code)+" : "+((n=e.calf)==null?void 0:n.name):""}},{label:"\u0E23\u0E01\u0E04\u0E49\u0E32\u0E07",class:"text-center",func:e=>Z()[e.overgrown]},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E22\u0E32\u0E02\u0E31\u0E1A",class:"text-center",value:"drugDate",type:"date"},{label:"\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E49\u0E32\u0E07\u0E21\u0E14\u0E25\u0E39\u0E01",class:"text-center",value:"washDate",type:"date"}],buttons:[{label:"\u0E25\u0E1A",type:"delete",color:"danger",condition:e=>!e.birthDate},{label:"\u0E41\u0E01\u0E49\u0E44\u0E02",type:"edit",color:"warning",condition:e=>e.birthDate},{label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E04\u0E25\u0E2D\u0E14\u0E25\u0E39\u0E01",color:"info",type:"oth",func:e=>{this.mode="create",this.openModal=!0,this.birthData=e},condition:e=>!e.birthDate}]}},components:{SectionMain:H,LayoutAuthenticated:j,SectionTitleBarSub:K,Table:W,Modal:oe,Criteria:X},computed:{user(){return this.$store.state.auth.user}},created(){this.getDatas()},methods:{async getDatas(e){this.loading=!0;const a=await D.all(e);this.items=[],a.data&&(this.items=a.data.births),this.loading=!1},async remove(e){this.loading=!0,(await D.delete(e)).data&&this.getDatas(),this.loading=!1},edit(e){this.birthData=e,this.mode="edit",this.openModal=!0},reset(){this.search.cow=null,this.search.birthDate=null,this.search.sex=null},calAge(e){return S(e)}}};function re(e,a,n,F,t,s){const w=r("SectionTitleBarSub"),h=r("Modal"),m=r("Criteria"),c=r("Table"),g=r("SectionMain"),y=r("LayoutAuthenticated");return u(),d(y,null,{default:i(()=>[o(g,null,{default:i(()=>[o(w,{icon:"babyFaceOutline",title:"\u0E01\u0E32\u0E23\u0E04\u0E25\u0E2D\u0E14\u0E25\u0E39\u0E01"}),o(h,{modelValue:t.openModal,"onUpdate:modelValue":a[0]||(a[0]=v=>t.openModal=v),data:t.birthData,mode:t.mode,onConfirm:s.getDatas},null,8,["modelValue","data","mode","onConfirm"]),o(m,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:t.forms,search:t.search},null,8,["onSearch","onReset","forms","search"]),o(c,{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E04\u0E25\u0E2D\u0E14\u0E25\u0E39\u0E01","has-checkbox":"","checked-data":t.checked,items:t.items,datas:t.datas,buttons:t.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:e.removeSelected,loading:t.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}var fe=k(le,[["render",re]]);export{fe as default};