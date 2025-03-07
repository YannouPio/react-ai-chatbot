import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

const { publicVars } = loadEnv({ prefixes: ['VITE_'] });

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        template: './index.html',
    },
    source: {
        define: publicVars,
        entry: {
            index: './src/main.jsx',
        },
    },
    server: {
        port: 3001,
    },
    dev: {
        port: 3001,
    },
});