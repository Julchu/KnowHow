import { FC, useCallback } from "react";
import { ApiInfo } from "@/pages";
import useBookmarkHook, { GifObject } from "@/hooks/useBookmarks";
import useSWR, { Fetcher } from "swr";
import { AbsoluteCenter, IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import Gif from "@/components/Gif";
import { AddIcon } from "@chakra-ui/icons";

const SearchResults: FC<{ searchInput: string; apiInfo: ApiInfo }> = ({
  searchInput = "",
  apiInfo: { giphyUrl, giphyKey },
}) => {
  /** useSWR/fetcher allows typing when fetching data from API
   * Typing data as Gif.tsx[] allows us to expect data when mapping and rendering items in grid
   */
  const fetcher: Fetcher<{ data: GifObject[] }, string> = (url: string) =>
    fetch(url).then((r) => {
      return r.json();
    });

  const { data, error, isLoading } = useSWR(
    `https://${giphyUrl}/search?api_key=${giphyKey}&q=${searchInput}`,
    fetcher
  );

  if (error) return <AbsoluteCenter>Error loading gifs</AbsoluteCenter>;
  if (isLoading) return <AbsoluteCenter>Loading gifs</AbsoluteCenter>;

  // Simple grid of images with max height of 160px per item, with auto widths (resized based on height of 160px)
  return (
    <Wrap p={"headerPadding"} spacing={"headerPadding"}>
      {data
        ? data.data.map((image, index) => {
            return (
              <WrapItem key={`gifItem_${index}`}>
                {/* Each item might not have a preview_webp URL, but should have preview_gif URL */}
                <Gif image={image} icon={<SaveButton image={image} />} />
              </WrapItem>
            );
          })
        : null}
    </Wrap>
  );
};

const SaveButton: FC<{ image: GifObject }> = ({ image }) => {
  /* Saving Gif to bookmarks */
  const { saveGif } = useBookmarkHook();
  const onClickHandler = useCallback(() => {
    saveGif(image);
  }, [image, saveGif]);
  return (
    <IconButton
      bg={"white"}
      aria-label="Save gif"
      size="sm"
      icon={<AddIcon />}
      pos={"absolute"}
      top={"10px"}
      right={"10px"}
      onClick={onClickHandler}
    />
  );
};

export default SearchResults;