const imagecut1 = document.getElementById("cam-cut-1");
const imagecut2 = document.getElementById("cam-cut-2");
const chaiCam = document.getElementById("chai-cam");
const chaiDau = document.getElementById("chai-dau");
const chaiChanh = document.getElementById("chai-chanh");
const cam = document.getElementById("cam");
const dua = document.getElementById("dua");
const chanh = document.getElementById("chanh");
const chanh4 = document.getElementById("chanh-4");
cam.addEventListener("mousemove", (event) => {
  const image1 = document.getElementById("cam-1");
  const image2 = document.getElementById("cam-2");
  const image3 = document.getElementById("cam-3");
  const image4 = document.getElementById("cam-4");
  const box = document.getElementById("box-cam");
  const box2 = document.getElementById("box-cam-2");
  const boxchai = document.getElementById("box-chai");
  const text = document.getElementById("cam-text");
  const clickImg = document.getElementById("click");

  const rect = cam.getBoundingClientRect();
  let x1 = event.clientY - rect.top;
  let mouseX = event.clientX / 100 - 10;
  let mouseY = x1 / 50 - 10;

  image1.style.transform = `
    translate3d(-50%, -50%,100px) 
    rotateY(${-mouseX}deg) 
    rotateX(${mouseY}deg)`;

  image3.style.transform = `
    translate3d(-50%, -50%, -50px) 
    rotateY(${-mouseX}deg) 
    rotateX(${mouseY}deg)`;

  image2.style.transform = `
    translate3d(${mouseX}%, -${50 - mouseY}%, -100px)`;

  image4.style.transform = `
    translate3d(-${50 - mouseX}%, -${50 - mouseY}%, -100px)
    rotate(210deg)`;

  box.style.transform = `
    translate3d(-50%, -50%, 200px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)  `;
  box2.style.transform = `
    translate3d(-50%, -50%, 200px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)  `;

  boxchai.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 - mouseY}%, 100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;
  text.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 - mouseY}%, 500px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;
  clickImg.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 - mouseY}%, 100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;
});

document.addEventListener("DOMContentLoaded", (e) => {
  countUpDown(360, 0, 100, (value) => {
    imagecut1.style.transform = `
    translate3d(-50%, -50%, 50px) rotate(${value}deg)`;
    imagecut2.style.transform = `
    translate3d(0, 0, 50px) rotate(${value}deg)`;
    chanh4.style.transform = `
    translate3d(-50%, -50%, 50px) rotate(${value}deg)`;
  });
  countUpDown(100, 0, 100, (value) => {
    chaiCam.style.transform = `
    translate3d(-50%, -50%, 100px) rotate(-${value / 5}deg)`;
  });
  countUpDown(100, 0, 100, (value) => {
    chaiDau.style.transform = `
    translate3d(-50%,-50%, 100px) rotate(${value / 5}deg)`;
  });
  countUpDown(100, 0, 100, (value) => {
    chaiChanh.style.transform = `
    translate3d(-50%,-50%, 100px) rotate(-${value / 5}deg)`;
  });
});

function countUpDown(start, end, delay, callback) {
  let current = start;
  let countingDown = true;

  function update() {
    if (countingDown) {
      current -= 1; // Giảm dần
      if (current <= end) {
        current = end;
        countingDown = false; // Đổi chiều
      }
    } else {
      current += 1; // Tăng dần
      if (current >= start) {
        current = start;
        countingDown = true; // Đổi chiều
      }
    }

    // Gọi hàm callback với giá trị hiện tại
    if (callback) {
      callback(current);
    }

    setTimeout(() => requestAnimationFrame(update), delay);
  }

  // Bắt đầu cập nhật
  update();
}

dua.addEventListener("mousemove", (event) => {
  const dau1 = document.getElementById("dau-1");
  const dau2 = document.getElementById("dau-2");
  const dau3 = document.getElementById("dau-3");
  const dau4 = document.getElementById("dau-4");
  const dau5 = document.getElementById("dau-5");
  const dau6 = document.getElementById("dau-6");
  const dau7 = document.getElementById("dau-7");
  const strl1 = document.getElementById("strl-1");
  const strl2 = document.getElementById("strl-2");
  const strl3 = document.getElementById("strl-3");
  const water = document.getElementById("water");
  const back = document.getElementById("back");
  const box = document.getElementById("box-dau");
  const boxText = document.getElementById("box-text");
  const coconut1 = document.getElementById("coconut-1");
  const coconut2 = document.getElementById("coconut-2");

  const rect = dua.getBoundingClientRect();

  let mouseX = event.clientX / 50 - 10;
  let mouseY = (event.clientY - rect.top) / 50 - 10;
  let mouseX2 = event.clientX / 20 - 10;

  boxText.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, 200px)
    rotateY(${mouseX}deg)
    rotateX(${-mouseY}deg) rotate(-20deg)`;

  box.style.transform = `
    translate3d(-50%, -50%,100px )
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  coconut2.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, 100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)
    rotate(-40deg)`;

  coconut1.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, 100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  back.style.transform = `
    translate3d(-50%, -50%,100px )
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)
    rotate(-40deg)`;

  water.style.transform = `
   translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  strl1.style.transform = `
    translate3d(-50%, -50%,500px )
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  strl2.style.transform = `
    translate3d(-50%, -50%,-100px )
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  strl3.style.transform = `
    translate3d(-50%, -50%,-100px )
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  dau1.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, 100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  dau2.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -100px)
     rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  dau3.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -200px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  dau4.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -50px)`;

  dau5.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  dau6.style.transform = `
    translate3d(-${50 + mouseX2}%, -${50 + mouseY}%, -100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  dau7.style.transform = `
    translate3d(-${50 + mouseX2}%, -${50 + mouseY}%, -100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;
});

chanh.addEventListener("mousemove", (event) => {
  const rect = chanh.getBoundingClientRect();
  const chanh1 = document.getElementById("chanh-1");
  const chanh2 = document.getElementById("chanh-2");
  const chanh3 = document.getElementById("chanh-3");
  const chanh4 = document.getElementById("chanh-xoay");
  const water1 = document.getElementById("water-1");
  const water2 = document.getElementById("water-2");
  const back = document.getElementById("back-chanh");
  const box = document.getElementById("box-chanh");
  const la = document.getElementById("chanh-la");
  let mouseX = event.clientX / 50 - 10;
  let mouseY = (event.clientY - rect.top) / 50 - 10;

  box.style.transform = `
   translate3d(-${50 + mouseX}%, -${50 + mouseY}%, 100px)
    `;

  chanh1.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, 100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  chanh2.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -100px)
     rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg) rotate(25deg)`;

  chanh3.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -200px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;

  chanh4.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -50px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;
  la.style.transform = `
    translate3d(-${50 + mouseX}%, -${50 + mouseY}%, -50px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)`;
  water1.style.transform = `
  translate3d(-50%,-50%, -300px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)  `;

  water2.style.transform = `
 translate3d(-50%,-50%, -200px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)   `;

  back.style.transform = `
    translate3d(-50%,-50%, 100px)
    rotateY(${-mouseX}deg)
    rotateX(${mouseY}deg)   `;
});
