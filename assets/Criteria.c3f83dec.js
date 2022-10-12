import{a as L,W as O,o as s,c as h,w as f,p as u,H as U,X as N,Y as I,N as T,l as Y,_ as M,f as $,e as H,Z as F,$ as E,Q as d,s as i,b as m,t as b,F as p,G as g,j as x,n as V,T as q,a0 as B,O as Q,i as z,k as G,g as W,d as A}from"./index.bb5a4a15.js";import{_ as R}from"./BaseButtons.6dd2a442.js";import{_ as X}from"./CardBoxModal.b219d5aa.js";import{_ as Z,a as J}from"./FormField.0acb6139.js";import{a as w}from"./auth-header.1fabd503.js";const K={class:"checkbox"},j=u("span",{class:"check"},null,-1),ee={__name:"TableCheckboxCell",props:{type:{type:String,default:"td"},isChecked:{type:Boolean,default:!1}},emits:["checked"],setup(t,{emit:e}){const a=t,o=L(a.isChecked);return O(o,c=>{e("checked",c)}),(c,n)=>(s(),h(I(a.type),{class:"checkbox-cell"},{default:f(()=>[u("label",K,[U(u("input",{"onUpdate:modelValue":n[0]||(n[0]=_=>o.value=_),type:"checkbox"},null,512),[[N,o.value]]),j])]),_:1}))}},te={data(){return{textConfirm:"",modalConfirm:!1,funcConfirm:Function,idConfirm:null,dataSelectedConfirm:[],perPage:10,currentPage:0,checkedRows:[],loading:!1}},props:{title:{type:String,default:""},items:{type:Array,default:[]},datas:{type:Array,default:[]},buttons:{type:Array,default:[]},hasCheckbox:Boolean,checkedData:{type:Object,default:null},loading:Boolean},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const t=[];for(let e=0;e<this.numPages;e++)t.push(e);return t}},components:{BaseButton:Y,BaseButtons:R,CardBox:M,CardBoxModal:X,TableCheckboxCell:ee,UserAvatar:$,BaseLevel:H},methods:{getValue(t,e){const a=this.getPropByString(t,e.value);if(!e.type)return e.func?e.func(t):a;switch(e.type){case"number":return this.formatCurrency(a);case"date":return this.formatDate(a);case"image":return a}},getPropByString(t,e){if(!e)return t;let a,o=e.split(".");for(var c=0,n=o.length-1;c<n;c++){a=o[c];var _=t[a];if(_!==void 0)t=_;else break}return t[o[c]]},btnClick(t,e){switch(t){case"edit":this.edit(e.data);break;case"delete":this.confirm("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49 \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?",e.id,null,this.removeData);break;case"detail":this.detail(e.path+"/"+e.id);break}},removeData(){this.$emit("delete",this.idConfirm)},removeSelected(){this.$emit("deleteSelected",this.dataSelectedConfirm)},edit(t){this.$emit("edit",t)},detail(t){this.$router.push(t)},confirm(t,e,a,o){this.textConfirm=t,this.funcConfirm=o,this.idConfirm=e,this.dataSelectedConfirm=a,this.modalConfirm=!0},checked(t,e){t?(e.checked=!0,this.checkedRows.push(e)):(e.checked=!1,this.checkedRows=this.removeArr(this.checkedRows,a=>a._id===e._id))},countChecked(){return this.checkedRows.length>0?"(\u0E40\u0E25\u0E37\u0E2D\u0E01 "+this.checkedRows.length+" \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23)":""},removeArr(t,e){const a=[];return t.forEach(o=>{e(o)||a.push(o)}),a},formatDate(t){return t?F(new Date(t)).format("DD/MM/YYYY"):""},formatCurrency(t){return E(t).format(0,0)}}},ae={key:0,class:"p-3 bg-gray-100/50 dark:bg-gray-800"},le={class:"overflow-x-auto"},se={key:0,class:"text-center whitespace-nowrap"},ne=u("th",null,null,-1),re=["data-label"],ce={key:1},oe={key:1,class:"lg:w-6 whitespace-nowrap"},ie={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"};function de(t,e,a,o,c,n){const _=d("CardBoxModal"),y=d("BaseButton"),k=d("BaseButtons"),S=d("TableCheckboxCell"),P=d("UserAvatar"),D=d("BaseLevel"),v=d("CardBox");return s(),i(p,null,[m(_,{modelValue:c.modalConfirm,"onUpdate:modelValue":e[0]||(e[0]=r=>c.modalConfirm=r),title:"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","button-label":"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",onConfirm:c.funcConfirm,"has-cancel":"","has-button":""},{default:f(()=>[u("p",null,b(c.textConfirm),1)]),_:1},8,["modelValue","onConfirm"]),n.itemsPaginated.length>0?(s(),h(v,{key:0,title:a.title+" "+n.countChecked(),class:"shadow-lg","has-table":"","header-icon":""},{default:f(()=>[c.checkedRows.length>0?(s(),i("div",ae,[(s(!0),i(p,null,g(c.checkedRows,r=>(s(),i("span",{key:r._id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1"},b(n.getValue(r,a.checkedData.code)+" : "+n.getValue(r,a.checkedData.label)),1))),128)),m(k,{type:"justify-start lg:justify-end","no-wrap":""},{default:f(()=>[m(y,{color:"danger",label:"\u0E25\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",onClick:e[1]||(e[1]=r=>n.confirm("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?",null,c.checkedRows,n.removeSelected))})]),_:1})])):x("",!0),u("div",le,[u("table",null,[u("thead",null,[u("tr",null,[a.hasCheckbox?(s(),i("th",se,"\u0E40\u0E25\u0E37\u0E2D\u0E01")):x("",!0),(s(!0),i(p,null,g(a.datas,r=>(s(),i("th",{key:r.label,class:V(["whitespace-nowrap",[r.class]])},b(r.label),3))),128)),ne])]),u("tbody",null,[(s(!0),i(p,null,g(n.itemsPaginated,r=>(s(),i("tr",{key:r._id},[a.hasCheckbox?(s(),h(S,{key:0,isChecked:r.checked,class:"text-center border-b-0 lg:w-6 before:hidden",onChecked:l=>n.checked(l,r)},null,8,["isChecked","onChecked"])):x("",!0),(s(!0),i(p,null,g(a.datas,l=>(s(),i("td",{key:l.label,"data-label":l.label,class:V(["whitespace-nowrap",[l.class]])},[l.type==="image"?(s(),h(P,{key:0,avatar:n.getValue(r,l),class:"w-36 mx-auto lg:h-20 lg:w-20"},null,8,["avatar"])):(s(),i("span",ce,b(n.getValue(r,l)),1))],10,re))),128)),a.buttons.length>0?(s(),i("td",oe,[m(k,{type:"justify-end lg:justify-start","no-wrap":""},{default:f(()=>[(s(!0),i(p,null,g(a.buttons,l=>U((s(),h(y,{key:l.label,color:l.color,label:l.label,onClick:C=>l.type==="oth"?l.func(r):n.btnClick(l.type,{data:r,id:r._id,path:l.path})},null,8,["color","label","onClick"])),[[q,l.condition?l.condition(r):!0]])),128))]),_:2},1024)])):x("",!0)]))),128))])])]),u("div",ie,[m(D,null,{default:f(()=>[m(k,null,{default:f(()=>[(s(!0),i(p,null,g(n.pagesList,r=>(s(),h(y,{key:r,active:r===c.currentPage,label:r+1,small:"",onClick:l=>c.currentPage=r},null,8,["active","label","onClick"]))),128))]),_:1}),u("small",null,"\u0E2B\u0E19\u0E49\u0E32 "+b(n.currentPageHuman)+" \u0E08\u0E32\u0E01 "+b(n.numPages),1)]),_:1})])]),_:1},8,["title"])):a.loading?(s(),h(v,{key:1,loading:""})):(s(),h(v,{key:2,empty:""}))],64)}var xe=T(te,[["render",de]]);async function ue(t={}){let e="?";if(t.farm&&(e=e+`farm=${t.farm}&`),t.flag&&(e=e+`flag=${t.flag}&`),t.code&&(e=e+`code=${t.code}&`),t.name&&(e=e+`name=${t.name}&`),t.status&&(e=e+`status=${t.status}&`),t.birthDate){const a=F(new Date(t.birthDate)).format("YYYY-MM-DD");e=e+`birthDate=${a}&`}return t.corral&&(e=e+`corral=${t.corral}&`),t?e.replace(/&*$/,""):""}class he{async all(e){const a=await ue(e);return B.get("/cow"+a,{headers:w()}).then(o=>o)}get(e){return B.get(`/cow/${e}`,{headers:w()})}create(e){return e.birthDate&&(e.birthDate=F(new Date(e.birthDate)).format("YYYY-MM-DD")),B.post("/cow",e,{headers:w()})}delete(e){return B.delete(`/cow/${e}`,{headers:w()})}update(e,a){return B.put(`/cow/${e}`,a,{headers:w()})}}var me=new he;const fe={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},methods:{async initialData(){const t={farm:Q().farm._id};try{const e=await me.all(t);if(this.datas=[],e&&(this.datas=e.data.cows,this.datas.map(a=>a.cow_data=a.code+" : "+a.name)),this.defaultValue){const a=this.datas.filter(o=>o[this.defaultType]==this.defaultValue);a&&this.handleInput(this.reduceAction(a[0]))}}catch(e){this.datas=[],console.error("Error: "+e.message)}},reduceAction(t){return this.valueType==="object"?t:t[this.valueType]},handleInput(t){this.$emit("update:value",t),this.dataSelected=this.datas.find(e=>e.cde===t||e.name===t),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:""}}},_e={class:"relative"},pe=z(" \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");function ye(t,e,a,o,c,n){const _=d("mdicon"),y=d("v-select");return s(),i("div",_e,[m(y,{class:"ddl",clearable:a.clear,disabled:a.disabled,options:c.datas,reduce:n.reduceAction,label:"cow_data",placeholder:"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04",onInput:n.handleInput,modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=k=>n.value=k),dataSelected:a.dataSelected},{"no-options":f(()=>[m(_,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),pe]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected"])])}var ke=T(fe,[["render",ye]]);const ge={props:{grid:{type:String,default:"grid-cols-4"},forms:{type:Array,default:[]},search:{type:Object,default:null}},components:{BaseButton:Y,BaseButtons:R,BaseDivider:G,CardBox:M,FormField:Z,FormControl:W,FormCheckRadioPicker:J,DDLCow:ke},methods:{submit(){this.$emit("search",this.search)},reset(){this.$emit("reset",this.search)}}};function Ce(t,e,a,o,c,n){const _=d("DDLCow"),y=d("FormCheckRadioPicker"),k=d("FormControl"),S=d("FormField"),P=d("BaseDivider"),D=d("BaseButton"),v=d("BaseButtons"),r=d("CardBox");return s(),h(r,{title:"\u0E04\u0E49\u0E19\u0E2B\u0E32",icon:"",form:"",class:"mb-3","header-icon":"",onSubmit:A(n.submit,["prevent"]),onReset:A(n.reset,["prevent"])},{default:f(()=>[u("div",{class:V(["grid gap-5",[a.grid]])},[(s(!0),i(p,null,g(a.forms,l=>(s(),h(S,{key:l.value,label:l.label,class:V([l.class])},{default:f(()=>[l.type==="ddl"&&l.module==="cow"?(s(),h(_,{key:0,modelValue:a.search[l.value],"onUpdate:modelValue":C=>a.search[l.value]=C,valueType:l.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):l.type==="radio"?(s(),h(y,{key:1,modelValue:a.search[l.value],"onUpdate:modelValue":C=>a.search[l.value]=C,type:l.type,options:l.options},null,8,["modelValue","onUpdate:modelValue","type","options"])):(s(),h(k,{key:2,modelValue:a.search[l.value],"onUpdate:modelValue":C=>a.search[l.value]=C,icon:l.icon,options:l.options,type:l.type},null,8,["modelValue","onUpdate:modelValue","icon","options","type"]))]),_:2},1032,["label","class"]))),128))],2),m(P),m(v,{type:"justify-center","no-wrap":""},{default:f(()=>[m(D,{type:"submit",color:"info",label:"\u0E04\u0E49\u0E19\u0E2B\u0E32"}),m(D,{type:"reset",color:"danger",label:"\u0E25\u0E49\u0E32\u0E07"})]),_:1})]),_:1},8,["onSubmit","onReset"])}var Ve=T(ge,[["render",Ce]]);export{me as C,ke as D,xe as T,Ve as a};
