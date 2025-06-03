import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([{
  languageOptions: {
    globals: {
      ...globals.browser,
    },

    parser: tsParser,
  },

  extends: fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "prettier",
  )),

  plugins: {
    "react-refresh": reactRefresh,
  },

  "rules": {
    "func-style": ["error", "declaration"],
    "newline-before-return": "error",
    "one-var": ["error", "never"],

    "no-console": ["error", {
      "allow": ["warn", "info"],
    }],

    "curly": "error",
    "sort-imports": "off",
    "sort-keys": "off",
    "camelcase": "off",
    "no-ternary": "off",
    "no-duplicate-imports": "off",
    "max-lines-per-function": "off",
    "max-statements": "off",
    "no-undefined": "off",
    "prefer-destructuring": "off",
    "class-methods-use-this": "off",
    "id-length": "off",
    "max-lines": "off",
    "no-async-promise-executor": "off",
    "no-underscore-dangle": "off",
    "no-undef-init": "off",
    "complexity": "off",
    "no-magic-numbers": "off",
    "no-use-before-define": "off",
    "require-atomic-updates": "off",

    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
    }],

    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    // "@typescript-eslint/no-empty-object-type": "off"
  },
}, globalIgnores(["**/node_modules", "**/.eslintrc.cjs", "**/dist", "**/.changeset"])]);
