import"./modulepreload-polyfill-3cfb730f.js";import"./index-05d1972f.js";/* empty css             *//* empty css                 */import"./navbar-29c04306.js";import{g as c,a as p,b as u,c as m}from"./api-879b6fb8.js";import{c as b}from"./aside-b25af0c7.js";import"./main-1d615fee.js";new Swiper("#swiper-toprated",{slidesPerView:1,centeredSlides:!0,spaceBetween:24,lazyLoading:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!0},keyboard:{enabled:!0},breakpoints:{620:{slidesPerView:2,centeredSlides:!1},1440:{slidesPerView:3,centeredSlides:!1},1640:{slidesPerView:4,centeredSlides:!1}}});new Swiper("#swiper-popular",{slidesPerView:1,centeredSlides:!0,spaceBetween:24,lazyLoading:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!0},keyboard:{enabled:!0}});new Swiper("#swiper-series",{slidesPerView:1,centeredSlides:!0,spaceBetween:24,lazyLoading:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!0},keyboard:{enabled:!0},breakpoints:{620:{slidesPerView:2},940:{slidesPerView:4,centeredSlides:!1},1200:{slidesPerView:5,centeredSlides:!1},1440:{slidesPerView:6,centeredSlides:!1}}});b(a=>{a||(window.location.href="./login.html")});const g=document.getElementById("popular-container"),n=document.createDocumentFragment();c().then(a=>{a.results.forEach(t=>{const e=document.createElement("article");e.classList.add("swiper-slide","w-full","h-full","relative","bg-center","bg-cover","bg-no-repeat"),e.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${t.backdrop_path}')`;const r=document.createElement("div");r.classList.add("h-full","hidden","md:flex","xl:flex","w-[40%]","xl:w-[45%]","bg-center","bg-cover","bg-no-repeat","border-2","border-gray-500","rounded-lg"),r.style.backgroundImage=`url('https://image.tmdb.org/t/p/w342/${t.poster_path}')`;const s=`
    <section
        class="h-full w-full flex lg:flex-col-reverse xl:flex-row items-center lg:items-start xl:items-center justify-between gap-4 xl:gap-6 z-[60] relative p-4"
      >
        ${r.outerHTML}
        <div
          class="relative w-full h-full flex flex-col md:w-[70%] lg:w-full xl:w-[65%]"
        >
          <h2
            class="font-title text-text font-semibold text-[24px] md:text-[28px] xl:text-[32px] tracking-[1.25px]"
          >
            ${t.title}
          </h2>
          <p class="text-[20px] md:text-[24px] xl:text-[26px] text-gray-200">${t.release_date.slice(0,4)}</p>
          <p class="text-gray-400 text-[18px] md:text-[21px] xl:text-[23px] mt-1">
            ${t.overview.slice(0,190)}...
          </p>
        </div>
      </section>
      <a
      href="./movieDetail.html?movieId=${t.id}"
      class="bg-secondaryBtn hover:border-2 hover:border-blue-500 border-2 border-transparent transition-[border] duration-200 ease-out rounded-md p-2 flex items-center w-[150px] text-text justify-around absolute bottom-2 md:right-2 z-[80]"
    >
      <i
        class="fa-regular fa-eye fa-lg text-blue-500"
      ></i>
      View more
    </a>
      <div
        class="bg-[rgba(0,0,0,0.75)] absolute top-0 w-full h-full z-[40]"
      ></div>
    `;e.innerHTML=s,n.appendChild(e)}),g.appendChild(n)});const x=document.getElementById("toprated-container"),o=document.createDocumentFragment();p().then(a=>{a.results.forEach(t=>{const e=document.createElement("a");e.href=`./movieDetail.html?movieId=${t.id}`,e.classList.add("swiper-slide","w-full","h-full","relative","bg-center","bg-cover","bg-no-repeat"),e.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${t.backdrop_path}')`;const r=`
      <div class="bg-black p-2 absolute w-full bottom-0 h-[40px] border-t-2 border-t-blue-500">
        <h4 class="font-title font-medium text-[20px] text-text text-center truncate">${t.title}</h4>
      </div>
    `;e.innerHTML=r,o.appendChild(e)}),x.appendChild(o)});const f=document.getElementById("series-container"),d=document.createDocumentFragment();u().then(a=>{a.results.forEach(t=>{const e=document.createElement("a");e.href=`./serieDetail.html?serieId=${t.id}`,e.classList.add("swiper-slide","w-full","h-full","relative","bg-center","bg-cover","bg-no-repeat"),e.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${t.backdrop_path}')`;const r=`
      <div class="bg-black p-2 absolute w-full bottom-0 h-[40px] border-t-2 border-t-blue-500">
        <h4 class="font-title font-medium text-[20px] text-text text-center truncate">${t.name}</h4>
      </div>
    `;e.innerHTML=r,d.appendChild(e)}),f.appendChild(d)});const h=document.getElementById("upcoming-container"),i=document.createDocumentFragment();m().then(a=>{a.results.forEach(t=>{const e=document.createElement("a");e.href=`./movieDetail.html?movieId=${t.id}`,e.classList.add("w-full");const r=document.createElement("section");r.classList.add("bg-red-500","w-full","h-[300px]","bg-center","bg-cover","bg-no-repeat","relative"),r.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${t.backdrop_path}')`,r.innerHTML=`
      <span class="bg-blue-500 rounded-md p-2 text-text font-medium absolute top-2 right-2">${t.release_date}</span>
    `;const s=`
      ${r.outerHTML}
      <section class="flex flex-col gap-2 w-full h-[30%] mt-1">
        <h5 class="text-text font-title text-[22px]">
          ${t.title}
        </h5>
        <p
          class="text-gray-400 mt-1 text-[17.5px] leading-[27px] border-b-2 border-blue-500 pb-2"
        >
          ${t.overview.slice(0,180)}...
        </p>
      </section>
    `;e.innerHTML=s,i.appendChild(e)}),h.appendChild(i)});
