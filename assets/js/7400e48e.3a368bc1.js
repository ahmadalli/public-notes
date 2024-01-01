"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[7711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:10},i="Public Notes",l={unversionedId:"projects/public-notes",id:"projects/public-notes",title:"Public Notes",description:"Challenges",source:"@site/docs/0070-projects/010-public-notes.md",sourceDirName:"0070-projects",slug:"/projects/public-notes",permalink:"/projects/public-notes",draft:!1,editUrl:"https://github.com/ahmadalli/public-notes/edit/main/docs/0070-projects/010-public-notes.md",tags:[],version:"current",lastUpdatedBy:"ahmadali shafiee",lastUpdatedAt:1693775412,formattedLastUpdatedAt:"Sep 3, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Projects",permalink:"/projects/"},next:{title:"SRE Audiobook",permalink:"/projects/sre-audiobook"}},s={},c=[{value:"Challenges",id:"challenges",level:2},{value:"To-Do",id:"to-do",level:2},{value:"Assigning UID to documents",id:"assigning-uid-to-documents",level:3},{value:"Pros",id:"pros",level:4},{value:"Actions",id:"actions",level:4},{value:"Search",id:"search",level:3},{value:"Actions",id:"actions-1",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"public-notes"},"Public Notes"),(0,a.kt)("h2",{id:"challenges"},"Challenges"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u25b6\ufe0f Keeping people updated on changes and new entries is not as easy as when there's a timeline.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u2611\ufe0f Periodically send out a newsletter."))),(0,a.kt)("li",{parentName:"ul"},"\u25b6\ufe0f Docusaurus doesn't have a built in comment system.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u23f9\ufe0f Look into the solutions discussed in ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/feature-requests/p/comments-in-documents-or-blogs"},"here"),"."))),(0,a.kt)("li",{parentName:"ul"},"\u25b6\ufe0f Documents don't have unique IDs. If they did, moving them would be much easier and the links to them would be more robust."),(0,a.kt)("li",{parentName:"ul"},"\u23f9\ufe0f ",(0,a.kt)("a",{parentName:"li",href:"#assigning-uid-to-documents"},"Assign UIDs to documents"),"."),(0,a.kt)("li",{parentName:"ul"},"\u25b6\ufe0f Relocating documents breaks their links.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u23f9\ufe0f ",(0,a.kt)("a",{parentName:"li",href:"#assigning-uid-to-documents"},"Assign UIDs to documents"),"."))),(0,a.kt)("li",{parentName:"ul"},"\u25b6\ufe0f Markdown links can derive their titles from the linked document, similar to the functionality provided by Confluence."),(0,a.kt)("li",{parentName:"ul"},"\u25b6\ufe0f If we can track a document, then we can create an update history for it."),(0,a.kt)("li",{parentName:"ul"},"\u25b6\ufe0f Keeping writing format consistent. E.g. period at the end of a sentence, capitalization, etc."),(0,a.kt)("li",{parentName:"ul"},"\u25b6\ufe0f Automatically add icons to external links.")),(0,a.kt)("h2",{id:"to-do"},"To-Do"),(0,a.kt)("h3",{id:"assigning-uid-to-documents"},"Assigning UID to documents"),(0,a.kt)("h4",{id:"pros"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reorganizing documents won't break links."),(0,a.kt)("li",{parentName:"ul"},"IDs are more reliable for integration with a comment system.")),(0,a.kt)("h4",{id:"actions"},"Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a script that will assign a UID to each document."),(0,a.kt)("li",{parentName:"ul"},"Create a script that will generate redirects for documents that have been moved."),(0,a.kt)("li",{parentName:"ul"},"Add a test to the CI that will make sure new documents have a UID.")),(0,a.kt)("h3",{id:"search"},"Search"),(0,a.kt)("h4",{id:"actions-1"},"Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add a search solution from ",(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/search"},"the available options"),".")))}d.isMDXComponent=!0}}]);