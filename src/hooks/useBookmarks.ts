import { useCallback, useEffect, useState } from "react";

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

const useBookmarkHook = (): [BookmarkMethods, GifObject[]] => {
  const [currentBookmarks, setCurrentBookmarks] = useState<GifObject[]>([]);

  useEffect(() => {
    const bookmarks = localStorage.getItem("bookmarkedGifs");
    // JSON.parse expects non-empty string to parse; if nothing to bookmark, return empty array
    if (bookmarks) {
      const parsedBookmarks = JSON.parse(bookmarks);
      setCurrentBookmarks(parsedBookmarks);
    }
  }, []);

  // Pulls data from localStorage as source of truth; updates currentBookmarks state
  const getGifs = useCallback<BookmarkMethods["getGifs"]>(() => {
    const bookmarks = localStorage.getItem("bookmarkedGifs");
    // JSON.parse expects non-empty string to parse; if nothing to bookmark, return empty array
    if (bookmarks) {
      const parsedBookmarks = JSON.parse(bookmarks);
      setCurrentBookmarks(parsedBookmarks);
      return parsedBookmarks;
    }
    return [];
  }, []);

  // Saves gifs by appending them to currentBookmarks state then saving them to localStorage
  const saveGif = useCallback<BookmarkMethods["saveGif"]>(
    (item) => {
      const bookmarks = [...currentBookmarks, item];
      localStorage.setItem("bookmarkedGifs", JSON.stringify(bookmarks));
      setCurrentBookmarks(bookmarks);
    },
    [currentBookmarks]
  );

  // Using slice since splicing state array can get finicky
  const removeGif = useCallback<BookmarkMethods["removeGif"]>(
    (index) => {
      const bookmarks = [
        ...currentBookmarks.slice(0, index),
        ...currentBookmarks.slice(index + 1),
      ];
      localStorage.setItem("bookmarkedGifs", JSON.stringify(bookmarks));
      setCurrentBookmarks(bookmarks);
    },
    [currentBookmarks]
  );

  // For testing purposes; clear all gifs from localStorage
  const clearGifs = useCallback<BookmarkMethods["clearGifs"]>(() => {
    setCurrentBookmarks(getGifs());
    setCurrentBookmarks([]);
    localStorage.clear();
  }, [getGifs]);

  return [{ getGifs, saveGif, removeGif, clearGifs }, currentBookmarks];
};

export default useBookmarkHook;