import React from "react";
import Link from "next/link";
import Date from "./Date";

const BlogPost = ({ date, title, des, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <Date
          dateTime={date}
          customClass={"font-medium text-xs text-gray-500"}
        />
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
      </a>
    </Link>
  );
};

export default BlogPost;
