import ScrollReveal from "scrollreveal";

export const animation = () => {
  // Default configuration
  ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
  });

  ScrollReveal().reveal(`.nav__logo, .nav__list, .popular__title`, {
    origin: 'top',
  });

  ScrollReveal().reveal(`.discover__picture-hint, .discover__title`, {
    origin: 'left',
  });

  ScrollReveal().reveal(
    `.discover__picture-scroll, .discover__text, .popular__controls`,
    {
      origin: 'right',
    }
  );

  ScrollReveal().reveal(`.discover__form, .discover__picture-img`, {
    origin: 'bottom',
  });

  ScrollReveal().reveal(`.partners`, {
    origin: 'top',
  });
}