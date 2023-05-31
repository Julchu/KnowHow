import Head from "next/head";
import { FC } from "react";
import Layout from "@/components/UI/Layout";
import { SearchComponent } from "@/components/Search";
import { GetStaticProps } from "next";

export type ApiInfo = {
  giphyUrl: string;
  giphyKey: string;
};
const Home: FC<ApiInfo> = ({ giphyUrl, giphyKey }) => {
  const apiInfo = {
    giphyUrl,
    giphyKey,
  };
  return (
    <>
      <Head>
        <title>KnowHow React Technical Challenge</title>
        <meta
          name="Search gifs"
          content="Featuring Giphy Search and Bookmarks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          {/* Basic home screen with Search/Bookmarks nav button */}
          <SearchComponent apiInfo={apiInfo} />
        </Layout>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      giphyUrl: process.env.GIPHY_URL,
      giphyKey: process.env.GIPHY_KEY,
    },
  };
};

export default Home;