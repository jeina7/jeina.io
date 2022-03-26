import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Jeina's DevLog"}</title>
      </Head>

      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <p className="text-4xl font-extrabold">Jeina</p>
          <p className="">
            <span>Full Stack Developer in</span>
            <span>GROOMATA</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
