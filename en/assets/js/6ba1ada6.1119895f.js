"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[5779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,c(c({ref:t},p),{},{components:n})):a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},c="Request",i={unversionedId:"basic-concept/basic-request",id:"basic-concept/basic-request",title:"Request",description:"URL",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/basic-concept/basic-request.md",sourceDirName:"basic-concept",slug:"/basic-concept/basic-request",permalink:"/developers/en/docs/basic-concept/basic-request",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"autoSidebar",previous:{title:"API calls with an access token",permalink:"/developers/en/docs/prepare/api-call-with-access-token"},next:{title:"Response",permalink:"/developers/en/docs/basic-concept/basic-response"}},s={},l=[{value:"URL",id:"url",level:2},{value:"Call an API with a manager account",id:"call-an-api-with-a-manager-account",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"request"},"Request"),(0,r.kt)("h2",{id:"url"},"URL"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Structure of URL path",src:n(537).Z,width:"1271",height:"157"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://openapi.naver.com/v1/ad-api"),": v1 is a fixed value and is not used for API versioning."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{version}"),": This part is specified by each API. The default value is 1.0.")),(0,r.kt)("h2",{id:"call-an-api-with-a-manager-account"},"Call an API with a manager account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are granted permission to an ad account, there is nothing specific to consider when calling an API."),(0,r.kt)("li",{parentName:"ul"},"If you are granted permission to a ",(0,r.kt)("strong",{parentName:"li"},"manager account only"),", then you must include the ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessManagerAccountNo")," value in HEADER when you call an API for an ",(0,r.kt)("strong",{parentName:"li"},"ad account under the manager account"),"; otherwise, permission error will occur.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Example: Getting a list of campaigns of a "456" ad account under an "123" manager account')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://openapi.naver.com/v1/ad-api/1.0/adAccounts/456/campaigns' \\\n-H 'AccessManagerAccountNo: 123' -H 'Authorization: Bearer {ACCESS_TOKEN}'\n")))}u.isMDXComponent=!0},537:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/urlPath_en-74eb62d280e2bd284f8e0cdaec7d7a24.png"}}]);