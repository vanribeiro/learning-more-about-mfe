import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced';
import {
	NativeFederationTestsHost,
	NativeFederationTestsRemote,
} from "@module-federation/native-federation-tests/rspack";

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

const moduleFederationConfig = {
	name: 'home',
	remotes: {
		home: 'home@http://localhost:3000/mf-manifest.json',
	},
	shared: ['react', 'react-dom'],
};

export default defineConfig({
  server: {
    port: 2000,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin(moduleFederationConfig),
        NativeFederationTestsHost({moduleFederationConfig}),
        NativeFederationTestsRemote({moduleFederationConfig})
      ]);
    },
  },
  source: {
    define: publicVars,
  },
  plugins: [pluginReact()],
});
