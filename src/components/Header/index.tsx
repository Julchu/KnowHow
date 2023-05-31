import { FC } from "react";
import { Box, Show } from "@chakra-ui/react";
import MobileMenu from "@/components/Header/MobileHeader";
import DesktopMenu from "@/components/Header/DesktopHeader";

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

export default Header;