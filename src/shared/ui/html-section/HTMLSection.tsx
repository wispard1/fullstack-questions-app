import DOMPurify from "dompurify";
import { marked } from "marked";

const SANITIZE_CONFIG = {
  ALLOWED_TAGS: [
    "p",
    "b",
    "i",
    "em",
    "strong",
    "br",
    "ul",
    "ol",
    "li",
    "a",
    "code",
    "pre",
    "h3",
    "h4",
    "blockquote",
    "span",
  ],
  ALLOWED_ATTR: ["href", "target", "rel", "class"],
  ALLOWED_URI_REGEXP: /^(https?|mailto)/i,
};

interface HTMLSectionProps {
  title: string;
  html: string;
}

export function HTMLSection({ title, html }: HTMLSectionProps) {
  const rawHtml = marked.parse(html, { async: false, breaks: true });
  const cleanHTML = DOMPurify.sanitize(rawHtml, SANITIZE_CONFIG);
  return (
    <div className="question_container ">
      <h3>{title}</h3>
      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      />
    </div>
  );
}
