import{a as j,U as C,o as n,c,w as f,I as p,s as B,n as g,N as S,k as _,h as T,t as I,q as v,e as D,d as m,O as L,$,y as b,B as F,E as s,p as O,m as N,l as A,i as q,K as z,J as E}from"./index-26f3a63b.js";import{_ as P}from"./FormField-8009c01d.js";import{_ as H}from"./FormCheckRadioPicker-9c8f97a6.js";import{D as J}from"./Cow-a2e52179.js";const K=["onClick"],M={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},Q=B("p",null,"ไม่มีรายการ...",-1),G=[Q],W={key:2,class:"text-center py-10 text-gray-500 dark:text-gray-400"},X=B("p",null," กำลังโหลดข้อมูล...",-1),Y={__name:"CardBoxCollapse",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},rounded:{type:String,default:"md:rounded-2xl"},hasTable:Boolean,empty:Boolean,loading:Boolean,form:Boolean,hoverable:Boolean,modal:Boolean},emits:["header-icon-click","submit"],setup(t,{emit:a}){const e=t;var o=j(!1);const k=C(()=>e.form?"form":"div"),i=C(()=>{const r=[e.rounded,(e.modal,"dark:bg-gray-900")];return e.hoverable&&r.push("hover:shadow-lg transition-shadow duration-500"),r}),u=C(()=>o.value?"chevronDown":"chevronUp"),h=()=>{a("header-icon-click")},y=r=>{a("submit",r)},V=()=>{o.value=!o.value};return(r,x)=>(n(),c($(v(k)),{class:g([v(i),"bg-white border shadow-lg border-gray-300 dark:border-gray-900"]),onSubmit:y},{default:f(()=>[t.title?(n(),p("header",{key:0,onClick:V,class:"flex items-stretch border-b border-gray-100 dark:border-gray-800"},[B("p",{class:g(["flex items-center py-3 grow font-bold",[t.icon?"px-4":"px-6"]])},[t.icon?(n(),c(S,{key:0,path:t.icon,class:"mr-3"},null,8,["path"])):_("",!0),T(" "+I(t.title),1)],2),v(u)?(n(),p("a",{key:0,href:"#",class:"flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring","aria-label":"more options",onClick:D(h,["prevent"])},[m(S,{path:v(u),size:"18"},null,8,["path"])],8,K)):_("",!0)])):_("",!0),t.empty?(n(),p("div",M,G)):t.loading?(n(),p("div",W,[t.loading?(n(),c(S,{key:0,path:"dotsCircle",size:"22",class:"animate-spin"})):_("",!0),X])):v(o)?(n(),p("div",{key:3,class:g({"p-6":!t.hasTable})},[L(r.$slots,"default")],2)):_("",!0)]),_:3},40,["class"]))}};async function Z(t={}){let a="?";return t.type&&(a=a+`type=${t.type}&`),t.recipe&&(a=a+`recipe=${t.recipe}&`),t?a.replace(/&*$/,""):""}class ee{async all(a){const e=await Z(a);return b.get("/recipe"+e).then(o=>o)}get(a){return b.get(`/recipe/${a}`)}create(a){return b.post("/recipe",a)}delete(a){return b.delete(`/recipe/${a}`)}update(a,e){return b.put(`/recipe/${a}`,e)}}const te=new ee;const ae={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){var t;return this.valueType==="object"&&(this.modelValue.recipe_data=(t=this.modelValue)==null?void 0:t.name),this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},methods:{async initialData(){const t={farm:this.user.farm._id};try{const a=await te.all(t);if(this.datas=[],a&&(this.datas=a.data.recipes,this.datas.map(e=>e.recipe_data=e.name)),this.defaultValue){const e=this.datas.filter(o=>o[this.defaultType]==this.defaultValue);e&&this.handleInput(this.reduceAction(e[0]))}}catch(a){this.datas=[],console.error("Error: "+a.message)}},reduceAction(t){return this.valueType==="object"?t:t[this.valueType]},handleInput(t){this.$emit("update:value",t),this.dataSelected=this.datas.find(a=>a.name===t),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},multiple:{default:!1,type:Boolean}}},le={class:"relative"};function ne(t,a,e,o,k,i){const u=s("mdicon"),h=s("v-select");return n(),p("div",le,[m(h,{class:"ddl",clearable:e.clear,disabled:e.disabled,options:k.datas,reduce:i.reduceAction,label:"recipe_data",placeholder:"เลือกสูตรอาหาร",onInput:i.handleInput,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=y=>i.value=y),dataSelected:e.dataSelected,multiple:e.multiple},{"no-options":f(()=>[m(u,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),T(" ไม่พบข้อมูล ")]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected","multiple"])])}const se=F(ae,[["render",ne]]),oe={props:{grid:{type:String,default:"grid-cols-4"},forms:{type:Array,default:[]},search:{type:Object,default:null},collapse:Boolean,btnSubmitLabel:{type:String,default:"ค้นหา"}},components:{BaseButton:O,BaseButtons:N,BaseDivider:A,CardBoxCollapse:Y,FormField:P,FormControl:q,FormCheckRadioPicker:H,DDLCow:J,DDLRecipe:se},methods:{submit(){this.$emit("search",this.search)},reset(){this.$emit("reset",this.search)}}};function ce(t,a,e,o,k,i){const u=s("DDLCow"),h=s("DDLRecipe"),y=s("FormCheckRadioPicker"),V=s("FormControl"),r=s("FormField"),x=s("BaseDivider"),w=s("BaseButton"),U=s("BaseButtons"),R=s("CardBoxCollapse");return n(),c(R,{title:"ค้นหา",icon:"",form:"",class:"mb-2","header-icon":"",collapse:e.collapse,onSubmit:D(i.submit,["prevent"]),onReset:D(i.reset,["prevent"])},{default:f(()=>[B("div",{class:g(["grid gap-5",[e.grid]])},[(n(!0),p(E,null,z(e.forms,l=>(n(),c(r,{key:l.value,label:l.label,class:g([l.class])},{default:f(()=>[l.type==="ddl"&&l.module==="cow"?(n(),c(u,{key:0,modelValue:e.search[l.value],"onUpdate:modelValue":d=>e.search[l.value]=d,valueType:l.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):l.type==="ddl-multiple"&&l.module==="cow"?(n(),c(u,{key:1,modelValue:e.search[l.value],"onUpdate:modelValue":d=>e.search[l.value]=d,valueType:l.valueType,mutiple:""},null,8,["modelValue","onUpdate:modelValue","valueType"])):l.type==="ddl"&&l.module==="recipe"?(n(),c(h,{key:2,modelValue:e.search[l.value],"onUpdate:modelValue":d=>e.search[l.value]=d,valueType:l.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):l.type==="radio"?(n(),c(y,{key:3,modelValue:e.search[l.value],"onUpdate:modelValue":d=>e.search[l.value]=d,type:l.type,options:l.options},null,8,["modelValue","onUpdate:modelValue","type","options"])):(n(),c(V,{key:4,modelValue:e.search[l.value],"onUpdate:modelValue":d=>e.search[l.value]=d,icon:l.icon,options:l.options,type:l.type},null,8,["modelValue","onUpdate:modelValue","icon","options","type"]))]),_:2},1032,["label","class"]))),128))],2),m(x),m(U,{type:"justify-center","no-wrap":""},{default:f(()=>[m(w,{type:"submit",color:"info",label:e.btnSubmitLabel},null,8,["label"]),m(w,{type:"reset",color:"danger",label:"ล้าง"})]),_:1})]),_:1},8,["collapse","onSubmit","onReset"])}const pe=F(oe,[["render",ce]]);export{pe as C,se as D,te as R};
