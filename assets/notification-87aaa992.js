import{y as n,B as i}from"./index-51c79a7a.js";async function c(t={}){let e="?";if(t.status&&(e=e+`status=${t.status}&`),t.cow&&(e=e+`cow=${t.cow}&`),t.createdAt){const a=i(new Date(t.createdAt)).format("YYYY-MM-DD");e=e+`createdAt=${a}&`}return t.type&&(e=e+`type=${t.type}&`),t.message&&(e=e+`message=${t.message}&`),t?e.replace(/&*$/,""):""}class s{async getLogs(e){const a=await c(e);return n.get("/notification/logs"+a).then(r=>r)}async getCalendar(e){const a=await c(e);return n.get("/notification/calendar"+a).then(r=>r)}}const u=new s;export{u as N};