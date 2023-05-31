import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Box, Flex, GridItem, Input, SimpleGrid } from "@chakra-ui/react";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import useSWR, { Fetcher } from "swr";
import { ApiInfo } from "@/pages";
import useBookmarkHook from "@/hooks/useBookmarks";

export const SearchComponent: FC<{ apiInfo: ApiInfo }> = ({ apiInfo }) => {
  // Debounced controlled search input, to prevent search from spamming whenever input is changed
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedSearch = useDebouncedState(searchInput, 1000);

  return (
    // Absolute center Chakra component centers content vertically and horizontally with absolute positions
    <Flex flexDir={"column"} display={"block"}>
      <SearchArea setSearchInput={setSearchInput} />

      <SearchResults searchInput={debouncedSearch} apiInfo={apiInfo} />
    </Flex>
  );
};

// Auto search after input field is changed
const SearchArea: FC<{ setSearchInput: Dispatch<SetStateAction<string>> }> = ({
  setSearchInput,
}) => {
  return (
    <Flex>
      <Box ml={"headerPadding"} my={"headerPadding"} w={"100%"}>
        <Input
          placeholder={"Search GIPHY"}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </Box>
    </Flex>
  );
};

type Gif = {
  bitly_gif_url: string;
  images: {
    "480w_still": {
      url: string;
    };
  };
  id: string;
};

const SearchResults: FC<{ searchInput: string; apiInfo: ApiInfo }> = ({
  searchInput = "",
  apiInfo: { giphyUrl, giphyKey },
}) => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    `https://${giphyUrl}/search?api_key=${giphyKey}&q=${searchInput}`,
    fetcher
  );

  useEffect(() => {
    console.log("Data:", data);
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Box>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        {data
          ? data.data.map(({ bitly_gif_url, images, id }, index) => {
              return <GridItem key={`gifItem_${index}`}>{id}</GridItem>;
            })
          : null}
      </SimpleGrid>
    </Box>
  );
};