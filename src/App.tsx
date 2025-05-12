import { Button, GridItem, HStack, Show } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import NavBar from "./componentsGame/NavBar";
import GameGrid from "./componentsGame/GameGrid";
import GenreList from "./componentsGame/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
