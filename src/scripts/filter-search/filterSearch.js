import { getMoviesOrSeriesByTitle } from '../../api/api.js';
import { checkAuthState } from '../common/authUser.js';

const queryTitle = new URLSearchParams(window.location.search).get('title');
const moviesContainer = document.querySelector('#movies-container');
const paginationContainer = document.querySelector('#pagination-container');
const nextBtn = document.querySelector('#next-button');
const prevBtn = document.querySelector('#prev-button');
const titleContainer = document.querySelector('.titulos');
const title = document.createElement('h1');
const notFound = document.querySelector('#found-container');
checkAuthState((user) => {
  if (!user) {
    window.location.href = './login.html';
  }
});
title.classList.add(
  'text-white',
  'text-3xl',
  'text-center',
  'mt-10',
  'font-title',
);
let currentPage = 1;
const totalPages = 9;

document.title = `CineHUB | ${queryTitle}`;

getMoviesOrSeriesByTitle(queryTitle, currentPage).then((data) => {
  const { results } = data;
  if (results.length === 0) {
    titleContainer.appendChild(title);
    notFound.classList.replace('hidden', 'flex');
    moviesContainer.classList.replace('grid', 'found');
    paginationContainer.classList.replace('flex', 'hidden');
  } else {
    title.textContent = `${queryTitle}`;
    paginationContainer.classList.replace('hidden', 'flex');
    notFound.classList.replace('flex', 'hidden');
    titleContainer.appendChild(title);
    results.forEach((movie) => {
      generateMovieCard(movie);
    });
    updatePaginationButtons();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    moviesContainer.innerHTML = '';
    getMoviesOrSeriesByTitle(queryTitle, currentPage).then((data) => {
      const { results } = data;
      results.forEach((movie) => {
        generateMovieCard(movie);
      });
      updatePaginationButtons();
    });
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    moviesContainer.innerHTML = '';
    getMoviesOrSeriesByTitle(queryTitle, currentPage).then((data) => {
      const { results } = data;
      results.forEach((movie) => {
        generateMovieCard(movie);
      });
      updatePaginationButtons();
    });
  }
});

const updatePaginationButtons = () => {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
};

const generateMovieCard = (movie) => {
  const { id, title, poster_path } = movie;

  const moviePic = document.createElement('div');
  moviePic.classList.add(
    'w-full',
    'h-[300px]',
    'bg-center',
    'bg-cover',
    'bg-no-repeat',
  );
  moviePic.style.backgroundImage = `url(
      'https://image.tmdb.org/t/p/w500/${poster_path}'   
    )`;

  const movieCard = `
    <a href="movieDetail.html?movieId=${id}" class="relative col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-2 cursor-pointer">
      ${moviePic.outerHTML}
      <p class="text-text font-medium text-[20px] font-title">${title}</p>
    </a>
  `;

  moviesContainer.appendChild(
    document.createRange().createContextualFragment(movieCard),
  );
};
