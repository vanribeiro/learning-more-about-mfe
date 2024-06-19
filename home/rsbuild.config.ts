import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const PORT: number = 3000;

export default defineConfig({
  server: {
    port: PORT,
  },
  dev: {
    assetPrefix: `http://localhost:${PORT}`
  },
  tools: {
    rspack: ( config, { appendPlugins  }) => {
      config.output!.uniqueName = 'home';
      appendPlugins ([
        new ModuleFederationPlugin({
          name: 'home',
          exposes: {
            './button': './src/components/Button/index.tsx'
          },
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
