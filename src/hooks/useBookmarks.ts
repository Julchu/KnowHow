import { useCallback } from "react";

export type GifObject = {
  images: {
    preview_gif: {
      url: string;
    };
    preview_webp: {
      url: string;
    };
  };
  title: string;
  id: string;
};

type BookmarkMethods = {
  getGifs: () => unknown[];
  saveGif: (item: GifObject) => void;
  removeGif: (index: number) => void;
};

const useBookmarkHook = (): BookmarkMethods => {
  const getGifs = useCallback<BookmarkMethods["getGifs"]>(() => {
    const bookmarks = JSON.parse(localStorage.bookmarkedGifs);

    console.log(bookmarks);

    return bookmarks;
  }, []);

  const saveGif = useCallback<BookmarkMethods["saveGif"]>(
    (item) => {
      const currentBookmarks = getGifs();
      const bookmarks = JSON.stringify([currentBookmarks.push(item)]);
      localStorage.setItem("bookmarkedGifs", bookmarks);
    },
    [getGifs]
  );

  const removeGif = useCallback<BookmarkMethods["removeGif"]>((index) => {
    console.log(index);
  }, []);

  return { getGifs, saveGif, removeGif };
};

export default useBookmarkHook;