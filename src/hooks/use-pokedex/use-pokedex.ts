import { useEffect, useState } from "react";
import { PokedexPokemon, WildPokemon } from "../../utils/interfaces";

const usePokedex = () => {
  const [pokedex, setPokedex] = useState<PokedexPokemon[]>([]);

  useEffect(() => {
    setPokedex(JSON.parse(localStorage.getItem("pokedex") || "[]"));
  }, []);

  const savePokemon = (
    pokemon: WildPokemon,
    { caught, shiny }: { caught: boolean; shiny: boolean }
  ) => {
    setPokedex((prev) => {
      const newPokedex = [
        ...prev,
        {
          name: pokemon.name,
          caught,
          abilities: caught ? pokemon.abilities : [],
          number: pokemon.id,
          sprite: pokemon.sprites.front_default,
          shinySprite: pokemon.sprites.front_shiny,
          shiny,
        },
      ].sort((a, b) => a.number - b.number);
      localStorage.setItem("pokedex", JSON.stringify(newPokedex));
      return newPokedex;
    });
  };

  const releaseAll = () => {
    setPokedex([]);
    localStorage.setItem("pokedex", "[]");
  };

  return { pokedex, savePokemon, releaseAll };
};

export { usePokedex };
