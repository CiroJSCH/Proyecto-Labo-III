import"./modulepreload-polyfill-3cfb730f.js";/* empty css                 */import{k as f,f as a,G as I,l as p,b as w,g as i,d as c,m as h,e as b,n as L}from"./main-1d615fee.js";import{c as y,e as g}from"./errors-7c5232a2.js";const m=document.getElementById("loginError"),o=document.getElementById("emailContainer"),n=document.getElementById("passwordContainer"),E=document.getElementById("password-toggle");E.addEventListener("click",()=>{y("password")});const u=document.getElementById("signInForm");u.addEventListener("submit",async r=>{r.preventDefault();const s=u.email.value,t=u.password.value;if(s.trim().length===0){o.classList.replace("border-l-accent","border-l-red-500"),m.innerHTML="Email required";return}if(t.trim().length===0){n.classList.replace("border-l-accent","border-l-red-500"),m.innerHTML="Password required";return}n.classList.replace("border-l-red-500","border-l-accent"),o.classList.replace("border-l-red-500","border-l-accent");try{await f(a,s,t),sessionStorage.setItem("userId",a.currentUser.uid),window.location.href=`${window.location.origin}/src/pages/main.html`}catch(e){m.innerHTML=g[e.code],g[e.code].includes("Password")?(n.classList.replace("border-l-accent","border-l-red-500"),o.classList.replace("border-l-red-500","border-l-accent")):(o.classList.replace("border-l-accent","border-l-red-500"),n.classList.replace("border-l-red-500","border-l-accent"))}});const v=new I,B=document.getElementById("googleBtn");B.addEventListener("click",async()=>{try{const r=await p(a,v),s=r.user.uid;if(!(await w(i(c,"Users",s))).exists()){const{user:e}=r,d=e.displayName,{email:l}=e;await h(i(c,"Users",e.uid),{username:d,email:l,favorites:[],seeLater:[],profilePicture:e.photoURL})}sessionStorage.setItem("userId",s),window.location.href=`${window.location.origin}/src/pages/main.html`}catch{b()}});const P=new L,S=document.getElementById("githubBtn");S.addEventListener("click",async()=>{try{const r=await p(a,P),s=r.user.uid;if(!(await w(i(c,"Users",s))).exists()){const{user:e}=r,d=e.displayName,{email:l}=e;await h(i(c,"Users",e.uid),{username:d,email:l,favorites:[],seeLater:[],profilePicture:e.photoURL})}sessionStorage.setItem("userId",s),window.location.href=`${window.location.origin}/src/pages/main.html`}catch{b()}});
