import{y as a,B as c}from"./index-5292fd0b.js";async function i(t={}){let e="?";if(t.flag&&(e=e+`flag=${t.flag}&`),t.code&&(e=e+`code=${t.code}&`),t.name&&(e=e+`name=${t.name}&`),t.status&&(e=e+`status=${t.status}&`),t.birthDate){const r=c(new Date(t.birthDate)).format("YYYY-MM-DD");e=e+`birthDate=${r}&`}return t.corral&&(e=e+`corral=${t.corral}&`),t?e.replace(/&*$/,""):""}class o{async all(e){const r=await i(e);return a.get("/cow"+r).then(n=>n)}async ddl(e){const r=await i(e);return a.get("/cow/ddl"+r).then(n=>n)}get(e){return a.get(`/cow/${e}`)}getDetails(e){return a.get(`/cow/detail/${e}`)}create(e){return e.birthDate&&(e.birthDate=c(new Date(e.birthDate)).format("YYYY-MM-DD")),e.adopDate&&(e.adopDate=c(new Date(e.adopDate)).format("YYYY-MM-DD")),console.log("before create "),a.post("/cow",e)}delete(e){return a.delete(`/cow/${e}`)}update(e,r){return a.post(`/cow/${e}`,r)}upload(e){if(e.file){const r=new FormData;return r.append("file",e.file),a.post(`/cow/upload/${e._id}`,r)}}}const u=new o;export{u as C};