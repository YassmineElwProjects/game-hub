import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props{
  selectedGenre : Genre | null
}


export const GameGrid = ({selectedGenre } : Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);
  const skeletons = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <>
      {error && <Text> {error} </Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} >
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
