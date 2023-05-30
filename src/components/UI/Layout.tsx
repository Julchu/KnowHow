import { FC, ReactNode } from "react";
import {
  Box,
  Button,
  Container,
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
import { useRouter } from "next/router";

/**
 * Layout servers as a base "body" wrapper with limited constraints
 * * Includes removed padding, full screen width/height for desktop/mobile
 * * Adds a container to limit app to the width of 80em, Chakra's default XL breakpoint width
 */
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box h={{ base: "100svh", sm: "100vh" }} w={{ sm: "100vw" }}>
      <Container maxW={"container.xl"} p={{ base: "0px" }} h={"100%"}>
        <Header />
        {children}
      </Container>
    </Box>
  );
};

const Header: FC = () => {
  const { asPath } = useRouter();
  return (
    <Box display={{ base: "flex", sm: "block" }} float={"right"}>
      {/* Desktop button layout */}
      <Show above={"sm"}>
        <Button as={NextLink} href={"/"}>
          Search
        </Button>
        <Button as={NextLink} href={"bookmarks"}>
          Bookmarks
        </Button>
      </Show>

      {/* Mobile hamburger menu */}
      <Show below={"sm"}>
        <Menu>
          <MenuButton
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
      </Show>
    </Box>
  );
};

export default Layout;