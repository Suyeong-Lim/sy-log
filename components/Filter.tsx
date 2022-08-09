import React from "react";
import tw from "twin.macro";

const Filter = ({ category, clickCategory, selectedFilter }) => {
  const clickBadge = (category) => {
    clickCategory(category);
  };

  return (
    <>
      <FilterContainer>
        {category.map((category) => {
          const active = selectedFilter.includes(category);
          return (
            <StyledBadge
              onClick={() => clickBadge(category)}
              key={category}
              className={`category-filter hover:bg-accent_plus_hover hover:text-bg ${
                active
                  ? " bg-accent_plus text-bg"
                  : " bg-text_gray_10 text-text_base"
              }`}
            >
              {category}
            </StyledBadge>
          );
        })}
      </FilterContainer>
    </>
  );
};

const FilterContainer = tw.div`
flex
flex-wrap
gap-3
mt-2
mb-7
max-h-32
min-h-full
overflow-auto
`;

const StyledBadge = tw.span`
shadow-inner
inline-flex 
items-center 
rounded
h-8
px-5
text-sm
leading-4
dark:bg-zinc-800 
dark:text-zinc-200
cursor-pointer
`;

export default Filter;
