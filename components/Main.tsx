import React from "react";
import Image from "next/image";
import tw from "twin.macro";

const Main = () => {
  return (
    <div className={`relative`}>
      <div>
        <Image
          src={`/static/home.png`}
          alt="대표 이미지"
          width={`100%`}
          height={45}
          layout={`responsive`}
          objectFit="cover"
          className={`rounded-3xl`}
        />
      </div>
      <span
        className={`absolute top-8 font-extrabold italic text-white text flex justify-center w-full drop-shadow-lg`}
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
desktop:text-6xl
mobile:text-3xl
bg-gradient-to-r 
bg-clip-text 
text-transparent 
from-primary via-white to-accent_plus 
animate-gradient
`;

export default Main;
