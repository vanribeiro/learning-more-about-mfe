import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { dependencies } from './package.json';

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });
const PORT: number = 2000;

export default defineConfig({
  server: {
    port: PORT,
  },
  html: {
    title: 'Shopping',
    favicon: './src/assets/favicon/favicon.ico'
  },
  dev: {
    assetPrefix: `http://localhost:${PORT}`
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'techshop',
          remotes: {
            home:
              'home@http://localhost:3000/mf-manifest.json',
          },
          exposes:{
            './ListLastNewsTopics': './src/components/ListLastNewsTopics/index.tsx',
            './Products': './src/pages/Products/index.tsx'
          },
          shared: {
            ...dependencies,
            'react':{
              requiredVersion: '^18.3.1'
            }, 
            'react-dom':{
              requiredVersion: '^18.3.1'
            }
          },
        }),
      ]);
    },
  },
  source: {
    define: publicVars,
  },
  plugins: [
    pluginReact(),
  ],
});
