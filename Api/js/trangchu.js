document
  .getElementById("changeForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const token = getCookie("token");
    const oldPassword = document.getElementById("password").value;
    const newPassword = document.getElementById("password1").value;
    console.log(JSON.stringify({ oldPassword, newPassword }));

    try {
      const response = await fetch("http://localhost:8080/api/v1/change", {
        method: "POST",
        body: JSON.stringify({ oldPassword, newPassword }),
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });

async function delete_cookie() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.log("fail");
    } else {
      document.cookie =
        "token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      window.location.href = "index.html";
    }
  } catch (err) {
    console.log(err);
  }
}

function getCookie() {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; token=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function checkVisible() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function checkVisible1() {
  var x = document.getElementById("password1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const tableBody = document.querySelector("tbody");
  const data = await getAllUser();
  console.log(data);
  data.forEach((item) => {
    const row = document.createElement("tr");
    const columns = ["_id", "name", "email", "createdAt"];

    columns.values(item).forEach((column) => {
      const cell = document.createElement("td");
      cell.textContent =
        column === "createdAt" ? formatDate(item[column]) : item[column];

      row.appendChild(cell);
    });

    const actionCell = document.createElement("td");

    // Tạo nút "Edit"
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      window.location.href = `./detail.html?value=${item._id}`;
    });

    // Tạo nút "Delete"
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      console.log("Xóa " + item._id);
    });

    actionCell.appendChild(editButton);
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    tableBody.appendChild(row);
  });
});
