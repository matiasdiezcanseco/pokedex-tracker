import Image from "next/image";
import type { PokedexPokemon } from "../../../utils/interfaces";

const PokemonEntry: React.FC<PokedexPokemon> = ({
  number,
  name,
  abilities,
  caught,
  shiny,
  sprite,
  shinySprite,
}) => {
  return (
    <div className="border-[1px] border-slate-800 p-4 w-full flex flex-col rounded-lg items-center relative">
      <div>
        <h4>{name}</h4>
        <span># {number}</span>
      </div>
      <Image
        src={shiny ? shinySprite : sprite}
        alt={name}
        width={100}
        height={100}
      />
      {caught && abilities.length > 0 && (
        <div className="flex flex-col">
          <p>Abilities:</p>
          {abilities.map((ability, pos) => (
            <span key={ability.ability.name}>
              #{pos + 1}: {ability.ability.name}
            </span>
          ))}
        </div>
      )}
      {caught && (
        <div className=" absolute top-4 right-4">
          <Image
            src="/assets/pokeball.svg"
            alt="pokeball"
            width={20}
            height={20}
          />
        </div>
      )}
      {shiny && (
        <div className=" absolute top-4 left-4">
          <Image
            src="/assets/star.svg"
            alt="shiny star"
            width={20}
            height={20}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonEntry;
