import globals from "globals";
import json from "@eslint/json";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-constant-condition": "warn",
    },
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
]);
