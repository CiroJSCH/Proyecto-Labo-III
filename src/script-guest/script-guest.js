const headerEl = document.querySelector('header')

window.addEventListener('scroll', function () {
  headerEl.classList.toggle('shadow', window.scrollY > 0);
});


const menuEl = document.querySelector('#menu-icon');
const navbarEl = document.querySelector('.navbar');

menuEl.addEventListener('click', () => {
  menuEl.classList.toggle('bx-x');
  navbarEl.classList.toggle('active');
});
 
window.addEventListener('scroll', () => {
  menuEl.classList.remove('bx-x');
  navbarEl.classList.remove('active');
});

    
    var swiper = new Swiper(".banner", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    });

    var TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    var swiper = new Swiper('.tendencia-conteiner', {
      spaceBetween : 20,
       loop: true,
       autoplay: {

        delay: 5000,
        disableOnInteraction: false
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        568: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        968: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      }
    });


    