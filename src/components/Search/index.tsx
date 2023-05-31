import { Dispatch, FC, SetStateAction, useState } from "react";
import { Box, Flex, Input } from "@chakra-ui/react";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { ApiInfo } from "@/pages";
import SearchResults from "@/components/Search/SearchResults";

export const SearchComponent: FC<{ apiInfo: ApiInfo }> = ({ apiInfo }) => {
  // Debounced controlled search input, to prevent search from spamming whenever input is changed
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedSearch = useDebouncedState(searchInput, 1000);

  return (
    <Box>
      <SearchHeader setSearchInput={setSearchInput} />

      <SearchResults searchInput={debouncedSearch} apiInfo={apiInfo} />
    </Box>
  );
};

// Auto search after input field is changed
const SearchHeader: FC<{
  setSearchInput: Dispatch<SetStateAction<string>>;
}> = ({ setSearchInput }) => {
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