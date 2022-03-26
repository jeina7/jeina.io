import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { SlashIcon } from "~/components";
import { post, posts } from "~/data/posts";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>

      <p className="mb-5 text-4xl font-black leading-snug mt-18">
        {post.title}
      </p>
      <p className="font-light leading-more-relaxed">{post.body}</p>

      <SlashIcon className="mt-21 mb-11" />

      <div className="flex flex-col items-center mb-20 space-y-3">
        <p className="text-xs tracking-widest font-extralight">
          {new Date(Date.parse(post.date)).toLocaleDateString("en-En", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
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

export const getStaticProps: GetStaticProps<{ post: post }> = async ({
  params,
}) => {
  const post = posts[params?.postSlug as string];
  return {
    props: { postSlug: params?.postSlug, post },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: Object.keys(posts).map((postSlug) => {
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
