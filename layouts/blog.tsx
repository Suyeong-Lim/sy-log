import React from "react";
import Container from "components/Container";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXPost from "components/MDXPost";
import metadata from "data/metadata";
import { NextSeo } from "next-seo";

const BlogLayout = ({ post }) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <Container>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`${metadata.meta.url}/blog/${post.slug}`}
        openGraph={{
          type: "article",
          url: `${metadata.meta.url}/blog/${post.slug}`,
          article: {
            publishedTime: new Date(post.date).toISOString(),
            tags: [...post.tags, "Frontend", "Develop"],
          },
        }}
      />
      <MDXPost title={post.title} date={post.date} tags={post.tags}>
        <MDXComponent />
      </MDXPost>
    </Container>
  );
};

export default BlogLayout;
