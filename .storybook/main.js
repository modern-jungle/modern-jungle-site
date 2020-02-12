const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../stories"),
        ],
      },
    },
  ],
}
