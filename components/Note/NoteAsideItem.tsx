import React from "react";
import Link from "next/link";
import { TreeNode } from "lib/types";
import { NoteAsideContainer } from "components/custom-tw-components";
import * as S from "./NoteAsideItem.style";
import * as T from "components/custom-tw-components";

interface NoteAsideItemProps {
  item: TreeNode;
}

const NoteAsideItem = ({ item }: NoteAsideItemProps) => {
  return (
    <NoteAsideContainer>
      <T.CategoryTitle>{item.title}</T.CategoryTitle>
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
