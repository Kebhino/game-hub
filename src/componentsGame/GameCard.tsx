import { Game } from "@/hooks/useGames";

import { CardRoot, Image } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <CardRoot>
      <Image src={game.background_image}></Image>
      <Card.Header>{game.name}</Card.Header>
    </CardRoot>
  );
};

export default GameCard;
