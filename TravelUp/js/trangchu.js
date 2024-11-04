var $carousel = $(".carousel-bg").flickity({
  wrapAround: true,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
});

function tuorNoiBat() {
  const container = document.getElementById("carousel");
  for (let i = 0; i < 6; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
    <div class="item-owl">
      <div class="img2">
        <img src="../assets/img/0106_hinh-nen-4k-may-tinh5.jpg">
      </div>
      <div class="text2">
        <img src="../assets/img/trekkkinghing.svg" id="icon2">
        <h1>Tour leo núi</h1><br>
        <h2>${i}.500.000 VND</h2><br>
        <span>2 ngày / 3 đêm</span> <br>
        <div class="hard">Độ khó <img src="../assets/img/hard.svg" id="icon3"> </div><br>
        <button class="button"  style="margin-top: 20px;">chi tiet</button>
      </div>
    </div>
  `;

    container.appendChild(box);
  }
}
function trekkkinghing() {
  const container = document.getElementById("carousel-th");
  for (let i = 0; i < 6; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
    <div class="carousel-cell-th">
    <div class="img2">
        <img src="../assets/img/0106_hinh-nen-4k-may-tinh5.jpg">
      </div>
      <div class="text2">
        <img src="../assets/img/trekkkinghing.svg" id="icon2">
        <h1>Tour leo núi</h1><br>
        <h2>${i}.500.000 VND</h2><br>
        <span>2 ngày / 3 đêm</span> <br>
        <div class="hard">Độ khó <img src="../assets/img/hard.svg" id="icon3"> </div><br>
        <button class="button" style="margin-top: 20px;">chi tiet</button>
      </div>
    </div>
  `;

    container.appendChild(box);
  }
}
function camnang() {
  const container = document.getElementById("camnangbox");
  for (let i = 0; i < 3; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
     <div class="cam-item">
                <div class="cam-img">
                    <img src="../assets/img/0106_hinh-nen-4k-may-tinh5.jpg" />
                </div>
                <div class="cam-content">
                    <div class="cam-title">THÁNG 11 VÀ CÁI HẸN VỚI HÀ GIANG</div>
                    <div class="sub-content">Hai tháng cuối năm với tam giác mạch, cúc cam, hoa đào nở sớm,.. và tiết
                        trời se lạnh chắc chắn sẽ là thời gian tuyệt đẹp để vi vu khắp miền đá Hà Giang
                    </div>
                    <button class="btn-cam">chi tiet</button>
                    <span><i class="ri-time-line"></i> 03/08/2021</span>
                </div>
            </div>
  `;

    container.appendChild(box);
  }
}
function camNhan() {
  const container = document.getElementById("carousel-cn");
  for (let i = 0; i < 3; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
    <div class="carousel-cell-cn">
                <div class="text-c">
                    <p style="font-size: 20px;">5/5 diem de xuat tren mang xa hoi</p>
                    <span>Bao thuy</span>
                    <div class="rv">Đi trek 2 lần đều chọn travel up,rồi quen nh anh chị nh bạn mới cũng từ đây, cảm
                        nhận cá
                        nhân rất hài lòng với đội ngũ leader bên này, đi cùng a Tuấn Hoàng, c Ngọc Hoa putaleng, cùng e
                        út
                        củ đậu Hoàng Đức Khang Su Văn, nói ch giao lưu cùng a Đào Hà, nói chung ai cũng vui vẻ nhiệt
                        huyết.
                        Riêng e củ Đậu siêu cute hát siêu phiêu. Còn ai trong đội chưa có dịp giao lưu thì hẹn cung khác
                        �
                        vote 5 sao�����</div>
                </div>
                <div id="img-c">
                    <img src="../assets/img/0106_hinh-nen-4k-may-tinh5.jpg" />
                </div>
            </div>
  `;

    container.appendChild(box);
  }
}
camNhan();
trekkkinghing();
camnang();
tuorNoiBat();
document.querySelectorAll(".item-owl").forEach((button) => {
  button.addEventListener("click", function () {
    const url = this.getAttribute("data-url");
    window.location.href = "./tour.html";
  });
});
var $carousel = $(".carousel-th").flickity({
  wrapAround: true,
  contain: true,
  pageDots: false,
  groupCells: true,
});
var $carousel1 = $(".carousel-dn").flickity({
  wrapAround: true,
  adaptiveHeight: true,
  contain: true,
  pageDots: false,
});
var $carousel1 = $(".carousel-cn").flickity({
  wrapAround: true,

  contain: true,
  pageDots: false,
});
$(".owl-carousel").owlCarousel({
  margin: 50,
  loop: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    900: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
