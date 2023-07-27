import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";

function wikimediaEmbedHtmlToMarkdown(html: string): string {
  try {
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");
    let aTags = doc.getElementsByTagName("a");
    let imgTag = doc.getElementsByTagName("img")[0];
    let markdown = "<figure>\n\n";
    markdown += `[![${imgTag.alt}](${imgTag.src})](${aTags[0].href})\n\n`;
    markdown += "<figcaption>\n\n";
    for (let i = 1; i < aTags.length; i++) {
      let innerText = aTags[i].innerText;
      let href = aTags[i].href;
      markdown += `By [${innerText}](${href}) `;
    }
    markdown += "\n\n</figcaption>\n</figure>";
    return markdown;
  } catch {
    return "";
  }
}

const WikimediaToMarkdown: React.FC = () => {
  const [outputMarkdown, setOutputMarkdown] = useState<string>("");

  return (
    <div>
      <textarea
        style={{width:"100%", height:"200px"}}
        onChange={(e) => {
          const markdown = wikimediaEmbedHtmlToMarkdown(e.target.value);
          setOutputMarkdown(markdown);
        }}
      />
      <CodeBlock language="md">{outputMarkdown}</CodeBlock>
    </div>
  );
};

export default WikimediaToMarkdown;
