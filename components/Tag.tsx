import React from "react";
import tw from "twin.macro";

type TagProps = {
  customClass?: string;
  children: React.ReactNode;
  onClick?: () => void;
};
const Tag = ({ children, customClass, ...rest }: TagProps) => {
  return <StyledTag className={customClass}>#{children}</StyledTag>;
};

const StyledTag = tw.span`
inline-flex 
items-center 
py-3 
leading-4 
rounded-full
bg-zinc-100 
px-2.5
py-0.5 
hover:bg-gray-200
text-xs
leading-4 
text-zinc-600
dark:bg-zinc-800
dark:text-zinc-200
mr-3
font-light
`;

export default Tag;
