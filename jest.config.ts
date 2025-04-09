module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["lcov", "text", "html"],
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "<rootDir>/src/app/components/**/*.{jsx,tsx}",
    "<rootDir>/src/app/**/*.{jsx,tsx}",
    /* no tests for these */
    "!<rootDir>/src/**/*spec.{jsx,tsx}",
    "!<rootDir>/src/**/*test.{jsx,tsx}",
    "!<rootDir>/src/__tests__/*.{jsx,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/src/app/layout.tsx",
  ],
  testRegex: ".*\\.(test|spec)\\.[jt]sx?$",
  testMatch: undefined,
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/jest.setup.ts"],

  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],

  transform: {
    "^.+.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: { "ts-jest": { tsconfig: "tsconfig.json" } },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@/components/(.*)$": "<rootDir>/src/app/components/$1",
  },
};
