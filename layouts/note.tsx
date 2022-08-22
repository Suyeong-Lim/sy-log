import React from "react";
import { NextSeo } from "next-seo";
import metadata from "data/metadata";
import Container from "components/Container";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXPost from "components/MDXPost";
import NoteAside from "components/Note/NoteAside";
import * as T from "components/custom-tw-components";

const note = ({ post, tree }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`${metadata.meta.url}/note/${post.slug}`}
        openGraph={{
          type: "article",
          url: `${metadata.meta.url}/note/${tree.title}`,
          article: {
            publishedTime: new Date(post.date).toISOString(),
            tags: [...post.title, "Frontend", "Develop"],
          },
        }}
      />
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
