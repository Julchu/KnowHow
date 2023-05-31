import { useRouter } from "next/router";
import { FC } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header: FC = () => {
  return (
    <Box display={{ base: "flex", sm: "block" }} float={"right"}>
      {/* Desktop button layout */}
      <Show above={"sm"}>
        <DesktopMenu />
      </Show>

      {/* Mobile hamburger menu */}
      <Show below={"sm"}>
        <MobileMenu />
      </Show>
    </Box>
  );
};

const DesktopMenu: FC = () => {
  const { asPath } = useRouter();
  return (
    <Flex h={"headerHeight"} m={"headerPadding"}>
      <Button
        as={NextLink}
        href={"/"}
        bg={asPath === "/" ? "knowHowGreen" : ""}
      >
        Search
      </Button>
      <Button
        as={NextLink}
        href={"bookmarks"}
        ml={"headerPadding"}
        bg={asPath === "/bookmarks" ? "knowHowGreen" : ""}
      >
        Bookmarks
      </Button>
    </Flex>
  );
};

const MobileMenu: FC = () => {
  const { asPath } = useRouter();
  return (
    <Menu>
      <MenuButton
        m={"headerPadding"}
        as={IconButton}
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuGroup title="Links">
          <MenuItem
            as={NextLink}
            href={"/"}
            bg={asPath === "/" ? "knowHowGreen" : ""}
          >
            Search
          </MenuItem>
          <MenuItem
            as={NextLink}
            href={"bookmarks"}
            bg={asPath === "/bookmarks" ? "knowHowGreen" : ""}
          >
            Bookmarks
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default Header;