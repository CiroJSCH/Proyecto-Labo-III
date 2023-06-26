import { getPopularSeries } from '../../api/api.js';
import { checkAuthState } from '../common/authUser.js';

checkAuthState((user) => {
  if (!user) {
    window.location.href = './login.html';
  }
});

const seriescontainer = document.querySelector('#series-container');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');

let currentPage = 1;
const totalPages = 15;

getPopularSeries(currentPage).then((data) => {
  const { results } = data;
  results.forEach((serie) => {
    generateSerieCard(serie);
  });
  updatePaginationButtons();
});

const generateSerieCard = (serie) => {
  const { name, poster_path, id } = serie;

  const seriePic = document.createElement('div');
  seriePic.classList.add(
    'w-full',
    'h-[300px]',
    'bg-center',
    'bg-cover',
    'bg-no-repeat',
  );
  seriePic.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${poster_path}')`;

  const serieCard = `
    <a href="seriesDetails.html?movieId=${id}" class="relative col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-2 cursor-pointer">
      ${seriePic.outerHTML}
      <p class="text-text font-medium text-[20px] font-title">${name}</p>
    </a>
  `;

  seriescontainer.appendChild(
    document.createRange().createContextualFragment(serieCard),
  );
};

const updatePaginationButtons = () => {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
};

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    seriescontainer.innerHTML = '';
    getPopularSeries(currentPage).then((data) => {
      const { results } = data;
      results.forEach((serie) => {
        generateSerieCard(serie);
      });
      updatePaginationButtons();
    });
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    seriescontainer.innerHTML = '';
    getPopularSeries(currentPage).then((data) => {
      const { results } = data;
      results.forEach((serie) => {
        generateSerieCard(serie);
      });
      updatePaginationButtons();
    });
  }
});
