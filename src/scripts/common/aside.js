const asideTrigger = document.getElementById('aside-trigger');

const asideMobile = document.getElementById('aside-mobile');
const asideDesktop = document.getElementById('aside-desktop');

asideTrigger.classList.add(
  'lg:hidden',
  'fixed',
  'z-[53]',
  'left-2',
  'top-2',
  'rounded-full',
  'grid',
  'place-content-center',
  'h-[45px]',
  'w-[45px]',
  'text-accent',
  'bg-black',
  'border-primaryBtn',
  'border',
);

asideTrigger.innerHTML = '<i class="fa-solid fa-indent fa-xl"></i>';

asideMobile.classList.add(
  'lg:hidden',
  'w-[180px]',
  'min-h-[450px]',
  '-translate-x-[180px]',
  'fixed',
  'left-0',
  'h-screen',
  'bg-background',
  'border-r-2',
  'border-primaryBtn',
  'z-[52]',
  'transition-all',
  'duration-200',
  'ease-in-out',
);

asideMobile.innerHTML = `
  <div class="h-full flex flex-col relative px-3">
    <section class="flex flex-col h-[60%] py-[100px] gap-8">
      <h1 class="font-title text-text text-[30px] pl-2">
        Cine<span class="bg-primaryBtn px-1 py-2 rounded-md">HUB</span>
      </h1>
      <ul
        class="flex flex-col items-center gap-7 text-text text-[18px] pt-5"
      >
        <li class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-regular fa-heart fa-lg"></i>
          <span class="font-semibold">Favorites</span>
        </li>
        <li class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-regular fa-clock fa-lg"></i>
          <span class="font-semibold">See Later</span>
        </li>
        <li class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-solid fa-fire fa-lg"></i>
          <span class="font-semibold">Trending</span>
        </li>
        <li class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-solid fa-star"></i>
          <span class="font-semibold">Top Rated</span>
        </li>
      </ul>
    </section>
    <section
      class="absolute bottom-0 left-0 h-[70px] bg-secondaryBtn w-full flex items-center justify-between px-3"
    >
      <div class="flex items-center gap-2">
        <div class="bg-red-500 w-[40px] h-[40px] rounded-full"></div>
        <span class="text-[15px] text-gray-400">User</span>
      </div>
      <i class="fa-solid fa-arrow-right-from-bracket fa-lg text-text"></i>
    </section>
  </div>
`;

asideDesktop.classList.add(
  'bg-background',
  'border-r-2',
  'border-r-primaryBtn',
  'w-[70px]',
  'min-h-[calc(100vh-88px)]',
  'mt-[88px]',
  'hidden',
  'lg:flex',
  'fixed',
  'left-0',
  'top-0',
  'z-[55]',
  'transition-[width]',
  'duration-200',
  'ease-in-out',
);

asideDesktop.innerHTML = `
  <div
    class="w-full min-h-[calc(100vh-88px)] flex flex-col items-center relative pt-[20px]"
  >
    <button
      id="aside-trigger-desktop"
      class="grid justify-start h-[40px] w-full text-text text-[30px] pl-5"
    >
      <i class="fa-regular fa-circle-right"></i>
    </button>

    <ul
      class="flex flex-col items-center gap-7 text-text text-[18px] mt-[70px]"
    >
      <li
        class="flex items-center gap-0 h-[36px] w-full justify-between hover:text-primaryBtn transition-colors cursor-pointer"
      >
        <i class="fa-regular fa-heart fa-lg w-[25.31px] text-center"></i>
        <span
          class="text-[24px] font-medium hidden aside-text transition-[indent] duration-200"
          >Favorites</span
        >
      </li>
      <li
        class="flex items-center gap-0 h-[36px] w-full justify-between hover:text-primaryBtn transition-colors cursor-pointer"
      >
        <i class="fa-regular fa-clock fa-lg w-[25.31px] text-center"></i>
        <span class="text-[24px] font-medium hidden aside-text"
          >See Later</span
        >
      </li>
      <li
        class="flex items-center gap-0 h-[36px] w-full justify-between hover:text-primaryBtn transition-colors cursor-pointer"
      >
        <i
          class="fa-solid fa-fire-flame-simple fa-lg w-[25.31px] text-center"
        ></i>
        <span class="text-[24px] font-medium hidden aside-text"
          >Trending</span
        >
      </li>
      <li
        class="flex items-center gap-0 h-[36px] w-full justify-between hover:text-primaryBtn transition-colors cursor-pointer"
      >
        <i class="fa-solid fa-star fa-lg w-[25.31px] text-center"></i>
        <span class="text-[24px] font-medium hidden aside-text"
          >Top Rated</span
        >
      </li>
    </ul>
    <section
      class="absolute bottom-0 bg-secondaryBtn h-auto w-full flex flex-col items-center gap-8 py-[20px]"
    >
      <button
        class="flex items-center gap-0 w-full max-w-[150px] justify-center text-gray-400 hover:text-gray-200 transition-colors"
        id="aside-profile"
      >
        <div class="bg-red-500 w-[40px] h-[40px] rounded-full"></div>
        <p class="text-[20px] font-medium hidden">Username</p>
      </button>
      <button
        class="flex items-center gap-0 w-full max-w-[150px] h-[30px] justify-center text-gray-400 hover:text-gray-200 transition-colors"
        id="aside-logout"
      >
        <i
          class="fa-solid fa-arrow-right-from-bracket fa-xl w-[40px]"
        ></i>
        <p class="text-[20px] font-medium hidden">Logout</p>
      </button>
    </section>
  </div>
`;

const asideTriggerDesktop = document.getElementById('aside-trigger-desktop');
const asideText = document.querySelectorAll('.aside-text');
const asideProfile = document.getElementById('aside-profile');
const asideLogout = document.getElementById('aside-logout');

asideTrigger.addEventListener('click', () => {
  if (asideMobile.classList.contains('-translate-x-[180px]')) {
    asideMobile.classList.replace('-translate-x-[180px]', 'translate-x-0');
    asideTrigger.firstElementChild.classList.replace('fa-indent', 'fa-outdent');
  } else {
    asideMobile.classList.replace('translate-x-0', '-translate-x-[180px]');
    asideTrigger.firstElementChild.classList.replace('fa-outdent', 'fa-indent');
  }
});

asideTriggerDesktop.addEventListener('click', () => {
  if (asideDesktop.classList.contains('w-[70px]')) {
    asideDesktop.classList.replace('w-[70px]', 'w-[200px]');
    asideTriggerDesktop.firstElementChild.classList.replace(
      'fa-circle-right',
      'fa-circle-left',
    );

    setTimeout(() => {
      asideText.forEach((text) => {
        text.classList.replace('hidden', 'block');
        text.parentElement.classList.replace('gap-0', 'gap-4');
      });
    }, 80);

    asideProfile.classList.replace('gap-0', 'gap-4');

    asideProfile.classList.replace('justify-center', 'justify-between');

    asideLogout.classList.replace('gap-0', 'gap-4');
    asideLogout.classList.replace('justify-center', 'justify-between');

    asideProfile.children[1].classList.replace('hidden', 'block');
    asideLogout.children[1].classList.replace('hidden', 'block');
  } else {
    asideDesktop.classList.replace('w-[200px]', 'w-[70px]');
    asideTriggerDesktop.firstElementChild.classList.replace(
      'fa-circle-left',
      'fa-circle-right',
    );
    asideText.forEach((text) => {
      text.classList.replace('block', 'hidden');
      text.parentElement.classList.replace('gap-4', 'gap-0');
    });
    asideProfile.classList.replace('gap-4', 'gap-0');
    asideProfile.classList.replace('justify-between', 'justify-center');

    asideLogout.classList.replace('gap-4', 'gap-0');
    asideLogout.classList.replace('justify-between', 'justify-center');

    asideProfile.children[1].classList.replace('block', 'hidden');

    asideLogout.children[1].classList.replace('block', 'hidden');
  }
});
