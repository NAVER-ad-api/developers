"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[4081],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=c(n),y=o,d=g["".concat(l,".").concat(y)]||g[y]||u[y]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},79579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={sidebar_position:1},i="NAVER Login application",p={unversionedId:"prepare/developers-my-application",id:"prepare/developers-my-application",title:"NAVER Login application",description:"NAVER Login - OAuth",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/prepare/01_developers-my-application.md",sourceDirName:"prepare",slug:"/prepare/developers-my-application",permalink:"/developers/en/docs/prepare/developers-my-application",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"autoSidebar",previous:{title:"Getting Started",permalink:"/developers/en/docs/intro"},next:{title:"API calls with an access token",permalink:"/developers/en/docs/prepare/api-call-with-access-token"}},l={},c=[{value:"NAVER Login - OAuth",id:"naver-login---oauth",level:2},{value:"Register an application",id:"register-an-application",level:2},{value:"Select NAVER Login",id:"select-naver-login",level:2},{value:"Request access to the API",id:"request-access-to-the-api",level:2},{value:"Integrate NAVER Login",id:"integrate-naver-login",level:2}],s={toc:c},g="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"naver-login-application"},"NAVER Login application"),(0,o.yg)("h2",{id:"naver-login---oauth"},"NAVER Login - OAuth"),(0,o.yg)("p",null,"NAVER Login supports OAuth 2.0 authentication, which lets a third-party application have users log in to the application by using the NAVER authentication feature. For details, see\n",(0,o.yg)("a",{parentName:"p",href:"https://developers.naver.com/docs/login/overview/overview.md"},"NAVER Login Integration Guide"),". "),(0,o.yg)("h2",{id:"register-an-application"},"Register an application"),(0,o.yg)("p",null,"To use NAVER Open API, you need to register your application and get a client ID and client secret on ",(0,o.yg)("a",{parentName:"p",href:"https://developers.naver.com/"},"NAVER Developers"),"."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Click ",(0,o.yg)("a",{parentName:"li",href:"https://developers.naver.com/apps/#/wizard/register"},"Register Application"),"."),(0,o.yg)("li",{parentName:"ol"},"In the page, select the checkbox (",(0,o.yg)("strong",{parentName:"li"},"Accept the Terms and Conditions"),") and then click the button (",(0,o.yg)("strong",{parentName:"li"},"OK"),") at the bottom."),(0,o.yg)("li",{parentName:"ol"},"Verify your phone number and enter your company name. Then, click the button (",(0,o.yg)("strong",{parentName:"li"},"OK"),"). Phone verification is required to confirm that you have the correct contact information. It is needed only once when registering your application for the first time.")),(0,o.yg)("h2",{id:"select-naver-login"},"Select NAVER Login"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Make sure to select ",(0,o.yg)("strong",{parentName:"li"},"NAVER Login"),".")),(0,o.yg)("ol",{start:4},(0,o.yg)("li",{parentName:"ol"},"Enter details about your application as shown in the ",(0,o.yg)("a",{parentName:"li",href:"https://developers.naver.com/docs/common/openapiguide/appregister.md#%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%93%B1%EB%A1%9D-%EC%84%B8%EB%B6%80-%EC%A0%95%EB%B3%B4"},"page")," and then click the button (",(0,o.yg)("strong",{parentName:"li"},"Submit"),") at the button.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u203b Note"),(0,o.yg)("br",{parentName:"p"}),"\n","For the NAVER Performance DA API, you don't need to enter information you provided when registering for the NAVER Login API.\nWhen you select the items (personal information) you provided when registering for the NAVER Login API, the use of your client ID may be restricted."),(0,o.yg)("h2",{id:"request-access-to-the-api"},"Request access to the API"),(0,o.yg)("p",null,"Copy the client ID from your application and go to the NAVER Performance DA website. In the website, go to ",(0,o.yg)("strong",{parentName:"p"},"\ub300\ud45c \uad00\ub9ac \uacc4\uc815 (Primary Manager Account) > \uc124\uc815 (Settings) > API \uad00\ub9ac \uba54\ub274 (APIs)")," and paste the client ID by using the ",(0,o.yg)("strong",{parentName:"p"},"API \uc0ac\uc6a9 \uc2e0\uccad (Enable API)")," feature. Then, you will be granted access to the API by a manager. Note that it is allowed to request access with some manager accounts only during beta period."),(0,o.yg)("h2",{id:"integrate-naver-login"},"Integrate NAVER Login"),(0,o.yg)("p",null,"Integrate NAVER Login into your application by following the steps on ",(0,o.yg)("a",{parentName:"p",href:"https://developers.naver.com/docs/login/web/web.md"},"NAVER Developers"),".\nYou can get an access token by logging in with NAVER."))}u.isMDXComponent=!0}}]);