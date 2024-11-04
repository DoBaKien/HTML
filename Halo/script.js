let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let slider = document.querySelector(".slider");
let slides1 = document.querySelectorAll(".slides");
let num_s = document.getElementById("num-s");
const line = document.getElementById("process-line");

let number_img = 5;
line.style.width = 100 / number_img + "%";

next.addEventListener("click", function (event) {
  event.stopPropagation();
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
  handleLine(slides[1]);
});

prev.addEventListener("click", function (event) {
  event.stopPropagation();
  slider.prepend(
    slider.querySelectorAll(".slides")[
      slider.querySelectorAll(".slides").length - 1
    ]
  );

  // Cập nhật lại danh sách slides sau khi DOM thay đổi
  let slides = document.querySelectorAll(".slides");
  handleLine(slides[0]);
});

const handleLine = (e) => {
  firstSlide = e;
  const item = firstSlide.getAttribute("data-num");
  const num = 100 / number_img;

  line.style.width = Number(item) * num + "%";
  if (item < 10) {
    num_s.innerText = "0" + item;
  } else {
    num_s.innerText = item;
  }
};
