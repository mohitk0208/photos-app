module.exports = {
  trailingComma: "es5",
  semi: false,
  printWidth: 88,
  htmlWhitespaceSensitivity: "ignore",
  plugins: [
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-organize-imports"),
  ],
}
