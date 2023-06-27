/* eslint-disable no-undef */
/* eslint-disable no-new */
import { getSeriesDetails, getSeriesReviews } from '../../api/api.js';

const movieId = new URLSearchParams(window.location.search).get('movieId');

const movieTitle = document.getElementById('movie-title');
const moviePoster = document.getElementById('movie-poster');
const movieBanner = document.getElementById('movie-banner');
const movieRating = document.getElementById('movie-rating');
const movieVoteCount = document.getElementById('movie-vote-count');
const movieGenres = document.getElementById('movie-genres');
const movieReleaseDate = document.getElementById('movie-release-date');
const movieRuntime = document.getElementById('movie-runtime');
const movieOverview = document.getElementById('movie-overview');

const swiperWrapper = document.querySelector('.swiper-wrapper');

const setRatingColor = (rating) => {
  if (rating >= 7.5) {
    return 'bg-emerald-200 border-emerald-600 text-emerald-600';
  }
  if (rating >= 6.0) {
    return 'bg-yellow-200 border-yellow-600 text-yellow-600';
  }
  return 'bg-red-200 border-red-600 text-red-600';
};

getSeriesDetails(movieId).then((response) => {
  document.title = `CineHUB | ${response.name}`;
  movieTitle.innerHTML = response.name;
  moviePoster.style.backgroundImage = `url('https://image.tmdb.org/t/p/w154/${response.poster_path}')`;
  movieBanner.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${response.backdrop_path}')`;
  movieRating.innerHTML = response.vote_average
    ? response.vote_average.toFixed(2)
    : '';
  movieVoteCount.innerHTML = `${response.vote_count || 0} votes`;

  movieGenres.innerHTML = '';
  response.genres.forEach((genre) => {
    movieGenres.innerHTML += `
        <span
          class="rounded-lg bg-gray-500 px-2 py-1 text-white font-semibold uppercase"
        >
          ${genre.name}
        </span>`;
  });

  movieReleaseDate.innerHTML = response.first_air_date?.slice(0, 4);
  const numSeasons = response.number_of_seasons || 0;
  movieRuntime.innerHTML = `${numSeasons} ${
    numSeasons === 1 ? 'season' : 'seasons'
  }`;
  movieOverview.innerHTML = response.overview || '';
});

const tempReviewsFragment = document.createDocumentFragment();

getSeriesReviews(movieId).then((response) => {
  response.results.forEach((review) => {
    const { author } = review;
    const { username } = review.author_details;
    const { content } = review;
    const { rating } = review.author_details;

    const ratingColor = setRatingColor(rating);

    const reviewCard = `<li
    class="swiper-slide flex flex-col gap-3 bg-[#2b2b2b] rounded-lg drop-shadow-md p-2 relative"
  >
    <div class="flex items-center gap-3">
      <div
        class="h-[45px] w-[45px] rounded-full hidden xs:block bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://image.tmdb.org/t/p/w200/${
          review.author_details.avatar_path
        }')"
      ></div>
      <div class="flex flex-col gap-1">
        <p
          id="review-author"
          class="font-title font-semibold text-[18px] text-text"
        >
          ${author}
        </p>
        <p
          class="text-[15px] text-gray-400"
          id="review-username"
        >
          ${username}
        </p>
      </div>
    </div>
    <p
      id="review-content"
      class="text-gray-400 leading-[27px] pb-[35px] max-h-[200px]"
    >
      ${content.slice(0, 200)}... 
      <a 
        href="${review.url}" 
        target="_blank" 
        class="underline text-blue-400">
        Read more
      </a>
    </p>
    <span
      id="review-rating"
      class="absolute bottom-2 right-2 rounded-full ${ratingColor} font-bold font-title border-2 h-[34px] w-[34px] grid place-content-center"
      >${rating}</span
    >
  </li>`;

    tempReviewsFragment.appendChild(
      document.createRange().createContextualFragment(reviewCard),
    );
  });
  swiperWrapper.appendChild(tempReviewsFragment);
});

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
      direction: 'vertical',
      slidesPerView: 2,
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
