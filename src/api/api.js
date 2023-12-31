const { VITE_API_KEY: key } = import.meta.env;

export const getMovies = async (pageNumber = 1) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${pageNumber}`,
  );
  const data = await results.json();
  return data;
};
export const getUpcomingMovies = async (pageNumber = 1) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=${pageNumber}`,
  );
  const data = await results.json();
  return data;
};
export const getTopRatedMovies = async (pageNumber = 1) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=${pageNumber}`,
  );
  const data = await results.json();
  return data;
};
export const getMoviesGenres = async (id) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&id=${id}`,
  );
  const data = await results.json();
  return data;
};
export const getSeriesGenres = async () => {
  const results = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}`,
  );
  const data = await results.json();
  return data;
};
export const getPopularSeries = async (pageNumber = 1) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${key}&page=${pageNumber}`,
  );
  const data = await results.json();
  return data;
};

export const getSeriesDetails = async (serieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/${serieId}?api_key=${
      import.meta.env.VITE_API_KEY
    }`,
  );
  return response.json();
};

export const getAnyMovies = async (
  classification = 'popular',
  pageNumber = 1,
) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/movie/${classification}?api_key=${key}&page=${pageNumber}`,
  );
  const data = await results.json();
  return data;
};
export const getSeriesReviews = async (id) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${key}`,
  );
  const data = await results.json();
  return data;
};

export const getMoviesOrSeriesByTitle = async (title, page) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${title}&page=${page}`,
  );
  const data = await results.json();
  return data;
};
