"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={sidebar_position:10},a="Intro",l={unversionedId:"index",id:"index",title:"Intro",description:"This is a blog, but in documentation format.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/ahmadalli/public-notes/edit/main/docs/index.md",tags:[],version:"current",lastUpdatedBy:"ahmadali shafiee",lastUpdatedAt:1688822701,formattedLastUpdatedAt:"Jul 8, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",next:{title:"A Guide to Writing",permalink:"/a-guide-to-writing"}},s={},c=[{value:"Why",id:"why",level:2},{value:"Why Not a Blog?",id:"why-not-a-blog",level:3},{value:"What",id:"what",level:2},{value:"How",id:"how",level:2},{value:"Structure",id:"structure",level:3},{value:"Challenges",id:"challenges",level:2},{value:"Consistency",id:"consistency",level:3},{value:"Technical Challenges",id:"technical-challenges",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"This is a blog, but in documentation format."),(0,o.kt)("h2",{id:"why"},"Why"),(0,o.kt)("h3",{id:"why-not-a-blog"},"Why Not a Blog?"),(0,o.kt)("p",null,"I've always valued the idea of sharing things publicly. ",(0,o.kt)("a",{parentName:"p",href:"https://www.hanselman.com/blog/do-they-deserve-the-gift-of-your-keystrokes"},"There are limited number of keystrokes that you get in life"),". Recently, it's been hard for me to express myself in a linear format and I find some aspects of blogging limiting:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"I find it acceptable to have documentation entries that are incomplete and constantly evolving, but the same isn't typically true for blog posts unless it's explicitly stated within them. Having this freedom allows me to iterate and improve without worrying too much about completeness."),(0,o.kt)("li",{parentName:"ul"},"A timeline format doesn't effectively prioritize topics. Core topics often lose visibility over time as newer posts displace them at the top of the timeline.")),(0,o.kt)("p",null,"So, I've decided to try something new. As part of my job, I write a lot of documentation, and this looks like a viable path to try: to document my own life."),(0,o.kt)("h2",{id:"what"},"What"),(0,o.kt)("p",null,"I aim to achieve the following goals with this project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To write about and define my model of the world, my beliefs, and my experiences, and to build on these foundations."),(0,o.kt)("li",{parentName:"ul"},"To share insights, or knowledge or findings that I believe others might find valuable."),(0,o.kt)("li",{parentName:"ul"},"A personal note space, where I can keep useful links, technical stuff, and other notes.")),(0,o.kt)("h2",{id:"how"},"How"),(0,o.kt)("h3",{id:"structure"},"Structure"),(0,o.kt)("p",null,"To prevent my tendencies towards perfectionism from hindering my writing, I'll start with a basic document structure and refine it as necessary. Things will move around every once in a while, but I'll try to keep the links intact."),(0,o.kt)("h2",{id:"challenges"},"Challenges"),(0,o.kt)("h3",{id:"consistency"},"Consistency"),(0,o.kt)("p",null,"One of the challenges of writing is that the content often does not fully capture my evolving thoughts. As thoughts and beliefs are constantly changing, some of these changes are reflected here while others are not. It's not a problem to solve, but it's something to keep in mind."),(0,o.kt)("h3",{id:"technical-challenges"},"Technical Challenges"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Keeping people updated on changes and new entries is not as easy as when there's a timeline."),(0,o.kt)("li",{parentName:"ul"},"It's not possible to have comments and discussions here."),(0,o.kt)("li",{parentName:"ul"},"Documents don't have unique IDs. If they did, moving them would be much easier and the links to them would be more robust."),(0,o.kt)("li",{parentName:"ul"},"Relocating documents breaks their links."),(0,o.kt)("li",{parentName:"ul"},"Markdown links can derive their titles from the linked document, similar to the functionality provided by Confluence."),(0,o.kt)("li",{parentName:"ul"},"If we can track a document, then we can create an update history for it.")))}h.isMDXComponent=!0}}]);