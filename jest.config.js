module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.(ts|tsx|js)', '**/?(*.)+(spec|test).(ts|tsx|js)'],
};
