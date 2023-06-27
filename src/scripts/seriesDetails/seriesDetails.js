/* eslint-disable no-unused-vars */
import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  onSnapshot,
  arrayRemove,
} from 'firebase/firestore';
import { checkAuthState } from '../common/authUser';
import { db } from '../../firebase/index.js';
import { errorNotification, successNotification } from '../../tostify/main';

const movieId = new URLSearchParams(window.location.search).get('movieId');

const favoriteButtons = document.querySelectorAll('.add-favorites');
const seeLaterButtons = document.querySelectorAll('.add-see-later');

checkAuthState((user) => {
  if (!user) {
    window.location.href = `${window.location.origin}/src/pages/login.html`;
  }
});

const userId = sessionStorage.getItem('userId');
const userRef = doc(db, 'Users', userId);

const updateFavoritesAndSeeLater = (favorites, seeLater) => {
  const isFavorite = favorites.includes(movieId);
  const isInSeeLater = seeLater.includes(movieId);

  favoriteButtons.forEach((button) => {
    if (isFavorite) {
      button.classList.replace('bg-gray-800', 'bg-rose-200');
    } else {
      button.classList.replace('bg-rose-200', 'bg-gray-800');
    }
  });

  seeLaterButtons.forEach((button) => {
    if (isInSeeLater) {
      button.classList.replace('bg-gray-800', 'bg-emerald-200');
    } else {
      button.classList.replace('bg-emerald-200', 'bg-gray-800');
    }
  });
};

// eslint-disable-next-line no-shadow
const unsubscribe = onSnapshot(userRef, (doc) => {
  const { favorites, seeLater } = doc.data();
  updateFavoritesAndSeeLater(favorites, seeLater);
});

const saveMovie = async (movieID, category) => {
  try {
    if (category === 'favorites') {
      await updateDoc(userRef, {
        favorites: arrayUnion(movieID),
      });
    } else {
      await updateDoc(userRef, {
        seeLater: arrayUnion(movieID),
      });
    }
    successNotification(
      `${
        category === 'favorites'
          ? '❤ Added to favorites'
          : '⏱ Added to see later'
      }`,
    );
  } catch (error) {
    errorNotification();
  }
};

const removeMovie = async (movieID, category) => {
  try {
    if (category === 'favorites') {
      await updateDoc(userRef, {
        favorites: arrayRemove(movieID),
      });
    } else {
      await updateDoc(userRef, {
        seeLater: arrayRemove(movieID),
      });
    }

    successNotification(
      `${
        category === 'favorites'
          ? ' ❤ Removed from favorites'
          : '⏱ Removed from see later'
      }`,
    );
  } catch (error) {
    errorNotification();
  }
};

favoriteButtons.forEach((button) => {
  button.addEventListener('click', async (_e) => {
    const { favorites, seeLater } = (await getDoc(userRef)).data();
    const isFavorite = favorites.includes(movieId);

    if (!isFavorite) {
      saveMovie(movieId, 'favorites');
      button.classList.replace('bg-gray-800', 'bg-rose-200');
    } else {
      removeMovie(movieId, 'favorites');
      button.classList.replace('bg-rose-200', 'bg-gray-800');
    }
  });
});

seeLaterButtons.forEach((button) => {
  button.addEventListener('click', async (_e) => {
    const { favorites, seeLater } = (await getDoc(userRef)).data();
    const isInSeeLater = seeLater.includes(movieId);

    if (!isInSeeLater) {
      saveMovie(movieId, 'seeLater');
      button.classList.replace('bg-gray-800', 'bg-emerald-200');
    } else {
      removeMovie(movieId, 'seeLater');
      button.classList.replace('bg-emerald-200', 'bg-gray-800');
    }
  });
});
