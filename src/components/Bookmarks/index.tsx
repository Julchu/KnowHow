import { FC, useCallback } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import BookmarkResults from "@/components/Bookmarks/BookmarkResults";
import useBookmarkHook from "@/hooks/useBookmarks";

const Bookmarks: FC = () => {
  /* Setting useBookmarkHook values at parent for better rendering to children;
   * Fixes clearing bookmarks re-rendering
   */

  const [{ clearGifs, removeGif }, currentBookmarks] = useBookmarkHook();

  const onClearHandler = useCallback(() => {
    clearGifs();
  }, [clearGifs]);

  /* Saving Gif to bookmarks */
  const onRemoveHandler = useCallback(
    (index: number) => {
      removeGif(index);
    },
    [removeGif]
  );

  return (
    <Box>
      {/* Bookmark header just used to mimic spacing on Search page */}
      <BookmarkHeader onClearHandler={onClearHandler} />

      <BookmarkResults
        onRemoveHandler={onRemoveHandler}
        currentBookmarks={currentBookmarks}
      />
    </Box>
  );
};

// Appending a clear button to header area; ends up next to Search nav button
const BookmarkHeader: FC<{ onClearHandler: () => void }> = ({
  onClearHandler,
}) => {
  return (
    <Flex>
      <Flex
        ml={"headerPadding"}
        my={"headerPadding"}
        w={"100%"}
        flexDir={"row"}
      >
        <Button variant={"navButton"} ml={"auto"} onClick={onClearHandler}>
          Clear
        </Button>
      </Flex>
    </Flex>
  );
};

export default Bookmarks;