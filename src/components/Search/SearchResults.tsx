import { FC } from "react";
import { ApiInfo } from "@/pages";
import { GifObject } from "@/hooks/useBookmarks";
import useSWR, { Fetcher } from "swr";
import { AbsoluteCenter, Wrap, WrapItem } from "@chakra-ui/react";
import Gif from "@/components/Gif";

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
                <Gif image={image} />
              </WrapItem>
            );
          })
        : null}
    </Wrap>
  );
};

export default SearchResults;