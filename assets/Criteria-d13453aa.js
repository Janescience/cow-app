import{z as D,p as C,m as k,l as L,i as g,R as F,F as t,o,c as n,w as c,s as T,J as U,L as w,n as r,K as R,d as s,e as m}from"./index-777e8ff9.js";import{_ as x}from"./CardBoxCollapse-ba1bc645.js";import{_ as q}from"./FormField-d7787d4c.js";import{D as S}from"./Cow-c49f70ee.js";import{D as P}from"./Recipe-d86b3496.js";import{D as j}from"./Vaccine-13969f55.js";const z={props:{grid:{type:String,default:"grid-cols-4"},forms:{type:Array,default:[]},search:{type:Object,default:null},collapse:Boolean,btnSubmitLabel:{type:String,default:"ค้นหา"},btnLoading:Boolean},components:{BaseButton:C,BaseButtons:k,BaseDivider:L,CardBoxCollapse:x,FormField:q,FormControl:g,FormCheckRadioPicker:F,DDLCow:S,DDLRecipe:P,DDLVaccine:j},methods:{submit(){this.$emit("search",this.search)},reset(){this.$emit("reset",this.search)}}};function N(A,E,a,J,K,d){const i=t("DDLCow"),p=t("DDLRecipe"),_=t("DDLVaccine"),y=t("FormCheckRadioPicker"),v=t("FormControl"),V=t("FormField"),h=t("BaseDivider"),u=t("BaseButton"),b=t("BaseButtons"),B=t("CardBoxCollapse");return o(),n(B,{title:"ค้นหา",icon:"",form:"",class:"mb-2","header-icon":"",collapse:a.collapse,onSubmit:m(d.submit,["prevent"]),onReset:m(d.reset,["prevent"])},{default:c(()=>[T("div",{class:r(["grid gap-5",[a.grid]])},[(o(!0),U(R,null,w(a.forms,e=>(o(),n(V,{key:e.value,label:e.label,class:r([e.class])},{default:c(()=>[e.type==="ddl"&&e.module==="cow"?(o(),n(i,{key:0,modelValue:a.search[e.value],"onUpdate:modelValue":l=>a.search[e.value]=l,valueType:e.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):e.type==="ddl-multiple"&&e.module==="cow"?(o(),n(i,{key:1,modelValue:a.search[e.value],"onUpdate:modelValue":l=>a.search[e.value]=l,valueType:e.valueType,mutiple:""},null,8,["modelValue","onUpdate:modelValue","valueType"])):e.type==="ddl"&&e.module==="recipe"?(o(),n(p,{key:2,modelValue:a.search[e.value],"onUpdate:modelValue":l=>a.search[e.value]=l,valueType:e.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):e.type==="ddl"&&e.module==="vaccine"?(o(),n(_,{key:3,modelValue:a.search[e.value],"onUpdate:modelValue":l=>a.search[e.value]=l,valueType:e.valueType},null,8,["modelValue","onUpdate:modelValue","valueType"])):e.type==="radio"?(o(),n(y,{key:4,modelValue:a.search[e.value],"onUpdate:modelValue":l=>a.search[e.value]=l,type:e.type,options:e.options,required:e.required},null,8,["modelValue","onUpdate:modelValue","type","options","required"])):(o(),n(v,{key:5,modelValue:a.search[e.value],"onUpdate:modelValue":l=>a.search[e.value]=l,icon:e.icon,options:e.options,type:e.type,required:e.required},null,8,["modelValue","onUpdate:modelValue","icon","options","type","required"]))]),_:2},1032,["label","class"]))),128))],2),s(h),s(b,{type:"justify-center","no-wrap":""},{default:c(()=>[s(u,{type:"submit",color:"info",label:a.btnSubmitLabel,loading:a.btnLoading,disabled:a.btnLoading},null,8,["label","loading","disabled"]),s(u,{type:"reset",color:"danger",label:"ล้าง"})]),_:1})]),_:1},8,["collapse","onSubmit","onReset"])}const W=D(z,[["render",N]]);export{W as C};