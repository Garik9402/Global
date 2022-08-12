const headerMenuItem = document.querySelectorAll(".header__nav-item");
for (let i = 0; i < headerMenuItem.length; i++) {
  headerMenuItem[i].addEventListener("click", function () {
    for (let y = 0; y < headerMenuItem.length; y++) {
      headerMenuItem[y].classList.remove("header__menu-item--active");
    }
    this.classList.add("header__menu-item--active");
  });
}
const button = document.querySelector(".button");
button.addEventListener("click", function () {
  button.classList.add("button--active");
});
