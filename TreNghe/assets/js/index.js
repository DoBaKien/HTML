var $carousel = $(".carousel").flickity({
  wrapAround: true,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
});

// previous
$(".carousel-prev-button").on("click", function () {
  $carousel.flickity("previous");
});
$(".carousel-next-button").on("click", function () {
  $carousel.flickity("next");
});

const container = document.getElementById("box");
for (let i = 0; i < 6; i++) {
  const box = document.createElement("div");
  box.innerHTML = `
  <div class="box-f">
    <div class="item-box">
      <img src="./assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="Cinque Terre" >
    </div>
    <div class="title-f">Du an biet thu vung tau</div>
    <div class="box-th">
      <div class="box-icon">
        <a class="link" href="#">Tim hieu  </a>
        <i class="icon-th ti-arrow-top-right"></i>
      </div>
      <div class="bor-th"></div>
    </div>
  </div>
  `;
  container.appendChild(box);
  const itemBox = box.querySelector(".box-f");
  const img = itemBox.querySelector("img");
  const icon = itemBox.querySelector(".icon-th");
  const bor = itemBox.querySelector(".bor-th");

  itemBox.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.1)";
    icon.style.transform = "translateY(-10px)";
    bor.style.border = "1px solid #04aa6d";
  });

  itemBox.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
    icon.style.transform = "translateY(0)";
    bor.style.border = "1px solid white";
  });
}
const container1 = document.getElementById("other-item");
for (let i = 0; i < 4; i++) {
  const box = document.createElement("div");
  box.innerHTML = `<div id="TN">
  <div class="mask1">
    <img src="./assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="Cinque Terre">
      <div class="blurred-bottom"></div>
  </div>
  <div id="box-text">
    <div>Thiet ke kien thuc</div>
    <div style="font-size: 26px;">Trai nghiem</div>
    <div class="box-th-2">
      <div class="box-icon-2">
        <a class="link" href="#">Tim hieu  </a>
        <i class="icon-th ti-arrow-top-right"></i>
      </div>
      <div class="bor-th-2"></div>
    </div>
  </div></div>
  `;
  container1.appendChild(box);
}

// const container3 = document.getElementById("scroller");
// for (let i = 0; i < 9; i++) {
//   const box = document.createElement("ul");
//   box.innerHTML = `
//   <li><img src="./assets/img/0106_hinh-nen-4k-may-tinh5.jpg" width="290" height="200" alt="${i}"></li>
//   `;
//   container3.appendChild(box);
// }
const container4 = document.getElementById("scroller1");
for (let i = 0; i < 9; i++) {
  const box1 = document.createElement("div");
  box1.innerHTML = `
  <li><img src="./assets//img/d4bcc46e371e194b20854acd1ba3a86b.jpg" width="290" height="200"></li>
  `;
  container4.appendChild(box1);
}
(function ($) {
  $(function () {
    $("#scroller").simplyScroll({
      auto: true,
      speed: 1,
      frameRate: 60,
      direction: "backwards",
    });
  });
})(jQuery);
$("#scroller1").simplyScroll({
  speed: 1,
  frameRate: 60,
});
