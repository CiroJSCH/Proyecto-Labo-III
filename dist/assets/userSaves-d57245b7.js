import"./modulepreload-polyfill-3cfb730f.js";/* empty css                 */import"./navbar-29c04306.js";import{c as I,g as y}from"./aside-b25af0c7.js";import{g as p,d as h,a as u,j as v,s as x,e as L}from"./main-1d615fee.js";import{g as b}from"./getMovie-d963b739.js";I(n=>{n||(window.location.href=`${window.location.origin}/src/pages/login.html`)});const f=sessionStorage.getItem("userId"),s=new URLSearchParams(window.location.search).get("filter"),r=document.getElementById("movies-container"),i=document.createDocumentFragment(),l=document.getElementById("no-favorites"),w=document.getElementById("no-seelater");y(f).then(n=>{const{favorites:c,seeLater:d}=n;c.length===0&&s==="favorites"?(l.classList.replace("hidden","flex"),r.classList.replace("grid","hidden")):c.length>0&&s==="favorites"&&(l.classList.replace("flex","hidden"),r.classList.replace("hidden","grid")),d.length===0&&s==="seeLater"?(w.classList.replace("hidden","flex"),r.classList.replace("grid","hidden")):d.length>0&&s==="seeLater"&&(l.classList.replace("flex","hidden"),r.classList.replace("hidden","grid")),s==="favorites"?c.forEach(m=>{b(m).then(t=>{const a=document.createElement("div");a.classList.add("w-full","h-[300px]","bg-center","bg-cover","bg-no-repeat"),a.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${t.poster_path}')`;const e=`
            <a href="movieDetail.html?movieId=${t.id}" class="relative col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-2 cursor-pointer">
              ${a.outerHTML}
              <p class="text-text font-medium text-[20px] font-title">${t.title}</p>
              <button
              class="removeFavorite border-red-500 border grid place-content-center bg-rose-200 text-red-500 rounded-full p-2 w-[38px] h-[38px] transition-colors duration-200 ease-in-out hover:bg-rose-100 absolute top-2 right-2"
            >
                <i id="${t.id}" class="fa-regular fa-heart fa-lg"></i>
              </button>
            </a>
          `;i.appendChild(document.createRange().createContextualFragment(e))}).then(()=>{r.appendChild(i),document.querySelectorAll(".removeFavorite").forEach(a=>{try{a.addEventListener("click",async e=>{e.preventDefault();const o=e.target.closest("a").href.split("=")[1],g=p(h,"Users",f);await u(g,{favorites:v(o)}),e.target.id===o&&(e.target.dataset.removed||(x("Removed from favorites"),e.target.dataset.removed=!0)),e.target.closest("a").remove(),r.children.length===0&&(l.classList.replace("hidden","flex"),r.classList.replace("grid","hidden"))})}catch{L()}})})}):d.forEach(m=>{b(m).then(t=>{const a=document.createElement("div");a.classList.add("w-full","h-[300px]","bg-center","bg-cover","bg-no-repeat"),a.style.backgroundImage=`url('https://image.tmdb.org/t/p/w500/${t.poster_path}')`;const e=`
            <a href="movieDetail.html?movieId=${t.id}" class="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 w-full flex flex-col gap-2 cursor-pointer relative">
              ${a.outerHTML}
              <p class="text-text font-medium text-[20px] font-title">${t.title}</p>
              <button
              class="removeSeeLater absolute top-2 right-2 add-see-later border-emerald-600 border grid place-content-center bg-emerald-200 text-emerald-600 rounded-full p-2 w-[38px] h-[38px] transition-colors duration-200 ease-in-out hover:bg-emerald-100"
            >
              <i id="${t.id}" class="fa-regular fa-clock fa-lg"></i>
            </button>
            </a>
          `;i.appendChild(document.createRange().createContextualFragment(e))}).then(()=>{r.appendChild(i),document.querySelectorAll(".removeSeeLater").forEach(a=>{try{a.addEventListener("click",async e=>{e.preventDefault();const o=e.target.closest("a").href.split("=")[1],g=p(h,"Users",f);await u(g,{seeLater:v(o)}),e.target.id===o&&(e.target.dataset.removed||(x("Removed from see later"),e.target.dataset.removed=!0)),e.target.closest("a").remove(),r.children.length===0&&(w.classList.replace("hidden","flex"),r.classList.replace("grid","hidden"))})}catch{L()}})})})});
