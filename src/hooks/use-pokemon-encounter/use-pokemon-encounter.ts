import { useEffect, useState } from "react";
import type { WildPokemon } from "../../utils/interfaces";

const usePokemonEncounter = () => {
  const [pokemon, setPokemon] = useState<WildPokemon>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPokemon = async () => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    setIsLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    const data = await response.json();
    setPokemon(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return { pokemon, getPokemon, isLoading };
};

export { usePokemonEncounter };
