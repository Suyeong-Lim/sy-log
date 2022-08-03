import type { Note } from "contentlayer/generated";

export type NoteLayout = {
  note: Note;
  tree: TreeNode[];
};

export type TreeNode = {
  title: string;
  date: string;
  urlPath: string;
  children: TreeNode[];
};

export type TreeRoot = TreeNode[];

export type PathSegment = { pathName: string };


// type Note = {
//     _id: string;
//     _raw: Local.RawDocumentData;
//     type: 'Note';
//     title: string;
//     description: string | undefined;
//     date: string;
//     tags: string | undefined;
//     body: MDX;
//     url_path: string;
//     pathSegments: json;
// }