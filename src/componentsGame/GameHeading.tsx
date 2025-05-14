import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Gry`;
  return (
    <Heading as={"h1"} marginLeft={10} marginBottom={7} fontSize="4xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
