import { checkAuthState, getUserById } from '../../scripts/common/authUser.js';
import { getMovieDetail } from '../../api/getMovie.js';

checkAuthState((user) => {
  if (!user) {
    window.location.href = `${window.location.origin}/src/pages/login.html`;
  }
});

const userId = sessionStorage.getItem('userId');
const favoritesContainer = document.getElementById('favorites');
const tempFavorites = document.createDocumentFragment();

getUserById(userId).then((user) => {
  const { favorites, username } = user;

  favorites.forEach((movieId) => {
    getMovieDetail(movieId)
      .then((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('swiper-slide');

        const image = document.createElement('img');
        image.src =
          'https://image.tmdb.org/t/p/w154/' + movie.poster_path || '.jpg';
        image.alt = `${movie.title} poster`;
        image.draggable = false;
        movieCard.appendChild(image);

        const title = document.createElement('h2');
        title.textContent = movie.title;
        title.classList.add('swiper-wrapper');
        movieCard.appendChild(title);

        tempFavorites.appendChild(movieCard);

        const name = document.getElementById('username');
        name.innerHTML = username;
      })
      .then(() => {
        favoritesContainer.appendChild(tempFavorites);
      });
  });
});
