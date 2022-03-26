import fs from "fs";
import matter from "gray-matter";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { ViewIcon } from "~/components";
import { posts } from "~/utils/types";

const Tag = ({
  tag,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{`${tag} - Jeina`}</title>
      </Head>

      <p className="flex items-center justify-start w-full mb-12 text-4xl font-black mt-21">
        #{tag}
      </p>

      <div className="flex-col mb-24 space-y-13">
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
      posts[postSlug] = metaData;
  });

  console.log(posts);

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
    posts[postSlug] = metaData;
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
