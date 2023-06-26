const movieCard = (
  <a
    href="movieDetail.html?movieId=${response.id}"
    class="relative col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-2 cursor-pointer"
  >
    ${moviePic.outerHTML}
    <p class="text-text font-medium text-[20px] font-title">
      ${response.title}
    </p>
  </a>
);
const moviePic = document.createElement('div');
moviePic.classList.add(
  'w-full',
  'h-[300px]',
  'bg-center',
  'bg-cover',
  'bg-no-repeat',
);
moviePic.style.backgroundImage = url(
  'https://image.tmdb.org/t/p/w500/${response.poster_path}',
);
