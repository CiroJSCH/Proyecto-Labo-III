import{o as v,_ as L,g,b as k,c as B,f as x,d as h,r as E,h as I,u as j,i as S,a as T,s as P,e as M}from"./main-1d615fee.js";const q=e=>{v(x,s=>{e(s)})},C=async e=>{const s=L(h,"Users"),l=g(s,e);return(await k(l)).data()},H=()=>{B(x).then(()=>{sessionStorage.removeItem("userId"),window.location.href="/src/pages/login.html"})},r=document.getElementById("aside-trigger"),n=document.getElementById("aside-mobile"),o=document.getElementById("aside-desktop"),u=document.getElementById("profile-modal");r.classList.add("lg:hidden","fixed","z-[53]","left-2","top-2","rounded-full","grid","place-content-center","h-[45px]","w-[45px]","text-accent","bg-black","border-primaryBtn","border");r.innerHTML='<i class="fa-solid fa-indent fa-xl"></i>';n.classList.add("lg:hidden","w-[180px]","min-h-[450px]","-translate-x-[180px]","fixed","left-0","h-screen","bg-background","border-r-2","border-primaryBtn","z-[52]","transition-all","duration-200","ease-in-out");n.innerHTML=`
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
        <a href="./see-more-movies.html?filter=popular" class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-solid fa-fire fa-lg"></i>
          <span class="font-semibold">Trending</span>
        </a>
        <a href="./see-more-movies.html?filter=top_rated" class="flex items-center justify-between w-[80%] gap-2">
          <i class="fa-solid fa-star"></i>
          <span class="font-semibold">Top Rated</span>
        </a>
      </section>
    </section>
    <section
      class="absolute bottom-0 left-0 h-[70px] bg-secondaryBtn w-full flex items-center justify-between px-3"
    >
      <button class="flex items-center gap-2 userinfo">
        <div class="w-[40px] h-[40px] rounded-full bg-contain bg-center bg-no-repeat" id="profile-pic-mobile"></div>
        <span class="text-[15px] text-gray-400 font-medium">User</span>
      </button>
      <i class="logout-button fa-solid fa-arrow-right-from-bracket fa-lg text-text"></i>
    </section>
  </div>
`;o.classList.add("bg-background","border-r-2","border-r-primaryBtn","w-[70px]","min-h-[calc(100vh-88px)]","mt-[88px]","hidden","lg:flex","fixed","left-0","top-0","z-[55]","transition-[width]","duration-200","ease-in-out");o.innerHTML=`
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
        href="./see-more-movies.html?filter=popular"
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
        href="./see-more-movies.html?filter=top_rated" 
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
        <div class="w-[40px] h-[40px] rounded-full bg-contain bg-center bg-no-repeat" id="profile-pic-desktop"></div>
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
`;u.innerHTML=`
<div class="flex w-full items-center justify-center h-screen">
<div
  class="bg-secondaryBtn w-[90%] max-w-[350px] h-[250px] py-5 flex flex-col items-center justify-around relative rounded-md"
>
  <div class="relative w-[100px] h-[100px] group cursor-pointer" id="update-photo">
    <div
      class="rounded-full w-full h-full bg-contain bg-center bg-no-repeat"
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
`;const f=document.getElementById("aside-trigger-desktop"),m=document.querySelectorAll(".aside-text"),a=document.getElementById("aside-profile"),i=document.getElementById("aside-logout");r.addEventListener("click",()=>{n.classList.contains("-translate-x-[180px]")?(n.classList.replace("-translate-x-[180px]","translate-x-0"),r.firstElementChild.classList.replace("fa-indent","fa-outdent")):(n.classList.replace("translate-x-0","-translate-x-[180px]"),r.firstElementChild.classList.replace("fa-outdent","fa-indent"))});f.addEventListener("click",()=>{o.classList.contains("w-[70px]")?(o.classList.replace("w-[70px]","w-[200px]"),f.firstElementChild.classList.replace("fa-circle-right","fa-circle-left"),setTimeout(()=>{m.forEach(e=>{e.classList.replace("hidden","block"),e.parentElement.classList.replace("gap-0","gap-4")})},80),a.classList.replace("gap-0","gap-4"),a.classList.replace("justify-center","justify-between"),i.classList.replace("gap-0","gap-4"),i.classList.replace("justify-center","justify-between"),a.children[1].classList.replace("hidden","block"),i.children[1].classList.replace("hidden","block")):(o.classList.replace("w-[200px]","w-[70px]"),f.firstElementChild.classList.replace("fa-circle-left","fa-circle-right"),m.forEach(e=>{e.classList.replace("block","hidden"),e.parentElement.classList.replace("gap-4","gap-0")}),a.classList.replace("gap-4","gap-0"),a.classList.replace("justify-between","justify-center"),i.classList.replace("gap-4","gap-0"),i.classList.replace("justify-between","justify-center"),a.children[1].classList.replace("block","hidden"),i.children[1].classList.replace("block","hidden"))});C(sessionStorage.getItem("userId")).then(e=>{document.querySelectorAll(".userinfo").forEach(t=>{t.addEventListener("click",()=>{u.classList.replace("hidden","block"),document.body.classList.add("overflow-hidden")});const d=t.firstElementChild,p=t.lastElementChild;d.style.backgroundImage=`url('${e.profilePicture}')`,p.innerHTML=e.username});const l=document.getElementById("modal-profile-pic"),c=document.getElementById("modal-profile-name");l.style.backgroundImage=`url('${e.profilePicture}')`,c.innerHTML=e.username});const $=document.querySelectorAll(".logout-button");$.forEach(e=>{e.addEventListener("click",()=>{H()})});const A=document.getElementById("close-modal-button");A.addEventListener("click",()=>{u.classList.replace("block","hidden"),document.body.classList.remove("overflow-hidden")});const D=document.getElementById("update-photo");D.addEventListener("click",()=>{const e=document.createElement("input");e.type="file",e.accept="image/png, image/jpeg",e.addEventListener("change",s=>{const l=s.target.files[0],c=E(I,`profile-pics/${sessionStorage.getItem("userId")}.jpg`);j(c,l).then(t=>S(t.ref)).then(t=>{const d=sessionStorage.getItem("userId"),p=g(h,"Users",d),b=document.getElementById("profile-pic-desktop"),y=document.getElementById("profile-pic-mobile"),w=document.getElementById("modal-profile-pic");return b.style.backgroundImage=`url('${t}')`,y.style.backgroundImage=`url('${t}')`,w.style.backgroundImage=`url('${t}')`,T(p,{profilePicture:t})}).then(()=>{P("✅ Profile picture updated")}).catch(t=>{M("❌ Something went wrong")})}),e.click()});export{q as c,C as g};
