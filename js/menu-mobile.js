const mobileButton = document.querySelector("[data-mobile-toggle]");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileButton && mobileMenu) {
  mobileButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
