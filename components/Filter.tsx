import React, { useState } from "react";
import Badge from "./Badge";
import tw, { styled } from "twin.macro";

const Filter = ({
  category,
  clickCategory,
  isActive,
  setActive,
  selectedFilter,
}) => {
  const clickTest = (category) => {
    clickCategory(category);
    setActive(!isActive);
  };

  console.log("category", category);
  console.log("selected", selectedFilter);

  return (
    <>
      <div>
        <p className={`font-bold text-medium text-text_base`}>Tags</p>
        <hr className={`border-2 border-text_base w-40 mt-2 mb-2`} />
        <div>
          {category.map((category) => {
            const active = selectedFilter.includes(category);
            return (
              <StyledBadge
                onClick={(e) => clickTest(category)}
                key={category}
                className={`category-filter ${
                  active ? " bg-primary" : " bg-bg"
                }`}
              >
                {category}
              </StyledBadge>
            );
          })}
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
text-text_base
dark:bg-zinc-800 
dark:text-zinc-200
cursor-pointer

`;

export default Filter;
