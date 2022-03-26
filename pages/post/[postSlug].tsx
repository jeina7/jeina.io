import fs from "fs";
import matter from "gray-matter";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import { SlashIcon } from "~/components";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{`${post.metaData.title} - Jeina`}</title>
      </Head>

      <p className="mb-5 text-4xl font-black leading-snug mt-18">
        {post.metaData.title}
      </p>

      <div className="w-full font-light leading-more-relaxed mdx">
        <MDXRemote {...post.content} />
      </div>

      <SlashIcon className="mt-21 mb-11" />

      <div className="flex flex-col items-center mb-20 space-y-3">
        <p className="text-xs tracking-widest font-extralight">
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
            src="/profile.png"
            width={32}
            height={32}
            alt="Jeina's profile"
          />
        </div>
        <p className="font-light">Jeina</p>
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
}> = async ({ params }) => {
  const postFile = fs.readFileSync(
    path.join(`public/posts/${params?.postSlug}.mdx`),
    "utf-8"
  );
  const { data: metaData, content } = matter(postFile);
  const post = { metaData, content: await serialize(content) };

  return {
    props: { post },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFiles = fs.readdirSync("public/posts", "utf-8");
  return {
    paths: postFiles.map((fileName) => {
      return {
        params: {
          postSlug: fileName.split(".")[0],
        },
      };
    }),
    fallback: false,
  };
};

export default Post;