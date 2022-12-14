import{r as _,a as $,c as d,w as a,u as h,o as c,b as e,_ as w,n as y,d as v,e as i,f as x,g as f,h as j,i as u,t as k,j as C,k as N,l as S,m as B,p as r,A as U}from"./index.dc015e57.js";import{_ as A,a as z}from"./SectionFullScreen.e86830f9.js";import{_ as p,a as D}from"./FormField.e5837cd9.js";import{_ as L}from"./BaseButtons.41814418.js";import{_ as M}from"./SectionTitle.40282f63.js";const O=u(" \u0E23\u0E30\u0E1A\u0E1A\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E1F\u0E32\u0E23\u0E4C\u0E21\u0E42\u0E04\u0E19\u0E21 "),P=u(" \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E0D\u0E0A\u0E35 ? "),R=r("a",{href:"/register",class:"ml-1 text-blue-500"},[r("u",null,"\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E1A\u0E31\u0E0D\u0E0A\u0E35")],-1),T=r("a",{href:"/register",class:"text-sm text-gray-600"},[r("u",null,"\u0E25\u0E37\u0E21\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 ?")],-1),J={__name:"LoginView",setup(q){const s=_({login:"admin",pass:"P@ssw0rd",remember:["remember"]}),t=$(!1),n=_({message:""}),g=h(),b=()=>{t.value=!0,n.message="",U.login({username:s.login,password:s.pass}).then(m=>{g.push("/dashboard"),t.value=!1}).catch(m=>{n.message=m.response.data.message,t.value=!1})};return(m,l)=>(c(),d(A,null,{default:a(()=>[e(z,{bg:"login"},{default:a(({cardClass:V})=>[e(w,{class:y(V),form:"",title:"","header-icon":"",onSubmit:v(b,["prevent"])},{default:a(()=>[e(i,{type:"justify-center"},{default:a(()=>[e(x,{avatar:"public/image/cow-logo.jpg",class:"w-28"})]),_:1}),e(M,null,{default:a(()=>[O]),_:1}),e(i,{type:"justify-center",class:"text-sm"},{default:a(()=>[P,R]),_:1}),e(p,{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49",help:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49"},{default:a(()=>[e(f,{modelValue:s.login,"onUpdate:modelValue":l[0]||(l[0]=o=>s.login=o),icon:"account",name:"login",autocomplete:"username"},null,8,["modelValue"])]),_:1}),e(p,{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",help:"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"},{default:a(()=>[e(f,{modelValue:s.pass,"onUpdate:modelValue":l[1]||(l[1]=o=>s.pass=o),icon:"asterisk",type:"password",name:"password",autocomplete:"current-password"},null,8,["modelValue"])]),_:1}),e(i,null,{default:a(()=>[e(D,{modelValue:s.remember,"onUpdate:modelValue":l[2]||(l[2]=o=>s.remember=o),name:"remember",options:{remember:"\u0E08\u0E14\u0E08\u0E33\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"}},null,8,["modelValue"]),T]),_:1}),n.message?(c(),d(j,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:a(()=>[u(k(n.message),1)]),_:1})):C("",!0),e(N),e(L,{type:"justify-center"},{default:a(()=>[e(S,{type:"submit",color:"info",label:"\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",loading:t.value,disabled:t.value},null,8,["loading","disabled"])]),_:1})]),_:2},1032,["class","onSubmit"]),e(B)]),_:1})]),_:1}))}};export{J as default};
