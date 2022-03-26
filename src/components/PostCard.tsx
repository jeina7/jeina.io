import Link from "next/link";
import React, { Key } from "react";
import { ViewIcon } from "./icons";

interface PostCardProps {
  postSlug: string;
  postTitle: string;
  views: number;
  description: string;
}

export const PostCard: React.FC<PostCardProps> = ({
  postSlug,
  postTitle,
  views,
  description,
}) => {
  return (
    <Link key={postSlug} href={`/post/${postSlug}`} passHref>
      <div className="flex flex-col w-full cursor-pointer">
        <div className="flex items-center justify-between w-full mb-2">
          <span className="text-lg font-bold">{postTitle}</span>

          <div className="flex text-gray-600 dark:text-gray-400">
            <ViewIcon />
            <span className="text-xxs ml-0.5">
              {new Intl.NumberFormat().format(views)}
            </span>
          </div>
        </div>

        <p className="w-full text-sm font-thin text-justify leading-more-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};
