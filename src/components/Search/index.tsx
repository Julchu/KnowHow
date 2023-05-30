import { FC, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { useDebouncedState } from "@/hooks/useDebouncedState";

export const SearchArea: FC = () => {
  // Debounced controlled search input
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedSearch = useDebouncedState(searchInput, 1000);

  return (
    // Absolute center Chakra component centers content vertically and horizontally with absolute positions
    <Box>
      <Input placeholder={"Search gif"} />
    </Box>
  );
};