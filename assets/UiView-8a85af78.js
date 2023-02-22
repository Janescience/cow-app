import{a as f,V as w,a6 as T,c as D,w as o,C as A,o as I,d as e,v as V,a3 as M,h as r,a4 as W,_,s as n,p as t,q as l,S as h,a7 as $,l as b,m as x,j as p,a8 as j,a9 as d,aa as q,ab as E,ac as S,ad as F,ae as L,af as P,D as z}from"./index-8a641c51.js";import{_ as v}from"./SectionTitle-f588dc56.js";import{_ as G}from"./FormField-77b8c523.js";import{_ as O}from"./FormCheckRadioPicker-4bdfc864.js";import{_ as H}from"./SectionBottomOtherPages-dfc7fc0b.js";const J=n("p",null,"This is sample modal",-1),K=n("p",null,"This is sample modal",-1),Q=n("p",null,"This is sample modal",-1),R={class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"},X={class:"space-y-12"},Y=n("div",{class:"space-y-3"},[n("p",null,"Click to see in action")],-1),Z=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Unhandled exception "),n("p",null,"Click to see in action")],-1),ll=n("div",{class:"space-y-3"},[n("h1",{class:"text-2xl"}," Success "),n("p",null,"Click to see in action")],-1),el=n("h1",{class:"text-2xl text-gray-500 dark:text-gray-400"}," Notifications ",-1),ol={class:"flex items-center justify-center mt-6"},tl=n("b",null,"Info state",-1),nl=n("b",null,"Success state",-1),al=n("b",null,"Warning state",-1),il=n("b",null,"Danger state",-1),sl=n("b",null,"White",-1),ul=n("b",null,"Light",-1),dl={class:"grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2"},cl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title ",-1),rl=n("div",{class:"text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400"}," With title & icons ",-1),xl={__name:"UiView",setup(ml){const N=f(["Admin","UI Components"]),B=f(!1),y=f(!1),C=f(!1),k=f([]),m=w(()=>k.value.indexOf("outline")>-1),g=f([]),a=w(()=>g.value.indexOf("outline")>-1),i=w(()=>g.value.indexOf("small")>-1),s=w(()=>g.value.indexOf("disabled")>-1),U=T();return(_l,u)=>(I(),D(A,null,{default:o(()=>[e(V,{modelValue:B.value,"onUpdate:modelValue":u[0]||(u[0]=c=>B.value=c),title:"Please confirm action","button-label":"Confirm","has-cancel":""},{default:o(()=>[J]),_:1},8,["modelValue"]),e(V,{modelValue:y.value,"onUpdate:modelValue":u[1]||(u[1]=c=>y.value=c),"large-title":"Unhandled exception",button:"danger",shake:""},{default:o(()=>[K]),_:1},8,["modelValue"]),e(V,{modelValue:C.value,"onUpdate:modelValue":u[2]||(u[2]=c=>C.value=c),"large-title":"Success",button:"success"},{default:o(()=>[Q]),_:1},8,["modelValue"]),e(M,{"title-stack":N.value},null,8,["title-stack"]),e(W,null,{default:o(()=>[r("UI Components")]),_:1}),e(v,{first:""},{default:o(()=>[r(" Dark mode ")]),_:1}),e(h,null,{default:o(()=>[e(_,{class:"md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"},{default:o(()=>[n("div",R,[e(t,{label:"Toggle",outline:"",onClick:u[3]||(u[3]=c=>l(U).setDarkMode())})])]),_:1})]),_:1}),e(v,null,{default:o(()=>[r(" Modal examples ")]),_:1}),e(h,null,{default:o(()=>[n("div",X,[e(_,{title:"Confirm modal","header-icon":l($),class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[4]||(u[4]=c=>B.value=!0)},{default:o(()=>[Y,e(b),e(x,null,{default:o(()=>[e(t,{label:"Confirm",color:"info"}),e(t,{label:"Cancel",color:"info",outline:""})]),_:1})]),_:1},8,["header-icon"]),e(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[5]||(u[5]=c=>y.value=!0)},{default:o(()=>[Z,e(b),e(x,null,{default:o(()=>[e(t,{label:"Done",color:"danger"})]),_:1})]),_:1}),e(_,{class:"cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto",hoverable:"",onClick:u[6]||(u[6]=c=>C.value=!0)},{default:o(()=>[ll,e(b),e(t,{label:"Done",color:"success"})]),_:1})])]),_:1}),e(v,{custom:""},{default:o(()=>[el,n("div",ol,[e(O,{modelValue:k.value,"onUpdate:modelValue":u[7]||(u[7]=c=>k.value=c),type:"switch",name:"notifications-switch",options:{outline:"Outline"}},null,8,["modelValue"])])]),_:1}),e(h,null,{default:o(()=>[e(p,{color:"info",icon:l(j),outline:l(m)},{right:o(()=>[e(t,{icon:l(d),label:"Button",color:"info",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[tl,r(". NotificationBar ")]),_:1},8,["icon","outline"]),e(p,{color:"success",icon:l(q),outline:l(m)},{right:o(()=>[e(t,{icon:l(d),label:"Button",color:"success",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[nl,r(". NotificationBar ")]),_:1},8,["icon","outline"]),e(p,{color:"warning",icon:l(E),outline:l(m)},{right:o(()=>[e(t,{icon:l(d),label:"Button",color:"warning",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[al,r(". NotificationBar ")]),_:1},8,["icon","outline"]),e(p,{color:"danger",icon:l(S),outline:l(m)},{right:o(()=>[e(t,{icon:l(d),label:"Button",color:"danger",outline:l(m),small:""},null,8,["icon","outline"])]),default:o(()=>[il,r(". NotificationBar ")]),_:1},8,["icon","outline"]),e(p,{color:"white",icon:l(F),outline:l(m)},{default:o(()=>[sl,r(". NotificationBar ")]),_:1},8,["icon","outline"]),e(p,{color:"light",icon:l(L),outline:l(m)},{default:o(()=>[ul,r(". NotificationBar ")]),_:1},8,["icon","outline"])]),_:1}),e(v,null,{default:o(()=>[r("Buttons")]),_:1}),e(h,null,{default:o(()=>[e(_,null,{default:o(()=>[e(G,{label:"Settings"},{default:o(()=>[e(O,{modelValue:g.value,"onUpdate:modelValue":u[8]||(u[8]=c=>g.value=c),name:"buttons-switch",type:"switch",options:{outline:"Outline",small:"Small",disabled:"Disabled"}},null,8,["modelValue"])]),_:1}),e(b),e(x,null,{default:o(()=>[e(t,{color:"white",label:"Button",small:l(i),outline:l(a),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"light",label:"Button",small:l(i),outline:l(a),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"info",label:"Button",small:l(i),outline:l(a),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"success",label:"Button",small:l(i),outline:l(a),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"warning",label:"Button",small:l(i),outline:l(a),disabled:l(s)},null,8,["small","outline","disabled"]),e(t,{color:"danger",label:"Button",small:l(i),outline:l(a),disabled:l(s)},null,8,["small","outline","disabled"])]),_:1}),e(b),e(x,null,{default:o(()=>[e(t,{color:"white",label:"Button",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"light",label:"Button",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"info",label:"Button",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"success",label:"Button",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"warning",label:"Button",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"danger",label:"Button",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"])]),_:1}),e(b),e(x,null,{default:o(()=>[e(t,{color:"white",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"light",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"info",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"success",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"warning",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"]),e(t,{color:"danger",icon:l(d),small:l(i),outline:l(a),disabled:l(s)},null,8,["icon","small","outline","disabled"])]),_:1})]),_:1})]),_:1}),e(v,null,{default:o(()=>[r("Cards")]),_:1}),e(h,null,{default:o(()=>[n("div",dl,[e(_,{title:"With Title",mb:""},{default:o(()=>[cl]),_:1}),e(_,{title:"Title & Icons",icon:l(P),"header-icon":l($),mb:""},{default:o(()=>[rl]),_:1},8,["icon","header-icon"])]),e(z,{icon:l(S),title:"Empty variation"},null,8,["icon"]),e(_,{empty:""})]),_:1}),e(H)]),_:1}))}};export{xl as default};
