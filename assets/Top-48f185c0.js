import{U as M,a as r,V as g,L as y,o as Y,I as b,s as o,t as p,q as d,d as v,N as _,w as k,p as D,Z as S}from"./index-8a641c51.js";const V=M("calendar",()=>{const s=r(new Date().getFullYear()),e=r(new Date().getMonth()),n=r(new Date().getDate()),c=g(()=>s.value),f=g(()=>e.value),m=g(()=>n.value);function u(a){s.value=s.value+a}function h(a){s.value=s.value-a}function i(a){if(e.value==11){u(1),e.value=0;return}e.value=e.value+a}function t(a){if(e.value==0){h(1),e.value=11;return}e.value=e.value-a}function l(a){e.value=a}function w(a){s.value=a}function x(){s.value=new Date().getFullYear(),e.value=new Date().getMonth(),n.value=new Date().getDate()}return{year:s,month:e,day:n,getYear:c,getMonth:f,getDay:m,incrementYear:u,incrementMonth:i,decrementMonth:t,setMonth:l,setYear:w,resetDate:x}}),$={class:"col-span-7"},C={class:"w-full flex justify-between items-center"},F={class:"w-1/3 p-2 md:p-4"},j={class:"w-full inline-flex space-x-1 text-lg text-left md:font-semibold"},z={class:"hidden md:flex w-1/3 items-center justify-center text-gray-400"},B={class:"flex space-x-3 items-center"},N={class:"w-2/3 md:w-1/3 flex justify-end"},T={class:"flex space-x-2 md:space-x-5"},L={__name:"Top",setup(s){const e=V();e.$subscribe((i,t)=>{m(),u()});const n=r(),c=r(""),f=r(""),m=()=>{c.value=new Intl.DateTimeFormat("th-TH",{month:"long"}).format(new Date(e.getYear,e.getMonth,e.getDay)),f.value=c.value.substring(0,3)},u=()=>{n.value=new Date(e.getYear,e.getMonth,e.getDay)},h=i=>{n.value=i,e.setMonth(n.value.getMonth()),e.setYear(n.value.getFullYear())};return y(()=>{m(),u()}),(i,t)=>(Y(),b("div",$,[o("div",C,[o("div",F,[o("div",j,[o("span",null,p(c.value),1),o("span",null,p(d(e).getYear+543),1)])]),o("div",z,[o("div",B,[v(_,{path:"chevronLeft",size:"38",class:"cursor-pointer hover:text-gray-300",onClick:t[0]||(t[0]=l=>d(e).decrementMonth(1))}),v(_,{path:"chevronRight",size:"38",class:"cursor-pointer hover:text-gray-300",onClick:t[1]||(t[1]=l=>d(e).incrementMonth(1))})])]),o("div",N,[o("div",T,[v(d(S),{locale:"th",modelValue:n.value,"onUpdate:modelValue":[t[2]||(t[2]=l=>n.value=l),h],"auto-apply":"","close-on-scroll":""},{trigger:k(()=>[v(D,{icon:"calendar",label:""})]),_:1},8,["modelValue"]),v(D,{label:"วันนี้",small:"",onClick:t[3]||(t[3]=l=>d(e).resetDate())})])])])]))}};export{L as _,V as u};
