import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";

export default [
  { ignores: [".next/**", "coverage/**", "node_modules/**", "tmp/**", "next-env.d.ts"] },
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },
];
