import React, { useState } from "react";
import Badge from "./Badge";
import tw, { styled } from "twin.macro";

const Filter = ({ category, clickCategory }) => {
  const [isActive, setActive] = useState(false);

  const clickTest = (category) => {
    clickCategory(category);
    setActive(!isActive);
    //만약에, isActive가 false 이면
  };

  return (
    <>
      <div>
        <p className={`font-bold text-medium text-text_base`}>Tags</p>
        <hr className={`border-2 border-text_base w-40 mt-2 mb-2`} />
        <div>
          {category.map((category) => (
            <StyledBadge
              onClick={() => clickTest(category)}
              key={category}
              className={`${
                isActive
                  ? "text-white bg-secondary"
                  : "text-zinc-600 bg-zinc-100 "
              }`}
            >
              {category}
            </StyledBadge>
          ))}
        </div>
      </div>
    </>
  );
};

const StyledBadge = tw.span`
inline-flex 
items-center 
rounded-lg 
shadow-inner 

px-4 py-1.5 
mr-2
text-sm
leading-4

dark:bg-zinc-800 
dark:text-zinc-200
cursor-pointer
`;

export default Filter;
