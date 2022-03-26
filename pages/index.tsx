import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PostIcon, TagIcon, ViewIcon } from "~/components";
import { posts } from "~/utils/types";

const labelLightBackgrounds = [
  "bg-label-light-pink",
  "bg-label-light-mint",
  "bg-label-light-green",
  "bg-label-light-blue",
  "bg-label-light-rose",
  "bg-label-light-mango",
];

const Home = ({
  posts,
  tags,
  topPostSlugs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let poppingLabelBackgrounds = [...labelLightBackgrounds];

  return (
    <>
      <Head>
        <title>{"Jeina's DevLog"}</title>
      </Head>

      <div className="flex items-center justify-between w-full my-17">
        <div className="flex flex-col">
          <p className="mb-2 text-4xl font-extrabold">Jeina</p>
          <p className="mb-1.5 text-xs text-gray-600">
            <span className="mr-1 font-extralight">
              Full Stack Developer in
            </span>
            <span className="font-bold">GROOMATA</span>
          </p>
          <p className="text-xs font-thin leading-relaxed w-80">
            그루마타에서 풀스택 개발자를 맡고 있습니다. 웹 개발과 서버리스,
            리액트와 넥스트 제이에스를 가르칩니다.
          </p>
        </div>
        <div className="overflow-hidden rounded-full w-34 h-34">
          <Image
            src="/profile.png"
            alt="Jeina's profile"
            width={136}
            height={136}
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex items-center justify-start mb-4">
          <span className="mr-1.5 text-3xl font-extrabold">Post</span>
          <PostIcon className="mt-0.5" />
        </div>

        <div className="flex-col space-y-16 mb-29">
          {topPostSlugs.map((postSlug) => {
            const post = posts[postSlug];
            return (
              <div key={postSlug} className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-lg font-bold">{post.title}</span>

                  <div className="flex">
                    <ViewIcon className="text-gray-600" />
                    <span className="text-xxs ml-0.5 text-gray-600">
                      {new Intl.NumberFormat().format(post.views)}
                    </span>
                  </div>
                </div>

                <p className="w-full text-sm font-thin text-justify leading-more-relaxed">
                  {post.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col w-full mb-24">
          <div className="flex items-center justify-start mb-4">
            <span className="mr-1.5 text-3xl font-extrabold">Tags</span>
            <TagIcon />
          </div>

          <div>
            {tags.map((tag, idx) => {
              if (idx % labelLightBackgrounds.length == 0) {
                poppingLabelBackgrounds = [...labelLightBackgrounds];
              }

              const poppingIdx = Math.floor(
                Math.random() * poppingLabelBackgrounds.length
              );
              const poppedBackground = poppingLabelBackgrounds.splice(
                poppingIdx,
                1
              );

              return (
                <div
                  key={tag}
                  className={`inline-block px-2.5 py-1 text-white font-extralight rounded-full text-xxs mr-1 mb-1 ${poppedBackground}`}
                >
                  {tag}
                </div>
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
    posts[postSlug] = metaData;
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
  console.log(tags);

  return {
    props: { posts, tags, topPostSlugs },
  };
};

export default Home;
