if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/age-calculate-bb92e417.js",revision:null},{url:"assets/alert-7576a7bd.js",revision:null},{url:"assets/birth-7cbe3e94.js",revision:null},{url:"assets/cow-471d714a.js",revision:null},{url:"assets/cow-99325b1e.js",revision:null},{url:"assets/Cow-a971260c.js",revision:null},{url:"assets/Criteria-ad5d9f4e.js",revision:null},{url:"assets/Criteria-dc3ac3b3.css",revision:null},{url:"assets/Detail-c6a05c4c.js",revision:null},{url:"assets/ErrorView-9948fb3c.js",revision:null},{url:"assets/food-5d6f5643.js",revision:null},{url:"assets/FormCheckRadioPicker-f02674ee.js",revision:null},{url:"assets/FormField-1815475f.js",revision:null},{url:"assets/FormFilePicker-a6e61878.js",revision:null},{url:"assets/FormsView-50c55371.js",revision:null},{url:"assets/heal-e7ec6049.js",revision:null},{url:"assets/index-1beedbca.css",revision:null},{url:"assets/LoginView-0768a038.js",revision:null},{url:"assets/Main-0952b8ab.js",revision:null},{url:"assets/Main-15486cdd.js",revision:null},{url:"assets/Main-34d2c255.css",revision:null},{url:"assets/Main-3dfcec2b.js",revision:null},{url:"assets/Main-3f9849c5.js",revision:null},{url:"assets/Main-444744da.js",revision:null},{url:"assets/Main-468cfb7a.js",revision:null},{url:"assets/Main-47bdee33.js",revision:null},{url:"assets/Main-4f2a5a4f.js",revision:null},{url:"assets/Main-92def1d9.js",revision:null},{url:"assets/Main-acb5cabf.js",revision:null},{url:"assets/Main-dd058215.js",revision:null},{url:"assets/Main-e1521a5f.js",revision:null},{url:"assets/milking-ec2c01c1.js",revision:null},{url:"assets/notification-f780d0c6.js",revision:null},{url:"assets/ProfileView-0aa997c8.js",revision:null},{url:"assets/protection-4818538f.js",revision:null},{url:"assets/RegisterView-a9c7bf6d.js",revision:null},{url:"assets/reproduct-fd7b9155.js",revision:null},{url:"assets/ResponsiveView-86e6b750.js",revision:null},{url:"assets/SectionBottomOtherPages-f482bf83.js",revision:null},{url:"assets/SectionFullScreen-6e30da07.js",revision:null},{url:"assets/SectionTitle-2637b029.js",revision:null},{url:"assets/Table-6deaa913.js",revision:null},{url:"assets/TablesView-a6599ace.js",revision:null},{url:"assets/Top-e4786fa3.js",revision:null},{url:"assets/UiView-62238e2d.js",revision:null},{url:"index.html",revision:"6a6482a02e20c6901d1e071fa3faacd0"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"image/icons/icon-192x192.png",revision:"b458aa57ab67249be1de64978b34c454"},{url:"image/icons/icon-256x256.png",revision:"cf94ffa78116a9cbbd7bfe26b387797f"},{url:"image/icons/icon-384x384.png",revision:"8308ef8b790c04a2cb86dae3c8329ca9"},{url:"image/icons/icon-512x512.png",revision:"82ef6053bd3d88ffeb2f7aeff93c50af"},{url:"manifest.webmanifest",revision:"1d54d9bc5563b96da113a76a66394b38"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));