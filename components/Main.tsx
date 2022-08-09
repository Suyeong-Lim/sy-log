import React from "react";
import Image from "next/image";
import tw from "twin.macro";

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

const StyledBG = tw.div`
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
