import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    letterSpacing: "2px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "normal",
    transition: "box-shadow 0.2s ease-in-out",
    _hover: { boxShadow: "hover" },
    _focus: { boxShadow: "focus" },
  },
  sizes: {},
  variants: {
    navButton: {
      w: "160px",
    },
  },
});

export default Button;