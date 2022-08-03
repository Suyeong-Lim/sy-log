import React from "react";
import Link from "next/link";
import { TreeNode } from "lib/types";
import { NoteAsideContainer } from "components/custom-tw-components";
import * as S from "./NoteAsideItem.style";

interface NoteAsideItemProps {
  item: TreeNode;
}

const NoteAsideItem = ({ item }: NoteAsideItemProps) => {
  return (
    <NoteAsideContainer>
      <S.Category>{item.title}</S.Category>
      <S.CategoryItemList>
        {item.children.map((i) => (
          <Link key={i.title} href={i.urlPath} passHref>
            {i.title}
          </Link>
        ))}
      </S.CategoryItemList>
    </NoteAsideContainer>
  );
};

export default NoteAsideItem;
