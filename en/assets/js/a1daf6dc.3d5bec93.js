"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[5045],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=p(a),N=r,k=s["".concat(d,".").concat(N)]||s[N]||m[N]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},5047:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},i="Response",o={unversionedId:"basic-concept/basic-response",id:"basic-concept/basic-response",title:"Response",description:"Page",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/basic-concept/basic-response.md",sourceDirName:"basic-concept",slug:"/basic-concept/basic-response",permalink:"/developers/en/docs/basic-concept/basic-response",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"autoSidebar",previous:{title:"Request",permalink:"/developers/en/docs/basic-concept/basic-request"},next:{title:"Ad accounts",permalink:"/developers/en/docs/account-management/ad-account"}},d={},p=[{value:"Page",id:"page",level:2},{value:"Response codes",id:"response-codes",level:2},{value:"HTTP status codes",id:"http-status-codes",level:3},{value:"Troubleshoot error codes",id:"troubleshoot-error-codes",level:3},{value:"Code",id:"code",level:3},{value:"Detail code",id:"detail-code",level:3}],u={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"response"},"Response"),(0,r.kt)("h2",{id:"page"},"Page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The table below shows information about the pagination parameters in a response."),(0,r.kt)("li",{parentName:"ul"},"The maximum value in size is 100.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contents"),(0,r.kt)("td",{parentName:"tr",align:null},"Object[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Content list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Page number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of items in each page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalElements"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of items")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"totalPages"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Total number of pages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Sorting order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the requested page is the first page of results.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the requested page is the last page of results.")))),(0,r.kt)("h2",{id:"response-codes"},"Response codes"),(0,r.kt)("h3",{id:"http-status-codes"},"HTTP status codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Message"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"OK"),(0,r.kt)("td",{parentName:"tr",align:null},"The request was successful.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"The request was wrong or inaccurate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},"Failed to authenticate the request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},"The server cannot process the request due to lack of permission or authorization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"422"),(0,r.kt)("td",{parentName:"tr",align:null},"Unprocessable Entity"),(0,r.kt)("td",{parentName:"tr",align:null},"The syntax of the request entity is correct, but it was unable to process the contained instructions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"429"),(0,r.kt)("td",{parentName:"tr",align:null},"Too Many Requests"),(0,r.kt)("td",{parentName:"tr",align:null},"The user has sent too many requests in a given amount of time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Internal Server Error"),(0,r.kt)("td",{parentName:"tr",align:null},"Server error. If this error persists, you need to report it.")))),(0,r.kt)("h3",{id:"troubleshoot-error-codes"},"Troubleshoot error codes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"400 Bad Request",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You need to fix wrong parameters in a request and then call it again.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "error": {\n        "code": "BAD_REQUEST",\n        "message": "Bad Request",\n        "description": "An ad group ([123]) which does not belong to an ad account (1017) exists."\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"422 Unprocessable Entity",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"detailCode: There is a corresponding code value for each case. See the description for the detail code.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "error": {\n        "code": "CONDITION_DOES_NOT_MEET",\n        "detailCode": "AD__BID_PRICE_OUT_OF_RANGE",\n        "message": "The bidPrice field value is outside of the valid range.",\n        "description": "Allowed minimum amount: 10, Maximum amount: 1000000, Input value (adSetNo: 99145, bidPrice: 10000000000000)"\n    }\n}\n')),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This section describes what each ",(0,r.kt)("inlineCode",{parentName:"li"},"code")," means."),(0,r.kt)("li",{parentName:"ul"},"It consists of codes associated with some of the HTTP status codes above.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP status code"),(0,r.kt)("th",{parentName:"tr",align:null},"Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"BAD_REQUEST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"AUTH_ERROR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"422"),(0,r.kt)("td",{parentName:"tr",align:null},"CONDITION_DOES_NOT_MEET ",(0,r.kt)("br",null)," DATA_NOT_EXIST ",(0,r.kt)("br",null)," INVALID_PARAMETER")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"UNKNOWN_ERROR")))),(0,r.kt)("h3",{id:"detail-code"},"Detail code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This section describes what each ",(0,r.kt)("inlineCode",{parentName:"li"},"detailCode")," means. "),(0,r.kt)("li",{parentName:"ul"},"You can find how to troubleshoot each error.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__BID_STRATEGY_VALUE_OUT_OF_RANGE"),(0,r.kt)("td",{parentName:"tr",align:null},"The bidStrategy field value is outside the valid range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__BID_PRICE_OUT_OF_RANGE"),(0,r.kt)("td",{parentName:"tr",align:null},"The bidPrice field value is outside the valid range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__AD_SET_BUDGET_OUT_OF_RANGE"),(0,r.kt)("td",{parentName:"tr",align:null},"The adSetBudget field value is outside the valid range.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__AD_SET_CANNOT_CREATE_EXCEED_MAX"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of ad groups has been reached. No additional ad groups can be created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__TARGETING_CANNOT_SET_AGE"),(0,r.kt)("td",{parentName:"tr",align:null},"Targeting options are not available for this age group. ",(0,r.kt)("br",null),"- When target audiences are adults, minors cannot be included.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__BID_STRATEGY_COST_CAP_NEED_AGREE"),(0,r.kt)("td",{parentName:"tr",align:null},"Consent must be obtained when the bidStrategy field value is set to COST_CAP. ",(0,r.kt)("br",null),"- Consent is needed only once based on the same ad account number. ",(0,r.kt)("br",null),'- How to obtain consent: Sign in to "gfa.naver.com" and then select the option when creating an ad group.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__BID_STRATEGY_NO_CAP_NEED_AGREE"),(0,r.kt)("td",{parentName:"tr",align:null},"Consent must be obtained when the bidStrategy field value is set to NO_CAP. ",(0,r.kt)("br",null),"- Consent is needed only once based on the same ad account number. ",(0,r.kt)("br",null),'-  How to obtain consent: Sign in to "gfa.naver.com" and then select the option when creating an ad group.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__START_TIME_CANNOT_CHANGE_IN_OPERATION"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date and time cannot be changed when an ad is running or when it reaches its end date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AD__AD_SET_CANNOT_SET_SOME_TARGETINGS"),(0,r.kt)("td",{parentName:"tr",align:null},"The specified targeting option is not available for the medium.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_API_VERSION"),(0,r.kt)("td",{parentName:"tr",align:null},"The API version is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_AD_ACCOUNT_NO"),(0,r.kt)("td",{parentName:"tr",align:null},"The adAccountNo field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_CAMPAIGN_NO"),(0,r.kt)("td",{parentName:"tr",align:null},"The campaignNo field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_AD_SET_NO"),(0,r.kt)("td",{parentName:"tr",align:null},"The adSetNo field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_AGGREGATION_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"The aggregationType field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__MISSING_START_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The startDate field value is missing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_START_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The startDate field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INCONSISTENT_START_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The startDate field value does not match an existing request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__TOO_EARLY_START_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"Only data from the past two years can be retrieved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__MISSING_END_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The endDate field value is missing.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_END_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The endDate field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INCONSISTENT_END_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The endDate field value does not match an existing request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__TOO_EARLY_END_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The endDate must be after than the startDate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__TOO_LATE_END_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The endDate must be before today.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__ACCESS_BEFORE_AVAILABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"Data from the previous day is available for retrieval beginning at 2 AM.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__TOO_LONG_PERIOD"),(0,r.kt)("td",{parentName:"tr",align:null},"The data retrieval period is limited to 31 days.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_NEXT"),(0,r.kt)("td",{parentName:"tr",align:null},"The next field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__EXPIRED_PAGING_TOKEN"),(0,r.kt)("td",{parentName:"tr",align:null},"Page token has expired.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INCONSISTENT_LIMIT"),(0,r.kt)("td",{parentName:"tr",align:null},"The limit field value does not match an existing request.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__TOO_LARGE_LIMIT"),(0,r.kt)("td",{parentName:"tr",align:null},"The limit field value must not exceed 1000.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_LIMIT"),(0,r.kt)("td",{parentName:"tr",align:null},"The limit field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_TARGET_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"The targetDate field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_SINCE"),(0,r.kt)("td",{parentName:"tr",align:null},"The since field value is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__UNAUTHORIZED_EXCEPTION"),(0,r.kt)("td",{parentName:"tr",align:null},"No authorization for retrieving the ad account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__INVALID_REQUEST"),(0,r.kt)("td",{parentName:"tr",align:null},"The request is not valid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STATS__UNCAUGHT_EXCEPTION"),(0,r.kt)("td",{parentName:"tr",align:null},"Server error")))))}s.isMDXComponent=!0}}]);