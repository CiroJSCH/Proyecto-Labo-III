// Función para llamar a la API y obtener las películas populares
const getPopularMovies = async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/popular?api_key=7e166e717fba198f23734103f094beb2&page=1',
  );
  const data = await response.json();
  return data.results;
};

// Función para actualizar el contenido de las películas populares en el DOM
const updatePopularMovies = async () => {
  try {
    const movies = await getPopularMovies();
    const peliculas = document.querySelectorAll('.peliculas-container .pelis');

    peliculas.forEach((pelicula, index) => {
      const imagePath =
        'https://image.tmdb.org/t/p/w342' + movies[index].backdrop_path;
      const imgElement = pelicula.querySelector('.img-container img');
      imgElement.src = imagePath;

      const tituloElement = pelicula.querySelector('h3');
      tituloElement.textContent = movies[index].title;
    });
  } catch (error) {
    console.log('Error al obtener la lista de películas:', error);
  }
};
// Actualizar películas populares al cargar la página
updatePopularMovies();

// Elementos de la barra de navegación
const headerEl = document.querySelector('header');
const menuEl = document.querySelector('#menu-icon');
const navbarEl = document.querySelector('.navbar');

// Cambiar clase "shadow" en la barra de navegación al hacer scroll
window.addEventListener('scroll', function () {
  headerEl.classList.toggle('shadow', window.scrollY > 0);
});

// Mostrar/ocultar menú al hacer clic en el ícono del menú
menuEl.addEventListener('click', () => {
  menuEl.classList.toggle('bx-x');
  navbarEl.classList.toggle('active');
});

// Ocultar menú al hacer scroll
window.addEventListener('scroll', () => {
  menuEl.classList.remove('bx-x');
  navbarEl.classList.remove('active');
});

// Inicializar el slider de tendencias
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Obtener el elemento del slider de películas
const movieSlider = document.getElementById('movieSlider');

// Obtener las películas populares de la API y mostrarlas en el slider
const apiUrl =
  'https://api.themoviedb.org/3/movie/popular?api_key=7e166e717fba198f23734103f094beb2&page=1';
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results;
    movies.forEach((movie) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      const image = document.createElement('img');
      image.src = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;
      image.alt = movie.title;
      image.classList.add('movie-image');
      const title = document.createElement('h3');
      title.classList.add('movie-title');
      title.textContent = movie.title;
      slide.appendChild(image);
      slide.appendChild(title);
      movieSlider.appendChild(slide);
    });
    const swiper = new Swiper('.mySwiper', {});
  })
  .catch((error) => {
    console.error('Error al obtener los datos de las películas:', error);
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

    const title = document.createElement('h3');
    title.textContent = movie.title;

    slide.appendChild(imgContainer);
    slide.appendChild(title);

    tendenciaContainer.appendChild(slide);
  });

  tendenciaSlider.update();
};

renderTrendingMovies();

const llamarApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=7e166e717fba198f23734103f094beb2&page=2`,
  );
  const data = await response.json();
  return data.results;
};

llamarApi()
  .then((data) => {
    const peliculasContainer = document.querySelector('.peliculas-container');

    for (let i = 0; i < 15; i++) {
      const pelicula = data[Math.floor(Math.random() * data.length)];
      const imagePath =
        'https://image.tmdb.org/t/p/w342' + pelicula.poster_path;

      const peliculaDiv = document.createElement('div');
      peliculaDiv.classList.add('pelis');

      const imgContainer = document.createElement('div');
      imgContainer.classList.add('img-container');

      const imgElement = document.createElement('img');
      imgElement.src = imagePath;
      imgElement.alt = pelicula.title;

      imgContainer.appendChild(imgElement);
      peliculaDiv.appendChild(imgContainer);

      const tituloElement = document.createElement('h3');
      tituloElement.textContent = pelicula.title;
      peliculaDiv.appendChild(tituloElement);

      peliculasContainer.appendChild(peliculaDiv);
    }
  })
  .catch((error) => {
    console.error('Error al obtener la lista de películas:', error);
  });

const llamarApi1 = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=7e166e717fba198f23734103f094beb2&page=1`,
  );
  const data = await response.json();
  return data.results;
};

llamarApi1()
  .then((data) => {
    const bannerContainer = document.querySelector('#banner .swiper-wrapper');

    for (let i = 0; i < data.length; i++) {
      const pelicula = data[i];
      const imagePath =
        'https://image.tmdb.org/t/p/w342' + pelicula.backdrop_path;

      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add('swiper-slide', 'container');

      const imgElement = document.createElement('img');
      imgElement.src = imagePath;
      imgElement.alt = 'banner';

      const bannerText = document.createElement('div');
      bannerText.classList.add('banner-text');

      const tituloElement = document.createElement('h1');
      tituloElement.textContent = pelicula.title;

      const mirarAhoraLink = document.createElement('a');
      mirarAhoraLink.href = '#';
      mirarAhoraLink.classList.add('btn');
      mirarAhoraLink.textContent = 'MIRAR AHORA';

      const playLink = document.createElement('a');
      playLink.href = '#';
      playLink.classList.add('play');
      const playIcon = document.createElement('i');
      playIcon.classList.add('bx', 'bx-play-circle');
      playLink.appendChild(playIcon);

      bannerText.appendChild(tituloElement);
      bannerText.appendChild(mirarAhoraLink);
      bannerText.appendChild(playLink);

      swiperSlide.appendChild(imgElement);
      swiperSlide.appendChild(bannerText);

      bannerContainer.appendChild(swiperSlide);
    }

    const bannerSwiper = new Swiper('#banner', {});
  })
  .catch((error) => {
    console.error('Error al obtener la lista de películas:', error);
  });

// URL de la API de TMDb
const API_URL = 'https://api.themoviedb.org/3';
// Clave de la API de TMDb (reemplaza 'YOUR_API_KEY' con tu propia clave)
const API_KEY = '7e166e717fba198f23734103f094beb2';

// Cantidad de imágenes a obtener de la API
const NUM_IMAGENES = 9;

// Obtener imágenes de la API de TMDb
async function obtenerImagenes() {
  try {
    const response = await fetch(
      `${API_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const data = await response.json();

    const imagenes = data.results.slice(0, NUM_IMAGENES).map((pelicula) => {
      return {
        url: `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`,
        titulo: pelicula.title,
      };
    });

    return imagenes;
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
  }
}

// Generar elementos HTML para las imágenes
async function generarElementosHTML() {
  const imagenes = await obtenerImagenes();
  const swiperWrapper = document.getElementById('swiperWrapper');

  imagenes.forEach((imagen) => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    const img = document.createElement('img');
    img.src = imagen.url;

    swiperSlide.appendChild(img);
    swiperWrapper.appendChild(swiperSlide);
  });

  // Inicializar Swiper después de cargar las imágenes
  iniciarSwiper();
}

// Inicializar el slider Swiper
function iniciarSwiper() {
  var swiper = new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

// Generar elementos HTML al cargar la página
window.addEventListener('load', generarElementosHTML);
