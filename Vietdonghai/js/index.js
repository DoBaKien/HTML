var $carousels = $(".carousel");
var $carousel = $("#img-carousel");
$carousel.flickity({
  // autoPlay: true,
  wrapAround: true,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
  adaptiveHeight: true,
});
var $carousel1 = $("#text-carousel");

$carousel1.flickity({
  wrapAround: true,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
  adaptiveHeight: true,
});
$(".button--previous").on("click", function () {
  $carousel.flickity("previous");
});
$(".button--next").on("click", function () {
  $carousel.flickity("next");
});
$carousels.on("select.flickity", function (event) {
  var $target = $(event.currentTarget);
  var flkty = $target.data("flickity");
  var selectedIndex = flkty.selectedIndex;
  $carousels.each(function (i, carousel) {
    var $carousel = $(carousel);
    flkty = $carousel.data("flickity");
    if (flkty.selectedIndex != selectedIndex) {
      $carousel.flickity("select", selectedIndex);
    }
  });
});

const listProduct = () => {
  const container = document.getElementById("carousel12");
  products.forEach((product) => {
    const box = document.createElement("div");
    box.classList.add("carousel-cell");
    box.innerHTML = `
      <svg id="mySvg" width="25px" height="25px" viewBox="0 0 25 25" version="1.1"
                              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <g class="test" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <g transform="translate(-481.000000, -2990.000000)" stroke="#FFFFFF" stroke-width="2">
                                      <path
                                          d="M483.414214,3010.58579 L501.585786,2992.41421 C502.366835,2991.63316 503.633165,2991.63316 504.414214,2992.41421 C504.789286,2992.78929 505,2993.29799 505,2993.82843 L505,3012 C505,3013.10457 504.104569,3014 503,3014 L484.828427,3014 C483.723858,3014 482.828427,3013.10457 482.828427,3012 C482.828427,3011.46957 483.039141,3010.96086 483.414214,3010.58579 Z">
                                      </path>
                                  </g>
                              </g>
                          </svg>
                          <div class="img-item">
                              <img src="../assets/imgs/hinh-nen-may-tinh-dep-full-hd-11.jpg" alt="">
                          </div>
                          <div class="text">
                              <div class="title">
                                  ${product.name}
                              </div>
                              <div class="desc">
                                  <div class="item">
                                      <img src="../assets/imgs/water.svg" alt="">
                                      <p>${product.type}</p>
                                  </div>
                                  <div class="item">
                                      <img src="../assets/imgs/home.svg" alt="">
                                      <p>${product.home}</p>
                                  </div>
                                  <div class="item">
                                      <img src="../assets/imgs/weight.svg" alt="">
                                      <p>${product.weight}</p>
                                  </div>
                              </div>
                          </div>
  `;
    container.appendChild(box);
  });
};
listProduct();
var $carousel12 = $("#carousel12");
$carousel12.flickity({
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  autoPlay: true,
});
$("#prev-btn-12").on("click", function () {
  $carousel12.flickity("previous");
});
$("#next-btn-12").on("click", function () {
  $carousel12.flickity("next");
});

const listComment = () => {
  const container = document.getElementById("carousel-main");
  comments.forEach((comment) => {
    const box = document.createElement("div");
    box.classList.add("carousel-cell");
    box.innerHTML = `
         <p>${comment.content}</p>
  `;
    container.appendChild(box);
  });
};

listComment();

const listUserComment = () => {
  const container = document.getElementById("carousel-nav");
  users.forEach((user) => {
    const box = document.createElement("div");
    box.classList.add("carousel-cell");
    box.innerHTML = `
           <div class="avatar-box">
              <img src=${user.image} alt="" class="avatar">
            </div>
            <div class="name-box">
              <div class="name">${user.name}</div>
              <div class="position">${user.position}</div>
            </div>
  `;
    container.appendChild(box);
  });
};

listUserComment();

var $carousel221 = $(".carousel-main");
$carousel221.flickity({
  wrapAround: true,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
  adaptiveHeight: true,
  adaptiveHeight: true,
});
var $carousel222 = $(".carousel-nav");

$carousel222.flickity({
  wrapAround: true,
  contain: true,
  pageDots: false,
  prevNextButtons: false,
  adaptiveHeight: true,
});

$("#comment-prev").on("click", function () {
  $carousel222.flickity("previous");
});

$("#comment-next").on("click", function () {
  $carousel222.flickity("next");
});

var $carousels22 = $(".carousel22");
$carousels22.on("select.flickity", function (event) {
  var $target = $(event.currentTarget);
  var flkty = $target.data("flickity");
  var selectedIndex = flkty.selectedIndex;
  $carousels22.each(function (i, carousel) {
    var $carousel = $(carousel);
    flkty = $carousel.data("flickity");
    if (flkty.selectedIndex != selectedIndex) {
      $carousel.flickity("select", selectedIndex);
    }
  });
});
$carousels22.each(function (i, carousel) {
  var $carousel = $(carousel);
  $carousel.on("click", ".carousel-cell", function (event) {
    var $cell = $(event.currentTarget);
    var cellIndex = $cell.index();

    $carousels22.each(function (i, carousel) {
      var $carousel = $(carousel);
      $carousel.flickity("select", cellIndex);
    });
  });
});

const listNews = () => {
  const container = document.getElementById("carousel-cn");
  news.forEach((a) => {
    const box = document.createElement("div");
    box.classList.add("carousel-cell-cn");
    box.innerHTML = `
            <div class="box-date">
                                <p>20 <img src="../assets/imgs/split.svg" alt=""> 12</p>
                            </div>
                            <div class="box-item">
                                <div class="content">
                                    <div class="title-item">
                                        <div class="subtitle">${a.type}</div>
                                        <div class="title">${a.name}</div>
                                    </div>
                                    <div class="decs">${a.content}</div>
                                    <img src="../assets/imgs/hinh-nen-may-tinh-dep-full-hd-11.jpg" alt="">
                                </div>
                                <div class="box-btn">
                                    <div class="xem">Xem thêm</div>
                                    <div class="btn">
                                        <svg width="90px" height="16px" viewBox="0 0 90 16" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g class="btn-more" transform="translate(-552.000000, -1887.000000)"
                                                    stroke="#C2C2C2">
                                                    <g transform="translate(552.000000, 1889.343146)">
                                                        <line x1="0.5" y1="6.15685425" x2="82.5032255" y2="5.65685425">
                                                        </line>
                                                        <path
                                                            d="M78.4324556,3.71654123 L86.4324556,1.65685425 L84.3727686,9.65685425 C83.5525342,6.78308984 81.30622,4.53677572 78.4324556,3.71654123 L78.4324556,3.71654123 L78.4324556,3.71654123 Z"
                                                            fill="#C2C2C2"
                                                            transform="translate(82.432456, 5.656854) rotate(-315.000000) translate(-82.432456, -5.656854) ">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
  `;
    container.appendChild(box);
  });
};

listNews();

var $carouselCN = $(".carousel-cn");

$carouselCN.flickity({
  wrapAround: true,
  contain: true,
  autoPlay: true,
  pageDots: false,
  prevNextButtons: false,
  adaptiveHeight: true,
});
$(".left--btn").on("click", function () {
  $carouselCN.flickity("previous");
});

$(".right--btn").on("click", function () {
  $carouselCN.flickity("next");
});
