function myFun() {
  const container = document.getElementById("box-info");
  if (container) {
    for (let i = 0; i < 6; i++) {
      const box = document.createElement("div");
      box.innerHTML = `
            <div class="box-item">
                        <img src="./assets/img/icon5.svg" alt="" />
                        <div class="item">
                            <div id="text1">So luong co ban</div>
                            <div id="text2">05</div>
                        </div>
                    </div>
      `;
      container.appendChild(box);
    }
  }
}

const about = () => {
  myFun();
};
about();
