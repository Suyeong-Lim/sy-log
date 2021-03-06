import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <div className={`mt-10 flex flex-col`}>
        <h2 className={`text-3xl font-semibold mb-10`}>π« Intoroduce.</h2>
        <div className={`flex flex-row`}>
          <Image
            src={`/about/aboutImg.png`}
            alt="λν μ΄λ―Έμ§"
            width={300}
            height={300}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <span className={`ml-10`}>
            <p>μμμ νμ€λ‘ λ§λ€κΈ° μν΄ λΈλ ₯νλ κ°λ°μ μμμμλλ€.</p>
            <p>
              μλΉμ€ κΈ°νκ³Ό UX λ₯Ό κ³΅λΆνλ€ νμ¬λ νλ‘ νΈμλ κ°λ°μ λΉ μ‘μ΅λλ€.
              π
            </p>
            <br />
            <p>
              JavaScript μ TypeScript λ₯Ό μ¬μ©νλ©° Reactμ Next.js νλ‘μ νΈλ₯Ό
              μ£Όλ‘ κ°λ°νκ³  μμ΅λλ€. νλ‘μ νΈμ νμν κΈ°μ  μ€νμ κ³΅λΆνκ³ 
              μ¬λλ€κ³Ό κ³΅μ νλ κ²μ μ’μν©λλ€ :D
            </p>
            <br />
            ν­μ νμ κΈ°μ¬ν  μ μλ λ°©λ²μ μ°Ύμλ΄λ μ¬λμ΄ λκ³ μ, μ€λλ
            λΈλ ₯νκ³  μμ΅λλ€.
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
