const t=async e=>(await fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=7e166e717fba198f23734103f094beb2`)).json(),o=async e=>(await fetch(`https://api.themoviedb.org/3/movie/${e}/reviews?api_key=7e166e717fba198f23734103f094beb2`)).json();export{o as a,t as g};
