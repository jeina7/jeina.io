import fs from "fs";
import matter from "gray-matter";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import Head from "next/head";
import Link from "next/link";
import { PostCard, ViewIcon } from "~/components";
import { defaultOpenGraph, defaultSeo } from "~/lib/seo";
import { posts } from "~/utils/types";

const seo: NextSeoProps = {
  title: "Posts",
  openGraph: { ...defaultOpenGraph },
  ...defaultSeo,
};

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo {...seo} />

      <div className="flex flex-col w-full mb-15 sm:mb-24 space-y-13 mt-18 sm:mt-21">
        {Object.keys(posts)
          .sort((postSlug1, postSlug2) =>
            posts[postSlug1].date > posts[postSlug2].date ? -1 : 1
          )
          .map((postSlug) => {
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
      `public/posts/${postSlug}/${postSlug}.mdx`,
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
