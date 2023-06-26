import { getMovies } from '../../api/api.js';
import { checkAuthState } from '../../scripts/common/authUser.js';

// checkAuthState((user) => {
//   if (!user) {
//     window.location.href = `${window.location.origin}/src/pages/login.html}`;
//   }
// });

const moviesContainer = document.querySelector('#movies-container');
const nextBtn = document.querySelector('#next-button');
const prevBtn = document.querySelector('#prev-button');

let currentPage = 1;
let totalPages = 25;

getMovies(currentPage).then((data) => {
  const { results } = data;
  results.forEach((serie) => {
    generateMovieCard(serie);
  });
  updatePaginationButtons();
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    moviesContainer.innerHTML = '';
    getMovies(currentPage).then((data) => {
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
    currentPage--;
    moviesContainer.innerHTML = '';
    getMovies(currentPage).then((data) => {
      const { results } = data;
      results.forEach((serie) => {
        generateMovieCard(serie);
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
