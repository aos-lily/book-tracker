import { INLINES } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default defineNuxtPlugin(() => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, next) => {
        return `<a href="${node.data.uri}"${
          !node.data.uri.includes(".") ? "" : ' target="_blank"'
        }>${next(node.content)}</a>`;
      }
    }
  };
  return {
    provide: {
      translateRichText: (richText) => documentToHtmlString(richText, options)
    }
  };
});
