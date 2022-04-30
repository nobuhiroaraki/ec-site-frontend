import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Products } from "./components/pages/Products";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Products />
    </ChakraProvider>
  );
}

export default App;
