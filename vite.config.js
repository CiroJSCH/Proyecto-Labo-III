import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve('index.html'),
        login: resolve('src/', 'pages/login.html'),
        register: resolve('src/', 'pages/register.html'),
        main: resolve('src/', 'pages/main.html'),
        series: resolve('src/', 'pages/series.html'),
        vistaGuest: resolve('src/', 'pages/vista-guest.html'),
        seeMoreMovies: resolve('src/', 'pages/see-more-movies.html'),
        movieDetail: resolve('src/', 'pages/movieDetail.html'),
        userSaves: resolve('src/', 'pages/user-saves.html'),
        verMas: resolve('src/', 'pages/ver-mas.html'),
      },
    },
  },
});
