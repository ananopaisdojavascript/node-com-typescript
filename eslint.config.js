import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js"],
    ignores: ["node_modules", "dist", "/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "warn",
    },
  },
  {
    files: ["**/*.ts"],
    ignores: ["**/mocks/*.ts"],
    rules: {
      "prefer-const": "warn",
    },
  },
];
