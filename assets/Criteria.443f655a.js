import{g as R,X as H,o as n,i as u,w as _,d as h,H as L,Y as z,Z as O,N as Y,y as $,k as E,m as q,_ as Q,$ as M,a0 as G,Q as d,a as i,b as f,t as C,F as v,G as B,v as k,n as w,T as X,c as U,U as A,e as I,f as S,l as F,A as Z,h as P,O as J,x as K,p as W}from"./index.69daac65.js";import{_ as N}from"./BaseButtons.70e24a77.js";import{_ as j}from"./CardBoxModal.29352803.js";import{_ as ee,a as te}from"./FormField.977b1f59.js";import{a as T}from"./auth-header.517986b8.js";const ae={class:"checkbox"},le=h("span",{class:"check"},null,-1),ne={__name:"TableCheckboxCell",props:{type:{type:String,default:"td"},isChecked:{type:Boolean,default:!1}},emits:["checked"],setup(t,{emit:e}){const a=t,o=R(a.isChecked);return H(o,c=>{e("checked",c)}),(c,s)=>(n(),u(O(a.type),{class:"checkbox-cell"},{default:_(()=>[h("label",ae,[L(h("input",{"onUpdate:modelValue":s[0]||(s[0]=m=>o.value=m),type:"checkbox"},null,512),[[z,o.value]]),le])]),_:1}))}},se={data(){return{textConfirm:"",modalConfirm:!1,funcConfirm:Function,idConfirm:null,dataSelectedConfirm:[],perPage:10,currentPage:0,checkedRows:[],loading:!1}},props:{title:{type:String,default:""},items:{type:Array,default:[]},datas:{type:Array,default:[]},buttons:{type:Array,default:[]},hasCheckbox:Boolean,checkedData:{type:Object,default:null},loading:Boolean},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const t=[];for(let e=0;e<this.numPages;e++)t.push(e);return t}},components:{BaseButton:$,BaseButtons:N,CardBox:E,CardBoxModal:j,TableCheckboxCell:ne,UserAvatar:q,BaseLevel:Q},methods:{getValue(t,e){const a=this.getPropByString(t,e.value);if(!e.type)return e.func?e.func(t):a;switch(e.type){case"number":return this.formatCurrency(a);case"date":return this.formatDate(a);case"image":return a}},getPropByString(t,e){if(!e)return t;let a,o=e.split(".");for(var c=0,s=o.length-1;c<s;c++){a=o[c];var m=t[a];if(m!==void 0)t=m;else break}return t[o[c]]},btnClick(t,e){switch(t){case"edit":this.edit(e.data);break;case"delete":this.confirm("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E19\u0E35\u0E49 \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?",e.id,null,this.removeData);break;case"detail":this.detail(e.path+"/"+e.id);break}},removeData(){this.$emit("delete",this.idConfirm)},removeSelected(){this.$emit("deleteSelected",this.dataSelectedConfirm)},edit(t){this.$emit("edit",t)},detail(t){this.$router.push(t)},confirm(t,e,a,o){this.textConfirm=t,this.funcConfirm=o,this.idConfirm=e,this.dataSelectedConfirm=a,this.modalConfirm=!0},checked(t,e){t?(e.checked=!0,this.checkedRows.push(e)):(e.checked=!1,this.checkedRows=this.removeArr(this.checkedRows,a=>a._id===e._id))},countChecked(){return this.checkedRows.length>0?"(\u0E40\u0E25\u0E37\u0E2D\u0E01 "+this.checkedRows.length+" \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23)":""},removeArr(t,e){const a=[];return t.forEach(o=>{e(o)||a.push(o)}),a},formatDate(t){return t?M(new Date(t)).format("DD/MM/YYYY"):""},formatCurrency(t){return G(t).format(0,0)}}},re={key:0,class:"p-3 bg-gray-100/50 dark:bg-gray-800"},oe={class:"overflow-x-auto"},ce={key:0,class:"text-center whitespace-nowrap"},ie=h("th",null,null,-1),de=["data-label"],ue={key:1},he={key:1,class:"lg:w-6 whitespace-nowrap"},me={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"};function fe(t,e,a,o,c,s){const m=d("CardBoxModal"),p=d("BaseButton"),g=d("BaseButtons"),x=d("TableCheckboxCell"),y=d("UserAvatar"),D=d("BaseLevel"),V=d("CardBox");return n(),i(v,null,[f(m,{modelValue:c.modalConfirm,"onUpdate:modelValue":e[0]||(e[0]=r=>c.modalConfirm=r),title:"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","button-label":"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",onConfirm:c.funcConfirm,"has-cancel":"","has-button":""},{default:_(()=>[h("p",null,C(c.textConfirm),1)]),_:1},8,["modelValue","onConfirm"]),s.itemsPaginated.length>0?(n(),u(V,{key:0,title:a.title+" "+s.countChecked(),class:"shadow-lg","has-table":"","header-icon":""},{default:_(()=>[c.checkedRows.length>0?(n(),i("div",re,[(n(!0),i(v,null,B(c.checkedRows,r=>(n(),i("span",{key:r._id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1"},C((a.checkedData.code?s.getValue(r,a.checkedData.code)+" : ":"")+s.getValue(r,a.checkedData.label)),1))),128)),f(g,{type:"justify-start lg:justify-end","no-wrap":""},{default:_(()=>[f(p,{color:"danger",label:"\u0E25\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",onClick:e[1]||(e[1]=r=>s.confirm("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E25\u0E1A\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?",null,c.checkedRows,s.removeSelected))})]),_:1})])):k("",!0),h("div",oe,[h("table",null,[h("thead",null,[h("tr",null,[a.hasCheckbox?(n(),i("th",ce,"\u0E40\u0E25\u0E37\u0E2D\u0E01")):k("",!0),(n(!0),i(v,null,B(a.datas,r=>(n(),i("th",{key:r.label,class:w(["whitespace-nowrap",[r.class]])},C(r.label),3))),128)),ie])]),h("tbody",null,[(n(!0),i(v,null,B(s.itemsPaginated,r=>(n(),i("tr",{key:r._id},[a.hasCheckbox?(n(),u(x,{key:0,isChecked:r.checked,class:"text-center border-b-0 lg:w-6 before:hidden",onChecked:l=>s.checked(l,r)},null,8,["isChecked","onChecked"])):k("",!0),(n(!0),i(v,null,B(a.datas,l=>(n(),i("td",{key:l.label,"data-label":l.label,class:w(["whitespace-nowrap",[l.class]])},[l.type==="image"?(n(),u(y,{key:0,avatar:s.getValue(r,l),class:"w-36 mx-auto lg:h-20 lg:w-20"},null,8,["avatar"])):(n(),i("span",ue,C(s.getValue(r,l)),1))],10,de))),128)),a.buttons.length>0?(n(),i("td",he,[f(g,{type:"justify-end lg:justify-start","no-wrap":""},{default:_(()=>[(n(!0),i(v,null,B(a.buttons,l=>L((n(),u(p,{key:l.label,color:l.color,label:l.label,onClick:b=>l.type==="oth"?l.func(r):s.btnClick(l.type,{data:r,id:r._id,path:l.path})},null,8,["color","label","onClick"])),[[X,l.condition?l.condition(r):!0]])),128))]),_:2},1024)])):k("",!0)]))),128))])])]),h("div",me,[f(D,null,{default:_(()=>[f(g,null,{default:_(()=>[(n(!0),i(v,null,B(s.pagesList,r=>(n(),u(p,{key:r,active:r===c.currentPage,label:r+1,small:"",onClick:l=>c.currentPage=r},null,8,["active","label","onClick"]))),128))]),_:1}),h("small",null,"\u0E2B\u0E19\u0E49\u0E32 "+C(s.currentPageHuman)+" \u0E08\u0E32\u0E01 "+C(s.numPages),1)]),_:1})])]),_:1},8,["title"])):a.loading?(n(),u(V,{key:1,loading:""})):(n(),u(V,{key:2,empty:""}))],64)}var Le=Y(se,[["render",fe]]);const _e=["onClick"],ye={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},pe=h("p",null,"\u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23...",-1),ge=[pe],ke={key:2,class:"text-center py-10 text-gray-500 dark:text-gray-400"},be=h("p",null," \u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25...",-1),ve={__name:"CardBoxCollapse",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},rounded:{type:String,default:"md:rounded-2xl"},hasTable:Boolean,empty:Boolean,loading:Boolean,form:Boolean,hoverable:Boolean,modal:Boolean},emits:["header-icon-click","submit"],setup(t,{emit:e}){const a=t;var o=R(!1);const c=U(()=>a.form?"form":"div"),s=U(()=>{const y=[a.rounded,(a.modal,"dark:bg-gray-900")];return a.hoverable&&y.push("hover:shadow-lg transition-shadow duration-500"),y}),m=U(()=>o.value?"chevronDown":"chevronUp"),p=()=>{e("header-icon-click")},g=y=>{e("submit",y)},x=()=>{o.value=!o.value};return(y,D)=>(n(),u(O(S(c)),{class:w([S(s),"bg-white border shadow-lg border-gray-300 dark:border-gray-900"]),onSubmit:g},{default:_(()=>[t.title?(n(),i("header",{key:0,onClick:x,class:"flex items-stretch border-b border-gray-100 dark:border-gray-800"},[h("p",{class:w(["flex items-center py-3 grow font-bold",[t.icon?"px-4":"px-6"]])},[t.icon?(n(),u(A,{key:0,path:t.icon,class:"mr-3"},null,8,["path"])):k("",!0),I(" "+C(t.title),1)],2),S(m)?(n(),i("a",{key:0,href:"#",class:"flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring","aria-label":"more options",onClick:F(p,["prevent"])},[f(A,{path:S(m),size:"18"},null,8,["path"])],8,_e)):k("",!0)])):k("",!0),t.empty?(n(),i("div",ye,ge)):t.loading?(n(),i("div",ke,[t.loading?(n(),u(A,{key:0,path:"dotsCircle",size:"22",class:"animate-spin"})):k("",!0),be])):S(o)?(n(),i("div",{key:3,class:w({"p-6":!t.hasTable})},[Z(y.$slots,"default")],2)):k("",!0)]),_:3},40,["class"]))}};async function Ce(t={}){let e="?";if(t.farm&&(e=e+`farm=${t.farm}&`),t.flag&&(e=e+`flag=${t.flag}&`),t.code&&(e=e+`code=${t.code}&`),t.name&&(e=e+`name=${t.name}&`),t.status&&(e=e+`status=${t.status}&`),t.birthDate){const a=M(new Date(t.birthDate)).format("YYYY-MM-DD");e=e+`birthDate=${a}&`}return t.corral&&(e=e+`corral=${t.corral}&`),t?e.replace(/&*$/,""):""}class Be{async all(e){const a=await Ce(e);return P.get("/cow"+a,{headers:T()}).then(o=>o)}get(e){return P.get(`/cow/${e}`,{headers:T()})}create(e){return e.birthDate&&(e.birthDate=M(new Date(e.birthDate)).format("YYYY-MM-DD")),P.post("/cow",e,{headers:T()})}delete(e){return P.delete(`/cow/${e}`,{headers:T()})}update(e,a){return P.put(`/cow/${e}`,a,{headers:T()})}}var we=new Be;const xe={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},methods:{async initialData(){const t={farm:J().farm._id,flag:"Y"};try{const e=await we.all(t);if(this.datas=[],e&&(this.datas=e.data.cows,this.datas.map(a=>a.cow_data=a.code+" : "+a.name)),this.defaultValue){const a=this.datas.filter(o=>o[this.defaultType]==this.defaultValue);a&&this.handleInput(this.reduceAction(a[0]))}}catch(e){this.datas=[],console.error("Error: "+e.message)}},reduceAction(t){return this.valueType==="object"?t:t[this.valueType]},handleInput(t){this.$emit("update:value",t),this.dataSelected=this.datas.find(e=>e.code===t||e.name===t),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},multiple:{default:!1,type:Boolean}}},De={class:"relative"},Ve=I(" \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");function Se(t,e,a,o,c,s){const m=d("mdicon"),p=d("v-select");return n(),i("div",De,[f(p,{class:"ddl",clearable:a.clear,disabled:a.disabled,options:c.datas,reduce:s.reduceAction,label:"cow_data",placeholder:"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04",onInput:s.handleInput,modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=g=>s.value=g),dataSelected:a.dataSelected,multiple:a.multiple},{"no-options":_(()=>[f(m,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),Ve]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected","multiple"])])}var Pe=Y(xe,[["render",Se]]);const Te={props:{grid:{type:String,default:"grid-cols-4"},forms:{type:Array,default:[]},search:{type:Object,default:null},collapse:Boolean},components:{BaseButton:$,BaseButtons:N,BaseDivider:K,CardBoxCollapse:ve,FormField:ee,FormControl:W,FormCheckRadioPicker:te,DDLCow:Pe},methods:{submit(){this.$emit("search",this.search)},reset(){this.$emit("reset",this.search)}}};function Ue(t,e,a,o,c,s){const m=d("DDLCow"),p=d("FormCheckRadioPicker"),g=d("FormControl"),x=d("FormField"),y=d("BaseDivider"),D=d("BaseButton"),V=d("BaseButtons"),r=d("CardBoxCollapse");return n(),u(r,{title:"\u0E04\u0E49\u0E19\u0E2B\u0E32",icon:"",form:"",class:"mb-3","header-icon":"",collapse:a.collapse,onSubmit:F(s.submit,["prevent"]),onReset:F(s.reset,["prevent"])},{default:_(()=>[h("div",{class:w(["grid gap-5",[a.grid]])},[(n(!0),i(v,null,B(a.forms,l=>(n(),u(x,{key:l.value,label:l.label,class:w([l.class])},{default:_(()=>[l.type==="ddl"&&l.module==="cow"?(n(),u(m,{key:0,modelValue:a.search[l.value],"onUpdate:modelValue":b=>a.search[l.value]=b,valueType:l.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):l.type==="ddl-multiple"&&l.module==="cow"?(n(),u(m,{key:1,modelValue:a.search[l.value],"onUpdate:modelValue":b=>a.search[l.value]=b,valueType:l.valueType,mutiple:""},null,8,["modelValue","onUpdate:modelValue","valueType"])):l.type==="radio"?(n(),u(p,{key:2,modelValue:a.search[l.value],"onUpdate:modelValue":b=>a.search[l.value]=b,type:l.type,options:l.options},null,8,["modelValue","onUpdate:modelValue","type","options"])):(n(),u(g,{key:3,modelValue:a.search[l.value],"onUpdate:modelValue":b=>a.search[l.value]=b,icon:l.icon,options:l.options,type:l.type},null,8,["modelValue","onUpdate:modelValue","icon","options","type"]))]),_:2},1032,["label","class"]))),128))],2),f(y),f(V,{type:"justify-center","no-wrap":""},{default:_(()=>[f(D,{type:"submit",color:"info",label:"\u0E04\u0E49\u0E19\u0E2B\u0E32"}),f(D,{type:"reset",color:"danger",label:"\u0E25\u0E49\u0E32\u0E07"})]),_:1})]),_:1},8,["collapse","onSubmit","onReset"])}var Oe=Y(Te,[["render",Ue]]);export{we as C,Pe as D,Le as T,Oe as a};
