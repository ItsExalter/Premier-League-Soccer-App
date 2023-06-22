document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav-component").forEach((elm) => {
    elm.addEventListener("click", (event) => {
      // Closing SideNav
      let sidenav = document.querySelector(".sidenav");
      M.Sidenav.getInstance(sidenav).close();
      // Load Page
      page = event.target.getAttribute("href").substr(1);
      loadPage(page);
    });
  });
  let page = window.location.hash.substr(1);
  if (page == "") page = "home";
  loadPage(page);

  function loadPage(page) {
    fetch(`assets/pages/${page}.html`)
      .then((response) => response.text())
      .then((response) => {
        const content = document.querySelector("#body-content");
        content.innerHTML = response;
      });
  }
});
