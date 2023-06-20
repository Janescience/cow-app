import{y as d,B as _,z as w,p as M,m as k,_ as x,l as Y,F,i as T,j as L,f as N,N as E,E as o,G as C,H as y,o as v,c as V,w as i,d as n,s as U,h as A,t as O,k as I,e as j,S as H,C as R,D as z}from"./index-7127aab5.js";import{T as G}from"./Table-03458201.js";import{C as P}from"./Criteria-a056731c.js";import{_ as Q}from"./FormField-43f21bdf.js";import{T as D}from"./alert-993587e2.js";import{_ as J}from"./FormCheckRadioPicker-06e43c39.js";import"./Cow-2328920f.js";import"./cow-ab2463d5.js";import"./Vaccine-13b4809d.js";async function K(t={}){let e="?";return t.status&&(e=e+`status=${t.status}&`),t?e.replace(/&*$/,""):""}class W{async all(e){const r=await K(e);return d.get("/equipment"+r).then(m=>m)}get(e){return d.get(`/equipment/${e}`)}create(e){return e.startDate&&(e.startDate=_(new Date(e.startDate)).format("YYYY-MM-DD")),e.endDate&&(e.endDate=_(new Date(e.endDate)).format("YYYY-MM-DD")),d.post("/equipment",e)}delete(e){return d.delete(`/equipment/${e}`)}update(e,r){return r.startDate&&(r.startDate=_(new Date(r.startDate)).format("YYYY-MM-DD")),r.endDate&&(r.endDate=_(new Date(r.endDate)).format("YYYY-MM-DD")),d.put(`/equipment/${e}`,r)}}const p=new W,B=t=>t==="ddl"?[{id:"",label:"ทั้งหมด"},{id:"A",label:"ใช้งาน"},{id:"I",label:"ไม่ใช้งาน"}]:{A:"ใช้งาน",I:"ไม่ใช้งาน"},X={data(){return{equipment:{name:"",code:"",startDate:new Date,endDate:null,status:"A",amount:"",remark:""},status:B("ddl"),loading:!1,alert:""}},emits:["update:modelValue","cancel","confirm"],computed:{value:{get(){return this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},watch:{data(t){t&&this.mode==="edit"&&(this.equipment=t,this.equipment.startDate=new Date(t.startDate),this.equipment.endDate=t.endDate?new Date(t.endDate):null)}},methods:{clear(){this.equipment.name="",this.equipment.code="",this.equipment.startDate=new Date,this.equipment.endDate=null,this.equipment.remark="",this.equipment.amount="",this.equipment.status="A"},confirmCancel(t){this.value=!1,this.$emit(t)},confirm(){this.clear(),this.confirmCancel("confirm")},cancel(){this.clear(),this.confirmCancel("cancel")},async submit(){this.loading=!0,this.alert="";try{this.mode==="create"?await p.create(this.equipment)&&(this.loading=!1,this.confirmCancel("confirm")):await p.update(this.equipment._id,this.equipment)&&(this.loading=!1,this.confirmCancel("confirm")),D.fire({icon:"success",title:"บันทึกข้อมูลสำเร็จ"})}catch(t){console.error("Error : ",t),this.loading=!1,this.alert=t.response.data.message,D.fire({icon:"error",title:"บันทึกข้อมูลไม่สำเร็จ"})}}},components:{BaseButton:M,BaseButtons:k,CardBox:x,BaseDivider:Y,OverlayLayer:F,FormField:Q,FormControl:T,NotificationBar:L,BaseLevel:N,FormCheckRadioPicker:J,BaseIcon:E},props:{modelValue:{type:[String,Number,Boolean],default:null},data:{type:Object,default:null},mode:{type:String,default:""}}},Z={class:"grid grid-cols-2 lg:grid-cols-3 gap-5"};function $(t,e,r,m,a,l){const u=o("FormControl"),c=o("FormField"),g=o("NotificationBar"),b=o("BaseDivider"),f=o("BaseButton"),q=o("BaseButtons"),h=o("CardBox"),S=o("OverlayLayer");return C((v(),V(S,null,{default:i(()=>[C(n(h,{title:"อุปกรณ์ "+(this.mode==="create"?"":"(แก้ไข)"),class:"shadow-lg w-full lg:w-1/2 z-50","header-icon":"close",modal:"",form:"",onSubmit:j(l.submit,["prevent"]),onHeaderIconClick:l.cancel},{default:i(()=>[U("div",Z,[n(c,{label:"รหัส",help:"* ห้ามว่าง"},{default:i(()=>[n(u,{modelValue:a.equipment.code,"onUpdate:modelValue":e[0]||(e[0]=s=>a.equipment.code=s),icon:"accountEdit",required:""},null,8,["modelValue"])]),_:1}),n(c,{label:"ชื่อ",help:"* ห้ามว่าง"},{default:i(()=>[n(u,{modelValue:a.equipment.name,"onUpdate:modelValue":e[1]||(e[1]=s=>a.equipment.name=s),icon:"accountEdit",required:""},null,8,["modelValue"])]),_:1}),n(c,{label:"วันที่เริ่มใช้งาน",help:"* ห้ามว่าง"},{default:i(()=>[n(u,{modelValue:a.equipment.startDate,"onUpdate:modelValue":e[2]||(e[2]=s=>a.equipment.startDate=s),icon:"calendar",type:"date",required:""},null,8,["modelValue"])]),_:1}),n(c,{label:"วันที่สิ้นสุดใช้งาน"},{default:i(()=>[n(u,{modelValue:a.equipment.endDate,"onUpdate:modelValue":e[3]||(e[3]=s=>a.equipment.endDate=s),icon:"calendar",type:"date"},null,8,["modelValue"])]),_:1}),n(c,{label:"ราคา",help:"* ห้ามว่าง"},{default:i(()=>[n(u,{modelValue:a.equipment.amount,"onUpdate:modelValue":e[4]||(e[4]=s=>a.equipment.amount=s),type:"number",icon:"cashMultiple",required:""},null,8,["modelValue"])]),_:1}),n(c,{label:"สถานะ"},{default:i(()=>[n(u,{modelValue:a.equipment.status,"onUpdate:modelValue":e[5]||(e[5]=s=>a.equipment.status=s),options:a.status},null,8,["modelValue","options"])]),_:1}),n(c,{label:"หมายเหตุ"},{default:i(()=>[n(u,{modelValue:a.equipment.remark,"onUpdate:modelValue":e[6]||(e[6]=s=>a.equipment.remark=s),type:"textarea"},null,8,["modelValue"])]),_:1})]),a.alert?(v(),V(g,{key:0,color:"danger",outline:"",icon:"alertCircleOutline"},{default:i(()=>[A(O(a.alert),1)]),_:1})):I("",!0),n(b),n(q,{type:"justify-center"},{default:i(()=>[n(f,{label:"บันทึก",color:"success",type:"submit",loading:a.loading},null,8,["loading"]),n(f,{label:"ยกเลิก",color:"danger",onClick:l.cancel},null,8,["onClick"])]),_:1})]),_:1},8,["title","onSubmit","onHeaderIconClick"]),[[y,l.value]])]),_:1},512)),[[y,l.value]])}const ee=w(X,[["render",$]]),te={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"สถานะ",value:"status",options:B("ddl")}],search:{status:""},loading:!1,mode:"create",dataEdit:null,checked:{code:{value:"code"},label:{value:"name"}},datas:[{label:"รหัส",value:"code"},{label:"ชื่อ",value:"name"},{label:"วันที่เริ่มใช้งาน",class:"text-center",value:"startDate",type:"date"},{label:"วันที่สิ้นสุดใช้งาน",class:"text-center",value:"endDate",type:"date"},{label:"ราคา",value:"amount",class:"text-right"},{label:"สถานะ",class:"text-center",func:t=>B()[t.status]},{label:"หมายเหตุ",value:"remark"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning"}]}},components:{SectionMain:H,LayoutAuthenticated:R,SectionTitleBarSub:z,Table:G,Modal:ee,Criteria:P},computed:{getDataCopy(){return{...this.modalData}}},created(){this.getDatas()},methods:{async getDatas(t){this.loading=!0;const e=await p.all(t);this.items=[],e.data&&(this.items=e.data.equipments),this.loading=!1},async remove(t){this.loading=!0,(await p.delete(t)).data&&this.getDatas(),this.loading=!1,D.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},async removeSelected(t){this.loading=!0;let e=[];for(let m of t)e.push(m._id);(await p.deletes(e)).data&&(this.getDatas(),D.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})),this.loading=!1},edit(t){this.modalData=t,this.mode="edit",this.openModal=!0},reset(){this.search.status="",this.getDatas()},resetData(){this.modalData=null}}};function ae(t,e,r,m,a,l){const u=o("SectionTitleBarSub"),c=o("Modal"),g=o("Criteria"),b=o("Table"),f=o("SectionMain"),q=o("LayoutAuthenticated");return v(),V(q,null,{default:i(()=>[n(f,null,{default:i(()=>[n(u,{icon:"shovel",title:"อุปกรณ์","has-btn-add":"",onOpenModal:e[0]||(e[0]=h=>{a.mode="create",a.openModal=!0}),btnText:"เพิ่มอุปกรณ์"}),n(c,{modelValue:a.openModal,"onUpdate:modelValue":e[1]||(e[1]=h=>a.openModal=h),data:l.getDataCopy,mode:a.mode,onConfirm:l.getDatas,onCancel:l.resetData},null,8,["modelValue","data","mode","onConfirm","onCancel"]),n(g,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:l.getDatas,onReset:l.reset,forms:a.forms,search:a.search,btnLoading:a.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),n(b,{title:"รายการอุปกรณ์","has-checkbox":"","checked-data":a.checked,items:a.items,datas:a.datas,buttons:a.buttons,onEdit:l.edit,onDelete:l.remove,onDeleteSelected:l.removeSelected,loading:a.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const de=w(te,[["render",ae]]);export{de as default};