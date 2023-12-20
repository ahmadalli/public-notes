"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[2193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:20},s="Clever Messages",i={unversionedId:"projects/clever-messages",id:"projects/clever-messages",title:"Clever Messages",description:"Why",source:"@site/docs/0070-projects/030-clever-messages.md",sourceDirName:"0070-projects",slug:"/projects/clever-messages",permalink:"/projects/clever-messages",draft:!1,editUrl:"https://github.com/ahmadalli/public-notes/edit/main/docs/0070-projects/030-clever-messages.md",tags:[],version:"current",lastUpdatedBy:"ahmadali shafiee",lastUpdatedAt:1693670691,formattedLastUpdatedAt:"Sep 2, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"SRE Audiobook",permalink:"/projects/sre-audiobook"},next:{title:"Phenomena",permalink:"/phenomena/"}},l={},c=[{value:"Why",id:"why",level:2},{value:"How",id:"how",level:2},{value:"What",id:"what",level:2},{value:"Challenges",id:"challenges",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clever-messages"},"Clever Messages"),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"As a non-native English speaker, I sometimes struggle to find the right words to write a message. I wanted to explore this problem space and see if I clarify the problem and come up with a solution."),(0,a.kt)("h2",{id:"how"},"How"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Before ChatGPT was released, I was using GPT-3 in the OpenAI Playground to generate messages."),(0,a.kt)("li",{parentName:"ul"},"Message generation can be done from a web app that gathers context from the user and generates the message using an LLM.")),(0,a.kt)("h2",{id:"what"},"What"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A landing page was created for generating messages using GPT-3 and to collect feedback from users.")),(0,a.kt)("h2",{id:"challenges"},"Challenges"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'UI design is not my strong suit and I struggled to create a good landing page, and I ended up letting go of the idea of creating a "good" landing page and just focused on creating a landing page that works.'),(0,a.kt)("li",{parentName:"ul"},"I couldn't find the right channels to promote the landing page and get feedback from users. Therefore I got very little feedback from promoting the landing page on these generic channels:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"I posted two posts on reddit, one on ",(0,a.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/SideProject/comments/zxjp4c/clever_messages_generate_messages_from_few_words/"},"r/SideProject")," and another one on ",(0,a.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/IMadeThis/comments/zyj6gx/i_created_a_service_to_generate_messages/"},"r/IMadeThis")),(0,a.kt)("li",{parentName:"ul"},"I posted on other channels I found in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mmccaff/PlacesToPostYourStartup"},"this GitHub repo")," which was referenced in ",(0,a.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/startups/comments/iv4ms7/list_of_places_where_to_post_your_product_to_get/"},"this reddit post"),"."))),(0,a.kt)("li",{parentName:"ul"},"After a few days, I concluded that I can't find the target audience for this problem in the channels and I have to find better channels.")))}u.isMDXComponent=!0}}]);