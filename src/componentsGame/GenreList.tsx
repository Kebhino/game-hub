import useGenres from "@/hooks/useGenres";
import {
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Genre } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data } = useGenres();

  return (
    <>
      <Heading fontSize={"xl"} marginBottom={3}>
        Kategorie Gier
      </Heading>
      <List.Root>
        {data.map((genre) => (
          <ListItem key={genre.id} padding="5px" listStyleType={"none"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.background_image)}
              />
              <Button
                w={"100%"}
                whiteSpace={"normal"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="ghost"
                textAlign="left"
                justifyContent="flex-start"
                padding={1}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
