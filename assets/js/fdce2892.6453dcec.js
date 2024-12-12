"use strict";(self.webpackChunkpublic_notes=self.webpackChunkpublic_notes||[]).push([[7042],{3909:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"photography-and-cinematography/media-organization","title":"Media Organization","description":"I use Adobe Lightroom Classic to organize my photos and videos. Each device has its own catalog as I don\'t do any work that uses multiple devices and so far, I haven\'t had the need to have a single catalog for all devices. I use the // folder structure when importing files.","source":"@site/docs/0140-photography-and-cinematography/070-media-organization.md","sourceDirName":"0140-photography-and-cinematography","slug":"/photography-and-cinematography/media-organization","permalink":"/photography-and-cinematography/media-organization","draft":false,"unlisted":false,"editUrl":"https://github.com/ahmadalli/public-notes/edit/main/docs/0140-photography-and-cinematography/070-media-organization.md","tags":[],"version":"current","lastUpdatedBy":"ahmadali shafiee","lastUpdatedAt":1734023351000,"sidebarPosition":70,"frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"DaVinci Resolve","permalink":"/photography-and-cinematography/davinci-resolve"},"next":{"title":"Sports","permalink":"/sports/"}}');var a=o(4848),i=o(8453);const r={},s="Media Organization",d={},c=[];function h(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"media-organization",children:"Media Organization"})}),"\n",(0,a.jsxs)(t.p,{children:["I use Adobe Lightroom Classic to organize my photos and videos. Each device has its own catalog as I don't do any work that uses multiple devices and so far, I haven't had the need to have a single catalog for all devices. I use the ",(0,a.jsx)(t.code,{children:"<Year>/<YYYY-MM-DD>/<file>"})," folder structure when importing files."]}),"\n",(0,a.jsxs)(t.p,{children:["Lightroom doesn't support importing ",(0,a.jsx)(t.code,{children:".srt"})," (for telemetry) and ",(0,a.jsx)(t.code,{children:".lrf"})," (low resolution videos) files that DJI drones create so I use the following shell script, putting the right values for ",(0,a.jsx)(t.code,{children:"<source>"})," and ",(0,a.jsx)(t.code,{children:"<destination>"})," to move these files to the correct location:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'#!/bin/bash\n\n# Directories\nSOURCE_DIR="<source>"\nDEST_DIR="<destination>"\n\n# Create destination directory structure and move files\nfind "$SOURCE_DIR" -type f | while read -r FILE; do\n  MOD_DATE=$(stat -c "%y" "$FILE" | cut -d\' \' -f1)  # Get file modification date\n  YEAR=$(echo "$MOD_DATE" | cut -d\'-\' -f1)\n  DEST_PATH="$DEST_DIR/$YEAR/$MOD_DATE"\n  mkdir -p "$DEST_PATH"  # Create directory structure\n  mv "$FILE" "$DEST_PATH/"  # Move file, preserving the name\n  echo "Moved $FILE to $DEST_PATH/"\ndone\n'})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var n=o(6540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);