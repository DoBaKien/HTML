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
        title.style.borderTop = "1px solid lightgray";
        title.style.backgroundColor = "white";
      } else {
        title.style.color = "#ff6a16";
        title.style.backgroundColor = "#EEEEEE";
        title.style.fontWeight = "600";
        title.style.borderTop = "1px solid #ff6a16";
      }
    };

    title.addEventListener("click", toggleDropdown);
  });
};
const que = document.querySelectorAll(".quest");
for (let i = 1; i <= que.length; i++) {
  openCauHoi(`#quest${i}`, `#icon-ch${i}`, `#answer${i}`);
}
