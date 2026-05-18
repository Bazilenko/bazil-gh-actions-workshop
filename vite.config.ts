/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
    provider: 'v8',
    reporter: ['text', 'json-summary'],
    lines: 80,
    functions: 80,
    branches: 80,
    statements: 80
  },
    setupFiles: ["./test/setup.ts"],
  },
});
