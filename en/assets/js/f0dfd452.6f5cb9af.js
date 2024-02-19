"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[4350],{15680:(e,n,a)=>{a.d(n,{xA:()=>l,yg:()=>f});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),s=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(a),g=r,f=p["".concat(u,".").concat(g)]||p[g]||m[g]||c;return a?t.createElement(f,o(o({ref:n},l),{},{components:a})):t.createElement(f,o({ref:n},l))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=g;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},89035:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var t=a(58168),r=(a(96540),a(15680));const c={sidebar_position:2},o="Manager accounts",i={unversionedId:"account-management/manager-account",id:"account-management/manager-account",title:"Manager accounts",description:"List of my manager accounts",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/account-management/manager-account.md",sourceDirName:"account-management",slug:"/account-management/manager-account",permalink:"/developers/en/docs/account-management/manager-account",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"autoSidebar",previous:{title:"Ad accounts",permalink:"/developers/en/docs/account-management/ad-account"},next:{title:"Campaigns",permalink:"/developers/en/docs/ad-management/campaign"}},u={},s=[{value:"List of my manager accounts",id:"list-of-my-manager-accounts",level:2},{value:"Get a manager account",id:"get-a-manager-account",level:2}],l={toc:s},p="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"manager-accounts"},"Manager accounts"),(0,r.yg)("h2",{id:"list-of-my-manager-accounts"},"List of my manager accounts"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"This API returns a list of manager accounts granted access to the manager account."),(0,r.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,r.yg)("a",{parentName:"li",href:"/api/account#tag/Manager-accounts/operation/listUsingGET_1"},"List of my manager accounts")," page."),(0,r.yg)("li",{parentName:"ul"},"A response is ",(0,r.yg)("a",{parentName:"li",href:"/docs/basic-concept/basic-response#page"},"paginated"),"."),(0,r.yg)("li",{parentName:"ul"},"Defined elements",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Permission levels (",(0,r.yg)("a",{parentName:"li",href:"/docs/all-type#accountrole"},"AccountRole"),")")))),(0,r.yg)("h2",{id:"get-a-manager-account"},"Get a manager account"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The API specification is described on the ",(0,r.yg)("a",{parentName:"li",href:"/api/account#tag/Manager-accounts/operation/getUsingGET"},"Get a manager account")," page."),(0,r.yg)("li",{parentName:"ul"},"A response includes all of the sub manager account information and sub ad account numbers in the hierarchical structure.")))}m.isMDXComponent=!0}}]);