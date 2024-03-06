import{a as b,r as u,c as V,w as a,D as q,o as $,d as e,a2 as k,q as x,_ as d,e as p,i,l as m,m as f,n,C as P}from"./index-5292fd0b.js";import{_ as r}from"./FormField-d30f3da3.js";import{_ as S}from"./FormFilePicker-210056fb.js";import{_ as g}from"./SectionBottomOtherPages-63e670eb.js";import"./SectionTitle-1ac8fa7b.js";const v={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},A={__name:"ProfileView",setup(y){const c=b(["Admin","Profile"]),t=u({name:"",email:""}),s=u({password_current:"",password:"",password_confirmation:""}),_=()=>{mainStore.setUser(t)},w=()=>{};return(C,o)=>($(),V(q,null,{default:a(()=>[e(k,{"title-stack":c.value},null,8,["title-stack"]),e(P,null,{default:a(()=>[x("div",v,[e(d,{title:"Edit Profile",icon:"accountCircle",form:"",onSubmit:p(_,["prevent"])},{default:a(()=>[e(r,{label:"Avatar",help:"Max 500kb"},{default:a(()=>[e(S)]),_:1}),e(r,{label:"Name",help:"Required. Your name"},{default:a(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=l=>t.name=l),icon:"account",name:"username",required:"",autocomplete:"username"},null,8,["modelValue"])]),_:1}),e(r,{label:"E-mail",help:"Required. Your e-mail"},{default:a(()=>[e(i,{modelValue:t.email,"onUpdate:modelValue":o[1]||(o[1]=l=>t.email=l),icon:"mail",type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue"])]),_:1}),e(m),e(f,null,{default:a(()=>[e(n,{color:"info",type:"submit",label:"Submit"}),e(n,{color:"info",label:"Options",outline:""})]),_:1})]),_:1},8,["onSubmit"]),e(d,{title:"Change Password",icon:"lock",form:"",onSubmit:p(w,["prevent"])},{default:a(()=>[e(r,{label:"Current password",help:"Required. Your current password"},{default:a(()=>[e(i,{modelValue:s.password_current,"onUpdate:modelValue":o[2]||(o[2]=l=>s.password_current=l),icon:"asterisk",name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),_:1}),e(m),e(r,{label:"New password",help:"Required. New password"},{default:a(()=>[e(i,{modelValue:s.password,"onUpdate:modelValue":o[3]||(o[3]=l=>s.password=l),icon:"formTextboxPassword",name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}),e(r,{label:"Confirm password",help:"Required. New password one more time"},{default:a(()=>[e(i,{modelValue:s.password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=l=>s.password_confirmation=l),icon:"formTextboxPassword",name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}),e(m),e(f,null,{default:a(()=>[e(n,{type:"submit",color:"info",label:"Submit"}),e(n,{color:"info",label:"Options",outline:""})]),_:1})]),_:1},8,["onSubmit"])])]),_:1}),e(g)]),_:1}))}};export{A as default};
