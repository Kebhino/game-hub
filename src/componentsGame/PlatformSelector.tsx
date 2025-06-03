import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { HStack, Menu } from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          <HStack gap={1}>
            <Text>{selectedPlatform?.name || "Platforms"}</Text>
            <BsChevronDown />
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.results.map((platform) => (
              <Menu.Item
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
                value={platform.id.toString()}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
