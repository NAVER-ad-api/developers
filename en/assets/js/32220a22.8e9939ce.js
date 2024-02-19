"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[5309],{15680:(e,a,n)=>{n.d(a,{xA:()=>s,yg:()=>d});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),l=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},s=function(e){var a=l(e.components);return t.createElement(c.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=l(n),u=r,d=g["".concat(c,".").concat(u)]||g[u]||m[u]||i;return n?t.createElement(d,o(o({ref:a},s),{},{components:n})):t.createElement(d,o({ref:a},s))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35470:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var t=n(58168),r=(n(96540),n(15680));const i={sidebar_position:2},o="Campaigns",p={unversionedId:"ad-management/campaign",id:"ad-management/campaign",title:"Campaigns",description:"Create a campaign",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ad-management/campaign.md",sourceDirName:"ad-management",slug:"/ad-management/campaign",permalink:"/developers/en/docs/ad-management/campaign",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"autoSidebar",previous:{title:"Manager accounts",permalink:"/developers/en/docs/account-management/manager-account"},next:{title:"Ad groups",permalink:"/developers/en/docs/ad-management/ad-set"}},c={},l=[{value:"Create a campaign",id:"create-a-campaign",level:2}],s={toc:l},g="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"campaigns"},"Campaigns"),(0,r.yg)("h2",{id:"create-a-campaign"},"Create a campaign"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Campaigns/operation/createUsingPOST"},"Create a campaign")," page.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Required parameters in a request differ depending on the campaign objective. For details, see ",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#campaignobjective"},"CampaignObjective"),"."))),(0,r.yg)("li",{parentName:"ul"},"To create a campaign, you must have the information below.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Campaigns/operation/getUrlsUsingGET"},"List of canonical URLs")," - Canonical URL ID (urlNo)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Campaigns/operation/getBrandsUsingGET"},"List of brands")," - Brand ID (brandNo)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Campaigns/operation/getConversionUrlsUsingGET"},"List of conversion tracking sites available based on the specified campaign objective")," - Conversion tracking ID (conversionUrlNo)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Campaigns/operation/getCatalogsUsingGET"},"List of catalogs")," - Catalog ID (catalogId)"))),(0,r.yg)("li",{parentName:"ul"},"Defined elements",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Campaign objectives (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#campaignobjective"},"CampaignObjective"),")"),(0,r.yg)("li",{parentName:"ul"},"Campaign settings: Conversion types (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#conversiontype"},"ConversionType"),")")))))}m.isMDXComponent=!0}}]);