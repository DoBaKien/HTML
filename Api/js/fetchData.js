function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function formatDate(isoDate, yy) {
  const date = new Date(isoDate);

  // Lấy ngày, tháng, năm
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  if (yy != "") {
    return `${year}/${month}/${day}`;
  } else {
    return `${day}/${month}/${year}`;
  }
}

const token = getCookie("token");
async function getAllUser() {
  const response = await fetch("http://localhost:8080/api/v1/users", {
    method: "GET",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
}
async function SignUp(email, password, name) {
  try {
    const response = await fetch("http://localhost:8080/api/v1/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      warnUp.style.maxHeight = "65px";
      warnUp.innerHTML = data.err.message;
    } else {
      console.log("thanh cong");
    }
  } catch (err) {
    console.log(err);
  }
}
async function Login(email, password) {
  try {
    const response = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
      boxW.style.maxHeight = "65px";
      warn.innerHTML = data.errors;
    } else {
      console.log("Login successful:");
      document.cookie = `token=${data.token};path=/;`;
      window.location.href = "trangchu.html";
    }
  } catch (err) {
    console.log(err);
  }
}
async function getUser(id) {
  const response = await fetch(`http://localhost:8080/api/v1/getUser/${id}`, {
    method: "GET",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
}
async function EditUser(info) {
  try {
    const response = await fetch("http://localhost:8080/api/v1/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ info }),
    });
    const data = await response.json();
    if (!response.ok) {
      console.log(data);
    } else {
      console.log("Login successful:");
      console.log(data);
    }
  } catch (err) {
    console.log(err);
  }
}
