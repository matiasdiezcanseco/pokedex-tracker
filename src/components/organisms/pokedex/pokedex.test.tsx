import { render, screen } from '@testing-library/react'
import Pokedex from './pokedex'

describe('Pokedex', () => {
  const pokemons = [
    {
      number: 100,
      name: 'name100',
      abilities: [],
      caught: false,
      shiny: false,
      sprite: 'https://sprite.com',
      shinySprite: 'https://shinySprite.com',
    },
    {
      number: 101,
      name: 'name101',
      abilities: [],
      caught: false,
      shiny: false,
      sprite: 'https://sprite.com',
      shinySprite: 'https://shinySprite.com',
    },
  ]

  test('should render no pokemon message', () => {
    render(<Pokedex pokemons={[]} />)
    expect(screen.getByText('You have no pokemon in your pokedex.')).toBeVisible()
  })

  test('should render pokemon list', () => {
    render(<Pokedex pokemons={pokemons} />)
    expect(screen.getByText('name100')).toBeVisible()
    expect(screen.getByText('name101')).toBeVisible()
  })
})
