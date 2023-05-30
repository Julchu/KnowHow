import Head from "next/head";
import { FC } from "react";
import { AbsoluteCenter, Button, Center, Heading } from "@chakra-ui/react";
import Layout from "@/components/UI/Layout";
import { SearchArea } from "@/components/Search";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>KnowHow React Technical Challenge</title>
        <meta
          name="description"
          content="Featuring Giphy Search and Bookmarks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          {/* Basic home screen with Search/Bookmarks nav button */}
          <SearchArea />
        </Layout>
      </main>
    </>
  );
};

export default Home;