import { Card, CardRoot, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleon = () => {
  return (
    <CardRoot>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </CardRoot>
  );
};

export default GameCardSkeleon;
