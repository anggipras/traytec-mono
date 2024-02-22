/* eslint-disable prefer-named-capture-group -- disable prefer named capture group */
import React from "react";

interface RenderHTMLProps {
  html?: string | undefined;
  className?: string;
}

const RenderHtml = ({ html, className }: RenderHTMLProps) => {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: (html ?? "")
          .replace(/<h1(?:.*?)<\/h1>/g, (match: string) => {
            const result = match.replace(/<h1/g, `<h1 class="typo-h1"`);
            return result;
          })
          .replace(/<h2(?:.*?)<\/h2>/g, (match: string) => {
            const result = match.replace(/<h2/g, `<h2 class="typo-h2"`);
            return result;
          })
          .replace(/<h3(?:.*?)<\/h3>/g, (match: string) => {
            const result = match.replace(
              /<h3/g,
              `<h3 class="typo-h3" style="font-size: 24px;"`
            );
            return result;
          })
          .replace(/<h4(?:.*?)<\/h4>/g, (match: string) => {
            const result = match.replace(/<h4/g, `<h4 class="typo-h4"`);
            return result;
          })
          .replace(/<h5(?:.*?)<\/h5>/g, (match: string) => {
            const result = match.replace(/<h5/g, `<h5 class="typo-h5"`);
            return result;
          })
          .replace(/<p(?:.*?)<\/p>/g, (match: string) => {
            const result = match.replace(/<p/g, `<p class="typo-copy-normal"`);
            return result;
          })
          .replace(/<ul/g, '<ul class="list-disc list-inside"')
          .replace(/<ol/g, '<ol class="list-decimal list-inside"')
          .replace(
            /<blockquote/g,
            '<blockquote class="bg-primary-100 p-5 border-l-2 border-primary-200"'
          )
          .replace(
            /<a\s+(?:[^>]+?\s)?href="(https?:\/\/[^\s"]+)"(?:[^>]*?)>(.*?)<\/a>/g,
            (match, href, text) => {
              return `<a href="${href}" target="_blank">${text}</a>`;
            }
          ),
      }}
    />
  );
};

export default RenderHtml;
