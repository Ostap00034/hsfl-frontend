import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'process.env': {
			SERVER_URL: 'http://localhost:4200/api/',
			APP_URL: 'http://localhost:5173/',
		},
	},
})
