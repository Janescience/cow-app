if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/age-calculate-bb92e417.js",revision:null},{url:"assets/alert-a2a7616a.js",revision:null},{url:"assets/birth-ce15abbe.js",revision:null},{url:"assets/Cow-622b6025.js",revision:null},{url:"assets/cow-8b1fe176.js",revision:null},{url:"assets/Cow-dc3ac3b3.css",revision:null},{url:"assets/cow-ed7a984e.js",revision:null},{url:"assets/Criteria-b793ffc3.js",revision:null},{url:"assets/Detail-51d57b32.js",revision:null},{url:"assets/ErrorView-4a0ea087.js",revision:null},{url:"assets/food-2d6243a4.js",revision:null},{url:"assets/FormCheckRadioPicker-b055ac64.js",revision:null},{url:"assets/FormField-d8c58746.js",revision:null},{url:"assets/FormFilePicker-e72f1059.js",revision:null},{url:"assets/FormsView-d2afc455.js",revision:null},{url:"assets/heal-f8e0be53.js",revision:null},{url:"assets/index-1beedbca.css",revision:null},{url:"assets/LoginView-2efc506e.js",revision:null},{url:"assets/Main-00db7a11.js",revision:null},{url:"assets/Main-128d6e80.js",revision:null},{url:"assets/Main-2ececa2f.js",revision:null},{url:"assets/Main-34d2c255.css",revision:null},{url:"assets/Main-3dcc2030.js",revision:null},{url:"assets/Main-47a59730.js",revision:null},{url:"assets/Main-6704525a.js",revision:null},{url:"assets/Main-6c3ad91d.js",revision:null},{url:"assets/Main-780a224a.js",revision:null},{url:"assets/Main-b8601457.js",revision:null},{url:"assets/Main-c5eccd59.js",revision:null},{url:"assets/Main-cc62c03b.js",revision:null},{url:"assets/Main-d18afe5d.js",revision:null},{url:"assets/milking-229f8e97.js",revision:null},{url:"assets/notification-e1d56fda.js",revision:null},{url:"assets/ProfileView-13a5c3e2.js",revision:null},{url:"assets/protection-9b2724ab.js",revision:null},{url:"assets/RegisterView-1898e2ca.js",revision:null},{url:"assets/reproduct-a35fb6f8.js",revision:null},{url:"assets/ResponsiveView-e7c71f42.js",revision:null},{url:"assets/SectionBottomOtherPages-ad7ce51a.js",revision:null},{url:"assets/SectionFullScreen-667aca4c.js",revision:null},{url:"assets/SectionTitle-dc3f8960.js",revision:null},{url:"assets/Table-af842fe8.js",revision:null},{url:"assets/TablesView-ee135776.js",revision:null},{url:"assets/Top-607724bf.js",revision:null},{url:"assets/UiView-f743f4d6.js",revision:null},{url:"index.html",revision:"e4d7526cbf1b3cc8aa5639b24caea088"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"image/icons/icon-192x192.png",revision:"b458aa57ab67249be1de64978b34c454"},{url:"image/icons/icon-256x256.png",revision:"cf94ffa78116a9cbbd7bfe26b387797f"},{url:"image/icons/icon-384x384.png",revision:"8308ef8b790c04a2cb86dae3c8329ca9"},{url:"image/icons/icon-512x512.png",revision:"82ef6053bd3d88ffeb2f7aeff93c50af"},{url:"manifest.webmanifest",revision:"1d54d9bc5563b96da113a76a66394b38"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
