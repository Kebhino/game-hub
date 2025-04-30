import { Button, GridItem, HStack, Show } from "@chakra-ui/react";
import { Grid } from "@chakra-ui/react";
import NavBar from "./componentsGame/NavBar";
import { ColorModeButton } from "@/components/ui/color-mode";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
        <ColorModeButton />
      </GridItem>

      <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
