import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./components/Theme";
import { Cartt } from "./Cartt";

export const App = () => {
  return (
    <ChakraProvider theme={Theme}>
      <Cartt />
    </ChakraProvider>
  );
};
