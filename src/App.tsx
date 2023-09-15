import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GenreList />
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
