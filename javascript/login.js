const userInput = document.getElementById("user");
const password = document.getElementById("password");
const button = document.getElementById("button");

function validateForm() {
  const inputValue = userInput.value.length;
  const passwordValue = password.value.length;

  if (inputValue >= 5 && inputValue <= 10 && passwordValue >= 5 && passwordValue <= 10) {
    button.classList.remove("cursor-not-allowed", "opacity-50");
    button.disabled = false;
  } else {
    button.classList.add("cursor-not-allowed", "opacity-50");
    button.disabled = true;
  }
}

userInput.addEventListener("keyup", validateForm);
password.addEventListener("keyup", validateForm);

button.addEventListener("click", async (e) => {
  e.preventDefault();

  const username = userInput.value;
  const pwd = password.value;

  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password: pwd })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Invalid login.");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong!");
  }
});
