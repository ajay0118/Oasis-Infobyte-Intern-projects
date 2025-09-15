// Handle Registration
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("regUser").value.trim();
    const password = document.getElementById("regPass").value.trim();
    const msg = document.getElementById("regMsg");

    if (localStorage.getItem(username)) {
      msg.textContent = "⚠️ Username already exists!";
      msg.style.color = "yellow";
    } else {
      localStorage.setItem(username, password);
      msg.textContent = "✅ Registered successfully!";
      msg.style.color = "lightgreen";
    }
  });
}

// Handle Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUser").value.trim();
    const password = document.getElementById("loginPass").value.trim();
    const msg = document.getElementById("loginMsg");

    if (localStorage.getItem(username) === password) {
      sessionStorage.setItem("loggedInUser", username);
      window.location.href = "secured.html";
    } else {
      msg.textContent = "❌ Invalid username or password!";
      msg.style.color = "red";
    }
  });
}

// Protect Secured Page
if (window.location.pathname.includes("secured.html")) {
  const loggedInUser = sessionStorage.getItem("loggedInUser");
  if (!loggedInUser) {
    alert("⚠️ Please login first!");
    window.location.href = "index.html";
  }
}

// Logout
function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}
