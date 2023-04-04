import type { PokedexPokemon } from "../../../utils/interfaces";
import PokemonEntry from "../../molecules/pokemon-entry/pokemon-entry";

interface PokedexProps {
  pokemons: PokedexPokemon[];
}

const Pokedex: React.FC<PokedexProps> = ({ pokemons }) => {
  if (pokemons.length === 0)
    return <p className="text-center">You have no pokemon in your pokedex.</p>;

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 mx-auto content-stretch">
      {pokemons.map((pokemon) => (
        <PokemonEntry key={pokemon.number} {...pokemon} />
      ))}
    </div>
  );
};

export default Pokedex;
