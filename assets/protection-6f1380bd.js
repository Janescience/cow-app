import{y as r,B as c}from"./index-6333eab8.js";async function o(t={}){let e="?";if(t.date){const n=c(new Date(t.date)).format("YYYY-MM-DD");e=e+`date=${n}&`}return t.vaccine&&(e=e+`vaccine=${t.vaccine}&`),t.cows&&(e=e+`cows=${t.cows}&`),t?e.replace(/&*$/,""):""}class a{async all(e){const n=await o(e);return r.get("/protection"+n).then(i=>i)}get(e){return r.get(`/protection/${e}`)}create(e){return e.date&&(e.date=c(new Date(e.date)).format("YYYY-MM-DD")),r.post("/protection",e)}confirm(e){return e.date&&(e.date=c(new Date(e.date)).format("YYYY-MM-DD")),r.post("/protection/confirm",e)}delete(e){return r.delete(`/protection/${e}`)}update(e,n){return r.put(`/protection/${e}`,n)}}const f=new a;export{f as P};
