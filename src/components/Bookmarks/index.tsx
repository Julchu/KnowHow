import { FC } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import BookmarkResults from "@/components/Bookmarks/BookmarkResults";
import useBookmarkHook from "@/hooks/useBookmarks";

const Bookmarks: FC = () => {
  return (
    <Box>
      {/* Bookmark header just used to mimic spacing on Search page */}
      <BookmarkHeader />

      <BookmarkResults />
    </Box>
  );
};

const BookmarkHeader: FC = () => {
  const [{ clearGifs }] = useBookmarkHook();
  return (
    <Flex>
      <Flex
        ml={"headerPadding"}
        my={"headerPadding"}
        w={"100%"}
        flexDir={"row"}
      >
        <Button variant={"navButton"} ml={"auto"} onClick={() => clearGifs()}>
          Clear
        </Button>
      </Flex>
    </Flex>
  );
};

export default Bookmarks;