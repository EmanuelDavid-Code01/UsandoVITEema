// import CartWidget from "./components/CartWidget";
import ComponenteA from "./components/ComponenteA";
import NavBar from "./components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  //Logica va aca adentro

  return (
    <>
     <ChakraProvider>
      <ComponenteA nombre={"CoderHouse"} edad={25} />
      <NavBar/>
      </ChakraProvider>
    </>
  );
};
export default App;