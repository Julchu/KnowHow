import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {},
  list: {
    boxShadow: "normal",
  },
  item: {
    _hover: { bg: "knowHowGreen" },
    bg: "none",
  },
  groupTitle: {},
  command: {},
  divider: {},
});

const Menu = defineMultiStyleConfig({
  baseStyle,
});

export default Menu;