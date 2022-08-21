import React from "react";
import Link from "next/link";
import tw, { styled, css } from "twin.macro";
import Date from "./Date";

const RecentPosts = ({ posts }) => {
  const postCount = posts.length;
  return (
    <section className={`mt-8 p-4`}>
      <div className={`text-3xl font-medium`}>
        <span className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Latest Article
        </span>
        <Count>({postCount})</Count>
      </div>

      <PostSection className={`flex flex-col`}>
        {posts.map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`} passHref>
            <HoverPost className="mt-5 hover:translate-x-1.5">
              <div>
                <PostTitle>{post.title}</PostTitle>
                <PostDescription>{post.description}</PostDescription>
                <Date dateTime={post.date} />
              </div>
            </HoverPost>
          </Link>
        ))}
      </PostSection>
    </section>
  );
};

const Count = tw.span`
font-medium
text-base
text-accent_plus
ml-2
`;
const PostSection = tw.section`
mt-2
`;

const PostTitle = tw.div`
font-semibold
text-xl
text-text_gray_30
`;

const PostDescription = tw.div`
font-normal
text-text_till
mb-2
`;

const RecentPost = tw.div`text-accent cursor-pointer`;

const HoverPost = styled(RecentPost)`
  transition: 0.2s ease;
  &:hover {
    div {
      ${tw`transition duration-100  text-accent_plus`}
    }
  }
`;

export default RecentPosts;
