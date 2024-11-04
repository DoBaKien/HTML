let tab = document.getElementById("tab-scroll");

document
  .querySelectorAll(".simple-list-example-scrollspy li")
  .forEach(function (item) {
    item.addEventListener("mouseover", function () {
      tab.style.width = "200px";
    });

    item.addEventListener("mouseout", function () {
      tab.style.width = "80px";
    });
  });
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".client");
  let currentIndex = 0;

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth" });
    }
  }

  function goToNextSection() {
    currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    scrollToSection(currentIndex);
  }

  document
    .getElementById("scrollbtn")
    .addEventListener("click", goToNextSection);
});
document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = document.querySelector("#carouselExampleFade");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Thay đổi thời gian giữa các slide (3 giây)
    ride: "carousel", // Kích hoạt autoplay
  });
});
