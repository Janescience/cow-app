import{r as u,a as w,c as m,w as a,u as y,b as v,o as c,d as e,_ as x,n as j,e as k,f as d,g as C,h as i,i as _,j as N,t as S,k as q,l as B,m as U,p as z,q as f,s as p}from"./index-8a641c51.js";import{_ as D,a as L}from"./SectionFullScreen-062c7bda.js";import{_ as g}from"./FormField-77b8c523.js";import{_ as M}from"./SectionTitle-f588dc56.js";const O=p("a",{href:"/register",class:"ml-1 text-blue-500"},[p("u",null,"สร้างบัญชี")],-1),G={__name:"LoginView",setup(R){const s=u({login:"",pass:"",remember:["remember"]}),t=w(!1),l=u({message:""}),b=y(),$=v(),h=()=>{t.value=!0,l.message="",$.dispatch("auth/login",{username:s.login,password:s.pass}).then(n=>{b.push("/dashboard"),t.value=!1}).catch(n=>{l.message=n.response.data.message,t.value=!1})};return(n,o)=>(c(),m(D,null,{default:a(()=>[e(L,{bg:"login"},{default:a(({cardClass:V})=>[e(x,{class:j(V),form:"",title:"","header-icon":"",onSubmit:k(h,["prevent"])},{default:a(()=>[e(d,{type:"justify-center"},{default:a(()=>[e(C,{avatar:"/image/cow-logo.jpg",class:"w-28"})]),_:1}),e(M,null,{default:a(()=>[i(" ระบบจัดการฟาร์มโคนม ")]),_:1}),e(d,{type:"justify-center",class:"text-sm"},{default:a(()=>[i(" ยังไม่มีบัญชี ? "),O]),_:1}),e(g,{label:"ชื่อผู้ใช้",help:"กรุณากรอกชื่อผู้ใช้"},{default:a(()=>[e(_,{modelValue:s.login,"onUpdate:modelValue":o[0]||(o[0]=r=>s.login=r),icon:"account",name:"login",required:"",autocomplete:"username"},null,8,["modelValue"])]),_:1}),e(g,{label:"รหัสผ่าน",help:"กรุณากรอกรหัสผ่าน"},{default:a(()=>[e(_,{modelValue:s.pass,"onUpdate:modelValue":o[1]||(o[1]=r=>s.pass=r),icon:"asterisk",type:"password",name:"password",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),_:1}),l.message?(c(),m(N,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:a(()=>[i(S(l.message),1)]),_:1})):q("",!0),e(B),e(U,{type:"justify-center"},{default:a(()=>[e(z,{type:"submit",color:"info",label:"เข้าสู่ระบบ",loading:f(t),disabled:f(t)},null,8,["loading","disabled"])]),_:1})]),_:2},1032,["class","onSubmit"])]),_:1})]),_:1}))}};export{G as default};
