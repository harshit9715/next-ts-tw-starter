module.exports = {
  "stories": [
    "../@(components|pages|stories)/**/*.stories.mdx",
    "../@(components|pages|stories)/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "staticDirs": ["../public"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}