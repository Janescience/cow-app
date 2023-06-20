import{z as _,P as l,S as v,C as b,D as g,c as S,w as r,E as o,o as y,d as s}from"./index-aa90ecc4.js";import{T as D}from"./Table-cc2e4078.js";import{C as T}from"./Criteria-5aed4732.js";import{P as d}from"./protection-e9381f3e.js";import{T as k}from"./alert-65ae1b70.js";import"./FormField-69d2c574.js";import"./FormCheckRadioPicker-d03f1e3b.js";import"./Cow-04d3a771.js";import"./cow-38190d81.js";import"./Vaccine-81234a7c.js";const x={data(){return{openModal:!1,modalData:null,items:[],forms:[{label:"วัคซีน",value:"vaccine",icon:"needle",type:"ddl",module:"vaccine",valueType:"_id"},{label:"วันที่ฉีดวัคซีน",value:"date",icon:"calendar",type:"date"}],search:{date:null,vaccine:null},loading:!1,mode:"create",dataEdit:null,checked:{label:{value:"vaccine.name"},code:{value:"vaccine.seq"}},datas:[{label:"ครั้งที่",value:"seq"},{label:"วัคซีน",value:"vaccine.name"},{label:"จำนวนที่ฉีด (ตัว)",class:"text-center",value:"qty"},{label:"รวมเป็นเงิน (บาท)",class:"text-center",value:"amount"},{label:"วันที่ฉีดวัคซีน",class:"text-center",value:"date",type:"date"},{label:"หมายเหตุ",class:"text-center",value:"remark"}],buttons:[{label:"ลบ",type:"delete",color:"danger"},{label:"แก้ไข",type:"edit",color:"warning",condition:t=>{const a=l.groupBy(this.items,"vaccine._id");for(let c of Object.keys(a)){const i=a[c],e=l.orderBy(i,"seq","desc");if(e.length>0&&t._id==e[0]._id)return!0}return!1}}]}},components:{SectionMain:v,LayoutAuthenticated:b,SectionTitleBarSub:g,Table:D,Criteria:T},created(){this.search.vaccine=this.$route.params.vaccine,this.getDatas(this.search)},methods:{async getDatas(t){this.loading=!0;const a=await d.all(t);this.items=[],a.data&&(this.items=a.data.protections),this.loading=!1},async remove(t){this.loading=!0,(await d.delete(t)).data&&this.getDatas(),this.loading=!1,k.fire({icon:"success",title:"ลบข้อมูลสำเร็จ"})},add(){this.$router.push({name:"protectionDetail",params:{id:"add"}})},edit(t){this.$router.push({name:"protectionDetail",params:{id:t._id}})},reset(){this.search.date=null,this.search.vaccine=null,this.getDatas()}}};function B(t,a,c,i,e,n){const u=o("SectionTitleBarSub"),m=o("Criteria"),h=o("Table"),p=o("SectionMain"),f=o("LayoutAuthenticated");return y(),S(f,null,{default:r(()=>[s(p,null,{default:r(()=>[s(u,{icon:"needle",title:"การป้องกัน/บำรุง","has-btn-add":"",onOpenModal:n.add,btnText:"เพิ่มการป้องกัน/บำรุง"},null,8,["onOpenModal"]),s(m,{grid:"grid-cols-2 lg:grid-cols-4",onSearch:n.getDatas,onReset:n.reset,forms:e.forms,search:e.search,btnLoading:e.loading},null,8,["onSearch","onReset","forms","search","btnLoading"]),s(h,{title:"รายการป้องกัน/บำรุง","has-checkbox":"","checked-data":e.checked,items:e.items,datas:e.datas,buttons:e.buttons,onEdit:n.edit,onDelete:n.remove,onDeleteSelected:t.removeSelected,loading:e.loading},null,8,["checked-data","items","datas","buttons","onEdit","onDelete","onDeleteSelected","loading"])]),_:1})]),_:1})}const R=_(x,[["render",B]]);export{R as default};