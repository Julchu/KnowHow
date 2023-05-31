import { extendTheme } from "@chakra-ui/react";
import { Montserrat, Poppins } from "next/font/google";
import Link from "@/components/UI/Link";
import Menu from "@/components/UI/Menu";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";

// Import the weights and subsets, add any other config here as well
const _poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = {
  colors: {
    knowHowGreen: "#23b997",
  },
  // Basic font setup with font weights used when text is bold
  fonts: {
    heading: montserrat.style.fontFamily,
    body: montserrat.style.fontFamily,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  shadows: {
    normal: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
    hover: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
    focus: `rgba(0, 0, 0, 0.35) 0px 5px 15px`,
    under: `rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`,
  },
  space: {
    desktopPadding: "25px",
    headerPadding: "20px",
  },
  /** Modifying default components;
   * Customizing components here will affect all components throughout app, putting high focus on reusibility
   */
  components: {
    Link,
    Button,
    Input,
    Menu,
  },
  config: {
    cssVarPrefix: "knowHow",
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
};

export default extendTheme(theme);