import { AppProps } from "next/app";
import { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/components/UI/Theme";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    // Adding Chakra theming to customize reusable Chakra components
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;