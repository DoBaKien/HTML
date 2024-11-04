function phoBien() {
  const container = document.getElementById("owl-carousel");
  for (let i = 0; i < 7; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
   <div class="box-img1">
                <img src="https://via.placeholder.com/400x300/f06/fff/?text=1" alt="">
                <div id="box-info">
                    <div class="title1">Thang 11 va cai hen Ha Giang</div>
                    <div class="date">03/08/2020</div>
                    <p>Ở miền Bắc ngoài những cung trekking như Bạch Mộc Lương Tử, Lảo Thẩn, Fansipan… vốn đã quá nổi
                        tiếng, bạn có biết vẫn còn nhiều những ngọn núi có cảnh quan rất đa dạng và đặc thù nhưng lại
                        rất ít dấu chân người? Cùng Travel Up điểm </p>
                    <button class="btn-carousel">Chi tiet</button>
                </div>
            </div>
  `;

    container.appendChild(box);
  }
}
function tinTuc() {
  const container = document.getElementById("list-tt");
  for (let i = 0; i < 7; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
                <div class="item">
                    <div class="img-item">
                        <img src="../assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="">
                    </div>
                    <div class="info">
                        <h3>Thể lệ cuộc thi Hồi Ức Trên Cao</h3>
                        <div class="subtext">THỂ LỆ CUỘC THI HỒI ỨC TRÊN CAO 2022 Các bạn gửi 01 bài viết chia sẻ kèm 4-
                            10 ảnh tâm đắc nhất làm cover bài thi về địa chỉ: hoiuctrencaotu@gmail.com. Bài thi phải đủ
                            2 nội dung: – Một bài viết chia sẻ cảm xúc, ấn tượng về
                        </div>
                        <button class="btn-item">xem them</button>
                    </div>
                </div>
  `;

    container.appendChild(box);
  }
}
phoBien();
tinTuc();
var $owl = $(".owl-carousel");

$owl.children().each(function (index) {
  $(this).attr("data-position", index);
});

$owl.owlCarousel({
  center: true,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },

    1000: {
      items: 3,
    },
  },
});

$(document).on("click", ".owl-item>div", function () {
  var $speed = 300; // in ms
  $owl.trigger("to.owl.carousel", [$(this).data("position"), $speed]);
});
