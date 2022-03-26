import Link from "next/link";
import React from "react";
import { MoonIcon, SearchIcon } from "./icons";

interface LayoutProps {
  pageTitle?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <div className="flex items-center justify-center px-5">
        <div className="flex flex-col w-full items-center justify-center max-w-141">
          <div className="flex w-full items-center justify-between mt-15 mb-18">
            <div className="flex items-center space-x-6 text-gray-500 font-medium text-xs">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/posts">Posts</Link>
            </div>

            <div className="flex items-center space-x-2">
              <MoonIcon className="w-7 h-7 rounded-md bg-gray-100 cursor-pointer" />
              <SearchIcon className="w-7 h-7 rounded-md hover:bg-gray-100" />
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};
