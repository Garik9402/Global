//  активация меню элемента
const headerMenuItem = document.querySelectorAll(".header__nav-item-link");
for (let i = 0; i < headerMenuItem.length; i++) {
  headerMenuItem[i].addEventListener("click", function () {
    for (let y = 0; y < headerMenuItem.length; y++) {
      headerMenuItem[y].classList.remove("header__nav-item-link--active");
    }
    this.classList.add("header__nav-item-link--active");
  });
}
