import globals from "globals";
// import js from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // js.configs.recommended, // Cấu hình cho JavaScript
  ...tseslint.configs.recommended, // Cấu hình cho TypeScript
  {
    files: ["**/*.{ts,tsx}"], // Chỉ áp dụng cho TypeScript
    languageOptions: {
      parser: tseslint.parser, // Dùng parser của TypeScript
      parserOptions: {
        project: "./tsconfig.json", // Đảm bảo có tsconfig.json
      },
      globals: globals.node, // Nếu chạy trên Node.js
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin, // Định nghĩa plugin TypeScript
    },
    rules: {
      "no-console": "warn",
      "no-lonely-if": "warn",
      "no-unused-vars": "warn",
      "no-trailing-spaces": "warn",
      "no-multi-spaces": "warn",
      "no-multiple-empty-lines": "warn",
      "space-before-blocks": ["error", "always"],
      "object-curly-spacing": ["warn", "always"],
      indent: ["warn", 2],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "array-bracket-spacing": "warn",
      "linebreak-style": "off",
      "no-unexpected-multiline": "warn",
      "keyword-spacing": "warn",
      "comma-dangle": "off",
      "comma-spacing": "warn",
      "arrow-spacing": "warn",
    },
  },
];
