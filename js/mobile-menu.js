document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobileOverlay");
  const mobileMenuLinks = document.querySelectorAll("#mobileOverlay a");
  const closeButton = mobileMenu.querySelector(".mobile-overlay__close-button");

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("dialog-closing");
      setTimeout(() => {
        mobileMenu.classList.remove("dialog-closing");
        mobileMenu.close();
      }, 300);
    });
  });

  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    mobileMenu.classList.add("dialog-closing");
    setTimeout(() => {
      mobileMenu.classList.remove("dialog-closing");
      mobileMenu.close();
    }, 300); // Duration of the fadeOut animation
  });
});
