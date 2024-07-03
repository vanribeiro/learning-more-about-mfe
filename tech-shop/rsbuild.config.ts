import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { dependencies } from './package.json';
import { NativeFederationTypeScriptRemote } from '@module-federation/native-federation-typescript/webpack';
import { NativeFederationTestsRemote } from '@module-federation/native-federation-tests/webpack';

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });
const PORT: number = 2000;

const moduleFederationConfig = {
  name: 'techshop',
  exposes:{
    './ListLastNewsTopics': './src/components/ListLastNewsTopics',
    './Products': './src/pages/Products'
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
}

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
          exposes:{
            './ListLastNewsTopics': './src/components/ListLastNewsTopics',
            './Products': './src/pages/Products'
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
        NativeFederationTypeScriptRemote({moduleFederationConfig}),
        NativeFederationTestsRemote({
          moduleFederationConfig,
          additionalBundlerConfig: { format: 'esm' },
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
