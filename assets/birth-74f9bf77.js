import{y as n,B as a}from"./index-c7dbc85b.js";async function D(r={}){let t="?";if(r.cow&&(t=t+`cow=${r.cow}&`),r.birthDate){const e=a(new Date(r.birthDate)).format("YYYY-MM-DD");t=t+`birthDate=${e}&`}if(r.pregnantDate){const e=a(new Date(r.pregnantDate)).format("YYYY-MM-DD");t=t+`pregnantDate=${e}&`}return r.sex&&(t=t+`sex=${r.sex}&`),r.status&&(t=t+`status=${r.status}&`),r?t.replace(/&*$/,""):""}class h{async all(t){const e=await D(t);return n.get("/birth"+e).then(i=>i)}get(t){return n.get(`/birth/${t}`)}create(t,e){return e.birthDate&&(e.birthDate=a(new Date(e.birthDate)).format("YYYY-MM-DD")),n.post(`/birth/${t}`,e)}delete(t){return n.delete(`/birth/${t}`)}update(t,e){return e.birthDate&&(e.birthDate=a(new Date(e.birthDate)).format("YYYY-MM-DD")),n.put(`/birth/${t}`,e)}}const s=new h,u=()=>({M:"เพศผู้",F:"เพศเมีย"}),Y=()=>({Y:"ค้าง",N:"ไม่ค้าง"});export{s as B,Y as o,u as s};