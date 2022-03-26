import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MoonIcon, SearchIcon } from "./icons";

interface LayoutProps {
  pathname?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-center px-5">
        <div className="flex flex-col items-center justify-center w-full max-w-141">
          <div className="flex items-center justify-between w-full mt-15">
            <div className="flex items-center space-x-6 text-xs font-medium text-gray-500">
              <Link href="/" passHref>
                <span
                  className={`cursor-pointer ${
                    router.pathname === "/" ? "font-bold text-gray-900" : ""
                  }`}
                >
                  Home
                </span>
              </Link>
              <Link href="/about" passHref>
                <span
                  className={`cursor-pointer ${
                    router.pathname === "/about"
                      ? "font-bold text-gray-900"
                      : ""
                  }`}
                >
                  About
                </span>
              </Link>
              <Link href="/posts" passHref>
                <span
                  className={`cursor-pointer ${
                    router.pathname === "/posts"
                      ? "font-bold text-gray-900"
                      : ""
                  }`}
                >
                  Posts
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <MoonIcon className="bg-gray-100 rounded-md cursor-pointer w-7 h-7" />
              <SearchIcon className="rounded-md w-7 h-7 hover:bg-gray-100" />
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};
