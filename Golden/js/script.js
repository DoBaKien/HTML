const backgroundBot = document.querySelector(".background-bottom");
const background = document.querySelector(".background");

let scale = 1;
let translateY = 0;
let posX = 0;
let lastScrollTop = 0;
let imgx = 0;

function updateBackgroundTransform() {
  backgroundBot.style.transform = `translate(calc(-50% + ${posX}%), -${translateY}px) scale(${scale})`;
  background.style.transform = `translateX(calc(-50% + ${posX}%))`;
}

window.addEventListener("scroll", () => {
  const box3 = document.getElementById("box3");
  const box9 = document.getElementById("box9");

  const box1 = document.getElementById("box1");
  const imgBox3 = document.getElementById("img-box3");
  const imgBox9 = document.getElementById("img-box9");

  const scrollY = window.scrollY;

  scale = 1 + scrollY / 1000;
  translateY = scrollY / 2;

  if (box3.classList.contains("visible")) {
    if (scrollY < 2000) {
      imgBox3.style.transform = ` scale(${scrollY / 1000 - 1.3})`;
    }
  } else {
    imgBox3.style.transform = ` scale(1)`;
  }
  if (box9.classList.contains("visible")) {
    if (scrollY < 6800) {
      imgBox9.style.transform = ` scale(${scrollY / 3000 - 1.3})`;
    }
  } else {
    imgBox9.style.transform = ` scale(1)`;
  }
  if (box1.classList.contains("visible")) {
    updateBackgroundTransform();
  }
});
document.addEventListener("mousemove", (e) => {
  const header = document.getElementById("header");
  if (header.classList.contains("active")) {
    const image = document.getElementById("rotateImage");
    const { clientX: mouseX } = event;

    const { innerWidth: width } = window;

    const rotateX = (mouseX / width - 0.5) * 100;
    const mouseX1 = event.clientX / window.innerWidth;
    const imgx = (mouseX1 - 0.5) * 10;

    image.style.transform = `translateX(calc(${imgx}%)) rotate(${rotateX}deg)`;
  } else {
    if (window.innerWidth > 1000) {
      const mouseX = e.clientX / window.innerWidth;
      posX = (mouseX - 0.5) * 10; // Reduce horizontal movement scale to 50%

      updateBackgroundTransform();
    }
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("box-menu");
  const menu = document.getElementById("menu");
  const header = document.getElementById("header");
  const boxLogo = document.getElementById("box-logo");
  const body = document.body;
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
    header.classList.toggle("active");
    body.classList.toggle("no-scroll");
    boxLogo.classList.toggle("hidden");
  });
});

window.addEventListener("scroll", () => {
  var menusScroll = document.getElementById("header");
  var logo = document.getElementById("logo-header");

  if (window.innerWidth < 700) {
    logo.style.display = "none";
    if (window.scrollY > 0) {
      menusScroll.classList.add("scrolled");
    } else {
      menusScroll.classList.remove("scrolled");
    }
  } else {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      // Đang cuộn xuống

      if (window.scrollY > 200) {
        logo.style.display = "block";
        menusScroll.classList.add("down");
        menusScroll.classList.remove("up");
      }
    } else {
      // Đang cuộn lên
      if (window.scrollY > 200) {
        menusScroll.classList.remove("down");
        menusScroll.classList.add("up");
        logo.style.display = "block";
      } else {
        menusScroll.classList.remove("up");
        logo.style.display = "none";
      }
    }
    lastScrollTop = currentScrollTop;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const checkVisibility = () => {
    const viewportHeight = window.innerHeight;

    reveals.forEach((reveal) => {
      const rect = reveal.getBoundingClientRect();

      if (rect.top < viewportHeight - 100 && rect.bottom >= 0) {
        reveal.classList.add("visible");
      } else {
        reveal.classList.remove("visible");
      }
    });
  };

  const debounce = (func, wait = 100, immediate = true) => {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  window.addEventListener("scroll", debounce(checkVisibility));
  // Kiểm tra ngay lập tức khi trang tải xong
  checkVisibility();
});

document.addEventListener("scroll", function () {
  scrollDoc("num-1", "text-1", "box-text-1", 400, 1);
  scrollDoc("num-2", "text-2", "box-text-2", 3500, 2);
  scrollDoc("num-3", "d", "box-text-3", 2500, 3);
  scrollDoc("num-4", "text-4", "box-text-4", 2500, 1);
  scrollDoc("numbi", "d", "decs", 4500, 3);
  scrollDoc("num-5", "text-5", "box-text-5", 2500, 2);
  scrollIcon();
});

function scrollDoc(num, text, box, d, e) {
  const scrollY = window.scrollY;
  const scrollText = document.getElementById(num);
  const containerHeight = document.getElementById(box).offsetHeight;

  const newBottom = -containerHeight + scrollY - d;
  if (e == 2) {
    const aText = document.getElementById(text);
    aText.style.bottom = `${newBottom / 10}px`;
  } else if (e == 1) {
    const aText = document.getElementById(text);
    aText.style.top = `${newBottom / 10}px`;
  }

  scrollText.style.bottom = `${newBottom / 10}px`;
}

function timeCircle(btn, back, e) {
  const button = document.getElementById(btn);
  const bg = document.getElementById(back);
  let timer;
  let seconds = 0;

  if (window.innerWidth > 1000) {
    button.addEventListener("mouseover", () => {
      timer = setInterval(() => {
        seconds++;
        if (seconds <= 100) {
          bg.style.backgroundImage = `conic-gradient(#ffffff ${seconds}% , #ffb700 ${seconds}%)`;
          if (e) {
          } else {
            bg.style.backgroundImage = `conic-gradient(#ffb700 ${seconds}% , #005656 ${seconds}%)`;
          }
        } else {
          clearInterval(timer);
          timer = null;
        }
      }, 10);
    });

    button.addEventListener("mouseout", () => {
      clearInterval(timer);
      timer = null;
      bg.style.backgroundImage = ``;
      seconds = 0;
    });
  }
}

timeCircle("timerButton", "bg", false);
timeCircle("timerButton1", "bg1", false);
timeCircle("timerButton2", "bg2", false);
timeCircle("timerButton3", "bg3", false);
timeCircle("timerButton4", "bg4", true);
timeCircle("timerButton5", "bg5", true);

function phoBien() {
  const container = document.getElementById("carousel");
  for (let i = 1; i < 7; i++) {
    const box = document.createElement("div");
    box.classList.add("carousel-cell");
    box.innerHTML = `<div class="box-container">
                    <div class="box-text">
                        <div class="text1">
                            <p> GOLDEN IMPERIAL <br> HOTEL MĂNG ĐEN</p>
                        </div>
                        <div class="text2">
                            <p>
                                Tọa lạc giữa “trái tim” thị trấn Măng Đen, huyện KonPlong tỉnh Kon Tum, Tựa
                                như bản giao hưởng tinh tế của đại ngàn Măng Đen, Golden Boutique Hotel là khách sạn
                                đẳng cấp nhất tại thị trấn Măng Đen, Kon Tum.
                            </p>
                            <div class="btn">
                                <a href="">XEM THÊM</a>
                                <i class="ri-arrow-right-s-line"></i>
                            </div>
                        </div>

                    </div>
                    <div class="img-cell">
                        <img src="../assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="">
                    </div>
                    <div class="box-title">
                        <div class="num">0${i}</div>
                        <p>Một không gian sang trọng hiếm có với lối kiến trúc phong cách Tân Cổ điển độc bản</p>
                    </div>
                </div>  `;
    container.appendChild(box);
  }
}
phoBien();
var $carousel = $(".carousel").flickity({
  wrapAround: true,
  contain: true,
  prevNextButtons: false,
  pageDots: false,
});
$("#timerButton5").on("click", function () {
  $carousel.flickity("next");
});
$("#timerButton4").on("click", function () {
  $carousel.flickity("previous");
});
function thongTin() {
  const container = document.getElementById("box-22");
  for (let i = 1; i < 4; i++) {
    const box = document.createElement("div");
    box.classList.add("box-content");
    if (i % 2 == 0) {
      box.classList.add("row");
    }
    box.innerHTML = `    <div class="time">${i}-11-2024</div>
                        <div class="box">
                            <div class="img-box">
                                <img src="../assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="">
                            </div>
                            <div class="content">
                                <p>Golden Imperial Hotel Đà Lạt: Bốn mùa hội tụ nơi thành phố ngàn hoa!</p>
                                <div class="btn">
                                    <a href="">Chi tiết</a>
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                            </div>
                             </div> `;
    container.appendChild(box);
  }
}
thongTin();
function listIcon() {
  const container = document.getElementById("list-icon");
  for (let i = 1; i < 13; i++) {
    const box = document.createElement("div");
    box.classList.add("item");
    if (i % 2 != 0) {
      box.classList.add("action");
    } else {
      box.classList.add("actionn");
    }
    box.innerHTML = `
     <img src="../assets/img/icon-normal.svg" alt="">`;
    container.appendChild(box);
  }
}
listIcon();
function scrollIcon() {
  const box12 = document.getElementById("box12");

  if (box12.classList.contains("visible") && window.innerWidth > 1000) {
    const scrollY = window.scrollY;
    const containerHeight = document.getElementById("list-icon").offsetHeight;

    const newBottom = (-containerHeight + scrollY - 8440) / 100;

    const iconMove = document.querySelectorAll(".action");
    iconMove.forEach((icon) => {
      icon.style.transform = `translateY(${-newBottom}px)`;
    });
    const iconMove1 = document.querySelectorAll(".actionn");
    iconMove1.forEach((icon) => {
      icon.style.transform = `translateY(${newBottom}px)`;
    });
  }
}
document.getElementById("phoneNumber").addEventListener("input", function (e) {
  // Loại bỏ tất cả các ký tự không phải số từ giá trị nhập vào
  this.value = this.value.replace(/[^0-9]/g, "");
});
