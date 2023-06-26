import { data } from 'autoprefixer';
import {
  getMovies,
  getSeriesGenres,
  getTopRatedMovies,
  getUpcomingMovies,
  getPopularSeries,
} from '../../api/api.js';
import { doc } from 'prettier';
const upcomingContainer = document.querySelector('.upcoming-wrapper');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperWrapperTopRated = document.querySelector(
  '.swiper-wrapper-top-rated',
);
const swiperWrapperSeries = document.querySelector(
  '.swiper-wrapper-series-recommend',
);

const imageBaseUrl = 'https://image.tmdb.org/t/p/w342';
const imageBaseUrlbackground = 'https://image.tmdb.org/t/p/w780';
// como saber si mi slider llego al final
// 1. saber el ancho del contenedor
// 2. saber el ancho del scroll
// 3. saber el ancho del scroll + el ancho del contenedor
// 4. saber cuando el scroll llega al ancho del scroll + el ancho del contenedor
// 5. cuando llegue al ancho del scroll + el ancho del contenedor, hacer una peticion para traer mas peliculas
// 6. agregar las peliculas al contenedor
// 7. volver a calcular el ancho del scroll
// 8. volver a calcular el ancho del scroll + el ancho del contenedor
// 9. volver a calcular cuando el scroll llega al ancho del scroll + el ancho del contenedor
// 10. volver a calcular cuando llegue al ancho del scroll + el ancho del contenedor, hacer una peticion para traer mas peliculas
// 11. volver a agregar las peliculas al contenedor
// cual es la condicion para saber si llego al final del scroll
// cuando el scroll llegue al ancho del scroll + el ancho del contenedor
// cuando el scroll llegue al ancho del scroll + el ancho del contenedor, hacer una peticion para traer mas peliculas

swiperWrapper.addEventListener('transitionend', () => {
  console.log(swiperWrapper.scrollLeft + swiperWrapper.clientWidth);

  if (
    swiperWrapper.scrollLeft + swiperWrapper.clientWidth >=
    swiperWrapper.scrollWidth
  ) {
    // getMreMovies();
    console.log('llego al final');
  }
});

// const getMoreMovies = (id) => {
getMovies(1).then((data) => {
  const { results } = data;
  results.forEach((movie) => {
    cardTrandingMovie(movie);
  });
});
// };

getUpcomingMovies(1).then((data) => {
  const { results } = data;
  results.forEach((movie) => {
    cardUpcomingMovie(movie);
  });
});
getTopRatedMovies(1).then((data) => {
  const { results } = data;
  results.forEach((movie) => {
    cardTopRatedMovie(movie);
  });
});
getPopularSeries(1).then((data) => {
  const { results } = data;
  const popularSeries = results.slice(1, 4);
  console.log(popularSeries);
  popularSeries.forEach((serie) => {
    cardPopularSeries(serie);
  });
});
const cardPopularSeries = (serie) => {
  const { original_name, poster_path, genre_ids } = serie;

  const popularSerie = document.createElement('div');
  popularSerie.classList.add('popular-serie');
  popularSerie.classList.add('swiper-slide');
  getSeriesGenres().then((data) => {
    const serieGenre = document.createElement('div');
    serieGenre.classList.add('serie-genres');
    const { genres } = data;
    for (const { id, name } of genres) {
      if (genre_ids.includes(id)) {
        const genreName = document.createElement('p');
        genreName.textContent = name;
        serieGenre.append(genreName);
      }
    }

    popularSerie.append(serieGenre);
  });

  popularSerie.innerHTML = `
        <img
          draggable="false"
          class="popular-img"
          src="${imageBaseUrl}${poster_path}"
          alt="movie-image"
          />
        <h5 class="font-semibold text-text">${original_name}</h5>
        `;
  swiperWrapperSeries.append(popularSerie);
};
const cardTrandingMovie = (movie) => {
  const { original_title, overview, genre_ids, poster_path, backdrop_path } =
    movie;

  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-container');
  movieCard.classList.add('swiper-slide');

  const movieImg = document.createElement('div');
  movieImg.classList.add('movie-img');

  const imgBackgroundContainer = document.createElement('div');
  imgBackgroundContainer.classList.add('img-background-container');

  const imgBackground = document.createElement('img');
  imgBackground.classList.add('img-background');
  imgBackground.src = `${imageBaseUrlbackground}${backdrop_path}`;
  imgBackground.alt = backdrop_path;

  imgBackgroundContainer.append(imgBackground);
  movieCard.append(imgBackgroundContainer);

  const img = document.createElement('img');
  img.classList.add('movieimg');

  img.src = `${imageBaseUrl}${poster_path}`;
  img.alt = original_title;
  movieImg.append(img);

  const moviInfo = document.createElement('div');
  moviInfo.classList.add('movie-info');
  moviInfo.innerHTML = `<h3 class="font-semibold">${original_title}</h3>
  <p class="font-semibold  text-sm font- text-text">
               ${overview} </p>
               <div class="movie-btns">
               <button class="btn-details"><span class="font-light ">
                 View Details 
               </span> <i class="fa-solid fa-circle-info fa-sm" style="color: aliceblue;"></i></button>
             </div>
               `;
  movieCard.append(movieImg);
  movieCard.append(moviInfo);
  swiperWrapper.append(movieCard);
};
const cardUpcomingMovie = (movie) => {
  const { original_title, overview, release_date, poster_path } = movie;

  const upcomingMovie = document.createElement('div');
  upcomingMovie.classList.add('upcoming-movie');
  upcomingMovie.innerHTML = `
  <img
                draggable="false"
                class="upcoming-img"
                src="${imageBaseUrl}${poster_path}"
                alt="movie-image"
              /><h5 class="font-semibold">${original_title} | Coming on : ${release_date}</h5>
  <p class="font-semibold text-text">
               ${overview} </p>
               `;
  upcomingContainer.append(upcomingMovie);
};
const cardTopRatedMovie = (movie) => {
  const { poster_path, original_title } = movie;
  const topRatedMovie = document.createElement('div');
  topRatedMovie.classList.add('top-rated-movie');
  topRatedMovie.classList.add('swiper-slide');

  topRatedMovie.innerHTML = `
  <img
                draggable="false"
                class="topRated-img"
                src="${imageBaseUrl}${poster_path}"
                alt="movie-image"
              />
              <h5 class="text-text font-semibold">${original_title}</h5>  
  `;
  swiperWrapperTopRated.append(topRatedMovie);
};

new Swiper('#swiper-reviews', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1024: {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      centeredSlides: false,
    },
  },
});

new Swiper('#swiper-top-rated-movies', {
  slidesPerView: 6,
  centeredSlides: true,
  spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1024: {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      centeredSlides: false,
    },
  },
});

new Swiper('#swiper-recommend', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 24,
  lazyLoading: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1024: {
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      centeredSlides: false,
    },
  },
});
