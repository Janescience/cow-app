import{y as a,B as i}from"./index-bd6b8fcb.js";async function n(t={}){let e="?";if(t.flag&&(e=e+`flag=${t.flag}&`),t.code&&(e=e+`code=${t.code}&`),t.name&&(e=e+`name=${t.name}&`),t.status&&(e=e+`status=${t.status}&`),t.birthDate){const r=i(new Date(t.birthDate)).format("YYYY-MM-DD");e=e+`birthDate=${r}&`}return t.corral&&(e=e+`corral=${t.corral}&`),t?e.replace(/&*$/,""):""}class u{async all(e){const r=await n(e);return a.get("/cow"+r).then(c=>c)}async ddl(e){const r=await n(e);return a.get("/cow/ddl"+r).then(c=>c)}get(e){return a.get(`/cow/${e}`)}getDetails(e){return a.get(`/cow/detail/${e}`)}create(e){return e.birthDate&&(e.birthDate=i(new Date(e.birthDate)).format("YYYY-MM-DD")),a.post("/cow",e)}delete(e){return a.delete(`/cow/${e}`)}update(e,r){return a.put(`/cow/${e}`,r)}}const l=new u;export{l as C};