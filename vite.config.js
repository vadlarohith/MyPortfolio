// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'username/repository' with your GitHub repo name
export default defineConfig({
  base: '/MyPortfolio/',
  plugins: [react()],
});
