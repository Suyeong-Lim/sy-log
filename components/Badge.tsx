import React from "react";
import tw from "twin.macro";

type BadgeProps = {
  customClass?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Badge = ({ children, customClass, ...rest }: BadgeProps) => {
  return <StyledBadge className={customClass}>{children}</StyledBadge>;
};

const StyledBadge = tw.span`
inline-flex 
items-center 
rounded-lg 
shadow-inner 
bg-zinc-100 
px-4 py-1.5 
mr-2
text-xs
leading-4

dark:bg-zinc-800 
dark:text-zinc-200
cursor-pointer
`;

export default Badge;
