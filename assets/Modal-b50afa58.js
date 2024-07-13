import{b as F,_ as U,a as q}from"./BaseDivider-e6f522d1.js";import{v as D,h as k,_ as N,z as r,G as c,H as d,o as p,c as f,w as a,d as o,f as w,j as S,t as I,g as L,e as O}from"./index-833fccd7.js";import{a as j}from"./CardBoxModal-2c7e77f6.js";import{_ as E}from"./FormField-e4067010.js";import{_ as H}from"./FormControl-c6bef721.js";import{_ as M}from"./NotificationBar-a8fe964b.js";import{_ as T}from"./UserAvatar-e8a89c62.js";import{I as z}from"./ImageUpload-f0143515.js";import{C as _}from"./cow-2cb1e0fe.js";import{s as A,q as G,a as J}from"./cow-17efafc3.js";import{T as g}from"./alert-c25fb8f9.js";const K={data(){return{cow:{image:null,file:null,code:"",name:"",status:1,birthDate:null,adopDate:null,corral:"",dad:"",mom:"",quality:1,weight:null,sex:"F"},status:A("create"),quality:G("create"),sex:J("create"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(i){this.$emit("update:modelValue",i)}},user(){return this.$store.state.auth.user}},watch:{dataEdit:{handler(i,l){i!=null&&this.mode=="edit"&&(this.cow=i,this.cow.image=this.cow.image?this.cow.image:"/image/img-mockup.png")},deep:!0}},methods:{clear(){console.log("clear"),this.$emit("update:dataEdit",null),this.cow.image=null,this.cow.file=null,this.cow.code="",this.cow.name="",this.cow.birthDate="",this.cow.adopDate="",this.cow.status=1,this.cow.corral="",this.cow.dad="",this.cow.mom="",this.cow.weight=null,this.cow.sex="F",delete this.cow._id},confirmCancel(i){this.value=!1,this.$emit(i)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{const i=await _.create(this.cow);if(i){const l=i.data.newCow;l.file=this.cow.file,await _.upload(l),this.loading=!1,this.value=!1,this.confirm(),g.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}}catch(i){console.error("Error : ",i),this.loading=!1,this.alert=i.response.data.message,g.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}},getFile(i){this.cow.file=i}},components:{BaseButton:F,BaseButtons:k,CardBox:U,BaseDivider:q,OverlayLayer:j,FormField:E,FormControl:H,NotificationBar:M,UserAvatar:T,BaseLevel:N,ImageUpload:z},props:{modelValue:{type:[String,Number,Boolean],default:null},mode:{type:String,default:""},dataEdit:{type:Object,default:null}}},P={class:"grid lg:grid-cols-4 grid-cols-2 gap-5 mt-3"};function Q(i,l,V,R,e,m){const h=r("ImageUpload"),b=r("BaseLevel"),n=r("FormControl"),s=r("FormField"),B=r("NotificationBar"),y=r("BaseDivider"),u=r("BaseButton"),C=r("BaseButtons"),v=r("CardBox"),x=r("OverlayLayer");return c((p(),f(x,null,{default:a(()=>[c(o(v,{title:V.mode==="create"?"เพิ่มโค":"แก้ไขโค",class:"shadow-lg w-full md:w-3/5 lg:w-1/1 z-50","header-icon":"close",modal:"",form:"",onSubmit:O(m.submit,["prevent"]),onHeaderIconClick:m.cancel},{default:a(()=>[o(h,{modelValue:e.cow.image,"onUpdate:modelValue":l[0]||(l[0]=t=>e.cow.image=t),onFile:m.getFile},null,8,["modelValue","onFile"]),o(b,{type:"justify-center mb-6 text-sm"},{default:a(()=>[w(" อัพโหลดรูปภาพ (คลิกที่รูป) ")]),_:1}),S("div",P,[o(s,{label:"รหัสโค",help:"* ห้ามว่าง"},{default:a(()=>[o(n,{modelValue:e.cow.code,"onUpdate:modelValue":l[1]||(l[1]=t=>e.cow.code=t),icon:"barcode",required:""},null,8,["modelValue"])]),_:1}),o(s,{label:"ชื่อโค",help:"* ห้ามว่าง"},{default:a(()=>[o(n,{modelValue:e.cow.name,"onUpdate:modelValue":l[2]||(l[2]=t=>e.cow.name=t),icon:"cow",required:""},null,8,["modelValue"])]),_:1}),o(s,{label:"เพศ",help:"* ห้ามว่าง"},{default:a(()=>[o(n,{modelValue:e.cow.sex,"onUpdate:modelValue":l[3]||(l[3]=t=>e.cow.sex=t),options:e.sex,required:""},null,8,["modelValue","options"])]),_:1}),o(s,{label:"น้ำหนัก(กก.)"},{default:a(()=>[o(n,{modelValue:e.cow.weight,"onUpdate:modelValue":l[4]||(l[4]=t=>e.cow.weight=t),icon:"scale",type:"number"},null,8,["modelValue"])]),_:1}),o(s,{label:"วันเกิด",help:"* ห้ามว่าง"},{default:a(()=>[o(n,{modelValue:e.cow.birthDate,"onUpdate:modelValue":l[5]||(l[5]=t=>e.cow.birthDate=t),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),o(s,{label:"วันที่นำเข้าฟาร์ม",help:"* ห้ามว่าง"},{default:a(()=>[o(n,{modelValue:e.cow.adopDate,"onUpdate:modelValue":l[6]||(l[6]=t=>e.cow.adopDate=t),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),o(s,{label:"สถานะ",help:"* ห้ามว่าง"},{default:a(()=>[o(n,{modelValue:e.cow.status,"onUpdate:modelValue":l[7]||(l[7]=t=>e.cow.status=t),options:e.status,icon:"",required:""},null,8,["modelValue","options"])]),_:1}),o(s,{label:"คุณภาพน้ำนม",help:"* ห้ามว่าง"},{default:a(()=>[o(n,{modelValue:e.cow.quality,"onUpdate:modelValue":l[8]||(l[8]=t=>e.cow.quality=t),options:e.quality,icon:""},null,8,["modelValue","options"])]),_:1}),o(s,{label:"คอก"},{default:a(()=>[o(n,{modelValue:e.cow.corral,"onUpdate:modelValue":l[9]||(l[9]=t=>e.cow.corral=t),icon:"barn"},null,8,["modelValue"])]),_:1}),o(s,{label:"พ่อพันธุ์"},{default:a(()=>[o(n,{modelValue:e.cow.dad,"onUpdate:modelValue":l[10]||(l[10]=t=>e.cow.dad=t),icon:"genderMale"},null,8,["modelValue"])]),_:1}),o(s,{label:"แม่พันธุ์"},{default:a(()=>[o(n,{modelValue:e.cow.mom,"onUpdate:modelValue":l[11]||(l[11]=t=>e.cow.mom=t),icon:"genderFemale"},null,8,["modelValue"])]),_:1})]),e.alert?(p(),f(B,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:a(()=>[w(I(e.alert),1)]),_:1})):L("",!0),o(y),o(C,{type:"justify-center"},{default:a(()=>[o(u,{label:"บันทึก",color:"success",type:"submit",loading:e.loading},null,8,["loading"]),o(u,{label:"ยกเลิก",color:"danger",onClick:m.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[d,m.value]])]),_:1},512)),[[d,m.value]])}const ne=D(K,[["render",Q]]);export{ne as C};
