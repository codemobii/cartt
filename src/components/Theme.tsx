import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
});

export default Theme;
