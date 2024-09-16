import type { StorybookConfig } from "@storybook/angular";
import path from 'path';


const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  webpackFinal: async (config) => {
   // Loader para CSS de node_modules (mantiene el que ya tienes)
   config.module?.rules?.push({
    test: /\.css$/,
    use: ["style-loader", "css-loader", "postcss-loader"],
    include: /node_modules/,
    exclude: /@angular\/material\/prebuilt-themes\/.*\.css$/,
  });

  config.module?.rules?.push({
    test: /\.css$/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 1, // Procesa los imports en CSS
        },
      },
      "postcss-loader",
    ],
    include: [
      path.resolve(__dirname, '../src/assets/css'), // Carpeta específica
    ],
  });


  // Loader para archivos HTML
  config.module?.rules?.push({
    test: /\.html$/,
    use: ["html-loader"],
    include: path.resolve(__dirname, './'),
  });
   
    return config;
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
