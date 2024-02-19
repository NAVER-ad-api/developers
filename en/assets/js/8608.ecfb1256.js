"use strict";(self.webpackChunkpa_openapi_docs=self.webpackChunkpa_openapi_docs||[]).push([[8608],{49496:(e,t,a)=>{a.d(t,{c:()=>h});var l=a(11504),n=a(14971),r=a(88528),c=a(11432),o=a(76016),s=a(84357);const i={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.c)(i.sidebar,"thin-scrollbar"),"aria-label":(0,s.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.c)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.c)(i.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(o.c,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title)))))))}var u=a(45168);function g(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(o.c,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return l.createElement(u.Mx,{component:g,props:e})}function p(e){let{sidebar:t}=e;const a=(0,c.U)();return t?.items.length?"mobile"===a?l.createElement(d,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:c,...o}=e,s=t&&t.items.length>0;return l.createElement(r.c,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,n.c)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&l.createElement("div",{className:"col col--2"},a))))}},57792:(e,t,a)=>{a.d(t,{c:()=>R});var l=a(11504),n=a(14971),r=a(83152),c=a(70964);function o(e){let{children:t,className:a}=e;const{frontMatter:n,assets:o}=(0,r.g)(),{withBaseUrl:s}=(0,c.E)(),i=o.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},i&&l.createElement("meta",{itemProp:"image",content:s(i,{absolute:!0})}),t)}var s=a(76016);const i={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:a,isBlogPostPage:c}=(0,r.g)(),{permalink:o,title:m}=a,u=c?"h1":"h2";return l.createElement(u,{className:(0,n.c)(i.title,t),itemProp:"headline"},c?m:l.createElement(s.c,{itemProp:"url",to:o},m))}var u=a(84357),g=a(95944);const d={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.A)();return t=>{const a=Math.ceil(t);return e(a,(0,u.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function h(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function E(){return l.createElement(l.Fragment,null," \xb7 ")}function b(e){let{className:t}=e;const{metadata:a}=(0,r.g)(),{date:c,formattedDate:o,readingTime:s}=a;return l.createElement("div",{className:(0,n.c)(d.container,"margin-vert--md",t)},l.createElement(h,{date:c,formattedDate:o}),void 0!==s&&l.createElement(l.Fragment,null,l.createElement(E,null),l.createElement(p,{readingTime:s})))}function f(e){return e.href?l.createElement(s.c,e):l.createElement(l.Fragment,null,e.children)}function v(e){let{author:t,className:a}=e;const{name:r,title:c,url:o,imageURL:s,email:i}=t,m=o||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:(0,n.c)("avatar margin-bottom--sm",a)},s&&l.createElement(f,{href:m,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(f,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),c&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},c)))}const _={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function N(e){let{className:t}=e;const{metadata:{authors:a},assets:c}=(0,r.g)();if(0===a.length)return null;const o=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.c)("margin-top--md margin-bottom--sm",o?_.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.c)(!o&&"col col--6",o?_.imageOnlyAuthorCol:_.authorCol),key:t},l.createElement(v,{author:{...e,imageURL:c.authorsImageUrls[t]??e.imageURL}})))))}function P(){return l.createElement("header",null,l.createElement(m,null),l.createElement(b,null),l.createElement(N,null))}var k=a(15684),T=a(50768);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:c}=(0,r.g)();return l.createElement("div",{id:c?k.blogPostContainerID:void 0,className:(0,n.c)("markdown",a),itemProp:"articleBody"},l.createElement(T.c,null,t))}var I=a(47790),y=a(1096),F=a(45072);function L(){return l.createElement("b",null,l.createElement(u.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function C(e){const{blogPostTitle:t,...a}=e;return l.createElement(s.c,(0,F.c)({"aria-label":(0,u.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(L,null))}const A={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function B(){const{metadata:e,isBlogPostPage:t}=(0,r.g)(),{tags:a,title:c,editUrl:o,hasTruncateMarker:s}=e,i=!t&&s,m=a.length>0;return m||i||o?l.createElement("footer",{className:(0,n.c)("row docusaurus-mt-lg",t&&A.blogPostFooterDetailsFull)},m&&l.createElement("div",{className:(0,n.c)("col",{"col--9":i})},l.createElement(y.c,{tags:a})),t&&o&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(I.c,{editUrl:o})),i&&l.createElement("div",{className:(0,n.c)("col text--right",{"col--3":m})},l.createElement(C,{blogPostTitle:c,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const c=function(){const{isBlogPostPage:e}=(0,r.g)();return e?void 0:"margin-bottom--xl"}();return l.createElement(o,{className:(0,n.c)(c,a)},l.createElement(P,null),l.createElement(w,null,t),l.createElement(B,null))}},47790:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(11504),n=a(84357),r=a(45864),c=a(45072),o=a(14971);const s={iconEdit:"iconEdit_Z9Sw"};function i(e){let{className:t,...a}=e;return l.createElement("svg",(0,c.c)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.c)(s.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.W.common.editThisPage},l.createElement(i,null),l.createElement(n.c,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},70308:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(11504),n=a(14971),r=a(76016);function c(e){const{permalink:t,title:a,subLabel:c,isNext:o}=e;return l.createElement(r.c,{className:(0,n.c)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&l.createElement("div",{className:"pagination-nav__sublabel"},c),l.createElement("div",{className:"pagination-nav__label"},a))}},83020:(e,t,a)=>{a.d(t,{c:()=>o});var l=a(11504),n=a(14971),r=a(76016);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:a,count:o}=e;return l.createElement(r.c,{href:t,className:(0,n.c)(c.tag,o?c.tagWithCount:c.tagRegular)},a,o&&l.createElement("span",null,o))}},1096:(e,t,a)=>{a.d(t,{c:()=>s});var l=a(11504),n=a(14971),r=a(84357),c=a(83020);const o={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.c)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:o.tag},l.createElement(c.c,{label:t,permalink:a}))}))))}},83152:(e,t,a)=>{a.d(t,{E:()=>c,g:()=>o});var l=a(11504),n=a(91100);const r=l.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const c=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return l.createElement(r.Provider,{value:c},t)}function o(){const e=(0,l.useContext)(r);if(null===e)throw new n.AH("BlogPostProvider");return e}},95944:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(11504),n=a(28264);const r=["zero","one","two","few","many","other"];function c(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,n.c)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function i(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const n=a.select(t),r=a.pluralForms.indexOf(n);return l[Math.min(r,l.length-1)]}(a,t,e)}}}}]);