import{y as l,B as c,z as m,E as i,o as f,I as p,d as r,w as v,h as _}from"./index-12b4016e.js";async function y(t={}){let e="?";if(t.dateCurrent){const a=c(new Date(t.dateCurrent)).format("YYYY-MM-DD");e=e+`dateCurrent=${a}&`}if(t.dateNext){const a=c(new Date(t.dateNext)).format("YYYY-MM-DD");e=e+`dateNext=${a}&`}return t.vaccine&&(e=e+`vaccine=${t.vaccine}&`),t?e.replace(/&*$/,""):""}class D{async all(e){const a=await y(e);return l.get("/vaccine"+a).then(d=>d)}get(e){return l.get(`/vaccine/${e}`)}create(e){return e.dateCurrent&&(e.dateCurrent=c(new Date(e.dateCurrent)).format("YYYY-MM-DD")),e.dateNext&&(e.dateNext=c(new Date(e.dateNext)).format("YYYY-MM-DD")),l.post("/vaccine",e)}delete(e){return l.delete(`/vaccine/${e}`)}update(e,a){return l.put(`/vaccine/${e}`,a)}}const V=new D;const b={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){var t;return this.valueType==="object"&&(this.modelValue.vaccine_data=(t=this.modelValue)==null?void 0:t.name),this.modelValue},set(t){this.$emit("update:modelValue",t)}},user(){return this.$store.state.auth.user}},methods:{async initialData(){try{const t=await V.all();if(this.datas=[],t&&(this.datas=t.data.vaccines,this.datas.map(e=>e.vaccine_data=e.name)),this.defaultValue){const e=this.datas.filter(a=>a[this.defaultType]==this.defaultValue);e&&this.handleInput(this.reduceAction(e[0]))}}catch(t){this.datas=[],console.error("Error: "+t.message)}},reduceAction(t){return this.valueType==="object"?t:t[this.valueType]},handleInput(t){this.$emit("update:value",t),this.dataSelected=this.datas.find(e=>e.name===t),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:""},multiple:{default:!1,type:Boolean}}},Y={class:"relative"};function N(t,e,a,d,u,n){const s=i("mdicon"),o=i("v-select");return f(),p("div",Y,[r(o,{class:"ddl",clearable:a.clear,disabled:a.disabled,options:u.datas,reduce:n.reduceAction,label:"vaccine_data",placeholder:"เลือกวัคซีน",onInput:n.handleInput,modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=h=>n.value=h),dataSelected:a.dataSelected,multiple:a.multiple},{"no-options":v(()=>[r(s,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),_(" ไม่พบข้อมูล ")]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected","multiple"])])}const w=m(b,[["render",N]]);export{w as D,V};
