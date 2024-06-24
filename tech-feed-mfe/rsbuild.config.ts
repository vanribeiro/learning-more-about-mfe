import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { dependencies } from './package.json';

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig({
  server: {
    port: 2000,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'techfeed',
          filename: 'remoteEntry.js',
          remotes: {
            home:
              'home@http://localhost:3000/mf-manifest.json',
          },
          exposes: {
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
