import{L as V,a6 as _,a0 as L,N as R,O as A,a1 as G,P as T,S as U,R as I,e as j,f as H,T as O,_ as Y,E,d as P,c as p,w as f,U as c,o as n,a as d,i as a,B as g,h as i,F as x,v as w,D as b,a4 as q}from"./index.e82bd909.js";import{_ as z}from"./CardBoxModal.a207ad7e.js";import{_ as J}from"./FormControl.79adb768.js";import{_ as K}from"./TableCheckboxCell.b3ba4da4.js";import{T as Q}from"./TableGroupDetail.eefadaf6.js";const W={data(){return{textConfirm:"",modalConfirm:!1,funcConfirm:Function,idConfirm:null,checkedRows:[],items:[],group:null,members:[],memberSelected:"",memberList:[],startDate:new Date}},created(){this.getGroup(),this.getMemberList()},computed:{totalAmount(){return this.members.reduce(function(s,e){return s+Number(e.amount||0)},0)}},methods:{async getGroup(){const s=await _.loadGroup(this.$route.params.id);if(s.data){this.group=s.data.data;let l=1;for(var e=0;e<this.group.groupDetails.length;e++){let u=this.group.groupDetails[e].member;const o={id:this.group.groupDetails[e].id,handNo:this.group.groupDetails[e].handNo?this.group.groupDetails[e].handNo:l,member:u,name:u!=null?u.name:null};if(e>0)switch(this.group.type){case"1":o.amount=Math.round(this.group.groupDetails[e].groupSubDetails[0].amountSend);break;case"2":o.amount=this.group.baseAmountSend;break;case"3":o.amount=this.group.interest;break}o.careFeeFlag=!0,this.members.push(o),l++}}},async getMemberList(){await L.getAll().then(s=>{const e=s.data.data;this.memberList=e},s=>{console.log(s)})},async save(){const s={id:this.group.id,details:this.members};await _.updateDetails(s)},addMember(){for(let s of this.checkedRows){let e=this.members.findIndex(l=>l.handNo===s.handNo);e!=-1&&(this.members[e].member=this.memberSelected,this.members[e].name=this.memberSelected.name,this.members[e].checked=!1)}this.memberSelected=null,this.checkedRows=[]},removeMember(){const s=this.members.findIndex(e=>e.id===this.idConfirm);this.members[s].name="",this.members[s].member=null},cancelAdd(){this.checkedRows.map(s=>{const e=this.members.findIndex(l=>l.id===s.id);this.members[e].checked=!1}),this.checkedRows=[]},start(){const s={id:this.group.id,details:this.members};_.updateDetails(s).then(()=>{_.startGroup({id:this.group.id,startDate:this.startDate}),this.$router.push({path:"/groups",replace:!0})})},getFreeHand(){const s=this.members.filter(e=>!e.name||e.name==="").length;return s>0?"(\u0E27\u0E48\u0E32\u0E07 "+s+" \u0E21\u0E37\u0E2D)":""},async deleteGroup(){(await _.deleteGroup(this.idConfirm)).data&&(this.idConfirm=null,this.$router.push("/groups"))},countChecked(){return this.checkedRows.length>0?"(\u0E40\u0E25\u0E37\u0E2D\u0E01 "+this.checkedRows.length+" \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23)":""},careFeeChecked(s,e){s?e.careFeeFlag=!0:e.careFeeFlag=!1},checked(s,e){s?(e.checked=!0,this.checkedRows.push(e)):(e.checked=!1,this.checkedRows=this.remove(this.checkedRows,l=>l.id===e.id))},remove(s,e){const l=[];return s.forEach(u=>{e(u)||l.push(u)}),l},confirm(s,e,l){this.textConfirm=s,this.funcConfirm=l,this.idConfirm=e,this.modalConfirm=!0},formatCurrency(s){return R(s).format(0,0)},formatDate(s){return s?A(new Date(s)).format("DD/MM/YYYY"):""},getType(s){return G(s)}},components:{LayoutAuthenticated:T,SectionMain:U,CardBoxModal:z,TableCheckboxCell:K,BaseLevel:I,BaseButtons:j,BaseButton:H,UserAvatar:O,CardBox:Y,FormControl:J,BaseIcon:E,BaseDivider:P,TableGroupDetail:Q}},X={class:"px-6 sm:px-0 mb-6 flex items-center justify-between"},Z=a("div",{class:"flex items-center justify-start"},[a("h1",{class:"text-2xl"}," \u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E27\u0E07\u0E41\u0E0A\u0E23\u0E4C ")],-1),$={key:0,class:"p-3 bg-gray-100/50 dark:bg-gray-800"},ee={"data-label":"\u0E21\u0E37\u0E2D\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",class:"lg:w-96"},te={class:"flex"},se={key:1,class:"p-3 bg-gray-100/50 dark:bg-gray-800"},oe={class:"overflow-x-auto"},ae=a("thead",null,[a("tr",null,[a("th",null,"\u0E21\u0E37\u0E2D\u0E17\u0E35\u0E48"),a("th",null,"\u0E22\u0E2D\u0E14\u0E2A\u0E48\u0E07"),a("th",{class:"text-center"},"\u0E0A\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01\u0E41\u0E0A\u0E23\u0E4C"),a("th",{class:"text-center"},"\u0E04\u0E48\u0E32\u0E14\u0E39\u0E41\u0E25"),a("th",{class:"text-center"},"\u0E2B\u0E31\u0E01\u0E17\u0E49\u0E32\u0E22"),a("th",null,"\u0E40\u0E25\u0E37\u0E2D\u0E01")])],-1),ne={"data-label":"\u0E21\u0E37\u0E2D\u0E17\u0E35\u0E48"},le={"data-label":"\u0E22\u0E2D\u0E14\u0E2A\u0E48\u0E07",class:"lg:w-40 text-right"},re={key:1},de={class:"text-center","data-label":"\u0E0A\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01\u0E41\u0E0A\u0E23\u0E4C"},ce={key:1,"data-label":"\u0E2B\u0E31\u0E01\u0E17\u0E49\u0E32\u0E22"},ie={"data-label":"\u0E22\u0E2D\u0E14\u0E2A\u0E48\u0E07",class:"lg:w-40 text-right"},ue={key:3,"data-label":"\u0E40\u0E25\u0E37\u0E2D\u0E01"},he={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"},me=q(" \u0E23\u0E27\u0E21\u0E22\u0E2D\u0E14\u0E2A\u0E48\u0E07 "),pe={class:"text-green-500 text-xl"};function fe(s,e,l,u,o,r){const h=c("BaseButton"),v=c("CardBoxModal"),N=c("TableGroupDetail"),D=c("v-select"),B=c("Datepicker"),k=c("BaseLevel"),C=c("FormControl"),y=c("TableCheckboxCell"),M=c("CardBox"),S=c("SectionMain"),F=c("LayoutAuthenticated");return n(),p(F,null,{default:f(()=>[d(S,null,{default:f(()=>[a("section",X,[Z,d(h,{icon:"chevronLeft",label:"\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A",color:"light",small:"",onClick:e[0]||(e[0]=t=>s.$router.push({path:"/groups",replace:!0}))})]),d(v,{modelValue:o.modalConfirm,"onUpdate:modelValue":e[1]||(e[1]=t=>o.modalConfirm=t),title:"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","button-label":"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",onConfirm:o.funcConfirm,"has-cancel":""},{default:f(()=>[a("p",null,g(o.textConfirm),1)]),_:1},8,["modelValue","onConfirm"]),d(N,{group:o.group},null,8,["group"]),d(M,{title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E25\u0E39\u0E01\u0E41\u0E0A\u0E23\u0E4C "+(o.checkedRows.length>0?r.countChecked():r.getFreeHand()),class:"shadow-lg","has-table":"",headerIcon:""},{default:f(()=>[o.checkedRows.length>0?(n(),i("div",$,[a("table",null,[a("tbody",null,[a("tr",null,[a("td",ee,[(n(!0),i(x,null,w(o.checkedRows,t=>(n(),i("span",{key:t.handNo,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1 text-right"}," \u0E21\u0E37\u0E2D\u0E17\u0E35\u0E48 "+g(t.handNo),1))),128))]),a("td",null,[a("div",te,[d(D,{class:"text-gray-900 dark:bg-gray-900 rounded text-md shadow border-gray-900 w-48 lg:w-64",options:o.memberList,label:"name",modelValue:o.memberSelected,"onUpdate:modelValue":e[2]||(e[2]=t=>o.memberSelected=t),placeholder:"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E25\u0E39\u0E01\u0E41\u0E0A\u0E23\u0E4C"},null,8,["options","modelValue"]),d(h,{disabled:o.memberSelected==="",color:"success",icon:"accountCheck",label:"\u0E40\u0E25\u0E37\u0E2D\u0E01",small:"",class:"ml-2",onClick:e[3]||(e[3]=t=>r.addMember())},null,8,["disabled"]),d(h,{color:"danger",icon:"close",label:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",small:"",class:"ml-2",onClick:e[4]||(e[4]=t=>r.cancelAdd())})])])])])])])):(n(),i("div",se,[d(k,{type:"justify-start"},{default:f(()=>[d(B,{modelValue:o.startDate,"onUpdate:modelValue":e[5]||(e[5]=t=>o.startDate=t),format:"dd/MM/yyyy",dark:"",class:"shadow rounded dark:bg-gray-900"},null,8,["modelValue"]),d(h,{disabled:!o.startDate,color:"success",icon:"calendarCheckOutline",label:"\u0E40\u0E23\u0E34\u0E48\u0E21\u0E27\u0E07",small:"",class:"ml-2",onClick:e[6]||(e[6]=t=>r.start())},null,8,["disabled"]),d(h,{color:"info",icon:"contentSave",label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",small:"",class:"ml-2",onClick:e[7]||(e[7]=t=>r.save())})]),_:1})])),a("div",oe,[a("table",null,[ae,a("tbody",null,[(n(!0),i(x,null,w(o.members,t=>(n(),i("tr",{key:t.id},[a("td",ne,g(t.handNo),1),a("td",le,[o.group.type==1&&(t.handNo>1||t.handNo==null)?(n(),p(C,{key:0,modelValue:t.amount,"onUpdate:modelValue":m=>t.amount=m,icon:"cash",type:"number",class:"w-64"},null,8,["modelValue","onUpdate:modelValue"])):b("",!0),o.group.type!=1&&(t.handNo>1||t.handNo==null)?(n(),i("span",re,g(o.group.type==2?r.formatCurrency(o.group.baseAmountSend):o.group.interest),1)):b("",!0)]),a("td",de,[a("span",null,g(t.name?t.name:"-"),1)]),t.handNo>1||t.handNo==null?(n(),p(y,{key:0,isChecked:t.careFeeFlag,class:"text-center border-b-0",onChecked:m=>r.careFeeChecked(m,t),"data-label":"\u0E04\u0E48\u0E32\u0E14\u0E39\u0E41\u0E25"},null,8,["isChecked","onChecked"])):(n(),i("td",ce)),a("td",ie,[o.group.type==1&&(t.handNo>1||t.handNo==null)?(n(),p(C,{key:0,icon:"accountMultipleMinusOutline",placeholder:"\u0E2B\u0E31\u0E01\u0E17\u0E49\u0E32\u0E22\u0E01\u0E35\u0E48\u0E07\u0E27\u0E14",type:"number",class:"w-40"})):b("",!0)]),!t.name&&(t.handNo>1||t.handNo==null)?(n(),p(y,{key:2,isChecked:t.checked,class:"text-center border-b-0 lg:w-6",onChecked:m=>r.checked(m,t),"data-label":"\u0E40\u0E25\u0E37\u0E2D\u0E01"},null,8,["isChecked","onChecked"])):(n(),i("td",ue,[t.name!=null&&t.name!=""&&(t.handNo>1||t.handNo==null)?(n(),p(h,{key:0,color:"danger",icon:"close",small:"",onClick:m=>r.confirm("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E25\u0E1A\u0E25\u0E39\u0E01\u0E41\u0E0A\u0E23\u0E4C "+t.name+" \u0E21\u0E37\u0E2D\u0E17\u0E35\u0E48 "+t.handNo+" \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?",t.id,r.removeMember)},null,8,["onClick"])):b("",!0)]))]))),128))])])]),a("div",he,[d(k,null,{default:f(()=>[me,a("b",pe,g(r.formatCurrency(r.totalAmount)),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1})}var ye=V(W,[["render",fe]]);export{ye as default};
