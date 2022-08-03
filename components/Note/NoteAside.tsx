import React from "react";
import { TreeNode } from "lib/types";
import NoteAsideItem from "components/Note/NoteAsideItem";

interface NoteAsideProps {
  tree: TreeNode[];
}

const NoteAside = ({ tree }: NoteAsideProps) => {
  return (
    <div>
      {tree.map((tree) => (
        <NoteAsideItem key={tree.title} item={tree} />
      ))}
    </div>
  );
};

export default NoteAside;
