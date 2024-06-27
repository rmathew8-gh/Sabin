// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   // roots: ["<rootDir>"],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//   },
//   testMatch: [
//     "**/__tests__/**/*.+(ts|tsx|js)",
//     "**/?(*.)+(spec|test).+(ts|tsx|js)",
//   ],
//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   coverageDirectory: "coverage",
//   collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!src/**/*.d.ts"],
//   verbose: true,
//   testPathIgnorePatterns: ["/node_modules/", "/dist/"],
//   // setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
// };

// export default config;

// import nextJest from "next/jest";

// const createJestConfig = nextJest({
//   // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
//   dir: "./",
// });

// Add any custom config to be passed to Jest
const customJestConfig = {
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  // testEnvironment: "jsdom",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^@graphql/core/(.*)$": "<rootDir>/src/core/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // The important part right here
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default customJestConfig;
