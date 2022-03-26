import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ViewIcon } from "~/components";
import { posts } from "~/data/posts";

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts - Jeina</title>
      </Head>

      <div className="flex-col mb-24 space-y-16 mt-21">
        {Object.keys(posts)
          .sort((postSlug1, postSlug2) =>
            posts[postSlug1].views > posts[postSlug2].views ? -1 : 1
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

export default Posts;
