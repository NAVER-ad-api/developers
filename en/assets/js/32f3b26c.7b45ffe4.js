"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[9076],{95788:(e,a,t)=>{t.d(a,{Iu:()=>m,yg:()=>s});var r=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function g(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),o=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=o(e.components);return r.createElement(p.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),u=o(t),y=n,s=u["".concat(p,".").concat(y)]||u[y]||d[y]||l;return t?r.createElement(s,i(i({ref:a},m),{},{components:t})):r.createElement(s,i({ref:a},m))}));function s(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=y;var g={};for(var p in a)hasOwnProperty.call(a,p)&&(g[p]=a[p]);g.originalType=e,g[u]="string"==typeof e?e:n,i[1]=g;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},76188:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var r=t(45072),n=(t(11504),t(95788));const l={sidebar_position:4},i="Creatives",g={unversionedId:"ad-management/creative",id:"ad-management/creative",title:"Creatives",description:"List of creatives",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ad-management/creative.md",sourceDirName:"ad-management",slug:"/ad-management/creative",permalink:"/developers/en/docs/ad-management/creative",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"autoSidebar",previous:{title:"Ad groups",permalink:"/developers/en/docs/ad-management/ad-set"},next:{title:"Get real-time data",permalink:"/developers/en/docs/performance-management/realtime"}},p={},o=[{value:"List of creatives",id:"list-of-creatives",level:2},{value:"Create a creative",id:"create-a-creative",level:2},{value:"Upload creative images",id:"upload-creative-images",level:2},{value:"Manage creatives",id:"manage-creatives",level:2}],m={toc:o},u="wrapper";function d(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.c)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"creatives"},"Creatives"),(0,n.yg)("h2",{id:"list-of-creatives"},"List of creatives"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,n.yg)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/searchUsingGET"},"List of creatives")," page."),(0,n.yg)("li",{parentName:"ul"},"Data can be retrieved with multiple conditions by using request parameters.",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"By default, all data under an ad account ID (",(0,n.yg)("inlineCode",{parentName:"li"},"adAccountNo"),") are retrieved."),(0,n.yg)("li",{parentName:"ul"},"When a campaign ID (",(0,n.yg)("inlineCode",{parentName:"li"},"campaignNo"),") is entered, only data under the campaign ID are retrieved."),(0,n.yg)("li",{parentName:"ul"},"A response is ",(0,n.yg)("a",{parentName:"li",href:"/docs/basic-concept/basic-response#page"},"paginated"),".")))),(0,n.yg)("h2",{id:"create-a-creative"},"Create a creative"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For the creative type-based ",(0,n.yg)("inlineCode",{parentName:"p"},"IMAGE_BANNER"),", creative creation for Smart Channel and mobile DA is offered. Note that some sizes may not be supported."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,n.yg)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/createCreativeOfImageBannerUsingPOST"},"Create a creative of IMAGE_BANNER")," page."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For the creative type-based ",(0,n.yg)("inlineCode",{parentName:"p"},"native image"),", creative creation for Native Feed/Banner is offered. Note that some sizes may not be supported."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The API specification is described on the ",(0,n.yg)("a",{parentName:"p",href:"/api/ad#tag/Creatives/operation/createCreativeOfSingleImageUsingPOST"},"Create a creative (native image)")," page.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Before creating a ",(0,n.yg)("inlineCode",{parentName:"p"},"native image")," creative, you need to add your profile information from ",(0,n.yg)("strong",{parentName:"p"},"\uad11\uace0 \uacc4\uc815 \uad00\ub9ac (Ad Account Settings)")," > ",(0,n.yg)("strong",{parentName:"p"},"\ud504\ub85c\ud544 \uad00\ub9ac (Profile)"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The table below shows the parameters you can use when creating a creative for each template."),(0,n.yg)("table",{parentName:"li"},(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null},"NATIVE_SINGLE_IMAGE_V2"),(0,n.yg)("th",{parentName:"tr",align:null},"NATIVE_SINGLE_IMAGE_PC"),(0,n.yg)("th",{parentName:"tr",align:null},"FEED_SINGLE_IMAGE"),(0,n.yg)("th",{parentName:"tr",align:null},"FEED_SINGLE_IMAGE_SQUARE"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"name",(0,n.yg)("br",null),"(creative name)"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 128"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 128"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 128"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 128")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"message",(0,n.yg)("br",null),"(ad message)"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 20"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 20"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 120"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 120")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"imageNo",(0,n.yg)("br",null),"(creative image ID)"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"linkUrl",(0,n.yg)("br",null),"(landing URL)"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"linkTitle",(0,n.yg)("br",null),"(description 1)"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 12"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 12"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 28"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 28")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"linkDescription",(0,n.yg)("br",null),"(description 2)"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 12"),(0,n.yg)("td",{parentName:"tr",align:null},"X"),(0,n.yg)("td",{parentName:"tr",align:null},"optional",(0,n.yg)("br",null),"max: 19"),(0,n.yg)("td",{parentName:"tr",align:null},"optional",(0,n.yg)("br",null),"max: 19")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"linkText3rd",(0,n.yg)("br",null),"(description 3)"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 12"),(0,n.yg)("td",{parentName:"tr",align:null},"X"),(0,n.yg)("td",{parentName:"tr",align:null},"X"),(0,n.yg)("td",{parentName:"tr",align:null},"X")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"linkText4th",(0,n.yg)("br",null),"(long description 1 for the desktop banner type)"),(0,n.yg)("td",{parentName:"tr",align:null},"X"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 28"),(0,n.yg)("td",{parentName:"tr",align:null},"X"),(0,n.yg)("td",{parentName:"tr",align:null},"X")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"linkText5th",(0,n.yg)("br",null),"(long description 2 for the desktop banner type)"),(0,n.yg)("td",{parentName:"tr",align:null},"X"),(0,n.yg)("td",{parentName:"tr",align:null},"required",(0,n.yg)("br",null),"min: 2, max: 28"),(0,n.yg)("td",{parentName:"tr",align:null},"X"),(0,n.yg)("td",{parentName:"tr",align:null},"X")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"ctaCode",(0,n.yg)("br",null),"(call-to-action ID)"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required"),(0,n.yg)("td",{parentName:"tr",align:null},"required")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"adviceMessage",(0,n.yg)("br",null),"(notice message)"),(0,n.yg)("td",{parentName:"tr",align:null},"optional",(0,n.yg)("br",null),"max: 45"),(0,n.yg)("td",{parentName:"tr",align:null},"optional",(0,n.yg)("br",null),"max: 45"),(0,n.yg)("td",{parentName:"tr",align:null},"X"),(0,n.yg)("td",{parentName:"tr",align:null},"X"))))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Available creative types (",(0,n.yg)("inlineCode",{parentName:"p"},"creativeType"),") for each ad group and the values of creative templates (",(0,n.yg)("inlineCode",{parentName:"p"},"creativeTemplateCode"),") are described in the ",(0,n.yg)("a",{parentName:"p",href:"/api/ad#tag/Ad-groups/operation/getAdSetUsingGET"},"Ad group details")," page."))),(0,n.yg)("h2",{id:"upload-creative-images"},"Upload creative images"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,n.yg)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/uploadImageUsingPOST"},"Upload creative images")," page."),(0,n.yg)("li",{parentName:"ul"},"The API responses are used for creative creation.")),(0,n.yg)("h2",{id:"manage-creatives"},"Manage creatives"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Here is a list of supported APIs related with creative management. ",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/deleteUsingDELETE_1"},"Delete a creative")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/deleteUsingDELETE_2"},"Delete creatives")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/activateUsingPOST_1"},"Turn creatives on or off")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/ad#tag/Creatives/operation/callToActionsUsingGET"},"List of call-to-action ad creatives"))))))}d.isMDXComponent=!0}}]);