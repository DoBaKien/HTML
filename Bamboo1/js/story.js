function list1() {
  const container = document.getElementById("list");
  for (let i = 1; i < 7; i++) {
    const box = document.createElement("div");
    box.innerHTML = `
    <div class="item">
        <div class="item1" id="quest${i}">
            <div class="num">${i}</div>
            <div class="ques">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ?
                <i class="icon-down ri-arrow-down-s-fill" id="icon-down${i}"></i>
             </div>
        </div>
        <div class="item2" id="answer${i}">
           <div class="box-answer">
                            On the other hand, we denounce with righteous indignation and dislike men who are so
                            beguiled
                            and demoralized by the charms of pleasure of the moment, so blinded by desire, that they
                            cannot
                            foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who
                            fail
                            in their duty through weakness of will, which is the same as saying through shrinking from
                            toil
                            and pain.
             </div>
        </div>
     </div>
    `;

    container.appendChild(box);
  }
}
list1();

function listAction(a, b, c) {
  const icon = document.getElementById(a);
  const item = document.getElementById(b);
  const quest = document.getElementById(c);
  quest.addEventListener("click", function () {
    console.log(a);
    if (item.style.maxHeight == "0px" || item.style.maxHeight == "") {
      icon.style.transform = "rotate(180deg)";
      item.style.maxHeight = item.scrollHeight + "px";
    } else {
      icon.style.transform = "rotate(0deg)";
      item.style.maxHeight = "0px";
    }
  });
}

for (let i = 1; i < 7; i++) {
  listAction(`icon-down${i}`, `answer${i}`, `quest${i}`);
}
