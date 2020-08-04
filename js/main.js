const menuToggle = document.querySelector("#menu-togle");
const mobileNavContainer = document.querySelector("#mobilenav");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("menu-icon-active");
  mobileNavContainer.classList.toggle("mobilenav--active");
};
