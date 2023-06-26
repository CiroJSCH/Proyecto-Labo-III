import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        register: resolve(__dirname, 'src/pages/register.html'),
        main: resolve(__dirname, 'src/pages/main.html'),
        series: resolve(__dirname, 'src/pages/series.html'),
        vistaGuest: resolve(__dirname, 'src/pages/vista-guest.html'),
        seeMoreMovies: resolve(__dirname, 'src/pages/see-more-movies.html'),
        movieDetail: resolve(__dirname, 'src/pages/movieDetail.html'),
        userSaves: resolve(__dirname, 'src/pages/user-saves.html'),
        verMas: resolve(__dirname, 'src/pages/ver-mas.html'),
      },
      output: {
        strict: false,
        entryFileNames: '[name].js',
        dir: 'dist/assets/',
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@scripts', replacement: resolve(__dirname, 'src/scripts') },
    ],
  },
});
