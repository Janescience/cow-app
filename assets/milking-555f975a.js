import{y as r,z as u}from"./index-6cd41bb2.js";async function a(t={}){let e="?";return t.cow&&(e=e+`cow=${t.cow}&`),t.date&&(e=e+`date=${t.date}&`),t.quantity&&(e=e+`quantity=${t.quantity}&`),t?e.replace(/&*$/,""):""}class c{async all(e){const n=await a(e);return r.get("/milking/all"+n).then(i=>i)}async get(e){const n=await a(e);return r.get("/milking"+n).then(i=>i)}async getDetail(e){const n=await a(e);return r.get("/milking/detail"+n).then(i=>i)}create(e){return e.date&&(e.date=u(new Date(e.date)).format("YYYY-MM-DD")),r.post("/milking",e)}delete(e){return r.delete(`/milking/${e}`)}update(e,n){return r.put(`/milking/${e}`,n)}}const g=new c;export{g as M};
