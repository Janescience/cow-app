import{y as i,B as n}from"./index-af62b25d.js";async function c(r={}){let e="?";if(r.cow&&(e=e+`cow=${r.cow}&`),r.year&&(e=e+`year=${r.year}&`),r.monthFrom&&(e=e+`monthFrom=${r.monthFrom}&`),r.monthTo&&(e=e+`monthTo=${r.monthTo}&`),r.date){const t=n(new Date(r.date)).format("YYYY-MM-DD");e=e+`date=${t}&`}if(r.loginDate){const t=n(new Date(r.loginDate)).format("YYYY-MM-DD");e=e+`loginDate=${t}&`}if(r.estrustDate){const t=n(new Date(r.estrustDate)).format("YYYY-MM-DD");e=e+`estrustDate=${t}&`}if(r.matingDate){const t=n(new Date(r.matingDate)).format("YYYY-MM-DD");e=e+`matingDate=${t}&`}if(r.checkDate){const t=n(new Date(r.checkDate)).format("YYYY-MM-DD");e=e+`checkDate=${t}&`}return r.status&&(e=e+`status=${r.status}&`),r.result&&(e=e+`result=${r.result}&`),r.quality&&(e=e+`quality=${r.quality}&`),r.corral&&(e=e+`corral=${r.corral}&`),r.flag&&(e=e+`flag=${r.flag}&`),r?e.replace(/&*$/,""):""}class o{async cow(e){const t=await c(e);return i.get("/report/cow"+t,{responseType:"blob"}).then(a=>a)}async rawMilk(e){const t=await c(e);return i.get("/report/raw-milk"+t,{responseType:"blob"}).then(a=>a)}async reproductExport(e){const t=await c(e);return i.get("/report/reproduct"+t,{responseType:"blob"}).then(a=>a)}async reproductView(e){const t=await c(e);return i.get("/report/view/reproduct"+t).then(a=>a)}}const D=new o;export{D as R};
