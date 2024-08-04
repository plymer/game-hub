import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // <Platform> <Genre> Games
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`; // template literal

  return (
    <Heading fontSize="5xl" as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
