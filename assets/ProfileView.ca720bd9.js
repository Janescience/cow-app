import{Z as m,a5 as k,y as C,N as P,e as U,a6 as q,_ as g,a7 as M,Q as _,o as y,c as S,w as t,b as e,p as c,t as N,a as B,r as x,P as A,a0 as R,d as V,g as u,k as b,l as f,S as T}from"./index.13a668bc.js";import{_ as i}from"./FormField.812a9144.js";import{_ as j}from"./FormFilePicker.38875edf.js";import{_ as E}from"./SectionBottomOtherPages.11203441.js";import{_ as v}from"./BaseButtons.5b9a86c4.js";import{_ as F}from"./FormCheckRadioPicker.f4b62f40.js";import{a as d}from"./auth-header.2a904230.js";import"./SectionTitle.7f41b644.js";class L{all(){return m.get("/member",{headers:d()}).then(a=>(k(a.data.data.length),C().setCountMember(a.data.data.length),a))}getAll(a){return a||(a=""),m.get("/member?search="+a,{headers:d()})}get(a){return m.get(`/member/${a}`,{headers:d()})}create(a){return m.post("/member",a,{headers:d()})}delete(a){return m.delete(`/member/${a}`,{headers:d()})}update(a,p){return m.put(`/member?memberId=${a}&memberNewName=${p}`,null,{headers:d()})}}var Y=new L;const D={data(){return{userSwitchVal:[],user:{}}},created(){this.getMember()},methods:{async getMember(){const l=await Y.get(this.$route.params.id);l.data&&(this.user=l.data.data)}},components:{BaseLevel:U,UserAvatarCurrentUser:q,CardBox:g,FormCheckRadioPicker:F,PillTag:M}},O={class:"space-y-3 text-center md:text-left lg:mx-12"},H={class:"text-2xl"},I={class:"flex justify-center md:block"};function Q(l,a,p,n,o,$){const w=_("UserAvatarCurrentUser"),h=_("PillTag"),r=_("BaseLevel"),s=_("CardBox");return y(),S(s,{rounded:""},{default:t(()=>[e(r,{type:"justify-around lg:justify-center"},{default:t(()=>[e(w,{class:"lg:mx-6 w-24",username:l.$route.params.id},null,8,["username"]),c("div",O,[c("h1",H,[c("b",null,N(o.user.name),1)]),c("div",I,[e(h,{text:"Verified",type:"info",icon:"checkDecagram"})])])]),_:1})]),_:1})}var Z=P(D,[["render",Q]]);const z={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},re={__name:"ProfileView",setup(l){const a=C(),p=B(["Admin","Profile"]),n=x({name:a.userName,email:a.userEmail}),o=x({password_current:"",password:"",password_confirmation:""}),$=()=>{a.setUser(n)},w=()=>{};return(h,r)=>(y(),S(A,null,{default:t(()=>[e(R,{"title-stack":p.value},null,8,["title-stack"]),e(Z),e(T,null,{default:t(()=>[c("div",z,[e(g,{title:"Edit Profile",icon:"accountCircle",form:"",onSubmit:V($,["prevent"])},{default:t(()=>[e(i,{label:"Avatar",help:"Max 500kb"},{default:t(()=>[e(j)]),_:1}),e(i,{label:"Name",help:"Required. Your name"},{default:t(()=>[e(u,{modelValue:n.name,"onUpdate:modelValue":r[0]||(r[0]=s=>n.name=s),icon:"account",name:"username",required:"",autocomplete:"username"},null,8,["modelValue"])]),_:1}),e(i,{label:"E-mail",help:"Required. Your e-mail"},{default:t(()=>[e(u,{modelValue:n.email,"onUpdate:modelValue":r[1]||(r[1]=s=>n.email=s),icon:"mail",type:"email",name:"email",required:"",autocomplete:"email"},null,8,["modelValue"])]),_:1}),e(b),e(v,null,{default:t(()=>[e(f,{color:"info",type:"submit",label:"Submit"}),e(f,{color:"info",label:"Options",outline:""})]),_:1})]),_:1},8,["onSubmit"]),e(g,{title:"Change Password",icon:"lock",form:"",onSubmit:V(w,["prevent"])},{default:t(()=>[e(i,{label:"Current password",help:"Required. Your current password"},{default:t(()=>[e(u,{modelValue:o.password_current,"onUpdate:modelValue":r[2]||(r[2]=s=>o.password_current=s),icon:"asterisk",name:"password_current",type:"password",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),_:1}),e(b),e(i,{label:"New password",help:"Required. New password"},{default:t(()=>[e(u,{modelValue:o.password,"onUpdate:modelValue":r[3]||(r[3]=s=>o.password=s),icon:"formTextboxPassword",name:"password",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}),e(i,{label:"Confirm password",help:"Required. New password one more time"},{default:t(()=>[e(u,{modelValue:o.password_confirmation,"onUpdate:modelValue":r[4]||(r[4]=s=>o.password_confirmation=s),icon:"formTextboxPassword",name:"password_confirmation",type:"password",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}),e(b),e(v,null,{default:t(()=>[e(f,{type:"submit",color:"info",label:"Submit"}),e(f,{color:"info",label:"Options",outline:""})]),_:1})]),_:1},8,["onSubmit"])])]),_:1}),e(E)]),_:1}))}};export{re as default};
