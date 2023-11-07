(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},4242:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>f,pages:()=>d,routeModule:()=>x,tree:()=>c});var a=r(7096),s=r(6132),n=r(7284),o=r.n(n),i=r(2564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1012)),"/Users/mustafaabdelazim/Repos/next_14_test/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5345)),"/Users/mustafaabdelazim/Repos/next_14_test/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/mustafaabdelazim/Repos/next_14_test/app/page.tsx"],f="/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1302:(e,t,r)=>{let a={"8830bfab6dc7294e2475758c6f7874f6e269e331":()=>Promise.resolve().then(r.bind(r,734)).then(e=>e.signTokenAction),b91ce917a822071a137ab49cb2a206e247b0a518:()=>Promise.resolve().then(r.bind(r,8368)).then(e=>e.verifyTokenAction)};async function endpoint(e,...t){let r=await a[e]();return r.apply(null,t)}e.exports={"8830bfab6dc7294e2475758c6f7874f6e269e331":endpoint.bind(null,"8830bfab6dc7294e2475758c6f7874f6e269e331"),b91ce917a822071a137ab49cb2a206e247b0a518:endpoint.bind(null,"b91ce917a822071a137ab49cb2a206e247b0a518")}},1330:(e,t,r)=>{Promise.resolve().then(r.bind(r,7261)),Promise.resolve().then(r.t.bind(r,6686,23))},7261:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PayloadMessage:()=>PayloadMessage});var a=r(784);r(5422),r(3009);var s=r(1324),n=(0,s.$)("8830bfab6dc7294e2475758c6f7874f6e269e331"),o=(0,s.$)("b91ce917a822071a137ab49cb2a206e247b0a518"),i=r(9885);let decodePayload=e=>{let t={payload:"",exp:""};if(!e)return t;let r=e?.iat?e:null;if(!r)return t;let a=new Date(r?.exp*1e3);return{payload:r?.payload,exp:a.toLocaleString()}},PayloadMessage=()=>{let[e,t]=(0,i.useState)(null),[r,s]=(0,i.useState)(null),[l,c]=(0,i.useState)();return(0,a.jsxs)("div",{className:"max-w-5xl w-full flex flex-col items-center justify-center gap-8",children:[a.jsx("input",{className:"w-full h-12 px-6 text-lg bg-slate-200 text-gray-800 placeholder-gray-500 border rounded-lg focus:shadow-outline",placeholder:"Payload...",onChange:e=>{null!==e.target.value&&t(e.target.value)}}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center gap-8",children:[a.jsx("button",{className:"w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline",onClick:t=>{t.preventDefault(),(async()=>{let t=await n(e);s(t)})()},children:"Sign"}),a.jsx("button",{className:"w-24 h-12 px-6 text-lg bg-slate-200 text-gray-800 border rounded-lg focus:shadow-outline",onClick:e=>{e.preventDefault(),(async()=>{let e=await o(r),t=decodePayload(e);c(t)})()},children:"Verify"})]}),r?(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center gap-8",children:[a.jsx("p",{className:"text-gray-500 text-xs italic",children:"signedToken"}),a.jsx("p",{className:"text-gray-500 text-xs italic",children:r})]}):a.jsx("div",{className:"w-full h-4"}),l?(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center gap-8",children:[a.jsx("p",{className:"text-gray-500 text-xs italic",children:"Verified Payload"}),(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[a.jsx("p",{className:"text-gray-500 text-xs italic break-words",children:l.payload}),a.jsx("p",{className:"text-gray-500 text-xs italic break-words",children:l.exp})]})]}):a.jsx("div",{className:"w-full h-8"})]})}},734:(e,t,r)=>{"use strict";r.r(t),r.d(t,{signTokenAction:()=>signTokenAction});var a=r(8065);r(8106);var s=r(1580),n=r(8116);let signTokenAction=async e=>{if(!e)throw Error("Payload not provided");let t=process.env.JWT_SECRET;if(!t)throw Error("JWT_SECRET not found");try{let r=s.sign({payload:e},t,{expiresIn:"1h",algorithm:"HS256"});return r}catch(e){console.log(e)}};(0,n.ensureServerEntryExports)([signTokenAction]),(0,a.createActionProxy)("8830bfab6dc7294e2475758c6f7874f6e269e331",null,signTokenAction)},8368:(e,t,r)=>{"use strict";r.r(t),r.d(t,{verifyTokenAction:()=>verifyTokenAction});var a=r(8065);r(8106);var s=r(1580),n=r(8116);let verifyTokenAction=async e=>{if(!e)throw Error("Token not provided");let t=process.env.JWT_SECRET;if(!t)throw Error("JWT_SECRET not found");let r=s.verify(e,t,{algorithms:["HS256"]});return r};(0,n.ensureServerEntryExports)([verifyTokenAction]),(0,a.createActionProxy)("b91ce917a822071a137ab49cb2a206e247b0a518",null,verifyTokenAction)},1012:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Home});var a=r(4656),s=r(8639),n=r.n(s),o=r(5153);let i=(0,o.createProxy)(String.raw`/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx`),{__esModule:l,$$typeof:c}=i;i.default;let d=(0,o.createProxy)(String.raw`/Users/mustafaabdelazim/Repos/next_14_test/app/components/PayloadMessage/index.tsx#PayloadMessage`);function Home(){return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24 overflow-y-hidden",children:[a.jsx("div",{className:"z-10 max-w-5xl w-full items-center justify-end font-mono text-sm lg:flex",children:a.jsx("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,a.jsxs)("a",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",href:"https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",a.jsx(n(),{src:"/vercel.svg",alt:"Vercel Logo",className:"dark:invert",width:100,height:24,priority:!0})]})})}),a.jsx(d,{}),a.jsx("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]",children:a.jsx(n(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})})]})}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=r(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[214,885,36],()=>__webpack_exec__(4242));module.exports=r})();