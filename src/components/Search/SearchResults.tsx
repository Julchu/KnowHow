import { FC } from "react";
import { ApiInfo } from "@/pages";
import useBookmarkHook, { GifObject } from "@/hooks/useBookmarks";
import useSWR, { Fetcher } from "swr";
import {
  AbsoluteCenter,
  Box,
  IconButton,
  Image,
  Skeleton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const SearchResults: FC<{ searchInput: string; apiInfo: ApiInfo }> = ({
  searchInput = "",
  apiInfo: { giphyUrl, giphyKey },
}) => {
  /** useSWR/fetcher allows typing when fetching data from API
   * Typing data as Gif[] allows us to expect data when mapping and rendering items in grid
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
        ? data.data.map(
            ({ images: { preview_webp, preview_gif }, title, id }, index) => {
              return (
                <WrapItem key={`gifItem_${index}`}>
                  {/* Each item might not have a preview_webp URL, but should have preview_gif URL */}
                  <Gif
                    src={preview_webp.url || preview_gif.url}
                    alt={title || "Gif"}
                    id={id}
                  />
                </WrapItem>
              );
            }
          )
        : null}
    </Wrap>
  );
};

const Gif: FC<{ src: string; alt: string; id: string }> = ({
  src,
  alt,
  id,
}) => {
  const { saveGif } = useBookmarkHook();
  return (
    <Box pos={"relative"}>
      {/* Saving Gif to bookmarks */}
      <IconButton
        bg={"white"}
        aria-label="Save gif"
        size="sm"
        icon={<AddIcon />}
        pos={"absolute"}
        top={"5px"}
        right={"5px"}
      />

      <Image
        src={src}
        alt={alt}
        h={"160px"}
        borderRadius={"5px"}
        fallback={<Skeleton h={"160px"} w={"160px"} borderRadius={"5px"} />}
      />
    </Box>
  );
};

export default SearchResults;