import{f,c as w,v as T,g as D,w as o,P as A,o as I,b as e,a4 as M,a5 as W,i as _,d as n,s as t,u as l,S as g,ab as $,q as b,m as h,ac as j,ad as d,ae as P,af as q,ag as S,ah as E,ai as F,aj as L,V as z,e as r}from"./index.f9fd3092.js";import{_ as x}from"./BaseButtons.c30445ae.js";import{_ as V}from"./CardBoxModal.86958926.js";import{_ as v}from"./SectionTitle.c95b0b07.js";import{a as O,_ as G}from"./FormField.1b1b5638.js";import{_ as H}from"./SectionBottomOtherPages.f4ddd281.js";const J=n("p",null,"This is sample modal",-1),K=n("p",null,"This is sample modal",-1),Q=n("p",null,"This is sample modal",-1),R=r("UI Components"),X=r(" Dark mode "),Y={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},Z=r(" Modal examples "),ll={class:"space-y-12"},el=n("div",{class:"space-y-3"},[n("p",null,"Click to see in action")],-1),ol=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Unhandled exception "),n("p",null,"Click to see in action")],-1),tl=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Success "),n("p",null,"Click to see in action")],-1),nl=n("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"}," Notifications ",-1),il={class:"flex items-center justify-center mt-6"},al=n("b",null,"Info state",-1),sl=r(". NotificationBar "),ul=n("b",null,"Success state",-1),dl=r(". NotificationBar "),cl=n("b",null,"Warning state",-1),rl=r(". NotificationBar "),ml=n("b",null,"Danger state",-1),_l=r(". NotificationBar "),fl=n("b",null,"White",-1),bl=r(". NotificationBar "),hl=n("b",null,"Light",-1),pl=r(". NotificationBar "),gl=r("Buttons"),xl=r("Cards"),vl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},wl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title ",-1),Bl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title & icons ",-1),Ul={__name:"UiView",setup(yl){const N=f(["Admin","UI Components"]),B=f(!1),y=f(!1),C=f(!1),k=f([]),m=w(()=>k.value.indexOf("outline")>-1),p=f([]),i=w(()=>p.value.indexOf("outline")>-1),a=w(()=>p.value.indexOf("small")>-1),s=w(()=>p.value.indexOf("disabled")>-1),U=T();return(Cl,u)=>(I(),D(A,null,{default:o(()=>[e(V,{modelValue:B.value,"onUpdate:modelValue":u[0]||(u[0]=c=>B.value=c),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:o(()=>[J]),_:1},8,["modelValue"]),e(V,{modelValue:y.value,"onUpdate:modelValue":u[1]||(u[1]=c=>y.value=c),"large-title":"Unhandled exception",button:"danger",shake:""},{default:o(()=>[K]),_:1},8,["modelValue"]),e(V,{modelValue:C.value,"onUpdate:modelValue":u[2]||(u[2]=c=>C.value=c),"large-title":"Success",button:"success"},{default:o(()=>[Q]),_:1},8,["modelValue"]),e(M,{"title-stack":N.value},null,8,["title-stack"]),e(W,null,{default:o(()=>[R]),_:1}),e(v,{first:""},{default:o(()=>[X]),_:1}),e(g,null,{default:o(()=>[e(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:o(()=>[n("div",Y,[e(t,{label:"Toggle",outline:"",onClick:u[3]||(u[3]=c=>l(U).setDarkMode())})])]),_:1})]),_:1}),e(v,null,{default:o(()=>[Z]),_:1}),e(g,null,{default:o(()=>[n("div",ll,[e(_,{title:"Confirm modal","header-icon":l($),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[4]||(u[4]=c=>B.value=!0)},{default:o(()=>[el,e(b),e(x,null,{default:o(()=>[e(t,{label:"Confirm",color:"info"}),e(t,{label:"Cancel",color:"info",outline:""})]),_:1})]),_:1},8,["header-icon"]),e(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[5]||(u[5]=c=>y.value=!0)},{default:o(()=>[ol,e(b),e(x,null,{default:o(()=>[e(t,{label:"Done",color:"danger"})]),_:1})]),_:1}),e(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[6]||(u[6]=c=>C.value=!0)},{default:o(()=>[tl,e(b),e(t,{label:"Done",color:"success"})]),_:1})])]),_:1}),e(v,{custom:""},{default:o(()=>[nl,n("div",il,[e(O,{modelValue:k.value,"onUpdate:modelValue":u[7]||(u[7]=c=>k.value=c),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),e(g,null,{default:o(()=>[e(h,{color:"info",icon:l(j),outline:l(m)},{right:o(()=>[e(t,{icon:l(d),label:"Button",color:"info",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[al,sl]),_:1},8,["icon","outline"]),e(h,{color:"success",icon:l(P),outline:l(m)},{right:o(()=>[e(t,{icon:l(d),label:"Button",color:"success",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[ul,dl]),_:1},8,["icon","outline"]),e(h,{color:"warning",icon:l(q),outline:l(m)},{right:o(()=>[e(t,{icon:l(d),label:"Button",color:"warning",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[cl,rl]),_:1},8,["icon","outline"]),e(h,{color:"danger",icon:l(S),outline:l(m)},{right:o(()=>[e(t,{icon:l(d),label:"Button",color:"danger",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[ml,_l]),_:1},8,["icon","outline"]),e(h,{color:"white",icon:l(E),outline:l(m)},{default:o(()=>[fl,bl]),_:1},8,["icon","outline"]),e(h,{color:"light",icon:l(F),outline:l(m)},{default:o(()=>[hl,pl]),_:1},8,["icon","outline"])]),_:1}),e(v,null,{default:o(()=>[gl]),_:1}),e(g,null,{default:o(()=>[e(_,null,{default:o(()=>[e(G,{label:"Settings"},{default:o(()=>[e(O,{modelValue:p.value,"onUpdate:modelValue":u[8]||(u[8]=c=>p.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),e(b),e(x,null,{default:o(()=>[e(t,{color:"white",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"light",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"info",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"success",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"warning",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"danger",label:"Button",small:l(a),outline:l(i),disabled:l(s)},null,8,["small","outline","disabled"])]),_:1}),e(b),e(x,null,{default:o(()=>[e(t,{color:"white",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"light",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"info",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"success",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"warning",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"danger",label:"Button",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"])]),_:1}),e(b),e(x,null,{default:o(()=>[e(t,{color:"white",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"light",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"info",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"success",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"warning",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"danger",icon:l(d),small:l(a),outline:l(i),disabled:l(s)},null,8,["icon","small","outline","disabled"])]),_:1})]),_:1})]),_:1}),e(v,null,{default:o(()=>[xl]),_:1}),e(g,null,{default:o(()=>[n("div",vl,[e(_,{title:"With Title",mb:""},{default:o(()=>[wl]),_:1}),e(_,{title:"Title & Icons",icon:l(L),"header-icon":l($),mb:""},{default:o(()=>[Bl]),_:1},8,["icon","header-icon"])]),e(z,{icon:l(S),title:"Empty variation"},null,8,["icon"]),e(_,{empty:""})]),_:1}),e(H)]),_:1}))}};export{Ul as default};
