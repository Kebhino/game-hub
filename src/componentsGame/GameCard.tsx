import { Game } from "@/hooks/useGames";
import { CardHeader, CardRoot, HStack, Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot size="md">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <Card.Body>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <CardHeader fontSize="lg">
          {game.name}
          <Emoji rating={game.rating_top} />
        </CardHeader>
      </Card.Body>
    </CardRoot>
  );
};

export default GameCard;
