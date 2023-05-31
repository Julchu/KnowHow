import { Text } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "@/components/UI/Layout";

const BookmarksPage = () => {
  return (
    <>
      <Head>
        <title>Bookmarks</title>
        <meta
          name="Bookmarked gifs"
          content="Featuring Giphy Search and Bookmarks"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Layout>
          {/* Basic home screen with Search/Bookmarks nav button */}
          <Text>Bookmarks</Text>
        </Layout>
      </main>
    </>
  );
};

export default BookmarksPage;