import{y as n,B as c}from"./index-7127aab5.js";async function a(r={}){let e="?";if(r.cow&&(e=e+`cow=${r.cow}&`),r.year&&(e=e+`year=${r.year}&`),r.monthFrom&&(e=e+`monthFrom=${r.monthFrom}&`),r.monthTo&&(e=e+`monthTo=${r.monthTo}&`),r.date){const t=c(new Date(r.date)).format("YYYY-MM-DD");e=e+`date=${t}&`}return r?e.replace(/&*$/,""):""}class i{async cow(e){const t=await a(e);return n.get("/report/cow"+t,{responseType:"blob"}).then(o=>o)}async rawMilk(e){const t=await a(e);return n.get("/report/raw-milk"+t,{responseType:"blob"}).then(o=>o)}}const y=new i;export{y as R};