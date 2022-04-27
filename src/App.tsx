import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Products } from "./components/pages/Products";

function App() {
  return (
    <ChakraProvider>
      <Products />
    </ChakraProvider>
  );
}

export default App;
