if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>i(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(l.map((s=>o[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/age-calculate-bb92e417.js",revision:null},{url:"assets/alert-6b368e3f.js",revision:null},{url:"assets/birth-b38a111e.js",revision:null},{url:"assets/Cow-70104812.js",revision:null},{url:"assets/cow-880beca0.js",revision:null},{url:"assets/cow-ae6b6e19.js",revision:null},{url:"assets/Criteria-056e0bef.js",revision:null},{url:"assets/Criteria-dc3ac3b3.css",revision:null},{url:"assets/Detail-22a50faf.js",revision:null},{url:"assets/Detail-c889ac17.js",revision:null},{url:"assets/ErrorView-2e6fa6df.js",revision:null},{url:"assets/food-28f10bbc.js",revision:null},{url:"assets/FormCheckRadioPicker-d20cd780.js",revision:null},{url:"assets/FormField-b6dd63cf.js",revision:null},{url:"assets/FormFilePicker-4f8c2543.js",revision:null},{url:"assets/FormsView-ee830e3e.js",revision:null},{url:"assets/heal-f4e9abb6.js",revision:null},{url:"assets/ImageUpload-4c97d3ef.js",revision:null},{url:"assets/index-8e2b3beb.css",revision:null},{url:"assets/LoginView-e166639a.js",revision:null},{url:"assets/Main-019be920.js",revision:null},{url:"assets/Main-1bb725bd.js",revision:null},{url:"assets/Main-1d5cae59.js",revision:null},{url:"assets/Main-1f0a34de.js",revision:null},{url:"assets/Main-28051ad4.js",revision:null},{url:"assets/Main-33453cac.js",revision:null},{url:"assets/Main-55a2d54a.js",revision:null},{url:"assets/Main-56675a38.js",revision:null},{url:"assets/Main-66d7aac3.js",revision:null},{url:"assets/Main-bbd70a74.js",revision:null},{url:"assets/Main-be414c2e.js",revision:null},{url:"assets/Main-bec303b2.js",revision:null},{url:"assets/Main-c41be05e.js",revision:null},{url:"assets/Main-cf32881b.js",revision:null},{url:"assets/Main-d3b87436.js",revision:null},{url:"assets/Main-d98aaded.js",revision:null},{url:"assets/Main-daed90db.css",revision:null},{url:"assets/Main-f4df6654.js",revision:null},{url:"assets/milking-8dbbfe88.js",revision:null},{url:"assets/notification-c006cb51.js",revision:null},{url:"assets/ProfileView-1d287dba.js",revision:null},{url:"assets/protection-d94dc64a.js",revision:null},{url:"assets/RegisterView-8c527c88.js",revision:null},{url:"assets/report-3afd4cfe.js",revision:null},{url:"assets/reproduct-dccda875.js",revision:null},{url:"assets/ResponsiveView-e1dbc733.js",revision:null},{url:"assets/SectionBottomOtherPages-96d95f20.js",revision:null},{url:"assets/SectionFullScreen-97490662.js",revision:null},{url:"assets/SectionTitle-f5f0c4f8.js",revision:null},{url:"assets/Table-a22ed9d6.js",revision:null},{url:"assets/TablesView-b9c1177a.js",revision:null},{url:"assets/Top-60797db4.js",revision:null},{url:"assets/UiView-4b30e78b.js",revision:null},{url:"assets/Vaccine-b2ea6c36.js",revision:null},{url:"index.html",revision:"fa2f26a8fd49bb64f634c482a1ea125c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"image/icons/icon-192x192.png",revision:"b458aa57ab67249be1de64978b34c454"},{url:"image/icons/icon-256x256.png",revision:"cf94ffa78116a9cbbd7bfe26b387797f"},{url:"image/icons/icon-384x384.png",revision:"8308ef8b790c04a2cb86dae3c8329ca9"},{url:"image/icons/icon-512x512.png",revision:"82ef6053bd3d88ffeb2f7aeff93c50af"},{url:"manifest.webmanifest",revision:"1d54d9bc5563b96da113a76a66394b38"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
