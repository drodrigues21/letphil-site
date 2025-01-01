import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true, // Binds to 0.0.0.0
		port: 5173,
	},
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') }
		]
	},
	assetsInclude: ['**/*.png'],
});
