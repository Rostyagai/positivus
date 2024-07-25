
ScrollReveal().reveal(
  "h1, h2, h3, .header__menu-item, .logo__image, .banner, .studies__list, .team__item",
  {
    delay: 400,
    duration: 1000,
    distance: "50px",
    origin: "top",
  },
);

ScrollReveal().reveal(".hero__description, .section__description", {
  delay: 700,
  duration: 1000,
  distance: "20px",
});

ScrollReveal().reveal(".hero__image, .hero__partners-item", {
  delay: 600,
  duration: 1000,
  distance: "20px",
});

ScrollReveal().reveal(
  ".services__item:nth-child(odd), .process__item:nth-child(odd)",
  {
    delay: 600,
    duration: 1700,
    distance: "40px",
    origin: "bottom",
  },
);

ScrollReveal().reveal(
  ".services__item:nth-child(even), .process__item:nth-child(even)",
  {
    delay: 400,
    duration: 1700,
    distance: "40px",
    origin: "bottom",
  },
);

ScrollReveal().reveal(".service-card__image", {
  delay: 700,
  duration: 1700,
  distance: "40px",
  origin: "bottom",
  scale: 0.7,
});

ScrollReveal().reveal(".team-card__body, .team-card__image", {
  delay: 400,
  duration: 1000,
  distance: "20px",
});
