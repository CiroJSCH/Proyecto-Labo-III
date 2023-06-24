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
    class="flex items-center px-3 justify-between h-[80px] max-w-[450px] md:max-w-[500px] mx-auto"
  >
    <li
      class="flex flex-col gap-3 items-center font-text uppercase text-text"
    >
      <i class="fa-solid fa-house fa-lg"></i>
      <p>Home</p>
    </li>
    <li
      class="flex flex-col gap-3 items-center font-text uppercase text-text"
    >
      <i class="fa-solid fa-magnifying-glass fa-lg"></i>
      <p>Search</p>
    </li>
    <li
      class="flex flex-col gap-3 items-center font-text uppercase text-text"
        >
      <i class="fa-solid fa-film fa-lg"></i>
      <p>Movies</p>
    </li>
    <li
      class="flex flex-col gap-3 items-center font-text uppercase text-text"
        >
      <i class="fa-solid fa-video fa-lg"></i>
      <p>Series</p>
    </li>
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
      <h1 class="font-title text-text text-[30px] pl-2">
        Cine<span class="bg-primaryBtn px-1 py-2 rounded-md">HUB</span>
      </h1>
      <ul
        class="flex items-center gap-5 text-xl font-semibold uppercase tracking-[1.15px]"
      >
        <li class="hover:text-primaryBtn transition-colors cursor-pointer">
          Home
        </li>
        <li class="hover:text-primaryBtn transition-colors cursor-pointer">
          Movies
        </li>
        <li class="hover:text-primaryBtn transition-colors cursor-pointer">
          Series
        </li>
      </ul>
    </section>
    <form>
      <div
        class="bg-white flex items-center justify-between rounded-2xl overflow-hidden"
      >
        <input
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
