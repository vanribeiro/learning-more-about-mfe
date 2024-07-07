import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import { NativeFederationTypeScriptHost } from '@module-federation/native-federation-typescript/rspack';
import { NativeFederationTestsHost } from '@module-federation/native-federation-tests/rspack';
import { dependencies } from './package.json';

const PORT: number = 3000;

const moduleFederationConfig = {
  name: 'home',
  remotes: {
    techshop: 'techshop@http://localhost:2000/mf-manifest.json',
  },
  shared: {
    ...dependencies,
    'react':{
      singleton: true,
      eager: true,
      requiredVersion: '^18.3.1'
    }, 
    'react-dom':{
      singleton: true,
      eager: true,
      requiredVersion: '^18.3.1'
    },
  },

}

export default defineConfig({
  server: {
    port: PORT,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  html: {
    title: 'Shopping',
    favicon: './src/assets/favicon/favicon.ico'
  },
  dev: {
    assetPrefix: `http://localhost:${PORT}`
  },
  tools: {
    rspack: ( config, { appendPlugins }) => {
      config.output!.uniqueName = 'home';
      appendPlugins ([
        // NativeFederationTypeScriptHost({
        //   moduleFederationConfig: moduleFederationConfig,
        //   deleteTypesFolder: false,
        // }),
        // NativeFederationTestsHost({
        //   moduleFederationConfig: moduleFederationConfig,
        //   mocksFolder: './src/tests/mocks',
        //   deleteTestsFolder: false,
        // }),
        new ModuleFederationPlugin(moduleFederationConfig),
      ]);
    },
  },
  plugins: [pluginReact()],
});
