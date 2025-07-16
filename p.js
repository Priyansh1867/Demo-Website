const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const passwordInput = document.getElementById("password");
const strengthDiv = document.getElementById("strength");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const year = document.getElementById("year").value;
  const password = passwordInput.value;

  if (!name || !email || !branch || !year || !password) {
    message.style.color = "red";
    message.textContent = "❌ All fields are required!";
    return;
  }

  if (!email.includes("@")) {
    message.style.color = "red";
    message.textContent = "❌ Invalid email format!";
    return;
  }

  if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "❌ Password must be at least 6 characters!";
    return;
  }

  message.style.color = "green";
  message.textContent = "✅ Registration successful!";
});

// Optional: Password strength checker
passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;
  let strength = "";

  if (password.length < 6) {
    strength = "Weak ❌";
    strengthDiv.style.color = "red";
  } else if (password.match(/[a-z]/) && password.match(/[0-9]/) && password.length >= 8) {
    strength = "Strong ✅";
    strengthDiv.style.color = "green";
  } else {
    strength = "Medium ⚠️";
    strengthDiv.style.color = "orange";
  }

  strengthDiv.textContent = "Strength: " + strength;
});
