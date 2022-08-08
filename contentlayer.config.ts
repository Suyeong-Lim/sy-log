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
    image: { type: "string", required: false },
    tags: {
      type: "list",
      required: false,
      of: { type: "string" },
      default: [],
    },
  },

  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Note = defineDocumentType(() => ({
  name: "Note",
  filePathPattern: `note/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
    tags: { type: "string", required: false },
  },
  computedFields: {
    url_path: {
      type: "string",
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and doc page would be "docs/getting-started/"',
      resolve: urlFromFilePath,
    },
    pathSegments: {
      type: "json",
      resolve: (doc) =>
        doc._raw.flattenedPath
          .split("/")
          .slice(1)
          .map((pathName) => {
            return { pathName };
          }),
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog, Note],
  mdx: { rehypePlugins: [highlight] },
});
