import{a as J,R as K,o as _,c as C,w as d,p as o,H as A,T as $,U as ee,V as D,N as M,O as P,Q as c,s as k,b as l,i as j,l as I,_ as R,k as O,W as te,g as N,h as ae,f as T,e as Y,X as E,t as g,j as q,d as L,S as le,P as se,Y as oe,Z as ne,F,G as S}from"./index.cad1d48f.js";import{_ as H}from"./BaseButtons.a3a9ec55.js";import{_ as re}from"./CardBoxModal.5558d598.js";import{_ as z}from"./FormField.b9c82410.js";import{a as x}from"./auth-header.6b837446.js";const ie={class:"checkbox"},de=o("span",{class:"check"},null,-1),ce={__name:"TableCheckboxCell",props:{type:{type:String,default:"td"},isChecked:{type:Boolean,default:!1}},emits:["checked"],setup(t,{emit:e}){const i=t,h=J(i.isChecked);return K(h,a=>{e("checked",a)}),(a,n)=>(_(),C(ee(i.type),{class:"checkbox-cell"},{default:d(()=>[o("label",ie,[A(o("input",{"onUpdate:modelValue":n[0]||(n[0]=b=>h.value=b),type:"checkbox"},null,512),[[$,h.value]]),de])]),_:1}))}};async function ue(t={}){let e="?";return t.farm&&(e=e+`farm=${t.farm}&`),t.flag&&(e=e+`flag=${t.flag}&`),t.code&&(e=e+`code=${t.code}&`),t.name&&(e=e+`name=${t.name}&`),t.status&&(e=e+`status=${t.status}&`),t.birthDate&&(e=e+`birthDate=${t.birthDate}&`),t.corral&&(e=e+`corral=${t.corral}&`),t?e.replace(/&*$/,""):""}class me{async all(e){const i=await ue(e);return D.get("/cow"+i,{headers:x()}).then(h=>h)}get(e){return D.get(`/cow/${e}`,{headers:x()})}create(e){return D.post("/cow",e,{headers:x()})}delete(e){return D.delete(`/cow/${e}`,{headers:x()})}update(e,i){return D.put(`/cow/${e}`,i,{headers:x()})}}var U=new me;const he={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},methods:{async initialData(){const t={farm:P().farm._id};try{const e=await U.all(t);if(this.datas=[],e&&(this.datas=e.data.cows,this.datas.map(i=>i.cow_data=i.code+" : "+i.name)),this.defaultValue){const i=this.datas.filter(h=>h[this.defaultType]==this.defaultValue);i&&this.handleInput(this.reduceAction(i[0]))}}catch(e){this.datas=[],console.error("Error: "+e.message)}},reduceAction(t){return this.valueType==="object"?t:t.code},handleInput(t){this.$emit("update:value",t),this.dataSelected=this.datas.find(e=>e.cde===t||e.name===t),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:"code",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:""}}},fe={class:"relative"},_e=j(" \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ");function pe(t,e,i,h,a,n){const b=c("mdicon"),u=c("v-select");return _(),k("div",fe,[l(u,{class:"ddl",clearable:i.clear,disabled:i.disabled,options:a.datas,reduce:n.reduceAction,label:"cow_data",placeholder:"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E42\u0E04",onInput:n.handleInput,modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=f=>n.value=f),dataSelected:i.dataSelected},{"no-options":d(()=>[l(b,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),_e]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected"])])}var ge=M(he,[["render",pe]]);const be={data(){return{cow:{imgBase64:"",image:null,code:"",name:"",status:"1",birthDate:null,corral:"",dad:"",mom:"",farm:P().farm._id},status:[{id:1,label:"\u0E17\u0E49\u0E2D\u0E07"},{id:2,label:"\u0E19\u0E21\u0E41\u0E2B\u0E49\u0E07"},{id:3,label:"\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E1C\u0E25\u0E34\u0E15"},{id:4,label:"\u0E27\u0E31\u0E27\u0E40\u0E14\u0E47\u0E01"}],loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{url(){return this.cow.image!=null?URL.createObjectURL(this.cow.image):"../../src/assets/image/img-mockup.png"},value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}}},watch:{dataEdit:{handler(t,e){t!=null&&this.mode=="edit"&&(this.cow=t)},deep:!0}},methods:{clear(){this.$emit("update:dataEdit",null),this.cow.imgBase64="",this.cow.image=null,this.cow.code="",this.cow.name="",this.cow.birthDate=null,this.cow.status=1,this.cow.corral="",this.cow.dad="",this.cow.mom="",delete this.cow._id},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await U.create(this.cow)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await U.update(this.cow._id,this.cow)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"))}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message}},chooseImg(){let t=document.getElementById("imageUpload");t!=null&&t.click()},handleFile(t){var e=t.target.files||t.dataTransfer.files;!e.length||(this.cow.image=e[0],this.createBase64(e[0]))},createBase64(t){var e=new FileReader;e.onload=i=>{this.cow.imgBase64=i.target.result},e.readAsDataURL(t)}},components:{BaseButton:I,BaseButtons:H,CardBox:R,BaseDivider:O,OverlayLayer:te,FormField:z,FormControl:N,NotificationBar:ae,UserAvatar:T,BaseLevel:Y},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},we=["src"],ye=j(" \u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E (\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B) "),Ce={class:"grid lg:grid-cols-4 grid-cols-2 gap-5 mt-3"};function ve(t,e,i,h,a,n){const b=c("BaseLevel"),u=c("FormControl"),f=c("FormField"),v=c("NotificationBar"),y=c("BaseDivider"),w=c("BaseButton"),s=c("BaseButtons"),p=c("CardBox"),B=c("OverlayLayer");return A((_(),C(B,null,{default:d(()=>[A(l(p,{title:i.mode==="create"?"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E04":"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E04",class:"shadow-lg w-full overflow-y-auto md:w-3/5 lg:w-1/1 z-50","header-icon":"close",modal:"",form:"",onSubmit:L(n.submit,["prevent"]),onHeaderIconClick:n.cancel},{default:d(()=>[l(b,{type:"justify-center mb-1"},{default:d(()=>[o("input",{id:"imageUpload",onChange:e[0]||(e[0]=(...m)=>n.handleFile&&n.handleFile(...m)),type:"file",accept:"image/*",hidden:""},null,32),o("img",{class:"w-56 cursor-pointer rounded-lg",onClick:e[1]||(e[1]=(...m)=>n.chooseImg&&n.chooseImg(...m)),src:n.url},null,8,we)]),_:1}),l(b,{type:"justify-center mb-6"},{default:d(()=>[ye]),_:1}),o("div",Ce,[l(f,{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:d(()=>[l(u,{modelValue:a.cow.code,"onUpdate:modelValue":e[2]||(e[2]=m=>a.cow.code=m),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),l(f,{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:d(()=>[l(u,{modelValue:a.cow.name,"onUpdate:modelValue":e[3]||(e[3]=m=>a.cow.name=m),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),l(f,{label:"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:d(()=>[l(u,{modelValue:a.cow.birthDate,"onUpdate:modelValue":e[4]||(e[4]=m=>a.cow.birthDate=m),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(f,{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:d(()=>[l(u,{modelValue:a.cow.status,"onUpdate:modelValue":e[5]||(e[5]=m=>a.cow.status=m),options:a.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),l(f,{label:"\u0E04\u0E2D\u0E01"},{default:d(()=>[l(u,{modelValue:a.cow.corral,"onUpdate:modelValue":e[6]||(e[6]=m=>a.cow.corral=m),icon:"barn"},null,8,["modelValue"])]),_:1}),l(f,{label:"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C"},{default:d(()=>[l(u,{modelValue:a.cow.dad,"onUpdate:modelValue":e[7]||(e[7]=m=>a.cow.dad=m),icon:"genderMale"},null,8,["modelValue"])]),_:1}),l(f,{label:"\u0E41\u0E21\u0E48\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C"},{default:d(()=>[l(u,{modelValue:a.cow.mom,"onUpdate:modelValue":e[8]||(e[8]=m=>a.cow.mom=m),icon:"genderFemale"},null,8,["modelValue"])]),_:1})]),a.alert?(_(),C(v,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:d(()=>[j(g(a.alert),1)]),_:1})):q("",!0),l(y),l(s,{type:"justify-center"},{default:d(()=>[l(w,{label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",color:"success",type:"submit",loading:a.loading},null,8,["loading"]),l(w,{label:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",color:"danger",onClick:n.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[E,n.value]])]),_:1},512)),[[E,n.value]])}var ke=M(be,[["render",ve]]),Be=e=>{var e=new Date(e),i=e.getYear(),h=e.getMonth(),a=e.getDate(),n=new Date,b=n.getYear(),u=n.getMonth(),f=n.getDate(),s={},p="",v=b-i;if(u>=h)var y=u-h;else{v--;var y=12+u-h}if(f>=a)var w=f-a;else{y--;var w=31+f-a;y<0&&(y=11,v--)}var s={years:v,months:y,days:w},p="";return s.years>0&&s.months>0&&s.days>0?p=s.years+" \u0E1B\u0E35 "+s.months+" \u0E40\u0E14\u0E37\u0E2D\u0E19 "+s.days+" \u0E27\u0E31\u0E19":s.years==0&&s.months==0&&s.days>0?p=s.days+" \u0E27\u0E31\u0E19":s.years>0&&s.months==0&&s.days==0?p=s.years+" \u0E1B\u0E35 (\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14)":s.years>0&&s.months>0&&s.days==0?p=s.years+" \u0E1B\u0E35 "+s.months+" \u0E40\u0E14\u0E37\u0E2D\u0E19":s.years==0&&s.months>0&&s.days>0?p=s.months+" \u0E40\u0E14\u0E37\u0E2D\u0E19 "+s.days+" \u0E27\u0E31\u0E19":s.years>0&&s.months==0&&s.days>0?p=s.years+" \u0E1B\u0E35 "+s.days+" \u0E27\u0E31\u0E19":s.years==0&&s.months>0&&s.days==0&&(p=s.months+" \u0E40\u0E14\u0E37\u0E2D\u0E19"),p};const Ve={data(){return{modalCow:!1,status:[{id:"",label:"\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"},{id:1,label:"\u0E17\u0E49\u0E2D\u0E07"},{id:2,label:"\u0E19\u0E21\u0E41\u0E2B\u0E49\u0E07"},{id:3,label:"\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E1C\u0E25\u0E34\u0E15"},{id:4,label:"\u0E27\u0E31\u0E27\u0E40\u0E14\u0E47\u0E01"}],textConfirm:"",modalConfirm:!1,funcConfirm:Function,idConfirm:null,perPage:10,currentPage:0,checkedRows:[],items:[],search:{code:null,status:"",birthDate:null,corral:"",flag:"Y",farm:P().farm._id},loading:!1,mode:"create",dataEdit:null}},components:{SectionMain:le,LayoutAuthenticated:se,BaseButton:I,BaseIcon:oe,BaseButtons:H,CardBox:R,UserAvatar:T,TableCheckboxCell:ce,CardBoxModal:re,BaseLevel:Y,FormControl:N,FormField:z,BaseDivider:O,DDLCow:ge,CreateCowModal:ke},created(){this.getCows()},computed:{itemsPaginated(){return this.items?this.items.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1)):[]},numPages(){return Math.ceil((this.items?this.items.length:0)/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const t=[];for(let e=0;e<this.numPages;e++)t.push(e);return t}},methods:{async getCows(){this.loading=!0;const t=await U.all(this.search);this.items=[],t.data&&(this.items=t.data.cows),this.loading=!1},async removeCow(){this.loading=!0,(await U.update(this.idConfirm,{flag:"N"})).data&&this.getCows(),this.loading=!1},edit(t){this.dataEdit=t,this.mode="edit",this.dataEdit.birthDate=new Date(this.dataEdit.birthDate),this.modalCow=!0},reset(){this.search.code=null,this.search.status="",this.search.birthDate=null,this.search.corral=""},checked(t,e){t?(e.checked=!0,this.checkedRows.push(e)):(e.checked=!1,this.checkedRows=this.removeArr(this.checkedRows,i=>i._id===e._id))},removeArr(t,e){const i=[];return t.forEach(h=>{e(h)||i.push(h)}),i},confirm(t,e,i){this.textConfirm=t,this.funcConfirm=i,this.idConfirm=e,this.modalConfirm=!0},countChecked(){return this.checkedRows.length>0?"(\u0E40\u0E25\u0E37\u0E2D\u0E01 "+this.checkedRows.length+" \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23)":""},calAge(t){return Be(t)},formatDate(t){return t?ne(new Date(t)).format("DD/MM/YYYY"):""}}},De={class:"px-6 sm:px-0 mb-6 flex items-center justify-between"},xe={class:"flex items-center justify-start"},Ue=o("h1",{class:"text-2xl"}," \u0E42\u0E04 ",-1),Fe={class:"grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5"},Se={key:0,class:"p-3 bg-gray-100/50 dark:bg-gray-800"},Ae={class:"overflow-x-auto"},Le=o("thead",null,[o("tr",null,[o("th",{class:"text-center whitespace-nowrap"},"\u0E40\u0E25\u0E37\u0E2D\u0E01"),o("th",{class:"text-center whitespace-nowrap"},"\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E"),o("th",{class:"text-center whitespace-nowrap"},"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04"),o("th",{class:"text-center whitespace-nowrap"},"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04 "),o("th",{class:"text-center whitespace-nowrap"},"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14"),o("th",{class:"text-center"},"\u0E2D\u0E32\u0E22\u0E38 "),o("th",{class:"text-center"},"\u0E2A\u0E16\u0E32\u0E19\u0E30 "),o("th",{class:"text-center"},"\u0E04\u0E2D\u0E01 "),o("th",{class:"text-center whitespace-nowrap"},"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C "),o("th",{class:"text-center whitespace-nowrap"},"\u0E41\u0E21\u0E48\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C "),o("th")])],-1),Me={class:"border-b-0 lg:w-6 before:hidden"},Pe={"data-label":"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",class:"whitespace-nowrap"},je={"data-label":"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",class:"whitespace-nowrap"},Ee={"data-label":"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",class:"text-center"},Ie={"data-label":"\u0E2D\u0E32\u0E22\u0E38",class:"whitespace-nowrap"},Re={"data-label":"\u0E2A\u0E16\u0E32\u0E19\u0E30",class:"whitespace-nowrap"},Oe={"data-label":"\u0E04\u0E2D\u0E01"},Ne={"data-label":"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",class:"whitespace-nowrap"},Te={"data-label":"\u0E41\u0E21\u0E48\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",class:"whitespace-nowrap"},Ye={class:"lg:w-6 whitespace-nowrap"},qe={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-gray-800"};function He(t,e,i,h,a,n){const b=c("BaseIcon"),u=c("BaseButton"),f=c("CreateCowModal"),v=c("CardBoxModal"),y=c("DDLCow"),w=c("FormField"),s=c("FormControl"),p=c("BaseDivider"),B=c("BaseButtons"),m=c("CardBox"),Q=c("TableCheckboxCell"),G=c("UserAvatar"),W=c("BaseLevel"),X=c("SectionMain"),Z=c("LayoutAuthenticated");return _(),C(Z,null,{default:d(()=>[l(X,null,{default:d(()=>[o("section",De,[o("div",xe,[l(b,{path:"cow",size:"30",class:"mr-3"}),Ue]),l(u,{label:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E04",color:"success",onClick:e[0]||(e[0]=r=>{a.mode="create",a.modalCow=!0})})]),l(f,{modelValue:a.modalCow,"onUpdate:modelValue":e[1]||(e[1]=r=>a.modalCow=r),onConfirm:n.getCows,onCancel:n.getCows,mode:a.mode,dataEdit:a.dataEdit},null,8,["modelValue","onConfirm","onCancel","mode","dataEdit"]),l(v,{modelValue:a.modalConfirm,"onUpdate:modelValue":e[2]||(e[2]=r=>a.modalConfirm=r),title:"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07","button-label":"\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19",onConfirm:a.funcConfirm,"has-cancel":"","has-button":""},{default:d(()=>[o("p",null,g(a.textConfirm),1)]),_:1},8,["modelValue","onConfirm"]),l(m,{title:"\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E42\u0E04",icon:"",form:"",class:"mb-3","header-icon":"",onSubmit:L(n.getCows,["prevent"]),onReset:L(n.reset,["prevent"])},{default:d(()=>[o("div",Fe,[l(w,{label:"\u0E42\u0E04"},{default:d(()=>[l(y,{modelValue:a.search.code,"onUpdate:modelValue":e[3]||(e[3]=r=>a.search.code=r)},null,8,["modelValue"])]),_:1}),l(w,{label:"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14"},{default:d(()=>[l(s,{modelValue:a.search.birthDate,"onUpdate:modelValue":e[4]||(e[4]=r=>a.search.birthDate=r),icon:"calendar",type:"date"},null,8,["modelValue"])]),_:1}),l(w,{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30"},{default:d(()=>[l(s,{modelValue:a.search.status,"onUpdate:modelValue":e[5]||(e[5]=r=>a.search.status=r),options:a.status},null,8,["modelValue","options"])]),_:1}),l(w,{label:"\u0E04\u0E2D\u0E01"},{default:d(()=>[l(s,{modelValue:a.search.corral,"onUpdate:modelValue":e[6]||(e[6]=r=>a.search.corral=r),icon:"barn"},null,8,["modelValue"])]),_:1})]),l(p),l(B,{type:"justify-center","no-wrap":""},{default:d(()=>[l(u,{type:"submit",color:"info",label:"\u0E04\u0E49\u0E19\u0E2B\u0E32"}),l(u,{type:"reset",color:"danger",label:"\u0E25\u0E49\u0E32\u0E07"})]),_:1})]),_:1},8,["onSubmit","onReset"]),n.itemsPaginated.length>0?(_(),C(m,{key:0,title:"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E42\u0E04 "+n.countChecked(),class:"shadow-lg","has-table":"","header-icon":""},{default:d(()=>[a.checkedRows.length>0?(_(),k("div",Se,[(_(!0),k(F,null,S(a.checkedRows,r=>(_(),k("span",{key:r._id,class:"inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-gray-700 mb-1"},g(r.name),1))),128)),l(B,{type:"justify-start lg:justify-end","no-wrap":""},{default:d(()=>[l(u,{color:"danger",label:"\u0E25\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",onClick:e[7]||(e[7]=r=>t.isModalActive=!0)})]),_:1})])):q("",!0),o("div",Ae,[o("table",null,[Le,o("tbody",null,[(_(!0),k(F,null,S(n.itemsPaginated,r=>(_(),k("tr",{key:r._id},[l(Q,{isChecked:r.checked,class:"text-center border-b-0 lg:w-6 before:hidden",onChecked:V=>n.checked(V,r)},null,8,["isChecked","onChecked"]),o("td",Me,[l(G,{class:"w-24 h-24 mx-auto lg:w-12 lg:h-12"})]),o("td",Pe,[o("span",null,g(r.code),1)]),o("td",je,g(r.name),1),o("td",Ee,g(n.formatDate(r.birthDate)),1),o("td",Ie,g(n.calAge(r.birthDate)),1),o("td",Re,g(a.status[r.status].label),1),o("td",Oe,g(r.corral),1),o("td",Ne,g(r.dad),1),o("td",Te,g(r.mom),1),o("td",Ye,[l(B,{type:"justify-end lg:justify-start","no-wrap":""},{default:d(()=>[l(u,{color:"danger",label:"\u0E25\u0E1A",onClick:V=>n.confirm("\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E25\u0E1A\u0E42\u0E04 "+r.name+" \u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 ?",r._id,n.removeCow)},null,8,["onClick"]),l(u,{color:"warning",label:"\u0E41\u0E01\u0E49\u0E44\u0E02",onClick:V=>n.edit(r)},null,8,["onClick"]),l(u,{color:"info",label:"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",onClick:V=>t.detail(r._id)},null,8,["onClick"])]),_:2},1024)])]))),128))])])]),o("div",qe,[l(W,null,{default:d(()=>[l(B,null,{default:d(()=>[(_(!0),k(F,null,S(n.pagesList,r=>(_(),C(u,{key:r,active:r===a.currentPage,label:r+1,small:"",onClick:V=>a.currentPage=r},null,8,["active","label","onClick"]))),128))]),_:1}),o("small",null,"\u0E2B\u0E19\u0E49\u0E32 "+g(n.currentPageHuman)+" \u0E08\u0E32\u0E01 "+g(n.numPages),1)]),_:1})])]),_:1},8,["title"])):a.loading?(_(),C(m,{key:1,loading:""})):(_(),C(m,{key:2,empty:""}))]),_:1})]),_:1})}var Ze=M(Ve,[["render",He]]);export{Ze as default};
