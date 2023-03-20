// import CartWidget from ./components/CartWidget";
// import ComponenteA from "./components/ComponenteA";
import NavBar from "./components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render
   (
    <>
    
     <ChakraProvider>
      
      <NavBar/>
      </ChakraProvider>
      
    </>
  );

export default App;