import{Q as n,z as a}from"./index-273b3c22.js";async function i(t={}){let e="?";if(t.dateCurrent){const r=a(new Date(t.dateCurrent)).format("YYYY-MM-DD");e=e+`dateCurrent=${r}&`}if(t.dateNext){const r=a(new Date(t.dateNext)).format("YYYY-MM-DD");e=e+`dateNext=${r}&`}return t.vaccine&&(e=e+`vaccine=${t.vaccine}&`),t?e.replace(/&*$/,""):""}class o{async all(e){const r=await i(e);return n.get("/protection"+r).then(c=>c)}get(e){return n.get(`/protection/${e}`)}create(e){return e.dateCurrent&&(e.dateCurrent=a(new Date(e.dateCurrent)).format("YYYY-MM-DD")),e.dateNext&&(e.dateNext=a(new Date(e.dateNext)).format("YYYY-MM-DD")),n.post("/protection",e)}delete(e){return n.delete(`/protection/${e}`)}update(e,r){return n.put(`/protection/${e}`,r)}}const Y=new o;export{Y as P};