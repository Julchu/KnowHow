import { FC, useCallback, useMemo } from "react";
import useBookmarkHook from "@/hooks/useBookmarks";
import { IconButton, Wrap, WrapItem } from "@chakra-ui/react";
import Gif from "@/components/Gif";
import { DeleteIcon } from "@chakra-ui/icons";

const Bookmarks: FC = () => {
  const { getGifs } = useBookmarkHook();
  const bookmarks = useMemo(() => {
    return getGifs();
  }, [getGifs]);

  // Simple grid of images with max height of 160px per item, with auto widths (resized based on height of 160px)
  return (
    <Wrap p={"headerPadding"} spacing={"headerPadding"}>
      {bookmarks
        ? bookmarks.map((image, index) => {
            return (
              <WrapItem key={`gifItem_${index}`}>
                {/* Each item might not have a preview_webp URL, but should have preview_gif URL */}
                <Gif image={image} icon={<DeleteButton index={index} />} />
              </WrapItem>
            );
          })
        : null}
    </Wrap>
  );
};

const DeleteButton: FC<{ index: number }> = ({ index }) => {
  /* Saving Gif to bookmarks */
  const { removeGif } = useBookmarkHook();
  const onClickHandler = useCallback(() => {
    removeGif(index);
  }, [index, removeGif]);

  return (
    <IconButton
      bg={"white"}
      aria-label="Save gif"
      size="sm"
      icon={<DeleteIcon />}
      pos={"absolute"}
      top={"10px"}
      right={"10px"}
      onClick={onClickHandler}
    />
  );
};

export default Bookmarks;