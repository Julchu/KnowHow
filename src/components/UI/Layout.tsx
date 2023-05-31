import { FC, ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";

/**
 * Layout servers as a base "body" wrapper with limited constraints
 * * Includes removed padding, full screen width/height for desktop/mobile
 * * Adds a container to limit app to the width of 80em, Chakra's default XL breakpoint width
 */
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box h={{ base: "100svh", sm: "100vh" }} w={{ sm: "100vw" }}>
      <Container maxW={"container.xl"} p={"0px"} h={"100%"}>
        <Header />
        {children}
      </Container>
    </Box>
  );
};

export default Layout;