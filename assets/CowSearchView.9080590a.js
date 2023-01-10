import{N as v,_ as S,m as U,Q as o,o as m,i as h,w as i,d as B,b as l,O as F,y as L,k as E,x as A,R as O,p as I,q as R,H as x,T as D,e as N,t as j,v as H,l as z,S as G,P,U as Q,V as W,W as Y,a as C,F as J,G as K}from"./index.a37edb95.js";import{_ as T}from"./BaseButtons.048c6afb.js";import{_ as M}from"./FormField.c2711203.js";import{C as _,D as X,T as Z,a as $}from"./Criteria.e7a2f5fd.js";import{g as ee}from"./age-calculate.285cb1f6.js";import"./CardBoxModal.fb7be500.js";import"./auth-header.ced71286.js";const ae={computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{chooseImg(){let e=document.getElementById("imageUpload");e!=null&&e.click()},handleFile(e){var a=e.target.files||e.dataTransfer.files;!a.length||this.createBase64(a[0])},createBase64(e){var a=new FileReader;a.onload=u=>{this.value=u.target.result},a.readAsDataURL(e)}},components:{BaseLevel:S,UserAvatar:U},props:{modelValue:{type:String,default:""}}};function te(e,a,u,y,t,s){const f=o("UserAvatar"),p=o("BaseLevel");return m(),h(p,{type:"justify-center mb-1"},{default:i(()=>[B("input",{id:"imageUpload",onChange:a[0]||(a[0]=(...c)=>s.handleFile&&s.handleFile(...c)),type:"file",accept:"image/*",hidden:""},null,32),l(f,{class:"lg:w-32 lg:h-32 w-32 h-32",avatar:s.value,onClick:s.chooseImg},null,8,["avatar","onClick"])]),_:1})}var le=v(ae,[["render",te]]);const oe={data(){return{cow:{image:"image/img-mockup.png",code:"",name:"",status:"1",birthDate:null,corral:"",dad:"",mom:"",farm:F().farm._id},status:[{id:1,label:"\u0E17\u0E49\u0E2D\u0E07"},{id:2,label:"\u0E19\u0E21\u0E41\u0E2B\u0E49\u0E07"},{id:3,label:"\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E1C\u0E25\u0E34\u0E15"},{id:4,label:"\u0E27\u0E31\u0E27\u0E40\u0E14\u0E47\u0E01"}],loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},watch:{dataEdit:{handler(e,a){e!=null&&this.mode=="edit"&&(this.cow=e,this.cow.image=this.cow.image?this.cow.image:"../../src/assets/image/img-mockup.png")},deep:!0}},methods:{clear(){this.$emit("update:dataEdit",null),this.cow.image="image/img-mockup.png",this.cow.code="",this.cow.name="",this.cow.birthDate=null,this.cow.status=1,this.cow.corral="",this.cow.dad="",this.cow.mom="",delete this.cow._id},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await _.create(this.cow)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await _.update(this.cow._id,this.cow)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"))}catch(e){console.error("Error : ",e),this.loading=!1,this.alert=e.response.data.message}}},components:{BaseButton:L,BaseButtons:T,CardBox:E,BaseDivider:A,OverlayLayer:O,FormField:M,FormControl:I,NotificationBar:R,UserAvatar:U,BaseLevel:S,ImageUpload:le},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},se=N(" \u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E (\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B) "),ne={class:"grid lg:grid-cols-4 grid-cols-2 gap-5 mt-3"};function ie(e,a,u,y,t,s){const f=o("ImageUpload"),p=o("BaseLevel"),c=o("FormControl"),d=o("FormField"),w=o("NotificationBar"),b=o("BaseDivider"),g=o("BaseButton"),r=o("BaseButtons"),V=o("CardBox"),q=o("OverlayLayer");return x((m(),h(q,null,{default:i(()=>[x(l(V,{title:u.mode==="create"?"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E04":"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E04",class:"shadow-lg w-full overflow-y-auto md:w-3/5 lg:w-1/1 z-50","header-icon":"close",modal:"",form:"",onSubmit:z(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:i(()=>[l(f,{modelValue:t.cow.image,"onUpdate:modelValue":a[0]||(a[0]=n=>t.cow.image=n)},null,8,["modelValue"]),l(p,{type:"justify-center mb-6 text-sm"},{default:i(()=>[se]),_:1}),B("div",ne,[l(d,{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[l(c,{modelValue:t.cow.code,"onUpdate:modelValue":a[1]||(a[1]=n=>t.cow.code=n),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[l(c,{modelValue:t.cow.name,"onUpdate:modelValue":a[2]||(a[2]=n=>t.cow.name=n),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[l(c,{modelValue:t.cow.birthDate,"onUpdate:modelValue":a[3]||(a[3]=n=>t.cow.birthDate=n),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(d,{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[l(c,{modelValue:t.cow.status,"onUpdate:modelValue":a[4]||(a[4]=n=>t.cow.status=n),options:t.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),l(d,{label:"\u0E04\u0E2D\u0E01"},{default:i(()=>[l(c,{modelValue:t.cow.corral,"onUpdate:modelValue":a[5]||(a[5]=n=>t.cow.corral=n),icon:"barn"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C"},{default:i(()=>[l(c,{modelValue:t.cow.dad,"onUpdate:modelValue":a[6]||(a[6]=n=>t.cow.dad=n),icon:"genderMale"},null,8,["modelValue"])]),_:1}),l(d,{label:"\u0E41\u0E21\u0E48\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C"},{default:i(()=>[l(c,{modelValue:t.cow.mom,"onUpdate:modelValue":a[7]||(a[7]=n=>t.cow.mom=n),icon:"genderFemale"},null,8,["modelValue"])]),_:1})]),t.alert?(m(),h(w,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[N(j(t.alert),1)]),_:1})):H("",!0),l(b),l(r,{type:"justify-center"},{default:i(()=>[l(g,{label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),l(g,{label:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[D,s.value]])]),_:1},512)),[[D,s.value]])}var re=v(oe,[["render",ie]]);const k=()=>[{id:"",label:"\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"},{id:1,label:"\u0E17\u0E49\u0E2D\u0E07"},{id:2,label:"\u0E19\u0E21\u0E41\u0E2B\u0E49\u0E07"},{id:3,label:"\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E1C\u0E25\u0E34\u0E15"},{id:4,label:"\u0E27\u0E31\u0E27\u0E40\u0E14\u0E47\u0E01"}],ce={data(){return{modalCow:!1,items:[],forms:[{label:"\u0E42\u0E04",value:"code",type:"ddl",module:"cow",valueType:"code"},{label:"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",value:"birthDate",icon:"calendar",type:"date"},{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",value:"status",options:k()},{label:"\u0E04\u0E2D\u0E01",value:"corral",icon:"barn"}],search:{code:null,status:"",birthDate:null,corral:"",flag:"Y",farm:F().farm._id},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E",class:"text-center",value:"image",type:"image"},{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",value:"code"},{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",value:"name"},{label:"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",class:"text-center",value:"birthDate",type:"date"},{label:"\u0E2D\u0E32\u0E22\u0E38",class:"text-center",func:e=>this.calAge(e.birthDate)},{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",func:e=>k()[e.status].label},{label:"\u0E04\u0E2D\u0E01",value:"corral"},{label:"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",value:"dad"},{label:"\u0E41\u0E21\u0E48\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",value:"mom"}],buttons:[{label:"\u0E25\u0E1A",type:"delete",color:"danger"},{label:"\u0E41\u0E01\u0E49\u0E44\u0E02",type:"edit",color:"warning"},{label:"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",type:"detail",color:"info",path:"/manage/cow/detail"}]}},components:{SectionMain:G,LayoutAuthenticated:P,BaseButton:L,BaseIcon:Q,BaseButtons:T,CardBox:E,FormControl:I,FormField:M,BaseDivider:A,DDLCow:X,CreateCowModal:re,Table:Z,SectionTitleBarSub:W,Criteria:$,CardBoxClient:Y},created(){this.getCows()},methods:{async getCows(){this.loading=!0;const e=await _.all(this.search);this.items=[],e.data&&(this.items=e.data.cows),this.loading=!1},async removeCow(e){this.loading=!0,(await _.update(e,{flag:"N"})).data&&this.getCows(),this.loading=!1},edit(e){this.dataEdit=e,this.mode="edit",this.dataEdit.birthDate=new Date(this.dataEdit.birthDate),this.modalCow=!0},reset(){this.search.code=null,this.search.status="",this.search.birthDate=null,this.search.corral=""},calAge(e){return ee(e)}}},de={key:0,class:"grid lg:gap-3 grid-cols-3 lg:grid-cols-6 md:grid-cols-4"},me={key:1,class:"text-center py-10 text-gray-500 dark:text-gray-400"},ue=B("p",null," \u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25...",-1);function fe(e,a,u,y,t,s){const f=o("SectionTitleBarSub"),p=o("CreateCowModal"),c=o("Criteria"),d=o("CardBoxClient"),w=o("BaseIcon"),b=o("SectionMain"),g=o("LayoutAuthenticated");return m(),h(g,null,{default:i(()=>[l(b,null,{default:i(()=>[l(f,{icon:"cow",title:"\u0E42\u0E04",btnText:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E04","has-btn-add":"","has-btn-search":"",onOpenModal:a[0]||(a[0]=r=>{t.mode="create",t.modalCow=!0})}),l(p,{modelValue:t.modalCow,"onUpdate:modelValue":a[1]||(a[1]=r=>t.modalCow=r),onConfirm:s.getCows,onCancel:s.getCows,mode:t.mode,dataEdit:t.dataEdit},null,8,["modelValue","onConfirm","onCancel","mode","dataEdit"]),l(c,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getCows,onReset:s.reset,forms:t.forms,search:t.search},null,8,["onSearch","onReset","forms","search"]),t.loading?(m(),C("div",me,[l(w,{path:"dotsCircle",size:"22",class:"animate-spin"}),ue])):(m(),C("div",de,[(m(!0),C(J,null,K(t.items,r=>(m(),h(d,{key:r.name,img:r.image,name:r.name,"sub-text":"\u0E04\u0E2D\u0E01 "+r.corral,date:r.birthDate,status:r.status,onClick:V=>s.edit(r),quality:r.quality},null,8,["img","name","sub-text","date","status","onClick","quality"]))),128))]))]),_:1})]),_:1})}var ve=v(ce,[["render",fe]]);export{ve as default};
