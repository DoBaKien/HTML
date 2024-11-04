const images = [...document.querySelectorAll(".image")];

// popup
const popup = document.querySelector(".popup");
const content = document.querySelector("#content");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let index = 0; // will track our current image;

images.forEach((item, i) => {
  item.addEventListener("click", () => {
    updateImage(i);
    popup.classList.add("active");
  });
});

const updateImage = (i) => {
  // Adjust the image path according to your actual file structure
  let path = images[i].src;
  largeImage.src = path;
  imageName.innerHTML = path.split("/").pop(); // Display the image file name
  imageIndex.innerHTML = `0${i + 1}`; // Display index with leading zero
  index = i;
};

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
  if (index > 0) {
    updateImage(index - 1);
  } else {
    updateImage(images.length - 1); // Loop back to the last image
  }
});

rightArrow.addEventListener("click", () => {
  if (index < images.length - 1) {
    updateImage(index + 1);
  } else {
    updateImage(0); // Loop back to the first image
  }
});
content.addEventListener("click", (event) => {
  if (event.target === content) {
    popup.classList.remove("active");
  }
});

const container = document.getElementById("box");
for (let i = 0; i < 6; i++) {
  const box = document.createElement("div");
  box.innerHTML = `
  <div class="box-f">
    <div class="item-box">
      <img src="./assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="Cinque Terre" >
    </div>
    <div class="title-f">Du an biet thu vung tau</div>
    <div class="box-th">
      <div class="box-icon">
        <a class="link" href="#">Tim hieu  </a>
        <i class="icon-th ti-arrow-top-right"></i>
      </div>
      <div class="bor-th"></div>
    </div>
  </div>
  `;
  container.appendChild(box);
  const itemBox = box.querySelector(".box-f");
  const img = itemBox.querySelector("img");
  const icon = itemBox.querySelector(".icon-th");
  const bor = itemBox.querySelector(".bor-th");

  itemBox.addEventListener("mouseover", function () {
    img.style.transform = "scale(1.1)";
    icon.style.transform = "translateY(-10px)";
    bor.style.border = "1px solid #04aa6d";
  });

  itemBox.addEventListener("mouseout", function () {
    img.style.transform = "scale(1)";
    icon.style.transform = "translateY(0)";
    bor.style.border = "1px solid white";
  });
}
