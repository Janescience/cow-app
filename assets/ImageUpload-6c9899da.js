import{z as i,f as c,g as d,F as s,o as m,c as u,w as p,q as f,d as g}from"./index-c0353c99.js";const h={computed:{value:{get(){return this.modelValue?this.modelValue:"/image/img-mockup.png"},set(e){this.$emit("update:modelValue",e)}}},methods:{chooseImg(){let e=document.getElementById("imageUpload");e!=null&&e.click()},handleFile(e){const a=e.target.files||e.dataTransfer.files;a.length&&(a[0].size<=1e6?this.createBase64(a[0]):window.alert("ขนาดไฟล์รูปภาพต้องน้อยกว่าหรือเท่ากับ 1 MB."))},createBase64(e){const a=new FileReader;this.$emit("file",e),a.onload=l=>{this.value=l.target.result},a.readAsDataURL(e)}},components:{BaseLevel:c,UserAvatar:d},props:{modelValue:{type:String,default:""},file:{type:Object,default:null}}};function _(e,a,l,v,B,t){const n=s("UserAvatar"),o=s("BaseLevel");return m(),u(o,{type:"justify-center items-center align-middle mb-2 ",role:"button"},{default:p(()=>[f("input",{id:"imageUpload",onChange:a[0]||(a[0]=(...r)=>t.handleFile&&t.handleFile(...r)),type:"file",accept:"image/*",hidden:""},null,32),g(n,{class:"lg:w-38 lg:h-38 w-28 h-28",avatar:t.value,username:"profile-upload",onClick:t.chooseImg},null,8,["avatar","onClick"])]),_:1})}const w=i(h,[["render",_]]);export{w as I};