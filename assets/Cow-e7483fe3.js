import{C as r}from"./cow-b5abd581.js";import{z as h,F as s,o as m,J as p,d as o,w as f,h as _}from"./index-efcf4ef9.js";const y={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){var e,t;return this.valueType==="object"&&this.modelValue&&Object.keys(this.modelValue).length>0&&(this.modelValue.cow_data=((e=this.modelValue)==null?void 0:e.code)+" : "+((t=this.modelValue)==null?void 0:t.name)),this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user}},methods:{async initialData(){const e={farm:this.user.farm._id,flag:"Y"};try{const t=await r.ddl(e);if(this.datas=[],t&&(this.datas=t.data.cows,this.datas.map(a=>a.cow_data=a.code+" : "+a.name)),this.defaultValue){const a=this.datas.filter(d=>d[this.defaultType]==this.defaultValue);a&&this.handleInput(this.reduceAction(a[0]))}}catch(t){this.datas=[],console.error("Error: "+t.message)}},reduceAction(e){return this.valueType==="object"?e:e[this.valueType]},handleInput(e){this.$emit("update:value",e),this.dataSelected=this.datas.find(t=>t.code===e||t.name===e),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:{}},multiple:{default:!1,type:Boolean}}},b={class:"relative"};function v(e,t,a,d,i,l){const u=s("mdicon"),c=s("v-select");return m(),p("div",b,[o(c,{class:"ddl",clearable:a.clear,disabled:a.disabled,options:i.datas,reduce:l.reduceAction,label:"cow_data",placeholder:"เลือกโค",onInput:l.handleInput,modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n),dataSelected:a.dataSelected,multiple:a.multiple},{"no-options":f(()=>[o(u,{name:"alertCircleOutline",width:"12",height:"12",class:"inline-block"}),_(" ไม่พบข้อมูล ")]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected","multiple"])])}const S=h(y,[["render",v]]);export{S as D};