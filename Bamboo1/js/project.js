const container = document.getElementById("list");
for (let i = 0; i < 12; i++) {
  const box = document.createElement("div");
  box.innerHTML = `<div class="item">
            <div class="item-img">
                <img src="../assets/img/Maskgroup.png" alt="">
            </div>
            <div class="item-text">
                <div class="title1">Trang trại trồng rừng</div>
                <div class="disc"><i class="ri-map-pin-line"></i> 2C15, Đường Trường Sa, Quận Bình Thạnh, TP.HCM
                </div>
            </div>
        </div>`;

  container.appendChild(box);
}

const pageLinks = document.querySelectorAll(".page-link");
const pageNext = document.getElementById("btn-next");

pageNext.addEventListener("click", function (e) {
  e.preventDefault();
  const activePage = document.querySelector(".page-link.active");
  const activePageNumber = parseInt(activePage.getAttribute("data-page"));
  const nextPageNumber = activePageNumber + 1;
  const nextPageLink = document.querySelector(
    `.page-link[data-page="${nextPageNumber}"]`
  );

  if (nextPageLink) {
    nextPageLink.click();
  } else {
  }
});

pageLinks.forEach((pageLink) => {
  pageLink.addEventListener("click", function (event) {
    event.preventDefault();
    pageLinks.forEach((link) => {
      link.classList.remove("active");
    });
    pageLink.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const buttons = document.querySelectorAll(".tab .btn");
  const contents = document.querySelectorAll(".tabcontent");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      contents.forEach((content) => (content.style.display = "none"));

      button.classList.add("active");
      document.getElementById(button.id + "Content").style.display = "block";
    });
  });

  // Initialize the first tab content as visible
  document.getElementById("DuanContent").style.display = "block";
});
