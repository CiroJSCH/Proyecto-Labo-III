import"./modulepreload-polyfill-3cfb730f.js";import"./index-05d1972f.js";import"./navbar-29c04306.js";/* empty css                 */const d=async()=>(await(await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7e166e717fba198f23734103f094beb2&page=2")).json()).results;d().then(n=>{const o=document.querySelector(".peliculas-container"),i=new Set;for(;i.size<15;){const t=n[Math.floor(Math.random()*n.length)];i.add(t)}i.forEach(t=>{const r=`https://image.tmdb.org/t/p/w342${t.poster_path}`,a=document.createElement("div");a.classList.add("pelis");const e=document.createElement("a");e.href="login.html",e.target="_blank";const s=document.createElement("div");s.classList.add("img-container");const c=document.createElement("img");c.src=r,c.alt=t.title,e.appendChild(c),s.appendChild(e),a.appendChild(s);const l=document.createElement("h3");l.textContent=t.title,a.appendChild(l),o.appendChild(a)})});const p=async()=>(await(await fetch("https://api.themoviedb.org/3/tv/popular?api_key=7e166e717fba198f23734103f094beb2&page=1")).json()).results;p().then(n=>{const o=document.querySelector(".series-container"),i=new Set;for(;i.size<15;){const t=n[Math.floor(Math.random()*n.length)];i.add(t)}i.forEach(t=>{const r=`https://image.tmdb.org/t/p/w342${t.poster_path}`,a=document.createElement("div");a.classList.add("serie");const e=document.createElement("a");e.href="login.html",e.target="_blank";const s=document.createElement("img");s.src=r,s.alt=t.name,e.appendChild(s);const c=document.createElement("h3");c.textContent=t.name,e.appendChild(c),a.appendChild(e),o.appendChild(a)})});const m=new Swiper(".tendencia-conteiner",{spaceBetween:20,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},centeredSlides:!0,breakpoints:{0:{slidesPerView:2},568:{slidesPerView:3},768:{slidesPerView:4},968:{slidesPerView:5},1200:{slidesPerView:6}}}),h=async()=>{try{return(await(await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=7e166e717fba198f23734103f094beb2")).json()).results}catch(n){return console.log("Error al obtener la lista de películas en tendencia:",n),[]}},u=async()=>{const n=await h(),o=document.querySelector(".tendencia-conteiner .swiper-wrapper");n.forEach(i=>{const t=document.createElement("div");t.classList.add("swiper-slide","pelis");const r=document.createElement("div");r.classList.add("img-container");const a=document.createElement("img");a.src=`https://image.tmdb.org/t/p/w342${i.poster_path}`,a.alt=i.title,r.appendChild(a);const e=document.createElement("a");e.href="login.html",e.target="_blank";const s=document.createElement("h3");s.textContent=i.title,e.appendChild(r),e.appendChild(s),t.appendChild(e),o.appendChild(t)}),m.update()};u();