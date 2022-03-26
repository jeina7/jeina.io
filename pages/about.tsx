import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GithubLogo, InstagramLogo, YoutubeLogo } from "~/components";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Jeina</title>
      </Head>

      <div className="relative flex flex-col items-center w-full pt-23 max-h-without-navbar">
        <div className="mb-8 overflow-hidden rounded-full w-45 h-45">
          <Image
            src="/profile.png"
            alt="Jeina's profile"
            width={180}
            height={180}
          />
        </div>

        <div className="flex flex-col items-center">
          <p className="mb-3 text-4xl font-extrabold">Jeina</p>
          <p className="text-xs text-gray-600 mb-13">
            <span className="mr-1 font-extralight">
              Full Stack Developer in
            </span>
            <span className="font-bold">GROOMATA</span>
          </p>
          <div className="flex flex-col items-center text-sm leading-more-relaxed font-extralight">
            <p>다양한 분야의 기술에 관심이 많습니다.</p>
            <p>
              어렵고 모호한 기술을 엄밀하게 이해하고 쉽게 풀어 쓰는 것을
              좋아합니다.
            </p>
            <p>{`\'왜 그렇게 생각해?\' 라는 질문을 가장 좋아합니다.`}</p>
          </div>
        </div>

        <div className="absolute flex items-center justify-center space-x-8 bottom-8">
          <a href="https://github.com/jeina7">
            <GithubLogo className="cursor-pointer" />
          </a>
          <InstagramLogo className="mt-px" />
          <YoutubeLogo />
        </div>
      </div>
    </>
  );
};

export default About;
