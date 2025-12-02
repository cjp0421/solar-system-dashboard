import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173/solar-system-dashboard",
    supportFile: 'cypress/support/e2e.ts',
  },
});
