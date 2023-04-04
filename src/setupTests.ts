import '@testing-library/jest-dom'

class LocalStorageMock {
  private store: Record<string, string>

  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key: string) {
    return this.store[key] || null
  }

  setItem(key: string, value: unknown) {
    this.store[key] = String(value)
  }

  removeItem(key: string) {
    delete this.store[key]
  }
}

global.localStorage = new LocalStorageMock() as any
