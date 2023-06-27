/* eslint-disable camelcase */
import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import { getMovieDetail } from '../../api/getMovie.js';
import { db } from '../../firebase/index.js';
import { errorNotification, successNotification } from '../../tostify/main.js';
import { checkAuthState, getUserById } from '../common/authUser.js';

checkAuthState((user) => {
  if (!user) {
    window.location.href = `${window.location.origin}/src/pages/login.html`;
  }
});

const userId = sessionStorage.getItem('userId');

const filter = new URLSearchParams(window.location.search).get('filter');

const moviesContainer = document.getElementById('movies-container');
const tempMoviesContainer = document.createDocumentFragment();

const noFavorites = document.getElementById('no-favorites');
const noSeeLater = document.getElementById('no-seelater');

getUserById(userId).then((user) => {
  const { favorites, seeLater } = user;

  if (favorites.length === 0 && filter === 'favorites') {
    noFavorites.classList.replace('hidden', 'flex');
    moviesContainer.classList.replace('grid', 'hidden');
  } else if (favorites.length > 0 && filter === 'favorites') {
    noFavorites.classList.replace('flex', 'hidden');
    moviesContainer.classList.replace('hidden', 'grid');
  }

  if (seeLater.length === 0 && filter === 'seeLater') {
    noSeeLater.classList.replace('hidden', 'flex');
    moviesContainer.classList.replace('grid', 'hidden');
  } else if (seeLater.length > 0 && filter === 'seeLater') {
    noFavorites.classList.replace('flex', 'hidden');
    moviesContainer.classList.replace('hidden', 'grid');
  }

  if (filter === 'favorites') {
    favorites.forEach((favorite) => {
      getMovieDetail(favorite)
        .then((response) => {
          const moviePic = document.createElement('div');
          moviePic.classList.add(
            'w-full',
            'h-[300px]',
            'bg-center',
            'bg-cover',
            'bg-no-repeat',
          );
          moviePic.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${response.poster_path}')`;

          const movieCard = `
            <a href="movieDetail.html?movieId=${response.id}" class="relative col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-2 cursor-pointer">
              ${moviePic.outerHTML}
              <p class="text-text font-medium text-[20px] font-title">${response.title}</p>
              <button
              class="removeFavorite border-red-500 border grid place-content-center bg-rose-200 text-red-500 rounded-full p-2 w-[38px] h-[38px] transition-colors duration-200 ease-in-out hover:bg-rose-100 absolute top-2 right-2"
            >
                <i id="${response.id}" class="fa-regular fa-heart fa-lg"></i>
              </button>
            </a>
          `;

          tempMoviesContainer.appendChild(
            document.createRange().createContextualFragment(movieCard),
          );
        })
        .then(() => {
          moviesContainer.appendChild(tempMoviesContainer);

          const removeFavoriteButtons =
            document.querySelectorAll('.removeFavorite');

          removeFavoriteButtons.forEach((button) => {
            try {
              button.addEventListener('click', async (e) => {
                e.preventDefault();
                const movieId = e.target.closest('a').href.split('=')[1];

                const userRef = doc(db, 'Users', userId);

                await updateDoc(userRef, {
                  favorites: arrayRemove(movieId),
                });

                if (e.target.id === movieId) {
                  if (!e.target.dataset.removed) {
                    successNotification('Removed from favorites');
                    e.target.dataset.removed = true;
                  }
                }

                e.target.closest('a').remove();

                if (moviesContainer.children.length === 0) {
                  noFavorites.classList.replace('hidden', 'flex');
                  moviesContainer.classList.replace('grid', 'hidden');
                }
              });
            } catch (error) {
              errorNotification();
            }
          });
        });
    });
  } else {
    seeLater.forEach((mov) => {
      getMovieDetail(mov)
        .then((response) => {
          const moviePic = document.createElement('div');
          moviePic.classList.add(
            'w-full',
            'h-[300px]',
            'bg-center',
            'bg-cover',
            'bg-no-repeat',
          );
          moviePic.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${response.poster_path}')`;

          const movieCard = `
            <a href="movieDetail.html?movieId=${response.id}" class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-2 cursor-pointer relative">
              ${moviePic.outerHTML}
              <p class="text-text font-medium text-[20px] font-title">${response.title}</p>
              <button
              class="removeSeeLater absolute top-2 right-2 add-see-later border-emerald-600 border grid place-content-center bg-emerald-200 text-emerald-600 rounded-full p-2 w-[38px] h-[38px] transition-colors duration-200 ease-in-out hover:bg-emerald-100"
            >
              <i id="${response.id}" class="fa-regular fa-clock fa-lg"></i>
            </button>
            </a>
          `;

          tempMoviesContainer.appendChild(
            document.createRange().createContextualFragment(movieCard),
          );
        })
        .then(() => {
          moviesContainer.appendChild(tempMoviesContainer);

          const removeSeeLaterButtons =
            document.querySelectorAll('.removeSeeLater');

          removeSeeLaterButtons.forEach((button) => {
            try {
              button.addEventListener('click', async (e) => {
                e.preventDefault();
                const movieId = e.target.closest('a').href.split('=')[1];

                const userRef = doc(db, 'Users', userId);

                await updateDoc(userRef, {
                  seeLater: arrayRemove(movieId),
                });

                if (e.target.id === movieId) {
                  if (!e.target.dataset.removed) {
                    successNotification('Removed from see later');
                    e.target.dataset.removed = true;
                  }
                }

                e.target.closest('a').remove();

                if (moviesContainer.children.length === 0) {
                  noSeeLater.classList.replace('hidden', 'flex');
                  moviesContainer.classList.replace('grid', 'hidden');
                }
              });
            } catch (error) {
              errorNotification();
            }
          });
        });
    });
  }
});
