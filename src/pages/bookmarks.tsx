import Head from "next/head";
import Layout from "@/components/UI/Layout";
import Bookmarks from "@/components/Bookmarks";

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
          <Bookmarks />
        </Layout>
      </main>
    </>
  );
};

export default BookmarksPage;