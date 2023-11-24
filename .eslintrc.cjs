module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@react-three/all",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@react-three",
    "react-refresh",
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "import",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "@/common/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "@/modules/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always",
      },
    ],
    "array-callback-return": [
      "error",
      {
        checkForEach: true,
      },
    ],
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "import/no-anonymous-default-export": "warn",
    "react/no-unknown-property": [
      "error",
      {
        ignore: [
          "position",
          "rotation",
          "object",
          "visible",
          "args",
          "castShadow",
        ],
      },
    ],
  },
};
