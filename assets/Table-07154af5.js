import{a as S,X as V,o as s,c as d,w as f,s as u,G as B,Y as A,$ as L,B as M,p as R,m as T,_ as U,v as Y,g as E,f as H,z as N,a0 as z,E as h,I as i,d as _,t as g,J as m,K as C,k as y,n as x,H as F}from"./index-26f3a63b.js";const G={class:"checkbox"},I=u("span",{class:"check"},null,-1),J={__name:"TableCheckboxCell",props:{type:{type:String,default:"td"},isChecked:{type:Boolean,default:!1}},emits:["checked"],setup(a,{emit:e}){const t=a,o=S(t.isChecked);return V(o,c=>{e("checked",c)}),(c,n)=>(s(),d(L(t.type),{class:"checkbox-cell"},{default:f(()=>[u("label",G,[B(u("input",{"onUpdate:modelValue":n[0]||(n[0]=k=>o.value=k),type:"checkbox"},null,512),[[A,o.value]]),I])]),_:1}))}},K={data(){return{textConfirm:"",modalConfirm:!1,funcConfirm:Function,idConfirm:null,dataSelectedConfirm:[],perPage:10,currentPage:0,checkedRows:[],loading:!1}},props:{title:{type:String,default:""},items:{type:Array,default:[]},datas:{type:Array,default:[]},buttons:{type:Array,default:[]},hasCheckbox:Boolean,checkedData:{type:Object,default:null},icon:{type:String,default:""},loading:Boolean},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const a=[];for(let e=0;e<this.numPages;e++)a.push(e);return a}},components:{BaseButton:R,BaseButtons:T,CardBox:U,CardBoxModal:Y,TableCheckboxCell:J,UserAvatar:E,BaseLevel:H},methods:{getValue(a,e){const t=this.getPropByString(a,e.value);if(!e.type)return e.func?e.func(a):t;switch(e.type){case"number":return this.formatCurrency(t);case"date":return this.formatDate(t);case"image":return t}},getPropByString(a,e){if(!e)return a;let t,o=e.split(".");for(var c=0,n=o.length-1;c<n;c++){t=o[c];var k=a[t];if(k!==void 0)a=k;else break}return a[o[c]]},btnClick(a,e){switch(a){case"edit":this.edit(e.data);break;case"delete":this.confirm("ยืนยันลบรายการนี้ ใช่หรือไม่ ?",e.id,null,this.removeData);break;case"detail":this.detail(e.path+"/"+e.id);break}},removeData(){this.$emit("delete",this.idConfirm)},removeSelected(){this.$emit("deleteSelected",this.dataSelectedConfirm)},edit(a){this.$emit("edit",a)},detail(a){this.$router.push(a)},confirm(a,e,t,o){this.textConfirm=a,this.funcConfirm=o,this.idConfirm=e,this.dataSelectedConfirm=t,this.modalConfirm=!0},checked(a,e){a?(e.checked=!0,this.checkedRows.push(e)):(e.checked=!1,this.checkedRows=this.removeArr(this.checkedRows,t=>t._id===e._id))},countChecked(){return this.checkedRows.length>0?"(เลือก "+this.checkedRows.length+" รายการ)":""},removeArr(a,e){const t=[];return a.forEach(o=>{e(o)||t.push(o)}),t},formatDate(a){return a?N(new Date(a)).format("DD/MM/YYYY"):null},formatCurrency(a){return z(a).format(0,0)}}},O={key:0,class:"p-3 bg-gray-100/50 dark:bg-gray-800"},X={class:"overflow-x-auto"},q={key:0,class:"text-center whitespace-nowrap"},Q={key:1},W=["data-label"],Z={key:1},j={key:1,class:"lg:w-6 whitespace-nowrap"},$={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"};function ee(a,e,t,o,c,n){const k=h("CardBoxModal"),p=h("BaseButton"),b=h("BaseButtons"),w=h("TableCheckboxCell"),P=h("UserAvatar"),D=h("BaseLevel"),v=h("CardBox");return s(),i(m,null,[_(k,{modelValue:c.modalConfirm,"onUpdate:modelValue":e[0]||(e[0]=l=>c.modalConfirm=l),title:"ยืนยันอีกครั้ง","button-label":"ยืนยัน",onConfirm:c.funcConfirm,"has-cancel":"","has-button":""},{default:f(()=>[u("p",null,g(c.textConfirm),1)]),_:1},8,["modelValue","onConfirm"]),n.itemsPaginated.length>0?(s(),d(v,{key:0,title:t.title+" "+n.countChecked(),class:"shadow-lg mb-5","has-table":"",icon:t.icon,"header-icon":""},{default:f(()=>[c.checkedRows.length>0?(s(),i("div",O,[(s(!0),i(m,null,C(c.checkedRows,l=>(s(),i("span",{key:l._id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1"},g((t.checkedData.code?n.getValue(l,t.checkedData.code)+" : ":"")+n.getValue(l,t.checkedData.label)),1))),128)),_(b,{type:"justify-start lg:justify-end","no-wrap":""},{default:f(()=>[_(p,{color:"danger",label:"ลบทั้งหมด",onClick:e[1]||(e[1]=l=>n.confirm("ยืนยันลบรายการที่เลือกทั้งหมด ใช่หรือไม่ ?",null,c.checkedRows,n.removeSelected))})]),_:1})])):y("",!0),u("div",X,[u("table",null,[u("thead",null,[u("tr",null,[t.hasCheckbox?(s(),i("th",q,"เลือก")):y("",!0),(s(!0),i(m,null,C(t.datas,l=>(s(),i("th",{key:l.label,class:x(["whitespace-nowrap",[l.class]])},g(l.label),3))),128)),t.buttons.length>0?(s(),i("th",Q)):y("",!0)])]),u("tbody",null,[(s(!0),i(m,null,C(n.itemsPaginated,l=>(s(),i("tr",{key:l._id},[t.hasCheckbox?(s(),d(w,{key:0,isChecked:l.checked,class:"text-center border-b-0 lg:w-6 before:hidden",onChecked:r=>n.checked(r,l)},null,8,["isChecked","onChecked"])):y("",!0),(s(!0),i(m,null,C(t.datas,r=>(s(),i("td",{key:r.label,"data-label":r.label,class:x(["whitespace-nowrap",[r.class]])},[r.type==="image"?(s(),d(P,{key:0,avatar:n.getValue(l,r),class:"w-36 mx-auto lg:h-20 lg:w-20"},null,8,["avatar"])):(s(),i("span",Z,g(n.getValue(l,r)),1))],10,W))),128)),t.buttons.length>0?(s(),i("td",j,[_(b,{type:"justify-end lg:justify-start","no-wrap":""},{default:f(()=>[(s(!0),i(m,null,C(t.buttons,r=>B((s(),d(p,{key:r.label,color:r.color,label:r.label,onClick:te=>r.type==="oth"?r.func(l):n.btnClick(r.type,{data:l,id:l._id,path:r.path})},null,8,["color","label","onClick"])),[[F,r.condition?r.condition(l):!0]])),128))]),_:2},1024)])):y("",!0)]))),128))])])]),u("div",$,[_(D,null,{default:f(()=>[_(b,null,{default:f(()=>[(s(!0),i(m,null,C(n.pagesList,l=>(s(),d(p,{key:l,active:l===c.currentPage,label:l+1,small:"",onClick:r=>c.currentPage=l},null,8,["active","label","onClick"]))),128))]),_:1}),u("small",null,"หน้า "+g(n.currentPageHuman)+" จาก "+g(n.numPages),1)]),_:1})])]),_:1},8,["title","icon"])):t.loading?(s(),d(v,{key:1,loading:""})):(s(),d(v,{key:2,empty:""}))],64)}const le=M(K,[["render",ee]]);export{le as T};
