import React from "react";
import Image from "next/image";
import tw, { styled, css } from "twin.macro";
import { keyframes } from "@emotion/react";

const Main = () => {
  return (
    <div className={`relative`}>
      <Image
        src={`/static/home.png`}
        alt="대표 이미지"
        width={`100%`}
        height={45}
        layout={`responsive`}
        objectFit="cover"
        className={`rounded-3xl`}
      />
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

const StyledTitle = tw.span`
bg-gradient-to-r 
bg-clip-text 
text-transparent 
from-primary via-white to-white 
animate-gradient
`;

export default Main;
