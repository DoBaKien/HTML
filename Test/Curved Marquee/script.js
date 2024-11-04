function startMarquee(id, pathId, content, speed) {
  const textPath = document.getElementById(id);
  const path = document.getElementById(pathId);
  const pathLength = path.getTotalLength();
  textPath.innerHTML = content;

  let offset = 0;

  function animateText() {
    offset -= speed;
    if (offset < 0) {
      offset = pathLength;
    } else if (offset > pathLength) {
      offset = 0;
    }
    textPath.setAttribute("startOffset", `${offset}px`);
    requestAnimationFrame(animateText);
  }

  animateText();
}

document.addEventListener("DOMContentLoaded", () => {
  const textContent1 =
    '<a href="#"  style="text-decoration: none;">CE TANT CHE NO TI VIÔT &nbsp;&nbsp;</a>'.repeat(
      50
    );
  startMarquee("marquee-text", "text-path", textContent1, 0.9);

  const textContent2 =
    '<a href="#" style="text-decoration: none;">Long time no see &nbsp;&nbsp;&nbsp;&nbsp;</a>'.repeat(
      50
    );
  startMarquee("marquee-text-2", "text-path-2", textContent2, 0.9);
});
