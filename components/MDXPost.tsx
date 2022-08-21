import React from "react";
import Date from "./Date";
import { PostTitle } from "components/custom-tw-components";
import Tag from "components/Tag";

type PostProps = {
  title: string;
  date: string;
  tags?: string[];
  children: React.ReactNode;
};

const MDXPost = ({ title, date, tags, children }: PostProps) => {
  return (
    <div className=" mx-auto w-full prose ">
      {tags?.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <PostTitle>{title}</PostTitle>
      {date && <Date dateTime={date} />}
      {children}
    </div>
  );
};

export default MDXPost;
