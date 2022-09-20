import{Q as m,R as h,S as x,g as l,T as N,d as g,c as B,w as n,U as s,o as I,a as o,l as t,i as e}from"./index.78641a88.js";import{_ as L}from"./BaseButtons.857029c7.js";import{_ as y}from"./SectionTitle.b6ee4f0b.js";const E={data(){return{user:h()}},components:{SectionMain:x,BaseButton:l,LayoutAuthenticated:N,BaseButtons:L,BaseButton:l,SectionTitle:y,BaseLevel:g},computed:{urlAuth(){const a={}.VITE_LINE_CLIENT_ID,c="https://thaosharehouse-engine.herokuapp.com/engine",i=this.user.username;return`https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${a}&redirect_uri=${c}/line/redirect&scope=notify&state=${i}`}},methods:{}},b=e(" \u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D LINE \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 "),v=t("div",{class:"text-lg"},[t("div",{class:"py-2 px-5"},[e(" 1. \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E19 "),t("span",{class:"text-green-500 font-bold"},"LINE Notify"),e(" \u0E43\u0E19 "),t("span",{class:"text-green-300 font-bold"},"LINE")]),t("div",{class:"py-2 px-5"},[e(" 2. \u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 "),t("u",{class:"text-blue-400"},"\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D LINE"),e(" \u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A "),t("span",{class:"text-green-300 font-bold"},"LINE")]),t("div",{class:"py-2 px-5"},[e(" 3. \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E01\u0E25\u0E38\u0E48\u0E21\u0E43\u0E19 "),t("span",{class:"text-green-300 font-bold"},"LINE"),t("span",{class:"text-red-400 font-light"},[e(" (\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35\u0E01\u0E25\u0E38\u0E48\u0E21\u0E2D\u0E22\u0E39\u0E48\u0E41\u0E25\u0E49\u0E27\u0E43\u0E19 "),t("span",{class:"text-green-300 font-bold"},"LINE"),e(" \u0E16\u0E49\u0E32\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E25\u0E38\u0E48\u0E21 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E44\u0E1B\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E19 "),t("span",{class:"text-green-300 font-bold"},"LINE"),e(" \u0E41\u0E25\u0E30\u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E14\u0E34\u0E21\u0E41\u0E25\u0E49\u0E27 Refresh) ")])]),t("div",{class:"py-2 px-5"},[e(" 4. \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08 "),t("span",{class:"text-green-500 font-bold"},"LINE Notify"),e(" \u0E08\u0E30\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32 "),t("span",{class:"text-green-300 font-bold"},"LINE"),e(" \u0E27\u0E48\u0E32 "),t("i",{class:"font-light"},"`` '\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E44\u0E25\u0E19\u0E4C' is now connected.Invite the account to '\u0E0A\u0E37\u0E48\u0E2D\u0E01\u0E25\u0E38\u0E48\u0E21\u0E44\u0E25\u0E19\u0E4C' to receive notifications. ``")]),t("div",{class:"py-2 px-5"},[e(" 5. \u0E40\u0E0A\u0E34\u0E0D "),t("span",{class:"text-green-500 font-bold"},"LINE Notify"),e(" \u0E40\u0E02\u0E49\u0E32\u0E01\u0E25\u0E38\u0E48\u0E21\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E19 \u0E02\u0E49\u0E2D\u0E17\u0E35\u0E48 2. ")]),t("div",{class:"py-2 px-5"},` 6. \u0E01\u0E25\u0E31\u0E1A\u0E21\u0E32\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E21\u0E19\u0E39 '\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32 > \u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 > \u0E01\u0E14\u0E1B\u0E38\u0E48\u0E21 "\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19" (\u0E16\u0E49\u0E32\u0E1B\u0E38\u0E48\u0E21\u0E44\u0E21\u0E48\u0E41\u0E2A\u0E14\u0E07 Refresh \u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E2D\u0E35\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07)' `)],-1);function $(a,c,i,S,T,r){const p=s("SectionTitle"),d=s("BaseButton"),u=s("BaseButtons"),_=s("SectionMain"),f=s("LayoutAuthenticated");return I(),B(f,null,{default:n(()=>[o(_,null,{default:n(()=>[t("div",null,[o(p,{class:"text-2xl"},{default:n(()=>[b]),_:1}),v,o(u,{type:"justify-center",class:"mt-3"},{default:n(()=>[o(d,{icon:"connection",class:"bg-gradient-to-r from-emerald-500 to-lime-600",label:"\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D LINE",target:"_blank",href:r.urlAuth},null,8,["href"])]),_:1})])]),_:1})]),_:1})}var w=m(E,[["render",$]]);export{w as default};
