const { VITE_API_KEY: key, VITE_API_TOKEN: token } = import.meta.env;

export const getMovies = async (pageNumber) => {
  const results = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${pageNumber}`,
  );
  const data = await results.json();
  return data;
};

export const getGenres = async () => {
  const results = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`,
  );
  const data = await results.json();
  return data;
};
