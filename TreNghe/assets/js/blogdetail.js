document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const content = document.getElementById("menu-body");

  toggleButton.addEventListener("click", function () {
    content.classList.toggle("show");
    toggleButton.classList.toggle("off");
  });
});
const links = document.querySelectorAll(".nav-link");
links.forEach((item) => {
  item.addEventListener("click", () => {
    let el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const fixedBox = document.querySelector("#menu");
  const container = document.querySelector(".container");

  container.addEventListener("scroll", function () {
    const scrollTop = container.scrollTop;
    fixedBox.style.top = `${scrollTop}px`;
  });
});
