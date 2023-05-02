import{a as j,T as C,o as n,c as d,w as g,I as p,s as k,n as f,N as D,k as _,h as w,t as q,q as v,e as S,d as m,O as I,Y as O,y as b,z as L,E as o,p as N,m as A,l as z,i as $,K as E,J as P}from"./index-12b4016e.js";import{_ as H}from"./FormField-41447fb2.js";import{_ as J}from"./FormCheckRadioPicker-daaeed2d.js";import{D as K}from"./Cow-f5825df1.js";import{D as M}from"./Vaccine-79789b25.js";const Q=["onClick"],Y={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},G=k("p",null,"ไม่มีรายการ...",-1),W=[G],X={key:2,class:"text-center py-10 text-gray-500 dark:text-gray-400"},Z=k("p",null," กำลังโหลดข้อมูล...",-1),ee={__name:"CardBoxCollapse",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},rounded:{type:String,default:"md:rounded-2xl"},hasTable:Boolean,empty:Boolean,loading:Boolean,form:Boolean,hoverable:Boolean,modal:Boolean},emits:["header-icon-click","submit"],setup(a,{emit:l}){const e=a;var c=j(!1);const V=C(()=>e.form?"form":"div"),i=C(()=>{const r=[e.rounded,(e.modal,"dark:bg-gray-900")];return e.hoverable&&r.push("hover:shadow-lg transition-shadow duration-500"),r}),u=C(()=>c.value?"chevronDown":"chevronUp"),h=()=>{l("header-icon-click")},y=r=>{l("submit",r)},B=()=>{c.value=!c.value};return(r,x)=>(n(),d(O(v(V)),{class:f([v(i),"bg-white border shadow-lg border-gray-300 dark:border-gray-900"]),onSubmit:y},{default:g(()=>[a.title?(n(),p("header",{key:0,onClick:B,class:"flex items-stretch border-b border-gray-100 dark:border-gray-800"},[k("p",{class:f(["flex items-center py-3 grow font-bold",[a.icon?"px-4":"px-6"]])},[a.icon?(n(),d(D,{key:0,path:a.icon,class:"mr-3"},null,8,["path"])):_("",!0),w(" "+q(a.title),1)],2),v(u)?(n(),p("a",{key:0,href:"#",class:"flex items-center py-3 px-4 justify-center ring-blue-700 focus:ring","aria-label":"more options",onClick:S(h,["prevent"])},[m(D,{path:v(u),size:"18"},null,8,["path"])],8,Q)):_("",!0)])):_("",!0),a.empty?(n(),p("div",Y,W)):a.loading?(n(),p("div",X,[a.loading?(n(),d(D,{key:0,path:"dotsCircle",size:"22",class:"animate-spin"})):_("",!0),Z])):v(c)?(n(),p("div",{key:3,class:f({"p-6":!a.hasTable})},[I(r.$slots,"default")],2)):_("",!0)]),_:3},40,["class"]))}};async function te(a={}){let l="?";return a.type&&(l=l+`type=${a.type}&`),a.recipe&&(l=l+`recipe=${a.recipe}&`),a?l.replace(/&*$/,""):""}class ae{async all(l){const e=await te(l);return b.get("/recipe"+e).then(c=>c)}get(l){return b.get(`/recipe/${l}`)}create(l){return b.post("/recipe",l)}delete(l){return b.delete(`/recipe/${l}`)}update(l,e){return b.put(`/recipe/${l}`,e)}}const le=new ae;const ne={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){var a;return this.valueType==="object"&&(this.modelValue.recipe_data=(a=this.modelValue)==null?void 0:a.name),this.modelValue},set(a){this.$emit("update:modelValue",a)}},user(){return this.$store.state.auth.user}},methods:{async initialData(){const a={farm:this.user.farm._id};try{const l=await le.all(a);if(this.datas=[],l&&(this.datas=l.data.recipes,this.datas.map(e=>e.recipe_data=e.name)),this.defaultValue){const e=this.datas.filter(c=>c[this.defaultType]==this.defaultValue);e&&this.handleInput(this.reduceAction(e[0]))}}catch(l){this.datas=[],console.error("Error: "+l.message)}},reduceAction(a){return this.valueType==="object"?a:a[this.valueType]},handleInput(a){this.$emit("update:value",a),this.dataSelected=this.datas.find(l=>l.name===a),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},multiple:{default:!1,type:Boolean}}},oe={class:"relative"};function se(a,l,e,c,V,i){const u=o("mdicon"),h=o("v-select");return n(),p("div",oe,[m(h,{class:"ddl",clearable:e.clear,disabled:e.disabled,options:V.datas,reduce:i.reduceAction,label:"recipe_data",placeholder:"เลือกสูตรอาหาร",onInput:i.handleInput,modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=y=>i.value=y),dataSelected:e.dataSelected,multiple:e.multiple},{"no-options":g(()=>[m(u,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),w(" ไม่พบข้อมูล ")]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected","multiple"])])}const de=L(ne,[["render",se]]),ce={props:{grid:{type:String,default:"grid-cols-4"},forms:{type:Array,default:[]},search:{type:Object,default:null},collapse:Boolean,btnSubmitLabel:{type:String,default:"ค้นหา"},btnLoading:Boolean},components:{BaseButton:N,BaseButtons:A,BaseDivider:z,CardBoxCollapse:ee,FormField:H,FormControl:$,FormCheckRadioPicker:J,DDLCow:K,DDLRecipe:de,DDLVaccine:M},methods:{submit(){this.$emit("search",this.search)},reset(){this.$emit("reset",this.search)}}};function ie(a,l,e,c,V,i){const u=o("DDLCow"),h=o("DDLRecipe"),y=o("DDLVaccine"),B=o("FormCheckRadioPicker"),r=o("FormControl"),x=o("FormField"),U=o("BaseDivider"),T=o("BaseButton"),F=o("BaseButtons"),R=o("CardBoxCollapse");return n(),d(R,{title:"ค้นหา",icon:"",form:"",class:"mb-2","header-icon":"",collapse:e.collapse,onSubmit:S(i.submit,["prevent"]),onReset:S(i.reset,["prevent"])},{default:g(()=>[k("div",{class:f(["grid gap-5",[e.grid]])},[(n(!0),p(P,null,E(e.forms,t=>(n(),d(x,{key:t.value,label:t.label,class:f([t.class])},{default:g(()=>[t.type==="ddl"&&t.module==="cow"?(n(),d(u,{key:0,modelValue:e.search[t.value],"onUpdate:modelValue":s=>e.search[t.value]=s,valueType:t.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):t.type==="ddl-multiple"&&t.module==="cow"?(n(),d(u,{key:1,modelValue:e.search[t.value],"onUpdate:modelValue":s=>e.search[t.value]=s,valueType:t.valueType,mutiple:""},null,8,["modelValue","onUpdate:modelValue","valueType"])):t.type==="ddl"&&t.module==="recipe"?(n(),d(h,{key:2,modelValue:e.search[t.value],"onUpdate:modelValue":s=>e.search[t.value]=s,valueType:t.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):t.type==="ddl"&&t.module==="vaccine"?(n(),d(y,{key:3,modelValue:e.search[t.value],"onUpdate:modelValue":s=>e.search[t.value]=s,valueType:t.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):t.type==="radio"?(n(),d(B,{key:4,modelValue:e.search[t.value],"onUpdate:modelValue":s=>e.search[t.value]=s,type:t.type,options:t.options,required:t.required},null,8,["modelValue","onUpdate:modelValue","type","options","required"])):(n(),d(r,{key:5,modelValue:e.search[t.value],"onUpdate:modelValue":s=>e.search[t.value]=s,icon:t.icon,options:t.options,type:t.type,required:t.required},null,8,["modelValue","onUpdate:modelValue","icon","options","type","required"]))]),_:2},1032,["label","class"]))),128))],2),m(U),m(F,{type:"justify-center","no-wrap":""},{default:g(()=>[m(T,{type:"submit",color:"info",label:e.btnSubmitLabel,loading:e.btnLoading,disabled:e.btnLoading},null,8,["label","loading","disabled"]),m(T,{type:"reset",color:"danger",label:"ล้าง"})]),_:1})]),_:1},8,["collapse","onSubmit","onReset"])}const ye=L(ce,[["render",ie]]);export{ye as C,de as D,le as R};
