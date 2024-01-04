"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[3740],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>v});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(v,o(o({ref:t},s),{},{components:a})):r.createElement(v,o({ref:t},s))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:4},o="Creatives",l={unversionedId:"ad-management/creative",id:"ad-management/creative",title:"Creatives",description:"List of creatives",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ad-management/creative.md",sourceDirName:"ad-management",slug:"/ad-management/creative",permalink:"/developers/en/docs/ad-management/creative",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"autoSidebar",previous:{title:"Ad groups",permalink:"/developers/en/docs/ad-management/ad-set"},next:{title:"Get real-time data",permalink:"/developers/en/docs/performance-management/realtime"}},p={},c=[{value:"List of creatives",id:"list-of-creatives",level:2},{value:"Create a creative",id:"create-a-creative",level:2},{value:"Upload creative images",id:"upload-creative-images",level:2},{value:"Manage creatives",id:"manage-creatives",level:2}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"creatives"},"Creatives"),(0,n.kt)("h2",{id:"list-of-creatives"},"List of creatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The API specification is described on the ",(0,n.kt)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/searchUsingGET"},"List of creatives")," page."),(0,n.kt)("li",{parentName:"ul"},"Data can be retrieved with multiple conditions by using request parameters.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"By default, all data under an ad account ID (",(0,n.kt)("inlineCode",{parentName:"li"},"adAccountNo"),") are retrieved."),(0,n.kt)("li",{parentName:"ul"},"When a campaign ID (",(0,n.kt)("inlineCode",{parentName:"li"},"campaignNo"),") is entered, only data under the campaign ID are retrieved."),(0,n.kt)("li",{parentName:"ul"},"A response is ",(0,n.kt)("a",{parentName:"li",href:"/docs/basic-concept/basic-response#page"},"paginated"),".")))),(0,n.kt)("h2",{id:"create-a-creative"},"Create a creative"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The API specification is described on the ",(0,n.kt)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/createImageBannerUsingPOST"},"Create a creative")," page."),(0,n.kt)("li",{parentName:"ul"},"For the creative type-based ",(0,n.kt)("inlineCode",{parentName:"li"},"image banner"),", creative creation for Smart Channel and mobile DA is offered. Note that some sizes may not be supported."),(0,n.kt)("li",{parentName:"ul"},"Available creative types (",(0,n.kt)("inlineCode",{parentName:"li"},"creativeType"),") for each ad group and the values of creative templates (",(0,n.kt)("inlineCode",{parentName:"li"},"creativeTemplateCode"),") are described in the ",(0,n.kt)("a",{parentName:"li",href:"/api/ad#tag/Ad-groups/operation/getAdSetUsingGET"},"Ad group details")," page.")),(0,n.kt)("h2",{id:"upload-creative-images"},"Upload creative images"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The API specification is described on the ",(0,n.kt)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/uploadImageUsingPOST"},"Upload creative images")," page."),(0,n.kt)("li",{parentName:"ul"},"The API responses are used for creative creation.")),(0,n.kt)("h2",{id:"manage-creatives"},"Manage creatives"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Here is a list of supported APIs related with creative management. ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/deleteUsingDELETE_1"},"Delete a creative")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/deleteUsingDELETE_2"},"Delete creatives")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/activateUsingPOST_1"},"Turn creatives on or off"))))))}d.isMDXComponent=!0}}]);