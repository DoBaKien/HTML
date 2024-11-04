const urlParams = new URLSearchParams(window.location.search);
const hskName = urlParams.get("hsk");
const questionId = parseInt(urlParams.get("id"), 10);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
const logBtn = document.getElementById("logBtn");
const closeBtn = document.getElementById("closeModalBtn");
const textRecord = document.getElementById("record");

const currentHSK = quiz.find((q) => q.name === hskName);
const question = currentHSK.questions.find((q) => q.id === questionId);
textRecord.textContent = currentHSK.name;
let selectedOption = null;
if (question) {
  document.getElementById("questionTitle").textContent = question.question;

  const currentIndex =
    currentHSK.questions.findIndex((q) => q.id === questionId) + 1;
  const totalQuestions = currentHSK.questions.length;
  document.querySelector(
    ".header-ans"
  ).textContent = `Câu hỏi ${currentIndex} / ${totalQuestions}`;

  const answerOptions = document.getElementById("answerOptions");
  const optionLetters = ["A", "B", "C", "D"];

  question.options.forEach((option, index) => {
    const label = document.createElement("div");
    label.classList.add("option");

    const letterSpan = document.createElement("span");
    letterSpan.textContent = optionLetters[index] + ": ";
    letterSpan.classList.add("optionLetter");

    label.appendChild(letterSpan);
    label.appendChild(document.createTextNode(option));

    label.addEventListener("click", () => {
      document
        .querySelectorAll(".option")
        .forEach((opt) => opt.classList.remove("selected"));
      label.classList.add("selected");
      selectedOption = option; // Gán giá trị khi chọn đáp án
      document.getElementById("nextButton").disabled = false;
    });

    answerOptions.appendChild(label);
  });
} else {
  document.getElementById("questionTitle").textContent =
    "Câu hỏi không tồn tại.";
  document.getElementById("nextButton").style.display = "none";
}

// Nút "Tiếp tục" để chuyển qua câu hỏi tiếp theo
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", () => {
  console.log(selectedOption);

  const currentIndex = currentHSK.questions.findIndex(
    (q) => q.id === questionId
  );
  const nextQuestion = currentHSK.questions[currentIndex + 1];

  if (nextQuestion) {
    window.location.href = `question.html?hsk=${hskName}&id=${nextQuestion.id}`;
  } else {
    window.location.href = `finish.html?hsk=${hskName}`;
  }
});

// Xử lý nút "Go Back" để quay lại trang trước
const goBackButton = document.getElementById("goBackButton");
goBackButton.addEventListener("click", () => {
  modal.style.display = "block";
});

logBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
closeBtn.onclick = function () {
  modal.style.display = "none";
};
