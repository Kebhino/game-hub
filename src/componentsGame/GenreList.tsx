import useGenres from "@/hooks/useGenres";
import { HStack, List, ListItem } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} padding="5px" listStyleType={"none"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
