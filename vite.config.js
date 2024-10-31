import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/plants/',
    // resolve: {
    //     alias: {
    //         '@': fileURLToPath(new URL('./src', import.meta.url)),
    //     },
    // },
})
