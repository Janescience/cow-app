import{S as r,o as t,J as l,K as f,L as x,n as i,H as h,ac as k,q as d,s,x as V,t as g}from"./index-51c79a7a.js";const v=["type","name","value","disabled"],B=s("span",{class:"check"},null,-1),S={class:"control-label"},D={__name:"FormCheckRadioPicker",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null},disabled:Boolean},emits:["update:modelValue"],setup(e,{emit:m}){const n=e,a=r({get:()=>n.modelValue,set:o=>{m("update:modelValue",o)}}),p=r(()=>n.type==="radio"?"radio":"checkbox");return(o,u)=>(t(),l("div",{class:i(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[(t(!0),l(f,null,x(e.options,(y,c)=>(t(),l("label",{key:c,class:i([e.type,"mr-6 mb-3 last:mr-0"])},[h(s("input",{"onUpdate:modelValue":u[0]||(u[0]=b=>V(a)?a.value=b:null),type:d(p),name:e.name,value:c,disabled:e.disabled},null,8,v),[[k,d(a)]]),B,s("span",S,g(y),1)],2))),128))],2))}};export{D as _};