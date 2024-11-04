function listDichVu() {
  const container1 = document.getElementById("other-item");
  if (container1) {
    for (let i = 0; i < 4; i++) {
      const box = document.createElement("div");
      box.innerHTML = `
      <div id="TN">
        <div class="mask1">
         <img alt="k" src="./assets/img/0106_hinh-nen-4k-may-tinh5.jpg">
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
  }
}

function listCamKet() {
  const container = document.getElementById("box-info");
  if (container) {
    for (let i = 0; i < 6; i++) {
      const box = document.createElement("div");
      box.innerHTML = `
            <div class="box-item">
                        <img src="./assets/img/icon5.svg" alt="" />
                        <div class="item-camket">
Giám sát chặt chẽ chất lượng và tiến độ cho từng hạng mục thi công
                        </div>
                    </div>
      `;
      container.appendChild(box);
    }
  }
}

const menu = (carousel, pre, next) => {
  var $carousel = $(carousel).flickity({
    wrapAround: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,
  });

  // previous
  $(pre).on("click", function () {
    $carousel.flickity("previous");
  });
  $(next).on("click", function () {
    $carousel.flickity("next");
  });
};

function serviceFunc() {
  listDichVu();
  listCamKet();
  menu(".carousel", ".carousel-prev-button", ".carousel-next-button");
}

serviceFunc();
