import { FC } from "react";
import useBookmarkHook, { GifObject } from "@/hooks/useBookmarks";
import { Box, Flex, IconButton, Image, Skeleton, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Gif: FC<{ image: GifObject }> = ({ image }) => {
  const {
    images: { preview_gif },
    title,
    username,
  } = image;

  const { saveGif } = useBookmarkHook();
  return (
    <Flex pos={"relative"}>
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

      <Box>
        <Image
          src={preview_gif.url}
          alt={title || "Gif"}
          boxSize={"160px"}
          borderRadius={"5px"}
          boxShadow={"normal"}
          fallback={<Skeleton h={"160px"} w={"160px"} borderRadius={"5px"} />}
        />

        <Text maxWidth={"160px"}>{title}</Text>
        <Text maxWidth={"160px"}>{username}</Text>
      </Box>
    </Flex>
  );
};

export default Gif;