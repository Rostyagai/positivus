const reviewsSlider = new Swiper(".reviews__slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 50,
  centeredSlides: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    767: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: "#reviews-pagination",
    renderBullet: function (index, className) {
      return (
        '<li class="  pagination__button ' +
        className +
        '">' +
        `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
        </svg>` +
        "</li>"
      );
    },
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".reviews__arrow-button.next",
    prevEl: ".reviews__arrow-button.prev",
  },
});
