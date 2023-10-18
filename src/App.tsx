import React from "react";
import TodoList from "./components/TodoList";
import { ChakraProvider, extendTheme , Flex } from "@chakra-ui/react";

function App () {
  const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          fontWeight: 'normal',
        },
      },
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" align="center" justify="center" maxH='100vh' className="app-container" >
        <TodoList />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
