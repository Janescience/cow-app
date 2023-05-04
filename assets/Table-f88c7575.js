import{a as S,W as A,o as s,c as d,w as f,s as u,G as x,X as R,Y as L,z as M,p as T,m as N,_ as U,v as Y,g as I,f as z,N as E,B as H,$ as F,E as h,I as i,d as _,t as g,J as m,K as y,k as C,n as B,H as G}from"./index-5091c3d1.js";const J={class:"checkbox"},K=u("span",{class:"check"},null,-1),O={__name:"TableCheckboxCell",props:{type:{type:String,default:"td"},isChecked:{type:Boolean,default:!1}},emits:["checked"],setup(a,{emit:e}){const t=a,o=S(t.isChecked);return A(o,c=>{e("checked",c)}),(c,r)=>(s(),d(L(t.type),{class:"checkbox-cell"},{default:f(()=>[u("label",J,[x(u("input",{"onUpdate:modelValue":r[0]||(r[0]=k=>o.value=k),type:"checkbox"},null,512),[[R,o.value]]),K])]),_:1}))}},W={data(){return{textConfirm:"",modalConfirm:!1,funcConfirm:Function,idConfirm:null,dataSelectedConfirm:[],currentPage:0,checkedRows:[]}},props:{title:{type:String,default:""},items:{type:Array,default:[]},datas:{type:Array,default:[]},buttons:{type:Array,default:[]},hasCheckbox:Boolean,checkedData:{type:Object,default:null},perPage:{type:Number,default:10},icon:{type:String,default:""},loading:Boolean},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const a=[];for(let e=0;e<this.numPages;e++)a.push(e);return a}},components:{BaseButton:T,BaseButtons:N,CardBox:U,CardBoxModal:Y,TableCheckboxCell:O,UserAvatar:I,BaseLevel:z,BaseIcon:E},methods:{getValue(a,e){const t=this.getPropByString(a,e.value);if(!e.type)return e.func?e.func(a):t;switch(e.type){case"number":return this.formatCurrency(t);case"date":return this.formatDate(t);case"image":return t;case"icon":return t}},getPropByString(a,e){if(!e)return a;let t,o=e.split(".");for(var c=0,r=o.length-1;c<r;c++){t=o[c];var k=a[t];if(k!==void 0)a=k;else break}return a[o[c]]},btnClick(a,e){switch(a){case"edit":this.edit(e.data);break;case"delete":this.confirm("ยืนยันลบรายการนี้ ใช่หรือไม่ ?",e.id,null,this.removeData);break;case"detail":this.detail(e.path+"/"+e.id);break}},removeData(){this.$emit("delete",this.idConfirm)},removeSelected(){this.$emit("deleteSelected",this.dataSelectedConfirm),this.checkedRows=[]},edit(a){this.$emit("edit",a)},detail(a){this.$router.push(a)},confirm(a,e,t,o){this.textConfirm=a,this.funcConfirm=o,this.idConfirm=e,this.dataSelectedConfirm=t,this.modalConfirm=!0},checked(a,e){a?(e.checked=!0,this.checkedRows.push(e)):(e.checked=!1,this.checkedRows=this.removeArr(this.checkedRows,t=>t._id===e._id))},countChecked(){return this.checkedRows.length>0?"(เลือก "+this.checkedRows.length+" รายการ)":""},removeArr(a,e){const t=[];return a.forEach(o=>{e(o)||t.push(o)}),t},formatDate(a){return a?H(new Date(a)).format("DD/MM/YYYY"):null},formatCurrency(a){return F(a).format(0,0)}}},X={key:0,class:"p-3 bg-gray-100/50 dark:bg-gray-800"},q={class:"overflow-x-auto"},Q={key:0,class:"text-center whitespace-nowrap"},Z={key:1},j=["data-label"],$={key:2},ee={key:1,class:"lg:w-6 whitespace-nowrap"},te={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"};function ae(a,e,t,o,c,r){const k=h("CardBoxModal"),p=h("BaseButton"),b=h("BaseButtons"),w=h("TableCheckboxCell"),P=h("UserAvatar"),D=h("BaseIcon"),V=h("BaseLevel"),v=h("CardBox");return s(),i(m,null,[_(k,{modelValue:c.modalConfirm,"onUpdate:modelValue":e[0]||(e[0]=l=>c.modalConfirm=l),title:"ยืนยันอีกครั้ง","button-label":"ยืนยัน",onConfirm:c.funcConfirm,"has-cancel":"","has-button":""},{default:f(()=>[u("p",null,g(c.textConfirm),1)]),_:1},8,["modelValue","onConfirm"]),r.itemsPaginated.length>0?(s(),d(v,{key:0,title:t.title+" "+r.countChecked(),class:"shadow-lg mb-5","has-table":"",icon:t.icon,"header-icon":""},{default:f(()=>[c.checkedRows.length>0?(s(),i("div",X,[(s(!0),i(m,null,y(c.checkedRows,l=>(s(),i("span",{key:l._id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1"},g((t.checkedData.code?r.getValue(l,t.checkedData.code)+" : ":"")+r.getValue(l,t.checkedData.label)),1))),128)),_(b,{type:"justify-start lg:justify-end","no-wrap":""},{default:f(()=>[_(p,{color:"danger",label:"ลบทั้งหมด",onClick:e[1]||(e[1]=l=>r.confirm("ยืนยันลบรายการที่เลือกทั้งหมด ใช่หรือไม่ ?",null,c.checkedRows,r.removeSelected))})]),_:1})])):C("",!0),u("div",q,[u("table",null,[u("thead",null,[u("tr",null,[t.hasCheckbox?(s(),i("th",Q,"เลือก")):C("",!0),(s(!0),i(m,null,y(t.datas,l=>(s(),i("th",{key:l.label,class:B(["whitespace-nowrap",[l.class]])},g(l.label),3))),128)),t.buttons.length>0?(s(),i("th",Z)):C("",!0)])]),u("tbody",null,[(s(!0),i(m,null,y(r.itemsPaginated,l=>(s(),i("tr",{key:l._id},[t.hasCheckbox?(s(),d(w,{key:0,isChecked:l.checked,class:"text-center border-b-0 lg:w-6 before:hidden",onChecked:n=>r.checked(n,l)},null,8,["isChecked","onChecked"])):C("",!0),(s(!0),i(m,null,y(t.datas,n=>(s(),i("td",{key:n.label,"data-label":n.label,class:B(["whitespace-nowrap",[n.class]])},[n.type==="image"?(s(),d(P,{key:0,avatar:r.getValue(l,n),username:"profile",class:"w-36 mx-auto lg:h-20 lg:w-20"},null,8,["avatar"])):n.type==="icon"?(s(),d(D,{key:1,path:r.getValue(l,n),size:"22"},null,8,["path"])):(s(),i("span",$,g(r.getValue(l,n)),1))],10,j))),128)),t.buttons.length>0?(s(),i("td",ee,[_(b,{type:"justify-end lg:justify-start","no-wrap":""},{default:f(()=>[(s(!0),i(m,null,y(t.buttons,n=>x((s(),d(p,{small:"",key:n.label,color:n.color,label:n.label,onClick:le=>n.type==="oth"?n.func(l):r.btnClick(n.type,{data:l,id:l._id,path:n.path})},null,8,["color","label","onClick"])),[[G,n.condition?n.condition(l):!0]])),128))]),_:2},1024)])):C("",!0)]))),128))])])]),u("div",te,[_(V,null,{default:f(()=>[_(b,null,{default:f(()=>[(s(!0),i(m,null,y(r.pagesList,l=>(s(),d(p,{key:l,active:l===c.currentPage,label:l+1,small:"",onClick:n=>c.currentPage=l},null,8,["active","label","onClick"]))),128))]),_:1}),u("small",null,"หน้า "+g(r.currentPageHuman)+" จาก "+g(r.numPages),1)]),_:1})])]),_:1},8,["title","icon"])):t.loading?(s(),d(v,{key:1,loading:""})):(s(),d(v,{key:2,empty:""}))],64)}const ne=M(W,[["render",ae]]);export{ne as T};
