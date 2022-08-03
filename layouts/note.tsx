import React from "react";
import Container from "components/Container";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXPost from "components/MDXPost";
import NoteAside from "components/Note/NoteAside";
import * as T from "components/custom-tw-components";

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
      <T.NoteContainer>
        <NoteAside tree={tree} />
        <MDXPost title={post.title} date={post.date}>
          <MDXComponent />
        </MDXPost>
      </T.NoteContainer>
    </Container>
  );
};

export default note;
