import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FontLoader } from "./FontLoader";
import { MoonIcon, SearchIcon, SunIcon } from "./icons";

interface LayoutProps {
  pathname?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex items-center justify-center px-6">
        <div className="flex flex-col items-center justify-center w-full max-w-141">
          <div className="flex items-center justify-between w-full mt-10 sm:mt-15">
            <div className="flex items-center space-x-6 text-xs font-medium text-gray-500 font-inter dark:text-gray-300">
              <Link href="/" passHref>
                <span
                  className={`cursor-pointer ${
                    router.pathname === "/"
                      ? "font-bold text-gray-900 dark:text-white"
                      : ""
                  }`}
                >
                  Home
                </span>
              </Link>
              <Link href="/about" passHref>
                <span
                  className={`cursor-pointer ${
                    router.pathname === "/about"
                      ? "font-bold text-gray-900 dark:text-white"
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
                      ? "font-bold text-gray-900 dark:text-white"
                      : ""
                  }`}
                >
                  Posts
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-gray-900 dark:text-white">
              <button
                onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
                className="transition duration-200 bg-gray-100 rounded-md w-7 h-7 hover:ring-2 hover:ring-gray-200 dark:bg-gray-600 dark:hover:ring-gray-400"
              >
                {theme == "light" ? <MoonIcon /> : <SunIcon />}
              </button>
              <button className="transition duration-200 rounded-md w-7 h-7 hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-700">
                <SearchIcon />
              </button>
            </div>
          </div>

          {children}
          <FontLoader />
        </div>
      </div>
    </>
  );
};
