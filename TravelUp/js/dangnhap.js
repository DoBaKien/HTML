document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:8080/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      document.cookie = `token=${data.token};path=/;`;

      alert("Login successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Login failed");
    }
  });

document
  .getElementById("getResourceButton")
  .addEventListener("click", async function () {
    const token = getCookie("jwt");
    console.log(token);
    try {
      const response = await fetch("http://localhost:8080/api/v1/checklog", {
        method: "POST",
        headers: {
          Authorization: `${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch resource");
      }

      const data = await response.json();
      document.getElementById("resourceOutput").textContent = JSON.stringify(
        data,
        null,
        2
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch resource");
    }
  });

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
