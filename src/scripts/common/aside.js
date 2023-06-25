import { getUserById, logout } from './authUser.js';

const asideTrigger = document.getElementById('aside-trigger');

const asideMobile = document.getElementById('aside-mobile');

const asideDesktop = document.getElementById('aside-desktop');

const profileModal = document.getElementById('profile-modal');

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
      <section
        class="flex flex-col items-center gap-7 text-text text-[18px] pt-5"
      >
        <a href="./user-saves.html?filter=favorites" class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-regular fa-heart fa-lg"></i>
          <span class="font-semibold">Favorites</span>
        </a>
        <a href="./user-saves.html?filter=seeLater" class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-regular fa-clock fa-lg"></i>
          <span class="font-semibold">See Later</span>
        </a>
        <li class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-solid fa-fire fa-lg"></i>
          <span class="font-semibold">Trending</span>
        </li>
        <li class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-solid fa-star"></i>
          <span class="font-semibold">Top Rated</span>
        </li>
      </section>
    </section>
    <section
      class="absolute bottom-0 left-0 h-[70px] bg-secondaryBtn w-full flex items-center justify-between px-3"
    >
      <button class="flex items-center gap-2 userinfo">
        <div class="w-[40px] h-[40px] rounded-full"></div>
        <span class="text-[15px] text-gray-400 font-medium">User</span>
      </button>
      <i class="logout-button fa-solid fa-arrow-right-from-bracket fa-lg text-text"></i>
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

    <section
      class="flex flex-col items-center gap-7 text-text text-[18px] mt-[70px]"
    >
      <a href="./user-saves.html?filter=favorites"
        class="flex items-center gap-0 h-[36px] w-full justify-between hover:text-primaryBtn transition-colors cursor-pointer"
      >
        <i class="fa-regular fa-heart fa-lg w-[25.31px] text-center"></i>
        <span
          class="text-[24px] font-medium hidden aside-text transition-[indent] duration-200"
          >Favorites</span
        >
      </a>
      <a
      href="./user-saves.html?filter=seeLater"
        class="flex items-center gap-0 h-[36px] w-full justify-between hover:text-primaryBtn transition-colors cursor-pointer"
      >
        <i class="fa-regular fa-clock fa-lg w-[25.31px] text-center"></i>
        <span class="text-[24px] font-medium hidden aside-text"
          >See Later</span
        >
      </a>
      <a
        class="flex items-center gap-0 h-[36px] w-full justify-between hover:text-primaryBtn transition-colors cursor-pointer"
      >
        <i
          class="fa-solid fa-fire-flame-simple fa-lg w-[25.31px] text-center"
        ></i>
        <span class="text-[24px] font-medium hidden aside-text"
          >Trending</span
        >
      </a>
      <a
        class="flex items-center gap-0 h-[36px] w-full justify-between hover:text-primaryBtn transition-colors cursor-pointer"
      >
        <i class="fa-solid fa-star fa-lg w-[25.31px] text-center"></i>
        <span class="text-[24px] font-medium hidden aside-text"
          >Top Rated</span
        >
      </a>
    </section>
    <section
      class="absolute bottom-0 bg-secondaryBtn h-auto w-full flex flex-col items-center gap-8 py-[20px]"
    >
      <button
        class="userinfo flex items-center gap-0 w-full max-w-[150px] justify-center text-gray-400 hover:text-gray-200 transition-colors"
        id="aside-profile"
      >
        <div class="w-[40px] h-[40px] rounded-full"></div>
        <p class="text-[20px] font-medium hidden">Username</p>
      </button>
      <button
        class="logout-button flex items-center gap-0 w-full max-w-[150px] h-[30px] justify-center text-gray-400 hover:text-gray-200 transition-colors"
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

profileModal.innerHTML = `
<div class="flex w-full items-center justify-center h-screen">
<div
  class="bg-secondaryBtn w-[90%] max-w-[350px] h-[250px] py-5 flex flex-col items-center justify-around relative"
>
  <div class="relative w-[100px] h-[100px] group cursor-pointer">
    <div
      class="rounded-full w-full h-full"
      id="modal-profile-pic"
    ></div>
    <div
      class="bg-[rgba(0,0,0,0.55)] h-full w-full absolute top-0 opacity-0 group-hover:opacity-100 z-[70] rounded-full transition-opacity duration-200 ease-in-out grid place-content-center"
    >
      <i class="fa-regular fa-pen-to-square text-text text-[40px]"></i>
    </div>
  </div>
  <span
    class="font-title font-medium text-text text-[27px]"
    id="modal-profile-name"
    >Username</span
  >
  <span class="absolute top-2 right-2" id="close-modal-button">
    <i
      class="fa-regular fa-circle-xmark text-[30px] text-white cursor-pointer hover:text-red-400 transition-colors ease-in-out duration-200"
    ></i>
  </span>
</div>
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

getUserById(sessionStorage.getItem('userId')).then((user) => {
  const profileButton = document.querySelectorAll('.userinfo');
  profileButton.forEach((button) => {
    button.addEventListener('click', () => {
      profileModal.classList.replace('hidden', 'block');
      document.body.classList.add('overflow-hidden');
    });

    const profileButtonImg = button.firstElementChild;
    const profileButtonName = button.lastElementChild;

    profileButtonImg.style.backgroundImage = `url('${user.profilePicture}')`;
    profileButtonName.innerHTML = user.username;
  });
  const modalProfilePicture = document.getElementById('modal-profile-pic');
  const modalProfileName = document.getElementById('modal-profile-name');

  modalProfilePicture.style.backgroundImage = `url('${user.profilePicture}')`;
  modalProfileName.innerHTML = user.username;
});

const logoutButtons = document.querySelectorAll('.logout-button');
logoutButtons.forEach((button) => {
  button.addEventListener('click', () => {
    logout();
  });
});

const closeModalButton = document.getElementById('close-modal-button');
closeModalButton.addEventListener('click', () => {
  profileModal.classList.replace('block', 'hidden');
  document.body.classList.remove('overflow-hidden');
});
