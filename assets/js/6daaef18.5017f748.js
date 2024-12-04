"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[1445],{9014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tech/streaming-games","title":"Streaming Games","description":"To stream games from your PC to another device, like your TV or your phone.","source":"@site/docs/0100-tech/020-streaming-games.md","sourceDirName":"0100-tech","slug":"/tech/streaming-games","permalink":"/tech/streaming-games","draft":false,"unlisted":false,"editUrl":"https://github.com/ahmadalli/public-notes/edit/main/docs/0100-tech/020-streaming-games.md","tags":[],"version":"current","lastUpdatedBy":"ahmadali shafiee","lastUpdatedAt":1733258086000,"sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"defaultSidebar","previous":{"title":"Child Pages","permalink":"/tech/docusaurus/custom-react-components/child-pages"},"next":{"title":"Large Language Models (LLMs)","permalink":"/tech/large-language-models/"}}');var s=t(4848),o=t(8453);const r={sidebar_position:20},l="Streaming Games",a={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Sunshine Applications",id:"sunshine-applications",level:3},{value:"Challenges",id:"challenges",level:2},{value:"Network Bandwidth",id:"network-bandwidth",level:3},{value:"Solutions",id:"solutions",level:4},{value:"Display Resolution",id:"display-resolution",level:3},{value:"Solutions",id:"solutions-1",level:4},{value:"Controller Connectivity",id:"controller-connectivity",level:3},{value:"Video Stuttering",id:"video-stuttering",level:3},{value:"Controller Haptic Feedback",id:"controller-haptic-feedback",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components},{Icon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"streaming-games",children:"Streaming Games"})}),"\n",(0,s.jsx)(n.p,{children:"To stream games from your PC to another device, like your TV or your phone."}),"\n",(0,s.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/overview.html#system-requirements",children:"Sunshine Requirements"})}),"\n",(0,s.jsxs)(n.li,{children:["A reliable network connection between your PC and the device you want to stream to","\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Both devices should be on the same network, preferably via Ethernet"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"(optional) Steam: It provides a nice UI for launching games and Sunshine can automatically add your Steam games to its library"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://store.steampowered.com/about/",children:"Steam"})," or ",(0,s.jsx)(n.a,{href:"https://playnite.link/",children:"Playnite"})," is the game launcher. It should be installed on the PC you want to stream games from."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/installation.html",children:"Sunshine"})," is the streaming server. It should be installed on the PC you want to stream games from"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://moonlight-stream.org/",children:"Moonlight"})," is the streaming client. It should be installed on the device you want to stream games to"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can manage your Sunshine applications and configurations from its web UI at ",(0,s.jsx)(n.a,{href:"https://localhost:47990/",children:"localhost:47990"})]})}),"\n",(0,s.jsx)(n.h3,{id:"sunshine-applications",children:"Sunshine Applications"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://playnite.link/",children:"Playnite"}),": I use the full screen mode to launch Playnite from Moonlight."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"challenges",children:"Challenges"}),"\n",(0,s.jsx)(n.h3,{id:"network-bandwidth",children:"Network Bandwidth"}),"\n",(0,s.jsx)(n.p,{children:"TVs usually have a 100Mbit port instead of 1Gbit. This isn't enough to stream games at 1080p 60fps."}),"\n",(0,s.jsx)(n.h4,{id:"solutions",children:"Solutions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use a USB 3 dongle that supports Android TV devices like TP-Link UE300. (",(0,s.jsxs)(n.a,{href:"https://www.reddit.com/r/bravia/comments/qdrgjl/usb_ethernet/",children:[(0,s.jsx)(t,{icon:"fa-brands fa-reddit",size:"lg"})," UE305 or UE306 don't work"]}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Use a device that has a 1Gbit Ethernet port.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Raspberry Pi 4 if you want to DIY the whole thing"}),"\n",(0,s.jsx)(n.li,{children:"Nvidia Shield TV if you want a more polished experience"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"display-resolution",children:"Display Resolution"}),"\n",(0,s.jsx)(n.p,{children:"I'm using a 21:9 monitor, but my TV is 16:9. This means that I have to change the resolution of my monitor to 16:9 before I can stream games to my TV."}),"\n",(0,s.jsx)(n.h4,{id:"solutions-1",children:"Solutions"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"Do Command"})," and ",(0,s.jsx)(n.code,{children:"Undo Command"})," functionality of Sunshine Applications combined with a resolution management software to automate this process. You can find proper commands on ",(0,s.jsx)(n.a,{href:"https://docs.lizardbyte.dev/projects/sunshine/en/latest/about/guides/app_examples.html#changing-resolution-and-refresh-rate",children:"the Sunshine documentation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can download QRes for Windows from ",(0,s.jsx)(n.a,{href:"https://www.majorgeeks.com/files/details/qres.html",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"For Windows, you can use the following commands:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Change the resolutions and refresh rate based on your display settings"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Do Command"}),": ",(0,s.jsx)(n.code,{children:"cmd /C D:\\Programs\\qres\\QRes.exe /x:1920 /y:1080 /r:60"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Undo Command"}),": ",(0,s.jsx)(n.code,{children:"cmd /C D:\\Programs\\qres\\QRes.exe /x:1920 /y:1200 /r:60"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"controller-connectivity",children:"Controller Connectivity"}),"\n",(0,s.jsx)(n.p,{children:"The XBox wireless dongle doesn't work with Android TV. I'm using Bluetooth instead which has a bit of input lag."}),"\n",(0,s.jsx)(n.h3,{id:"video-stuttering",children:"Video Stuttering"}),"\n",(0,s.jsx)(n.p,{children:"Even after reducing the bitrate, I'm still getting some stuttering. I'm not sure if this is because of the network bandwidth or the TV itself. I'm going to investigate this further after I fixed the network bandwidth issue."}),"\n",(0,s.jsx)(n.h3,{id:"controller-haptic-feedback",children:"Controller Haptic Feedback"}),"\n",(0,s.jsx)(n.p,{children:"Haptic feedback doesn't work in the XBox controller when connected to the TV."})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);