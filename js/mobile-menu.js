document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("mobileOverlay");
  const closeButton = dialog.querySelector(".mobile-overlay__close-button");

  closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.classList.add("dialog-closing");
    setTimeout(() => {
      dialog.classList.remove("dialog-closing");
      dialog.close();
    }, 300); // Duration of the fadeOut animation
  });
});
