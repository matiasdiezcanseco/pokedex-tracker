import { render, screen } from '@testing-library/react'
import PokemonEntry from './pokemon-entry'

describe('PokemonEntry', () => {
  let props = {
    number: 100,
    name: 'name',
    abilities: [],
    caught: false,
    shiny: false,
    sprite: 'https://sprite.com',
    shinySprite: 'https://shinySprite.com',
  }

  beforeEach(() => {
    props = {
      number: 100,
      name: 'name',
      abilities: [],
      caught: false,
      shiny: false,
      sprite: 'https://sprite.com',
      shinySprite: 'https://shinySprite.com',
    }
  })
  test('should render main data', () => {
    render(<PokemonEntry {...props} />)
    expect(screen.getByText('# 100')).toBeVisible()
    expect(screen.getByText('name')).toBeVisible()
  })

  test('should render non shiny image', () => {
    render(<PokemonEntry {...props} />)
    expect(screen.getByAltText('name image')).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2Fsprite.com&w=256&q=75'
    )
  })

  test('should render shiny image', () => {
    props = { ...props, shiny: true }
    render(<PokemonEntry {...props} />)
    expect(screen.getByAltText('name image')).toHaveAttribute(
      'src',
      '/_next/image?url=https%3A%2F%2FshinySprite.com&w=256&q=75'
    )
  })

  test('should render shiny star', () => {
    props = { ...props, shiny: true }
    render(<PokemonEntry {...props} />)
    expect(screen.getByAltText('shiny star')).toBeVisible()
  })

  test('should render pokeball if caught', () => {
    props = { ...props, caught: true }
    render(<PokemonEntry {...props} />)
    expect(screen.getByAltText('pokeball')).toBeVisible()
  })

  test('should render abilities if caught', () => {
    props = {
      ...props,
      abilities: [{ ability: { name: 'ability1' } }, { ability: { name: 'ability2' } }] as any,
      caught: true,
    }
    render(<PokemonEntry {...props} />)
    expect(screen.getByText('#1: ability1')).toBeVisible()
    expect(screen.getByText('#2: ability2')).toBeVisible()
  })
})
