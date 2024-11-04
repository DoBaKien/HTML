const openLichTrinh = (a, b, c, d) => {
  document.addEventListener("DOMContentLoaded", (event) => {
    const dropdown = document.querySelector(a);
    const title = document.querySelector(b);
    const icon = document.querySelector(c);
    const dropdownContent = document.querySelector(d);

    const toggleDropdown = () => {
      dropdownContent.classList.toggle("show");

      if (icon.style.transform === "rotate(180deg)") {
        icon.style.transform = "rotate(0deg)";
      } else {
        icon.style.transform = "rotate(180deg)";
      }
      if (title.style.color === "rgb(255, 106, 22)") {
        title.style.color = "#000000";
      } else {
        title.style.color = "#ff6a16";
      }
    };

    dropdown.addEventListener("click", toggleDropdown);
    title.addEventListener("click", toggleDropdown);
  });
};

const popupI = () => {
  document.addEventListener("DOMContentLoaded", (event) => {
    const images = document.querySelectorAll(".img-p");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.querySelector(".close");

    images.forEach((image) => {
      image.addEventListener("click", () => {
        popupImg.src = image.src;
        popup.classList.add("show");
        popup.classList.remove("hide");
      });
    });

    closeBtn.addEventListener("click", () => {
      popup.classList.add("hide");
      popup.classList.remove("show");
    });

    popup.addEventListener("click", (event) => {
      if (event.target == popup) {
        popup.classList.add("hide");
        popup.classList.remove("show");
      }
    });

    // Hide the popup after the fade-out animation completes
    popup.addEventListener("animationend", (event) => {
      if (event.animationName === "fadeOut") {
        popup.style.display = "none";
      }
    });
  });
};
const openCauHoi = (a, b, c) => {
  document.addEventListener("DOMContentLoaded", (event) => {
    const title = document.querySelector(a);
    const icon = document.querySelector(b);
    const dropdownContent = document.querySelector(c);

    const toggleDropdown = () => {
      dropdownContent.classList.toggle("show");

      if (icon.style.transform === "rotate(180deg)") {
        icon.style.transform = "rotate(0deg)";
      } else {
        icon.style.transform = "rotate(180deg)";
      }
      if (title.style.color === "rgb(255, 106, 22)") {
        title.style.fontWeight = "normal";
        title.style.color = "#000000";
      } else {
        title.style.color = "#ff6a16";
        title.style.fontWeight = "600";
      }
    };

    title.addEventListener("click", toggleDropdown);
  });
};
function tuorLq() {
  const container = document.getElementById("carousel");
  for (let i = 0; i < 6; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
    <div class="carousel-cell">
                    <div class="img-t">

                    </div>
                    <div class="box-info">
                        <h2>Tour Trekking Cực Đông</h2>
                        <p class="price">4.200.000 VNĐ</p>
                        <p class="duration"><i class="ri-time-line"></i>2 ngày 2 đêm</p>
                        <a class="read-more">READ MORE</a>
                    </div>
                </div>
  `;

    container.appendChild(box);
  }
}

openLichTrinh("#box1", "#box-title1", "#icon-menu1", "#test1");
openLichTrinh("#box2", "#box-title2", "#icon-menu2", "#test2");
openLichTrinh("#box3", "#box-title3", "#icon-menu3", "#test3");
popupI();
tuorLq();
const que = document.querySelectorAll(".quest");
for (let i = 1; i <= que.length; i++) {
  openCauHoi(`#quest${i}`, `#icon-ch${i}`, `#answer${i}`);
}
var $carousel = $(".carousel").flickity({
  wrapAround: true,
  contain: true,
  pageDots: false,
});
