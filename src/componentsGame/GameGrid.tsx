import apiClients from "@/services/api-clients";
import React, { useEffect, useState } from "react";
import { List, ListItem } from "@chakra-ui/react";
import { LuCircleCheck } from "react-icons/lu";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
