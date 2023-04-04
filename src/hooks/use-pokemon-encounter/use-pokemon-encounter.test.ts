import { act, renderHook } from '@testing-library/react'
import { usePokemonEncounter } from './use-pokemon-encounter'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: 'ditto' }),
  })
) as any

describe('usePokemonEncounter', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should return default values', () => {
    const { result } = renderHook(() => usePokemonEncounter())
    expect(result.current.pokemon).toEqual(undefined)
    expect(result.current.isLoading).toEqual(true)
  })

  test('should return new encounter', async () => {
    const { result } = renderHook(() => usePokemonEncounter())
    await new Promise((r) => setTimeout(r, 10))
    await act(async () => {
      await result.current.getPokemon()
    })
    expect(result.current.pokemon).toEqual({ name: 'ditto' })
  })
})
