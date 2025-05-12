import useGenres from "@/hooks/useGenres";
import { HStack, Link, List, ListItem, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Genre } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
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
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="ghost"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
