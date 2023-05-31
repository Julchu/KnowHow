import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    letterSpacing: "2px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "normal",
    transition: "box-shadow 0.2s ease-in-out",
    _hover: { boxShadow: "hover" },
    _focus: { boxShadow: "focus" },
    fontWeight: 500,
    _invalid: {
      color: "red",
      fontWeight: 600,
      _placeholder: {
        color: "red",
      },
    },
    // Dark mode alternatives
    _dark: {},
  },
  element: {},
  addon: {},
});

// Default variant with empty field needed to reset some extra default Input styles (such as blue outline border on focus)
const defaultVariant = definePartsStyle({
  field: {},
});

const Input = defineMultiStyleConfig({
  baseStyle,
  variants: { defaultVariant },
  defaultProps: {
    variant: "defaultVariant",
  },
});

export default Input;