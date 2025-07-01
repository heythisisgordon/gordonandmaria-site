import '@testing-library/jest-dom'

// Mock fetch for API tests
global.fetch = vi.fn()

// Mock environment variables
Object.defineProperty(process, 'env', {
  value: {
    NODE_ENV: 'test',
  },
})

// Reset mocks before each test
beforeEach(() => {
  vi.resetAllMocks()
})
