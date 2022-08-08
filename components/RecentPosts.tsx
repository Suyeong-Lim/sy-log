import React from "react";
import Link from "next/link";

import tw, { styled } from "twin.macro";
import Date from "./Date";

const RecentPosts = ({ posts }) => {
  return (
    <section className={`mt-8 p-4`}>
      <h1 className={`text-3xl font-medium`}>Latest Article</h1>
      <PostSection className={`flex flex-col`}>
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`} passHref>
            <a className="mt-5">
              <PostTitle>{post.title}</PostTitle>
              <PostDescription>{post.description}</PostDescription>
              <Date dateTime={post.date} />
            </a>
          </Link>
        ))}
      </PostSection>
    </section>
  );
};

const PostSection = tw.section`
mt-2
`;

const PostTitle = tw.div`
font-medium
text-xl
text-text_gray_30
`;

const PostDescription = tw.div`
font-light
text-text_till
mb-3
`;
export default RecentPosts;
