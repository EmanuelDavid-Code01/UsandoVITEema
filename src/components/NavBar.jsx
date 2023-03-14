import React from "react";
import CartWidget from "./CartWidget";
import { Button, MenuButton, MenuList, MenuItem, Menu } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <div>
      <CartWidget />
      <Button colorScheme="blue">Button</Button>
      <Menu>
        <MenuButton as={Button}>Categorias</MenuButton>
        <MenuList>
          <MenuItem>Ropa de invierno</MenuItem>
          <MenuItem>Ropa de verano</MenuItem>
          <MenuItem>Short</MenuItem>
          <MenuItem>Musculosas</MenuItem>
          <MenuItem>Zapatillas</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavBar;