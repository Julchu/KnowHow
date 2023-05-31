import { useCallback } from "react";

export type GifObject = {
  images: {
    preview_gif: {
      url: string;
    };
  };
  title: string;
  username: string;
  id: string;
};

type BookmarkMethods = {
  getGifs: () => GifObject[];
  saveGif: (item: GifObject) => void;
  removeGif: (index: number) => void;
  clearGifs: () => void;
};

const useBookmarkHook = (): BookmarkMethods => {
  const getGifs = useCallback<BookmarkMethods["getGifs"]>(() => {
    const bookmarks = localStorage.getItem("bookmarkedGifs");
    // JSON.parse expects non-empty string to parse; if nothing to bookmark, return empty array
    if (bookmarks) return JSON.parse(bookmarks);
    return [];
  }, []);

  const saveGif = useCallback<BookmarkMethods["saveGif"]>(
    (item) => {
      const currentBookmarks = getGifs();
      const bookmarks = JSON.stringify([...currentBookmarks, item]);
      localStorage.setItem("bookmarkedGifs", bookmarks);
    },
    [getGifs]
  );

  const removeGif = useCallback<BookmarkMethods["removeGif"]>(
    (index) => {
      const currentBookmarks = getGifs();
      const bookmarks = JSON.stringify([currentBookmarks.splice(index)]);
      localStorage.setItem("bookmarkedGifs", bookmarks);
    },
    [getGifs]
  );

  const clearGifs = useCallback<BookmarkMethods["clearGifs"]>(() => {
    localStorage.clear();
  }, []);

  return { getGifs, saveGif, removeGif, clearGifs };
};

export default useBookmarkHook;