import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { ViewIcon } from "~/components";
import { posts } from "~/utils/types";

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Posts - Jeina</title>
      </Head>

      <div className="flex-col mb-24 space-y-16 mt-21">
        {Object.keys(posts)
          .sort((postSlug1, postSlug2) =>
            posts[postSlug1].date > posts[postSlug2].date ? -1 : 1
          )
          .map((postSlug) => {
            const post = posts[postSlug];
            return (
              <Link key={postSlug} href={`/post/${postSlug}`} passHref>
                <div className="flex flex-col w-full cursor-pointer">
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
              </Link>
            );
          })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  posts: posts;
}> = async () => {
  const postSlugs = fs.readdirSync("public/posts", "utf-8");
  let posts: posts = {};
  postSlugs.forEach((postSlug) => {
    const postFile = fs.readFileSync(
      `public/posts${postSlug}/${postSlug}.mdx`,
      "utf-8"
    );
    const { data: metaData } = matter(postFile);
    posts[postSlug] = metaData;
  });

  return {
    props: { posts },
  };
};

export default Posts;
