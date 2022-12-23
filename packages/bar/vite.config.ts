import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			entry: path.resolve(__dirname, 'bar.tsx'),
			fileName: 'index',
			formats: ['cjs', 'es'],
		},
	},
});
