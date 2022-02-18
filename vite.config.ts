import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            components: path.resolve(__dirname, './src/components'),
            images: path.resolve(__dirname, './src/images'),
            '@': path.resolve(__dirname, './src'),
        },
    },
});
