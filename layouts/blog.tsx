import React from "react";
import Container from "components/Container";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXPost from "components/MDXPost";

const BlogLayout = ({ post }) => {
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container customMeta={customMeta}>
      <MDXPost title={post.title} date={post.date}>
        <MDXComponent />
      </MDXPost>
    </Container>
  );
};

export default BlogLayout;
