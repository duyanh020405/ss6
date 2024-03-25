function login(event) {
  event.preventDefault(); // Prevent form submission
  var email = document.getElementById("Email").value;
  var password = document.getElementById("password").value;
  
  // Retrieve user data from localStorage
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Find the user with the provided email
  var user = users.find(user => user.email === email);

  // Check if user exists and password matches
  if (!user) {
      alert("User not found. Please register first.");
      return;
  }

  if (user.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
  }
  
  // Login successful
  alert("Login successful!");
  // Redirect to information page or wherever appropriate
  window.location.href = "information.html";
}

// Attach the login function to the submit event of the login form
document.getElementById("loginForm").addEventListener("submit", login);


document.getElementById("loginForm").addEventListener("submit", login);

  