const menu = (carousel, pre, next) => {
  var $carousel = $(carousel).flickity({
    wrapAround: true,
    contain: true,
    pageDots: false,
    prevNextButtons: false,
  });

  $(pre).on("click", function () {
    console.log("asd");
    $carousel.flickity("previous");
  });
  $(next).on("click", function () {
    $carousel.flickity("next");
  });
};

function tcptFunc() {
  menu("#listhangmuc", ".carousel-prev-button-hm", ".carousel-next-button-hm");
  menu("#listbienphap", ".carousel-prev-button-bp", ".carousel-next-button-bp");
  menu(".carousel-vt", ".carousel-prev-button-vt", ".carousel-next-button-vt");
}

tcptFunc();
