import{Q as n,z as u}from"./index-427a87c0.js";async function a(t={}){let e="?";return t.cow&&(e=e+`cow=${t.cow}&`),t.milk&&(e=e+`milk=${t.milk}&`),t.date&&(e=e+`date=${t.date}&`),t.quantity&&(e=e+`quantity=${t.quantity}&`),t?e.replace(/&*$/,""):""}class c{async all(e){const i=await a(e);return n.get("/milking/all"+i).then(r=>r)}async get(e){const i=await a(e);return n.get("/milking"+i).then(r=>r)}create(e){return e.date&&(e.date=u(new Date(e.date)).format("YYYY-MM-DD")),n.post("/milking",e)}delete(e){return n.delete(`/milking/${e}`)}update(e,i){return n.put(`/milking/${e}`,i)}}const g=new c;export{g as M};
