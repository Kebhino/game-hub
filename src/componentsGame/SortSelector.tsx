import { Menu, Button, HStack, Portal, Text, MenuItem } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          <HStack gap={1}>
            <Text>Order by: Relevance</Text>
            <BsChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <MenuItem value="1">Relevance</MenuItem>
            <MenuItem value="1">Date added</MenuItem>
            <MenuItem value="1">Name</MenuItem>
            <MenuItem value="1">Realse Date</MenuItem>
            <MenuItem value="1">Popularity</MenuItem>
            <MenuItem value="1">Average rating</MenuItem>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
