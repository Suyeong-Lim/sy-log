import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";

import type { DocumentGen } from "contentlayer/core";

export const urlFromFilePath = (doc: DocumentGen): string => {
  return doc._raw.flattenedPath.replace(/pages\/?/, "");
};
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
    tags: { type: "string", required: false },
  },

  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog],
  mdx: { rehypePlugins: [highlight] },
});
