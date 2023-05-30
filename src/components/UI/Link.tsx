import { defineStyleConfig } from "@chakra-ui/react";

// Customizing reusable Chakra Link component
const Link = defineStyleConfig({
  baseStyle: {
    border: "none",
    letterSpacing: "2px",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "normal",
    transition: "box-shadow 0.2s ease-in-out",
    _hover: { base: "none", sm: { boxShadow: "hover" } },
    _focus: { boxShadow: "focus" },
  },
});

export default Link;