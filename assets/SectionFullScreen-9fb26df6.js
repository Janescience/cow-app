import{a6 as n,o as c,J as i,s as u,P as l,n as r,q as t,W as _,a7 as p,a8 as g,a9 as m,aa as f,c as k,w as S,C as w}from"./index-2a746424.js";const h={__name:"LayoutGuest",setup(e){const s=n();return(a,o)=>(c(),i("div",{class:r({dark:t(s).darkMode})},[u("div",{class:r(t(s).appStyle)},[l(a.$slots,"default")],2)],2))}},x={__name:"SectionFullScreen",props:{bg:{type:String,required:!0,validator:e=>["login","error"].includes(e)}},setup(e){const s=e,a=n(),o=_(()=>{switch(s.bg){case"login":return a.darkMode?m:f;case"error":return a.darkMode?p:g}return""});return(d,B)=>(c(),k(w,{class:r(["flex min-h-screen items-center justify-center",t(o)])},{default:S(()=>[l(d.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-3/12 shadow-2xl",cardRounded:"rounded-lg"})]),_:3},8,["class"]))}};export{h as _,x as a};
