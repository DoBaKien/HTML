const hskList = document.getElementById("hskList");
const backBtn = document.getElementById("goBack");
let selectedHSK = null;

// Hiển thị danh sách HSK
quiz.forEach((hsk, index) => {
  const hskItem = document.createElement("div");
  hskItem.textContent = hsk.name;
  hskItem.classList.add("hsk-item");

  // Xử lý chọn HSK khi nhấp vào
  hskItem.addEventListener("click", () => {
    document.getElementById("startButton").disabled = false;
    document.getElementById("startButton").classList.remove("disabled");
    selectedHSK = index;
    document
      .querySelectorAll(".hsk-item")
      .forEach((item) => item.classList.remove("selected"));
    hskItem.classList.add("selected");
  });

  hskList.appendChild(hskItem);
});

// Khi nhấn nút "Bắt đầu", chuyển đến câu hỏi đầu tiên của HSK đã chọn
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => {
  if (selectedHSK !== null) {
    const hskName = quiz[selectedHSK].name;
    const questionId = quiz[selectedHSK].questions[0].id;
    window.location.href = `question.html?hsk=${hskName}&id=${questionId}`;
  } else {
    alert("Vui lòng chọn một HSK để bắt đầu!");
  }
});

backBtn.addEventListener("click", () => {
  history.back();
});
