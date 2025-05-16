let ViewSlides = 5;

if (window.innerWidth < 768) {
  ViewSlides = 2;
} else {
  ViewSlides = 5;
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "slide",
  spaceBetween: 40,
  slidesPerView: ViewSlides,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
