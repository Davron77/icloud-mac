let searchInput = document.querySelector("#searchInput");
let searchControl = document.querySelector(".search");
let navbarItems = document.querySelector(".icloud-header-navbar");
let headerUser = document.querySelector(".icloud-header-user");
let headerNav = document.querySelector(".icloud-header-nav");

searchInput.addEventListener("focus", (e) => {
  headerNav.classList.add("inputFocus");
  searchControl.classList.add("inputSearchFocus");
  navbarItems.style.display = "none";
  headerUser.style.display = "none";
});

searchInput.addEventListener("focusout", (e) => {
  headerNav.classList.remove("inputFocus");
  searchControl.classList.remove("inputSearchFocus");
  navbarItems.style.display = "flex";
  headerUser.style.display = "flex";
});
