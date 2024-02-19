"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[5709],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=s(t),u=r,y=g["".concat(l,".").concat(u)]||g[u]||c[u]||i;return t?n.createElement(y,o(o({ref:a},d),{},{components:t})):n.createElement(y,o({ref:a},d))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53660:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=t(58168),r=(t(96540),t(15680));const i={sidebar_position:3},o="Ad groups",p={unversionedId:"ad-management/ad-set",id:"ad-management/ad-set",title:"Ad groups",description:"Create an ad group",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ad-management/ad-set.md",sourceDirName:"ad-management",slug:"/ad-management/ad-set",permalink:"/developers/en/docs/ad-management/ad-set",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"autoSidebar",previous:{title:"Campaigns",permalink:"/developers/en/docs/ad-management/campaign"},next:{title:"Creatives",permalink:"/developers/en/docs/ad-management/creative"}},l={},s=[{value:"Create an ad group",id:"create-an-ad-group",level:2},{value:"Change budgets, bids and costs for ad groups",id:"change-budgets-bids-and-costs-for-ad-groups",level:2},{value:"List of ad groups",id:"list-of-ad-groups",level:2}],d={toc:s},g="wrapper";function c(e){let{components:a,...i}=e;return(0,r.yg)(g,(0,n.A)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"ad-groups"},"Ad groups"),(0,r.yg)("h2",{id:"create-an-ad-group"},"Create an ad group"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Ad-groups/operation/createAdSetUsingPOST"},"Create an ad group")," page.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Ad-groups/operation/sampleByCampaignNoUsingGET"},"Sample API"),": People would put various types of request parameters to call an API. If you want to create an ad group with a few ",(0,r.yg)("strong",{parentName:"li"},"default parameters only"),", call this API first and then call the Create an ad group API by using the values from the API response."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Ad-groups/operation/typeInfoByCampaignNoUsingGET"},"Type information API"),": Available types differ depending on the campaign objective. Use this API to check ",(0,r.yg)("strong",{parentName:"li"},"which types are available for a specific objective"),"."))),(0,r.yg)("li",{parentName:"ul"},"Defined elements",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Target audience settings: Gender (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#gender"},"Gender"),"), Age range (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#agerange"},"AgeRange"),"), Location (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#location"},"Location"),"), Extended demo (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#exteneddemo"},"ExtendedDemo"),"), Interest (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#interest"},"Interest"),"), and Purchase intent (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#purchaseintent"},"PurchaseIntent"),")"),(0,r.yg)("li",{parentName:"ul"},"Device and placement: Device types (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#devicetype"},"DeviceType"),") and Ad placement (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#placementgroup"},"PlacementGroup"),")"),(0,r.yg)("li",{parentName:"ul"},"Bidding and budget: Bid strategies (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#bidgoal"},"BidGoal"),"), Budget control (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#bidstrategy"},"BidStrategy"),"), Billing models (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#bidtype"},"BidType"),"), and Budget types (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#budgettype"},"BudgetType"),")"),(0,r.yg)("li",{parentName:"ul"},"Scheduling and method: Ad unit (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#frequencyadunit"},"FrequencyAdUnit"),")"))),(0,r.yg)("li",{parentName:"ul"},"Currently unsupported specification: ",(0,r.yg)("inlineCode",{parentName:"li"},"Get custom targets"))),(0,r.yg)("h2",{id:"change-budgets-bids-and-costs-for-ad-groups"},"Change budgets, bids and costs for ad groups"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Ad-groups/operation/editAdSetUsingPOST"},"Change budgets, bids and costs for ad groups")," page."),(0,r.yg)("li",{parentName:"ul"},"This API is associated with the feature where multiple ad groups can be updated to the same budget, bid price, or cost simultaneously as you see in the screenshot below.\n",(0,r.yg)("img",{alt:"Adgroup_budget_changes",src:t(73787).A,width:"1049",height:"333"}))),(0,r.yg)("h2",{id:"list-of-ad-groups"},"List of ad groups"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,r.yg)("a",{parentName:"li",href:"/api/ad#tag/Ad-groups/operation/getListUsingGET"},"List of ad groups")," page."),(0,r.yg)("li",{parentName:"ul"},"Data can be retrieved with multiple conditions by using request parameters.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"By default, all data under an ad account ID (",(0,r.yg)("inlineCode",{parentName:"li"},"adAccountNo"),") are retrieved."),(0,r.yg)("li",{parentName:"ul"},"When a campaign ID (",(0,r.yg)("inlineCode",{parentName:"li"},"campaignNo"),") is entered, only data under the campaign ID are retrieved."))),(0,r.yg)("li",{parentName:"ul"},"A response is ",(0,r.yg)("a",{parentName:"li",href:"/docs/basic-concept/basic-response#page"},"paginated"),".")))}c.isMDXComponent=!0},73787:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/\uad11\uace0\uadf8\ub8f9_\uc608\uc0b0\ubcc0\uacbd_\ucea1\uccd0-c7d9a7fe253300bd1e2619c28c48ce4c.png"}}]);