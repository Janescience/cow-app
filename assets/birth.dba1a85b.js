import{I as i,J as n}from"./index.a033fd67.js";async function h(r={}){let e="?";if(r.cow&&(e=e+`cow=${r.cow}&`),r.birthDate){const t=n(new Date(r.birthDate)).format("YYYY-MM-DD");e=e+`birthDate=${t}&`}return r.sex&&(e=e+`sex=${r.sex}&`),r?e.replace(/&*$/,""):""}class D{async all(e){const t=await h(e);return i.get("/birth"+t).then(a=>a)}get(e){return i.get(`/birth/${e}`)}create(e,t){return t.birthDate&&(t.birthDate=n(new Date(t.birthDate)).format("YYYY-MM-DD")),i.post(`/birth/${e}`,t)}delete(e){return i.delete(`/birth/${e}`)}update(e,t){return t.birthDate&&(t.birthDate=n(new Date(t.birthDate)).format("YYYY-MM-DD")),i.put(`/birth/${e}`,t)}}var u=new D;const b=()=>({M:"\u0E40\u0E1E\u0E28\u0E1C\u0E39\u0E49",F:"\u0E40\u0E1E\u0E28\u0E40\u0E21\u0E35\u0E22"}),s=()=>({Y:"\u0E04\u0E49\u0E32\u0E07",N:"\u0E44\u0E21\u0E48\u0E04\u0E49\u0E32\u0E07"});export{u as B,s as o,b as s};