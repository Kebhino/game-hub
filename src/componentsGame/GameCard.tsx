import { Game } from "@/hooks/useGames";

import { CardHeader, CardRoot, Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot borderRadius={10} size="md" overflow="hidden">
      <Image src={game.background_image}></Image>
      <Card.Body>
        <CardHeader fontSize="lg">{game.name}</CardHeader>
      </Card.Body>
    </CardRoot>
  );
};

export default GameCard;
