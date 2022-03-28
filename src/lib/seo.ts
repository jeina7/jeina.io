import { DefaultSeoProps, NextSeoProps, OpenGraph } from "next-seo/lib/types";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    site_name: "Jeina's Devlog",
  },
};

export default config;

export const defaultSeo: Partial<NextSeoProps> = {
  description: "Jeina의 블로그입니다.",
  titleTemplate: "%s – Jeina",
};

export const defaultOpenGraph: Partial<OpenGraph> = {
  images: [
    {
      url: "https://jeina.io/_next/image?url=%2Fprofile_1200x600.png&w=3840&q=75",
    },
  ],
};
