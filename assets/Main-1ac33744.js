import{B as S,p as F,m as L,_ as T,l as q,F as N,i as O,j as R,f as j,N as A,E as a,G as C,H as D,o as v,c as y,w as n,d as o,s as b,h as m,t as g,k as E,e as U,S as H,C as I,D as z}from"./index-8a641c51.js";import{T as G}from"./Table-d5dc8e85.js";import{D as P,C as J}from"./Criteria-4e67b601.js";import{_ as K}from"./FormField-77b8c523.js";import{T as B}from"./alert-7ea4eeb6.js";import{F as u}from"./food-a4a6b52d.js";import{_ as Q}from"./FormCheckRadioPicker-4bdfc864.js";import"./Cow-67c739a5.js";import"./cow-2cc01ce3.js";const W={data(){return{food:{corral:"",recipe:{},qty:0,amount:0,amountAvg:0,numCow:0},loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},watch:{data(t){t&&this.mode==="edit"&&(this.food=t)},"food.recipe"(t){t?this.food.amount=t.amount:this.food.amount=null}},methods:{clear(){this.food.corral="",this.food.recipe={},this.food.qty=0},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await u.create(this.food)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")):await u.update(this.food._id,this.food)&&(this.loading=!1,this.value=!1,this.confirmCancel("confirm")),B.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(t){console.error("Error : ",t),this.clear(),this.loading=!1,this.alert=await t.response.data.message,B.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:F,BaseButtons:L,CardBox:T,BaseDivider:q,OverlayLayer:N,FormField:K,FormControl:O,NotificationBar:R,BaseLevel:j,DDLRecipe:P,FormCheckRadioPicker:Q,BaseIcon:A},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},X={class:"grid grid-cols-2 gap-5"},Y={class:"text-red-700 font-bold p-2"},Z={class:"text-red-700 font-bold p-2"};function $(t,l,V,x,e,s){const f=a("DDLRecipe"),r=a("FormField"),d=a("FormControl"),p=a("BaseLevel"),_=a("NotificationBar"),h=a("BaseDivider"),i=a("BaseButton"),k=a("BaseButtons"),w=a("CardBox"),M=a("OverlayLayer");return C((v(),y(M,null,{default:n(()=>[C(o(w,{title:(this.mode==="create"?"บันทึก":"แก้ไข")+"การให้อาหาร",class:"shadow-lg w-full lg:w-5/6 z-50","header-icon":"close",modal:"",form:"",onSubmit:U(s.submit,["prevent"]),onHeaderIconClick:s.cancel},{default:n(()=>[b("div",X,[o(r,{label:"สูตรอาหาร",help:"* ห้ามว่าง"},{default:n(()=>[o(f,{modelValue:e.food.recipe,"onUpdate:modelValue":l[0]||(l[0]=c=>e.food.recipe=c),valueType:"object"},null,8,["modelValue"])]),_:1}),o(r,{label:"คอก",help:"* ห้ามว่าง"},{default:n(()=>[o(d,{modelValue:e.food.corral,"onUpdate:modelValue":l[1]||(l[1]=c=>e.food.corral=c),icon:"barn",type:"number",required:""},null,8,["modelValue"])]),_:1}),o(r,{label:"จำนวนที่ให้/วัน (กก.)",help:"* ห้ามว่าง"},{default:n(()=>[o(d,{modelValue:e.food.qty,"onUpdate:modelValue":l[2]||(l[2]=c=>e.food.qty=c),icon:"shaker",type:"number",required:""},null,8,["modelValue"])]),_:1}),o(r,{class:"col-span-3"},{default:n(()=>[o(p,{type:"justify-end"},{default:n(()=>[m(" ราคา/กก. "),b("p",Y,g(e.food.amount>0?e.food.amount:"-"),1),m(" บาท , รวมเป็นเงิน/วัน "),b("p",Z,g(e.food.qty&&e.food.amount>0?e.food.qty*e.food.amount:"-"),1),m(" บาท ")]),_:1})]),_:1})]),e.alert?(v(),y(_,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:n(()=>[m(g(e.alert),1)]),_:1})):E("",!0),o(h),o(k,{type:"justify-center"},{default:n(()=>[o(i,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),o(i,{label:"ยกเลิก",color:"danger",onClick:s.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[D,s.value]])]),_:1},512)),[[D,s.value]])}const ee=S(W,[["render",$]]),te={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"สูตรอาหาร",value:"recipe",type:"ddl",module:"recipe"},{label:"คอก",value:"corral",icon:"barn",type:"number"}],search:{recipe:null,corral:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"corral"},label:{value:"recipe.name"}},datas:[{label:"คอก",class:"text-center",value:"corral"},{label:"จำนวนวัว",class:"text-center",value:"numCow"},{label:"สูตรอาหาร",class:"text-center",value:"recipe.name"},{label:"จำนวนที่ให้/วัน (กก.)",class:"text-center",value:"qty"},{label:"รวมเป็นเงิน/วัน",class:"text-center",value:"amount"},{label:"รวมเป็นเงิน/ตัว",class:"text-center",value:"amountAvg"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:H,LayoutAuthenticated:I,SectionTitleBarSub:z,Table:G,Modal:ee,Criteria:J},computed:{user(){return this.$store.state.auth.user}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const l=await u.all(t);this.items=[],l.data&&(this.items=l.data.foods),this.loading=!1},async remove(t){this.loading=!0,(await u.delete(t)).data&&this.getDatas(),this.loading=!1,B.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},edit(t){this.modalData=t,this.mode="edit",this.openModal=!0},reset(){this.search.recipe=null,this.search.corral="",this.getDatas()}}};function oe(t,l,V,x,e,s){const f=a("SectionTitleBarSub"),r=a("Modal"),d=a("Criteria"),p=a("Table"),_=a("SectionMain"),h=a("LayoutAuthenticated");return v(),y(h,null,{default:n(()=>[o(_,null,{default:n(()=>[o(f,{icon:"foodDrumstickOutline",title:"การให้อาหาร","has-btn-add":"",onOpenModal:l[0]||(l[0]=i=>{e.mode="create",e.openModal=!0}),btnText:"เพิ่มการให้อาหาร"}),o(r,{modelValue:e.openModal,"onUpdate:modelValue":l[1]||(l[1]=i=>e.openModal=i),data:e.modalData,mode:e.mode,onConfirm:s.getDatas},null,8,["modelValue","data","mode","onConfirm"]),o(d,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:s.getDatas,onReset:s.reset,forms:e.forms,search:e.search},null,8,["onSearch","onReset","forms","search"]),o(p,{title:"รายการให้อาหาร","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:s.edit,onDelete:s.remove,onDeleteSelected:t.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const ue=S(te,[["render",oe]]);export{ue as default};
