const btnMore = document.getElementById("btn-more");
let listItem = 0;
btnMore.addEventListener("click", () => {
  myFun(3);
});

const container = document.getElementById("box");
function myFun(listItem) {
  for (let i = 0; i < listItem; i++) {
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
}
myFun(6);
