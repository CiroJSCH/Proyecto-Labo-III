const mobileNavbar = document.getElementById('mobile-navbar');
const desktopNavbar = document.getElementById('desktop-navbar');

mobileNavbar.classList.add(
  'h-[70px]',
  'w-screen',
  'glassmorphism',
  'fixed',
  'bottom-0',
  'z-[50]',
  'lg:hidden',
);
mobileNavbar.innerHTML = `
  <ul
    class="flex items-center px-3 justify-between h-[80px] max-w-[450px] md:max-w-[500px] mx-auto relative"
  >
    <a
      href="./main-page.html"
      class="flex flex-col gap-3 items-center font-text uppercase text-text"
    >
      <i class="fa-solid fa-house fa-lg"></i>
      <p>Home</p>
    </a>
    <li
      id="searchMobileButton"
      class="flex flex-col gap-3 items-center font-text uppercase text-text"
    >
      <i class="fa-solid fa-magnifying-glass fa-lg"></i>
      <p>Search</p>
    </li>
    <a
      href="./see-more-movies.html?filter=popular"
      class="flex flex-col gap-3 items-center font-text uppercase text-text"
        >
      <i class="fa-solid fa-film fa-lg"></i>
      <p>Movies</p>
    </a>
    <a
      href="./series.html"
      class="flex flex-col gap-3 items-center font-text uppercase text-text"
        >
      <i class="fa-solid fa-video fa-lg"></i>
      <p>Series</p>
    </a>
    <form id="form-search-mobile" class="border absolute -top-[60px] h-[50px] w-[90%] mx-auto bg-secondaryBtn rounded-md p-4 hidden items-center justify-center">
      <div class="flex items-center justify-between w-full h-full">
        <input id="search-mobile-value" type="text" class="w-full bg-transparent text-text focus:outline-none"/>
        <span class="" id="close-search-mobile">
        <i class="fa-regular fa-circle-xmark fa-2xl text-text"></i>
        </span>
      </div>
    </form>
  </ul>
`;

desktopNavbar.classList.add(
  'w-screen',
  'h-auto',
  'bg-black',
  'hidden',
  'lg:flex',
  'text-text',
  'py-5',
  'fixed',
  'top-0',
  'z-[55]',
);
desktopNavbar.innerHTML = `
  <div class="px-[80px] w-full flex items-center justify-between max-w-[1580px] mx-auto">
    <section class="flex items-center gap-5">
      <a class="font-title text-text text-[30px] pl-2" href="./main-page.html">
        Cine<span class="bg-primaryBtn px-1 py-2 rounded-md">HUB</span>
      </a>
      <ul
        class="flex items-center gap-5 text-xl font-semibold uppercase tracking-[1.15px]"
      >
        <a href="./main-page.html" class="hover:text-primaryBtn transition-colors cursor-pointer">
          Home
        </a>
        <a href="./see-more-movies.html?filter=popular" class="hover:text-primaryBtn transition-colors cursor-pointer">
          Movies
        </a>
        <a href="./series.html" class="hover:text-primaryBtn transition-colors cursor-pointer">
          Series
        </a>
      </ul>
    </section>
    <form id="searchDesktop">
      <div
        class="bg-white flex items-center justify-between rounded-2xl overflow-hidden"
      >
        <input id="searchInput"
          type="text"
          class="p-2 text-black focus:outline-none"
          placeholder="Search something..."
        />
        <button
          class="bg-primaryBtn hover:bg-blue-600 transition-colors duration-200 p-3"
          type="submit"
        >
          <i class="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
      </div>
    </form>
  </div>
`;

const searchDesktop = document.querySelector('#searchDesktop');
const searchInput = document.querySelector('#searchInput');

searchDesktop.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!searchInput.value) {
    return null;
  }
  window.location.href = `./filter.html?title=${searchInput.value}`;
});

const formSearchModal = document.querySelector('#form-search-mobile');

const closeSearchModal = document.querySelector('#close-search-mobile');
closeSearchModal.addEventListener('click', () => {
  formSearchModal.classList.replace('flex', 'hidden');
});

const searchMobileButton = document.querySelector('#searchMobileButton');
searchMobileButton.addEventListener('click', () => {
  formSearchModal.classList.replace('hidden', 'flex');
});

const searchMobileValue = document.querySelector('#search-mobile-value');
formSearchModal.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!searchMobileValue.value) {
    return null;
  }
  window.location.href = `./filter.html?title=${searchMobileValue.value}`;
});
