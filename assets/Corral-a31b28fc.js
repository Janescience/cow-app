import{C as c}from"./cow-1c284aa3.js";import{v as n,y as p,z as d,o as f,s as h,d as s,w as m,f as y}from"./index-a11eb788.js";const b={data(){return{datas:[]}},created(){this.initialData()},computed:{value:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}},user(){return this.$store.state.auth.user}},methods:{async initialData(){try{const e=await c.all();if(this.datas=[],e){const a=p.groupBy(e.data.cows,"corral");for(let t of Object.keys(a))t!="undefined"&&this.datas.push({id:t,label:t})}if(this.defaultValue){const a=this.datas.filter(t=>t[this.defaultType]==this.defaultValue);a&&this.handleInput(this.reduceAction(a[0]))}}catch(e){this.datas=[],console.error("Error: "+e.message)}},reduceAction(e){return this.valueType==="object"?e:e[this.valueType]},handleInput(e){this.$emit("update:value",e),this.dataSelected=this.datas.find(a=>a.id===e),this.$emit("update:dataSelected",this.dataSelected)}},props:{clear:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},dataSelected:{default:null,type:Object},defaultType:{default:null,type:Object},valueType:{default:"_id",type:Object},defaultValue:{default:null,type:Object},modelValue:{type:[String,Number,Boolean,Array,Object],default:{}},multiple:{default:!1,type:Boolean}}},_={class:"relative"};function v(e,a,t,V,i,l){const r=d("mdicon"),u=d("v-select");return f(),h("div",_,[s(u,{class:"ddl-dark ddl-white",clearable:t.clear,disabled:t.disabled,options:i.datas,reduce:l.reduceAction,label:"label",placeholder:"เลือกคอก",onInput:l.handleInput,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value=o),dataSelected:t.dataSelected,multiple:t.multiple},{"no-options":m(()=>[s(r,{name:"alertCircleOutline",width:"16",height:"16",class:"inline-block"}),y(" ไม่พบข้อมูล ")]),_:1},8,["clearable","disabled","options","reduce","onInput","modelValue","dataSelected","multiple"])])}const w=n(b,[["render",v]]);export{w as D};
