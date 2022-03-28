import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { PostCard, PostIcon, TagIcon } from "~/components";
import { defaultOpenGraph, defaultSeo } from "~/lib/seo";
import { postMetadata, posts } from "~/utils/types";

const labelColors = [
  [
    "bg-pink-950",
    "border-pink-950",
    "dark:bg-pink-50",
    "dark:border-pink-850",
    "dark:text-pink-850",
  ],
  [
    "bg-mint-950",
    "border-mint-950",
    "dark:bg-mint-50",
    "dark:border-mint-850",
    "dark:text-mint-850",
  ],
  [
    "bg-green-950",
    "border-green-950",
    "dark:bg-green-50",
    "dark:border-green-850",
    "dark:text-green-850",
  ],
  [
    "bg-blue-950",
    "border-blue-950",
    "dark:bg-blue-50",
    "dark:border-blue-850",
    "dark:text-blue-850",
  ],
  [
    "bg-rose-950",
    "border-rose-950",
    "dark:bg-rose-50",
    "dark:border-rose-850",
    "dark:text-rose-850",
  ],
  [
    "bg-mango-950",
    "border-mango-950",
    "dark:bg-mango-50",
    "dark:border-mango-850",
    "dark:text-mango-850",
  ],
];

const seo: NextSeoProps = {
  title: "Jeina's Devlog",
  openGraph: { ...defaultOpenGraph },
  ...defaultSeo,
  titleTemplate: "%s",
  description:
    "Jeina의 블로그입니다. 데이터 엔지니어링을 주로 다룹니다. 웹 개발과 서버리스, 리액트와 넥스트 제이에스를 취미삼고 있습니다.",
};

const Home = ({
  posts,
  tags,
  topPostSlugs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let poppingLabelColors = [...labelColors];

  return (
    <>
      <NextSeo {...seo} />

      <div className="flex items-start justify-between w-full sm:items-center my-18">
        <div className="flex flex-col">
          <p className="mb-2 text-4xl font-extrabold font-inter">Jeina</p>
          <p className="mb-1.5 text-xs text-gray-600 dark:text-gray-300 font-inter">
            <span className="mr-1 font-light">Data Engineer in</span>
            <span className="font-bold">KAKAO</span>
          </p>
          <p className="text-xs font-light leading-relaxed text-gray-800 min-w-50 max-w-54 sm:w-80 sm:max-w-max dark:text-gray-100">
            데이터와 관련된 엔지니어링을 주로 다룹니다. 웹 개발과 서버리스,
            리액트와 넥스트 제이에스를 취미삼고 있습니다.
          </p>
        </div>
        <div className="ml-5 overflow-hidden rounded-full w-30 aspect-square sm:w-34 sm:h-34">
          <Image
            src="/profile_240x240.png"
            alt="Jeina's profile"
            width={136}
            height={136}
            layout="responsive"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-15 sm:mb-24">
        <div className="flex items-center justify-start mb-2.5 sm:mb-4 dark:text-white">
          <span className="mr-1.5 text-3xl font-extrabold font-inter">
            Post
          </span>
          <PostIcon className="mt-0.5" />
        </div>

        <div className="flex-col space-y-8 sm:space-y-16 mb-18 sm:mb-25">
          {topPostSlugs.map((postSlug) => {
            const post = posts[postSlug];
            return (
              <PostCard
                key={postSlug}
                postSlug={postSlug}
                postTitle={post.title}
                views={post.views}
                description={post.description}
              />
            );
          })}
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center justify-start mb-4 dark:text-white">
            <span className="mr-1.5 text-3xl font-extrabold font-inter">
              Tags
            </span>
            <TagIcon />
          </div>

          <div className="text-white text-xxs font-extralight">
            {tags.map((tag, idx) => {
              if (idx % labelColors.length == 0) {
                poppingLabelColors = [...labelColors];
              }

              const poppingIdx = Math.floor(
                Math.random() * poppingLabelColors.length
              );
              const poppedColors = poppingLabelColors.splice(poppingIdx, 1)[0];

              return (
                <Link key={tag} href={`/tag/${tag}`} passHref>
                  <div
                    className={`inline-block px-2.5 py-1 rounded-full font-light cursor-pointer mr-1.5 mb-1.5 border-0.5 border-opacity-20 ${poppedColors.join(
                      " "
                    )}`}
                  >
                    {tag}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  posts: posts;
  tags: string[];
  topPostSlugs: string[];
}> = async () => {
  const postSlugs = fs.readdirSync("public/posts", "utf-8");
  let posts: posts = {};
  postSlugs.forEach((postSlug) => {
    const postFile = fs.readFileSync(
      `public/posts/${postSlug}/${postSlug}.mdx`,
      "utf-8"
    );
    const { data: metaData } = matter(postFile);
    posts[postSlug] = metaData as postMetadata;
  });

  const topPostSlugs = Object.keys(posts)
    .sort((postSlug1, postSlug2) =>
      posts[postSlug1].views > posts[postSlug2].views ? -1 : 1
    )
    .slice(0, 3);

  const tags = [
    ...Array.from(
      Object.keys(posts).reduce((prev, curr) => {
        return new Set([...Array.from(prev), ...posts[curr].tags]);
      }, new Set<string>())
    ),
  ];

  return {
    props: { posts, tags, topPostSlugs },
  };
};

export default Home;
