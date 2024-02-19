"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[835],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(g,c(c({ref:n},s),{},{components:t})):r.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:3},c="API calls with an access token",i={unversionedId:"prepare/api-call-with-access-token",id:"prepare/api-call-with-access-token",title:"API calls with an access token",description:"How to call an API",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/prepare/02_api-call-with-access-token.md",sourceDirName:"prepare",slug:"/prepare/api-call-with-access-token",permalink:"/developers/en/docs/prepare/api-call-with-access-token",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"autoSidebar",previous:{title:"NAVER Login application",permalink:"/developers/en/docs/prepare/developers-my-application"},next:{title:"Request",permalink:"/developers/en/docs/basic-concept/basic-request"}},p={},l=[{value:"How to call an API",id:"how-to-call-an-api",level:2}],s={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"api-calls-with-an-access-token"},"API calls with an access token"),(0,a.yg)("h2",{id:"how-to-call-an-api"},"How to call an API"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"../../api/ad#tag/Ad-groups/operation/getAdSetUsingGET"},"Example of getting a list of ad groups")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"curl")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"curl -X GET 'https://openapi.naver.com/v1/ad-api/1.0/adAccounts/{AD_ACCOUNT_ID}/adSets/{AD_GROUP_ID}' \\\n-H 'Authorization: Bearer {ACCESS_TOKEN}'\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"node.js - axios")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},"var axios = require('axios');\n\nvar config = {\n  method: 'get',\n  url: 'https://openapi.naver.com/v1/ad-api/1.0/adAccounts/{AD_ACCOUNT_ID}/adSets/{AD_GROUP_ID}',\n  headers: { \n    'Authorization': 'Bearer {ACCESS_TOKEN}'\n  }\n};\n\naxios(config)\n.then(function (response) {\n  console.log(JSON.stringify(response.data));\n})\n.catch(function (error) {\n  console.log(error);\n});\n")))}d.isMDXComponent=!0}}]);