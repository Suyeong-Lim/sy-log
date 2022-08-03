import React from "react";
import Container from "components/Container";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXPost from "components/MDXPost";
import NoteAside from "components/Note/NoteAside";
import * as S from "components/Note/NoteAsideItem.style";

const note = ({ post, tree }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXComponent = useMDXComponent(post.body.code);

  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    <Container customMeta={customMeta}>
      <S.NoteContainer>
        <NoteAside tree={tree} />
        <MDXPost title={post.title} date={post.date}>
          <MDXComponent />
        </MDXPost>
      </S.NoteContainer>
    </Container>
  );
};

export default note;
