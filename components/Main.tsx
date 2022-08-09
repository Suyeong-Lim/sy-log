import React from "react";
import Image from "next/image";
import tw, { styled, css } from "twin.macro";
import { keyframes } from "@emotion/react";

const Main = () => {
  return (
    <div className={`relative`}>
      <StyledBack></StyledBack>

      <span
        className={` absolute top-12 font-extrabold italic text-white text-6xl md:text-6xl text flex justify-center w-full drop-shadow-lg`}
      >
        <StyledTitle>
          towards <br />
          conceived reality
        </StyledTitle>
      </span>
    </div>
  );
};

const StyledBack = tw.div`
h-80
`;

const StyledTitle = tw.span`
bg-gradient-to-r 
bg-clip-text 
text-transparent 
from-primary via-white to-accent_plus 
animate-gradient
`;

export default Main;
