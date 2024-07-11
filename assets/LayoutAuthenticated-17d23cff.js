import{p as f,R as N,M as _,o as r,c as p,w as d,J as M,n as u,i as a,O,s as b,g as w,j as m,t as D,F as A,a as L,m as K,a0 as Q,d as o,v as X,z as Y,u as Z,b as G,a1 as z,N as E,e as B,f as ee,D as T,_ as te,G as ae,H as le}from"./index-7b26548e.js";import{d as y,a as ne,h as oe,i as se,j as re}from"./BaseDivider-651bf36c.js";import{_ as U}from"./UserAvatar-56f44fe3.js";import{_ as ie,a as ce}from"./CardBoxModal-2cd8a859.js";const ue=[[{to:"/overview/farm",icon:"chartPie",label:"ภาพรวมฟาร์ม"},{to:"/overview/cow",icon:"graph",label:"ภาพรวมโค"},{to:"/todolist",icon:"formatListChecks",label:"รายการที่ต้องทำ"},{icon:"messageBadgeOutline",label:"การแจ้งเตือน",menu:[{to:"/setting/notification/log",icon:"clipboardTextClockOutline",label:"ประวัติการแจ้งเตือน"},{to:"/setting/notification/calendar",icon:"calendar",label:"ปฏิทินกำหนดการ"},{to:"/setting/notification/parameter",icon:"bellCogOutline",label:"ตั้งค่าแจ้งเตือน"}]}],"โค",[{to:"/manage/cow",icon:"cow",label:"ข้อมูลโค"},{to:"/manage/reproduct",icon:"reproduction",label:"ผสมพันธุ์"},{to:"/manage/birth",icon:"humanPregnant",label:"ติดตามโคท้อง/คลอดลูก"},{to:"/manage/cow",icon:"cow",label:"จัดการโคตัวผู้"}],"ดูแล",[{to:"/manage/heal",icon:"medication",label:"การรักษา"},{to:"/manage/protection",icon:"needle",label:"ฉีดวัคซีน"},{to:"/manage/food",icon:"corn",label:"การให้อาหาร"}],"ผลผลิต",[{to:"/manage/milk",icon:"cupWater",label:"น้ำนมดิบ (การรีดนม)"},{to:"/setting/parameter",icon:"cash",label:"ราคาน้ำนมดิบ/กก."}],"ต้นทุน",[{to:"/manage/maintenance",icon:"progressWrench",label:"การซ่อมบำรุง"},{to:"/manage/equipment",icon:"shovel",label:"อุปกรณ์"},{to:"/manage/building",icon:"barn",label:"สิ่งปลูกสร้าง"},{to:"/manage/worker",icon:"accountHardHat",label:"คนงาน"},{to:"/manage/vaccine",icon:"needle",label:"วัคซีน"},{to:"/manage/recipe",icon:"scale",label:"สูตรอาหาร"},{to:"/manage/bill",icon:"cashMultiple",label:"ค่าใช้จ่ายเพิ่มเติม"}],"รายงาน",[{to:"/report/raw-milk",icon:"microsoftExcel",label:"รายงานผลผลิตน้ำนมดิบ"},{to:"/report/cow",icon:"microsoftExcel",label:"รายงานข้อมูลโค"},{to:"/report/reproduct",icon:"microsoftExcel",label:"รายงานข้อมูลการสืบพันธุ์"},{to:"/report/heal",icon:"microsoftExcel",label:"รายงานข้อมูลการรักษา"}]],h={__name:"NavBarItem",props:{href:{type:String,default:null},to:{type:String,default:null},type:{type:String,default:"flex"},activeColor:{type:String,default:null},hasDivider:Boolean,isDesktopIconOnly:Boolean,dropdown:Boolean,active:Boolean},setup(e){const t=e,l=f(()=>t.href?"a":t.to?N:"div"),n=_(),i=t.activeColor??`${n.navBarItemLabelActiveColorStyle} dark:text-gray-400`,c=f(()=>{const s=[t.type,t.active?i:`${n.navBarItemLabelStyle} dark:text-white dark:hover:text-gray-400 ${n.navBarItemLabelHoverStyle}`];return t.type==="block"&&s.push("lg:flex"),t.dropdown?s.push("p-0","lg:py-2","lg:px-3"):s.push("py-2","px-3"),t.hasDivider&&s.push("lg:border-r","border-gray-100","lg:dark:border-gray-800"),t.isDesktopIconOnly&&s.push("lg:w-16","lg:justify-center"),s});return(s,g)=>(r(),p(O(a(l)),{class:u(["items-center grow-0 shrink-0 relative cursor-pointer",a(c)]),to:e.to,href:e.href},{default:d(()=>[M(s.$slots,"default")]),_:3},8,["class","to","href"]))}},C={__name:"NavBarItemLabel",props:{icon:{type:String,default:null},label:{type:String,required:!0},isDesktopIconOnly:Boolean},setup(e){return(t,l)=>(r(),b(A,null,[M(t.$slots,"default"),e.icon?(r(),p(y,{key:0,path:e.icon,class:"transition-colors"},null,8,["path"])):w("",!0),m("span",{class:u(["px-2 transition-colors",{"lg:hidden":e.isDesktopIconOnly&&e.icon}])},D(e.label),3)],64))}},de={__name:"NavBarMenu",props:{hasDivider:{type:Boolean,default:!1}},setup(e){const t=_(),l=L(!1),n=f(()=>l.value?"chevronUp":"chevronDown"),i=()=>{l.value=!l.value},c=L(null),s=g=>{c.value.$el.contains(g.target)||(l.value=!1)};return K(()=>{window.addEventListener("click",s)}),Q(()=>{window.removeEventListener("click",s)}),(g,S)=>(r(),p(h,{ref_key:"root",ref:c,type:"block","has-divider":e.hasDivider,active:l.value,dropdown:"",onClick:i},{default:d(()=>[m("a",{class:u(["flex items-center py-2 px-3 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent",a(t).navBarMenuListUpperLabelStyle])},[M(g.$slots,"default"),o(y,{path:a(n),class:"hidden lg:inline-flex transition-colors"},null,8,["path"])],2),m("div",{class:u(["text-sm border-b border-gray-100 lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-900 dark:border-gray-700",{"lg:hidden":!l.value}])},[M(g.$slots,"dropdown")],2)]),_:3},8,["has-divider","active"]))}},me={components:{UserAvatar:U},props:{username:{default:"123456",type:String},avatar:{default:null,type:String}}};function ge(e,t,l,n,i,c){const s=Y("UserAvatar");return r(),p(s,{username:l.username,avatar:l.avatar},null,8,["username","avatar"])}const pe=X(me,[["render",ge]]),fe={class:"flex-1 items-stretch flex"},be={class:"flex-none items-stretch flex h-14 lg:hidden"},ve={class:"max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"},he=m("p",null,"ต้องการออกจากระบบใช่หรือไม่ ?",-1),ye={__name:"NavBar",setup(e){const t=Z(),l=G(),n=f(()=>{var x,k;return(k=(x=z.getUser())==null?void 0:x.farm)==null?void 0:k.name}),i=f(()=>{var x,k;return(k=(x=z.getUser())==null?void 0:x.farm)==null?void 0:k.code}),c=_(),s=()=>{c.setDarkMode()},g="https://api.dicebear.com/7.x/avataaars/svg?seed="+i+n,S=E(),v=f(()=>S.isAsideMobileExpanded),j=f(()=>v.value?"backburger":"forwardburger"),q=()=>S.asideMobileToggle(),$=L(!1),H=f(()=>$.value?"close":"dotsVertical"),F=()=>{$.value=!$.value},P=()=>{S.asideLgToggle(!0)},I=L(!1),R=()=>{I.value=!0},W=()=>{l.dispatch("auth/logout"),t.push("/login")};return(x,k)=>(r(),b(A,null,[m("nav",{class:u(["lg:top-0 bottom-0 left-0 right-0 fixed flex bg-gray-100 text-black h-12 border-b shadow-lg border-gray-100 z-30 w-screen transition-position xl:pl-64 lg:w-auto lg:items-stretch dark:bg-gray-900 dark:border-gray-800",{"ml-64 lg:ml-0":a(v)}])},[m("div",fe,[o(h,{type:"flex lg:hidden",onClick:B(q,["prevent"])},{default:d(()=>[o(y,{path:a(j),size:"24"},null,8,["path"])]),_:1},8,["onClick"]),o(h,{type:"hidden lg:flex xl:hidden",onClick:B(P,["prevent"])},{default:d(()=>[o(y,{path:"menu",size:"24"})]),_:1},8,["onClick"])]),m("div",be,[o(h,{onClick:B(F,["prevent"])},{default:d(()=>[o(y,{path:a(H),size:"24"},null,8,["path"])]),_:1},8,["onClick"])]),m("div",{class:u(["absolute w-screen lg:top-14 bottom-12 left-0 lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible dark:bg-gray-900",[$.value?"block":"hidden"]])},[m("div",ve,[o(de,{"has-divider":""},{dropdown:d(()=>[o(h,{to:"/profile"},{default:d(()=>[o(C,{icon:"account",label:"ข้อมูลส่วนตัว"})]),_:1}),o(h,null,{default:d(()=>[o(C,{icon:"cogOutline",label:"ตั้งค่า"})]),_:1}),o(ne,{"nav-bar":""}),o(h,{onClick:R},{default:d(()=>[o(C,{icon:"logout",label:"ออกจากระบบ"})]),_:1})]),default:d(()=>[o(C,{label:a(n)},{default:d(()=>[o(pe,{username:a(i),avatar:g,class:"w-6 h-6 mr-3 inline-flex"},null,8,["username"])]),_:1},8,["label"])]),_:1}),o(h,{"has-divider":"","is-desktop-icon-only":"",onClick:B(s,["prevent"])},{default:d(()=>[o(C,{icon:"themeLightDark",label:"Light/Dark","is-desktop-icon-only":""})]),_:1},8,["onClick"])])],2)],2),o(ie,{modelValue:I.value,"onUpdate:modelValue":k[0]||(k[0]=J=>I.value=J),title:"ยืนยันอีกครั้ง","button-label":"ยืนยัน",onConfirm:W,"has-cancel":"","has-button":""},{default:d(()=>[he]),_:1},8,["modelValue"])],64))}},ke={__name:"PillTag",props:{text:{type:String,required:!0},type:{type:String,required:!0},icon:{type:String,default:null},small:Boolean,outline:Boolean},setup(e){const t=e,l=f(()=>{const n=t.outline?oe[t.type]:[se[t.type],re[t.type]];return["border",t.small?"text-xs rounded-lg mr-1.5":"py-2 px-4 rounded-2xl mr-3",...n]});return(n,i)=>(r(),b("div",{class:u(["inline-flex items-center last:mr-0 capitalize",a(l)])},[e.icon?(r(),p(y,{key:0,path:e.icon},null,8,["path"])):w("",!0),m("span",null,D(e.text),1)],2))}},xe={__name:"AsideMenuItem",props:{item:{type:Object,required:!0},isSubmenuList:Boolean},emits:["menu-click"],setup(e,{emit:t}){const l=e,n=_(),i=L(!1),c=f(()=>!!l.item.menu),s=g=>{t("menu-click",g,l.item),c.value&&(i.value=!i.value)};return(g,S)=>(r(),b("li",null,[(r(),p(O(e.item.to?a(N):"a"),{to:e.item.to||null,href:e.item.href||null,target:e.item.target||null,class:u(["flex cursor-pointer dark:hover:bg-gray-700/50",[a(n).asideMenuItemStyle,e.isSubmenuList?"p-3 text-sm":"py-2 "]]),onClick:s},{default:d(v=>[e.item.icon?(r(),p(y,{key:0,size:"18",path:e.item.icon,class:u(["flex-none",[v&&v.isExactActive?a(n).asideMenuItemActiveStyle:a(n).asideMenuItemInactiveStyle]]),w:"w-12",h:""},null,8,["path","class"])):w("",!0),m("span",{class:u(["grow",[v&&v.isExactActive?a(n).asideMenuItemActiveStyle:a(n).asideMenuItemInactiveStyle]])},[ee(D(e.item.label)+" ",1),e.item.countData&&g.mainStore[e.item.countData]>0?(r(),p(ke,{key:0,text:g.mainStore[e.item.countData],type:"light",small:"true"},null,8,["text"])):w("",!0)],2),a(c)?(r(),p(y,{key:1,path:i.value?"chevronDown":"chevronUp",class:u(["flex-none",[v&&v.isExactActive?a(n).asideMenuItemActiveStyle:a(n).asideMenuItemInactiveStyle]]),w:"w-12"},null,8,["path","class"])):w("",!0)]),_:1},8,["to","href","target","class"])),a(c)?(r(),p(V,{key:0,menu:e.item.menu,class:u([a(n).asideSubmenuListStyle,i.value?"block dark:bg-gray-800/50":"hidden"]),"is-submenu-list":""},null,8,["menu","class"])):w("",!0)]))}},V={__name:"AsideMenuList",props:{isSubmenuList:{type:Boolean,default:!1},menu:{type:Array,default:()=>[]}},emits:["menu-click"],setup(e,{emit:t}){const l=(n,i)=>{t("menu-click",n,i)};return(n,i)=>(r(),b("ul",null,[(r(!0),b(A,null,T(e.menu,(c,s)=>(r(),p(xe,{key:s,item:c,"is-submenu-list":e.isSubmenuList,onMenuClick:l},null,8,["item","is-submenu-list"]))),128))]))}},we={class:"flex-1 px-3"},_e=m("span",null,"Dairy Farm",-1),Se={__name:"AsideMenu",props:{menu:{type:Array,default:()=>[]}},setup(e){const t=_(),l=E(),n=()=>{};return(i,c)=>(r(),b("aside",{id:"aside",class:u(["w-64 fixed top-0 z-40 h-screen transition-position lg:left-0 overflow-y-auto dark:border-r dark:border-gray-800 dark:bg-gray-900 xl:dark:bg-gray-900/70",[a(t).asideStyle,a(l).isAsideMobileExpanded?"left-0":"-left-64",a(l).isAsideLgActive?"block":"lg:hidden xl:block"]])},[m("div",{class:u(["flex flex-row w-full flex-1 h-14 items-center dark:bg-transparent",[a(t).asideBrandStyle]])},[o(h,{type:"hidden lg:flex xl:hidden","active-color":a(t).asideMenuCloseLgStyle,active:"",onClick:c[0]||(c[0]=s=>a(l).asideLgToggle(!1))},{default:d(()=>[o(y,{path:"menu",class:"cursor-pointer",size:"24"})]),_:1},8,["active-color"]),m("div",we,[o(te,{type:"justify-start"},{default:d(()=>[o(U,{avatar:"/image/cow-logo.jpg",class:"w-8 mr-2",username:"logo"}),_e]),_:1})])],2),m("div",null,[(r(!0),b(A,null,T(e.menu,(s,g)=>(r(),b(A,null,[typeof s=="string"?(r(),b("p",{key:`a-${g}`,class:u(["p-3 uppercase",a(t).asideMenuLabelStyle])},D(s),3)):(r(),p(V,{key:`b-${g}`,menu:s,onMenuClick:n},null,8,["menu"]))],64))),256))])],2))}},$e={__name:"LayoutAuthenticated",setup(e){const t=_(),l=E(),n=f(()=>l.isAsideLgActive),i=()=>{l.asideLgToggle(!1)};return(c,s)=>(r(),b("div",{class:u({dark:a(t).darkMode,"overflow-hidden lg:overflow-visible":a(l).isAsideMobileExpanded})},[m("div",{class:u([[a(t).appStyle,{"ml-64 lg:ml-0":a(l).isAsideMobileExpanded}],"lg:pt-14 pb-14 xl:pl-64 w-screen transition-position lg:w-auto"])},[o(ye),o(Se,{menu:a(ue)},null,8,["menu"]),M(c.$slots,"default"),ae(o(ce,{"z-index":"z-30",onOverlayClick:i},null,512),[[le,a(n)]])],2)],2))}};export{$e as _};
