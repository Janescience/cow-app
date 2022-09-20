import{L as A,$ as y,a0 as L,N as R,O as j,a1 as I,P as G,S as N,Q as Y,R as H,e as E,f as O,T as Q,_ as q,a2 as z,a3 as J,c as _,w as u,U as m,o as c,a as o,i as e,B as l,h,F as k,v as x,D as g,a4 as b}from"./index.e82bd909.js";import{_ as K}from"./CardBoxModal.a207ad7e.js";import{_ as W}from"./FormControl.79adb768.js";import{_ as X}from"./TableCheckboxCell.b3ba4da4.js";const Z={data(){return{titleStack:["\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07\u0E08\u0E48\u0E32\u0E22","\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14"],textConfirm:"",modalConfirm:!1,funcConfirm:Function,idConfirm:null,paidConfirm:null,perPage:5,currentPage:0,items:[],checkedRows:[],searchGroup:"",member:{}}},watch:{searchGroup(a){this.getDebtDetail(a)}},created(){this.getDebtDetail(),this.getMember()},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const a=[];for(let s=0;s<this.numPages;s++)a.push(s);return a}},methods:{async getDebtDetail(a=""){let s=this.$loading.show();const i=await y.getDebtDetail({memberId:this.$route.params.id,search:a});i.data&&(this.items=i.data.data,s.hide())},async paid(){let a=this.$loading.show();(await y.paidGroup(this.$route.params.id,this.idConfirm,this.paidConfirm)).data&&(this.idConfirm=null,this.paidConfirm=null,this.getDebtDetail(),a.hide())},async complete(){let a=this.$loading.show();(await y.complete(this.idConfirm)).data&&(this.idConfirm=null,this.getDebts(),a.hide())},async getMember(){let a=this.$loading.show();const s=await L.get(this.$route.params.id);s.data&&(this.member=s.data.data,a.hide())},limitPaid(a){a.paid>a.amountSend+a.fine+a.careFee&&(a.paid=a.amountSend+a.fine+a.careFee)},sum(){let a=0,s=0,i=0;return this.items.map(r=>{a+=r.amountSend+r.fine+r.careFee,s+=r.paid,i+=a-s}),{debt:a,paid:s,balance:i}},checked(a,s){a?(s.checked=!0,this.checkedRows.push(s)):(s.checked=!1,this.checkedRows=this.remove(this.checkedRows,i=>i.groupId===s.groupId))},checkedSum(){let a=0,s=0,i=0;return this.checkedRows.map(r=>{a+=r.amountSend+r.fine+r.careFee,i+=r.paid,s+=a-i}),{sumAmountSend:a,sumPaid:i,sumDebt:s}},remove(a,s){const i=[];return a.forEach(r=>{s(r)||i.push(r)}),i},confirm(a,s,i,r){this.textConfirm=a,this.funcConfirm=r,this.idConfirm=s,this.paidConfirm=i,this.modalConfirm=!0},formatCurrency(a){return R(a).format(0,0)},formatDate(a){return j(new Date(a)).format("DD/MM/YYYY")},getType(a){return I(a)}},components:{LayoutAuthenticated:G,SectionMain:N,SectionTitleBar:Y,CardBoxModal:K,BaseLevel:H,BaseButtons:E,BaseButton:O,UserAvatar:Q,CardBox:q,FormControl:W,UserAvatarCurrentUser:z,PillTag:J,TableCheckboxCell:X}},$={class:"grid lg:grid-cols-2 gap-3"},ee={class:"space-y-3 text-center md:text-left lg:mx-12"},te={class:"text-2xl"},ae=b("\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07\u0E2A\u0E48\u0E07\u0E23\u0E27\u0E21 "),se={class:"text-blue-500 text-xl"},ne=b(" \u0E1A\u0E32\u0E17"),le=b("\u0E08\u0E48\u0E32\u0E22\u0E41\u0E25\u0E49\u0E27\u0E23\u0E27\u0E21 "),ie={class:"text-emerald-500 text-xl"},ce=b(" \u0E1A\u0E32\u0E17"),oe=b("\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07\u0E2A\u0E48\u0E07\u0E23\u0E27\u0E21 "),re={class:"text-red-500 text-xl"},de=b(" \u0E1A\u0E32\u0E17"),me={key:0},ue={key:1,class:"items-center"},he={key:2,class:"p-2 dark:bg-gray-800 rounded"},_e=e("span",{class:"justify-start"},"\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07\u0E2A\u0E48\u0E07\u0E23\u0E27\u0E21 : ",-1),fe={class:"text-red-500"},be={class:"before:hidden lg:w-6 whitespace-nowrap"},pe={class:"overflow-x-auto relative"},Ce=e("thead",null,[e("tr",null,[e("th"),e("th"),e("th",null,"\u0E27\u0E07\u0E41\u0E0A\u0E23\u0E4C"),e("th",null,"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17"),e("th",null,"\u0E40\u0E07\u0E34\u0E19\u0E15\u0E49\u0E19"),e("th",null,"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E07\u0E27\u0E14\u0E17\u0E35\u0E48\u0E04\u0E49\u0E32\u0E07"),e("th",null,"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E21\u0E37\u0E2D"),e("th",null,"\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07"),e("th",null,"\u0E04\u0E48\u0E32\u0E1B\u0E23\u0E31\u0E1A"),e("th",null,"\u0E04\u0E48\u0E32\u0E14\u0E39\u0E41\u0E25"),e("th",null,"\u0E08\u0E48\u0E32\u0E22\u0E41\u0E25\u0E49\u0E27"),e("th",null,"\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E08\u0E48\u0E32\u0E22"),e("th")])],-1),we={key:1},ye={class:"border-b-0 lg:w-6 before:hidden"},ke={"data-label":"\u0E27\u0E07\u0E41\u0E0A\u0E23\u0E4C",class:"whitespace-nowrap"},xe={"data-label":"\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17",class:"whitespace-nowrap"},ge={"data-label":"\u0E40\u0E07\u0E34\u0E19\u0E15\u0E49\u0E19",class:"text-right whitespace-nowrap"},ve={"data-label":"\u0E04\u0E49\u0E32\u0E07\u0E2A\u0E48\u0E07\u0E22\u0E2D\u0E14/\u0E07\u0E27\u0E14",class:"whitespace-nowrap"},Be={"data-label":"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E21\u0E37\u0E2D",class:"whitespace-nowrap"},Pe={"data-label":"\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07",class:"text-right whitespace-nowrap"},Se={class:"text-blue-500"},De={"data-label":"\u0E04\u0E48\u0E32\u0E1B\u0E23\u0E31\u0E1A",class:"text-right whitespace-nowrap"},Fe={class:"text-blue-500"},Ve={"data-label":"\u0E04\u0E48\u0E32\u0E14\u0E39\u0E41\u0E25",class:"text-right whitespace-nowrap"},Te={class:"text-blue-500"},Ue={"data-label":"\u0E08\u0E48\u0E32\u0E22\u0E41\u0E25\u0E49\u0E27",class:"text-right whitespace-nowrap lg:w-6"},Me={"data-label":"\u0E40\u0E2B\u0E25\u0E37\u0E2D\u0E08\u0E48\u0E32\u0E22",class:"text-right"},Ae={class:"text-red-500"},Le={class:"lg:w-6 whitespace-nowrap"},Re={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"};function je(a,s,i,r,d,n){const P=m("SectionTitleBar"),S=m("CardBoxModal"),D=m("UserAvatarCurrentUser"),F=m("PillTag"),v=m("BaseLevel"),p=m("CardBox"),C=m("BaseButton"),w=m("BaseButtons"),B=m("FormControl"),V=m("TableCheckboxCell"),T=m("UserAvatar"),U=m("SectionMain"),M=m("LayoutAuthenticated");return c(),_(M,null,{default:u(()=>[o(P,{"title-stack":d.titleStack},null,8,["title-stack"]),o(U,null,{default:u(()=>[o(S,{modelValue:d.modalConfirm,"onUpdate:modelValue":s[0]||(s[0]=t=>d.modalConfirm=t),title:"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","button-label":"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",onConfirm:d.funcConfirm,"has-cancel":""},{default:u(()=>[e("p",null,l(d.textConfirm),1)]),_:1},8,["modelValue","onConfirm"]),e("div",$,[o(p,null,{default:u(()=>[o(v,{type:"justify-around lg:justify-center"},{default:u(()=>[o(D,{class:"lg:mx-6 w-24",username:a.$route.params.id},null,8,["username"]),e("div",ee,[e("h1",te,[o(F,{text:d.member.name,type:"light",icon:"account"},null,8,["text"])]),e("p",null,[ae,e("b",se,[e("u",null,l(n.formatCurrency(n.sum().debt)),1)]),ne]),e("p",null,[le,e("b",ie,[e("u",null,l(n.formatCurrency(n.sum().paid)),1)]),ce]),e("p",null,[oe,e("b",re,[e("u",null,l(n.formatCurrency(n.sum().balance)),1)]),de])])]),_:1})]),_:1}),o(p,null,{default:u(()=>[d.checkedRows.length>0?(c(),h("p",me,"\u0E40\u0E25\u0E37\u0E2D\u0E01 "+l(d.checkedRows.length)+" \u0E27\u0E07\u0E41\u0E0A\u0E23\u0E4C",1)):(c(),h("p",ue,"\u0E16\u0E49\u0E32\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E35\u0E22\u0E23\u0E4C\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E27\u0E07\u0E41\u0E0A\u0E23\u0E4C \u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E27\u0E07\u0E41\u0E0A\u0E23\u0E4C")),d.checkedRows.length>0?(c(),h("div",he,[(c(!0),h(k,null,x(d.checkedRows,t=>(c(),h("span",{key:t.groupId,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1"},l(t.name),1))),128)),e("table",null,[e("tbody",null,[e("tr",null,[e("td",null,[_e,e("b",fe,[e("u",null,l(n.formatCurrency(n.checkedSum().sumDebt)),1)])]),e("td",be,[o(w,{type:"justify-start lg:justify-end","no-wrap":""},{default:u(()=>[o(C,{color:"success",label:"\u0E40\u0E04\u0E25\u0E35\u0E22\u0E23\u0E4C\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",onClick:s[1]||(s[1]=t=>a.isModalActive=!0)})]),_:1})])])])])])):g("",!0)]),_:1})]),o(B,{modelValue:d.searchGroup,"onUpdate:modelValue":s[2]||(s[2]=t=>d.searchGroup=t),icon:"homeOutline",class:"mb-3 shadow mt-3 w-full lg:w-64",placeholder:"\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E27\u0E07\u0E41\u0E0A\u0E23\u0E4C"},null,8,["modelValue"]),n.itemsPaginated.length>0?(c(),_(p,{key:0,title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E27\u0E07\u0E41\u0E0A\u0E23\u0E4C\u0E17\u0E35\u0E48\u0E21\u0E35\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07",class:"shadow-lg","has-table":"","header-icon":""},{default:u(()=>[e("div",pe,[e("table",null,[Ce,e("tbody",null,[(c(!0),h(k,null,x(n.itemsPaginated,t=>(c(),h("tr",{key:t.groupId},[t.amountSend+t.fine+t.careFee-t.paid>0?(c(),_(V,{key:0,isChecked:t.checked,class:"text-center border-b-0 lg:w-6 before:hidden",onChecked:f=>n.checked(f,t)},null,8,["isChecked","onChecked"])):(c(),h("td",we)),e("td",ye,[o(T,{api:"bottts",username:t.groupId,class:"w-10 h-10 mx-auto lg:w-10 lg:h-10"},null,8,["username"])]),e("td",ke,[e("span",null,l(t.name),1)]),e("td",xe,l(n.getType(t.type)),1),e("td",ge,[e("b",null,[e("u",null,l(n.formatCurrency(t.amount)),1)])]),e("td",ve,l(t.numPeriod),1),e("td",Be,l(t.numHand),1),e("td",Pe,[e("b",Se,[e("u",null,l(n.formatCurrency(t.amountSend)),1)])]),e("td",De,[e("b",Fe,[e("u",null,l(n.formatCurrency(t.fine)),1)])]),e("td",Ve,[e("b",Te,[e("u",null,l(n.formatCurrency(t.careFee)),1)])]),e("td",Ue,[o(B,{type:"number",modelValue:t.paid,"onUpdate:modelValue":f=>t.paid=f,class:"shadow w-36",placeholder:"\u0E08\u0E48\u0E32\u0E22\u0E41\u0E25\u0E49\u0E27"},null,8,["modelValue","onUpdate:modelValue"])]),e("td",Me,[e("b",Ae,[e("u",null,l(n.formatCurrency(t.amountSend+t.fine+t.careFee-t.paid)),1)])]),e("td",Le,[o(w,{type:"lg:justify-start justify-end","no-wrap":""},{default:u(()=>[t.amountSend+t.fine+t.careFee-t.paid>0?(c(),_(C,{key:0,color:"info",label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",disabled:t.paid==""||t.paid>t.amountSend+t.fine+t.careFee,onClick:f=>n.confirm("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07 "+t.name+" \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?",t.groupId,t.paid,n.paid)},null,8,["disabled","onClick"])):g("",!0),t.amountSend+t.fine+t.careFee-t.paid==0?(c(),_(C,{key:1,color:"success",label:"\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19",onClick:f=>n.confirm("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E22\u0E2D\u0E14\u0E04\u0E49\u0E32\u0E07\u0E02\u0E2D\u0E07 "+t.name+" \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?",t.id,n.complete)},null,8,["onClick"])):g("",!0)]),_:2},1024)])]))),128))])])]),e("div",Re,[o(v,null,{default:u(()=>[o(w,null,{default:u(()=>[(c(!0),h(k,null,x(n.pagesList,t=>(c(),_(C,{key:t,active:t===d.currentPage,label:t+1,small:"",onClick:f=>d.currentPage=t},null,8,["active","label","onClick"]))),128))]),_:1}),e("small",null,"Page "+l(n.currentPageHuman)+" of "+l(n.numPages),1)]),_:1})])]),_:1})):(c(),_(p,{key:1,empty:""}))]),_:1})]),_:1})}var He=A(Z,[["render",je]]);export{He as default};
