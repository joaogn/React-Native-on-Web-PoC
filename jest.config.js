module.exports = {
  projects: [
    {
      preset: 'jest-expo/ios',
      transform: {
        '^.+\\.svg$': 'jest-svg-transformer',
      },
      setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        'jest-styled-components/native',
        '@react-native-mapbox-gl/maps/setup-jest',
        '<rootDir>/src/__mocks__/languagesMock.ts',
      ],
      transformIgnorePatterns: [
        'node_modules/(?!(react-native|react-native-button|native-base-.*|react-native-.*)/|@react-native-mapbox-gl)',
      ],
    },
    {
      preset: 'jest-expo/android',
      transform: {
        '^.+\\.svg$': 'jest-svg-transformer',
      },
      setupFilesAfterEnv: [
        '@react-native-mapbox-gl/maps/setup-jest',
        '@testing-library/jest-native/extend-expect',
        'jest-styled-components/native',
        '<rootDir>/src/__mocks__/languagesMock.ts',
      ],
      transformIgnorePatterns: [
        'node_modules/(?!(react-native|react-native-button|native-base-.*|react-native-.*)/|@react-native-mapbox-gl)',
      ],
    },
    {
      preset: 'jest-expo/web',
      transform: {
        '^.+\\.svg$': 'jest-svg-transformer',
      },
      setupFilesAfterEnv: [
        '@testing-library/jest-dom',
        'jest-styled-components/native',
        'jest-styled-components',
        '<rootDir>/src/__mocks__/languagesMock.ts',
      ],
      transformIgnorePatterns: [
        'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
      ],
    },
  ],
  setupFiles: ['./jestSetupFile.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: [
    'src/screensMobile/**/*.tsx',
    'src/screens/**/*.tsx',
    'src/components/**/*.tsx',
    'src/contexts/**/*.tsx',
    '!src/contexts/index.tsx',
  ],
};
