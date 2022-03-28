import type { NextPage } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import { GithubLogo, InstagramLogo, YoutubeLogo } from "~/components";
import { defaultOpenGraph, defaultSeo } from "~/lib/seo";

const seo: NextSeoProps = {
  title: "About",
  openGraph: { ...defaultOpenGraph },
  ...defaultSeo,
};

const About: NextPage = () => {
  return (
    <>
      <NextSeo {...seo} />

      <div className="relative flex flex-col items-center w-full pt-23 min-h-without-navbar">
        <div className="mb-8 overflow-hidden rounded-full w-45 h-45">
          <Image
            src="/profile.png"
            alt="Jeina's profile"
            width={180}
            height={180}
          />
        </div>

        <div className="flex flex-col items-center mb-40">
          <p className="mb-3 text-4xl font-extrabold">Jeina</p>
          <p className="text-xs text-gray-600 mb-13 dark:text-gray-300 font-inter">
            <span className="mr-1 font-light">Data Engineer in</span>
            <span className="font-bold">KAKAO</span>
          </p>
          <div className="flex flex-col items-center text-sm leading-more-relaxed font-extralight sm:space-y-1">
            <p className="mb-2 sm:mb-0">
              다양한 분야의 기술에 관심이 많습니다.
            </p>
            <div className="flex flex-col items-center mb-2 sm:space-x-1 sm:flex-row sm:mb-0">
              <span>어렵고 모호한 기술을 엄밀하게 이해하고</span>
              <span>쉽게 풀어 쓰는 것을 좋아합니다.</span>
            </div>
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
