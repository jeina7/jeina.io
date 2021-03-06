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
        <div className="flex items-start justify-between w-full mb-1.5 sm:mb-2">
          <div className="w-80 sm:w-auto">
            <span className="text-lg font-bold">{postTitle}</span>
          </div>

          <div className="flex mt-1.5 ml-4 text-gray-600 dark:text-gray-400 sm:mt-1.5">
            <ViewIcon />
            <span className="text-xxs ml-0.5">
              {new Intl.NumberFormat().format(views)}
            </span>
          </div>
        </div>

        <p className="w-full text-sm font-light text-justify leading-more-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};
