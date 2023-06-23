import{z as M,V as E,p as F,m as O,_ as T,l as N,F as L,i as U,j as W,f as I,N as R,E as d,G as k,H as S,o as p,c as D,w as r,d as i,s as o,h as w,t as h,k as B,I as v,J as A,K as H,e as z,S as Q,C as j,D as G}from"./index-d5bd4e51.js";import{T as J}from"./Table-6dc0b3d7.js";import{R as V,C as K}from"./Criteria-4a12560d.js";import{_ as P}from"./FormField-7b910a84.js";import{T as C}from"./alert-745d7719.js";import"./FormCheckRadioPicker-c1046f06.js";import"./Cow-0825bf68.js";import"./cow-2eabc728.js";import"./Vaccine-204b6193.js";const x=e=>e==="create"?[{id:1,label:"อาหารหยาบ"},{id:2,label:"อาหารข้น ผสมเอง"},{id:3,label:"อาหารข้น สำเร็จรูป"}]:[{id:"",label:"ทั้งหมด"},{id:1,label:"อาหารหยาบ"},{id:2,label:"อาหารข้น ผสมเอง"},{id:3,label:"อาหารข้น สำเร็จรูป"}],X={data(){return{recipe:{code:"",name:"",type:1,amount:0},recipeDetail:{},recipeDetails:[],type:x("create"),loading:!1,alertError:"",alertWarning:"",alertDetail:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user}},watch:{data(e){var t,n;e&&(this.recipe=e,this.recipe.amount=(t=this.recipe)!=null&&t.amount?this.$filters.currency((n=this.recipe)==null?void 0:n.amount):null,this.recipeDetails=e.recipeDetails)},"recipe.frequency"(e){e&&(this.recipe.dateNext=E(new Date(this.recipe.dateCurrent),e))},"recipeDetail.cost"(e){var t,n;e&&((t=this.recipeDetail)!=null&&t.qty)?this.recipeDetail.amount=(e*((n=this.recipeDetail)==null?void 0:n.qty)).toFixed(2):this.recipeDetail.amount=null},"recipeDetail.qty"(e){var t,n;e&&((t=this.recipeDetail)!=null&&t.cost)?this.recipeDetail.amount=(e*((n=this.recipeDetail)==null?void 0:n.cost)).toFixed(2):this.recipeDetail.amount=null}},methods:{clear(){this.recipe={},this.recipeDetails=[]},confirmCancel(e){this.value=!1,this.$emit(e)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},addDetail(){var e,t,n,y;if(this.alertDetail="",(e=this.recipeDetail)!=null&&e.food&&((t=this.recipeDetail)!=null&&t.qty)&&((n=this.recipeDetail)!=null&&n.cost))if(this.recipeDetails.filter(s=>{var c;return s.food===((c=this.recipeDetail)==null?void 0:c.food)}).length<=0)if(((y=this.recipeDetail)==null?void 0:y.qty)<=1){let s=0;this.recipeDetails.forEach(c=>{s+=c.qty}),s<=1?(this.recipeDetails.push(this.recipeDetail),this.recipe.amount=0,this.recipeDetails.forEach(c=>{this.recipe.amount+=c.amount}),this.recipeDetail={}):this.alertDetail="จำนวนที่ใช้รวมห้ามเกิน 1 กก."}else this.alertDetail="จำนวนที่ใช้ห้ามเกิน 1 กก.";else this.alertDetail="อาหาร/วัตถุดิบ ซ้ำ";else this.alertDetail="กรุณากรอกข้อมูลให้ครบ"},removeDetail(e){var n;let t=this.recipeDetails.indexOf(e);t!==-1&&(this.recipe.amount-=(n=this.recipeDetails[t])==null?void 0:n.amount,this.recipeDetails.splice(t,1))},async submit(){this.loading=!0,this.alert="",this.alertWarning="";try{if(this.mode==="create"){let e=0;this.recipeDetails.forEach(t=>{e+=t.qty}),e===1?await V.create({recipe:this.recipe,recipeDetail:this.recipeDetails})&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),C.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})):this.alertWarning="กรุณาเพิ่ม รายการอาหาร/วัตถุดิบ ให้ครบ 1 กก."}else await V.update(this.recipe._id,{recipe:this.recipe,recipeDetail:this.recipeDetails})&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm"),C.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"}))}catch(e){console.error("Error : ",e),this.clear(),this.loading=!1,this.alertError=await e.response.data.message,C.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:F,BaseButtons:O,CardBox:T,BaseDivider:N,OverlayLayer:L,FormField:P,FormControl:U,NotificationBar:W,BaseLevel:I,BaseIcon:R},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},Y={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-5"},Z={class:"grid grid-cols-2 lg:grid-cols-6 gap-5"},$=o("header",{class:"flex items-stretch border-b border-gray-100 dark:border-gray-800"},[o("p",{class:"flex items-center py-3 grow font-bold"}," รายการอาหาร/วัตถุดิบ ")],-1),ee={key:1,class:"overflow-x-hidden overflow-y-auto h-80"},te=o("thead",null,[o("tr",null,[o("th",{class:"whitespace-nowrap text-center"}," อาหาร/วัตถุดิบ "),o("th",{class:"whitespace-nowrap text-center"}," ราคา/กก. "),o("th",{class:"whitespace-nowrap text-center"}," จำนวนที่ใช้ (กก.) "),o("th",{class:"whitespace-nowrap text-center"}," จำนวนเงิน "),o("th")])],-1),le={"data-label":"อาหาร/วัตถุดิบ"},ie={"data-label":"ราคา/กก.",class:"text-center"},ae={"data-label":"จำนวนที่ใช้ (กก.)",class:"text-center"},se={"data-label":"จำนวนเงิน",class:"text-right"},oe={class:"lg:w-6 whitespace-nowrap"},re={key:2,class:"text-center py-10 text-gray-500 dark:text-gray-400"},ne=o("p",null,"ไม่มีรายการ...",-1),ce=[ne];function de(e,t,n,y,l,s){const c=d("FormControl"),u=d("FormField"),m=d("BaseButton"),f=d("BaseButtons"),_=d("NotificationBar"),g=d("CardBox"),b=d("BaseDivider"),q=d("OverlayLayer");return k((p(),D(q,null,{default:r(()=>[k(i(g,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"สูตรอาหาร",class:"shadow-lg w-full lg:w-2/3 z-50","header-icon":"close",modal:"",form:"","has-scroll":"",onSubmit:z(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:r(()=>[o("div",Y,[i(u,{label:"ชื่อสูตรอาหาร",help:"* ห้ามว่าง"},{default:r(()=>[i(c,{modelValue:l.recipe.name,"onUpdate:modelValue":t[0]||(t[0]=a=>l.recipe.name=a),icon:"potMixOutline",required:""},null,8,["modelValue"])]),_:1}),i(u,{label:"ประเภทอาหาร",help:"* ห้ามว่าง"},{default:r(()=>[i(c,{modelValue:l.recipe.type,"onUpdate:modelValue":t[1]||(t[1]=a=>l.recipe.type=a),options:l.type,required:""},null,8,["modelValue","options"])]),_:1}),i(u,{label:"จำนวนเงินรวม"},{default:r(()=>[i(c,{modelValue:l.recipe.amount,"onUpdate:modelValue":t[2]||(t[2]=a=>l.recipe.amount=a),icon:"cashMultiple",type:"number",required:""},null,8,["modelValue"])]),_:1})]),i(g,{title:"รายละเอียดสูตรอาหาร",class:"shadow-lg dark:bg-slate-700","header-icon":""},{default:r(()=>[o("div",Z,[i(u,{label:"อาหาร/วัตถุดิบ",help:"* ห้ามว่าง"},{default:r(()=>[i(c,{modelValue:l.recipeDetail.food,"onUpdate:modelValue":t[3]||(t[3]=a=>l.recipeDetail.food=a),icon:"foodVariant"},null,8,["modelValue"])]),_:1}),i(u,{label:"ราคา/กก.",help:"* ห้ามว่าง"},{default:r(()=>[i(c,{modelValue:l.recipeDetail.cost,"onUpdate:modelValue":t[4]||(t[4]=a=>l.recipeDetail.cost=a),icon:"cash",type:"number"},null,8,["modelValue"])]),_:1}),i(u,{label:"จำนวนที่ใช้ (กก.)",help:"* ห้ามว่าง (ห้ามเกิน 1 กก.)"},{default:r(()=>[i(c,{icon:"scale",type:"number",modelValue:l.recipeDetail.qty,"onUpdate:modelValue":t[5]||(t[5]=a=>l.recipeDetail.qty=a)},null,8,["modelValue"])]),_:1}),i(u,{label:"จำนวนเงิน"},{default:r(()=>[i(c,{modelValue:l.recipeDetail.amount,"onUpdate:modelValue":t[6]||(t[6]=a=>l.recipeDetail.amount=a),icon:"cashMultiple",type:"number"},null,8,["modelValue"])]),_:1}),i(f,{class:"col-span-2",type:"justify-center"},{default:r(()=>[i(m,{label:"เพิ่ม",color:"success",onClick:s.addDetail},null,8,["onClick"]),i(m,{label:"ล้าง",color:"danger",onClick:t[7]||(t[7]=a=>e.resetDetail())})]),_:1})]),l.alertDetail?(p(),D(_,{key:0,color:"warning",outline:"",icon:"alertCircleOutline"},{default:r(()=>[w(h(l.alertDetail),1)]),_:1})):B("",!0),$,l.recipeDetails.length>0?(p(),v("div",ee,[o("table",null,[te,o("tbody",null,[(p(!0),v(A,null,H(l.recipeDetails,a=>(p(),v("tr",{key:a.food},[o("td",le,h(a.food),1),o("td",ie,h(e.$filters.currency(a.cost)),1),o("td",ae,h(a.qty),1),o("td",se,h(e.$filters.currency(a.amount)),1),o("td",oe,[i(f,{type:"justify-end lg:justify-start","no-wrap":""},{default:r(()=>[i(m,{color:"danger",label:"ลบ",onClick:he=>s.removeDetail(a)},null,8,["onClick"])]),_:2},1024)])]))),128))])])])):(p(),v("div",re,ce))]),_:1}),l.alertError?(p(),D(_,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:r(()=>[w(h(l.alertError),1)]),_:1})):B("",!0),l.alertWarning?(p(),D(_,{key:1,color:"warning",outline:"",icon:"alertCircleOutline"},{default:r(()=>[w(h(l.alertWarning),1)]),_:1})):B("",!0),i(b),i(f,{type:"justify-center"},{default:r(()=>[i(m,{label:"บันทึก",color:"success",type:"submit",loading:l.loading},null,8,["loading"]),i(m,{label:"ยกเลิก",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[S,s.value]])]),_:1},512)),[[S,s.value]])}const ue=M(X,[["render",de]]),pe={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"สูตรอาหาร",value:"recipe",type:"ddl",module:"recipe"},{label:"ประเภท",value:"type",options:x()}],search:{recipe:"",type:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"สูตรอาหาร",value:"name"},{label:"ประเภท",func:e=>x()[e.type].label},{label:"ราคา/กก.",class:"text-right",value:"amount",func:e=>this.$filters.currency(e.amount)},{label:"จำนวนอาหาร/วัตถุดิบ",class:"text-center",func:e=>e.recipeDetails.length}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:Q,LayoutAuthenticated:j,SectionTitleBarSub:G,Table:J,Modal:ue,Criteria:K},computed:{user(){return this.$store.state.auth.user}},created(){this.getDatas()},methods:{async getDatas(){this.loading=!0;const e=await V.all(this.search);this.items=[],e.data&&(this.items=e.data.recipes),this.loading=!1},async remove(e){this.loading=!0,(await V.delete(e)).data&&this.getDatas(),this.loading=!1,C.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},edit(e){this.modalData=e,this.mode="edit",this.openModal=!0},reset(){this.search.recipe="",this.search.type="",this.getDatas()},resetData(){this.modalData=null}}};function me(e,t,n,y,l,s){const c=d("SectionTitleBarSub"),u=d("Modal"),m=d("Criteria"),f=d("Table"),_=d("SectionMain"),g=d("LayoutAuthenticated");return p(),D(g,null,{default:r(()=>[i(_,null,{default:r(()=>[i(c,{icon:"calculatorVariantOutline",title:"สูตรอาหาร","has-btn-add":"",onOpenModal:t[0]||(t[0]=b=>{l.mode="create",l.openModal=!0}),btnText:"เพิ่มสูตรอาหาร"}),i(u,{modelValue:l.openModal,"onUpdate:modelValue":t[1]||(t[1]=b=>l.openModal=b),data:l.modalData,mode:l.mode,onConfirm:s.getDatas,onCancel:s.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),i(m,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:l.forms,search:l.search},null,8,["onSearch","onReset","forms","search"]),i(f,{title:"รายการสูตรอาหาร","has-checkbox":"","checked-data":l.checked,items:l.items,datas:l.datas,buttons:l.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:e.removeSelected,loading:l.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const we=M(pe,[["render",me]]);export{we as default};
