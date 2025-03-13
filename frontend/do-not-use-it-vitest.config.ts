import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // Required for React projects
  test: {
    globals: true, // Enables `describe`, `it`, `expect`
    environment: "jsdom", // Required for DOM-related tests
    setupFiles: "./src/setupTests.ts", // File for global mocks
    coverage: {
      reporter: ["text", "json", "html"], // Generates coverage reports
      exclude: ["node_modules/", "test-utils/"], // Exclude these from coverage
    },
    deps: {
      inline: ["@testing-library/react"], // Fixes issues with some libraries
    },
    watch: false, // Ensure Vitest exits after running
  },
});
