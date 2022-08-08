import React from "react";
import tw from "twin.macro";

const Filter = ({ category, clickCategory, selectedFilter }) => {
  const clickBadge = (category) => {
    clickCategory(category);
  };

  return (
    <>
      <FilterSection>
        <TagHd>Tags</TagHd>
        <hr className={`border-2 border-accent w-40 mt-2 mb-2`} />
        <FilterContainer>
          {category.map((category) => {
            const active = selectedFilter.includes(category);
            return (
              <StyledBadge
                onClick={() => clickBadge(category)}
                key={category}
                className={`category-filter ${
                  active ? " bg-accent text-bg" : " bg-white text-text_base_70"
                }`}
              >
                {category}
              </StyledBadge>
            );
          })}
        </FilterContainer>
      </FilterSection>
    </>
  );
};

const FilterSection = tw.section`
p-4
mt-6

rounded-lg
bg-text_gray_30
`;

const TagHd = tw.p`
font-normal
text-2xl
text-text_gray_30
`;

const FilterContainer = tw.div`
flex
flex-wrap
gap-3
mt-5
max-h-32
min-h-full
overflow-scroll
p-3
`;

const StyledBadge = tw.span`
shadow-inner
inline-flex 
items-center 
rounded-lg 
h-8
px-4 py-2
text-sm
leading-4
dark:bg-zinc-800 
dark:text-zinc-200
cursor-pointer

`;

export default Filter;
