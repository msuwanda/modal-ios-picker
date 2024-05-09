module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "eslint:recommended"],
  plugins: ["babel", "import", "react", "react-native"],
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      restParams: true,
      spread: true,
      jsx: true,
    },
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ["@babel/preset-react"],
    },
  },
  rules: {
    indent: ["error", 4],
    semi: ["error", "always"],
    "no-mixed-spaces-and-tabs": 2,
    "react/no-unknown-property": 1,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "react/sort-comp": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": [2, { ignore: ["react", "react-native"] }],
    "no-spaced-func": 2,
    "space-in-parens": ["error", "never"],
    "no-var": "error",
    "no-constant-condition": 2,
    eqeqeq: 2,
    "no-else-return": 2,
    "no-eval": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-useless-return": 2,
    "block-spacing": 2,
    "no-lonely-if": 2,
    "no-trailing-spaces": 2,
    "one-var": ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "no-console": 1,
    "no-unused-vars": 1,
    "jsx-quotes": ["error", "prefer-double"],
    "no-unused-expressions": 2,
    "require-await": 2,
    "no-irregular-whitespace": 2,
    "arrow-spacing": "error",
    "arrow-parens": ["error", "as-needed"],
    "brace-style": ["error", "1tbs", { allowSingleLine: false }],
    "no-multi-spaces": [
      "error",
      {
        exceptions: { ImportDeclaration: true },
      },
    ],
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
        align: "value",
      },
    ],
    "no-empty-function": [2, { allow: ["arrowFunctions"] }],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "never",
        functions: "ignore",
      },
    ],
  },
};
