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
            techfeed:
              'techfeed@http://localhost:2000/remoteEntry.js',
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
