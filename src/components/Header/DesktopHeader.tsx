import { FC } from "react";
import { useRouter } from "next/router";
import { Button, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

const DesktopMenu: FC = () => {
  const { asPath } = useRouter();
  return (
    <Flex h={"headerHeight"} m={"headerPadding"}>
      {asPath !== "/" ? (
        <Button as={NextLink} href={"/"}>
          Search
        </Button>
      ) : null}

      {asPath !== "/bookmarks" ? (
        <Button as={NextLink} href={"bookmarks"}>
          Bookmarks
        </Button>
      ) : null}
    </Flex>
  );
};

export default DesktopMenu;