"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[6752],{14152:(e,t,n)=>{n.r(t),n.d(t,{default:()=>se});var a=n(11504),l=n(15756),c=n(91100);const r=a.createContext(null);function o(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function s(){const e=(0,a.useContext)(r);if(null===e)throw new c.AH("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=s();return a.createElement(l.U7,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(14971),m=n(11432),u=n(45072),v=n(84357),p=n(70308);function b(e){const{previous:t,next:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.G)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(p.c,(0,u.c)({},t,{subLabel:a.createElement(v.c,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(p.c,(0,u.c)({},n,{subLabel:a.createElement(v.c,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function h(){const{metadata:e}=s();return a.createElement(b,{previous:e.previous,next:e.next})}var g=n(28264),E=n(76016),f=n(15172),L=n(45864),C=n(94592),N=n(69920);const _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.c,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(v.c,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=_[e.versionMetadata.banner];return a.createElement(t,e)}function x(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(v.c,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(E.c,{to:n,onClick:l},a.createElement(v.c,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,g.c)(),{pluginId:c}=(0,f.UF)({failfast:!0}),{savePreferredVersionName:r}=(0,C.iy)(c),{latestDocSuggestion:o,latestVersionSuggestion:s}=(0,f.i8)(c),i=o??(m=s).docs.find((e=>e.id===m.mainDocId));var m;return a.createElement("div",{className:(0,d.c)(t,L.W.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(k,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(x,{versionLabel:s.label,to:i.path,onClick:()=>r(s.name)})))}function U(e){let{className:t}=e;const n=(0,N.E)();return n.banner?a.createElement(T,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,N.E)();return n.badge?a.createElement("span",{className:(0,d.c)(t,L.W.docs.docVersionBadge,"badge badge--secondary")},a.createElement(v.c,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(v.c,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function w(e){let{lastUpdatedBy:t}=e;return a.createElement(v.c,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:L.W.common.lastUpdated},a.createElement(v.c,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(w,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var M=n(47790),I=n(1096);const B={lastUpdated:"lastUpdated_vwxv"};function O(e){return a.createElement("div",{className:(0,d.c)(L.W.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(I.c,e)))}function V(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:c}=e;return a.createElement("div",{className:(0,d.c)(L.W.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(M.c,{editUrl:t})),a.createElement("div",{className:(0,d.c)("col",B.lastUpdated)},(n||l)&&a.createElement(A,{lastUpdatedAt:n,formattedLastUpdatedAt:c,lastUpdatedBy:l})))}function P(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:c,tags:r}=e,o=r.length>0,i=!!(t||n||c);return o||i?a.createElement("footer",{className:(0,d.c)(L.W.docs.docFooter,"docusaurus-mt-lg")},o&&a.createElement(O,{tags:r}),i&&a.createElement(V,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:c,formattedLastUpdatedAt:l})):null}var S=n(58448),W=n(43088);const R={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function D(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,u.c)({type:"button"},n,{className:(0,d.c)("clean-btn",R.tocCollapsibleButton,!t&&R.tocCollapsibleButtonExpanded,n.className)}),a.createElement(v.c,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const F={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function z(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:c}=e;const{collapsed:r,toggleCollapsed:o}=(0,S.a)({initialState:!0});return a.createElement("div",{className:(0,d.c)(F.tocCollapsible,!r&&F.tocCollapsibleExpanded,n)},a.createElement(D,{collapsed:r,onClick:o}),a.createElement(S.U,{lazy:!0,className:F.tocCollapsibleContent,collapsed:r},a.createElement(W.c,{toc:t,minHeadingLevel:l,maxHeadingLevel:c})))}const j={tocMobile:"tocMobile_ITEo"};function q(){const{toc:e,frontMatter:t}=s();return a.createElement(z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.c)(L.W.docs.docTocMobile,j.tocMobile)})}var G=n(75124);function $(){const{toc:e,frontMatter:t}=s();return a.createElement(G.c,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:L.W.docs.docTocDesktop})}var Q=n(56448),Z=n(50768);function X(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=s();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.c)(L.W.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(Q.c,{as:"h1"},n)),a.createElement(Z.c,null,t))}var Y=n(79940),J=n(13376),K=n(70964);function ee(e){return a.createElement("svg",(0,u.c)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const te={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function ne(e){let{children:t,href:n,isLast:l}=e;const c="breadcrumbs__link";return l?a.createElement("span",{className:c,itemProp:"name"},t):n?a.createElement(E.c,{className:c,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:c},t)}function ae(e){let{children:t,active:n,index:l,addMicrodata:c}=e;return a.createElement("li",(0,u.c)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.c)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(l+1)}))}function le(){const e=(0,K.c)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(E.c,{"aria-label":(0,v.G)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.c)("breadcrumbs__link",te.breadcrumbsItemLink),href:e},a.createElement(ee,{className:te.breadcrumbHomeIcon})))}function ce(){const e=(0,Y.js)(),t=(0,J.Y5)();return e?a.createElement("nav",{className:(0,d.c)(L.W.docs.docBreadcrumbs,te.breadcrumbsContainer),"aria-label":(0,v.G)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(le,null),e.map(((t,n)=>{const l=n===e.length-1;return a.createElement(ae,{key:n,active:l,index:n,addMicrodata:!!t.href},a.createElement(ne,{href:t.href,isLast:l},t.label))})))):null}const re={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function oe(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=s(),n=(0,m.U)(),l=e.hide_table_of_contents,c=!l&&t.length>0;return{hidden:l,mobile:c?a.createElement(q,null):void 0,desktop:!c||"desktop"!==n&&"ssr"!==n?void 0:a.createElement($,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.c)("col",!n.hidden&&re.docItemCol)},a.createElement(U,null),a.createElement("div",{className:re.docItemContainer},a.createElement("article",null,a.createElement(ce,null),a.createElement(H,null),n.mobile,a.createElement(X,null,t),a.createElement(P,null)),a.createElement(h,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function se(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(o,{content:e.content},a.createElement(l.cr,{className:t},a.createElement(i,null),a.createElement(oe,null,a.createElement(n,null))))}},47790:(e,t,n)=>{n.d(t,{c:()=>d});var a=n(11504),l=n(84357),c=n(45864),r=n(45072),o=n(14971);const s={iconEdit:"iconEdit_Z9Sw"};function i(e){let{className:t,...n}=e;return a.createElement("svg",(0,r.c)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.c)(s.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.W.common.editThisPage},a.createElement(i,null),a.createElement(l.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},70308:(e,t,n)=>{n.d(t,{c:()=>r});var a=n(11504),l=n(14971),c=n(76016);function r(e){const{permalink:t,title:n,subLabel:r,isNext:o}=e;return a.createElement(c.c,{className:(0,l.c)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},r&&a.createElement("div",{className:"pagination-nav__sublabel"},r),a.createElement("div",{className:"pagination-nav__label"},n))}},43088:(e,t,n)=>{n.d(t,{c:()=>p});var a=n(45072),l=n(11504),c=n(21824);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,c.y)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:r}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:c,maxHeadingLevel:r}),s=i(o,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:c}=e;return t.length?l.createElement("ul",{className:c?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:i,minHeadingLevel:d,maxHeadingLevel:u,...p}=e;const b=(0,c.y)(),h=d??b.tableOfContents.minHeadingLevel,g=u??b.tableOfContents.maxHeadingLevel,E=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>o({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:h,maxHeadingLevel:g});return m((0,l.useMemo)((()=>{if(s&&i)return{linkClassName:s,linkActiveClassName:i,minHeadingLevel:h,maxHeadingLevel:g}}),[s,i,h,g])),l.createElement(v,(0,a.c)({toc:E,className:n,linkClassName:s},p))}},75124:(e,t,n)=>{n.d(t,{c:()=>d});var a=n(45072),l=n(11504),c=n(14971),r=n(43088);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",i="table-of-contents__link--active";function d(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,c.c)(o.tableOfContents,"thin-scrollbar",t)},l.createElement(r.c,(0,a.c)({},n,{linkClassName:s,linkActiveClassName:i})))}},83020:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(11504),l=n(14971),c=n(76016);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:n,count:o}=e;return a.createElement(c.c,{href:t,className:(0,l.c)(r.tag,o?r.tagWithCount:r.tagRegular)},n,o&&a.createElement("span",null,o))}},1096:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(11504),l=n(14971),c=n(84357),r=n(83020);const o={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(c.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.c)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:o.tag},a.createElement(r.c,{label:t,permalink:n}))}))))}},69920:(e,t,n)=>{n.d(t,{E:()=>o,Q:()=>r});var a=n(11504),l=n(91100);const c=a.createContext(null);function r(e){let{children:t,version:n}=e;return a.createElement(c.Provider,{value:n},t)}function o(){const e=(0,a.useContext)(c);if(null===e)throw new l.AH("DocsVersionProvider");return e}}}]);