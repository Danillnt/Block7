// var swipeBrend = document.querySelector('.price-type');
// var swipeBrend2 = document.querySelector('.price-type-content');


// if (window.matchMedia('(max-width: 700px)').matches) {
//   swipeBrend.classList.add("slider-container");
//   swipeBrend2.classList.add("swiper-wrapper");
// } else {
//   swipeBrend.classList.remove("slider-container");
//   swipeBrend2.classList.remove("swiper-wrapper");
// };



// if (window.matchMedia('(max-width: 700px)').matches) {

//   let mySwiper = new Swiper('.slider-container', {
//     slidesPerView: 1.5,
//     spaceBetween: 10,
//     loop: true,
//     slideClass: 'card',
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   })
// };

// -----------------------------------------------------------------
var swipeBrend = document.querySelector('.price-type');
var swipeBrend2 = document.querySelector('.price-type-content');


if (window.matchMedia('(max-width: 700px)').matches) {
  swipeBrend.classList.add("slider-container");
  swipeBrend2.classList.add("swiper-wrapper");
} else {
  swipeBrend.classList.remove("slider-container");
  swipeBrend2.classList.remove("swiper-wrapper");
};



if (window.matchMedia('(max-width: 700px)').matches) {

  var mySwiper = new Swiper(".slider-container.swiper-container--brend", {
    slidesPerView: 1.5,
    spaceBetween: 1,
    loop: true,
    slideClass: 'card',
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
  });

  var swiper = new Swiper(".slider-container.swiper-container--device", {
    slidesPerView: 1.5,
    spaceBetween: 1,
    loop: true,
    slideClass: 'card',
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
  });

  var swiper3 = new Swiper(".slider-container.swiper-container--price", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    slideClass: 'card',
    pagination: {
      el: '.swiper-pagination3',
      clickable: true,
    },
  });

};