import{Q as i,z as r}from"./index-427a87c0.js";async function s(e={}){let t="?";if(e.status&&(t=t+`status=${e.status}&`),e.createdAt){const a=r(new Date(e.createdAt)).format("YYYY-MM-DD");t=t+`createdAt=${a}&`}return e.type&&(t=t+`type=${e.type}&`),e?t.replace(/&*$/,""):""}class l{async get(t){const a=await s(t);return i.get("/notification/logs"+a).then(n=>n)}}const d=new l,c="/line";class o{notify(t){return i.post(c+"/notify",t)}}const f=new o,y=e=>e=="ddl"?[{id:"",label:"ทั้งหมด"},{id:"S",label:"สำเร็จ"},{id:"F",label:"ไม่สำเร็จ"}]:{S:"สำเร็จ",F:"ไม่สำเร็จ"},S=e=>e=="ddl"?[{id:"",label:"ทั้งหมด"},{id:"B",label:"ระบบ(ตามเงื่อนไข)"},{id:"T",label:"ทดสอบจากผู้ใช้"},{id:"S",label:"ระบบ(อัตโนมัติ)"}]:{B:"ระบบ(ตามเงื่อนไข)",T:"ทดสอบจากผู้ใช้",S:"ระบบ(อัตโนมัติ)"};export{f as L,d as N,y as s,S as t};
