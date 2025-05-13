import { GridItem, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="10px" />
      <SearchInput></SearchInput>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
