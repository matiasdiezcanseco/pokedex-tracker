import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { wildPokemon } from '../../../utils/__test__/constants'
import PokemonWild from './pokemon-wild'

describe('PokemonWild', () => {
  let pokemon = { ...wildPokemon }
  let onInteraction = jest.fn()

  beforeEach(() => {
    pokemon = { ...wildPokemon }
    jest.spyOn(global.Math, 'random').mockRestore()
    jest.clearAllMocks()
  })

  test('should render wild pokemon', () => {
    render(<PokemonWild onInteraction={onInteraction} pokemon={pokemon as any} />)
    expect(screen.getByText('DITTO')).toBeVisible()
  })

  test('should render pokemon image', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1)
    render(<PokemonWild onInteraction={onInteraction} pokemon={pokemon as any} />)
    expect(screen.getByAltText('ditto image')).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2F132.png&w=384&q=75'
    )
  })

  test('should render shiny pokemon image', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0)
    render(<PokemonWild onInteraction={onInteraction} pokemon={pokemon as any} />)
    expect(screen.getByAltText('ditto image')).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2FPokeAPI%2Fsprites%2Fmaster%2Fsprites%2Fpokemon%2Fshiny%2F132.png&w=384&q=75'
    )
  })

  test('should call interaction with run away params', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1)
    render(<PokemonWild onInteraction={onInteraction} pokemon={pokemon as any} />)
    const button = screen.getByRole('button', { name: 'Run away' })
    await userEvent.click(button)
    expect(onInteraction).toHaveBeenCalledWith({ isShiny: false, isCaught: false })
  })

  test('should call interaction with caught params', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1)
    render(<PokemonWild onInteraction={onInteraction} pokemon={pokemon as any} />)
    const button = screen.getByRole('button', { name: 'Throw pokeball' })
    await userEvent.click(button)
    expect(onInteraction).toHaveBeenCalledWith({ isShiny: false, isCaught: true })
  })

  test('should call interaction with shiny params', async () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0)
    render(<PokemonWild onInteraction={onInteraction} pokemon={pokemon as any} />)
    const button = screen.getByRole('button', { name: 'Throw pokeball' })
    await userEvent.click(button)
    expect(onInteraction).toHaveBeenCalledWith({ isShiny: true, isCaught: true })
  })
})
