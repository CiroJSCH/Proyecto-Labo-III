import { getAnyMovies } from '../../api/api.js';
import { checkAuthState } from '../common/authUser.js';

const moviesContainer = document.querySelector('#movies-container');
const nextBtn = document.querySelector('#next-button');
const prevBtn = document.querySelector('#prev-button');

let currentPage = 1;
const totalPages = 25;

checkAuthState((user) => {
  if (!user) {
    window.location.href = './login.html';
  }
});

const urlParamsCategoryFilter = new URLSearchParams(window.location.search).get(
  'filter',
);

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

const updatePaginationButtons = () => {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
};

if (urlParamsCategoryFilter === 'top_rated') {
  getAnyMovies(urlParamsCategoryFilter, currentPage).then((data) => {
    const { results } = data;
    results.forEach((movie) => {
      generateMovieCard(movie);
    });
    updatePaginationButtons();
  });
} else if (urlParamsCategoryFilter === 'upcoming') {
  getAnyMovies(urlParamsCategoryFilter, currentPage).then((data) => {
    const { results } = data;
    results.forEach((movie) => {
      generateMovieCard(movie);
    });
    updatePaginationButtons();
  });
} else {
  getAnyMovies(urlParamsCategoryFilter).then((data) => {
    const { results } = data;
    results.forEach((movie) => {
      generateMovieCard(movie);
    });
    updatePaginationButtons();
  });
}

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage += 1;
    moviesContainer.innerHTML = '';
    getAnyMovies(urlParamsCategoryFilter, currentPage).then((data) => {
      const { results } = data;
      results.forEach((serie) => {
        generateMovieCard(serie);
      });
      updatePaginationButtons();
    });
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    moviesContainer.innerHTML = '';
    getAnyMovies(urlParamsCategoryFilter, currentPage).then((data) => {
      const { results } = data;
      results.forEach((serie) => {
        generateMovieCard(serie);
      });
      updatePaginationButtons();
    });
  }
});
