import useGenres from "@/hooks/useGenres";
import { Heading, HStack, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Genre } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"xl"} marginBottom={3}>
        Genres
      </Heading>
      <List.Root>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} padding="5px" listStyleType={"none"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                w={"100%"}
                whiteSpace={"normal"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
