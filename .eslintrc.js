module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: ["@typescript-eslint", "prettier", "react-hooks", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json"
  },
  env: {
    browser: true,
    node: true
  },
  rules: {
    "spaced-comment": 0,
    "no-console": 0,
    "no-use-before-define": 0,
    "import/extensions": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"]
      }
    ],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0
  }
};
