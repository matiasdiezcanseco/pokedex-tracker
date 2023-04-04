import Image from 'next/image'
import type { WildPokemon } from '../../../utils/interfaces'
import Button from '../../atoms/button/button'

interface PokemonWildProps {
  pokemon: WildPokemon
  onInteraction: ({ isShiny, isCaught }: { isShiny: boolean; isCaught: boolean }) => void
}

const PokemonWild: React.FC<PokemonWildProps> = ({ pokemon, onInteraction }) => {
  const isShiny = Math.random() < 0.05

  return (
    <div className="flex flex-col items-center">
      <div className="space-y-2">
        <h4 className="text-xl text-center">{pokemon.name.toUpperCase()}</h4>
        <Image
          src={isShiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default}
          alt={pokemon.name + ' image'}
          width={150}
          height={150}
        ></Image>
      </div>
      <div className="flex flex-col space-y-6">
        <Button
          className="px-4 py-2 bg-slate-900 rounded-xl hover:bg-slate-800"
          onClick={() => onInteraction({ isShiny, isCaught: false })}
        >
          Run away
        </Button>
        <Button
          className="px-4 py-2 bg-slate-900 rounded-xl hover:bg-slate-800"
          onClick={() => onInteraction({ isShiny, isCaught: true })}
        >
          Throw pokeball
        </Button>
      </div>
    </div>
  )
}

export default PokemonWild
