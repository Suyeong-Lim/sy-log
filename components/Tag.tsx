import React from "react";
import tw from "twin.macro";

type TagProps = {
  customClass?: string;
  children: React.ReactNode;
  onClick?: () => void;
};
const Tag = ({ children, customClass, ...rest }: TagProps) => {
  return <Badge className={customClass}>#{children}</Badge>;
};

const Badge = tw.span`
inline-flex 
items-center 
py-3 
leading-4 
text-secondary
dark:bg-zinc-800
dark:text-zinc-200
mr-3
font-light
`;

export default Tag;
