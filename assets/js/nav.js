document.addEventListener("DOMContentLoaded", () => {
  //Sidenav
  const sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);

  const dropdown = document.querySelectorAll(".dropdown-trigger");
  M.Dropdown.init(dropdown);
});
