import React from "react";
import Link from "next/link";
import Date from "./Date";
import Tag from "components/Tag";
import tw from "twin.macro";

const BlogPost = ({ date, title, des, tags, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <div className={`font-medium text-xl mt-2`}>{title}</div>
        <div className={`font-light text-gray-600 text-base mt-1 mb-1`}>
          {des}
        </div>
        <DateAndTags>
          <Date
            dateTime={date}
            customClass={"font-medium text-xs text-gray-500 mr-2"}
          />
          {tags?.map((tag) => (
            <Tag key={tag} customClass={"text-s font-extralight"}>
              {tag}
            </Tag>
          ))}
        </DateAndTags>
      </a>
    </Link>
  );
};

const DateAndTags = tw.div`
flex
`;

export default BlogPost;
