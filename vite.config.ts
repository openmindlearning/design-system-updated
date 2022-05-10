/// <reference types="vitest" />
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(() => ({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./setup-test-env.ts"],
    include: ["./**/*.{test,spec}.{ts,tsx}"],
    watchIgnore: [".*\\/node_modules\\/.*", ".*\\/build\\/.*"],
    deps: {
      fallbackCJS: true, // @see https://github.com/seek-oss/vanilla-extract/issues/666#issuecomment-1112736262
    },
  },
}));
