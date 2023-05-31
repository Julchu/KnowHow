import { FC } from "react";
import {
  AbsoluteCenter,
  Heading,
  IconButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import Gif from "@/components/Gif";
import { GifObject } from "@/hooks/useBookmarks";

const BookmarkResults: FC<{
  onRemoveHandler: (index: number) => void;
  currentBookmarks: GifObject[];
}> = ({ onRemoveHandler, currentBookmarks }) => {
  if (!currentBookmarks.length)
    return (
      <AbsoluteCenter>
        <Heading>No bookmarks</Heading>
      </AbsoluteCenter>
    );

  return (
    <Wrap p={"headerPadding"} spacing={"headerPadding"}>
      {currentBookmarks.length > 0
        ? currentBookmarks.map((image, index) => {
            return (
              <WrapItem key={`gifItem_${index}`}>
                <Gif
                  image={image}
                  icon={
                    <DeleteButton
                      index={index}
                      onClickHandler={onRemoveHandler}
                    />
                  }
                />
              </WrapItem>
            );
          })
        : null}
    </Wrap>
  );
};

const DeleteButton: FC<{
  index: number;
  onClickHandler: (index: number) => void;
}> = ({ index, onClickHandler }) => {
  return (
    <IconButton
      bg={"white"}
      aria-label="Save gif"
      size="sm"
      icon={<DeleteIcon />}
      pos={"absolute"}
      top={"10px"}
      right={"10px"}
      onClick={() => onClickHandler(index)}
    />
  );
};

export default BookmarkResults;