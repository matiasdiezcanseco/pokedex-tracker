import PokemonWild from "../../components/molecules/pokemon-wild/pokemon-wild";
import Spinner from "../../components/atoms/spinner/spinner";
import { usePokedex } from "../../hooks/use-pokedex/use-pokedex";
import { usePokemonEncounter } from "../../hooks/use-pokemon-encounter/use-pokemon-encounter";

const EncounterPage = () => {
  const { getPokemon, pokemon, isLoading } = usePokemonEncounter();
  const { savePokemon } = usePokedex();

  const handleInteraction = ({
    isShiny,
    isCaught,
  }: {
    isShiny: boolean;
    isCaught: boolean;
  }) => {
    if (!pokemon) return;
    savePokemon(pokemon, { caught: isCaught, shiny: isShiny });
    getPokemon();
  };

  if (isLoading || !pokemon) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <PokemonWild
        pokemon={pokemon}
        onInteraction={({ isShiny, isCaught }) =>
          handleInteraction({ isShiny, isCaught })
        }
      />
    </div>
  );
};

export default EncounterPage;
