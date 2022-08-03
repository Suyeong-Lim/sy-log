import React from "react";
import Date from "./Date";
import { PostTitle } from "components/custom-tw-components";

const MDXPost = ({ title, date, children }) => {
  return (
    <div className="ml-5 w-full prose ">
      <PostTitle>{title}</PostTitle>
      {date && (
        <Date
          dateTime={date}
          customClass={"font-medium text-sm text-gray-500"}
        />
      )}
      {children}
    </div>
  );
};

export default MDXPost;
