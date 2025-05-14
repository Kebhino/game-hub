import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (serachText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" borderRadius="10px" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
