import{y as r,B as u}from"./index-51c79a7a.js";async function s(n={}){let e="?";return n.status&&(e=e+`status=${n.status}&`),n?e.replace(/&*$/,""):""}class a{async all(e){const t=await s(e);return r.get("/building"+t).then(i=>i)}get(e){return r.get(`/building/${e}`)}create(e){return e.date&&(e.date=u(new Date(e.date)).format("YYYY-MM-DD")),r.post("/building",e)}delete(e){return r.delete(`/building/${e}`)}update(e,t){return t.date&&(t.date=u(new Date(t.date)).format("YYYY-MM-DD")),r.put(`/building/${e}`,t)}}const g=new a;export{g as B};
