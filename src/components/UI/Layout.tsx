import { FC, ReactNode } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

/**
 * Layout servers as a base "body" wrapper with limited constraints
 * * Includes removed padding, full screen width/height for desktop/mobile
 * * Adds a container to limit app to the width of 80em, Chakra's default XL breakpoint width
 */
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Container
      maxW={"container.xl"}
      p={{ base: "0px" }}
      height={{ base: "100svh", sm: "100vh" }}
      width={{ sm: "100vw" }}
    >
      <Header />
      <>{children}</>
    </Container>
  );
};

const Header: FC = () => {
  const { colorMode, setColorMode } = useColorMode();
  const { asPath } = useRouter();
  return (
    <Box display={{ base: "flex", sm: "block" }} float={{ sm: "right" }}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuOptionGroup
            title="Color mode"
            type="radio"
            onChange={(e) => {
              setColorMode(e as "light" | "dark");
            }}
          >
            <MenuItemOption
              closeOnSelect={false}
              value={"light"}
              bg={colorMode === "light" ? "knowHowGreen" : ""}
            >
              Light
            </MenuItemOption>
            <MenuItemOption
              closeOnSelect={false}
              value={"dark"}
              bg={colorMode === "dark" ? "knowHowGreen" : ""}
            >
              Dark
            </MenuItemOption>
          </MenuOptionGroup>

          <MenuDivider />
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
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Layout;