if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/age-calculate-bb92e417.js",revision:null},{url:"assets/alert-8c8566fa.js",revision:null},{url:"assets/birth-368036b8.js",revision:null},{url:"assets/cow-a691a502.js",revision:null},{url:"assets/cow-ae6b6e19.js",revision:null},{url:"assets/Cow-f5825df1.js",revision:null},{url:"assets/Criteria-72fb76ed.js",revision:null},{url:"assets/Criteria-dc3ac3b3.css",revision:null},{url:"assets/Detail-aabd6aeb.js",revision:null},{url:"assets/Detail-fc121c2a.js",revision:null},{url:"assets/ErrorView-cae051ff.js",revision:null},{url:"assets/food-25aa5536.js",revision:null},{url:"assets/FormCheckRadioPicker-daaeed2d.js",revision:null},{url:"assets/FormField-41447fb2.js",revision:null},{url:"assets/FormFilePicker-ec1b609d.js",revision:null},{url:"assets/FormsView-7e7327c0.js",revision:null},{url:"assets/heal-254e6603.js",revision:null},{url:"assets/ImageUpload-a22cbbce.js",revision:null},{url:"assets/index-e08bde3f.css",revision:null},{url:"assets/LoginView-adb64f65.js",revision:null},{url:"assets/Main-0c3cb0bd.js",revision:null},{url:"assets/Main-323994d8.js",revision:null},{url:"assets/Main-48730963.js",revision:null},{url:"assets/Main-4f85e798.js",revision:null},{url:"assets/Main-5645ce79.js",revision:null},{url:"assets/Main-7ac8e353.js",revision:null},{url:"assets/Main-7cd1161f.js",revision:null},{url:"assets/Main-a0b632a0.js",revision:null},{url:"assets/Main-ae060d1f.js",revision:null},{url:"assets/Main-b2225a66.js",revision:null},{url:"assets/Main-bdd12c8e.js",revision:null},{url:"assets/Main-c8134929.js",revision:null},{url:"assets/Main-ce099921.js",revision:null},{url:"assets/Main-daed90db.css",revision:null},{url:"assets/Main-efd4613c.js",revision:null},{url:"assets/Main-f033f773.js",revision:null},{url:"assets/milking-764510f8.js",revision:null},{url:"assets/notification-c446a5bb.js",revision:null},{url:"assets/ProfileView-1294c0a1.js",revision:null},{url:"assets/protection-178dcf93.js",revision:null},{url:"assets/RegisterView-fb0a4a38.js",revision:null},{url:"assets/report-81d95869.js",revision:null},{url:"assets/reproduct-923afabc.js",revision:null},{url:"assets/ResponsiveView-935b1b5b.js",revision:null},{url:"assets/SectionBottomOtherPages-570120bd.js",revision:null},{url:"assets/SectionFullScreen-cfa02904.js",revision:null},{url:"assets/SectionTitle-4a1a0d66.js",revision:null},{url:"assets/Table-014b1938.js",revision:null},{url:"assets/TablesView-51d512fd.js",revision:null},{url:"assets/Top-03163a7b.js",revision:null},{url:"assets/UiView-101079c3.js",revision:null},{url:"assets/Vaccine-79789b25.js",revision:null},{url:"index.html",revision:"fc76945c425114387e7e3367f64799b5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"image/icons/icon-192x192.png",revision:"b458aa57ab67249be1de64978b34c454"},{url:"image/icons/icon-256x256.png",revision:"cf94ffa78116a9cbbd7bfe26b387797f"},{url:"image/icons/icon-384x384.png",revision:"8308ef8b790c04a2cb86dae3c8329ca9"},{url:"image/icons/icon-512x512.png",revision:"82ef6053bd3d88ffeb2f7aeff93c50af"},{url:"manifest.webmanifest",revision:"1d54d9bc5563b96da113a76a66394b38"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
