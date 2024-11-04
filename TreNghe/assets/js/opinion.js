const container = document.getElementById("box");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const btnMore = document.getElementById("btn-more");
let listItem = 0;
btnMore.addEventListener("click", () => {
  boximage(3);
});

function boximage(item) {
  for (let i = 0; i < item; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
         <div class="box-f">
              <div class="item-box">
                  <i class="play-icon ri-play-fill"></i>
                  <img src="./assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="Cinque Terre">
              </div>
              <div class="title-f">
                  Mr. Cần - Vũng Tàu | “Chuyên Nghiệp - Minh Bạch - Trong Thân Tâm Chú Tre Nghệ 10 Điểm”</div>
          </div>
        `;
    container.appendChild(box);
    const itemBox = box.querySelector(".box-f");
    const img = itemBox.querySelector("img");
    const iconP = itemBox.querySelector(".play-icon");

    itemBox.addEventListener("mouseover", function () {
      img.style.transform = "scale(1.1)";
      iconP.style.backgroundColor = "#689a4b";
    });

    itemBox.addEventListener("mouseout", function () {
      img.style.transform = "scale(1)";
      iconP.style.backgroundColor = "gray";
    });
    itemBox.addEventListener("click", function () {
      popup.classList.add("active");
      const imageName = box.querySelector(".title-f").innerText;
      document.querySelector(".image-name").innerText = imageName;
    });
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  }
}
boximage(6);
