import { FC } from "react";
import { useRouter } from "next/router";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

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

export default MobileMenu;