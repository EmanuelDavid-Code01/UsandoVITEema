import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";


const Home = () => {
  return (
    <ChakraProvider>

      {<NavBar />}
      
     
    </ChakraProvider>
  );
};

export default Home;
