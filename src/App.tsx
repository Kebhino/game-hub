import { GridItem, HStack } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import NavBar from "./componentsGame/NavBar";
import GameGrid from "./componentsGame/GameGrid";
import GenreList from "./componentsGame/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./componentsGame/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./componentsGame/SortSelector";
import GameHeading from "./componentsGame/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>

      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>

      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={5} paddingLeft={10}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
