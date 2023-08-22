import{y as r,z as B,F as n,o as s,J as D,d as u,w as m,h as L,p as F,m as w,l as R,i as U,R as j,c as i,s as q,L as x,n as V,K as O,e as b}from"./index-bc93aaa5.js";import{_ as A}from"./CardBoxCollapse-9315f2c2.js";import{_ as I}from"./FormField-ffdf41b4.js";import{D as N}from"./Cow-ae223664.js";import{D as P}from"./Vaccine-237a4d4b.js";async function z(l={}){let t="?";return l.type&&(t=t+`type=${l.type}&`),l.recipe&&(t=t+`recipe=${l.recipe}&`),l?t.replace(/&*$/,""):""}class E{async all(t){const a=await z(t);return r.get("/recipe"+a).then(o=>o)}get(t){return r.get(`/recipe/${t}`)}create(t){return r.post("/recipe",t)}delete(t){return r.delete(`/recipe/${t}`)}update(t,a){return r.put(`/recipe/${t}`,a)}}const J=new E;const K={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){var l;return this.valueType==="object"&&Object.keys(this.modelValue).length>0&&(this.modelValue.recipe_data=(l=this.modelValue)==null?void 0:l.name),this.modelValue},set(l){this.$emit("update:modelValue",l)}},user(){return this.$store.state.auth.user}},methods:{async initialData(){const l={farm:this.user.farm._id};try{const t=await J.all(l);if(this.datas=[],t&&(this.datas=t.data.recipes,this.datas.map(a=>a.recipe_data=a.name)),this.defaultValue){const a=this.datas.filter(o=>o[this.defaultType]==this.defaultValue);a&&this.handleInput(this.reduceAction(a[0]))}}catch(t){this.datas=[],console.error("Error: "+t.message)}},reduceAction(l){return this.valueType==="object"?l:l[this.valueType]},handleInput(l){this.$emit("update:value",l),this.dataSelected=this.datas.find(t=>t.name===l),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:{}},multiple:{default:!1,type:Boolean}}},M={class:"relative"};function Q(l,t,a,o,y,c){const p=n("mdicon"),_=n("v-select");return s(),D("div",M,[u(_,{class:"ddl",clearable:a.clear,disabled:a.disabled,options:y.datas,reduce:c.reduceAction,label:"recipe_data",placeholder:"เลือกสูตรอาหาร",onInput:c.handleInput,modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=h=>c.value=h),dataSelected:a.dataSelected,multiple:a.multiple},{"no-options":m(()=>[u(p,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),L(" ไม่พบข้อมูล ")]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected","multiple"])])}const $=B(K,[["render",Q]]),G={props:{grid:{type:String,default:"grid-cols-4"},forms:{type:Array,default:[]},search:{type:Object,default:null},collapse:Boolean,btnSubmitLabel:{type:String,default:"ค้นหา"},btnLoading:Boolean},components:{BaseButton:F,BaseButtons:w,BaseDivider:R,CardBoxCollapse:A,FormField:I,FormControl:U,FormCheckRadioPicker:j,DDLCow:N,DDLRecipe:$,DDLVaccine:P},methods:{submit(){this.$emit("search",this.search)},reset(){this.$emit("reset",this.search)}}};function H(l,t,a,o,y,c){const p=n("DDLCow"),_=n("DDLRecipe"),h=n("DDLVaccine"),f=n("FormCheckRadioPicker"),g=n("FormControl"),C=n("FormField"),T=n("BaseDivider"),v=n("BaseButton"),k=n("BaseButtons"),S=n("CardBoxCollapse");return s(),i(S,{title:"ค้นหา",icon:"",form:"",class:"mb-2","header-icon":"",collapse:a.collapse,onSubmit:b(c.submit,["prevent"]),onReset:b(c.reset,["prevent"])},{default:m(()=>[q("div",{class:V(["grid gap-5",[a.grid]])},[(s(!0),D(O,null,x(a.forms,e=>(s(),i(C,{key:e.value,label:e.label,class:V([e.class])},{default:m(()=>[e.type==="ddl"&&e.module==="cow"?(s(),i(p,{key:0,modelValue:a.search[e.value],"onUpdate:modelValue":d=>a.search[e.value]=d,valueType:e.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):e.type==="ddl-multiple"&&e.module==="cow"?(s(),i(p,{key:1,modelValue:a.search[e.value],"onUpdate:modelValue":d=>a.search[e.value]=d,valueType:e.valueType,mutiple:""},null,8,["modelValue","onUpdate:modelValue","valueType"])):e.type==="ddl"&&e.module==="recipe"?(s(),i(_,{key:2,modelValue:a.search[e.value],"onUpdate:modelValue":d=>a.search[e.value]=d,valueType:e.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):e.type==="ddl"&&e.module==="vaccine"?(s(),i(h,{key:3,modelValue:a.search[e.value],"onUpdate:modelValue":d=>a.search[e.value]=d,valueType:e.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):e.type==="radio"?(s(),i(f,{key:4,modelValue:a.search[e.value],"onUpdate:modelValue":d=>a.search[e.value]=d,type:e.type,options:e.options,required:e.required},null,8,["modelValue","onUpdate:modelValue","type","options","required"])):(s(),i(g,{key:5,modelValue:a.search[e.value],"onUpdate:modelValue":d=>a.search[e.value]=d,icon:e.icon,options:e.options,type:e.type,required:e.required},null,8,["modelValue","onUpdate:modelValue","icon","options","type","required"]))]),_:2},1032,["label","class"]))),128))],2),u(T),u(k,{type:"justify-center","no-wrap":""},{default:m(()=>[u(v,{type:"submit",color:"info",label:a.btnSubmitLabel,loading:a.btnLoading,disabled:a.btnLoading},null,8,["label","loading","disabled"]),u(v,{type:"reset",color:"danger",label:"ล้าง"})]),_:1})]),_:1},8,["collapse","onSubmit","onReset"])}const ae=B(G,[["render",H]]);export{ae as C,$ as D,J as R};
