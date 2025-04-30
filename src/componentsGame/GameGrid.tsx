import { List, ListItem } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root gap="2" variant="plain" align="center">
        {games.map((game) => (
          <List.Item key={game.id}>
            <List.Indicator asChild color="green.500">
              <LuCircleCheck />
            </List.Indicator>
            {game.name}
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GameGrid;
