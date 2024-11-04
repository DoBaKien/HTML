const cols = document.querySelectorAll(".box-circle"); // Corrected class name
const textTN = document.querySelectorAll(".txt_yilintrainghiem");
const defaultText = Array.from(textTN).find(
  (tn) => tn.getAttribute("data-numbers") === "1"
);

// Display default text initially
if (defaultText) {
  defaultText.classList.add("active");
}

cols.forEach((col) => {
  const number = col.getAttribute("data-number");

  col.addEventListener("mouseover", () => {
    // Hide default text and show the corresponding text
    const correspondingText = Array.from(textTN).find(
      (tn) => tn.getAttribute("data-numbers") === number
    );

    if (correspondingText) {
      // Hide all text elements and show the corresponding one
      textTN.forEach((tn) => {
        tn.classList.remove("active");
      });
      correspondingText.classList.add("active");
    }
  });

  col.addEventListener("mouseleave", () => {
    // Hide all text elements and show default text
    textTN.forEach((tn) => {
      tn.classList.remove("active");
    });

    if (defaultText) {
      defaultText.classList.add("active");
    }
  });
});
