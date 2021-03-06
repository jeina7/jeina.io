import fs from "fs";
import matter from "gray-matter";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo, NextSeoProps } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { SlashIcon, ThreeDots } from "~/components";
import { defaultSeo } from "~/lib/seo";

const mdxComponents = (postSlug: string) => {
  return {
    ThreeDots: () => (
      <ThreeDots className="text-gray-400 my-14 sm:my-20 dark:text-gray-500" />
    ),
    Image: ({
      w = "w-130",
      src,
      width = 520,
      height,
      alt,
    }: {
      w: string;
      src: string;
      width: number;
      height: number;
      alt: string;
    }) => (
      <div className="flex items-center justify-center w-full my-10 sm:my-12">
        <div className={`flex ${w}`}>
          <Image
            src={`/posts/${postSlug}/images/${src}`}
            alt={alt}
            height={height}
            width={width}
          />
        </div>
      </div>
    ),
  };
};

const Post = ({
  post,
  postSlug,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const seo: NextSeoProps = {
    title: post.metaData.title,
    openGraph: {
      images: [{ url: "/path/to/image" }],
      type: "article",
      article: {
        authors: ["jeina"],
        publishedTime: post.metaData.date,
        tags: post.metaData.tags,
      },
    },
    ...defaultSeo,
    description: `${post.metaData.description} ${post.metaData.tags.join(" ")}`,
  };

  return (
    <>
      <NextSeo {...seo} />

      <p className="mb-5 text-4xl sm:text-4.5xl font-black leading-snug mt-18 font-pretendard">
        {post.metaData.title}
      </p>

      <div className="w-full mdx">
        <MDXRemote {...post.content} components={mdxComponents(postSlug)} />
      </div>

      <SlashIcon className="my-20" />

      <div className="flex mb-20">
        <Link href="/about" passHref>
          <div className="flex flex-col items-center space-y-3 cursor-pointer">
            <p className="text-xs tracking-widest font-extralight font-pretendard">
              {new Date(Date.parse(post.metaData.date)).toLocaleDateString(
                "en-En",
                {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }
              )}
            </p>
            <div className="w-8 h-8 overflow-hidden rounded-full">
              <Image
                src="/profile_240x240.png"
                width={32}
                height={32}
                alt="Jeina's profile"
              />
            </div>
            <p className="font-light">Jeina</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  post: {
    metaData: {
      [key: string]: any;
    };
    content: MDXRemoteSerializeResult<Record<string, unknown>>;
  };
  postSlug: string;
}> = async ({ params }) => {
  const postFile = fs.readFileSync(
    path.join(`public/posts/${params?.postSlug}/${params?.postSlug}.mdx`),
    "utf-8"
  );
  const { data: metaData, content } = matter(postFile);
  const post = {
    metaData,
    content: await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex as any],
      },
    }),
  };

  return {
    props: { post, postSlug: params?.postSlug as string },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postSlugs = fs.readdirSync("public/posts", "utf-8");
  return {
    paths: postSlugs.map((postSlug) => {
      return {
        params: {
          postSlug,
        },
      };
    }),
    fallback: false,
  };
};

export default Post;
