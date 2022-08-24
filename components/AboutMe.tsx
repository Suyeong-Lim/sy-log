import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className="flex">
        <Image
          src={"/static/profileImg.jpeg"}
          alt="avatar"
          width="340px"
          height="450px"
          className="object-cover"
        />
        <ProfileInfo />
      </div>
    </>
  );
};

const ProfileInfo = () => (
  <section className="ml-10">
    <h1>{`Hi, I'm SY lim 🍅`} </h1>
    <ul>
      <li>Front-End 개발자에요</li>
      <li>주로 Next와 React 를 사용합니다.</li>
      <li>
        꾸준함을 최고의 가치로 생각하고 일상의 루틴을 만드는 것을 좋아해요.
      </li>
      <li>UX와 기획을 전공하여 잘 설계된 UX를 만나면 감동을 느껴요</li>
      <li>
        일상생활에서 사용하는 앱에서도 항상 UX 개선점을 생각하는 습관이
        있습니다.
      </li>
      <li>
        하나의 아이디어가 프로덕트가 되기까지의 긴 여정에 몰입하는 것을
        좋아합니다.
      </li>
      <li>취미로 사진을 찍고 📷 , 식물을 키워요 🌱 </li>
      <li>요즘은 TDD 와 StoryBook 에 관심을 갖고 있습니다. </li>
    </ul>
  </section>
);

export default AboutMe;
