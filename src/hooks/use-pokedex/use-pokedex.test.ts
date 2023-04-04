import { act, renderHook } from '@testing-library/react'
import { wildPokemon } from '../../utils/__test__/constants'
import { usePokedex } from './use-pokedex'

describe('usePokedex', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
  })

  test('should return empty pokedex', () => {
    const { result } = renderHook(() => usePokedex())
    expect(result.current.pokedex).toEqual([])
  })

  test('should return pokedex with data', () => {
    localStorage.setItem('pokedex', '[{"name":"prinplup"}]')
    const { result } = renderHook(() => usePokedex())
    expect(result.current.pokedex).toEqual([{ name: 'prinplup' }])
  })

  test('should save pokemon to pokedex when not caught', () => {
    const { result } = renderHook(() => usePokedex())
    act(() => {
      result.current.savePokemon(wildPokemon as any, { caught: false, shiny: false })
    })
    expect(result.current.pokedex).toEqual([
      {
        abilities: [],
        caught: false,
        name: 'ditto',
        number: 132,
        shiny: false,
        shinySprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      },
    ])
  })

  test('should save pokemon to pokedex when caught', () => {
    const { result } = renderHook(() => usePokedex())
    act(() => {
      result.current.savePokemon(wildPokemon as any, { caught: true, shiny: false })
    })
    expect(result.current.pokedex).toEqual([
      {
        abilities: [
          {
            ability: {
              name: 'limber',
              url: 'https://pokeapi.co/api/v2/ability/7/',
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: 'imposter',
              url: 'https://pokeapi.co/api/v2/ability/150/',
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        caught: true,
        name: 'ditto',
        number: 132,
        shiny: false,
        shinySprite:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png',
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      },
    ])
  })

  test('should release all pokemon', () => {
    localStorage.setItem('pokedex', '[{"name":"prinplup"}]')
    const { result } = renderHook(() => usePokedex())
    expect(result.current.pokedex).toEqual([{ name: 'prinplup' }])
    act(() => {
      result.current.releaseAll()
    })
    expect(result.current.pokedex).toEqual([])
  })
})
