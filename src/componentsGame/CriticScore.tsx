import { Game } from "@/hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 89 ? "green" : score > 85 ? "yellow" : "red";
  return (
    <Badge
      fontSize="14px"
      padding={2}
      borderRadius="10px"
      w="fit-content"
      color={color + ".500"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
