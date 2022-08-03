import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className={`mt-3 flex flex-col`}>
        <h2 className={`text-3xl font-semibold mb-10`}>💫 Intoroduce.</h2>
        <div className={`flex flex-row`}>
          <Image
            src={`/about/aboutImg.png`}
            alt="대표 이미지"
            width={300}
            height={300}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <span className={`ml-10`}>
            <p>상상을 현실로 만들기 위해 노력하는 개발자 임수영입니다.</p>
            <p>
              서비스 기획과 UX 를 공부하다 현재는 프론트엔드 개발에 빠졌습니다.
              💞
            </p>
            <br />
            <p>
              JavaScript 와 TypeScript 를 사용하며 React와 Next.js 프로젝트를
              주로 개발하고 있습니다. 프로젝트에 필요한 기술 스택을 공부하고
              사람들과 공유하는 것을 좋아합니다 :D
            </p>
            <br />
            항상 팀에 기여할 수 있는 방법을 찾아내는 사람이 되고자, 오늘도
            노력하고 있습니다.
          </span>
        </div>
        <div className={`flex space-x-2 justify-center mt-10`}>
          <span className={`text-base font-medium`}>Skills : </span>
          <div>
            <span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
              JavaScript
            </span>
            <span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
              TypeScript
            </span>

            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              Next.js
            </span>
            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
              React
            </span>

            <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
              ReactQuery
            </span>

            <span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
              ReduxToolKit
            </span>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
              CSS-In-JS
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
