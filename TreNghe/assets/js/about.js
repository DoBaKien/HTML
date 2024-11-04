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
function simplyScrolls(name, dir) {
  $(name).simplyScroll({
    auto: true,
    speed: 1,
    frameRate: 60,
    direction: dir,
  });
}

const about = () => {
  simplyScrolls(".scroller", "backwards");
  simplyScrolls(".scroller1", "forwards");
  menu("#car1", ".carousel-prev-button", ".carousel-next-button");
  menu("#car2", ".car2-prev-button", ".car2-next-button");
  menu(".carousel-dt", ".prev-button-dt", ".next-button-dt");
  menu(".carousel-qt", ".prev-button-qt", ".next-button-qt");
};

about();
