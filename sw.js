if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/age-calculate-bb92e417.js",revision:null},{url:"assets/alert-993587e2.js",revision:null},{url:"assets/birth-7a512a54.js",revision:null},{url:"assets/Cow-2328920f.js",revision:null},{url:"assets/cow-ab2463d5.js",revision:null},{url:"assets/cow-ae6b6e19.js",revision:null},{url:"assets/Criteria-a056731c.js",revision:null},{url:"assets/Criteria-dc3ac3b3.css",revision:null},{url:"assets/Detail-1736986a.js",revision:null},{url:"assets/Detail-e0a3de4d.js",revision:null},{url:"assets/ErrorView-4a208b28.js",revision:null},{url:"assets/food-e49bf292.js",revision:null},{url:"assets/FormCheckRadioPicker-06e43c39.js",revision:null},{url:"assets/FormField-43f21bdf.js",revision:null},{url:"assets/FormFilePicker-27629ccc.js",revision:null},{url:"assets/FormsView-ec3b68af.js",revision:null},{url:"assets/heal-cda1d7b3.js",revision:null},{url:"assets/ImageUpload-4024cecb.js",revision:null},{url:"assets/index-ae6d4d62.css",revision:null},{url:"assets/LoginView-2a0236dc.js",revision:null},{url:"assets/Main-01520da3.js",revision:null},{url:"assets/Main-196df7f9.js",revision:null},{url:"assets/Main-1dd35bcc.js",revision:null},{url:"assets/Main-1f284fc4.js",revision:null},{url:"assets/Main-318d1b5a.js",revision:null},{url:"assets/Main-3ef06258.js",revision:null},{url:"assets/Main-3fa1000b.js",revision:null},{url:"assets/Main-5586361f.js",revision:null},{url:"assets/Main-582a4faa.js",revision:null},{url:"assets/Main-78126d24.js",revision:null},{url:"assets/Main-7c055c59.js",revision:null},{url:"assets/Main-8803d115.js",revision:null},{url:"assets/Main-895d5cf0.js",revision:null},{url:"assets/Main-8c7a825d.js",revision:null},{url:"assets/Main-a7b0ecc5.js",revision:null},{url:"assets/Main-daed90db.css",revision:null},{url:"assets/Main-e7b56192.js",revision:null},{url:"assets/Main-ea107579.js",revision:null},{url:"assets/Main-ea6bf001.js",revision:null},{url:"assets/milking-1c79243b.js",revision:null},{url:"assets/notification-2cf8c4f6.js",revision:null},{url:"assets/param-10382471.js",revision:null},{url:"assets/ProfileView-80e0d6be.js",revision:null},{url:"assets/protection-6f314aee.js",revision:null},{url:"assets/RegisterView-21cc3886.js",revision:null},{url:"assets/report-cf474336.js",revision:null},{url:"assets/reproduct-7944d4bb.js",revision:null},{url:"assets/ResponsiveView-46dd9bd4.js",revision:null},{url:"assets/SectionBottomOtherPages-9f85f676.js",revision:null},{url:"assets/SectionFullScreen-9715a57a.js",revision:null},{url:"assets/SectionTitle-7096e9ec.js",revision:null},{url:"assets/Table-03458201.js",revision:null},{url:"assets/TablesView-362344ae.js",revision:null},{url:"assets/Top-3fc06d84.js",revision:null},{url:"assets/UiView-3d28e631.js",revision:null},{url:"assets/Vaccine-13b4809d.js",revision:null},{url:"index.html",revision:"a07e52beb0c9ae17438f04fe878e8b72"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"image/icons/icon-192x192.png",revision:"b458aa57ab67249be1de64978b34c454"},{url:"image/icons/icon-256x256.png",revision:"cf94ffa78116a9cbbd7bfe26b387797f"},{url:"image/icons/icon-384x384.png",revision:"8308ef8b790c04a2cb86dae3c8329ca9"},{url:"image/icons/icon-512x512.png",revision:"82ef6053bd3d88ffeb2f7aeff93c50af"},{url:"manifest.webmanifest",revision:"1d54d9bc5563b96da113a76a66394b38"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));