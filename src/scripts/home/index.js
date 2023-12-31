import { checkAuthState } from '../common/authUser.js';
import {
  getMovies,
  getPopularSeries,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../api/api.js';

checkAuthState((user) => {
  if (!user) {
    window.location.href = './login.html';
  }
});

const popularContainer = document.getElementById('popular-container');
const tempPopularContainer = document.createDocumentFragment();

getMovies().then((response) => {
  const movies = response.results;
  movies.forEach((movie) => {
    const card = document.createElement('article');
    card.classList.add(
      'swiper-slide',
      'w-full',
      'h-full',
      'relative',
      'bg-center',
      'bg-cover',
      'bg-no-repeat',
    );
    card.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`;

    const cardPoster = document.createElement('div');
    cardPoster.classList.add(
      'h-full',
      'hidden',
      'md:flex',
      'xl:flex',
      'w-[40%]',
      'xl:w-[45%]',
      'bg-center',
      'bg-cover',
      'bg-no-repeat',
      'border-2',
      'border-gray-500',
      'rounded-lg',
    );
    cardPoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/w342/${movie.poster_path}')`;

    const cardInfo = `
    <section
        class="h-full w-full flex lg:flex-col-reverse xl:flex-row items-center lg:items-start xl:items-center justify-between gap-4 xl:gap-6 z-[60] relative p-4"
      >
        ${cardPoster.outerHTML}
        <div
          class="relative w-full h-full flex flex-col md:w-[70%] lg:w-full xl:w-[65%]"
        >
          <h2
            class="font-title text-text font-semibold text-[24px] md:text-[28px] xl:text-[32px] tracking-[1.25px]"
          >
            ${movie.title}
          </h2>
          <p class="text-[20px] md:text-[24px] xl:text-[26px] text-gray-200">${movie.release_date.slice(
            0,
            4,
          )}</p>
          <p class="text-gray-400 text-[18px] md:text-[21px] xl:text-[23px] mt-1">
            ${movie.overview.slice(0, 190)}...
          </p>
        </div>
      </section>
      <a
      href="./movieDetail.html?movieId=${movie.id}"
      class="bg-secondaryBtn hover:border-2 hover:border-blue-500 border-2 border-transparent transition-[border] duration-200 ease-out rounded-md p-2 flex items-center w-[150px] text-text justify-around absolute bottom-2 md:right-2 z-[80]"
    >
      <i
        class="fa-regular fa-eye fa-lg text-blue-500"
      ></i>
      View more
    </a>
      <div
        class="bg-[rgba(0,0,0,0.75)] absolute top-0 w-full h-full z-[40]"
      ></div>
    `;

    card.innerHTML = cardInfo;
    tempPopularContainer.appendChild(card);
  });
  popularContainer.appendChild(tempPopularContainer);
});

const topRatedContainer = document.getElementById('toprated-container');
const tempTopRatedContainer = document.createDocumentFragment();

getTopRatedMovies().then((response) => {
  const movies = response.results;
  movies.forEach((movie) => {
    const card = document.createElement('a');
    card.href = `./movieDetail.html?movieId=${movie.id}`;
    card.classList.add(
      'swiper-slide',
      'w-full',
      'h-full',
      'relative',
      'bg-center',
      'bg-cover',
      'bg-no-repeat',
    );
    card.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`;

    const cardInfo = `
      <div class="bg-black p-2 absolute w-full bottom-0 h-[40px] border-t-2 border-t-blue-500">
        <h4 class="font-title font-medium text-[20px] text-text text-center truncate">${movie.title}</h4>
      </div>
    `;
    card.innerHTML = cardInfo;
    tempTopRatedContainer.appendChild(card);
  });
  topRatedContainer.appendChild(tempTopRatedContainer);
});

const seriesContainer = document.getElementById('series-container');
const tempSeriesContainer = document.createDocumentFragment();

getPopularSeries().then((response) => {
  const series = response.results;
  series.forEach((serie) => {
    const card = document.createElement('a');
    card.href = `./seriesDetails.html?movieId=${serie.id}`;
    card.classList.add(
      'swiper-slide',
      'w-full',
      'h-full',
      'relative',
      'bg-center',
      'bg-cover',
      'bg-no-repeat',
    );
    card.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${serie.backdrop_path}')`;

    const cardInfo = `
      <div class="bg-black p-2 absolute w-full bottom-0 h-[40px] border-t-2 border-t-blue-500">
        <h4 class="font-title font-medium text-[20px] text-text text-center truncate">${serie.name}</h4>
      </div>
    `;
    card.innerHTML = cardInfo;
    tempSeriesContainer.appendChild(card);
  });
  seriesContainer.appendChild(tempSeriesContainer);
});

const upcomingContainer = document.getElementById('upcoming-container');
const tempUpcomingContainer = document.createDocumentFragment();

getUpcomingMovies().then((response) => {
  const movies = response.results;
  movies.forEach((movie) => {
    const card = document.createElement('a');
    card.href = `./movieDetail.html?movieId=${movie.id}`;
    card.classList.add('w-full');
    const cardBanner = document.createElement('section');
    cardBanner.classList.add(
      'bg-red-500',
      'w-full',
      'h-[300px]',
      'bg-center',
      'bg-cover',
      'bg-no-repeat',
      'relative',
    );
    cardBanner.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`;
    cardBanner.innerHTML = `
      <span class="bg-blue-500 rounded-md p-2 text-text font-medium absolute top-2 right-2">${movie.release_date}</span>
    `;

    const cardInfo = `
      ${cardBanner.outerHTML}
      <section class="flex flex-col gap-2 w-full h-[30%] mt-1">
        <h5 class="text-text font-title text-[22px]">
          ${movie.title}
        </h5>
        <p
          class="text-gray-400 mt-1 text-[17.5px] leading-[27px] border-b-2 border-blue-500 pb-2"
        >
          ${movie.overview.slice(0, 180)}...
        </p>
      </section>
    `;

    card.innerHTML = cardInfo;
    tempUpcomingContainer.appendChild(card);
  });
  upcomingContainer.appendChild(tempUpcomingContainer);
});
