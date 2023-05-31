import { FC, ReactNode } from "react";
import { GifObject } from "@/hooks/useBookmarks";
import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";

const Gif: FC<{
  image: GifObject;
  icon: ReactNode;
}> = ({ image, icon }) => {
  const {
    images: { preview_gif },
    title,
    username,
  } = image;

  return (
    <Flex pos={"relative"}>
      {icon}
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