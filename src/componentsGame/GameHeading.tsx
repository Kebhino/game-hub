import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
  iloscGier: number;
}

const GameHeading = ({ gameQuery, iloscGier }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } `;
  return (
    <Heading as={"h1"} marginLeft={10} marginBottom={7} fontSize="4xl">
      {heading}Ilość Gier: {iloscGier === 0 ? <Spinner size="lg" /> : iloscGier}
    </Heading>
  );
};

export default GameHeading;
