import { FC } from "react";
import useBookmarkHook, { GifObject } from "@/hooks/useBookmarks";
import { Box, IconButton, Image, Skeleton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Gif: FC<{ image: GifObject }> = ({ image }) => {
  const {
    images: { preview_gif },
    title,
  } = image;

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
        top={"10px"}
        right={"10px"}
        onClick={() => {
          saveGif(image);
        }}
      />

      <Image
        src={preview_gif.url}
        alt={title || "Gif"}
        h={"160px"}
        borderRadius={"5px"}
        boxShadow={"normal"}
        fallback={<Skeleton h={"160px"} w={"160px"} borderRadius={"5px"} />}
      />
    </Box>
  );
};

export default Gif;