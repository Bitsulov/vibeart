import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    { ignores: ["dist"] },
    {
        // Теперь обрабатываем JS, JSX, TS и TSX
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true }
            },
            globals: globals.browser
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "@typescript-eslint": tsPlugin,
            react: reactPlugin,
            prettier: prettierPlugin
        },
        rules: {
            // Сохраняем старые JS правила
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            "key-spacing": ["error", { beforeColon: false, afterColon: true }],

            // TypeScript правила (по желанию)
            "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],

            // React Refresh
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

            // Prettier интеграция
            "prettier/prettier": ["error", {}, { usePrettierrc: true }],

            // Отключаем правила, которые могут конфликтовать с Prettier
            ...prettierConfig.rules
        },
        settings: {
            react: { version: "detect" }
        }
    }
];
