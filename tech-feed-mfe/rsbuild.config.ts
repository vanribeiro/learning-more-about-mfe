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
  dev: {
    assetPrefix: `http://localhost:${PORT}`
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'techfeed',
          exposes:{
            './TechNews': './src/pages/TechNews/index.tsx'
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
