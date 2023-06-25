const traerPeliculas = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=7e166e717fba198f23734103f094beb2&page=2',
  );
  const data = await response.json();
  return data.results;
};

traerPeliculas().then((data) => {
  const peliculasContainer = document.querySelector('.peliculas-container');
  const peliculasSet = new Set(); // Conjunto para almacenar películas únicas

  while (peliculasSet.size < 15) {
    const pelicula = data[Math.floor(Math.random() * data.length)];
    peliculasSet.add(pelicula);
  }

  peliculasSet.forEach((pelicula) => {
    const imagePath = `https://image.tmdb.org/t/p/w342${pelicula.poster_path}`;

    const peliculaDiv = document.createElement('div');
    peliculaDiv.classList.add('pelis');

    const peliculaLink = document.createElement('a');
    peliculaLink.href = 'login.html';
    peliculaLink.target = '_blank';

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = pelicula.title;
    peliculaLink.appendChild(imgElement);

    imgContainer.appendChild(peliculaLink);
    peliculaDiv.appendChild(imgContainer);

    const tituloElement = document.createElement('h3');
    tituloElement.textContent = pelicula.title;
    peliculaDiv.appendChild(tituloElement);

    peliculasContainer.appendChild(peliculaDiv);
  });
});

const traerSeries = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/tv/popular?api_key=7e166e717fba198f23734103f094beb2&page=1',
  );
  const data = await response.json();
  return data.results;
};

traerSeries().then((data) => {
  const seriesContainer = document.querySelector('.series-container');
  const seriesSet = new Set(); // Conjunto para almacenar series únicas

  while (seriesSet.size < 15) {
    const serie = data[Math.floor(Math.random() * data.length)];
    seriesSet.add(serie);
  }

  seriesSet.forEach((serie) => {
    const imagePath = `https://image.tmdb.org/t/p/w342${serie.poster_path}`;

    const serieDiv = document.createElement('div');
    serieDiv.classList.add('serie');

    const serieLink = document.createElement('a');
    serieLink.href = 'login.html';
    serieLink.target = '_blank';

    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = serie.name;
    serieLink.appendChild(imgElement);

    const tituloElement = document.createElement('h3');
    tituloElement.textContent = serie.name;
    serieLink.appendChild(tituloElement);

    serieDiv.appendChild(serieLink);

    seriesContainer.appendChild(serieDiv);
  });
});

const tendenciaSlider = new Swiper('.tendencia-conteiner', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=7e166e717fba198f23734103f094beb2',
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log('Error al obtener la lista de películas en tendencia:', error);
    return [];
  }
};

const renderTrendingMovies = async () => {
  const movies = await fetchTrendingMovies();
  const tendenciaContainer = document.querySelector(
    '.tendencia-conteiner .swiper-wrapper',
  );

  movies.forEach((movie) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide', 'pelis');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
    img.alt = movie.title;
    imgContainer.appendChild(img);

    const linkElement = document.createElement('a');
    linkElement.href = 'login.html';
    linkElement.target = '_blank';

    const title = document.createElement('h3');
    title.textContent = movie.title;

    linkElement.appendChild(imgContainer);
    linkElement.appendChild(title);
    slide.appendChild(linkElement);
    tendenciaContainer.appendChild(slide);
  });

  tendenciaSlider.update();
};

renderTrendingMovies();
