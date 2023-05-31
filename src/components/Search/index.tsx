import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import useSWR from "swr";
import { ApiInfo } from "@/pages";

export const SearchComponent: FC<{ apiInfo: ApiInfo }> = ({ apiInfo }) => {
  // Debounced controlled search input
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedSearch = useDebouncedState(searchInput, 1000);

  useEffect(() => {
    console.log(debouncedSearch);
  }, [debouncedSearch]);

  return (
    // Absolute center Chakra component centers content vertically and horizontally with absolute positions
    <Flex h={"100%"} flexDir={"column"}>
      <SearchArea setSearchInput={setSearchInput} />

      <SearchResults searchInput={debouncedSearch} apiInfo={apiInfo} />
    </Flex>
  );
};

const SearchArea: FC<{ setSearchInput: Dispatch<SetStateAction<string>> }> = ({
  setSearchInput,
}) => {
  return (
    <Flex mt={"30px"}>
      <Input
        placeholder={"Search GIPHY"}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
    </Flex>
  );
};

const SearchResults: FC<{ searchInput: string; apiInfo: ApiInfo }> = ({
  searchInput = "",
  apiInfo: { giphyUrl, giphyKey },
}) => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(
    `https://${giphyUrl}?api_key=${giphyKey}&q=${searchInput}`,
    fetcher
  );

  useEffect(() => {
    console.log("Data:", data);

    localStorage.setItem("name", JSON.stringify(data));
    sessionStorage.setItem("name", JSON.stringify(data));
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return <Box>Search Area</Box>;
};