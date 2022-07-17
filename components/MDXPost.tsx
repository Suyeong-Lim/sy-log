import React from "react";
import Date from "./Date";

const MDXPost = ({ title, date, children }) => {
  return (
    <div className="mt-10 prose">
      <h1 className="text-cyan-600">{title}</h1>
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
