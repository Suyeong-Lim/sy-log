import React from "react";

const MDXPost = ({ title, date, children }) => {
  return (
    <div className="mt-10 prose">
      <h1 className="text-teal-700">{title}</h1>
      {date && <span className="text-sm font-light mb-5">{date}</span>}
      {children}
    </div>
  );
};

export default MDXPost;
