import { Game } from "@/hooks/useGames";
import { CardHeader, CardRoot, HStack, Image, Text } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot borderRadius={10} size="md" overflow="hidden">
      <Image src={game.background_image}></Image>
      <Card.Body>
        <CardHeader fontSize="lg">{game.name}</CardHeader>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </CardRoot>
  );
};

export default GameCard;
