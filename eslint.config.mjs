import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Determine the current file and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup FlatCompat to handle older-style configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Combine extends and custom rules
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"), // Extend Next.js Core Web Vitals rules
  {
    rules: {
      "react/no-unescaped-entities": "off", // Allow unescaped characters like quotes
      "@typescript-eslint/quotes": "off",   // Disable quotes rule from TypeScript ESLint
      "quotes": "off",                      // Disable general quotes rule
      "no-useless-escape": "off",           // Allow unnecessary escape characters
    },
  },
];

export default eslintConfig;
