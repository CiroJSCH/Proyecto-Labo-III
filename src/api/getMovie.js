export const getMovieDetail = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return response.json();
};

export const getMovieReviews = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return response.json();
};

