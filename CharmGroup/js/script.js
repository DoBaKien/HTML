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

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slider = document.querySelector(".slider");
let slides1 = document.querySelectorAll(".slides");

next.addEventListener("click", function (event) {
  event.stopPropagation();
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
  handleLine(slides[2]);
});
prev.addEventListener("click", function (event) {
  event.stopPropagation();
  let slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
  handleLine(slides[0]);
});
function handleEvent(e) {
  e.stopPropagation();
}

const handleLine = (e) => {
  const line = document.getElementById("process-line");
  firstSlide = e;
  console.log(firstSlide);
  const item = firstSlide.getAttribute("data-num");

  line.style.width = Number(item) * 20 + "%";
};

next.addEventListener("mousedown", handleEvent);
next.addEventListener("mouseup", handleEvent);
next.addEventListener("mousemove", handleEvent);
prev.addEventListener("mousedown", handleEvent);
prev.addEventListener("mouseup", handleEvent);
prev.addEventListener("mousemove", handleEvent);
const box = document.getElementById("simple-list-item-2");
let isMouseDown = true;
let mouseDown = 0;
let mouseUp = 0;
box.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  mouseDown = e.clientX;
});

box.addEventListener("mouseup", (e) => {
  isMouseDown = false;
  mouseUp = e.clientX;
});

box.addEventListener("mousemove", (event) => {
  if (isMouseDown == false) {
    if (mouseDown < mouseUp) {
      let slides = document.querySelectorAll(".slides");
      slider.prepend(slides[slides.length - 1]);
      handleLine(slides[0]);
    } else {
      let slides = document.querySelectorAll(".slides");
      slider.appendChild(slides[0]);
      handleLine(slides[2]);
    }

    isMouseDown = true;
  }
});
