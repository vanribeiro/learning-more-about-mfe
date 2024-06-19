import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';
import {
	NativeFederationTestsHost,
	NativeFederationTestsRemote,
} from "@module-federation/native-federation-tests/rspack";

const PORT: number = 3000;

const moduleFederationConfig = {
  name: 'home',
  exposes: {
    './button': './src/components/Button/index.tsx'
  },
  shared: ['react', 'react-dom'],
}

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
        new ModuleFederationPlugin(moduleFederationConfig),
        NativeFederationTestsHost({moduleFederationConfig}),
        NativeFederationTestsRemote({moduleFederationConfig})
      ]);
    },
  },
  plugins: [pluginReact()],
});
