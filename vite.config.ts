/// <reference types="vitest" />
import { defineConfig } from "vite";

import * as path from "path";
import dts from "vite-plugin-dts";
import reactVitePlugin from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(() => ({
  plugins: [
    reactVitePlugin({ jsxRuntime: "classic" }),
    vanillaExtractPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
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
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "designsystem",
      formats: ["es", "cjs"],
      fileName: (format) => `design-system.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@vanilla-extract/css"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
}));
