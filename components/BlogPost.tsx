import React from "react";
import Link from "next/link";
import Date from "./Date";
import Tag from "components/Tag";
import tw, { styled } from "twin.macro";

const BlogPost = ({ date, title, des, tags, slug }) => {
  return (
    <div>
      <Link href={`/blog/${slug}`} passHref>
        <HoverPost className="pb-4 hover:translate-x-1.5">
          <div>
            <PostTitle>{title}</PostTitle>
            <PostDescription
              className={`font-light text-gray-600 text-base mt-1 mb-1`}
            >
              {des}
            </PostDescription>
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
          </div>
        </HoverPost>
      </Link>
    </div>
  );
};

const DateAndTags = tw.div`
flex
`;
const PostTitle = tw.div`
mt-2
font-bold
text-lg
text-text_gray_30
`;

const PostDescription = tw.div`
font-light
text-sm
text-text_till
mb-3
`;

const RecentPost = tw.div`text-accent cursor-pointer`;

const HoverPost = styled(RecentPost)`
  transition: 0.2s ease;
  &:hover {
    div {
      ${tw`transition duration-100 text-accent_plus`}
    }
  }
`;

export default BlogPost;
