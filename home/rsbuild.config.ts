import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { dependencies } from './package.json';

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
          remotes: {
            techshop:
              'techshop@http://localhost:2000/mf-manifest.json',
          },
          exposes:{
            './Header': './src/components/Header/index.tsx',
            './Footer': './src/components/Footer/index.tsx',
          },
          shared: {
            ...dependencies,
            'react':{
              singleton: true,
              requiredVersion: '^18.3.1'
            }, 
            'react-dom':{
              singleton: true,
              requiredVersion: '^18.3.1'
            },
          },
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
