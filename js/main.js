const listContainer = document.getElementById("navbar-collapse-l"),
  burgerIcon = document.querySelector(".container .navbar-toggle"),
  BODY = document.body,
  closeMenu = document.querySelector(".navbar-collapse .offcanvas-close"),
  searchIcon = document.querySelector(
    ".navbar-nav .menu-item-search .nav-item-search-toggle"
  ),
  closeSearch = document.querySelector(
    ".menu-item-search .search-form .search-submit"
  );

burgerIcon.addEventListener("click", function () {
  listContainer.classList.toggle("open");
  BODY.classList.toggle("offcanvas-active");
});

closeMenu.addEventListener("click", function () {
  listContainer.classList.remove("open");
  BODY.classList.remove("offcanvas-active");
});

searchIcon.addEventListener("click", function () {
  searchIcon.parentElement.classList.add("expand");
});

document.addEventListener("click", function (e) {
  if (
    e.target.className !== "search-field" &&
    e.target.className !== "nav-item-search-toggle"
  ) {
    searchIcon.parentElement.classList.remove("expand");
  }
});
