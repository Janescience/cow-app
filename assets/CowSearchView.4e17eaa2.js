import{N as C,_ as D,Q as o,o as u,g,w as i,d as h,O as S,s as x,i as F,q as U,R as A,l as k,m as O,k as q,G as B,T as y,b as l,e as L,t as j,p as R,j as H,S as z,P as G,U as P,V as Q,W,a as Y,E as J,F as K}from"./index.f9fd3092.js";import{_ as E}from"./BaseButtons.c30445ae.js";import{_ as I}from"./FormField.1b1b5638.js";import{C as _,D as X,T as Z,a as $}from"./Criteria.39cadf4f.js";import{g as ee}from"./age-calculate.285cb1f6.js";import"./CardBoxModal.86958926.js";import"./auth-header.98060081.js";const ae={computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},methods:{chooseImg(){let e=document.getElementById("imageUpload");e!=null&&e.click()},handleFile(e){var a=e.target.files||e.dataTransfer.files;!a.length||this.createBase64(a[0])},createBase64(e){var a=new FileReader;a.onload=f=>{this.value=f.target.result},a.readAsDataURL(e)}},components:{BaseLevel:D},props:{modelValue:{type:String,default:""}}},te=["src"];function le(e,a,f,v,t,s){const p=o("BaseLevel");return u(),g(p,{type:"justify-center mb-1"},{default:i(()=>[h("input",{id:"imageUpload",onChange:a[0]||(a[0]=(...m)=>s.handleFile&&s.handleFile(...m)),type:"file",accept:"image/*",hidden:""},null,32),h("img",{class:"w-56 cursor-pointer rounded-lg",onClick:a[1]||(a[1]=(...m)=>s.chooseImg&&s.chooseImg(...m)),src:s.value},null,8,te)]),_:1})}var oe=C(ae,[["render",le]]);const se={data(){return{cow:{image:"image/img-mockup.png",code:"",name:"",status:"1",birthDate:null,corral:"",dad:"",mom:"",farm:S().farm._id},status:[{id:1,label:"\u0E17\u0E49\u0E2D\u0E07"},{id:2,label:"\u0E19\u0E21\u0E41\u0E2B\u0E49\u0E07"},{id:3,label:"\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E1C\u0E25\u0E34\u0E15"},{id:4,label:"\u0E27\u0E31\u0E27\u0E40\u0E14\u0E47\u0E01"}],loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},watch:{dataEdit:{handler(e,a){e!=null&&this.mode=="edit"&&(this.cow=e,this.cow.image=this.cow.image?this.cow.image:"../../src/assets/image/img-mockup.png")},deep:!0}},methods:{clear(){this.$emit("update:dataEdit",null),this.cow.image="image/img-mockup.png",this.cow.code="",this.cow.name="",this.cow.birthDate=null,this.cow.status=1,this.cow.corral="",this.cow.dad="",this.cow.mom="",delete this.cow._id},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await _.create(this.cow)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await _.update(this.cow._id,this.cow)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"))}catch(e){console.error("Error : ",e),this.loading=!1,this.alert=e.response.data.message}}},components:{BaseButton:x,BaseButtons:E,CardBox:F,BaseDivider:U,OverlayLayer:A,FormField:I,FormControl:k,NotificationBar:O,UserAvatar:q,BaseLevel:D,ImageUpload:oe},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},ne=L(" \u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E (\u0E04\u0E25\u0E34\u0E01\u0E17\u0E35\u0E48\u0E23\u0E39\u0E1B) "),ie={class:"grid lg:grid-cols-4 grid-cols-2 gap-5 mt-3"};function re(e,a,f,v,t,s){const p=o("ImageUpload"),m=o("BaseLevel"),d=o("FormControl"),c=o("FormField"),w=o("NotificationBar"),b=o("BaseDivider"),r=o("BaseButton"),N=o("BaseButtons"),T=o("CardBox"),M=o("OverlayLayer");return B((u(),g(M,null,{default:i(()=>[B(l(T,{title:f.mode==="create"?"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E04":"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E42\u0E04",class:"shadow-lg w-full overflow-y-auto md:w-3/5 lg:w-1/1 z-50","header-icon":"close",modal:"",form:"",onSubmit:H(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:i(()=>[l(p,{modelValue:t.cow.image,"onUpdate:modelValue":a[0]||(a[0]=n=>t.cow.image=n)},null,8,["modelValue"]),l(m,{type:"justify-center mb-6"},{default:i(()=>[ne]),_:1}),h("div",ie,[l(c,{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[l(d,{modelValue:t.cow.code,"onUpdate:modelValue":a[1]||(a[1]=n=>t.cow.code=n),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[l(d,{modelValue:t.cow.name,"onUpdate:modelValue":a[2]||(a[2]=n=>t.cow.name=n),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[l(d,{modelValue:t.cow.birthDate,"onUpdate:modelValue":a[3]||(a[3]=n=>t.cow.birthDate=n),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",help:"* \u0E2B\u0E49\u0E32\u0E21\u0E27\u0E48\u0E32\u0E07"},{default:i(()=>[l(d,{modelValue:t.cow.status,"onUpdate:modelValue":a[4]||(a[4]=n=>t.cow.status=n),options:t.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),l(c,{label:"\u0E04\u0E2D\u0E01"},{default:i(()=>[l(d,{modelValue:t.cow.corral,"onUpdate:modelValue":a[5]||(a[5]=n=>t.cow.corral=n),icon:"barn"},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C"},{default:i(()=>[l(d,{modelValue:t.cow.dad,"onUpdate:modelValue":a[6]||(a[6]=n=>t.cow.dad=n),icon:"genderMale"},null,8,["modelValue"])]),_:1}),l(c,{label:"\u0E41\u0E21\u0E48\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C"},{default:i(()=>[l(d,{modelValue:t.cow.mom,"onUpdate:modelValue":a[7]||(a[7]=n=>t.cow.mom=n),icon:"genderFemale"},null,8,["modelValue"])]),_:1})]),t.alert?(u(),g(w,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[L(j(t.alert),1)]),_:1})):R("",!0),l(b),l(N,{type:"justify-center"},{default:i(()=>[l(r,{label:"\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",color:"success",type:"submit",loading:t.loading},null,8,["loading"]),l(r,{label:"\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[y,s.value]])]),_:1},512)),[[y,s.value]])}var de=C(se,[["render",re]]);const V=()=>[{id:"",label:"\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"},{id:1,label:"\u0E17\u0E49\u0E2D\u0E07"},{id:2,label:"\u0E19\u0E21\u0E41\u0E2B\u0E49\u0E07"},{id:3,label:"\u0E43\u0E2B\u0E49\u0E1C\u0E25\u0E1C\u0E25\u0E34\u0E15"},{id:4,label:"\u0E27\u0E31\u0E27\u0E40\u0E14\u0E47\u0E01"}],ce={data(){return{modalCow:!1,items:[],forms:[{label:"\u0E42\u0E04",value:"code",type:"ddl",module:"cow",valueType:"code"},{label:"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",value:"birthDate",icon:"calendar",type:"date"},{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",value:"status",options:V()},{label:"\u0E04\u0E2D\u0E01",value:"corral",icon:"barn"}],search:{code:null,status:"",birthDate:null,corral:"",flag:"Y",farm:S().farm._id},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E",class:"text-center",value:"image",type:"image"},{label:"\u0E23\u0E2B\u0E31\u0E2A\u0E42\u0E04",value:"code"},{label:"\u0E0A\u0E37\u0E48\u0E2D\u0E42\u0E04",value:"name"},{label:"\u0E27\u0E31\u0E19\u0E40\u0E01\u0E34\u0E14",class:"text-center",value:"birthDate",type:"date"},{label:"\u0E2D\u0E32\u0E22\u0E38",class:"text-center",func:e=>this.calAge(e.birthDate)},{label:"\u0E2A\u0E16\u0E32\u0E19\u0E30",func:e=>V()[e.status].label},{label:"\u0E04\u0E2D\u0E01",value:"corral"},{label:"\u0E1E\u0E48\u0E2D\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",value:"dad"},{label:"\u0E41\u0E21\u0E48\u0E1E\u0E31\u0E19\u0E18\u0E38\u0E4C",value:"mom"}],buttons:[{label:"\u0E25\u0E1A",type:"delete",color:"danger"},{label:"\u0E41\u0E01\u0E49\u0E44\u0E02",type:"edit",color:"warning"},{label:"\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",type:"detail",color:"info",path:"/manage/cow/detail"}]}},components:{SectionMain:z,LayoutAuthenticated:G,BaseButton:x,BaseIcon:P,BaseButtons:E,CardBox:F,FormControl:k,FormField:I,BaseDivider:U,DDLCow:X,CreateCowModal:de,Table:Z,SectionTitleBarSub:Q,Criteria:$,CardBoxClient:W},created(){this.getCows()},methods:{async getCows(){this.loading=!0;const e=await _.all(this.search);this.items=[],e.data&&(this.items=e.data.cows),this.loading=!1},async removeCow(e){this.loading=!0,(await _.update(e,{flag:"N"})).data&&this.getCows(),this.loading=!1},edit(e){this.dataEdit=e,this.mode="edit",this.dataEdit.birthDate=new Date(this.dataEdit.birthDate),this.modalCow=!0},reset(){this.search.code=null,this.search.status="",this.search.birthDate=null,this.search.corral=""},calAge(e){return ee(e)}}},me={class:"grid gap-3 grid-cols-3 lg:grid-cols-6 md:grid-cols-4"};function ue(e,a,f,v,t,s){const p=o("SectionTitleBarSub"),m=o("CreateCowModal"),d=o("Criteria"),c=o("CardBoxClient"),w=o("SectionMain"),b=o("LayoutAuthenticated");return u(),g(b,null,{default:i(()=>[l(w,null,{default:i(()=>[l(p,{icon:"cow",title:"\u0E42\u0E04",btnText:"\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E42\u0E04","has-btn-add":"",onOpenModal:a[0]||(a[0]=r=>{t.mode="create",t.modalCow=!0})}),l(m,{modelValue:t.modalCow,"onUpdate:modelValue":a[1]||(a[1]=r=>t.modalCow=r),onConfirm:s.getCows,onCancel:s.getCows,mode:t.mode,dataEdit:t.dataEdit},null,8,["modelValue","onConfirm","onCancel","mode","dataEdit"]),l(d,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getCows,onReset:s.reset,forms:t.forms,search:t.search},null,8,["onSearch","onReset","forms","search"]),h("div",me,[(u(!0),Y(K,null,J(t.items,r=>(u(),g(c,{key:r.name,img:r.image,name:r.name,"sub-text":"\u0E04\u0E2D\u0E01 "+r.corral,date:r.birthDate,"trend-type":r.status,quality:"3"},null,8,["img","name","sub-text","date","trend-type"]))),128))])]),_:1})]),_:1})}var Ce=C(ce,[["render",ue]]);export{Ce as default};
