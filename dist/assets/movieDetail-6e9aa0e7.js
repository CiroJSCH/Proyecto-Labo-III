import"./modulepreload-polyfill-3cfb730f.js";/* empty css                 */import"./navbar-29c04306.js";import{g as x,I,b as g,d as E,a as n,Q as c,s as v,e as p,j as d}from"./main-1d615fee.js";import{c as $}from"./aside-b25af0c7.js";import{g as B,a as S}from"./getMovie-d963b739.js";const o=new URLSearchParams(window.location.search).get("movieId"),u=document.querySelectorAll(".add-favorites"),f=document.querySelectorAll(".add-see-later");$(e=>{e||(window.location.href=`${window.location.origin}/src/pages/login.html`)});const R=sessionStorage.getItem("userId"),s=x(E,"Users",R),M=(e,t)=>{const a=e.includes(o),i=t.includes(o);u.forEach(r=>{a?r.classList.replace("bg-gray-800","bg-rose-200"):r.classList.replace("bg-rose-200","bg-gray-800")}),f.forEach(r=>{i?r.classList.replace("bg-gray-800","bg-emerald-200"):r.classList.replace("bg-emerald-200","bg-gray-800")})};I(s,e=>{const{favorites:t,seeLater:a}=e.data();M(t,a)});const b=async(e,t)=>{try{t==="favorites"?await n(s,{favorites:c(e)}):await n(s,{seeLater:c(e)}),v(`${t==="favorites"?"❤ Added to favorites":"⏱ Added to see later"}`)}catch{p()}},w=async(e,t)=>{try{t==="favorites"?await n(s,{favorites:d(e)}):await n(s,{seeLater:d(e)}),v(`${t==="favorites"?" ❤ Removed from favorites":"⏱ Removed from see later"}`)}catch{p()}};u.forEach(e=>{e.addEventListener("click",async t=>{const{favorites:a,seeLater:i}=(await g(s)).data();a.includes(o)?(w(o,"favorites"),e.classList.replace("bg-rose-200","bg-gray-800")):(b(o,"favorites"),e.classList.replace("bg-gray-800","bg-rose-200"))})});f.forEach(e=>{e.addEventListener("click",async t=>{const{favorites:a,seeLater:i}=(await g(s)).data();i.includes(o)?(w(o,"seeLater"),e.classList.replace("bg-emerald-200","bg-gray-800")):(b(o,"seeLater"),e.classList.replace("bg-gray-800","bg-emerald-200"))})});const h=new URLSearchParams(window.location.search).get("movieId"),_=document.getElementById("movie-title"),k=document.getElementById("movie-poster"),F=document.getElementById("movie-banner"),T=document.getElementById("movie-rating"),C=document.getElementById("movie-vote-count"),H=document.getElementById("movie-genres"),A=document.getElementById("movie-release-date"),P=document.getElementById("movie-runtime"),q=document.getElementById("movie-overview"),O=document.querySelector(".swiper-wrapper"),U=e=>e>=7.5?"bg-emerald-200 border-emerald-600 text-emerald-600":e>=6?"bg-yellow-200 border-yellow-600 text-yellow-600":"bg-red-200 border-red-600 text-red-600";B(h).then(e=>{_.innerHTML=e.title,k.style.backgroundImage=`url('https://image.tmdb.org/t/p/w154/${e.poster_path}')`,F.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${e.backdrop_path}')`,T.innerHTML=e.vote_average.toFixed(2),C.innerHTML=`${e.vote_count} votes`,e.genres.forEach(t=>{H.innerHTML+=`
      <span
        class="rounded-lg bg-gray-500 px-2 py-1 text-white font-semibold uppercase"
      >
        ${t.name}
      </span>`}),A.innerHTML=e.release_date.slice(0,4),P.innerHTML=`${Math.floor(e.runtime/60)}h ${e.runtime%60}min`,q.innerHTML=e.overview});const m=document.createDocumentFragment();S(h).then(e=>{e.results.forEach(t=>{const{author:a}=t,{username:i}=t.author_details,{content:r}=t,{rating:l}=t.author_details,y=U(l),L=`<li
    class="swiper-slide flex flex-col gap-3 bg-[#2b2b2b] rounded-lg drop-shadow-md p-2 relative"
  >
    <div class="flex items-center gap-3">
      <div
        class="h-[45px] w-[45px] rounded-full hidden xs:block bg-cover bg-center bg-no-repeat"
        style="background-image: url('https://image.tmdb.org/t/p/w200/${t.author_details.avatar_path}')"
      ></div>
      <div class="flex flex-col gap-1">
        <p
          id="review-author"
          class="font-title font-semibold text-[18px] text-text"
        >
          ${a}
        </p>
        <p
          class="text-[15px] text-gray-400"
          id="review-username"
        >
          ${i}
        </p>
      </div>
    </div>
    <p
      id="review-content"
      class="text-gray-400 leading-[27px] pb-[35px] max-h-[200px]"
    >
      ${r.slice(0,200)}... 
      <a 
        href="${t.url}" 
        target="_blank" 
        class="underline text-blue-400">
        Read more
      </a>
    </p>
    <span
      id="review-rating"
      class="absolute bottom-2 right-2 rounded-full ${y} font-bold font-title border-2 h-[34px] w-[34px] grid place-content-center"
      >${l}</span
    >
  </li>`;m.appendChild(document.createRange().createContextualFragment(L))}),O.appendChild(m)});new Swiper("#swiper-reviews",{slidesPerView:1,centeredSlides:!0,spaceBetween:24,lazyLoading:!0,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},keyboard:{enabled:!0},breakpoints:{1024:{direction:"vertical",slidesPerView:2,spaceBetween:30,loop:!0,autoplay:{delay:2e3,disableOnInteraction:!1},centeredSlides:!1}}});
