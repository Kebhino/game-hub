import { SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleon from "./GameCardSkeleon";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
import { useEffect } from "react";

interface Props {
  gameQuery: GameQuery;
  funkcjaDoUstawianiaIlosciGier: (count: number) => void;
}

const GameGrid = ({ gameQuery, funkcjaDoUstawianiaIlosciGier }: Props) => {
  const { data, error, isLoading, iloscGier } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  useEffect(() => {
    funkcjaDoUstawianiaIlosciGier(iloscGier);
  }, [iloscGier, funkcjaDoUstawianiaIlosciGier]);

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={10} gap={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleon />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
