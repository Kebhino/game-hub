import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",      // 👈 to wymusza jasny start
  useSystemColorMode: false,      // 👈 żeby nie brał z ustawień systemowych
};

const theme = extendTheme({ config });

export default theme;