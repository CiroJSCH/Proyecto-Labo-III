import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        register: resolve(__dirname, 'src/pages/register.html'),
        mainPage: resolve(__dirname, 'src/pages/main-page.html'),
        series: resolve(__dirname, 'src/pages/series.html'),
        vistaGuest: resolve(__dirname, 'src/pages/vista-guest.html'),
        seeMoreMovies: resolve(__dirname, 'src/pages/see-more-movies.html'),
        movieDetail: resolve(__dirname, 'src/pages/movieDetail.html'),
        userSaves: resolve(__dirname, 'src/pages/user-saves.html'),
        verMas: resolve(__dirname, 'src/pages/ver-mas.html'),
        seriesDetail: resolve(__dirname, 'src/pages/seriesDetails.html'),
        filter: resolve(__dirname, 'src/pages/filter.html'),
      },
      // output: {
      //   strict: false,
      //   entryFileNames: '[name].js',
      //   dir: 'dist/',
      // },
    },
  },
  // resolve: {
  //   alias: [
  //     { find: '@', replacement: resolve(__dirname, 'src') },
  //     { find: '@scripts', replacement: resolve(__dirname, 'src/scripts') },
  //   ],
  // },
});
