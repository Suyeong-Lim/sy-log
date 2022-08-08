import React from "react";
import Link from "next/link";
import { compareDesc } from "date-fns";

const RecentPosts = ({ posts }) => {
  const recentPost = posts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        {recentPost.slice(0, 5).map((post) => (
          <Link key={post._id} href={`/blog/${post.slug}`} passHref>
            <a className="mt-5">
              <div className={`font-medium text-xl`}>{post.title}</div>
              <div className={`font-light`}>{post.description}</div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
