import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");
const eslintignorePath = path.resolve(__dirname, ".eslintignore");


export default [
  { languageOptions: { globals: globals.node } },
  includeIgnoreFile(gitignorePath),
  includeIgnoreFile(eslintignorePath),
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];