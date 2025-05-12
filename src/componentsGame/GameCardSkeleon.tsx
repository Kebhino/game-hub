import { Card, CardRoot, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleon = () => {
  return (
    <CardRoot borderRadius={10} size="md" overflow="hidden" width={300}>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </CardRoot>
  );
};

export default GameCardSkeleon;
