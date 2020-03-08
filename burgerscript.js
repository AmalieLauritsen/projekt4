const menuIcon = document.querySelector(".burger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
