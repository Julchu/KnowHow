import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    boxShadow: "normal",
  },
  item: {
    _hover: { bg: "knowHowGreen" },
    bg: "none",
  },
});

const Menu = defineMultiStyleConfig({
  baseStyle,
});

export default Menu;