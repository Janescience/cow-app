import{t as c,o as a,l,F as b,B as h,n as i,C as k,D as x,q as m,m as s,E as V,G as g}from"./index.b4fea2ce.js";const v=["type","name","value"],B=s("span",{class:"check"},null,-1),D={class:"control-label"},j={__name:"FormCheckRadioPicker",props:{options:{type:Object,default:()=>{}},name:{type:String,required:!0},type:{type:String,default:"checkbox"},column:Boolean,modelValue:{type:[Object,Array,String,Number],default:null}},emits:["update:modelValue"],setup(e,{emit:d}){const n=e,t=c({get:()=>n.modelValue,set:o=>{d("update:modelValue",o)}}),p=c(()=>n.type==="radio"?"radio":"checkbox");return(o,r)=>(a(),l("div",{class:i(["flex justify-start flex-wrap -mb-3",{"flex-col":e.column}])},[(a(!0),l(b,null,h(e.options,(y,u)=>(a(),l("label",{key:u,class:i([e.type,"mr-6 mb-3 last:mr-0"])},[k(s("input",{"onUpdate:modelValue":r[0]||(r[0]=f=>V(t)?t.value=f:null),type:m(p),name:e.name,value:u},null,8,v),[[x,m(t)]]),B,s("span",D,g(y),1)],2))),128))],2))}};export{j as _};
