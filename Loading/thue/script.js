var select1 = document.getElementById("rank1");
var rankLvl1 = document.getElementById("level1");
var select = document.getElementById("rank");
var rankLvl = document.getElementById("level");
var giaClient = document.getElementById("price");
var firstRank = "";
var firstLvl = 0;
var idRank1 = 0;
var idRank = 0;
var idlvl = 0;
var idlvl1 = 3;

function initializeSelect1() {
  // Lấy các giá trị tên duy nhất từ ranks và thêm vào select1
  const uniqueNames = [...new Set(ranks.map((rank) => rank.name))];

  uniqueNames.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.text = name;
    select.add(option);
  });
}
function updateLvl(selectedName) {
  rankLvl.innerHTML = ""; // Xóa các tùy chọn hiện tại

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.text = "Chọn cấp độ";
  rankLvl.add(defaultOption);

  // Tìm hạng đã chọn
  const selectedRank = ranks.find((rank) => rank.name === selectedName);

  if (selectedRank) {
    for (let level = selectedRank.level; level > 0; level--) {
      const option = document.createElement("option");
      option.value = level;
      option.text = `${selectedName + " " + level}`;
      rankLvl.add(option);
    }
  }
}

function updateRank1() {
  select1.textContent = "";
  const index = ranks.findIndex((rank) => rank.name === select.value);

  if (index !== -1) {
    let checkRank;
    checkRank = ranks.slice();
    if (rankLvl.value == "1") {
      checkRank.splice(0, index + 1);
    } else {
      checkRank.splice(0, index);
    }
    firstRank = checkRank[0].name;
    idRank = checkRank[0].id;

    checkRank.forEach((rank) => {
      const option = document.createElement("option");
      option.value = rank.name;
      option.text = rank.name;
      select1.add(option);
    });
  }
}

function updateLvl1(a) {
  rankLvl1.textContent = "";

  const selectedRank = ranks.find((rank) => rank.name === firstRank);
  idRank1 = selectedRank.id;

  if (selectedRank) {
    switch (a) {
      case "3":
        a = 2;
        break;
      case "2":
        a = 3;
        break;
      case "4":
        a = 1;
        break;
      default:
        a = 0;
    }
    for (let level = selectedRank.level - a; level > 0; level--) {
      const option = document.createElement("option");
      option.value = level;
      option.text = `${firstRank + " " + level}`;
      rankLvl1.add(option);
    }
  }
}

select.addEventListener("change", function () {
  updateLvl(this.value);
});

rankLvl.addEventListener("change", function () {
  idlvl = this.value;
  idlvl1 = this.value - 1;
  updateRank1();
  updateLvl1(this.value);
  priceSum();
});

select1.addEventListener("change", function () {
  firstRank = this.value;
  updateLvl1();
  priceSum();
});

rankLvl1.addEventListener("change", function () {
  idlvl1 = this.value;
  priceSum();
});

function priceSum() {
  let firstPrice = 0;
  let endPrice = 0;
  if (select.value == firstRank) {
    let price = 0;

    const found = ranks.find((element) => element.name == firstRank);
    price = found.price * (idlvl - idlvl1);

    giaClient.textContent = price;

    return;
  }
  const found = ranks.find((element) => element.name == select.value);
  if (found) {
    firstPrice = found.price * Number(rankLvl.value);
  }

  const found1 = ranks.find((element) => element.name == firstRank);
  if (found1) {
    switch (rankLvl1.value) {
      case "1":
        endPrice = found1.price * 4;

        break;
      case "2":
        endPrice = found1.price * 3;

        break;
      case "3":
        endPrice = found1.price * 2;

        break;
      case "4":
        endPrice = found1.price;

        break;
      default:
        endPrice = 0;
    }
  }

  const filteredRanks = ranks.filter(
    (rank) => rank.id > idRank && rank.id < idRank1
  );

  const totalPrice = filteredRanks.reduce(
    (sum, rank) => sum + rank.price * 4,
    0
  );

  giaClient.textContent = firstPrice + totalPrice + endPrice;
}

initializeSelect1();
