module.exports = {
  presets: [
    "@babel/react",
    "@babel/typescript",
    [
      "@babel/env",
      {
        modules: false,
        targets: {
          browsers: ["last 2 versions", "ie >= 11"],
        },
      },
    ],
  ],
}
