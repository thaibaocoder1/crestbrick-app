// Menu bar
const barButton = document.querySelector(".menu-bar");
const navbarList = document.querySelector(".navbar__list");
const navbarClose = document.querySelector(".navbar__close");
const overlay = document.querySelector(".overlay");
const scroll = document.querySelector(".scroll");
const header = document.querySelector(".header");
function showSidebar() {
  navbarList.classList.add("active");
  overlay.style.display = "block";
}
function hideSidebar() {
  navbarList.classList.remove("active");
  overlay.style.display = "none";
}
barButton.addEventListener("click", showSidebar);
navbarClose.addEventListener("click", hideSidebar);
document.addEventListener("click", (e) => {
  if (e.target.matches(".overlay")) {
    hideSidebar();
  }
});
window.addEventListener("scroll", function () {
  const scrollY = this.scrollY;
  if (scrollY > 500) {
    scroll.style.display = "flex";
    header.classList.add("fixed");
  } else {
    scroll.style.display = "none";
    header.classList.remove("fixed");
  }
});
scroll.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
