import { defineStyleConfig } from "@chakra-ui/react";

// Customizing reusable Chakra Link component
const Link = defineStyleConfig({
  baseStyle: {
    border: "none",
    _hover: "none",
  },
});

export default Link;