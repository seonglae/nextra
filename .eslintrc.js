module.exports = {
  extends: [
    "plugin:prettier/recommended",
    "prettier/react",
    "kentcdodds",
    "kentcdodds/react",
    "kentcdodds/jsx-a11y",
  ],
  plugins: ["prettier"],
  rules: {
    "import/extensions": [
      "warn",
      "never",
      {
        css: "ignorePackages",
      },
    ],
    "max-lines-per-function": "off",
    "no-void": "off",
    "require-await": "off",

    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
  },
};
