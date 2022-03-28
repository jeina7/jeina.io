import fs from "fs";
import matter from "gray-matter";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";
import { PostCard } from "~/components";
import { defaultOpenGraph, defaultSeo } from "~/lib/seo";
import { postMetadata, posts } from "~/utils/types";

const Tag = ({
  tag,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const seo: NextSeoProps = {
    title: tag,
    openGraph: {
      images: [{ url: "/path/to/image" }],
      ...defaultOpenGraph,
    },
    ...defaultSeo,
    description: `${tag} – Jeina의 블로그입니다`,
  };

  return (
    <>
      <NextSeo {...seo} />

      <p className="flex items-center justify-start w-full mb-12 text-4xl font-black mt-21 font-pretendard">
        #{tag}
      </p>

      <div className="flex flex-col w-full mb-24 space-y-13">
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
  tag: string;
}> = async ({ params }) => {
  const postSlugs = fs.readdirSync("public/posts", "utf-8");
  let posts: posts = {};
  postSlugs.forEach((postSlug) => {
    const postFile = fs.readFileSync(
      `public/posts/${postSlug}/${postSlug}.mdx`,
      "utf-8"
    );
    const { data: metaData } = matter(postFile);
    const tags = metaData["tags"];
    if (params && tags.includes(params.tag as string))
      posts[postSlug] = metaData as postMetadata;
  });

  return {
    props: { posts, tag: params?.tag as string },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
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

  const tags = [
    ...Array.from(
      Object.keys(posts).reduce((prev, curr) => {
        return new Set([...Array.from(prev), ...posts[curr].tags]);
      }, new Set<string>())
    ),
  ];

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    }),
    fallback: false,
  };
};

export default Tag;
