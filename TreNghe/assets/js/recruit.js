const container = document.getElementById("list-box");
function myFun() {
  for (let i = 0; i < 6; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
        <div id="box-td">
            <div class="title">
                <img src="./assets/img/0106_hinh-nen-4k-may-tinh5.jpg" alt="Girl in a jacket">
            </div>
            <div id="box-info">
                <div id="name">Kien truc su noi that</div>
                <div id="vitri">
                    <div class="item">Vung Tau</div>
                    <div class="item">Thoa thuan</div>
                </div>
                <div id="info">Mọi cá nhận đều có những điểm vượt trội khác biệt, và chắc chắn bạn đang trên hành trình
                    đi</div>
                <div class="box-th">
                    <div class="box-icon">
                        <a class="link" href="../../recruitdetail.html">Chi tiet </a>
                        <i class="icon-th ti-arrow-top-right"></i>
                    </div>
                    <div class="bor-th"></div>
                </div>
            </div>
        </div>
  `;
    container.appendChild(box);
  }
}

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
  myFun();
};
about();
