import React from "react";
import { TreeNode } from "lib/types";
import NoteAsideItem from "components/Note/NoteAsideItem";
import * as T from "components/custom-tw-components";

interface NoteAsideProps {
  tree: TreeNode[];
}

const NoteAside = ({ tree }: NoteAsideProps) => {
  return (
    <T.NodeAside>
      {tree.map((tree) => (
        <NoteAsideItem key={tree.title} item={tree} />
      ))}
    </T.NodeAside>
  );
};

export default NoteAside;
